/* ============================================================
   ai.js — Rehber Soru-Cevap Modülü (Claude API destekli)
   Mevcut tur adımını bağlam olarak kullanır
   ============================================================ */

const AIGuide = (() => {
  let _open = false;

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    document.getElementById('ai-fab')?.addEventListener('click', togglePanel);
    document.getElementById('ai-close-btn')?.addEventListener('click', closePanel);
    document.getElementById('ai-send-btn')?.addEventListener('click', _submit);
    document.querySelector('.ai-handle')?.addEventListener('click', closePanel);

    const input = document.getElementById('ai-input');
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); _submit(); }
      });
    }

    _addMsg('bot', '🏛️ Merhaba! Ben dijital rehberinizim. Külliye, tedavi yöntemleri, tarih veya müze hakkında aklınıza takılan her şeyi sorabilirsiniz.');
  }

  /* ── Panel aç/kapa ─────────────────────────────────────── */
  function togglePanel() { _open ? closePanel() : openPanel(); }

  function openPanel() {
    _open = true;
    document.getElementById('ai-panel')?.classList.add('open');
    document.getElementById('ai-fab')?.classList.add('hidden');
    setTimeout(() => document.getElementById('ai-input')?.focus(), 300);
  }

  function closePanel() {
    _open = false;
    document.getElementById('ai-panel')?.classList.remove('open');
    const fab = document.getElementById('ai-fab');
    if (fab && Navigation.activeScreen() !== 'screen-intro') {
      fab.classList.remove('hidden');
    }
  }

  /* ── Soru gönder ────────────────────────────────────────── */
  async function _submit() {
    const input = document.getElementById('ai-input');
    const q = (input?.value || '').trim();
    if (!q) return;

    _addMsg('user', q);
    input.value = '';
    input.disabled = true;
    document.getElementById('ai-send-btn').disabled = true;

    const typingId = _addMsg('bot typing', '✦ Düşünüyor…');

    try {
      const ans = await _callClaude(q);
      _removeMsg(typingId);
      _addMsg('bot', ans);
      AudioController.speak(ans);
    } catch (err) {
      _removeMsg(typingId);
      _addMsg('bot', '⚠️ Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
      console.error('[AIGuide]', err);
    } finally {
      input.disabled = false;
      document.getElementById('ai-send-btn').disabled = false;
      input.focus();
    }
  }

  /* ── Claude API çağrısı ─────────────────────────────────── */
  async function _callClaude(question) {
    // Mevcut tur adımını bağlam olarak al
    let stepContext = '';
    if (typeof TourManager !== 'undefined') {
      const step = TourManager.currentData();
      if (step) {
        stepContext = `\nZiyaretçi şu an "${step.t.replace(/\n/g,' ')}" durağında bulunuyor.\nDurak içeriği: ${step.m.substring(0, 600)}`;
      }
    }

    const systemPrompt = `Sen Sultan II. Bayezid Külliyesi Sağlık Müzesi'nin dijital rehberisin. Adın Evliya Çelebi'dir.
Müze Edirne'de, 1488 yılında inşa edilmiş tarihi bir Osmanlı külliyesidir.
Külliye; Darüşşifa (hastane), Tıp Medresesi, İmarethane, Cami ve diğer yapılardan oluşur.
Darüşşifada müzik, su sesi, koku ve meşguliyet terapileriyle tedavi yapılırdı.
İmarethane'de Yahya Baba efsanesi anlatılır: pilavın bereketlenmesi ve balıkların konuşması.
Türkçe, sıcak ve bilgilendirici bir üslupla cevap ver. Cevapların 2-4 cümle uzunluğunda olsun.
Bilmediğin şeylerde müze görevlilerine yönlendir.${stepContext}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: question }]
      })
    });

    if (!response.ok) throw new Error('API ' + response.status);
    const data = await response.json();
    return data.content?.map(b => b.text || '').join('') || 'Cevap alınamadı.';
  }

  /* ── Mesaj DOM işlemleri ─────────────────────────────────── */
  let _msgIdCounter = 0;

  function _addMsg(role, text) {
    const container = document.getElementById('ai-messages');
    if (!container) return null;
    const id  = 'aimsg-' + (++_msgIdCounter);
    const div = document.createElement('div');
    div.id = id;
    div.className = 'ai-msg ' + role;
    div.textContent = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return id;
  }

  function _removeMsg(id) {
    if (id) document.getElementById(id)?.remove();
  }

  return { init, openPanel, closePanel, togglePanel };
})();
