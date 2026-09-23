# Blogs Google Apps Script

Backend that powers the blog. It reads the `Blogs` sheet, renders each row's
linked Google Doc into structured blocks, and returns JSON consumed by
`src/lib/blogs.ts` via the deployed `/exec` URL.

`Code.gs` here is the source of truth — the live copy is pasted into the Apps
Script editor and deployed as a Web App.

## Why this version is faster

The original opened each Doc with `DocumentApp.openById()` and walked it
element-by-element. `DocumentApp` is the slowest Apps Script API: opening costs
seconds and each element access is a lazy round-trip. Done once per published
post in series, that pushed total runtime past 100s.

This version:

1. **Docs Advanced Service** — `Docs.Documents.get(docId)` fetches the whole doc
   as one JSON payload in a single RPC instead of dozens of lazy calls.
2. **Per-doc cache** keyed by the doc's `getLastUpdated()` time, so unchanged
   docs are never re-parsed. Changing a Doc naturally busts its cache.
3. **Full-response cache** (6h) so bursts of requests don't each re-render.

## Deploy steps

1. Open the Apps Script project bound to the Blogs spreadsheet.
2. **Services (+)** → add **Google Docs API** (identifier must be `Docs`).
3. Replace the project code with `Code.gs` from this folder.
4. **Deploy → Manage deployments** → edit the existing Web App deployment →
   **New version** (keep the same deployment so the `/exec` URL is unchanged).
5. Execute as: *Me*. Who has access: *Anyone* (matches current setup).
6. Verify: open `${BLOG_SCRIPT_URL}?resource=blogs` and confirm JSON returns.

> Keep the deployment URL stable — `src/lib/blogs.ts` hardcodes it. Creating a
> brand-new deployment changes the URL and would require a frontend update.

## Tuning

- Cache TTLs are in seconds; `CacheService` max is `21600` (6h).
- `CacheService` values are capped at 100KB per key. Very large docs skip the
  cache (wrapped in try/catch) and still render correctly, just uncached.
