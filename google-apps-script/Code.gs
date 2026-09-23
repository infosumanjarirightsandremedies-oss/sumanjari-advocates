/**
 * Blogs backend — two endpoints so no request ever renders more than one Doc.
 *
 *   ?resource=blogs              -> metadata for every published post (NO content, opens 0 Docs)
 *   ?resource=post&slug=<slug>   -> one published post WITH its rendered content (opens 1 Doc)
 *
 * Append &fresh=1 to a post request to bypass the per-doc cache (debugging /
 * right after editing a Doc).
 *
 * SETUP (once): Editor -> Services -> add "Google Docs API" (identifier `Docs`).
 * Enabling that advanced service also grants the OAuth scope renderDoc needs.
 * Deploy as Web app, Execute as: Me, Who has access: Anyone.
 */

var BLOG_SHEET_ID = '1zaJeXJINPrpIuqi5BiG0c7pv9k_dJGmCsrWENAQ4E4M'; // Blogs spreadsheet
var BLOG_SHEET_NAME = 'Blogs';
var DOC_CACHE_TTL = 21600; // seconds; CacheService max = 6h. Safe to be long: the key includes the Doc's mtime.
var SITE_URL = 'https://www.sumanjariadvocates.com'; // frontend, for revalidate + warm pings

function doGet(e) {
  var params = (e && e.parameter) || {};
  var resource = String(params.resource || '').toLowerCase();
  var fresh = String(params.fresh || '') === '1';

  if (resource === 'blogs') return json(getPublishedMeta());
  if (resource === 'post') return json(getPost(params.slug, params.docId, fresh));
  if (resource === 'flush') return json(handleFlush(params));

  return json({ error: 'Unknown resource' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// --- Sheet -> published rows -------------------------------------------------

// Read the Blogs sheet once; return published rows as objects, sorted by Order.
// Not cached: it's a single fast read, and keeping it live means a Status flip
// in the sheet is reflected immediately (Part 2 relies on that).
function readPublishedRows() {
  var sheet = SpreadsheetApp.openById(BLOG_SHEET_ID).getSheetByName(BLOG_SHEET_NAME);
  var data = sheet.getDataRange().getValues();
  var headers = data[0].map(function (h) { return String(h).trim(); }); // tolerate "Thumbnail " etc.

  return data.slice(1)
    .map(function (row) {
      var obj = {};
      headers.forEach(function (h, i) { obj[h] = row[i]; });
      return obj;
    })
    .filter(function (obj) {
      return String(obj.Status).trim().toLowerCase() === 'published';
    })
    .sort(function (a, b) {
      return (Number(a.Order) || 0) - (Number(b.Order) || 0);
    });
}

function toMeta(obj) {
  return {
    slug: obj.Slug,
    title: obj.Title,
    category: obj.Category,
    excerpt: obj.Excerpt,
    thumbnail: obj.Thumbnail || null,
    order: Number(obj.Order) || 0,
    publishedDate: obj.PublishedDate
  };
}

// ?resource=blogs — metadata only; opens no Docs.
function getPublishedMeta() {
  return readPublishedRows().map(toMeta);
}

// ?resource=post — one published post with rendered content. Looks up by slug
// (preferred) or docId. Unknown/unpublished -> { error: 'not found' } so drafts
// can't be pulled directly.
function getPost(slug, docId, fresh) {
  var wantSlug = slug ? String(slug).trim() : '';
  var wantDoc = docId ? String(docId).trim() : '';
  if (!wantSlug && !wantDoc) return { error: 'not found' };

  var rows = readPublishedRows();
  var match = null;
  for (var i = 0; i < rows.length; i++) {
    if (wantSlug && String(rows[i].Slug).trim() === wantSlug) { match = rows[i]; break; }
    if (!wantSlug && wantDoc && String(rows[i].DocId).trim() === wantDoc) { match = rows[i]; break; }
  }
  if (!match) return { error: 'not found' };

  var post = toMeta(match);
  post.content = getDocContent(match.DocId, fresh);
  return post;
}

// --- Doc -> blocks (cached by docId + last-modified time) --------------------

function getDocContent(docId, fresh) {
  if (!docId) return [];

  var cache = CacheService.getScriptCache();

  // Key on the Doc's mtime so an edit auto-invalidates the entry — no manual flush.
  var stamp;
  try {
    stamp = DriveApp.getFileById(docId).getLastUpdated().getTime();
  } catch (err) {
    stamp = 'na';
  }
  var key = 'doc_' + docId + '_' + stamp;

  if (!fresh) {
    var hit = cache.get(key);
    if (hit) {
      try { return JSON.parse(hit); } catch (err) { /* corrupt entry — re-render */ }
    }
  }

  var blocks = renderDoc(docId);

  try {
    cache.put(key, JSON.stringify(blocks), DOC_CACHE_TTL); // silently skipped if >100KB
  } catch (err) { /* too big to cache; still returned below */ }

  return blocks;
}

// Parse a Doc via the advanced Docs service (one RPC) into the block shapes the
// frontend renders: heading | paragraph | list-item | table.
function renderDoc(docId) {
  var blocks = [];
  try {
    var content = (Docs.Documents.get(docId).body || {}).content || [];

    content.forEach(function (el) {
      if (el.paragraph) {
        var para = el.paragraph;
        var text = paragraphText(para).trim();
        if (!text) return;

        if (para.bullet) {
          blocks.push({ type: 'list-item', text: text });
          return;
        }

        var style = (para.paragraphStyle && para.paragraphStyle.namedStyleType) || '';
        var isHeading = style === 'HEADING_1' || style === 'HEADING_2';
        blocks.push({ type: isHeading ? 'heading' : 'paragraph', text: text });

      } else if (el.table) {
        var rows = (el.table.tableRows || []).map(function (tr) {
          return (tr.tableCells || []).map(function (tc) {
            return (tc.content || []).map(function (ce) {
              return ce.paragraph ? paragraphText(ce.paragraph) : '';
            }).join('').trim();
          });
        });
        blocks.push({ type: 'table', rows: rows });
      }
    });
  } catch (error) {
    blocks.push({ type: 'error', text: 'Failed to load document content. Check Doc ID and permissions.' });
  }
  return blocks;
}

function paragraphText(paragraph) {
  return (paragraph.elements || []).map(function (pe) {
    return (pe.textRun && pe.textRun.content) ? pe.textRun.content : '';
  }).join('');
}

// ============================================================================
// Part 2 — instant publish/unpublish from the sheet
//
// Editing a row's Status (or adding/removing a row) fires onSheetChange, which
// (1) tells the frontend to drop its cached 'blogs' data, and (2) on publish,
// pre-warms both this script's doc cache and the pages the post appears on so
// the first visitor gets a cache hit — held for the frontend's 1-week TTL.
//
// SETUP (once):
//   1. Project Settings -> Script Properties -> FLUSH_TOKEN = <random secret>
//      (must equal Vercel env REVALIDATE_SECRET).
//   2. Run installTriggers() once from the editor and authorize.
// ============================================================================

// Mirror of src/lib/blogs.ts CATEGORY_TO_SERVICE_SLUG — which service page shows
// each category's posts, so we can warm it on publish.
var CATEGORY_TO_SERVICE_SLUG = {
  'RERA': 'rera',
  'Civil Matters': 'civil-matters',
  'Criminal Matters': 'criminal-matters',
  'Family & Matrimonial Matters': 'family-matrimonial-matters',
  'Property & Land Matters': 'property-land-matters',
  'Banking & Recovery Matters': 'banking-recovery-matters',
  'Company & Corporate Matters': 'company-corporate-matters',
  'Constitutional & Writ Matters': 'constitutional-writ-matters',
  'Consumer & Motor Accident Matters': 'consumer-motor-accident-matters',
  'Service & Employment Matters': 'service-employment-matters',
  'Tax & Revenue Matters': 'tax-revenue-matters'
};

// Run ONCE from the editor. Wires onSheetChange to both cell edits (onEdit) and
// structural changes like add/remove row (onChange). Idempotent — clears its own
// prior triggers first so re-running doesn't stack duplicates.
function installTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'onSheetChange') ScriptApp.deleteTrigger(t);
  });
  var ss = SpreadsheetApp.openById(BLOG_SHEET_ID);
  ScriptApp.newTrigger('onSheetChange').forSpreadsheet(ss).onEdit().create();
  ScriptApp.newTrigger('onSheetChange').forSpreadsheet(ss).onChange().create();
}

