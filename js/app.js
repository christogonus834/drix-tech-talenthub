// ─── CONFIG ───────────────────────────────────────────────────────────
const API_BASE = 'https://drix-talenthub-backend.onrender.com';

// ─── SVG ICONS ────────────────────────────────────────────────────────
const icons = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  fellows: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  courses: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  modules: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  cohorts: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
  certs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  leaderboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  community: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  messages: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
  pdf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  quiz: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 8v4l3 3"/><circle cx="18" cy="6" r="3" fill="currentColor" opacity="0.5"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
};

function icon(name, cls = 'icon-md') {
  return `<span class="${cls}" style="display:inline-flex">${icons[name] || ''}</span>`;
}

// ─── TOKEN AUTH ───────────────────────────────────────────────────────
// `role` below is one of: false/undefined (fellow), true (admin, kept for backwards compat), 'mentor'.
const auth = {
  getToken()         { return localStorage.getItem('drix_token'); },
  getAdminToken()    { return localStorage.getItem('drix_admin_token'); },
  getMentorToken()   { return localStorage.getItem('drix_mentor_token'); },
  setToken(t)        { localStorage.setItem('drix_token', t); },
  setAdminToken(t)   { localStorage.setItem('drix_admin_token', t); },
  setMentorToken(t)  { localStorage.setItem('drix_mentor_token', t); },
  clearToken()       { localStorage.removeItem('drix_token'); },
  clearAdminToken()  { localStorage.removeItem('drix_admin_token'); },
  clearMentorToken() { localStorage.removeItem('drix_mentor_token'); },
};

// ─── API HELPER ───────────────────────────────────────────────────────
const api = {
  _token(role) { return role === 'mentor' ? auth.getMentorToken() : role ? auth.getAdminToken() : auth.getToken(); },
  _headers(role = false) {
    const h = { 'Content-Type': 'application/json' };
    const token = this._token(role);
    if (token) h['Authorization'] = `Bearer ${token}`;
    return h;
  },
  async _handle(res, role) {
    if (res.status === 401 || res.status === 403) {
      if (role === 'mentor') { auth.clearMentorToken(); window.location.href = '/mentor/login'; }
      else if (role) { auth.clearAdminToken(); window.location.href = '/admin/login'; }
      else { auth.clearToken(); window.location.href = '/login'; }
      return null;
    }
    return res.json().catch(() => null);
  },
  async get(url, role = false) {
    try {
      const res = await fetch(API_BASE + url, { headers: this._headers(role) });
      return this._handle(res, role);
    } catch(e) { console.error('GET', url, e); return null; }
  },
  async post(url, data, role = false) {
    try {
      const res = await fetch(API_BASE + url, {
        method: 'POST', headers: this._headers(role), body: JSON.stringify(data)
      });
      return this._handle(res, role);
    } catch(e) { console.error('POST', url, e); return null; }
  },
  async patch(url, data, role = false) {
    try {
      const res = await fetch(API_BASE + url, {
        method: 'PATCH', headers: this._headers(role), body: JSON.stringify(data)
      });
      return this._handle(res, role);
    } catch(e) { console.error('PATCH', url, e); return null; }
  },
  async delete(url, role = false) {
    try {
      const res = await fetch(API_BASE + url, {
        method: 'DELETE', headers: this._headers(role)
      });
      return this._handle(res, role);
    } catch(e) { console.error('DELETE', url, e); return null; }
  },
  async upload(url, formData, role = false) {
    try {
      const token = this._token(role);
      const headers = {};
      if (token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(API_BASE + url, { method: 'POST', headers, body: formData });
      return this._handle(res, role);
    } catch(e) { console.error('UPLOAD', url, e); return null; }
  }
};

// ─── TOAST ────────────────────────────────────────────────────────────
function showToast(message, type = 'success') {
  let c = document.querySelector('.toast-container');
  if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
  const t = document.createElement('div');
  const svgMap = { success: icons.check, error: icons.close, info: icons.ai, warning: icons.quiz };
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="icon-sm" style="flex-shrink:0;color:${type==='success'?'#06D6A0':type==='error'?'#F43F5E':'#7C6EF7'}">${svgMap[type]||''}</span><span>${message}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(20px)'; t.style.transition='all 0.3s'; setTimeout(()=>t.remove(),300); }, 3500);
}

// ─── MODAL ────────────────────────────────────────────────────────────
function openModal(id) { document.getElementById(id)?.classList.add('show'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('show'); }
document.addEventListener('click', e => { if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('show'); });

// ─── LOGOUT ───────────────────────────────────────────────────────────
async function logout() { auth.clearToken(); window.location.href = '/login'; }
async function adminLogout() { auth.clearAdminToken(); window.location.href = '/admin/login'; }
async function mentorLogout() { auth.clearMentorToken(); window.location.href = '/mentor/login'; }

// ─── UTILS ────────────────────────────────────────────────────────────
function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-NG', { day:'numeric', month:'short', year:'numeric' });
}
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024*1024) return (bytes/1024).toFixed(1) + ' KB';
  return (bytes/(1024*1024)).toFixed(1) + ' MB';
}
function confirmAction(msg, cb) { if (confirm(msg)) cb(); }

