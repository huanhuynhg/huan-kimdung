/** Wedding Invitation V2 — standalone TEST deployment. Do not overwrite V1 Version 2.
 * Before deploying: replace TEST_SHEET_ID with a COPY of the existing Sheet.
 * Set ALLOWED_ORIGINS to your actual GitHub Pages origins.
 */
const TEST_SHEET_ID = 'REPLACE_WITH_TEST_SHEET_ID';
const ALLOWED_ORIGINS = ['https://YOUR-USERNAME.github.io'];
const MAX_MESSAGE = 500;

function getSheet_() {
  return SpreadsheetApp.openById(TEST_SHEET_ID).getSheets()[0];
}
function outputJson_(obj, callback) {
  const json = JSON.stringify(obj);
  if (callback) {
    if (!/^weddingV2cb_[A-Za-z0-9_]+$/.test(callback)) {
      return ContentService.createTextOutput(JSON.stringify({result:'error',message:'Invalid callback'})).setMimeType(ContentService.MimeType.JSON);
    }
    return ContentService.createTextOutput(callback + '(' + json + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
function doGet(e) {
  try {
    if (!e || !e.parameter || e.parameter.action !== 'get') return outputJson_({result:'error',message:'Invalid action'}, e && e.parameter && e.parameter.callback);
    const rows = getSheet_().getDataRange().getValues();
    const wishes = [];
    for (let i=1;i<rows.length;i++) {
      const row=rows[i];
      if (!row[1] || !row[2]) continue;
      const stamp = row[0] instanceof Date && !isNaN(row[0]) ? row[0].toISOString() : String(row[0]||'');
      const date = row[3] instanceof Date ? Utilities.formatDate(row[3],'Asia/Ho_Chi_Minh','dd/MM/yyyy') : String(row[3]||'');
      wishes.push({timestamp:stamp,name:String(row[1]),message:String(row[2]),date:date});
    }
    return outputJson_({result:'success',wishes:wishes},e.parameter.callback);
  } catch (err) { return outputJson_({result:'error',message:'Cannot load wishes'},e && e.parameter && e.parameter.callback); }
}
function doPost(e) {
  const p=e && e.parameter || {};
  const nonce=String(p.nonce||'').slice(0,100);
  let response={type:'wedding-wish-ack',nonce:nonce,result:'error',message:'Could not save wish'};
  try {
    const name=String(p.name||'').trim();
    const message=String(p.message||'').trim();
    if (!name || name.length>80 || !message || message.length>MAX_MESSAGE) throw Error('Invalid name or message');
    const lock=LockService.getScriptLock();
    if (!lock.tryLock(10000)) throw Error('Server busy; try again');
    try {
      getSheet_().appendRow([new Date(), name, message, Utilities.formatDate(new Date(),'Asia/Ho_Chi_Minh','dd/MM/yyyy')]);
      SpreadsheetApp.flush();
    } finally { lock.releaseLock(); }
    response.result='success';response.message='Wish saved';
  } catch (err) { response.message='Could not save wish'; }
  // HTMLService response is rendered in a hidden iframe; parent receives a nonce-bound ACK.
  // For production, restrict embedding to the intended website through deployment controls.
  const payload=JSON.stringify(response).replace(/</g,'\\u003c');
  const html='<!doctype html><html><body><script>window.parent.postMessage('+payload+',"*");<\/script></body></html>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