function onSheetChange(e) {
  try {
    var token = PropertiesService.getScriptProperties().getProperty('FLUSH_TOKEN') || '';

    // Invalidate the frontend's 'blogs' cache first, so the warm pings below
    // re-render fresh content.
    pingRevalidate(token);

    // If we can identify the edited row and it's now published, pre-warm it.
    var row = editedBlogRow(e);
    if (row && String(row.Status).trim().toLowerCase() === 'published' && row.Slug) {
      try { getDocContent(row.DocId, true); } catch (err) { /* warm best-effort */ }
      warm('/blog/' + encodeURIComponent(String(row.Slug).trim()));
      warm('/blog');
      var svc = CATEGORY_TO_SERVICE_SLUG[String(row.Category).trim()];
      if (svc) warm('/services/' + svc);
    } else {
      // Unpublish / row removed / unknown row — just refresh the list; the
      // post's own page will 404 on its next request (correct).
      warm('/blog');
    }
  } catch (err) {
    // Never throw from a trigger (avoids failure emails); the change still
    // surfaces within the TTL even if a ping failed.
  }
}

// Return the edited row as a header->value object when we can tell which row
// changed (onEdit gives e.range); otherwise null (onChange has no range).
function editedBlogRow(e) {
  try {
    if (!e || !e.range) return null;
    var sheet = e.range.getSheet();
    if (sheet.getName() !== BLOG_SHEET_NAME) return null;
    var rowIndex = e.range.getRow();
    if (rowIndex < 2) return null; // header row
    var lastCol = sheet.getLastColumn();
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0]
      .map(function (h) { return String(h).trim(); });
    var values = sheet.getRange(rowIndex, 1, 1, lastCol).getValues()[0];
    var obj = {};
    headers.forEach(function (h, i) { obj[h] = values[i]; });
    return obj;
  } catch (err) {
    return null;
  }
}

// Ping the secret-gated revalidate route. No-op if the token isn't set.
function pingRevalidate(token) {
  if (!token) return;
  try {
    UrlFetchApp.fetch(SITE_URL + '/api/revalidate?secret=' + encodeURIComponent(token),
      { muteHttpExceptions: true });
  } catch (err) { /* best-effort */ }
}

// GET a page so Next renders and caches it (warm the ISR cache).
function warm(path) {
  try {
    UrlFetchApp.fetch(SITE_URL + path, { muteHttpExceptions: true });
  } catch (err) { /* best-effort */ }
}

// Manual on-demand flush endpoint: ?resource=flush&token=<FLUSH_TOKEN>.
// Handy after editing a Doc's body (which doesn't fire the sheet trigger).
function handleFlush(params) {
  var token = PropertiesService.getScriptProperties().getProperty('FLUSH_TOKEN') || '';
  if (!token || !safeEqual(String(params.token || ''), token)) {
    return { ok: false }; // fail closed, generic response
  }
  pingRevalidate(token);
  return { ok: true };
}

// Constant-time string compare so the token can't be recovered via timing.
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  var diff = 0;
  for (var i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
