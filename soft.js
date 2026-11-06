/* ============================================================
   LYRA AI BUILDER — by Muhammad Taqi
   ============================================================ */

const CATS = {
  chat:   { code:'MT', icon:'💬', label:'Create AI (Chat Assistant)' },
  search: { code:'L',  icon:'🔎', label:'Create Search Engine (Wikipedia)' },
  image:  { code:'ZF', icon:'🎨', label:'Create Image Generator AI' }
};

const state = { type:null, name:'', creator:'', html:'' };

/* ---------- helpers ---------- */
function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* A=1 ... Z=26, SPACE=0 */
function encodeName(str){
  const out = [];
  String(str).toUpperCase().split('').forEach(ch => {
    if (ch === ' ') { out.push('0'); return; }
    const c = ch.charCodeAt(0);
    if (c >= 65 && c <= 90) out.push(String(c - 64));
  });
  return out.join('-');
}
function decodeName(code){
  if (!code) return '';
  return String(code).split('-').map(n => {
    const v = parseInt(n, 10);
    if (isNaN(v)) return '';
    if (v === 0) return ' ';
    if (v >= 1 && v <= 26) return String.fromCharCode(64 + v);
    return '';
  }).join('');
}
function decodePart(s){
  const d = decodeName(s);
  return (d && d.trim()) ? d : String(s);
}

/* ---------- navigation ---------- */
function go(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('s-' + id);
  if (el) el.classList.add('active');
  window.scrollTo({ top:0, behavior:'smooth' });
}

function selectType(t){
  state.type = t;
  document.getElementById('chosenType').textContent = CATS[t].icon + '  ' + CATS[t].label;
  go('form');
}

/* ---------- build the AI ---------- */
function createAI(){
  const name = document.getElementById('aiName').value.trim();
  const creator = document.getElementById('creatorName').value.trim();
  if (!name)    { alert('Meharbani karke AI ka naam likhein.'); return; }
  if (!creator) { alert('Meharbani karke apna naam (creator) likhein.'); return; }

  state.name = name;
  state.creator = creator;
  state.html = buildAIHTML(state.type, name, creator);

  document.getElementById('previewTitle').textContent = name;
  document.getElementById('previewSub').textContent =
      CATS[state.type].label + ' · by ' + creator;
  document.getElementById('previewFrame').srcdoc = state.html;
  go('preview');
}

/* ---------- download ---------- */
function downloadAI(){
  const blob = new Blob([state.html], { type:'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = (state.name || 'lyra-ai').toLowerCase().replace(/[^a-z0-9]+/g,'-') + '.html';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2500);
}

/* ---------- publish ---------- */
let lastUrl = '';
function publishAI(){
  const code = CATS[state.type].code;
  const hash = encodeName(code) + '=' + encodeName(state.name) + '=' + encodeName(state.creator);
  const base = location.href.split('#')[0];
  lastUrl = base + '#' + hash;

  document.getElementById('liveUrl').textContent = lastUrl;
  document.getElementById('readableHash').textContent =
      '#' + code + '=' + state.name.toUpperCase() + '=' + state.creator.toUpperCase();
  document.getElementById('copyBtn').textContent = '📋 Copy Link';
  document.getElementById('publishModal').classList.add('open');
}

function copyUrl(){
  const btn = document.getElementById('copyBtn');
  const done = () => { btn.textContent = '✅ Copied!'; setTimeout(()=>btn.textContent='📋 Copy Link',1600); };
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(lastUrl).then(done).catch(fallback);
  } else { fallback(); }
  function fallback(){
    const t = document.createElement('textarea');
    t.value = lastUrl; t.style.position='fixed'; t.style.opacity='0';
    document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); done(); } catch(e){ alert(lastUrl); }
    t.remove();
  }
}

function openLive(){
  window.open(lastUrl, '_blank');
}

/* ============================================================
   GENERATED AI — HTML TEMPLATES (modern glass style)
   ============================================================ */
