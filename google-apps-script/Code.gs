var BLOG_SHEET_ID = '1zaJeXJINPrpIuqi5BiG0c7pv9k_dJGmCsrWENAQ4E4M'; // Blogs spreadsheet ID

// Requires the "Google Docs API" advanced service enabled (identifier: Docs).

function doGet(e) {
  var resource = (e.parameter.resource || '').toLowerCase();
  if (resource === 'blogs') return handleBlogsGet();

  return ContentService.createTextOutput(JSON.stringify({ error: 'Unknown resource' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleBlogsGet() {
  var cache = CacheService.getScriptCache();

  // Serve a warm full-response cache when available (survives bursts cheaply).
  var cached = cache.get('blogs_response');
  if (cached) {
    return ContentService.createTextOutput(cached).setMimeType(ContentService.MimeType.JSON);
  }

  var sheet = SpreadsheetApp.openById(BLOG_SHEET_ID).getSheetByName('Blogs');
  var data = sheet.getDataRange().getValues();
  var headers = data[0].map(function (h) { return String(h).trim(); });
  var rows = data.slice(1);

  var posts = rows
    .map(function (row) {
      var obj = {};
      headers.forEach(function (h, i) { obj[h] = row[i]; });
      return obj;
    })
    .filter(function (obj) {
      return String(obj.Status).trim().toLowerCase() === 'published';
    })
    .map(function (obj) {
      return {
        slug: obj.Slug,
        title: obj.Title,
        category: obj.Category,
        excerpt: obj.Excerpt,
        thumbnail: obj.Thumbnail || null,
        order: Number(obj.Order) || 0,
        publishedDate: obj.PublishedDate,
        content: getDocContent(obj.DocId)
      };
    })
    .sort(function (a, b) { return a.order - b.order; });

  var json = JSON.stringify(posts);
  // Full response cache: TTL in seconds (max 21600 = 6h). Bump/lower as needed.
  try { cache.put('blogs_response', json, 21600); } catch (err) { /* >100KB: skip full cache */ }

  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function getDocContent(docId) {
  if (!docId) return [];

  var cache = CacheService.getScriptCache();

  // Invalidate per-doc cache by the file's last-modified time (cheap Drive call).
  var stamp;
  try {
    stamp = DriveApp.getFileById(docId).getLastUpdated().getTime();
  } catch (e) {
    stamp = 'na';
  }
  var key = 'doc_' + docId + '_' + stamp;

  var hit = cache.get(key);
  if (hit) {
    try { return JSON.parse(hit); } catch (e) { /* fall through and re-render */ }
  }

  var blocks = renderDoc(docId);

  try {
    cache.put(key, JSON.stringify(blocks), 21600); // 6h; keyed by mtime so safe
  } catch (e) { /* too big for cache; still returned below */ }

  return blocks;
}

// Parse a Google Doc via the Docs API (single RPC) instead of DocumentApp.
function renderDoc(docId) {
  var blocks = [];
  try {
    var doc = Docs.Documents.get(docId);
    var content = (doc.body && doc.body.content) || [];

    content.forEach(function (el) {
      if (el.paragraph) {
        var para = el.paragraph;
        var text = paragraphText(para).trim();
        if (!text) return;

        var style = (para.paragraphStyle && para.paragraphStyle.namedStyleType) || '';
        var isHeading = style === 'HEADING_1' || style === 'HEADING_2';

        if (para.bullet) {
          blocks.push({ type: 'list-item', text: text });
        } else {
          blocks.push({ type: isHeading ? 'heading' : 'paragraph', text: text });
        }
      } else if (el.table) {
        var rows = [];
        (el.table.tableRows || []).forEach(function (tr) {
          var cells = [];
          (tr.tableCells || []).forEach(function (tc) {
            var cellText = (tc.content || []).map(function (ce) {
              return ce.paragraph ? paragraphText(ce.paragraph) : '';
            }).join('').trim();
            cells.push(cellText);
          });
          rows.push(cells);
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
