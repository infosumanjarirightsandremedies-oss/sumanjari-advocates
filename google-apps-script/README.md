# Blogs Google Apps Script

Backend that powers the blog. It reads the `Blogs` sheet, renders each row's
linked Google Doc into structured blocks, and returns JSON consumed by
`src/lib/blogs.ts` via the deployed `/exec` URL.

`Code.gs` here is the source of truth — the live copy is pasted into the Apps
Script editor and deployed as a Web App.

## Two endpoints (meta / content split)

No request renders more than one Doc, so nothing approaches the 6-minute limit:

| Endpoint | Returns | Opens Docs? | Used by |
|---|---|---|---|
| `?resource=blogs` | metadata for every published post (no content) | no | blog list, sitemap, llms.txt, service pages, related posts |
| `?resource=post&slug=<slug>` | one published post **with** rendered content | one | `/blog/[slug]` page body |

Rendering happens one post at a time, driven by each `/blog/[slug]` page. The
frontend pre-renders only the newest ~12 at build time and renders the rest on
first visit, so a build's `?resource=post` fan-out stays small (a gate + retry
in `src/lib/blogs.ts` bounds it further).

## Why this version is faster

The original opened each Doc with `DocumentApp.openById()` and walked it
element-by-element — the slowest Apps Script API — once per post **in series**,
which pushed total runtime past 100s. This version:

1. **Splits meta from content** so the list/sitemap/service pages open zero Docs
   and each blog page opens exactly one.
2. **Docs Advanced Service** — `Docs.Documents.get(docId)` fetches the whole doc
   in one RPC instead of dozens of lazy `DocumentApp` round-trips.
3. **Per-doc cache** keyed by the doc's `getLastUpdated()` time
   (`doc_<docId>_<mtime>`), so unchanged docs are never re-parsed and editing a
   Doc auto-busts its entry. Add `&fresh=1` to force a re-render.

Metadata isn't cached in Apps Script — it's a single fast sheet read, kept live
so a `Status` flip shows up immediately (Part 2 relies on that).

## Deploy steps

1. Open the Apps Script project bound to the Blogs spreadsheet.
2. **Services (+)** → add **Google Docs API** (identifier must be `Docs`).
3. Replace the project code with `Code.gs` from this folder.
4. **Deploy → Manage deployments** → edit the existing Web App deployment →
   **New version** (keep the same deployment so the `/exec` URL is unchanged).
5. Execute as: *Me*. Who has access: *Anyone* (matches current setup).
6. Verify:
   - `${BLOG_SCRIPT_URL}?resource=blogs` → array of metadata (no `content`).
   - `${BLOG_SCRIPT_URL}?resource=post&slug=<a-real-slug>&fresh=1` → one post with
     a `content` array of blocks (not an `error` block).
   - `${BLOG_SCRIPT_URL}?resource=post&slug=does-not-exist` → `{"error":"not found"}`.

> Keep the deployment URL stable — `src/lib/blogs.ts` hardcodes it. Creating a
> brand-new deployment changes the URL and would require a frontend update.

## Part 2 — instant publish/unpublish from the sheet

Editing a row's `Status` (or adding/removing a row) fires `onSheetChange`, which:

1. pings `GET {SITE_URL}/api/revalidate?secret=…` → the frontend runs
   `revalidateTag('blogs')`, dropping its cached data for the list, every post,
   the service pages, sitemap and llms.txt; and
2. on **publish**, pre-warms this script's doc cache **and** GETs the pages the
   post appears on (`/blog/<slug>`, `/blog`, `/services/<category>`), so the
   first visitor already hits a warm cache — held for the frontend's 1-week TTL.

Because the frontend caches for a week but the trigger invalidates on demand,
sheet changes appear within seconds while unrelated traffic never re-hits the
backend.

### One-time setup for Part 2

1. **Shared secret** (identical in both places):
   - Apps Script → *Project Settings → Script Properties* → `FLUSH_TOKEN = <random>`
   - Vercel → *Settings → Environment Variables* → `REVALIDATE_SECRET = <same>`
2. Run **`installTriggers`** once in the editor and authorize (wires
   `onSheetChange` to onEdit + onChange).
3. Deploy the frontend so `/api/revalidate` is live.

### Doc-body edits

Editing text **inside a Doc** isn't a sheet change, so it doesn't fire the
trigger; it surfaces when the 1-week TTL lapses. To push it live now, hit either
`{SITE_URL}/api/revalidate?secret=<secret>` or
`{WEB_APP_URL}?resource=flush&token=<FLUSH_TOKEN>`.

## Tuning

- `DOC_CACHE_TTL` is in seconds; `CacheService` max is `21600` (6h).
- `CacheService` values are capped at 100KB per key. Very large docs skip the
  cache (wrapped in try/catch) and still render correctly, just uncached.
- Frontend TTL is `REVALIDATE_SECONDS` (7 days) in `src/lib/blogs.ts` plus the
  per-page `revalidate` exports — safe to be long because Part 2 invalidates on
  demand.
