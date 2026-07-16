// ── API BASE — your Render backend URL ───────────────────────────────
const API_BASE = 'https://drix-talenthub-backend.onrender.com';

const api = {
  async get(url) {
    const res = await fetch(API_BASE + url, { credentials: 'include' });
    if (res.status === 401) { window.location.href = '/login'; return null; }
    if (res.status === 403) { window.location.href = '/login'; return null; }
    return res.json();
  },
  async post(url, data) {
    const res = await fetch(API_BASE + url, {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },
  async patch(url, data) {
    const res = await fetch(API_BASE + url, {
      method: 'PATCH', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },
  async put(url, data) {
    const res = await fetch(API_BASE + url, {
      method: 'PUT', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },
  async delete(url) {
    const res = await fetch(API_BASE + url, { method: 'DELETE', credentials: 'include' });
    return res.json();
  }
};

function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || '📢'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('show');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('show');
  }
});

async function logout() {
  await fetch(API_BASE + '/api/auth/logout', { method: 'POST', credentials: 'include' });
  window.location.href = '/login';
}
async function adminLogout() {
  await fetch(API_BASE + '/api/auth/logout', { method: 'POST', credentials: 'include' });
  window.location.href = '/admin/login';
}

function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-NG', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
}

function confirmAction(message, callback) {
  if (confirm(message)) callback();
}

document.querySelectorAll('.sidebar-link').forEach(link => {
  if (link.getAttribute('href') === window.location.pathname) {
    link.classList.add('active');
  }
});
