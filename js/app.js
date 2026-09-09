// ── API BASE — Render backend URL ────────────────────────────────────
const API_BASE = 'https://drix-talenthub-backend.onrender.com';

// ── TOKEN STORAGE ─────────────────────────────────────────────────────
const auth = {
  getToken()        { return localStorage.getItem('drix_token'); },
  getAdminToken()   { return localStorage.getItem('drix_admin_token'); },
  setToken(t)       { localStorage.setItem('drix_token', t); },
  setAdminToken(t)  { localStorage.setItem('drix_admin_token', t); },
  clearToken()      { localStorage.removeItem('drix_token'); },
  clearAdminToken() { localStorage.removeItem('drix_admin_token'); },
};

// ── API HELPER ────────────────────────────────────────────────────────
const api = {
  headers(isAdmin = false) {
    const token = isAdmin ? auth.getAdminToken() : auth.getToken();
    const h = { 'Content-Type': 'application/json' };
    if (token) h['Authorization'] = `Bearer ${token}`;
    return h;
  },
  async get(url, isAdmin = false) {
    try {
      const res = await fetch(API_BASE + url, { headers: this.headers(isAdmin) });
      if (res.status === 401) {
        if (isAdmin) {
          auth.clearAdminToken();
          window.location.href = '/admin/login';
        } else {
          auth.clearToken();
          window.location.href = '/login';
        }
        return null;
      }
      if (res.status === 403) {
        if (isAdmin) {
          auth.clearAdminToken();
          window.location.href = '/admin/login';
        } else {
          auth.clearToken();
          window.location.href = '/login';
        }
        return null;
      }
      return res.json();
    } catch(err) {
      console.error('API GET error:', url, err);
      return null;
    }
  },
  async post(url, data, isAdmin = false) {
    try {
      const res = await fetch(API_BASE + url, {
        method: 'POST',
        headers: this.headers(isAdmin),
        body: JSON.stringify(data)
      });
      return res.json();
    } catch(err) {
      console.error('API POST error:', url, err);
      return null;
    }
  },
  async patch(url, data, isAdmin = false) {
    try {
      const res = await fetch(API_BASE + url, {
        method: 'PATCH',
        headers: this.headers(isAdmin),
        body: JSON.stringify(data)
      });
      return res.json();
    } catch(err) {
      console.error('API PATCH error:', url, err);
      return null;
    }
  },
  async put(url, data, isAdmin = false) {
    try {
      const res = await fetch(API_BASE + url, {
        method: 'PUT',
        headers: this.headers(isAdmin),
        body: JSON.stringify(data)
      });
      return res.json();
    } catch(err) {
      console.error('API PUT error:', url, err);
      return null;
    }
  },
  async delete(url, isAdmin = false) {
    try {
      const res = await fetch(API_BASE + url, {
        method: 'DELETE',
        headers: this.headers(isAdmin)
      });
      return res.json();
    } catch(err) {
      console.error('API DELETE error:', url, err);
      return null;
    }
  }
};

// ── TOAST ─────────────────────────────────────────────────────────────
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

// ── MODAL ─────────────────────────────────────────────────────────────
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

// ── LOGOUT ────────────────────────────────────────────────────────────
async function logout() {
  auth.clearToken();
  window.location.href = '/login';
}
async function adminLogout() {
  auth.clearAdminToken();
  window.location.href = '/admin/login';
}

// ── FORMAT DATE ───────────────────────────────────────────────────────
function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-NG', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
}

// ── CONFIRM ───────────────────────────────────────────────────────────
function confirmAction(message, callback) {
  if (confirm(message)) callback();
}

// ── ACTIVE SIDEBAR LINK ───────────────────────────────────────────────
document.querySelectorAll('.sidebar-link').forEach(link => {
  if (link.getAttribute('href') === window.location.pathname) {
    link.classList.add('active');
  }
});
