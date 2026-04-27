/* ============================================================
   navigation.js — SPA Ekran Yöneticisi + Menü + History API
   ============================================================ */

const Navigation = (() => {
  /* ── Sayfa tanımları ─────────────────────────────────────── */
  const PAGES = [
    { id: 'screen-intro',     label: '🏛️ Müze Girişi',        icon: '🏛️', step: -1  },
    { id: 'screen-tour',      label: '⚖️ Darüşşifa 1. Avlu',  icon: '⚖️', step: 1   },
    { id: 'screen-tour',      label: '🚪 Darüşşifa 2. Avlu',  icon: '🚪', step: 2   },
    { id: 'screen-tour',      label: '🌊 Şifahane',            icon: '🌊', step: 3   },
    { id: 'screen-tour',      label: '🎓 Medrese',             icon: '🎓', step: 4   },
    { id: 'screen-tour',      label: '🌿 Büyük Avlu',          icon: '🌿', step: 5   },
    { id: 'screen-tour',      label: '🍲 İmarethane',          icon: '🍲', step: 6   },
    { id: 'screen-tour',      label: '🕌 Cami',                icon: '🕌', step: 7   },
    { id: 'screen-guestbook', label: '🖋️ Gönül Köprüsü',      icon: '🖋️', step: -1  },
  ];

  let _active = 'screen-intro';

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    _buildMenu();
    _bindHamburger();
    _bindHistory();

    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.screen) changeScreen(e.state.screen, false);
    });
  }

  /* ── Menü oluştur ─────────────────────────────────────────── */
  function _buildMenu() {
    const container = document.getElementById('nav-items');
    if (!container) return;
    container.innerHTML = '';

    PAGES.forEach((p, idx) => {
      const el = document.createElement('div');
      el.className = 'nav-item';
      el.dataset.screen = p.id;
      el.dataset.step   = p.step;
      el.setAttribute('role', 'menuitem');
      el.setAttribute('aria-label', p.label);
      el.innerHTML = `<span class="nav-icon">${p.icon}</span><span>${p.label}</span>`;
      el.addEventListener('click', () => {
        if (p.id === 'screen-tour' && p.step >= 0) {
          // Tur ekranına git ve ilgili adıma atla
          TourManager.goToStep(p.step);
          changeScreen('screen-tour');
        } else if (p.id === 'screen-guestbook') {
          changeScreen('screen-guestbook');
          if (typeof GuestBook !== 'undefined') GuestBook.load();
        } else {
          changeScreen(p.id);
        }
        closeMenu();
      });
      container.appendChild(el);
    });
  }

  /* ── Aktif menü öğesini güncelle ─────────────────────────── */
  function updateMenuActive(screenId, step) {
    document.querySelectorAll('.nav-item').forEach(item => {
      const sameScreen = item.dataset.screen === screenId;
      const sameStep   = parseInt(item.dataset.step) === step;
      if (screenId === 'screen-tour') {
        item.classList.toggle('active', sameScreen && sameStep);
      } else {
        item.classList.toggle('active', sameScreen && item.dataset.step === '-1');
      }
    });
  }

  /* ── Hamburger menü aç/kapa ──────────────────────────────── */
  function _bindHamburger() {
    const btn     = document.getElementById('menu-btn');
    const overlay = document.getElementById('nav-overlay');
    if (btn)     btn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
  }

  function toggleMenu() {
    const isOpen = document.getElementById('nav-drawer')?.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  }

  function openMenu() {
    document.getElementById('nav-drawer')?.classList.add('open');
    document.getElementById('nav-overlay')?.classList.add('open');
    document.getElementById('menu-btn')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    document.getElementById('nav-drawer')?.classList.remove('open');
    document.getElementById('nav-overlay')?.classList.remove('open');
    document.getElementById('menu-btn')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ── History API ─────────────────────────────────────────── */
  function _bindHistory() {
    history.replaceState({ screen: _active }, '', '#' + _active);
  }

  /* ── Ekran değiştir ───────────────────────────────────────── */
  function changeScreen(id, pushState = true) {
    if (!document.getElementById(id)) return;

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    document.getElementById(id).classList.add('active-screen');
    _active = id;
    window.scrollTo(0, 0);

    if (pushState) history.pushState({ screen: id }, '', '#' + id);

    // AI fab: giriş ekranı dışında her yerde göster
    const fab = document.getElementById('ai-fab');
    if (fab) fab.classList.toggle('hidden', id === 'screen-intro');
  }

  function activeScreen() { return _active; }

  return { init, changeScreen, openMenu, closeMenu, toggleMenu, activeScreen, updateMenuActive };
})();
