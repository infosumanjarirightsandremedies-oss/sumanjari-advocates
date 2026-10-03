#!/usr/bin/env python3
"""Incremental, throttled sync of published blogs: Google Apps Script -> Supabase `blog_snapshots`.

Reads the catalog once, fetches only posts that are new or whose catalog entry changed,
deletes only posts that are no longer published, and calls Apps Script one request at a
time with a pause and backoff so it is never overloaded. Safe to rerun after a failure.

Usage:
  python3 scripts/supabase-blog-cache/sync.py                   # incremental sync
  python3 scripts/supabase-blog-cache/sync.py --dry-run         # show the plan only
  python3 scripts/supabase-blog-cache/sync.py --force <slug>..  # refetch these posts (e.g. after a Doc text edit)
  python3 scripts/supabase-blog-cache/sync.py --revalidate http://localhost:3000
"""
import argparse
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# Keep in sync with BLOG_SCRIPT_URL in src/lib/blogs.ts.
BLOG_SCRIPT_URL = (
    "https://script.google.com/macros/s/"
    "AKfycbyNJgTZgENxyi_mHtXorG2BA_Vce7M2IV1ng4B572ymDx9nrAwZXRDeZc3_ZOXkuDm_/exec"
)
TABLE = "blog_snapshots"
CATALOG_KEY = "catalog"
POST_PREFIX = "post:"
META_FIELDS = ("slug", "title", "category", "excerpt", "thumbnail", "order", "publishedDate")

TIMEOUT_S = 90
MAX_ATTEMPTS = 4
TRANSIENT_STATUS = {404, 408, 429, 500, 502, 503, 504}  # Apps Script answers 404 under load


def load_env():
    env_file = ROOT / ".env.local"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                name, value = line.split("=", 1)
                os.environ.setdefault(name.strip(), value.strip().strip("'\""))
    missing = [n for n in ("NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY") if not os.environ.get(n)]
    if missing:
        sys.exit(f"Missing in environment or .env.local: {', '.join(missing)}")
    return os.environ["NEXT_PUBLIC_SUPABASE_URL"].rstrip("/"), os.environ["SUPABASE_SERVICE_ROLE_KEY"]


def request(method, url, headers=None, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method, headers=headers or {})
    with urllib.request.urlopen(req, timeout=TIMEOUT_S) as res:
        raw = res.read()
        return json.loads(raw) if raw else None


def fetch_script(params, label, pause):
    url = f"{BLOG_SCRIPT_URL}?{urllib.parse.urlencode(params)}"
    for attempt in range(1, MAX_ATTEMPTS + 1):
        started = time.monotonic()
        try:
            data = request("GET", url)
            print(f"  {label}: ok ({time.monotonic() - started:.1f}s)")
            return data
        except urllib.error.HTTPError as err:
            transient, reason = err.code in TRANSIENT_STATUS, f"HTTP {err.code}"
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as err:
            transient, reason = True, type(err).__name__
        if not transient or attempt == MAX_ATTEMPTS:
            raise RuntimeError(f"{label}: {reason}")
        wait = pause * 2 ** attempt
        print(f"  {label}: {reason}, retry {attempt}/{MAX_ATTEMPTS - 1} in {wait:.0f}s")
        time.sleep(wait)


