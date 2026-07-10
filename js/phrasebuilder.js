/* ═══════════════════════════════════════════════════════════
   phrasebuilder.js  —  Phrase Builder
   Ruta: drakón/js/phrasebuilder.js

   ANTES: 10 frases fijas en inglés hardcodeadas aquí mismo.
   AHORA: usa los ejercicios reales tipo "arrange" (ordenar
   palabras) del banco de lecciones del idioma que se está
   aprendiendo — el mismo contenido que ya usa la pestaña
   "Lecciones", vía DrakonBridge.
   ═══════════════════════════════════════════════════════════ */

const PhraseBuilder = (() => {

  /* ── Estado ─────────────────────────────────────────────── */
  let st = {};

  function _reset() {
    st = {
      phrases:   [],
      idx:       0,
      score:     0,
      correct:   0,
      placed:    [],       // palabras en la zona de respuesta
      pool:      [],       // [{ word, used }]
      answered:  false,
      hintShown: false,
    };
  }

  /* Convierte un ejercicio "arrange" del banco de lecciones en
     {words, hint, level}. La oración correcta (options[correct])
     ya viene perfectamente ordenada — se parte por espacios para
     obtener las piezas del rompecabezas, así que las piezas
     siempre coinciden EXACTAMENTE con el contenido validado del
     idioma real (nada inventado aquí). */
  function _toPhrase(ex) {
    const correctSentence = ex.options[ex.correct];
    const words = correctSentence.trim().split(/\s+/);
    return { words, hint: ex.explanation || '', level: ex.level || 'A1' };
  }

  /* ── Iniciar ─────────────────────────────────────────────── */
  function start() {
    GameSession.currentGame = 'phrasebuilder';
    _reset();

    const langCode = DrakonBridge.getLangCode();
    const langMeta = DrakonBridge.getLang();
    const pool = DrakonBridge.getExercisePool(langCode, ['arrange']);

    if (pool.length === 0) {
      GamesCore.showScreen('screen-phrasebuilder');
      GamesCore.showEmptyState('screen-phrasebuilder', {
        icon: '🧩',
        title: `${langMeta.name} todavía no tiene ejercicios de este tipo`,
        sub: `Phrase Builder usa ejercicios de "ordenar palabras" de las lecciones de ${langMeta.name}. Todavía no hay ninguno cargado para este idioma — vuelve pronto.`,
      });
      return;
    }

    const diff = ({beginner:0,medium:1,pro:2,legendary:3}[GameSession.difficulty] || 0);
    st.phrases = [...pool]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(5 + diff * 2, pool.length))
      .map(_toPhrase);

    GamesCore.showScreen('screen-phrasebuilder');
    _load();
  }

  /* ── Cargar frase ─────────────────────────────────────── */
  function _load() {
    if (st.idx >= st.phrases.length) { _finish(); return; }
    const p = st.phrases[st.idx];
    st.placed     = [];
    st.answered   = false;
    st.hintShown  = false;

    _set('pbProgressTxt', `${st.idx+1} / ${st.phrases.length}`);
    _set('pbScore', st.score);
    _set('pbTarget', 'Ordena las palabras para formar la frase correcta.');
    _set('pbHintLabel', '💡 TOCA PARA VER UNA PISTA');

    /* Feedback oculto */
    const fb = _el('pbFeedback');
    if (fb) { fb.style.display='none'; fb.className='g-pb-feedback'; }

    /* Pool: las palabras de la frase correcta, barajadas */
    st.pool = [...p.words]
      .sort(()=>Math.random()-.5)
      .map(w => ({word:w, used:false}));

    _renderAnswer();
    _renderPool();
  }

  /* ── Pista ───────────────────────────────────────────── */
  function toggleHint() {
    if (st.answered) return;
    st.hintShown = !st.hintShown;
    const p = st.phrases[st.idx];
    if (st.hintShown) {
      _set('pbTarget', p.hint || 'Sin pista disponible para este ejercicio.');
      _set('pbHintLabel', '💡 TOCA PARA OCULTAR');
    } else {
      _set('pbTarget', 'Ordena las palabras para formar la frase correcta.');
      _set('pbHintLabel', '💡 TOCA PARA VER UNA PISTA');
    }
  }

  /* ── Zona de respuesta ───────────────────────────────── */
  function _renderAnswer() {
    const zone = _el('pbAnswerZone');
    const ph   = _el('pbPlaceholder');
    if (!zone) return;

    /* Quitar chips colocados */
    zone.querySelectorAll('.g-pb-chip--placed').forEach(c=>c.remove());

    if (st.placed.length === 0) {
      if (ph) ph.style.display='block';
      zone.classList.remove('has-words');
    } else {
      if (ph) ph.style.display='none';
      zone.classList.add('has-words');
      st.placed.forEach((w,i)=>{
        const chip = document.createElement('div');
        chip.className   = 'g-pb-chip g-pb-chip--placed';
        chip.textContent = w;
        chip.title       = 'Toca para quitar';
        chip.onclick     = () => _removeWord(i);
        zone.appendChild(chip);
      });
    }
  }

  /* ── Pool ────────────────────────────────────────────── */
  function _renderPool() {
    const pool = _el('pbWordPool'); if (!pool) return;
    pool.innerHTML = '';
    st.pool.forEach((item, i) => {
      const chip = document.createElement('div');
      chip.className   = 'g-pb-chip' + (item.used ? ' g-pb-chip--used' : '');
      chip.textContent = item.word;
      chip.id          = `pbchip-${i}`;
      if (!item.used && !st.answered) {
        chip.onclick = () => _pickWord(i);
      }
      pool.appendChild(chip);
    });
  }

  function _pickWord(i) {
    if (st.answered || st.pool[i].used) return;
    st.pool[i].used = true;
    st.placed.push(st.pool[i].word);
    _renderAnswer();
    _renderPool();
  }

  function _removeWord(placedIdx) {
    if (st.answered) return;
    const word = st.placed.splice(placedIdx, 1)[0];
    const item = st.pool.find(it => it.word===word && it.used);
    if (item) item.used = false;
    _renderAnswer();
    _renderPool();
  }

  /* API pública: botón LIMPIAR */
  function clearAnswer() {
    if (st.answered) return;
    st.placed = [];
    st.pool.forEach(it => it.used=false);
    _renderAnswer();
    _renderPool();
  }

  /* API pública: botón VERIFICAR */
  function check() {
    if (st.answered) return;
    if (st.placed.length === 0) { GamesCore.toast('⚠️ Coloca al menos una palabra'); return; }

    const p       = st.phrases[st.idx];
    const given   = st.placed.join(' ');
    const correct = p.words.join(' ');
    const ok      = given === correct;
    st.answered   = true;

    const fb = _el('pbFeedback');
    if (fb) {
      fb.className   = 'g-pb-feedback ' + (ok ? 'g-pb-feedback--ok' : 'g-pb-feedback--bad');
      fb.textContent = ok ? `✅ ¡Correcto! "${correct}"` : `❌ Correcto: "${correct}"`;
      fb.style.display = 'block';
    }

    if (ok) {
      st.score  += 150;
      st.correct++;
      _set('pbScore', st.score);
      GamesCore.toast('🎯 ¡Perfecto! +150 pts', 1300);
    } else {
      GamesCore.toast('Orden incorrecto. ¡Sigue practicando!', 2000);
    }

    /* Deshabilitar pool */
    _el('pbWordPool')?.querySelectorAll('.g-pb-chip').forEach(c=>c.onclick=null);

    setTimeout(() => { st.idx++; _load(); }, ok ? 1400 : 2200);
  }

  /* ── Fin ─────────────────────────────────────────────── */
  function _finish() {
    GameSession.currentGame = null;
    const pct = Math.round((st.correct / st.phrases.length) * 100);
    const xp  = st.score + st.correct * 20;
    GamesCore.showResult({
      game:'phrasebuilder', won: pct>=60,
      stats:{
        xp, pct,
        sub: `${st.correct} de ${st.phrases.length} frases correctas.`,
        perfect: st.correct === st.phrases.length,
        items:[
          {val:st.score,          lbl:'PUNTOS'},
          {val:`${pct}%`,         lbl:'PRECISIÓN'},
          {val:st.correct,        lbl:'CORRECTAS'},
          {val:st.phrases.length, lbl:'TOTAL'},
        ],
      },
    });
  }

  /* ── Helpers ─────────────────────────────────────────── */
  function _el(id)  { return document.getElementById(id); }
  function _set(id,v){ const e=_el(id); if(e) e.textContent=v; }

  return { start, clearAnswer, check, toggleHint };

})();
