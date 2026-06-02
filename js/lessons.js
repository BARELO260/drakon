/* ═══════════════════════════════════════════════════════════════
   lessons.js  —  Motor + renderizado de lecciones v2
   REEMPLAZA el lessons.js original.
   Dependencias cargadas antes: state.js · data.js · ui.js · audio.js
   ═══════════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────────────────────
   ESTADO
─────────────────────────────────────────────────────────────── */
let curLesson      = null;
let exIdx          = 0;
let exLives        = 3;
let exCorrect      = 0;
let streakCount    = 0;
let lessonStartTime= 0;
let _introShown    = false;
let _orderSelected = [];
let _matchSelected = null;
let _matchPairs    = [];
let _matchDone     = 0;
let currentLessons = [];          // alias para compatibilidad con renderLessons()

/* ───────────────────────────────────────────────────────────────
   HELPERS
─────────────────────────────────────────────────────────────── */
function getLessons() {
  const code = state.lang?.code || 'EN';
  return buildLessons(code);
}

function _typeLabel(t) {
  return { choice:'Selección múltiple', fill:'Completa la oración',
           order:'Ordena las palabras', match:'Empareja',
           pronun:'Pronunciación 🎙️' }[t] || t;
}

function _animateIn(sel) {
  const el = document.querySelector(sel); if (!el) return;
  el.style.opacity = '0'; el.style.transform = 'translateY(14px)';
  requestAnimationFrame(() => {
    el.style.transition = 'opacity .32s ease, transform .32s cubic-bezier(.4,0,.2,1)';
    el.style.opacity = '1'; el.style.transform = 'translateY(0)';
  });
}

