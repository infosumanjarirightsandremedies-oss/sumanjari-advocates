#!/usr/bin/env python3
"""Bulk-submit URLs to Google's Indexing API using a service account.

Follows Google's documented pattern for the Indexing API:
https://developers.google.com/search/apis/indexing-api/v3/quickstart
https://developers.google.com/search/apis/indexing-api/v3/using-quotas (batching)

Setup (one-time, in Google Cloud Console + Search Console):
  1. Create/select a GCP project, enable the "Web Search Indexing API".
  2. Create a service account, add a JSON key, download it.
  3. In Search Console, add the service account's email as an Owner of the
     verified property (Settings -> Users and permissions -> Add user).

Re-running the same command is safe: a local history file
(submission_history.json) remembers what was already submitted, so repeat
runs only push URLs that are new or past the cooldown window instead of
re-spending quota on the same 145 URLs every time. Use --force to bypass it.

Usage:
  python3 bulk_index.py --key-file service_account.json
  python3 bulk_index.py --key-file service_account.json --sitemap https://www.sumanjariadvocates.com/sitemap.xml
  python3 bulk_index.py --key-file service_account.json --urls-file urls.txt
  python3 bulk_index.py --key-file service_account.json --url https://example.com/page --type URL_UPDATED
  python3 bulk_index.py --key-file service_account.json --dry-run
  python3 bulk_index.py --key-file service_account.json --force
"""
from __future__ import annotations

import argparse
import json
import sys
import time
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SCOPES = ["https://www.googleapis.com/auth/indexing"]
API_NAME = "indexing"
API_VERSION = "v3"
DEFAULT_SITEMAP = "https://www.sumanjariadvocates.com/sitemap.xml"
DEFAULT_HISTORY_FILE = "submission_history.json"
DEFAULT_COOLDOWN_DAYS = 7
BATCH_SIZE = 100  # Google's documented batch limit for this endpoint
BATCH_PAUSE_SECONDS = 1  # be polite between batches; daily quota is the real limit
MAX_RETRIES = 3


def load_history(path: str) -> dict:
    p = Path(path)
    if p.exists():
        return json.loads(p.read_text())
    return {}


def save_history(path: str, history: dict) -> None:
    Path(path).write_text(json.dumps(history, indent=2, sort_keys=True))


def filter_by_history(urls: list[str], history: dict, notify_type: str, cooldown_days: int) -> tuple[list[str], int]:
    if cooldown_days <= 0:
        return urls, 0
    cutoff = datetime.now(timezone.utc) - timedelta(days=cooldown_days)
    due, skipped = [], 0
    for url in urls:
        entry = history.get(url)
        if entry and entry.get("type") == notify_type and datetime.fromisoformat(entry["last_submitted"]) > cutoff:
            skipped += 1
        else:
            due.append(url)
    return due, skipped


def load_urls_from_sitemap(sitemap_url: str) -> list[str]:
    with urllib.request.urlopen(sitemap_url) as resp:
        data = resp.read()
    root = ET.fromstring(data)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return [loc.text.strip() for loc in root.findall(".//sm:loc", ns) if loc.text]


def load_urls_from_file(path: str) -> list[str]:
    lines = Path(path).read_text().splitlines()
    return [line.strip() for line in lines if line.strip() and not line.strip().startswith("#")]


def build_service(key_file: str):
    credentials = service_account.Credentials.from_service_account_file(key_file, scopes=SCOPES)
    return build(API_NAME, API_VERSION, credentials=credentials, cache_discovery=False)


def submit_batch(service, urls: list[str], notify_type: str, results: dict) -> None:
    def callback(request_id, response, exception):
        url = urls[int(request_id)]
        if exception is not None:
            results["failed"].append({"url": url, "error": str(exception)})
        else:
            results["succeeded"].append(url)

    for attempt in range(1, MAX_RETRIES + 1):
        batch = service.new_batch_http_request(callback=callback)
        for i, url in enumerate(urls):
            batch.add(
                service.urlNotifications().publish(body={"url": url, "type": notify_type}),
                request_id=str(i),
            )
        try:
            batch.execute()
            return
        except HttpError as e:
            if e.resp.status == 429 and attempt < MAX_RETRIES:
                wait = 2 ** attempt
                print(f"  Quota/rate limited (429), retrying batch in {wait}s...", file=sys.stderr)
                time.sleep(wait)
                continue
            for url in urls:
                results["failed"].append({"url": url, "error": str(e)})
            return


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--key-file", required=True, help="Path to the service account JSON key")
    parser.add_argument("--type", choices=["URL_UPDATED", "URL_DELETED"], default="URL_UPDATED")
    source = parser.add_mutually_exclusive_group()
    source.add_argument("--sitemap", help=f"Sitemap URL to pull <loc> entries from (default: {DEFAULT_SITEMAP})")
    source.add_argument("--urls-file", help="Path to a text file with one URL per line")
    source.add_argument("--url", action="append", dest="urls", help="A single URL (repeatable)")
    parser.add_argument("--out", default="index_results.json", help="Where to write the JSON results report")
    parser.add_argument("--history-file", default=DEFAULT_HISTORY_FILE, help="Where to track already-submitted URLs")
    parser.add_argument(
        "--cooldown-days",
        type=int,
        default=DEFAULT_COOLDOWN_DAYS,
        help="Skip URLs re-submitted (same type) within this many days (0 disables the check)",
    )
    parser.add_argument("--force", action="store_true", help="Ignore history and submit every matched URL")
    parser.add_argument("--dry-run", action="store_true", help="List URLs that would be submitted, no API calls")
    args = parser.parse_args()

    if args.urls_file:
        urls = load_urls_from_file(args.urls_file)
    elif args.urls:
        urls = args.urls
    else:
        urls = load_urls_from_sitemap(args.sitemap or DEFAULT_SITEMAP)

    urls = sorted(set(urls))
    if not urls:
        print("No URLs to submit.", file=sys.stderr)
        return 1

    print(f"Loaded {len(urls)} URL(s), notify type={args.type}")

    history = load_history(args.history_file)
    skipped = 0
    if not args.force:
        urls, skipped = filter_by_history(urls, history, args.type, args.cooldown_days)
    if skipped:
        print(f"Skipping {skipped} URL(s) already submitted within the last {args.cooldown_days} day(s) (use --force to resubmit)")
    if not urls:
        print("Nothing new to submit.")
        return 0

    if args.dry_run:
        for url in urls:
            print(url)
        return 0

    service = build_service(args.key_file)
    results: dict = {"succeeded": [], "failed": []}

    for i in range(0, len(urls), BATCH_SIZE):
        chunk = urls[i : i + BATCH_SIZE]
        print(f"Submitting batch {i // BATCH_SIZE + 1} ({len(chunk)} URLs)...")
        submit_batch(service, chunk, args.type, results)
        if i + BATCH_SIZE < len(urls):
            time.sleep(BATCH_PAUSE_SECONDS)

    Path(args.out).write_text(json.dumps(results, indent=2))

    now_iso = datetime.now(timezone.utc).isoformat()
    for url in results["succeeded"]:
        history[url] = {"last_submitted": now_iso, "type": args.type}
    save_history(args.history_file, history)

    print(f"\nDone: {len(results['succeeded'])} succeeded, {len(results['failed'])} failed.")
    print(f"Report written to {args.out}, history updated in {args.history_file}")
    if results["failed"]:
        print("Sample failure:", results["failed"][0]["error"], file=sys.stderr)
    return 0 if not results["failed"] else 2


if __name__ == "__main__":
    sys.exit(main())
