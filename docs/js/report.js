/* ═══════════════════════════════════════════════════════════
   report.js — Reportar respuestas de la IA dentro de la app
   Dependencias: state.js (state, save), ui.js (showToast), age-gate.js
   ═══════════════════════════════════════════════════════════
   Requisito de la política de contenido generado por IA de Google Play:
   la persona debe poder marcar/reportar respuestas ofensivas o inapropiadas
   sin salir de la app.

   Cómo funciona:
   · Cada respuesta de la IA (chat, historial y Situaciones, que usan los
     mismos contenedores #chatMsgs y #chatHistoryMsgs) recibe un botón
     «🚩 Reportar». Un observador las añade solas, sin tocar el código del chat.
   · Se envía a Firestore (colección `aiReports`, solo creación; ver
     firestore.rules) SOLO el texto de la respuesta, el motivo y una nota
     opcional: nunca nombre, correo ni uid.
   · Sin sesión o si falla el envío, se ofrece un borrador de correo al
     contacto de soporte (la persona decide si lo envía).
   · En modo infantil no hay chat con IA y nada de esto sale del dispositivo.
   ═══════════════════════════════════════════════════════════ */
(function(){
  const SUPPORT_EMAIL = 'joseluisdev123@gmail.com';
  const REASONS = [
    ['ofensiva',  'Ofensiva, de odio o acoso'],
    ['sexual',    'Sexual o no apta para menores'],
    ['peligrosa', 'Peligrosa o que incita a hacer daño'],
    ['incorrecta','Incorrecta o engañosa'],
    ['otra',      'Otro motivo']
  ];
  const MAX_TEXT = 1500, MAX_NOTE = 300, MAX_LOG = 30;

  function _css(){
    if(document.getElementById('rep-style')) return;
    const s = document.createElement('style'); s.id = 'rep-style';
    s.textContent =
      '.rep-btn{display:block;margin:7px 0 0 0;padding:2px 8px;border:1px solid var(--border);border-radius:99px;background:transparent;color:var(--muted);font:600 10.5px var(--fb,inherit);cursor:pointer;opacity:.8}' +
      '.rep-btn:hover,.rep-btn:focus{opacity:1;color:var(--text)}' +
      '.rep-opt{display:flex;gap:9px;align-items:center;padding:9px 4px;font-size:13px;color:var(--text)}' +
      '.rep-note{width:100%;box-sizing:border-box;margin-top:8px;min-height:54px;border:1px solid var(--border);border-radius:10px;padding:8px;background:var(--card);color:var(--text);font:13px var(--fb,inherit)}' +
      '.rep-actions{display:flex;gap:8px;margin-top:12px}.rep-actions button{flex:1;padding:11px;border-radius:12px;border:1px solid var(--border);background:var(--card);color:var(--text);font:700 13px var(--fb,inherit);cursor:pointer}' +
      '.rep-actions .rep-send{background:var(--gold);color:#1a1000;border-color:var(--gold)}.rep-info{font-size:11px;color:var(--muted);margin-top:8px;line-height:1.5}';
    document.head.appendChild(s);
  }

  // Añade el botón a cada respuesta de la IA que aún no lo tenga.
  function ensureReportButtons(root){
    if(!root) return 0;
    let added = 0;
    const msgs = root.querySelectorAll('.msg');
    msgs.forEach(function(m, i){
      if(m.classList.contains('user')) return;
      const bubble = m.querySelector('.bubble.ai'); if(!bubble) return;
      if(m.querySelector('.rep-btn')) return;
      // El primer mensaje del chat en vivo es el saludo fijo de la app, no una respuesta de la IA.
      if(root.id === 'chatMsgs' && m === root.firstElementChild) return;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'rep-btn';
      b.setAttribute('aria-label', 'Reportar esta respuesta de la IA');
      b.textContent = '🚩 Reportar';
      b.style.display = 'block';
      bubble.appendChild(b); // dentro de la burbuja: queda debajo del texto y no rompe el diseño en fila de .msg
      added++;
    });
    return added;
  }

  function _closeModal(){ const o = document.getElementById('repModal'); if(o) o.remove(); }

  function openAiReport(text){
    if(typeof isMinorRestricted === 'function' && isMinorRestricted()) return null;
    _css(); _closeModal();
    const ov = document.createElement('div'); ov.className = 'modal-ov'; ov.id = 'repModal';
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
    ov.dataset.text = String(text || '').slice(0, MAX_TEXT);
    ov.innerHTML =
      '<div class="modal-sheet"><div class="modal-handle"></div>' +
      '<div class="modal-title">Reportar respuesta</div>' +
      '<div class="modal-sub">¿Qué le pasa a esta respuesta de la IA?</div>' +
      REASONS.map(function(r, i){ return '<label class="rep-opt"><input type="radio" name="repReason" value="' + r[0] + '"' + (i === 0 ? ' checked' : '') + '> ' + r[1] + '</label>'; }).join('') +
      '<textarea class="rep-note" id="repNote" maxlength="' + MAX_NOTE + '" placeholder="Añade un comentario (opcional)"></textarea>' +
      '<div class="rep-info">Se envía el texto de esta respuesta y tu motivo. No se envía tu nombre ni tu correo.</div>' +
      '<div class="rep-actions"><button type="button" id="repCancel">Cancelar</button><button type="button" class="rep-send" id="repSend">Enviar reporte</button></div></div>';
    document.body.appendChild(ov);
    ov.querySelector('#repCancel').onclick = _closeModal;
    ov.addEventListener('click', function(e){ if(e.target === ov) _closeModal(); });
    ov.querySelector('#repSend').onclick = function(){
      const reason = (ov.querySelector('input[name=repReason]:checked') || {}).value || 'otra';
      const note = (ov.querySelector('#repNote') || {}).value || '';
      _closeModal();
      return submitAiReport({ text: ov.dataset.text, reason: reason, note: note });
    };
    return ov;
  }

  function _logLocal(reason, sent){
    try{
      if(typeof state === 'undefined') return;
      if(!Array.isArray(state.aiReportsLog)) state.aiReportsLog = [];
      state.aiReportsLog.push({ at: Date.now(), reason: reason, sent: !!sent });
      if(state.aiReportsLog.length > MAX_LOG) state.aiReportsLog = state.aiReportsLog.slice(-MAX_LOG);
      if(typeof save === 'function') save();
    }catch(e){}
  }

  function _toast(m){ if(typeof showToast === 'function') showToast(m); }

  // Devuelve { ok, via:'cloud'|'email'|null }
  async function submitAiReport(r){
    if(typeof isMinorRestricted === 'function' && isMinorRestricted()) return { ok:false, via:null };
    const reason = REASONS.some(function(x){ return x[0] === r.reason; }) ? r.reason : 'otra';
    const text = String(r.text || '').trim().slice(0, MAX_TEXT);
    if(!text) return { ok:false, via:null };
    const note = String(r.note || '').trim().slice(0, MAX_NOTE);
    const rec = { reason: reason, text: text, createdAt: Date.now() };
    if(note) rec.note = note;
    try{ if(state.lang && state.lang.code) rec.lang = String(state.lang.code).slice(0, 8); }catch(e){}
    try{ if(state.chatMode) rec.mode = String(state.chatMode).slice(0, 24); }catch(e){}
    const signedIn = !!(window._fbUser || (window._fbAuth && window._fbAuth.currentUser));
    if(signedIn && window._fbDb){
      try{
        await window._fbDb.collection('aiReports').add(rec);
        _logLocal(reason, true);
        _toast('✅ Gracias. Recibimos tu reporte.');
        return { ok:true, via:'cloud' };
      }catch(e){ /* sigue al correo */ }
    }
    _logLocal(reason, false);
    try{
      const body = 'Motivo: ' + reason + '\n' + (note ? 'Comentario: ' + note + '\n' : '') + '\nRespuesta de la IA:\n' + text;
      const url = 'mailto:' + SUPPORT_EMAIL + '?subject=' + encodeURIComponent('Reporte de respuesta de IA — Drakón') + '&body=' + encodeURIComponent(body);
      (window.drakonOpenUrl || function(u){ window.location.href = u; })(url);
    }catch(e){}
    _toast('📧 Se abrió un borrador de correo para enviar tu reporte.');
    return { ok:true, via:'email' };
  }

  document.addEventListener('click', function(e){
    const btn = e.target && e.target.closest && e.target.closest('.rep-btn'); if(!btn) return;
    const bubble = btn.closest('.bubble.ai');
    if(!bubble){ openAiReport(''); return; }
    const clone = bubble.cloneNode(true); clone.querySelectorAll('.rep-btn').forEach(function(x){ x.remove(); });
    openAiReport(clone.textContent);
  });

  function _watch(){
    _css();
    ['chatMsgs', 'chatHistoryMsgs'].forEach(function(id){
      const el = document.getElementById(id); if(!el || el.__repObs) return;
      el.__repObs = new MutationObserver(function(){ ensureReportButtons(el); });
      el.__repObs.observe(el, { childList: true });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _watch); else _watch();

  window.ensureReportButtons = ensureReportButtons;
  window.openAiReport = openAiReport;
  window.submitAiReport = submitAiReport;
  window.AI_REPORT_REASONS = REASONS.map(function(r){ return r[0]; });
})();
