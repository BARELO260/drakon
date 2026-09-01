/* ═══════════════════════════════════════════════════════════
   lessons.js — Motor de lecciones (multi-idioma)
   Drakón v6.0 — Arquitectura escalable
   ═══════════════════════════════════════════════════════════
   El contenido YA NO vive en este archivo. Cada idioma tiene su propio
   banco de lecciones en js/lessons-data/<code>.js (ej. en.js, es.js,
   fr.js...), cargado como <script> antes de este archivo. Cada uno
   registra su contenido en window.LESSON_BANKS.<CODE>.

   Ver js/lessons-data/README.md para el formato exacto y cómo agregar
   lecciones nuevas — añadir contenido NUNCA requiere tocar este motor.

   Estructura de este archivo:
     · getLessonsForLang(code) → banco de lecciones ya normalizado (cache)
     · LessonEngine            → motor de ejercicios (vidas, progreso...)
     · renderLessons()         → renderiza la lista de lecciones del tab
     · startLesson(id)         → lanza una lección del idioma activo
   ═══════════════════════════════════════════════════════════ */

/* Convierte el formato compacto (arrays posicionales) en los objetos
   completos que usa LessonEngine — así el motor no necesita cambiar. */
function buildLessons(source){
  return (source || []).map(l=>({
    id: l.id, level: l.level, title: l.title, emoji: l.emoji,
    description: l.description, xp: l.xp, study: l.study || null,
    exercises: l.ex.map(e=>({
      type: e[0], question: e[1], options: e[2], correct: e[3],
      explanation: e[4], ...(e[5] ? {context: e[5]} : {})
    }))
  }));
}

// Caché: cada banco solo se normaliza (buildLessons) la primera vez que se pide.
const _lessonBankCache = {};
function getLessonsForLang(langCode){
  const code = (langCode || 'EN').toUpperCase();
  if (!_lessonBankCache[code]) {
    const raw = (typeof window.LESSON_BANKS !== 'undefined') ? window.LESSON_BANKS[code] : null;
    _lessonBankCache[code] = buildLessons(raw || []);
  }
  return _lessonBankCache[code];
}

// Idioma de lecciones actualmente activo (según el idioma que el usuario está aprendiendo)
function _activeLessonLangCode(){
  return (typeof state !== 'undefined' && state.lang && state.lang.code) ? state.lang.code : 'EN';
}

