/* ═══════════════════════════════════════════════════════════
   wordblaster.js  —  Word Blaster
   Ruta: drakón/js/wordblaster.js

   ANTES: banco fijo de 65 palabras en inglés hardcodeadas aquí
   mismo, sin importar qué idioma estuviera aprendiendo el
   usuario. AHORA: usa el banco real de lecciones del idioma
   actual (window.LESSON_BANKS, cargado por games.html vía
   js/lessons-data/<code>.js) a través de DrakonBridge — el mismo
   contenido validado que ya usa la pestaña "Lecciones".
   ═══════════════════════════════════════════════════════════ */

const WordBlaster = (() => {

  /* Tiempo por ronda (segundos), decrece con el índice */
  const TIMES = [15,15,14,14,13,12,12,11,11,10,10,9,9,8,8];
  const ROUNDS = 15;

  /* ── Estado ─────────────────────────────────────────────── */
  let st = {};

  function _reset() {
    st = {
      questions: [],
      idx:       0,
      score:     0,
      streak:    0,
      maxStreak: 0,
      correct:   0,
      interval:  null,
      answering: false,
      done:      false,
    };
  }

  /* ── Iniciar ─────────────────────────────────────────────── */
  function start() {
    GameSession.currentGame = 'wordblaster';
    _reset();

    const langCode = DrakonBridge.getLangCode();
    const langMeta = DrakonBridge.getLang();
    const pool = DrakonBridge.getExercisePool(langCode, ['mcq', 'translate', 'fill']);

    if (pool.length < 4) {
      GamesCore.showScreen('screen-wordblaster');
      GamesCore.showEmptyState('screen-wordblaster', {
        icon: '🌱',
        title: `${langMeta.name} todavía no tiene suficiente contenido`,
        sub: `Word Blaster usa las lecciones reales de ${langMeta.name}. Este idioma está en camino — mientras tanto prueba con inglés u otro idioma con más lecciones.`,
      });
      return;
    }

    st.questions = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(ROUNDS, pool.length));
    GamesCore.showScreen('screen-wordblaster');
    _renderDots();
    _load();
  }

  function stop() {
    _clearTimer();
    st.done = true;
  }

  /* ── Dots de progreso ─────────────────────────────────── */
  function _renderDots() {
    const c = _el('wbDots'); if (!c) return;
    c.innerHTML = st.questions.map((_,i)=>`<div class="g-wb-dot" id="wbd-${i}"></div>`).join('');
  }

  /* ── Cargar pregunta ─────────────────────────────────── */
  function _load() {
    if (st.idx >= st.questions.length) { _finish(); return; }

    const q = st.questions[st.idx];
    st.answering = false;

    _set('wbProgressTxt', `${st.idx+1} / ${st.questions.length}`);
    _set('wbScore',  st.score);
    _set('wbStreak', st.streak);
    _set('wbCardLabel', `RESPONDE RÁPIDO · NIVEL ${q.level || 'A1'}`);

    /* Dot actual */
    const dot = _el(`wbd-${st.idx}`);
    if (dot) { dot.className='g-wb-dot g-wb-dot--cur'; }

    /* Pregunta (viene tal cual del banco de lecciones real) */
    const wordEl = _el('wbWord');
    if (wordEl) {
      wordEl.textContent = q.question;
      wordEl.classList.toggle('g-wb-card__word--long', q.question.length > 42);
      wordEl.style.animation = 'none';
      void wordEl.offsetWidth;
      wordEl.style.animation = 'gWordIn .3s ease both';
    }
    _set('wbHint', q.context || '');
    _set('wbBonusInfo', '');

    /* Opciones: exactamente las 4 que trae el ejercicio, barajadas */
    const correct = q.options[q.correct];
    const opts = [...q.options].sort(() => Math.random() - 0.5);

    const container = _el('wbOptions');
    if (container) {
      container.innerHTML = opts.map(o => `
        <button class="g-wb-opt"
                data-val="${_esc(o)}"
                data-correct="${_esc(correct)}"
                onclick="WordBlaster._pick(this)">
          ${o}
        </button>
      `).join('');
    }

    /* Timer */
    _startTimer(TIMES[Math.min(st.idx, TIMES.length-1)]);
  }

  /* ── Timer ───────────────────────────────────────────── */
  function _startTimer(secs) {
    _clearTimer();
    let t = secs;
    _timerFill(1);
    st.interval = setInterval(() => {
      t -= 0.1;
      _timerFill(Math.max(0, t/secs));
      if (t <= 0) { _clearTimer(); if (!st.answering) _timeout(); }
    }, 100);
  }

  function _clearTimer() {
    if (st.interval) { clearInterval(st.interval); st.interval=null; }
  }

  function _timerFill(pct) {
    const f = _el('wbTimerFill'); if (!f) return;
    f.style.width = (pct*100)+'%';
    if      (pct > 0.5)  f.style.background = 'linear-gradient(90deg,var(--coral),var(--gold),var(--mint))';
    else if (pct > 0.25) f.style.background = 'linear-gradient(90deg,var(--gold),var(--coral))';
    else                 f.style.background = 'var(--coral)';
  }

  /* ── Tiempo agotado ──────────────────────────────────── */
  function _timeout() {
    if (st.answering || st.done) return;
    st.answering = true;
    st.streak = 0;
    _set('wbStreak', '0');
    const q = st.questions[st.idx];
    const correct = q.options[q.correct];
    document.querySelectorAll('.g-wb-opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.val === correct) b.classList.add('g-wb-opt--ok');
    });
    _dotMark(st.idx, false);
    GamesCore.toast(`⏱ Era: "${correct}"`, 1800);
    _set('wbBonusInfo', '');
    setTimeout(() => { st.idx++; _load(); }, 1500);
  }

  /* ── Selección de opción (pública para el HTML onclick) ── */
  function _pick(btn) {
    if (st.answering || st.done) return;
    _clearTimer();
    st.answering = true;

    const chosen  = btn.dataset.val;
    const correct = btn.dataset.correct;
    const ok      = chosen === correct;

    document.querySelectorAll('.g-wb-opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.val === correct) b.classList.add('g-wb-opt--ok');
    });
    if (!ok) btn.classList.add('g-wb-opt--bad');

    if (ok) {
      st.streak++;
      if (st.streak > st.maxStreak) st.maxStreak = st.streak;
      st.correct++;
      const mult = Math.min(st.streak, 6);
      const pts  = 100 + (mult-1)*20;
      st.score  += pts;
      _set('wbScore',  st.score);
      _set('wbStreak', st.streak);
      _dotMark(st.idx, true);
      const bonus = st.streak>1 ? `🔥 Racha ×${st.streak}  +${pts} pts` : `✅ +${pts} pts`;
      _set('wbBonusInfo', bonus);
      GamesCore.toast(bonus, 1300);
    } else {
      st.streak = 0;
      _set('wbStreak', '0');
      _dotMark(st.idx, false);
      _set('wbBonusInfo', '');
      GamesCore.toast(`❌ Era: "${correct}"`, 1600);
    }

    setTimeout(() => { st.idx++; _load(); }, 1200);
  }

  function _dotMark(idx, ok) {
    const d = _el(`wbd-${idx}`); if (!d) return;
    d.className = 'g-wb-dot ' + (ok ? 'g-wb-dot--ok' : 'g-wb-dot--bad');
  }

  /* ── Fin de partida ─────────────────────────────────── */
  function _finish() {
    _clearTimer();
    st.done = true;
    GameSession.currentGame = null;
    const pct = Math.round((st.correct / st.questions.length) * 100);
    const xp  = st.score + st.maxStreak * 30;
    GamesCore.showResult({
      game: 'wordblaster', won: pct >= 60,
      stats: {
        xp, pct,
        sub:     `${st.correct} de ${st.questions.length} correctas. Racha máxima: ${st.maxStreak}.`,
        perfect: st.correct === st.questions.length,
        items: [
          {val: st.score,                    lbl:'PUNTOS'},
          {val: `${pct}%`,                   lbl:'ACIERTOS'},
          {val: st.maxStreak,                lbl:'RACHA MÁX'},
          {val: st.correct,                  lbl:'CORRECTAS'},
        ],
      },
    });
  }

  /* ── Helpers ─────────────────────────────────────────── */
  function _el(id)  { return document.getElementById(id); }
  function _set(id,v){ const e=_el(id); if(e) e.textContent=v; }
  function _esc(s)  { return s.replace(/"/g,'&quot;'); }

  return { start, stop, _pick };

})();