const BASE_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#05070d;--surface:rgba(14,18,25,.78);--border:rgba(255,255,255,.08);
  --text:#f2f5fa;--muted:#8b97a9;--accent:#60a5fa;--accent2:#a78bfa;
}
body{
  margin:0;background:var(--bg);color:var(--text);
  font-family:'Inter',system-ui,sans-serif;
  min-height:100vh;display:grid;place-items:center;padding:14px;
  position:relative;overflow:hidden;
}
body::before{
  content:'';position:fixed;inset:-40%;
  background:
    radial-gradient(circle at 25% 20%, rgba(96,165,250,.16), transparent 44%),
    radial-gradient(circle at 78% 30%, rgba(167,139,250,.14), transparent 46%);
  filter:blur(60px);animation:drift 22s ease-in-out infinite alternate;z-index:0;
}
@keyframes drift{0%{transform:translate(0,0) scale(1)}100%{transform:translate(3%,-2%) scale(1.06)}}
.app{
  position:relative;z-index:1;
  width:min(740px,96vw);height:min(780px,92vh);
  display:flex;flex-direction:column;
  border:1px solid var(--border);
  background:var(--surface);
  backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
  border-radius:22px;overflow:hidden;
  box-shadow:0 30px 80px rgba(0,0,0,.65);
}
.head{
  padding:16px 20px;border-bottom:1px solid var(--border);
  display:flex;align-items:center;gap:14px;flex:0 0 auto;
}
.mark{
  width:44px;height:44px;border-radius:13px;
  background:linear-gradient(135deg,#60a5fa,#a78bfa);
  color:#06101d;display:grid;place-items:center;
  font-weight:800;font-size:16px;
  box-shadow:0 0 0 1px rgba(255,255,255,.12);
}
.head h1{font-size:16px;margin:0;letter-spacing:.4px}
.head span{color:var(--muted);font-size:11.5px}
.foot{
  padding:10px 16px;border-top:1px solid var(--border);
  font-size:10.5px;color:#5c6779;text-align:center;flex:0 0 auto;letter-spacing:.4px;
}
`;

/* ---------- CHAT AI ---------- */
function chatHTML(n, c, jn, jc){
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${n}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${BASE_CSS}
.chat{padding:20px;overflow:auto;flex:1;display:flex;flex-direction:column;gap:13px}
.msg{max-width:82%;padding:13px 15px;line-height:1.6;font-size:14px;white-space:pre-wrap;border-radius:14px;animation:pop .18s ease}
@keyframes pop{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.user{align-self:flex-end;background:linear-gradient(135deg,#eef5ff,#dbeafe);color:#0a101a;border-bottom-right-radius:5px}
.bot{align-self:flex-start;background:rgba(255,255,255,.06);border:1px solid var(--border);color:#dce3ee;border-bottom-left-radius:5px}
.form{display:flex;border-top:1px solid var(--border);padding:14px;gap:10px}
.form input{flex:1;background:rgba(0,0,0,.35);color:#fff;border:1px solid var(--border);padding:13px;outline:none;border-radius:11px;font-family:inherit;font-size:14px;transition:.2s}
.form input:focus{border-color:rgba(96,165,250,.6);box-shadow:0 0 0 4px rgba(96,165,250,.13)}
.form button{border:0;background:linear-gradient(135deg,#60a5fa,#a78bfa);color:#06101d;padding:0 22px;font-weight:700;cursor:pointer;border-radius:11px;font-family:inherit;font-size:14px;transition:.2s}
.form button:hover{filter:brightness(1.08)}
.form button:disabled{opacity:.5;cursor:not-allowed}
</style>
</head>
<body>
<main class="app">
  <header class="head">
    <div class="mark">AI</div>
    <div><h1>${n}</h1><span>Created by ${c} · Powered by LYRA AI BUILDER</span></div>
  </header>
  <div id="chat" class="chat">
    <div class="msg bot">Hello! I am ${n}. How can I help you today?</div>
  </div>
  <form class="form" id="form">
    <input id="input" autocomplete="off" placeholder="Ask anything...">
    <button id="send">Send</button>
  </form>
  <div class="foot">Made with LYRA AI BUILDER · Created by ${c}</div>
</main>
<script>
var AI_NAME = ${jn}, CREATOR = ${jc};
var chat  = document.getElementById('chat');
var form  = document.getElementById('form');
var input = document.getElementById('input');
var send  = document.getElementById('send');

function add(txt, cls){
  var el = document.createElement('div');
  el.className = 'msg ' + cls;
  el.textContent = txt;
  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight;
  return el;
}

async function ask(q){
  var p = 'You are ' + AI_NAME + ', a helpful and accurate assistant created by ' + CREATOR +
          '. Keep answers clear and concise.\\n\\nUser: ' + q;
  var r = await fetch('https://text.pollinations.ai/' + encodeURIComponent(p));
  if (!r.ok) throw new Error('The AI service is unavailable.');
  return await r.text();
}

form.onsubmit = async function(e){
  e.preventDefault();
  var q = input.value.trim();
  if (!q) return;
  add(q, 'user');
  input.value = '';
  send.disabled = true;
  var l = add('Thinking...', 'bot');
  try { l.textContent = await ask(q); }
  catch (err) { l.textContent = err.message || 'Something went wrong.'; }
  send.disabled = false;
  input.focus();
};
<\/script>
</body>
</html>`;
}