/* ───────────────────────────────────────────────────────────────
   RENDERIZADO DEL MAPA DE LECCIONES  (reemplaza renderLessons)
─────────────────────────────────────────────────────────────── */
function renderLessons() {
  const container = document.getElementById('lessonsContent');
  if (!container) return;
  const lessons  = getLessons();
  currentLessons = lessons;
  const completed = new Set(state.lessonsCompleted);
  const nextUnlocked = lessons.find(l => !completed.has(l.id));

  // agrupar por nivel
  const groups = {};
  lessons.forEach(l => {
    if (!groups[l.levelCode]) groups[l.levelCode] = [];
    groups[l.levelCode].push(l);
  });

  let html = `
    <div style="font-family:var(--ff);font-size:15px;font-weight:800;color:var(--gold);margin-bottom:3px">
      ${state.lang?.flag || '🌍'} Lecciones de ${state.lang?.name || 'Idioma'}
    </div>
    <div style="font-size:11px;color:var(--muted);margin-bottom:14px">
      ${lessons.length} lecciones · ${completed.size} completadas
    </div>`;

  Object.entries(groups).forEach(([code, grp]) => {
    const prem = grp[0].premium && !state.isPremium;
    html += `<div class="level-group">
      <div class="level-hdr">${grp[0].levelEmoji} ${code} — ${grp[0].levelName} ${prem ? '🔒' : ''}</div>
      <div>`;

    grp.forEach((les, i) => {
      const done      = completed.has(les.id);
      const isCurrent = nextUnlocked && les.id === nextUnlocked.id;
      const locked    = prem || (i > 0 && !completed.has(grp[i - 1].id) && !isCurrent && !done);
      const cls       = `lesson-node${done ? ' done' : ''}${isCurrent ? ' current' : ''}${locked ? ' locked' : ''}`;
      const onclick   = prem ? 'showPremModal()' : locked ? '' : `startLesson('${les.id}')`;

      html += `
        ${i > 0 ? `<div class="lesson-conn ${completed.has(grp[i-1].id) ? 'done-conn' : ''}"></div>` : ''}
        <div class="${cls}" onclick="${onclick}">
          <div class="lesson-bubble">${done ? '✅' : locked || prem ? '🔒' : les.icon}</div>
          <div style="flex:1">
            <div class="li-title">${les.globalNum}. ${les.title}</div>
            <div class="li-meta">${les.exercises.length} ejercicios · ${prem ? 'Pro' : locked ? 'Bloqueado' : 'Disponible'}</div>
            <div class="li-xp">+${les.xp} XP</div>
          </div>
          ${isCurrent ? '<div style="font-size:18px">▶️</div>' : ''}
        </div>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}

/* ───────────────────────────────────────────────────────────────
   INICIO DE LECCIÓN
─────────────────────────────────────────────────────────────── */
function startLesson(id) {
  const les = getLessons().find(l => l.id === id);
  if (!les) return;
  curLesson       = les;
  exIdx           = 0;
  exLives         = les.maxLives || 3;
  exCorrect       = 0;
  streakCount     = 0;
  _introShown     = false;
  lessonStartTime = Date.now();
  state.prevScreen = state.screen;
  goTo('screen-exercise');
  markActivity();
  updateExProg();
  if (les.intro) {
    _showIntro(les);
  } else {
    _introShown = true;
    renderEx();
  }
}

/* ───────────────────────────────────────────────────────────────
   PANTALLA INTRO DEL PERSONAJE
─────────────────────────────────────────────────────────────── */
function _showIntro(les) {
  const area = document.getElementById('exArea');
  if (!area) return;
  const iv      = les.intro;
  const ch      = iv.char || 'merlingo';
  const imgSrc  = `assets/characters/faces/${ch}.png`;
  const chNames = { merlingo:'Merlingo 🧙', kenjiro:'Kenjiro ⚔️',
                    zorrek:'Zorrek ⚡', syntinator:'Syntinator 🤖',
                    drakon:'Drakón 🐉', marshal:'Marshal 🦸',
                    axonic:'Axonic', azhar:'Azhar', bao:'Bao',
                    triton:'Triton', zorreka:'Zorreka' };
  const charName = chNames[ch] || ch;

  area.innerHTML = `
    <div class="lesson-intro-wrap" id="introWrap">

      <div class="intro-badge">
        <span style="font-size:22px">${les.icon}</span>
        <div>
          <div style="font-size:14px;font-weight:800;color:var(--text);font-family:var(--ff)">${les.title}</div>
          <div style="font-size:11px;color:var(--muted);font-family:var(--ff)">${les.levelCode} · ${les.levelName} · ${les.exercises.length} ejercicios · +${les.xp} XP</div>
        </div>
      </div>

      <div class="intro-char-bubble">
        <div class="intro-char-wrap">
          <img src="${imgSrc}" class="intro-char-img"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
               style="display:block">
          <div class="intro-char-fallback" style="display:none">${charName.split(' ')[1] || '🎓'}</div>
          <div class="intro-char-pulse"></div>
        </div>
        <div class="intro-speech">
          <div class="intro-char-name">${charName}</div>
          <div class="intro-speech-text">${iv.text.replace(/\n/g, '<br>')}</div>
          ${iv.tip ? `<div class="intro-tip">${iv.tip.replace(/\n/g, '<br>')}</div>` : ''}
        </div>
      </div>

      <button class="intro-start-btn" onclick="skipIntroAndStart()">
        ¡Empezar lección! ▶️
      </button>

    </div>`;

  // animación de entrada
  const wrap = document.getElementById('introWrap');
  if (wrap) {
    wrap.style.cssText += 'opacity:0;transform:translateY(18px)';
    requestAnimationFrame(() => {
      wrap.style.transition = 'opacity .4s ease, transform .4s cubic-bezier(.4,0,.2,1)';
      wrap.style.opacity = '1'; wrap.style.transform = 'translateY(0)';
    });
  }
}

function skipIntroAndStart() {
  _introShown = true;
  renderEx();
  updateExProg();
}

/* ───────────────────────────────────────────────────────────────
   BARRA DE PROGRESO + VIDAS + RACHA
─────────────────────────────────────────────────────────────── */
function updateExProg() {
  const pct  = curLesson ? (exIdx / curLesson.exercises.length * 100) : 0;
  const maxL = curLesson?.maxLives || 3;

  const fill = document.getElementById('exFill');
  if (fill) {
    fill.style.width = pct + '%';
    fill.style.transition = 'width .55s cubic-bezier(.4,0,.2,1)';
  }
  const livesEl = document.getElementById('livesEl');
  if (livesEl) {
    livesEl.innerHTML =
      '<span class="life-full">❤️</span>'.repeat(exLives) +
      '<span class="life-empty">🖤</span>'.repeat(Math.max(0, maxL - exLives));
  }
  const streakEl = document.getElementById('streakEl');
  if (streakEl) {
    if (streakCount >= 3) {
      streakEl.textContent = `🔥 ${streakCount}`;
      streakEl.classList.add('visible');
    } else {
      streakEl.textContent = '';
      streakEl.classList.remove('visible');
    }
  }
}

/* ───────────────────────────────────────────────────────────────
   RENDER DEL EJERCICIO ACTUAL
─────────────────────────────────────────────────────────────── */
function renderEx() {
  const area = document.getElementById('exArea');
  if (!area || !_introShown) return;
  if (!curLesson || exIdx >= curLesson.exercises.length) {
    showLessonComplete(); return;
  }

  const ex        = curLesson.exercises[exIdx];
  const totalEx   = curLesson.exercises.length;
  const diffDots  = ex.difficulty
    ? `<span class="diff-dot filled">${'●'.repeat(ex.difficulty)}</span><span class="diff-dot">${'●'.repeat(5 - ex.difficulty)}</span>`
    : '';

  let body = '';

  /* ── choice ── */
  if (ex.type === 'choice') {
    body = `<div class="ex-opts">
      ${ex.opts.map((o, i) =>
        `<button class="ex-opt" data-idx="${i}" onclick="answerEx(${i})">
           <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
           <span class="opt-text">${o}</span>
         </button>`
      ).join('')}
    </div>`;

  /* ── fill ── */
  } else if (ex.type === 'fill') {
    body = `
      ${ex.hint ? `<div class="ex-hint">💡 Pista: ${ex.hint}</div>` : ''}
      <div class="ex-fill-row">
        <input class="ex-fill" id="fillIn" placeholder="Escribe tu respuesta…"
               autocomplete="off" onkeydown="if(event.key==='Enter')answerFill()">
        <button class="ex-submit" id="exSubmit" onclick="answerFill()">✓</button>
      </div>`;

  /* ── order ── */
  } else if (ex.type === 'order') {
    body = _renderOrder(ex);

  /* ── match ── */
  } else if (ex.type === 'match') {
    body = _renderMatch(ex);

  /* ── pronun ── */
  } else if (ex.type === 'pronun') {
    body = `
      <div class="pronun-ex">
        <div class="pronun-word">${ex.word}</div>
        <div class="pronun-phonetic">${ex.phonetic || ''}</div>
        ${ex.tip ? `<div class="pronun-tip">💡 ${ex.tip.replace(/\n/g,'<br>')}</div>` : ''}
        <div class="pronun-waveform" id="exWave" style="display:none">
          ${Array.from({length:9},(_,i)=>`<span style="--wd:${.28+i*.06}s"></span>`).join('')}
        </div>
        <button class="pronun-mic-btn" id="exMicBtn"
          onclick="startPronunEx('${ex.word}','${ex.phonetic||''}')">🎙️ Pronunciar</button>
        <div class="pronun-status" id="pronunStatus">
          Toca el micrófono y pronuncia la palabra
        </div>
        <button onclick="skipPronunEx()" class="pronun-skip-btn">⏭ Saltar</button>
      </div>`;
  }

  area.innerHTML = `
    <div class="ex-card" id="exCard">

      <!-- cabecera -->
      <div class="ex-header-row">
        <span class="ex-type-tag">${_typeLabel(ex.type)}</span>
        <span class="ex-progress-tag">${exIdx + 1} / ${totalEx}</span>
        ${diffDots ? `<span class="ex-diff">${diffDots}</span>` : ''}
      </div>

      <!-- contexto situacional -->
      ${ex.context ? `<div class="ex-context">${ex.context}</div>` : ''}

      <!-- pregunta -->
      <div class="ex-q">${ex.q}</div>

      <!-- snippet opcional -->
      ${ex.snippet ? `<div class="ex-snip">${ex.snippet}</div>` : ''}

      <!-- cuerpo del ejercicio -->
      ${body}

      <!-- panel de feedback (inicialmente oculto) -->
      <div class="ex-fb" id="exFb"></div>

    </div>`;

  if (ex.type === 'fill') {
    setTimeout(() => document.getElementById('fillIn')?.focus(), 90);
  }
  _animateIn('#exCard');
}

/* ───────────────────────────────────────────────────────────────
   TIPO: ORDER — ordenar palabras
─────────────────────────────────────────────────────────────── */
function _renderOrder(ex) {
  _orderSelected = [];
  const shuffled = [...ex.words].sort(() => Math.random() - .5);
  return `
    <div class="order-answer-box" id="orderAnswer">
      <span class="order-placeholder">Toca las palabras en el orden correcto…</span>
    </div>
    <div class="order-words" id="orderWords">
      ${shuffled.map((w, i) =>
        `<button class="order-word" id="ow${i}"
           onclick="selectOrderWord(this,'${w.replace(/'/g,"\\'")}',${i})">${w}</button>`
      ).join('')}
    </div>
    <button class="ex-submit order-check" id="orderCheck"
            onclick="checkOrder()" disabled>Verificar ✓</button>`;
}

function selectOrderWord(btn, word, idx) {
  if (btn.classList.contains('used')) {
    const pos = _orderSelected.findIndex(x => x.idx === idx);
    if (pos !== -1) { _orderSelected.splice(pos, 1); btn.classList.remove('used'); }
  } else {
    _orderSelected.push({ word, idx });
    btn.classList.add('used');
  }
  const box = document.getElementById('orderAnswer');
  if (box) {
    box.innerHTML = _orderSelected.length
      ? _orderSelected.map(x =>
          `<span class="order-chosen" onclick="deselectWord(${x.idx})">${x.word}</span>`
        ).join('')
      : '<span class="order-placeholder">Toca las palabras en el orden correcto…</span>';
  }
  const checkBtn = document.getElementById('orderCheck');
  if (checkBtn) checkBtn.disabled = _orderSelected.length === 0;
}

function deselectWord(idx) {
  const btn = document.getElementById('ow' + _orderSelected.findIndex(x => x.idx === idx));
  _orderSelected = _orderSelected.filter(x => x.idx !== idx);
  // refresh display
  const box = document.getElementById('orderAnswer');
  if (box) {
    box.innerHTML = _orderSelected.length
      ? _orderSelected.map(x =>
          `<span class="order-chosen" onclick="deselectWord(${x.idx})">${x.word}</span>`
        ).join('')
      : '<span class="order-placeholder">Toca las palabras en el orden correcto…</span>';
  }
  document.querySelectorAll('.order-word').forEach(b => {
    const i = parseInt(b.id.replace('ow', ''));
    b.classList.toggle('used', _orderSelected.some(x => x.idx === i));
  });
  const checkBtn = document.getElementById('orderCheck');
  if (checkBtn) checkBtn.disabled = _orderSelected.length === 0;
}

function checkOrder() {
  const ex        = curLesson.exercises[exIdx];
  const userAns   = _orderSelected.map(x => x.word).join(' ');
  const ok        = userAns.replace(/\s+/g,' ').trim() === ex.answer.replace(/\s+/g,' ').trim();
  document.querySelectorAll('.order-word, .order-check').forEach(b => b.disabled = true);
  if (!ok) { exLives--; streakCount = 0; } else { exCorrect++; streakCount++; }
  _showFeedback(ok, ex.exp, !ok ? `✅ Correcto: "${ex.answer}"` : '');
  if (state.sounds) playSound(ok ? 'correct' : 'wrong');
  updateExProg();
  if (streakCount >= 3 && ok) _showStreakFx();
  if (exLives <= 0) { setTimeout(failLesson, 1350); return; }
  setTimeout(() => { exIdx++; renderEx(); }, 1850);
}

/* ───────────────────────────────────────────────────────────────
   TIPO: MATCH — emparejar pares
─────────────────────────────────────────────────────────────── */
function _renderMatch(ex) {
  _matchPairs    = ex.pairs.map((p, i) => ({ ...p, id: i }));
  _matchSelected = null;
  _matchDone     = 0;
  const lefts  = [..._matchPairs].sort(() => Math.random() - .5);
  const rights = [..._matchPairs].sort(() => Math.random() - .5);
  return `
    <div class="match-grid">
      <div class="match-col">
        ${lefts.map(p =>
          `<button class="match-item match-left" id="ml${p.id}"
             onclick="selectMatch('left',${p.id})">${p.left}</button>`
        ).join('')}
      </div>
      <div class="match-col">
        ${rights.map(p =>
          `<button class="match-item match-right" id="mr${p.id}"
             onclick="selectMatch('right',${p.id})">${p.right}</button>`
        ).join('')}
      </div>
    </div>
    <div class="match-progress" id="matchProg">0 / ${_matchPairs.length} emparejados</div>`;
}

function selectMatch(side, id) {
  if (!_matchSelected) {
    _matchSelected = { side, id };
    document.getElementById(`m${side === 'left' ? 'l' : 'r'}${id}`)?.classList.add('selected');
  } else {
    const a = _matchSelected, b = { side, id };
    // mismo lado: cambiar selección
    if (a.side === b.side) {
      document.querySelectorAll('.match-item').forEach(el => el.classList.remove('selected'));
      _matchSelected = b;
      document.getElementById(`m${side === 'left' ? 'l' : 'r'}${id}`)?.classList.add('selected');
      return;
    }
    const leftId  = a.side === 'left'  ? a.id : b.id;
    const rightId = a.side === 'right' ? a.id : b.id;
    const ok      = leftId === rightId;
    const lEl     = document.getElementById(`ml${leftId}`);
    const rEl     = document.getElementById(`mr${rightId}`);

    if (ok) {
      lEl?.classList.add('matched'); rEl?.classList.add('matched');
      lEl?.classList.remove('selected'); rEl?.classList.remove('selected');
      _matchDone++;
      if (state.sounds) playSound('correct');
      const prog = document.getElementById('matchProg');
      if (prog) prog.textContent = `${_matchDone} / ${_matchPairs.length} emparejados`;
      if (_matchDone >= _matchPairs.length) {
        exCorrect++; streakCount++;
        setTimeout(() => {
          _showFeedback(true, curLesson.exercises[exIdx].exp, '');
          updateExProg();
          if (streakCount >= 3) _showStreakFx();
          setTimeout(() => { exIdx++; renderEx(); }, 1850);
        }, 450);
      }
    } else {
      lEl?.classList.add('match-wrong'); rEl?.classList.add('match-wrong');
      exLives--; streakCount = 0;
      if (state.sounds) playSound('wrong');
      setTimeout(() => {
        lEl?.classList.remove('match-wrong', 'selected');
        rEl?.classList.remove('match-wrong', 'selected');
      }, 700);
      updateExProg();
      if (exLives <= 0) { setTimeout(failLesson, 1050); return; }
    }
    _matchSelected = null;
  }
}

/* ───────────────────────────────────────────────────────────────
   RESPUESTAS: CHOICE
─────────────────────────────────────────────────────────────── */
function answerEx(i) {
  const ex  = curLesson.exercises[exIdx];
  const ok  = i === ex.correct;
  document.querySelectorAll('.ex-opt').forEach(o => o.disabled = true);
  document.querySelectorAll('.ex-opt')[i]?.classList.add(ok ? 'ok' : 'no');
  if (!ok && ex.correct !== undefined)
    document.querySelectorAll('.ex-opt')[ex.correct]?.classList.add('ok');
  if (!ok) { exLives--; streakCount = 0; } else { exCorrect++; streakCount++; }
  _showFeedback(ok, ex.exp, !ok && ex.opts ? `✅ Correcto: "${ex.opts[ex.correct]}"` : '');
  if (state.sounds) playSound(ok ? 'correct' : 'wrong');
  updateExProg();
  if (streakCount >= 3 && ok) _showStreakFx();
  if (exLives <= 0) { setTimeout(failLesson, 1350); return; }
  setTimeout(() => { exIdx++; renderEx(); }, 1750);
}

/* ───────────────────────────────────────────────────────────────
   RESPUESTAS: FILL
─────────────────────────────────────────────────────────────── */
function answerFill() {
  const ex  = curLesson.exercises[exIdx];
  const inp = document.getElementById('fillIn'); if (!inp) return;
  const val = inp.value.trim();
  if (!val) {
    inp.focus();
    inp.classList.add('shake');
    setTimeout(() => inp.classList.remove('shake'), 420);
    return;
  }
  inp.disabled = true;
  const btn = document.getElementById('exSubmit');
  if (btn) btn.disabled = true;

  // ejercicio abierto (sin respuesta fija)
  if (!ex.answer || ex.answer === '') {
    exCorrect++; streakCount++;
    inp.style.borderColor = 'var(--mint)';
    _showFeedback(true, ex.exp || '¡Bien hecho! Practica esta palabra en oraciones reales.', '');
    if (state.sounds) playSound('correct');
    updateExProg();
    if (streakCount >= 3) _showStreakFx();
    setTimeout(() => { exIdx++; renderEx(); }, 1750);
    return;
  }

  const ok = val.toLowerCase() === ex.answer.toLowerCase();
  if (!ok) { exLives--; streakCount = 0; } else { exCorrect++; streakCount++; }
  inp.style.borderColor = ok ? 'var(--mint)' : 'var(--coral)';
  _showFeedback(ok, ex.exp, !ok ? `✅ Respuesta: "${ex.answer}"` : '');
  if (state.sounds) playSound(ok ? 'correct' : 'wrong');
  updateExProg();
  if (streakCount >= 3 && ok) _showStreakFx();
  if (exLives <= 0) { setTimeout(failLesson, 1350); return; }
  setTimeout(() => { exIdx++; renderEx(); }, 1750);
}

/* ───────────────────────────────────────────────────────────────
   FEEDBACK  (panel enriquecido)
─────────────────────────────────────────────────────────────── */
function _showFeedback(ok, exp, extra = '') {
  const fb = document.getElementById('exFb'); if (!fb) return;
  fb.className = `ex-fb ${ok ? 'ok' : 'no'}`;

  // formatear explicación: \n → <br>, "texto" → <strong>
  const expHtml = (exp || '')
    .replace(/\n/g, '<br>')
    .replace(/"([^"]+)"/g, '<strong>"$1"</strong>');

  fb.innerHTML = `
    <div class="fb-top">
      <span class="fb-icon">${ok ? '✅' : '❌'}</span>
      <span class="fb-title">${ok ? '¡Correcto!' : 'Incorrecto'}</span>
    </div>
    <div class="fb-exp">${expHtml}</div>
    ${extra ? `<div class="fb-extra">${extra}</div>` : ''}`;

  fb.style.opacity = '0'; fb.style.transform = 'translateY(8px)';
  requestAnimationFrame(() => {
    fb.style.transition = 'opacity .28s ease, transform .28s ease';
    fb.style.opacity    = '1';
    fb.style.transform  = 'translateY(0)';
  });
}

/* ───────────────────────────────────────────────────────────────
   EFECTOS VISUALES
─────────────────────────────────────────────────────────────── */
function _showStreakFx() {
  const msgs = ['🔥 ¡En racha!', '⚡ ¡Imparable!', '🌟 ¡Maestro!', '🚀 ¡Perfecto!', '💎 ¡Leyenda!'];
  const msg  = msgs[Math.min(streakCount - 3, msgs.length - 1)];
  const el   = document.createElement('div');
  el.className = 'streak-popup';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}

function _spawnConfetti(containerId) {
  const box    = document.getElementById(containerId); if (!box) return;
  const colors = ['var(--gold)', 'var(--mint)', 'var(--coral)', '#a78bfa', '#60a5fa', '#fff'];
  for (let i = 0; i < 32; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = `
      left:${Math.random() * 100}%;
      background:${colors[i % colors.length]};
      animation-delay:${Math.random() * .7}s;
      animation-duration:${.85 + Math.random() * .7}s;
      width:${5 + Math.random() * 7}px;
      height:${5 + Math.random() * 7}px;
      border-radius:${Math.random() > .5 ? '50%' : '2px'};
      transform:rotate(${Math.random() * 360}deg)`;
    box.appendChild(p);
  }
}

/* ───────────────────────────────────────────────────────────────
   PRONUNCIACIÓN
─────────────────────────────────────────────────────────────── */
function skipPronunEx() {
  if (window.recognition) try { window.recognition.stop(); } catch(e) {}
  if (window.mediaRecorder && window.mediaRecorder.state !== 'inactive')
    try { window.mediaRecorder.stop(); } catch(e) {}
  isListening = false;
  const btn  = document.getElementById('exMicBtn');
  if (btn) { btn.classList.remove('listening'); btn.textContent = '🎙️ Pronunciar'; }
  const wave = document.getElementById('exWave');
  if (wave) wave.style.display = 'none';
  exCorrect++;
  _showFeedback(true,
    `Ejercicio saltado. La palabra es: "${curLesson?.exercises?.[exIdx]?.word || ''}"`, '');
  updateExProg();
  setTimeout(() => { exIdx++; renderEx(); }, 1450);
}

/* ───────────────────────────────────────────────────────────────
   FALLÓ — sin vidas
─────────────────────────────────────────────────────────────── */
function failLesson() {
  const area = document.getElementById('exArea'); if (!area) return;
  area.innerHTML = `
    <div class="lc-wrap">
      <div style="font-size:54px;margin-bottom:8px">💔</div>
      <div class="lc-title" style="color:var(--coral)">¡Sin vidas!</div>
      <div style="font-size:13px;color:var(--muted);margin:8px 0 24px;line-height:1.6">
        Llegaste al ejercicio ${exIdx + 1} de ${curLesson.exercises.length}.<br>
        ¡La práctica hace al maestro!
      </div>
      <button class="lc-btn" style="background:linear-gradient(135deg,var(--coral),#9f1239)"
        onclick="startLesson('${curLesson.id}')">🔄 Intentar de nuevo</button>
      <button class="lc-btn-ghost" onclick="exitEx()">Salir</button>
    </div>`;
}

/* ───────────────────────────────────────────────────────────────
   LECCIÓN COMPLETA
─────────────────────────────────────────────────────────────── */
function showLessonComplete() {
  // guardar progreso
  if (!state.lessonsCompleted.includes(curLesson.id)) {
    state.lessonsCompleted.push(curLesson.id);
    gainXP(curLesson.xp);
    state.missions.forEach((m, i) => {
      if (m.type === 'lessons' && !m.done) completeMission(i, false);
    });
    checkAchievements();
    save();
    renderLessons();
  }

  const total   = curLesson.exercises.filter(e => e.type !== 'pronun').length
                  || curLesson.exercises.length;
  const pct     = Math.round(exCorrect / total * 100);
  const stars   = pct >= 90 ? '⭐⭐⭐' : pct >= 65 ? '⭐⭐' : '⭐';
  const elapsed = Math.round((Date.now() - lessonStartTime) / 1000);
  const timeStr = elapsed < 60 ? `${elapsed}s` : `${Math.floor(elapsed/60)}m ${elapsed%60}s`;
  const outro   = curLesson.outro;

  let outroHtml = '';
  if (outro) {
    const ch      = outro.char || 'merlingo';
    const imgSrc  = `assets/characters/faces/${ch}.png`;
    outroHtml = `
      <div class="lc-outro">
        <img src="${imgSrc}" class="lc-outro-img"
             onerror="this.style.display='none'">
        <div class="lc-outro-text">${outro.text}</div>
      </div>`;
  }

  const area = document.getElementById('exArea'); if (!area) return;
  area.innerHTML = `
    <div class="lc-wrap">
      <div class="lc-confetti" id="lcConfetti"></div>
      <div class="lc-stars-wrap">${stars}</div>
      <div class="lc-title">¡Lección completa!</div>
      <div class="lc-stats">
        <div class="lcs">
          <div class="lcs-v">${exCorrect}/${total}</div>
          <div class="lcs-l">Correctas</div>
        </div>
        <div class="lcs">
          <div class="lcs-v">+${curLesson.xp}</div>
          <div class="lcs-l">XP</div>
        </div>
        <div class="lcs">
          <div class="lcs-v">${exLives}/${curLesson.maxLives || 3}</div>
          <div class="lcs-l">Vidas</div>
        </div>
        <div class="lcs">
          <div class="lcs-v">${timeStr}</div>
          <div class="lcs-l">Tiempo</div>
        </div>
      </div>
      ${outroHtml}
      <button class="lc-btn" onclick="exitEx()">¡Continuar! 🚀</button>
    </div>`;

  if (state.sounds) playSound('complete');
  _spawnConfetti('lcConfetti');
}

/* ───────────────────────────────────────────────────────────────
   SALIR
─────────────────────────────────────────────────────────────── */
function exitEx() {
  goTo('screen-main');
  switchTab('lessons');
}