const LessonEngine = {

  /* ── Estado ─────────────────────────── */
  lesson:       null,
  exercises:    [],
  currentIdx:   0,
  lives:        5,
  maxLives:     5,
  correctCount: 0,
  answered:     false,   // bloquea respuesta hasta pulsar "Siguiente"
  xpEarned:     0,

  // Estado auxiliar de los ejercicios interactivos (Phrase Builder,
  // Listening Probe y sopa de letras) integrados como tipos de ejercicio
  // más — se reinician en cada _renderExercise() que los use.
  _arrange:    null,
  _listen:     null,
  _wordsearch: null,
  _listenVizBars: [],
  _listenVizAnim: null,

  /* ── Iniciar lección ────────────────── */
  start(lessonId) {
    // Las lecciones contextuales de "Situaciones" (id con prefijo "sit_")
    // viven en un banco aparte (js/situations-data.js) — ver
    // getAllSituationLessonsFlat(). El motor de ejercicios es el mismo.
    const lessons = String(lessonId).startsWith('sit_') && typeof getAllSituationLessonsFlat === 'function'
      ? getAllSituationLessonsFlat(_activeLessonLangCode())
      : getLessonsForLang(_activeLessonLangCode());
    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.lesson       = lesson;
    // Barajamos las opciones de cada ejercicio en cada intento. Así la
    // respuesta correcta cae en una posición distinta cada vez (A/B/C/D
    // equilibradas) sin depender de cómo se haya escrito el contenido, y
    // repetir la lección no vuelve predecible el orden.
    this.exercises    = lesson.exercises.map(ex => this._shuffleOptions(ex));

    // Sopa de letras: aparece como un ejercicio más, pero con MUCHA menor
    // frecuencia que los demás (solo en algunas lecciones) y siempre con
    // el vocabulario propio de esa lección — así mantiene la temática.
    const wsBonus = this._buildWordsearchExercise(lesson);
    if (wsBonus) {
      const insertAt = Math.min(this.exercises.length, Math.floor(this.exercises.length * 0.6) + 1);
      this.exercises.splice(insertAt, 0, wsBonus);
    }

    this.currentIdx   = 0;
    this.lives        = this.maxLives;
    this.correctCount = 0;
    this.answered     = false;
    this.xpEarned     = 0;
    this._arrange     = null;
    this._listen      = null;
    this._wordsearch  = null;
    this._listenVizStop();

    goTo('screen-exercise');
    this._updateTopBar();
    this._renderExercise();
  },

  /* ── Sopa de letras: construir el ejercicio bonus de una lección ──
     Frecuencia baja y estable (no cambia entre intentos de la misma
     lección): decidida por un hash del id de la lección, ~1 de cada 3.
     Las palabras salen SIEMPRE del propio contenido de la lección
     (glosario de estudio + opciones de sus ejercicios), nunca de un
     banco genérico, para que el tema coincida con el de la lección. */
  _buildWordsearchExercise(lesson) {
    let hash = 0;
    for (let i = 0; i < lesson.id.length; i++) hash = (hash * 31 + lesson.id.charCodeAt(i)) >>> 0;
    if (hash % 3 !== 0) return null;

    const clean = s => String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z]/g, '').toUpperCase();

    const raw = [];
    (lesson.study && lesson.study.vocab || []).forEach(v => raw.push(v[0]));
    lesson.exercises.forEach(ex => {
      if (Array.isArray(ex.options)) ex.options.forEach(o => raw.push(o));
    });

    const words = [...new Set(
      raw.flatMap(s => String(s).split(/\s+/)).map(clean).filter(w => w.length >= 3 && w.length <= 8)
    )];
    if (words.length < 6) return null;

    return {
      type: 'wordsearch',
      question: 'Encuentra en la cuadrícula palabras de esta lección.',
      wordBank: words,
      explanation: '¡Buen repaso del vocabulario de esta lección!',
    };
  },

  /* ── Barajar opciones (Fisher-Yates) sin mutar el banco original ── */
  _shuffleOptions(ex) {
    if (!Array.isArray(ex.options) || ex.options.length < 2) return ex;
    const correctValue = ex.options[ex.correct];
    const order = ex.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const options = order.map(i => ex.options[i]);
    return { ...ex, options, correct: options.indexOf(correctValue) };
  },

  /* ── Barra superior ─────────────────── */
  _updateTopBar() {
    // Progreso
    const pct = (this.currentIdx / this.exercises.length) * 100;
    const fill = document.getElementById('exFill');
    if (fill) fill.style.width = pct + '%';

    // Vidas
    const livesEl = document.getElementById('livesEl');
    if (livesEl) {
      livesEl.innerHTML = '';
      for (let i = 0; i < this.maxLives; i++) {
        const heart = document.createElement('span');
        heart.className = 'life-heart' + (i < this.lives ? '' : ' lost');
        heart.textContent = i < this.lives ? '❤️' : '🖤';
        livesEl.appendChild(heart);
      }
    }
  },

  /* ── Renderizar ejercicio actual ────── */
  _renderExercise() {
    const area = document.getElementById('exArea');
    if (!area) return;

    if (this.currentIdx >= this.exercises.length) {
      this._showFinalResult();
      return;
    }

    this.answered = false;
    const ex = this.exercises[this.currentIdx];
    const progress = `${this.currentIdx + 1} / ${this.exercises.length}`;

    if (ex.type === 'writing' || ex.type === 'speaking') {
      const isSpeaking = ex.type === 'speaking';
      area.innerHTML = `
        <div class="ex-card ex-production-card">
          <div class="ex-progress-label">${progress} · ${isSpeaking ? 'EXPRESIÓN ORAL' : 'EXPRESIÓN ESCRITA'}</div>
          ${ex.context ? `<div class="ex-context">${ex.context}</div>` : ''}
          <div class="ex-question">${ex.question}</div>
          <div class="ex-production-tip">Usa al menos ${ex.minWords || 25} palabras. Recibirás una revisión orientativa de los criterios de la tarea.</div>
          <textarea id="exProductionInput" class="ex-production-input" rows="6" placeholder="${isSpeaking ? 'Habla con el micrófono o escribe tu respuesta aquí…' : 'Escribe tu respuesta aquí…'}"></textarea>
          ${isSpeaking ? '<button class="ex-production-mic" onclick="LessonEngine.captureSpeech()">🎙️ GRABAR RESPUESTA</button>' : ''}
          <button class="ex-next-btn" id="exSubmitProduction" onclick="LessonEngine.submitProduction()">REVISAR RESPUESTA</button>
          <div class="ex-feedback" id="exFeedback" style="display:none"></div>
          <button class="ex-next-btn" id="exNextBtn" style="display:none" onclick="LessonEngine.nextExercise()">Siguiente ejercicio →</button>
        </div>`;
      return;
    }

    // Sopa de letras (buscador de palabras) — ejercicio bonus de baja
    // frecuencia, con las palabras propias de esta lección.
    if (ex.type === 'wordsearch') {
      this._renderWordsearch(progress, ex);
      return;
    }

    // Phrase Builder — ordenar palabras (ejercicios tipo "arrange").
    if (ex.type === 'arrange') {
      this._renderArrange(progress, ex);
      return;
    }

    // Listening Probe — escuchar y elegir (ejercicios tipo "translate").
    if (ex.type === 'translate') {
      this._renderListen(progress, ex);
      return;
    }

    let html = `
      <div class="ex-card">
        <div class="ex-progress-label">${progress}</div>
        ${ex.context ? `<div class="ex-context">${ex.context}</div>` : ''}
        <div class="ex-question">${ex.question}</div>
        <div class="ex-options" id="exOptions">
    `;

    ex.options.forEach((opt, i) => {
      html += `
        <button class="ex-option" id="exOpt-${i}" onclick="LessonEngine.answer(${i})">
          <span class="ex-opt-letter">${['A','B','C','D'][i]}</span>
          <span class="ex-opt-text">${opt}</span>
        </button>
      `;
    });

    html += `
        </div>
        <div class="ex-feedback" id="exFeedback" style="display:none"></div>
        <button class="ex-next-btn" id="exNextBtn" style="display:none"
          onclick="LessonEngine.nextExercise()">
          Siguiente ejercicio →
        </button>
      </div>
    `;

    area.innerHTML = html;
  },

  /* ════════════════════════════════════════════════════════════
     PHRASE BUILDER — ejercicios tipo "arrange" integrados como
     un ejercicio más de la lección (antes vivía en la Zona de
     Juegos aparte). La frase objetivo es siempre options[correct],
     tal como ya la escribió el contenido de ESTA lección, así que
     la temática coincide siempre con la lección en curso.
     ════════════════════════════════════════════════════════════ */
  _renderArrange(progress, ex) {
    const area = document.getElementById('exArea');
    const target = String(ex.options[ex.correct]).trim().split(/\s+/);

    // Un par de palabras señuelo, tomadas de otras frases "arrange" de
    // esta misma lección (si existen) — mantiene el mismo tema y da algo
    // más de reto sin inventar vocabulario ajeno a la lección.
    const others = this.exercises.filter(e => e.type === 'arrange' && e !== ex);
    let decoys = [];
    if (others.length) {
      const bank = others.flatMap(o => String(o.options[o.correct]).split(/\s+/));
      const candidates = [...new Set(bank)].filter(w => !target.includes(w));
      decoys = candidates.sort(() => Math.random() - 0.5).slice(0, 1);
    }
    const pool = [...target, ...decoys].sort(() => Math.random() - 0.5).map(w => ({ word: w, used: false }));
    this._arrange = { target, pool, placed: [] };

    area.innerHTML = `
      <div class="ex-card">
        <div class="ex-progress-label">${progress} · ORDENA LAS PALABRAS</div>
        ${ex.context ? `<div class="ex-context">${ex.context}</div>` : ''}
        <div class="ex-question">${ex.question}</div>
        <div class="ex-arrange-wrap">
          <div class="ex-arrange-zone-label">TU RESPUESTA</div>
          <div class="ex-arrange-answer" id="exArrAnswer">
            <div class="ex-arrange-placeholder" id="exArrPlaceholder">Toca las palabras para colocarlas aquí…</div>
          </div>
          <div class="ex-arrange-zone-label">PALABRAS DISPONIBLES</div>
          <div class="ex-arrange-pool" id="exArrPool"></div>
          <div class="ex-arrange-actions">
            <button class="ex-arrange-btn ex-arrange-btn--clear" onclick="LessonEngine.arrangeClear()">✕ Limpiar</button>
            <button class="ex-arrange-btn ex-arrange-btn--check" onclick="LessonEngine.arrangeCheck()">✓ Verificar</button>
          </div>
        </div>
        <div class="ex-feedback" id="exFeedback" style="display:none"></div>
        <button class="ex-next-btn" id="exNextBtn" style="display:none" onclick="LessonEngine.nextExercise()">Siguiente ejercicio →</button>
      </div>
    `;

    this._renderArrangeAnswer();
    this._renderArrangePool();
  },

  _renderArrangeAnswer() {
    const zone = document.getElementById('exArrAnswer');
    const ph = document.getElementById('exArrPlaceholder');
    if (!zone || !this._arrange) return;
    zone.querySelectorAll('.ex-arrange-chip--placed').forEach(c => c.remove());
    if (this._arrange.placed.length === 0) {
      if (ph) ph.style.display = 'block';
      zone.classList.remove('has-words');
    } else {
      if (ph) ph.style.display = 'none';
      zone.classList.add('has-words');
      this._arrange.placed.forEach((w, i) => {
        const chip = document.createElement('div');
        chip.className = 'ex-arrange-chip ex-arrange-chip--placed';
        chip.textContent = w;
        chip.title = 'Toca para quitar';
        chip.onclick = () => this.arrangeRemove(i);
        zone.appendChild(chip);
      });
    }
  },

  _renderArrangePool() {
    const pool = document.getElementById('exArrPool');
    if (!pool || !this._arrange) return;
    pool.innerHTML = '';
    this._arrange.pool.forEach((item, i) => {
      const chip = document.createElement('div');
      chip.className = 'ex-arrange-chip' + (item.used ? ' ex-arrange-chip--used' : '');
      chip.textContent = item.word;
      if (!item.used && !this.answered) chip.onclick = () => this.arrangePick(i);
      pool.appendChild(chip);
    });
  },

  arrangePick(i) {
    const st = this._arrange;
    if (!st || this.answered || st.pool[i].used) return;
    st.pool[i].used = true;
    st.placed.push(st.pool[i].word);
    this._renderArrangeAnswer();
    this._renderArrangePool();
  },

  arrangeRemove(idx) {
    const st = this._arrange;
    if (!st || this.answered) return;
    const word = st.placed.splice(idx, 1)[0];
    const item = st.pool.find(it => it.word === word && it.used);
    if (item) item.used = false;
    this._renderArrangeAnswer();
    this._renderArrangePool();
  },

  arrangeClear() {
    const st = this._arrange;
    if (!st || this.answered) return;
    st.placed = [];
    st.pool.forEach(it => it.used = false);
    this._renderArrangeAnswer();
    this._renderArrangePool();
  },

  arrangeCheck() {
    const st = this._arrange;
    if (!st || this.answered) return;
    if (st.placed.length === 0) {
      if (typeof showToast === 'function') showToast('⚠️ Coloca al menos una palabra');
      return;
    }
    const given = st.placed.join(' ');
    const correct = st.target.join(' ');
    const ok = given === correct;
    document.querySelectorAll('#exArrPool .ex-arrange-chip').forEach(c => c.onclick = null);
    this._settle(ok, ok ? null : correct);
  },

  /* ════════════════════════════════════════════════════════════
     LISTENING PROBE — ejercicios tipo "translate" integrados como
     un ejercicio más. Se reproduce en voz alta la respuesta
     correcta real de la lección (options[correct]) y se responde
     con las mismas 4 opciones ya validadas del banco de la lección.
     ════════════════════════════════════════════════════════════ */
  _renderListen(progress, ex) {
    const area = document.getElementById('exArea');
    const audioText = String(ex.options[ex.correct]).replace(/\s*\([^)]*\)/g, '').trim();
    this._listen = { audio: audioText, played: false };

    let html = `
      <div class="ex-card">
        <div class="ex-progress-label">${progress} · ESCUCHA Y ELIGE</div>
        ${ex.context ? `<div class="ex-context">${ex.context}</div>` : ''}
        <div class="ex-question">${ex.question}</div>
        <div class="ex-listen-note">🎧 Reproduce el audio con la pronunciación de la respuesta correcta antes de elegir.</div>
        <div class="ex-listen-wrap">
          <div class="ex-listen-viz" id="exListenViz"></div>
          <button class="ex-listen-play" id="exListenPlayBtn" onclick="LessonEngine.listenPlay()">
            <span id="exListenIcon">▶</span>
            <span id="exListenLabel">REPRODUCIR AUDIO</span>
          </button>
        </div>
        <div class="ex-options" id="exOptions">
    `;
    ex.options.forEach((opt, i) => {
      html += `
        <button class="ex-option" id="exOpt-${i}" onclick="LessonEngine.answer(${i})">
          <span class="ex-opt-letter">${['A','B','C','D'][i]}</span>
          <span class="ex-opt-text">${opt}</span>
        </button>
      `;
    });
    html += `
        </div>
        <div class="ex-feedback" id="exFeedback" style="display:none"></div>
        <button class="ex-next-btn" id="exNextBtn" style="display:none" onclick="LessonEngine.nextExercise()">Siguiente ejercicio →</button>
      </div>
    `;
    area.innerHTML = html;
    this._listenVizBuild();
  },

  _listenVizBuild() {
    const viz = document.getElementById('exListenViz');
    this._listenVizStop();
    if (!viz) return;
    viz.innerHTML = '';
    this._listenVizBars = [];
    for (let i = 0; i < 24; i++) {
      const b = document.createElement('div');
      b.className = 'ex-listen-vbar';
      viz.appendChild(b);
      this._listenVizBars.push({ el: b, ph: Math.random() * Math.PI * 2, fr: 0.8 + Math.random() * 2.2 });
    }
  },

  _listenVizStart() {
    let t = 0;
    const tick = () => {
      t += 0.07;
      this._listenVizBars.forEach(b => {
        const h = 4 + Math.abs(Math.sin(t * b.fr + b.ph)) * 34;
        b.el.style.height = h + 'px';
        b.el.style.opacity = (0.4 + 0.6 * (h / 38)).toFixed(2);
      });
      this._listenVizAnim = requestAnimationFrame(tick);
    };
    if (this._listenVizAnim) cancelAnimationFrame(this._listenVizAnim);
    this._listenVizAnim = requestAnimationFrame(tick);
  },

  _listenVizStop() {
    if (this._listenVizAnim) { cancelAnimationFrame(this._listenVizAnim); this._listenVizAnim = null; }
    (this._listenVizBars || []).forEach(b => { b.el.style.height = '4px'; b.el.style.opacity = '.3'; });
  },

  listenPlay() {
    const st = this._listen;
    if (!st) return;
    const btn = document.getElementById('exListenPlayBtn');
    if (btn) btn.disabled = true;
    this._listenVizStart();
    const icon = document.getElementById('exListenIcon'); if (icon) icon.textContent = '⏸';
    const label = document.getElementById('exListenLabel'); if (label) label.textContent = 'REPRODUCIENDO…';

    const langTag = (typeof state !== 'undefined' && state.lang && state.lang.lang) || 'en-US';
    const onEnd = () => this._listenAudioEnd();

    // Motor de voz compartido (js/tts-eleven.js): ElevenLabs con fallback
    // automático a Web Speech API si no hay API key configurada o falla.
    if (typeof ttsSpeakPhrase === 'function') {
      ttsSpeakPhrase(st.audio, langTag, 0.92, onEnd);
    } else {
      if (typeof showToast === 'function') showToast('⚠️ Tu navegador no soporta síntesis de voz');
      setTimeout(onEnd, 1200);
    }
    st.played = true;
  },

  _listenAudioEnd() {
    this._listenVizStop();
    const btn = document.getElementById('exListenPlayBtn');
    if (btn) btn.disabled = false;
    const icon = document.getElementById('exListenIcon'); if (icon) icon.textContent = '↺';
    const label = document.getElementById('exListenLabel'); if (label) label.textContent = 'ESCUCHAR DE NUEVO';
  },

  /* ════════════════════════════════════════════════════════════
     SOPA DE LETRAS — ejercicio bonus de baja frecuencia, con las
     palabras del glosario/ejercicios de la lección en curso.
     ════════════════════════════════════════════════════════════ */
  _renderWordsearch(progress, ex) {
    const area = document.getElementById('exArea');
    const n = 8;
    const candidates = [...ex.wordBank].sort(() => Math.random() - 0.5).filter(w => w.length <= n);
    const grid = Array.from({ length: n }, () => Array(n).fill(''));
    const list = [];
    for (const word of candidates) {
      if (list.length >= 5) break;
      let placed = false;
      for (let k = 0; k < 60 && !placed; k++) {
        const dirs = [[0,1],[1,0],[1,1],[-1,1]];
        const [dr, dc] = dirs[Math.floor(Math.random() * dirs.length)];
        const rMin = dr < 0 ? word.length - 1 : 0, rMax = dr > 0 ? n - word.length : n - 1;
        const cMax = dc > 0 ? n - word.length : n - 1;
        if (rMax < rMin || cMax < 0) continue;
        const r = rMin + Math.floor(Math.random() * (rMax - rMin + 1));
        const c = Math.floor(Math.random() * (cMax + 1));
        if (word.split('').every((ch, j) => !grid[r + dr*j][c + dc*j] || grid[r + dr*j][c + dc*j] === ch)) {
          word.split('').forEach((ch, j) => grid[r + dr*j][c + dc*j] = ch);
          list.push(word);
          placed = true;
        }
      }
    }
    if (list.length < 3) {
      // No se pudo armar un tablero decente: se cuenta como completado
      // automáticamente para no bloquear la lección por esto.
      this._settle(true, null);
      return;
    }
    grid.forEach(row => row.forEach((x, i) => { if (!x) row[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random()*26)]; }));
    this._wordsearch = { grid, list, found: [], selected: [] };

    area.innerHTML = `
      <div class="ex-card">
        <div class="ex-progress-label">${progress} · SOPA DE LETRAS</div>
        <div class="ex-question">${ex.question}</div>
        <div id="exWsArea"></div>
        <div class="ex-feedback" id="exFeedback" style="display:none"></div>
        <button class="ex-next-btn" id="exNextBtn" style="display:none" onclick="LessonEngine.nextExercise()">Siguiente ejercicio →</button>
      </div>
    `;
    this._renderWordsearchArea();
  },

  _renderWordsearchArea() {
    const host = document.getElementById('exWsArea');
    const st = this._wordsearch;
    if (!host || !st) return;
    host.innerHTML = `
      <div class="ex-ws-words">${st.list.map(w => `<span class="${st.found.includes(w) ? 'found' : ''}">${w}</span>`).join('')}</div>
      <p class="ex-ws-help">Toca las letras en orden para formar cada palabra.</p>
      <div class="ex-ws-grid" style="grid-template-columns:repeat(${st.grid.length},1fr)">
        ${st.grid.flatMap((row, i) => row.map((ch, j) => `<button class="${st.selected.some(p => p[0]===i && p[1]===j) ? 'selected' : ''}" onclick="LessonEngine.wordsearchCell(${i},${j})">${ch}</button>`)).join('')}
      </div>
      <button class="ex-ws-clear" onclick="LessonEngine.wordsearchClear()">Limpiar selección</button>
    `;
  },

  wordsearchCell(r, c) {
    const st = this._wordsearch;
    if (!st || this.answered) return;
    const prev = st.selected.at(-1);
    if (prev && Math.max(Math.abs(prev[0]-r), Math.abs(prev[1]-c)) !== 1) st.selected = [];
    st.selected.push([r, c]);
    const word = st.selected.map(p => st.grid[p[0]][p[1]]).join('');
    if (st.list.includes(word) && !st.found.includes(word)) {
      st.found.push(word);
      st.selected = [];
      if (typeof playSound === 'function') playSound('correct');
      if (st.found.length === st.list.length) {
        this._renderWordsearchArea();
        this._settle(true, null);
        return;
      }
    } else if (!st.list.some(w => w.startsWith(word))) {
      st.selected = [[r, c]];
    }
    this._renderWordsearchArea();
  },

  wordsearchClear() {
    if (this._wordsearch) { this._wordsearch.selected = []; this._renderWordsearchArea(); }
  },

  /* ── Resolver un ejercicio (usado por mcq/arrange/listen/wordsearch) ──
     Centraliza vidas, XP, sonido y el feedback final para que los
     ejercicios integrados (Phrase Builder, Listening Probe, sopa de
     letras) se comporten exactamente igual que un ejercicio normal. ── */
  _settle(isCorrect, correctText) {
    const ex = this.exercises[this.currentIdx];
    this.answered = true;
    const feedback = document.getElementById('exFeedback');
    if (feedback) {
      feedback.style.display = 'block';
      if (isCorrect) {
        this.correctCount++;
        this.xpEarned += Math.floor(this.lesson.xp / this.exercises.length);
        feedback.className = 'ex-feedback correct';
        const msgs = ['¡Correcto! 🎉', '¡Excelente! ⭐', '¡Perfecto! 🔥', '¡Muy bien! 💪', '¡Genial! ✨'];
        feedback.innerHTML = `
          <div class="ex-fb-header">${msgs[Math.floor(Math.random() * msgs.length)]}</div>
          <div class="ex-fb-explanation">${ex.explanation || ''}</div>
        `;
      } else {
        this.lives--;
        feedback.className = 'ex-feedback wrong';
        feedback.innerHTML = `
          <div class="ex-fb-header">Respuesta incorrecta 😕</div>
          ${correctText ? `<div class="ex-fb-correct">✅ La respuesta correcta es: <strong>${correctText}</strong></div>` : ''}
          <div class="ex-fb-explanation">${ex.explanation || ''}</div>
        `;
      }
    }
    const nextBtn = document.getElementById('exNextBtn');
    if (nextBtn) {
      if (this.currentIdx === this.exercises.length - 1) nextBtn.textContent = 'Ver resultados 🏆';
      nextBtn.style.display = 'block';
    }
    this._updateTopBar();
    if (this.lives <= 0 && nextBtn) {
      nextBtn.textContent = 'Ver resultados 💔';
      nextBtn.classList.add('ex-next-btn--danger');
    }
    if (typeof playSound === 'function') playSound(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect && typeof rememberFocusArea === 'function') rememberFocusArea(this.lesson?.title || 'Repaso de lecciones');
    if (isCorrect && typeof gainXP === 'function') gainXP(3, false);
  },

  submitProduction() {
    if (this.answered) return;
    const input = document.getElementById('exProductionInput');
    const response = (input?.value || '').trim();
    const ex = this.exercises[this.currentIdx];
    const words = response ? response.split(/\s+/).length : 0;
    const criteria = Array.isArray(ex.correct) ? ex.correct : [];
    const normalized = response.toLowerCase();
    const covered = criteria.filter(item => normalized.includes(String(item).toLowerCase()));
    const enoughLength = words >= (ex.minWords || 25);
    const meetsTask = enoughLength && (criteria.length === 0 || covered.length >= Math.ceil(criteria.length / 2));
    this.answered = true;
    if (input) input.disabled = true;
    const submit = document.getElementById('exSubmitProduction');
    if (submit) submit.disabled = true;
    const feedback = document.getElementById('exFeedback');
    if (feedback) {
      feedback.style.display = 'block';
      feedback.className = `ex-feedback ${meetsTask ? 'correct' : 'wrong'}`;
      feedback.innerHTML = `<div class="ex-fb-header">${meetsTask ? '¡Buen trabajo de producción! 🎙️' : 'Revisa la consigna y vuelve a intentarlo'}</div><div class="ex-fb-explanation">${ex.explanation}</div><div class="ex-fb-correct">Criterios de autoevaluación: ${criteria.map(item => `${covered.includes(item) ? '✓' : '○'} ${item}`).join(' · ') || 'claridad, coherencia y precisión'}</div>`;
    }
    if (meetsTask) { this.correctCount++; this.xpEarned += Math.floor(this.lesson.xp / this.exercises.length); if (typeof gainXP === 'function') gainXP(3, false); }
    else this.lives--;
    this._updateTopBar();
    const next = document.getElementById('exNextBtn');
    if (next) { next.style.display = 'block'; if (this.currentIdx === this.exercises.length - 1) next.textContent = 'Ver resultados 🏆'; }
  },

  captureSpeech() {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) { alert('El reconocimiento de voz no está disponible en este navegador. Puedes escribir tu respuesta.'); return; }
    const recognition = new Recognition();
    recognition.lang = (typeof state !== 'undefined' && state.lang?.lang) || 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    const input = document.getElementById('exProductionInput');
    recognition.onresult = event => { if (input) input.value = event.results[0][0].transcript; };
    recognition.onerror = () => { if (input) input.placeholder = 'No se detectó voz. Escribe tu respuesta para continuar.'; };
    recognition.start();
  },

  /* ── Responder ──────────────────────── */
  answer(selectedIdx) {
    if (this.answered) return;

    const ex = this.exercises[this.currentIdx];

    // Listening Probe: hay que reproducir el audio al menos una vez
    // antes de poder elegir una respuesta.
    if (ex.type === 'translate' && this._listen && !this._listen.played) {
      if (typeof showToast === 'function') showToast('🔊 Primero reproduce el audio');
      const pb = document.getElementById('exListenPlayBtn');
      if (pb) { pb.style.animation = 'none'; void pb.offsetWidth; pb.style.animation = 'exListenPulse .5s ease 2'; }
      return;
    }

    const isCorrect = selectedIdx === ex.correct;

    // Colorear opciones
    for (let i = 0; i < ex.options.length; i++) {
      const btn = document.getElementById('exOpt-' + i);
      if (!btn) continue;
      btn.disabled = true;
      if (i === ex.correct) {
        btn.classList.add('correct');
      } else if (i === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    }

    this._settle(isCorrect, isCorrect ? null : ex.options[ex.correct]);
  },

  /* ── Siguiente ejercicio ────────────── */
  nextExercise() {
    if (typeof ttsStopAll === 'function') ttsStopAll();
    this._listenVizStop();

    if (this.lives <= 0) {
      this._showFinalResult();
      return;
    }

    this.currentIdx++;

    if (this.currentIdx >= this.exercises.length) {
      this._showFinalResult();
      return;
    }

    this._updateTopBar();
    this._renderExercise();

    // Scroll suave arriba
    const area = document.getElementById('exArea');
    if (area) area.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /* ── Resultado final ────────────────── */
  _showFinalResult() {
    const total = this.exercises.length;
    const pct   = Math.round((this.correctCount / total) * 100);
    const won   = this.lives > 0 && pct >= 50;

    // Sonido de victoria — una sola vez, solo si la lección se aprobó.
    // No es async ni bloqueante: no interfiere con el render de abajo.
    if (won && typeof playSound === 'function') playSound('win');

    // Marcar lección como completada en el estado
    if (typeof state !== 'undefined') {
      if (won && !state.lessonsCompleted.includes(this.lesson.id)) {
        state.lessonsCompleted.push(this.lesson.id);
      }
      if (won && typeof rememberLesson === 'function') rememberLesson(this.lesson);
      // Racha diaria — hacer una lección cuenta como actividad del día,
      // igual que chatear con la IA (antes solo el chat la activaba).
      if (typeof markActivity === 'function') markActivity();
      if (typeof updateStreakUI === 'function') updateStreakUI();
      // Misiones
      if (typeof checkMissions === 'function') checkMissions();
      if (typeof checkAchievements === 'function') checkAchievements();
      if (typeof save === 'function') save();
    }

    // XP total de la lección
    const totalXP = won ? this.lesson.xp : Math.floor(this.lesson.xp * 0.3);
    if (typeof gainXP === 'function') gainXP(totalXP);

    // Pantalla de resultado reutilizando el sistema existente de la app
    const area = document.getElementById('exArea');
    if (!area) return;

    const livesLeft = this.lives;
    const grade = pct >= 95 ? '🏆' : pct >= 80 ? '⭐' : pct >= 60 ? '🎯' : pct >= 40 ? '📈' : '💪';
    const title = pct >= 95 ? '¡PERFECCIÓN ABSOLUTA!' : pct >= 80 ? '¡EXCELENTE TRABAJO!' : pct >= 60 ? '¡MISIÓN COMPLETADA!' : pct >= 40 ? 'BUEN PROGRESO' : '¡SIGUE ENTRENANDO!';
    const livesHtml = Array.from({length: this.maxLives}, (_, i) => i < livesLeft ? '❤️' : '🖤').join('');

    area.innerHTML = `
      <div class="ex-result">
        <div class="ex-result-icon">${grade}</div>
        <div class="ex-result-title">${title}</div>
        <div class="ex-result-lesson">${this.lesson.emoji} ${this.lesson.title}</div>
        <div class="ex-result-stats">
          <div class="ex-stat">
            <div class="ex-stat-val">${this.correctCount}/${total}</div>
            <div class="ex-stat-lbl">Correctas</div>
          </div>
          <div class="ex-stat">
            <div class="ex-stat-val">${pct}%</div>
            <div class="ex-stat-lbl">Precisión</div>
          </div>
          <div class="ex-stat">
            <div class="ex-stat-val">+${totalXP}</div>
            <div class="ex-stat-lbl">XP ganados</div>
          </div>
        </div>
        <div class="ex-result-lives">
          <div class="ex-result-lives-label">Vidas restantes</div>
          <div class="ex-result-lives-hearts">${livesHtml}</div>
        </div>
        ${pct === 100 ? '<div class="ex-result-perfect">⭐ ¡PUNTUACIÓN PERFECTA!</div>' : ''}
        <div class="ex-result-btns">
          <button class="ex-result-btn primary" onclick="LessonEngine.start('${this.lesson.id}')">
            ↺ Repetir lección
          </button>
          <button class="ex-result-btn ghost" onclick="exitEx()">
            ← Volver a lecciones
          </button>
        </div>
      </div>
    `;

    // Completar barra de progreso
    const fill = document.getElementById('exFill');
    if (fill) fill.style.width = '100%';
  },

};

/* ════════════════════════════════════════════════════════════
   RENDER DE LA LISTA DE LECCIONES
   Llamado desde ui.js → switchTab('lessons')
════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════
   Niveles y progreso — compartido entre la ruta de lecciones (renderLessons)
   y el glosario de estudio (renderStudyList), para que ambos usen SIEMPRE
   la misma lógica de desbloqueo y nunca queden desincronizados.
   ═══════════════════════════════════════════════════════════ */
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const LEVEL_META = {
  C1: { label: 'Avanzado', emoji: '🚀', cc: 'var(--sky)' },
  C2: { label: 'Dominio', emoji: '🏆', cc: 'var(--gold)' },
  A1: { label: 'Principiante',       emoji: '🌱', cc: 'var(--mint)' },
  A2: { label: 'Básico',             emoji: '📗', cc: 'var(--sky)'  },
  B1: { label: 'Intermedio',         emoji: '📘', cc: 'var(--gold)' },
  B2: { label: 'Intermedio Alto',    emoji: '👑', cc: 'var(--coral)'},
};

// Devuelve TODAS las lecciones del idioma activo junto con su estado de
// progreso (completada / actual desbloqueada / bloqueada). El desbloqueo es
// secuencial: solo la siguiente lección pendiente está abierta, igual que
// en la ruta visual — el apartado Estudiar reutiliza exactamente este
// mismo cálculo para que su contenido se desbloquee al mismo ritmo.
function _getLessonsWithProgress(langCode){
  const ALL_LESSONS = getLessonsForLang(langCode);
  const completedIds = (typeof state !== 'undefined') ? (state.lessonsCompleted || []) : [];
  let unlockNext = true;
  return ALL_LESSONS.map(lesson => {
    const done = completedIds.includes(lesson.id);
    const isCurrent = !done && unlockNext;
    const locked = !done && !isCurrent;
    if (isCurrent) unlockNext = false;
    return { lesson, done, isCurrent, locked };
  });
}

function renderLessons() {
  const container = document.getElementById('lessonList');
  if (!container) return;

  const langCode = _activeLessonLangCode();
  const ALL_LESSONS = getLessonsForLang(langCode);

  console.log('[Drakón][lessons] renderLessons() ejecutado. Idioma:', langCode, '· Lecciones totales:', ALL_LESSONS.length);

  // Todavía no hay contenido cargado para este idioma — evitamos romper la UI
  // y mostramos un estado vacío amistoso en vez de forzar inglés.
  if (ALL_LESSONS.length === 0) {
    const langName = (typeof state !== 'undefined' && state.lang && state.lang.name) ? state.lang.name : 'este idioma';
    container.innerHTML = `
      <div class="lp-empty">
        <div class="lp-empty-ic">🚧</div>
        <div class="lp-empty-t">Lecciones de ${langName} en camino</div>
        <div class="lp-empty-s">Estamos construyendo el curso completo. Mientras tanto, prueba el Chat con IA o los minijuegos.</div>
      </div>
    `;
    return;
  }

  const completedIds = (typeof state !== 'undefined') ? (state.lessonsCompleted || []) : [];
  const totalLessons = ALL_LESSONS.length;
  const totalDone = ALL_LESSONS.filter(l => completedIds.includes(l.id)).length;
  const totalXp = ALL_LESSONS.filter(l => completedIds.includes(l.id)).reduce((s,l)=>s+l.xp,0);

  const progress = _getLessonsWithProgress(langCode);

  // Offsets en zigzag para que la ruta serpentee (patrón de 4 pasos)
  const OFFSETS = [-64, -22, 64, 22];

  let html = `
    <div class="lp-header">
      <div class="lp-header-ring">
        <svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="19" class="lp-ring-bg"/><circle cx="22" cy="22" r="19" class="lp-ring-fg" style="stroke-dasharray:${Math.round((totalDone/Math.max(1,totalLessons))*119)} 119"/></svg>
        <span class="lp-ring-txt">${totalDone}/${totalLessons}</span>
      </div>
      <div class="lp-header-info">
        <div class="lp-header-t">Tu ruta de aprendizaje</div>
        <div class="lp-header-s">${totalXp} XP ganados en lecciones</div>
      </div>
    </div>
  `;

  let globalIdx = 0;

  LEVELS.forEach(lvl => {
    const entries = progress.filter(p => p.lesson.level === lvl);
    if (!entries.length) return;
    const meta = LEVEL_META[lvl];
    const doneInLevel = entries.filter(p => p.done).length;

    html += `
      <div class="lp-unit-banner" style="--cc:${meta.cc}">
        <div class="lp-unit-ic">${meta.emoji}</div>
        <div class="lp-unit-info">
          <div class="lp-unit-t">Nivel ${lvl} · ${meta.label}</div>
          <div class="lp-unit-s">${doneInLevel}/${entries.length} lecciones completadas</div>
        </div>
      </div>
      <div class="lp-track">
    `;

    entries.forEach(({ lesson, done, isCurrent, locked }) => {
      const offset = OFFSETS[globalIdx % OFFSETS.length];
      globalIdx++;

      const statusClass = done ? 'done' : (isCurrent ? 'current' : 'locked');
      const clickAttr = locked ? '' : `onclick="LessonEngine.start('${lesson.id}')"`;
      const inner = done ? '✓' : (locked ? '🔒' : lesson.emoji);

      html += `
        <div class="lp-node-row" style="transform:translateX(${offset}px)">
          <div class="lp-node ${statusClass}" ${clickAttr} style="--cc:${meta.cc}">
            ${isCurrent ? '<div class="lp-node-badge">EMPEZAR</div>' : ''}
            <div class="lp-node-circle">${inner}</div>
          </div>
          <div class="lp-node-label ${statusClass}">${lesson.title}</div>
        </div>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

/* ════════════════════════════════════════════════════════════
   FUNCIÓN GLOBAL para salir del ejercicio
   Debe existir como función global (llamada desde HTML)
════════════════════════════════════════════════════════════ */
function exitEx(skipConfirm) {
  if (!skipConfirm && LessonEngine.currentIdx > 0 && LessonEngine.currentIdx < LessonEngine.exercises.length) {
    if (!confirm('¿Salir de la lección? Perderás el progreso de esta sesión.')) return false;
  }
  if (typeof ttsStopAll === 'function') ttsStopAll();
  LessonEngine._listenVizStop();

  // Si veníamos de una lección de "Enséñame primero" (id "sit_<situacion>_..."),
  // volvemos a la ruta de esa situación en vez del tab de Lecciones normal.
  const lessonId = LessonEngine.lesson && LessonEngine.lesson.id;
  if (lessonId && String(lessonId).startsWith('sit_') && typeof openSituationLessons === 'function') {
    const key = String(lessonId).replace(/^sit_/, '').split('_')[0];
    if (key && typeof getSituation === 'function' && getSituation(key)) {
      openSituationLessons(key);
      return true;
    }
  }

  goTo('screen-main');
  switchTab('lessons');
  return true;
}

/* ════════════════════════════════════════════════════════════
   ESTUDIAR — glosario de vocabulario y gramática
   ════════════════════════════════════════════════════════════
   Cada tarjeta de "Estudiar" corresponde 1 a 1 con una lección de la ruta
   (mismo id, mismo tema) y usa el vocabulario/gramática que esa lección
   enseña — así el usuario puede repasar el contenido de una sección antes
   de hacer sus ejercicios. Se desbloquea exactamente con el mismo ritmo
   que la ruta de lecciones (ver _getLessonsWithProgress).
════════════════════════════════════════════════════════════ */

// Alterna entre la vista "Ruta" (path) y "Estudiar" (glosario) dentro del tab de Lecciones.
function setLessonsView(view) {
  const pathEl  = document.getElementById('lessonList');
  const studyEl = document.getElementById('studyList');
  const btnPath  = document.getElementById('lpViewPath');
  const btnStudy = document.getElementById('lpViewStudy');
  if (!pathEl || !studyEl) return;

  const showStudy = view === 'study';
  pathEl.style.display  = showStudy ? 'none'  : 'block';
  studyEl.style.display = showStudy ? 'block' : 'none';
  if (btnPath)  btnPath.classList.toggle('active', !showStudy);
  if (btnStudy) btnStudy.classList.toggle('active', showStudy);

  if (showStudy) renderStudyList();
}

function renderStudyList() {
  const container = document.getElementById('studyList');
  if (!container) return;

  const langCode = _activeLessonLangCode();
  const progress = _getLessonsWithProgress(langCode);

  if (progress.length === 0) {
    const langName = (typeof state !== 'undefined' && state.lang && state.lang.name) ? state.lang.name : 'este idioma';
    container.innerHTML = `
      <div class="lp-empty">
        <div class="lp-empty-ic">📖</div>
        <div class="lp-empty-t">Glosario de ${langName} en camino</div>
        <div class="lp-empty-s">Todavía no hay contenido para estudiar en este idioma.</div>
      </div>
    `;
    return;
  }

  let html = `
    <div class="study-intro">
      <div class="study-intro-ic">📖</div>
      <div>
        <div class="study-intro-t">Estudia antes de practicar</div>
        <div class="study-intro-s">Vocabulario y gramática de cada lección, para repasar antes de hacer los ejercicios.</div>
      </div>
    </div>
  `;

  LEVELS.forEach(lvl => {
    const entries = progress.filter(p => p.lesson.level === lvl);
    if (!entries.length) return;
    const meta = LEVEL_META[lvl];

    html += `
      <div class="lp-unit-banner" style="--cc:${meta.cc}">
        <div class="lp-unit-ic">${meta.emoji}</div>
        <div class="lp-unit-info">
          <div class="lp-unit-t">Nivel ${lvl} · ${meta.label}</div>
        </div>
      </div>
      <div class="study-list">
    `;

    entries.forEach(({ lesson, done, isCurrent, locked }) => {
      const hasStudy = !!(lesson.study && ((lesson.study.vocab && lesson.study.vocab.length) || (lesson.study.grammar && lesson.study.grammar.length)));
      const openable = !locked && hasStudy;
      const clickAttr = openable ? `onclick="openStudyCard('${lesson.id}')"` : '';
      const statusClass = locked ? 'locked' : (done ? 'done' : 'current');
      const rightNote = locked
        ? 'Completa la lección anterior para desbloquear'
        : (hasStudy ? `${(lesson.study.vocab||[]).length} palabras · ${(lesson.study.grammar||[]).length} reglas` : 'Aún sin glosario');

      html += `
        <div class="study-card ${statusClass} ${openable ? 'openable' : ''}" ${clickAttr} style="--cc:${meta.cc}">
          <div class="study-card-ic">${locked ? '🔒' : lesson.emoji}</div>
          <div class="study-card-info">
            <div class="study-card-t">${lesson.title}</div>
            <div class="study-card-s">${rightNote}</div>
          </div>
          ${openable ? '<div class="study-card-arrow">›</div>' : ''}
        </div>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

// Abre el modal de estudio con el vocabulario y la gramática de una lección puntual.
function openStudyCard(lessonId) {
  const langCode = _activeLessonLangCode();
  const ALL_LESSONS = getLessonsForLang(langCode);
  const lesson = ALL_LESSONS.find(l => l.id === lessonId);
  if (!lesson || !lesson.study) return;

  const titleEl = document.getElementById('studyModalTitle');
  const subEl   = document.getElementById('studyModalSub');
  const bodyEl  = document.getElementById('studyModalBody');
  if (!titleEl || !subEl || !bodyEl) return;

  titleEl.textContent = `${lesson.emoji} ${lesson.title}`;
  subEl.textContent = lesson.description || '';

  const vocab   = lesson.study.vocab   || [];
  const grammar = lesson.study.grammar || [];

  let html = '';

  if (vocab.length) {
    html += `<div class="study-section-h">🗂️ Vocabulario</div><div class="study-vocab-list">`;
    vocab.forEach(v => {
      const [term, translation, note] = v;
      html += `
        <div class="study-vocab-row">
          <div class="study-vocab-term">${term}</div>
          <div class="study-vocab-tr">${translation}${note ? `<div class="study-vocab-note">${note}</div>` : ''}</div>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (grammar.length) {
    html += `<div class="study-section-h">🧩 Gramática</div>`;
    grammar.forEach(g => {
      const [title, explanation, example] = g;
      html += `
        <div class="study-grammar-block">
          <div class="study-grammar-t">${title}</div>
          <div class="study-grammar-e">${explanation}</div>
          ${example ? `<div class="study-grammar-ex">${example}</div>` : ''}
        </div>
      `;
    });
  }

  if (!vocab.length && !grammar.length) {
    html = `<div class="lp-empty-s" style="padding:24px 0">Todavía no hay contenido de estudio para esta lección.</div>`;
  }

  bodyEl.innerHTML = html;
  document.getElementById('studyModal').style.display = 'flex';
}

function closeStudyCard() { const m = document.getElementById('studyModal'); if (m) m.style.display = 'none'; }
function closeStudyOv(e) { if (e.target === document.getElementById('studyModal')) closeStudyCard(); }