/* ---------- SEARCH ENGINE (Wikipedia powered) ---------- */
function searchHTML(n, c, jn, jc){
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${n}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${BASE_CSS}
.bar{display:flex;gap:10px;padding:16px;border-bottom:1px solid var(--border);flex:0 0 auto}
.bar input{
  flex:1;background:rgba(0,0,0,.35);color:#fff;border:1px solid var(--border);
  padding:14px;border-radius:11px;outline:none;font-family:inherit;font-size:14px;transition:.2s;
}
.bar input:focus{border-color:rgba(96,165,250,.6);box-shadow:0 0 0 4px rgba(96,165,250,.13)}
.bar button{
  border:0;background:linear-gradient(135deg,#60a5fa,#a78bfa);color:#06101d;
  padding:0 24px;font-weight:700;cursor:pointer;border-radius:11px;font-family:inherit;font-size:14px;transition:.2s;
}
.bar button:hover{filter:brightness(1.08)}
.bar button:disabled{opacity:.5;cursor:not-allowed}
.results{padding:20px;overflow:auto;flex:1;font-size:14px;line-height:1.75}
.results h3{
  font-size:11px;color:var(--accent);margin:0 0 10px;
  letter-spacing:1.5px;text-transform:uppercase;font-weight:700;
}
.answer{
  white-space:pre-wrap;color:#dce3ee;margin-bottom:22px;
  background:rgba(96,165,250,.06);
  border:1px solid rgba(96,165,250,.16);
  border-radius:14px;padding:16px;line-height:1.7;
}
.answer .source{
  display:block;margin-top:10px;font-size:11px;color:var(--muted);letter-spacing:.3px;
}
.links{display:flex;flex-direction:column;gap:9px}
.link-card{
  display:block;text-decoration:none;color:inherit;
  background:rgba(255,255,255,.035);
  border:1px solid var(--border);
  border-radius:12px;padding:13px 15px;
  transition:.2s;
}
.link-card:hover{border-color:rgba(96,165,250,.45);background:rgba(255,255,255,.06);transform:translateX(3px)}
.link-card .lt{font-size:13.5px;font-weight:600;color:#93c5fd}
.link-card .le{font-size:12px;color:var(--muted);margin-top:4px;line-height:1.55}
.link-card .le .searchmatch{color:#fbbf24;font-weight:600}
.hint{color:var(--muted);font-size:13.5px;line-height:1.7}
</style>
</head>
<body>
<main class="app">
  <header class="head">
    <div class="mark">🔎</div>
    <div><h1>${n}</h1><span>Created by ${c} · Wikipedia powered · LYRA AI BUILDER</span></div>
  </header>
  <div class="bar">
    <input id="q" autocomplete="off" placeholder="Search Wikipedia...">
    <button id="btn">Search</button>
  </div>
  <div class="results" id="results">
    <div class="hint">Kuch type karein aur <strong>Search</strong> dabayein — Wikipedia se seedha jawab milega.</div>
  </div>
  <div class="foot">Made with LYRA AI BUILDER · Created by ${c}</div>
</main>
<script>
var AI_NAME = ${jn}, CREATOR = ${jc};
var qEl = document.getElementById('q');
var btn = document.getElementById('btn');
var results = document.getElementById('results');

async function wikiSearch(term){
  // 1) Search Wikipedia REST API
  var searchUrl = 'https://en.wikipedia.org/w/rest.php/v1/search/page?q=' +
                  encodeURIComponent(term) + '&limit=10&origin=*';
  var sRes = await fetch(searchUrl);
  if (!sRes.ok) throw new Error('Wikipedia search failed.');
  var sData = await sRes.json();
  var pages = sData.pages || [];
  if (pages.length === 0) return { answer: 'Koi nateeja nahi mila.', results: [] };

  var top = pages[0];

  // 2) Fetch summary for top result
  var summaryUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/' +
                   encodeURIComponent(top.title) + '?origin=*';
  var answer = '';
  try {
    var sumRes = await fetch(summaryUrl);
    if (sumRes.ok) {
      var sumData = await sumRes.json();
      answer = sumData.extract || top.excerpt || 'No summary available.';
    } else {
      answer = top.excerpt || 'No summary available.';
    }
  } catch(e) {
    answer = top.excerpt || 'No summary available.';
  }

  // 3) Build result list
  var list = pages.map(function(p){
    return {
      title: p.title,
      excerpt: p.excerpt || '',
      url: 'https://en.wikipedia.org/wiki/' + encodeURIComponent(p.key)
    };
  });

  return { answer: answer, results: list };
}

btn.onclick = async function(){
  var term = qEl.value.trim();
  if (!term) return;
  btn.disabled = true;
  results.innerHTML = '<div class="hint">Wikipedia se jawab dhoond raha hoon…</div>';

  try {
    var data = await wikiSearch(term);

    var h = document.createElement('h3');
    h.textContent = 'Wikipedia Answer';
    results.appendChild(h);

    var ans = document.createElement('div');
    ans.className = 'answer';
    ans.textContent = data.answer;
    var src = document.createElement('span');
    src.className = 'source';
    src.textContent = 'Source: Wikipedia · ' + (data.results[0] ? data.results[0].title : '');
    ans.appendChild(src);
    results.appendChild(ans);

    if (data.results.length > 1) {
      var lh = document.createElement('h3');
      lh.textContent = 'Related Articles';
      results.appendChild(lh);

      var box = document.createElement('div');
      box.className = 'links';
      data.results.forEach(function(r){
        var a = document.createElement('a');
        a.className = 'link-card';
        a.href = r.url;
        a.target = '_blank';
        a.rel = 'noopener';

        var t = document.createElement('div');
        t.className = 'lt';
        t.textContent = r.title;
        a.appendChild(t);

        if (r.excerpt) {
          var e = document.createElement('div');
          e.className = 'le';
          e.innerHTML = r.excerpt; // contains <span class="searchmatch">
          a.appendChild(e);
        }

        box.appendChild(a);
      });
      results.appendChild(box);
    }

  } catch(err) {
    results.innerHTML = '<div class="hint">Masla aa gaya: ' + (err.message || 'Wikipedia se rabta nahi ho saka.') + '</div>';
  }

  btn.disabled = false;
};

qEl.addEventListener('keydown', function(e){ if (e.key === 'Enter') btn.click(); });
<\/script>
</body>
</html>`;
}

/* ---------- IMAGE GENERATOR AI ---------- */
function imageHTML(n, c, jn, jc){
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${n}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${BASE_CSS}
.body{padding:18px;flex:1;overflow:auto;display:flex;flex-direction:column;gap:14px}
.bar{display:flex;gap:10px}
.bar input{
  flex:1;background:rgba(0,0,0,.35);color:#fff;border:1px solid var(--border);
  padding:14px;border-radius:11px;outline:none;font-family:inherit;font-size:14px;transition:.2s;
}
.bar input:focus{border-color:rgba(96,165,250,.6);box-shadow:0 0 0 4px rgba(96,165,250,.13)}
.bar button{
  border:0;background:linear-gradient(135deg,#60a5fa,#a78bfa);color:#06101d;
  padding:0 22px;font-weight:700;cursor:pointer;border-radius:11px;font-family:inherit;font-size:14px;transition:.2s;
}
.bar button:hover{filter:brightness(1.08)}
.bar button:disabled{opacity:.5;cursor:not-allowed}
.box{
  flex:1;min-height:320px;border:2px dashed var(--border);
  border-radius:14px;background:rgba(0,0,0,.3);
  display:grid;place-items:center;position:relative;overflow:hidden;padding:10px;
}
.box img{max-width:100%;max-height:100%;display:none;border-radius:10px}
.ph{color:var(--muted);font-size:13px;text-align:center}
.loader{
  display:none;width:42px;height:42px;
  border:4px solid rgba(255,255,255,.1);
  border-top-color:var(--accent);
  border-radius:50%;animation:spin 1s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg)}}
.dl{
  display:none;text-align:center;background:#10b981;color:#fff;
  padding:13px;border-radius:11px;text-decoration:none;font-weight:700;font-size:14px;transition:.2s;
}
.dl:hover{background:#059669}
</style>
</head>
<body>
<main class="app">
  <header class="head">
    <div class="mark">🎨</div>
    <div><h1>${n}</h1><span>Created by ${c} · Powered by LYRA AI BUILDER</span></div>
  </header>
  <div class="body">
    <div class="bar">
      <input id="prompt" autocomplete="off" placeholder="Prompt likhein (e.g. cyberpunk city at night)...">
      <button id="gen">Generate</button>
    </div>
    <div class="box">
      <span class="ph" id="ph">Aap ki image yahan nazar aaye gi</span>
      <div class="loader" id="loader"></div>
      <img id="img" alt="Generated Image">
    </div>
    <a id="dl" class="dl" href="#" download="ai-image.png">⬇ Download Image</a>
  </div>
  <div class="foot">Made with LYRA AI BUILDER · Created by ${c}</div>
</main>
<script>
var AI_NAME = ${jn}, CREATOR = ${jc};
var promptEl = document.getElementById('prompt');
var genBtn   = document.getElementById('gen');
var loader   = document.getElementById('loader');
var ph       = document.getElementById('ph');
var img      = document.getElementById('img');
var dl       = document.getElementById('dl');

async function generate(){
  var p = promptEl.value.trim();
  if (!p) { alert('Meharbani karke prompt likhein!'); return; }

  genBtn.disabled = true;
  genBtn.textContent = 'Generating...';
  loader.style.display = 'block';
  ph.style.display = 'none';
  img.style.display = 'none';
  dl.style.display = 'none';

  var seed = Math.floor(Math.random() * 1000000);
  var url = 'https://image.pollinations.ai/prompt/' + encodeURIComponent(p) +
            '?width=1024&height=1024&seed=' + seed + '&nologo=true';

  try {
    var r = await fetch(url);
    if (!r.ok) throw new Error('bad');
    var blob = await r.blob();
    var obj = URL.createObjectURL(blob);
    img.onload = function(){
      loader.style.display = 'none';
      img.style.display = 'block';
      dl.href = obj;
      dl.style.display = 'block';
      genBtn.disabled = false;
      genBtn.textContent = 'Generate';
    };
    img.src = obj;
  } catch (e) {
    loader.style.display = 'none';
    ph.style.display = 'block';
    ph.textContent = 'Image generate nahi ho saki, dobara koshish karein.';
    genBtn.disabled = false;
    genBtn.textContent = 'Generate';
  }
}

genBtn.onclick = generate;
promptEl.addEventListener('keydown', function(e){ if (e.key === 'Enter') generate(); });
<\/script>
</body>
</html>`;
}

/* ---------- dispatcher ---------- */
function buildAIHTML(type, name, creator){
  const n  = esc(name);
  const c  = esc(creator);
  const jn = JSON.stringify(name);
  const jc = JSON.stringify(creator);
  if (type === 'chat')   return chatHTML(n, c, jn, jc);
  if (type === 'search') return searchHTML(n, c, jn, jc);
  if (type === 'image')  return imageHTML(n, c, jn, jc);
  return '';
}

/* ============================================================
   LIVE MODE — URL hash se sirf preview show karna
   #MT=LYRA=TAQI  →  #13-20=12-25-18-1=20-1-17-9
   ============================================================ */
function bootFromHash(){
  const raw = location.hash.replace(/^#/, '');
  if (!raw) return false;

  const parts = raw.split('=');
  if (parts.length !== 3) return false;

  const codeRaw = decodeName(parts[0]) || parts[0];
  const code    = String(codeRaw).toUpperCase().replace(/[^A-Z]/g, '');
  const typeMap = { MT:'chat', L:'search', ZF:'image' };
  const type    = typeMap[code];
  if (!type) return false;

  const name    = (decodePart(parts[1]) || '').trim() || 'My AI';
  const creator = (decodePart(parts[2]) || '').trim() || 'Anonymous';

  document.getElementById('builder').style.display = 'none';
  document.getElementById('live').style.display = 'block';
  document.getElementById('liveBadge').textContent =
      name + ' · by ' + creator + ' · LYRA AI BUILDER';
  document.title = name + ' · LYRA AI BUILDER';
  document.getElementById('liveFrame').srcdoc = buildAIHTML(type, name, creator);
  return true;
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', function(){
  bootFromHash();

  const ai = document.getElementById('aiName');
  const cr = document.getElementById('creatorName');
  [ai, cr].forEach(el => {
    el.addEventListener('keydown', e => { if (e.key === 'Enter') createAI(); });
  });
});
