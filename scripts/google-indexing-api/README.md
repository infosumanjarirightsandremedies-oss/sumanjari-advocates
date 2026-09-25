# Google Indexing API — bulk submit

## What it does

Submits URLs to Google's Indexing API (using a service account) to ask Google to recrawl them. By default it reads every URL from the live sitemap. It remembers what's already been submitted in `submission_history.json`, so re-running the same command only pushes URLs that are new or past the cooldown window — safe to run repeatedly without wasting quota. Batches requests in groups of 100 and retries on quota errors, per Google's documented pattern.

## Usage

```bash
pip install -r requirements.txt

# Submit every URL in the live sitemap (default), skipping anything already submitted recently
python3 bulk_index.py --key-file /path/to/service_account.json

# Preview what would be submitted without calling the API
python3 bulk_index.py --key-file /path/to/service_account.json --dry-run

# Force a full resubmit, ignoring history
python3 bulk_index.py --key-file /path/to/service_account.json --force

# Submit URLs from a text file (one per line) instead of the sitemap
python3 bulk_index.py --key-file /path/to/service_account.json --urls-file urls.txt

# Submit a single URL, or mark one as removed
python3 bulk_index.py --key-file /path/to/service_account.json --url https://www.sumanjariadvocates.com/blog/some-post
python3 bulk_index.py --key-file /path/to/service_account.json --url https://www.sumanjariadvocates.com/old-page --type URL_DELETED
```

Other flags: `--sitemap <url>` (custom sitemap), `--cooldown-days N` (default 7), `--out` / `--history-file` (change where results/history are written).
