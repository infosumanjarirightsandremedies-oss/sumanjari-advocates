/**
 * Leads backend — receives contact-form and blog callback submissions as JSON
 * POST and appends them to the Leads sheet.
 *
 * SETUP (once):
 *   1. Project Settings -> Script Properties -> LEADS_TOKEN = <random secret>
 *      (must equal Vercel env LEADS_SCRIPT_TOKEN).
 *   2. Deploy as Web app, Execute as: Me, Who has access: Anyone.
 *   3. Put the /exec URL in Vercel env LEADS_SCRIPT_URL.
 */

var LEADS_SHEET_ID = '11abQ9UqAMGPfhE28LyhKC2E2L2hbc1g3rYV1RkVoUXo';
var LEADS_SHEET_NAME = 'Leads';
var LEAD_HEADERS = ['timestamp', 'formType', 'name', 'email', 'phone', 'practiceArea', 'urgency', 'message', 'college', 'title', 'blogUrl'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Optional shared secret; skipped if LEADS_TOKEN isn't set.
    var token = PropertiesService.getScriptProperties().getProperty('LEADS_TOKEN') || '';
    if (token && !safeEqual(String(data.token || ''), token)) {
      return json({ ok: false });
    }

    if (!data.timestamp) data.timestamp = new Date().toISOString();

    lock.waitLock(10000); // serialize concurrent appends
    var ss = SpreadsheetApp.openById(LEADS_SHEET_ID);
    var sheet = ss.getSheetByName(LEADS_SHEET_NAME) || ss.insertSheet(LEADS_SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(LEAD_HEADERS);
    sheet.appendRow(LEAD_HEADERS.map(function (h) { return sanitize(data[h]); }));
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (err) { /* not held */ }
  }
}

// Health check: GET <url> -> { ok: true }
function doGet() {
  return json({ ok: true, service: 'leads' });
}

// Prevent spreadsheet formula injection (=, +, -, @) and cap length.
function sanitize(v) {
  if (v === undefined || v === null) return '';
  var s = String(v).slice(0, 5000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  var diff = 0;
  for (var i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}