// ─── ACTIVE SIDEBAR LINK ──────────────────────────────────────────────
document.querySelectorAll('.sidebar-link').forEach(link => {
  if (link.getAttribute('href') === window.location.pathname) link.classList.add('active');
});

// ─── AI ASSISTANT ─────────────────────────────────────────────────────
// Talks to OUR backend (/api/ai/chat), which holds the Gemini key server-side
// and handles model rotation, quota cooldowns, caching and per-fellow throttling.
// (Two stale client-side implementations — one hitting Anthropic directly, one
// hitting Gemini with a hardcoded placeholder key — used to live here. The
// second one silently shadowed the first and always failed with "not configured".)
async function sendAIMessage(inputId, messagesId, context = '') {
  const input = document.getElementById(inputId);
  const msgs = document.getElementById(messagesId);
  const text = input?.value?.trim();
  if (!text || !msgs) return;

  input.value = '';

  // Add user message
  msgs.innerHTML += `<div class="ai-msg user"><div class="ai-bubble">${text}</div></div>`;

  // Add typing indicator
  const typingId = 'typing_' + Date.now();
  msgs.innerHTML += `<div class="ai-msg assistant" id="${typingId}"><div class="ai-bubble"><div class="ai-typing"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div></div></div>`;
  msgs.scrollTop = msgs.scrollHeight;

  try {
    const res = await fetch(API_BASE + '/api/ai/chat', {
      method: 'POST',
      headers: api._headers(false),
      body: JSON.stringify({ message: text, context })
    });
    const data = await res.json().catch(() => null);
    document.getElementById(typingId)?.remove();

    if (res.status === 401 || res.status === 403) {
      auth.clearToken();
      window.location.href = '/login';
      return;
    }

    if (!data || data.error) {
      const msg = data?.error || 'AI assistant is temporarily unavailable.';
      msgs.innerHTML += `<div class="ai-msg assistant animate-fade"><div class="ai-bubble" style="color:var(--brand-warning);">${msg}</div></div>`;
    } else if (data.not_configured) {
      msgs.innerHTML += `<div class="ai-msg assistant animate-fade"><div class="ai-bubble" style="color:var(--brand-warning);">AI assistant not configured yet. Admin needs to add the Gemini API key.</div></div>`;
    } else {
      const reply = data.reply || 'I could not process that. Please try again.';
      msgs.innerHTML += `<div class="ai-msg assistant animate-fade"><div class="ai-bubble">${reply.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div></div>`;
    }
  } catch(e) {
    document.getElementById(typingId)?.remove();
    msgs.innerHTML += `<div class="ai-msg assistant"><div class="ai-bubble" style="color:var(--brand-danger)">Connection error. Please try again.</div></div>`;
    console.error('AI chat error:', e);
  }
  msgs.scrollTop = msgs.scrollHeight;
}

// ─── FILE UPLOAD HELPER ───────────────────────────────────────────────
function setupFileDrop(dropId, inputId, onFile) {
  const drop = document.getElementById(dropId);
  const input = document.getElementById(inputId);
  if (!drop || !input) return;

  drop.addEventListener('click', () => input.click());
  drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('dragover'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('dragover'));
  drop.addEventListener('drop', e => {
    e.preventDefault();
    drop.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) onFile(file);
  });
  input.addEventListener('change', () => {
    if (input.files[0]) onFile(input.files[0]);
  });
}