class Supabase:
    def __init__(self, url, key):
        self.base = f"{url}/rest/v1/{TABLE}"
        self.headers = {"apikey": key, "Authorization": f"Bearer {key}", "Content-Type": "application/json"}

    def stored_post_meta(self):
        """slug -> stored catalog fields of every saved post (content is not downloaded)."""
        cols = ",".join(f"{f}:payload->{f}" for f in META_FIELDS)
        rows = request("GET", f"{self.base}?select=key,{cols}&key=like.{POST_PREFIX}*", self.headers) or []
        return {row["key"][len(POST_PREFIX):]: {f: row.get(f) for f in META_FIELDS} for row in rows}

    def upsert(self, key, payload):
        headers = {**self.headers, "Prefer": "resolution=merge-duplicates,return=minimal"}
        row = {"key": key, "payload": payload, "synced_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())}
        request("POST", f"{self.base}?on_conflict=key", headers, [row])

    def delete_posts(self, slugs):
        keys = ",".join(json.dumps(POST_PREFIX + slug) for slug in slugs)
        headers = {**self.headers, "Prefer": "return=minimal"}
        request("DELETE", f"{self.base}?key=in.({urllib.parse.quote(keys)})", headers)


def validate_post(slug, post):
    if not isinstance(post, dict) or post.get("error"):
        raise RuntimeError("not published / not found")
    if post.get("slug") != slug or not isinstance(post.get("content"), list) or not post["content"]:
        raise RuntimeError("empty or malformed content")
    # Apps Script reports Doc render failures as an 'error' block inside a 200.
    if any(isinstance(block, dict) and block.get("type") == "error" for block in post["content"]):
        raise RuntimeError("Doc failed to render (error block)")


def revalidate(site_url):
    secret = os.environ.get("REVALIDATE_SECRET")
    if not secret:
        print("REVALIDATE_SECRET not set; skipping revalidate")
        return
    try:
        request("GET", f"{site_url.rstrip('/')}/api/revalidate?{urllib.parse.urlencode({'secret': secret})}")
        print(f"Revalidated {site_url}")
    except Exception as err:  # noqa: BLE001 - sync already succeeded
        print(f"Revalidate {site_url} failed: {err}")


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--dry-run", action="store_true", help="show what would change without writing")
    parser.add_argument("--force", nargs="+", default=[], metavar="SLUG", help="refetch these posts")
    parser.add_argument("--pause", type=float, default=2.0, help="seconds between Apps Script requests")
    parser.add_argument("--revalidate", metavar="SITE_URL", help="call SITE_URL/api/revalidate when done")
    args = parser.parse_args()

    db = Supabase(*load_env())

    print("Fetching catalog...")
    catalog = fetch_script({"resource": "blogs"}, "catalog", args.pause)
    if not isinstance(catalog, list) or not catalog or not all(isinstance(p, dict) and p.get("slug") for p in catalog):
        sys.exit("Catalog is empty or malformed; aborting so nothing gets deleted.")
    published = {post["slug"]: {f: post.get(f) for f in META_FIELDS} for post in catalog}

    unknown = [slug for slug in args.force if slug not in published]
    if unknown:
        sys.exit(f"Not in published catalog: {', '.join(unknown)}")

    stored = db.stored_post_meta()
    to_fetch = [slug for slug, meta in published.items() if slug in args.force or stored.get(slug) != meta]
    to_delete = sorted(set(stored) - set(published))
    print(f"Published {len(published)} | saved {len(stored)} | fetch {len(to_fetch)} | delete {len(to_delete)}")

    if args.dry_run:
        for slug in to_fetch:
            print(f"  fetch  {slug} ({'new' if slug not in stored else 'changed/forced'})")
        for slug in to_delete:
            print(f"  delete {slug}")
        return

    failed = []
    for index, slug in enumerate(to_fetch, 1):
        time.sleep(args.pause)
        try:
            post = fetch_script({"resource": "post", "slug": slug}, f"[{index}/{len(to_fetch)}] {slug}", args.pause)
            validate_post(slug, post)
            db.upsert(POST_PREFIX + slug, post)
        except Exception as err:  # noqa: BLE001 - keep going; report at the end
            print(f"  skipped {slug}: {err}")
            failed.append(slug)

    db.upsert(CATALOG_KEY, catalog)
    if to_delete:
        db.delete_posts(to_delete)
        print(f"Deleted unpublished: {', '.join(to_delete)}")

    print(f"\nDone: fetched {len(to_fetch) - len(failed)}, failed {len(failed)}, deleted {len(to_delete)}")
    if failed:
        print(f"Rerun to retry the failed posts (saved posts are skipped): {' '.join(failed)}")
    if args.revalidate:
        revalidate(args.revalidate)
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
