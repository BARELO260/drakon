/* ═══════════════════════════════════════════════════════════
   listening.js  —  Listening Probe
   Ruta: drakón/js/listening.js

   ANTES: 12 frases fijas en inglés hardcodeadas aquí mismo.
   AHORA: usa los ejercicios reales tipo "translate" del banco
   de lecciones del idioma que se está aprendiendo (vía
   DrakonBridge) — la frase que se reproduce en voz alta es la
   respuesta correcta real de ese ejercicio, y las opciones son
   exactamente las que ya trae el banco validado del idioma.
   ═══════════════════════════════════════════════════════════ */

const ListeningProbe = (() => {

  const ROUNDS = 8;

  /* Voces de ResponsiveVoice por idioma (mismo mapa que usa
     js/audio.js para el resto de la app) */
  const RV_VOICES = {
    'en-US':'US English Female', 'es-ES':'Spanish Female', 'fr-FR':'French Female',
    'de-DE':'Deutsch Female', 'ja-JP':'Japanese Female', 'zh-CN':'Chinese Female',
    'ko-KR':'Korean Female', 'it-IT':'Italian Female', 'pt-BR':'Brazilian Portuguese Female',
    'ru-RU':'Russian Female',
  };

  /* ── Estado ─────────────────────────────────────────── */
  let st = {};
  let vizBars=[], vizAnim=null, vizOn=false;

  function _reset() {
    st = {
      questions:[], langCode:'EN', langTag:'en-US',
      idx:0, score:0, correct:0,
      streak:0, maxStreak:0,
      played:false, answered:false,
      maxPlays: Infinity, rate: 0.9, playsUsed: 0,
    };
  }

  /* Convierte un ejercicio "translate" en {audio, question, options, correct, tip} */
  function _toListening(ex) {
    // La pregunta original es "Traduce (al X): '<frase en español>'" — nos
    // quedamos solo con la frase en español para dar contexto sin revelar
    // literalmente cuál opción es la correcta.
    const m = ex.question.match(/["“]([^"”]+)["”]/);
    const context = m ? m[1] : ex.question.replace(/^Traduce[^:]*:\s*/i, '');
    const audioRaw = ex.options[ex.correct];
    return {
      audio: audioRaw.replace(/\s*\([^)]*\)/g, '').trim(), // limpio para TTS (sin romaji/pinyin entre paréntesis)
      question: `Escucha. ¿Qué frase corresponde a: "${context}"?`,
      options: ex.options,
      correct: ex.correct,
      tip: ex.explanation || '',
    };
  }

  /* ── Iniciar ─────────────────────────────────────────── */
  function start() {
    GameSession.currentGame = 'listening';
    _reset();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (window.responsiveVoice) responsiveVoice.cancel();

    const langMeta = DrakonBridge.getLang();
    st.langCode = langMeta.code;
    st.langTag  = langMeta.lang || 'en-US';

    const pool = DrakonBridge.getExercisePool(st.langCode, ['translate']);

    if (pool.length === 0) {
      GamesCore.showScreen('screen-listening');
      GamesCore.showEmptyState('screen-listening', {
        icon: '🎧',
        title: `${langMeta.name} todavía no tiene audios listos`,
        sub: `Listening Probe usa ejercicios de traducción de las lecciones de ${langMeta.name} para generar el audio. Este idioma está en camino.`,
      });
      return;
    }

    const diff = ({beginner:0,medium:1,pro:2,legendary:3}[GameSession.difficulty] || 0);
    st.questions = [...pool]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(4 + diff * 3, pool.length))
      .map(_toListening);
    /* Antes la dificultad solo cambiaba cuántas preguntas había. Ahora
       también limita cuántas veces puedes repetir el audio y acelera
       la voz — así "Legendario" exige escuchar con mucha más atención
       que "Profesional", que a su vez es notoriamente más exigente que
       "Medio". */
    st.maxPlays = [Infinity, 3, 2, 1][diff];
    st.rate = [0.82, 0.9, 1.0, 1.15][diff];

    GamesCore.showScreen('screen-listening');
    _buildViz();
    _load();
  }

  /* ── Visualizador ────────────────────────────────────── */
  function _buildViz() {
    const viz = _el('lpVisualizer'); if (!viz) return;
    viz.innerHTML='';
    vizBars=[];
    for (let i=0;i<28;i++) {
      const b=document.createElement('div');
      b.className='g-lp-vbar';
      viz.appendChild(b);
      vizBars.push({el:b, ph:Math.random()*Math.PI*2, fr:0.8+Math.random()*2.2});
    }
  }

  function _vizStart() {
    vizOn=true;
    let t=0;
    const tick=()=>{
      if (!vizOn) { vizBars.forEach(b=>{b.el.style.height='4px';b.el.style.opacity='.4';}); return; }
      t+=0.07;
      vizBars.forEach(b=>{
        const h=4+Math.abs(Math.sin(t*b.fr+b.ph))*46;
        b.el.style.height=h+'px';
        b.el.style.opacity=(0.4+0.6*(h/50)).toFixed(2);
      });
      vizAnim=requestAnimationFrame(tick);
    };
    if (vizAnim) cancelAnimationFrame(vizAnim);
    vizAnim=requestAnimationFrame(tick);
  }

  function _vizStop() {
    vizOn=false;
    if (vizAnim){cancelAnimationFrame(vizAnim);vizAnim=null;}
    vizBars.forEach(b=>{b.el.style.height='4px';b.el.style.opacity='.3';});
  }

  /* ── Cargar pregunta ─────────────────────────────────── */
  function _load() {
    if (st.idx >= st.questions.length) { _finish(); return; }
    const q=st.questions[st.idx];
    st.played=false; st.answered=false; st.playsUsed=0;

    _set('lpProgressTxt', `${st.idx+1} / ${st.questions.length}`);
    _set('lpScore',   st.score);
    _set('lpCorrect', st.correct);
    _set('lpStreak',  st.streak);
    _set('lpCombo',   `×${Math.min(st.streak+1,5)}`);

    const pb=_el('lpPlayBtn');
    if (pb) { pb.disabled=false; }
    _set('lpPlayIcon',  '▶');
    _set('lpPlayLabel', st.maxPlays===Infinity ? 'REPRODUCIR AUDIO' : `REPRODUCIR AUDIO (${st.maxPlays}x)`);
    _set('lpQuestion',  q.question);

    _vizStop();
    _renderOpts(q);
  }

  function _renderOpts(q) {
    const LETTERS=['A','B','C','D'];
    const c=_el('lpOptions'); if (!c) return;
    c.innerHTML=q.options.map((o,i)=>`
      <button class="g-lp-opt" id="lpopt-${i}" onclick="ListeningProbe._pick(${i})">
        <div class="g-lp-opt__letter">${LETTERS[i]}</div>
        <span>${o}</span>
      </button>
    `).join('');
  }

  /* ── Reproducir audio (pública para onclick del HTML) ── */
  function play() {
    const q=st.questions[st.idx]; if (!q) return;
    if (st.playsUsed >= st.maxPlays) {
      GamesCore.toast('🚫 Sin repeticiones restantes en este nivel de dificultad.', 2200);
      return;
    }
    st.playsUsed++;
    const pb=_el('lpPlayBtn'); if (pb) pb.disabled=true;
    _vizStart();
    _set('lpPlayIcon','⏸');
    _set('lpPlayLabel','REPRODUCIENDO…');

    const rvVoice = RV_VOICES[st.langTag];
    if (window.responsiveVoice && responsiveVoice.voiceSupport() && rvVoice) {
      responsiveVoice.cancel();
      responsiveVoice.speak(q.audio, rvVoice, { rate:st.rate, onend:_audioEnd, onerror:_audioEnd });
      st.played=true;
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utt=new SpeechSynthesisUtterance(q.audio);
      utt.lang=st.langTag; utt.rate=st.rate; utt.pitch=1; utt.volume=1;

      /* Usar voz nativa si existe para este idioma */
      const voices=window.speechSynthesis.getVoices();
      const prefix=st.langTag.split('-')[0];
      const voice=voices.find(v=>v.lang===st.langTag && !v.localService)
                ||voices.find(v=>v.lang.startsWith(prefix)&&!v.localService)
                ||voices.find(v=>v.lang.startsWith(prefix));
      if (voice) utt.voice=voice;

      utt.onend=utt.onerror=_audioEnd;
      window.speechSynthesis.speak(utt);
      st.played=true;
    } else {
      GamesCore.toast('⚠️ Tu navegador no soporta síntesis de voz', 3000);
      setTimeout(_audioEnd, 2200);
      st.played=true;
    }
  }

  function _audioEnd() {
    _vizStop();
    const pb=_el('lpPlayBtn');
    const playsLeft = st.maxPlays===Infinity ? Infinity : st.maxPlays - st.playsUsed;
    if (pb) pb.disabled = playsLeft <= 0;
    _set('lpPlayIcon','↺');
    _set('lpPlayLabel', playsLeft<=0 ? 'SIN REPETICIONES' : (st.maxPlays===Infinity ? 'ESCUCHAR DE NUEVO' : `ESCUCHAR DE NUEVO (${playsLeft}x)`));
  }

  /* ── Seleccionar respuesta (pública para onclick) ─────── */
  function _pick(idx) {
    if (st.answered) return;
    if (!st.played) {
      GamesCore.toast('🔊 Primero reproduce el audio');
      const pb=_el('lpPlayBtn');
      if (pb) { pb.style.animation='none'; void pb.offsetWidth; pb.style.animation='lpPulse .5s ease 2'; }
      return;
    }
    _vizStop();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (window.responsiveVoice) responsiveVoice.cancel();
    st.answered=true;

    const q=st.questions[st.idx];
    const ok=idx===q.correct;

    document.querySelectorAll('.g-lp-opt').forEach(b=>{b.onclick=null;b.disabled=true;});
    _el(`lpopt-${idx}`)?.classList.add(ok?'g-lp-opt--ok':'g-lp-opt--bad');
    if (!ok) _el(`lpopt-${q.correct}`)?.classList.add('g-lp-opt--ok');

    if (ok) {
      st.streak++;
      if (st.streak>st.maxStreak) st.maxStreak=st.streak;
      st.correct++;
      const combo=Math.min(st.streak,5);
      const pts=100*combo;
      st.score+=pts;
      _set('lpScore',   st.score);
      _set('lpCorrect', st.correct);
      _set('lpStreak',  st.streak);
      _set('lpCombo',   `×${Math.min(st.streak+1,5)}`);
      GamesCore.toast(`✅ ×${combo} → +${pts} pts`, 2400);
    } else {
      st.streak=0;
      _set('lpStreak','0');
      _set('lpCombo','×1');
      GamesCore.toast(`❌ Era la opción correcta marcada en verde`, 2600);
    }

    setTimeout(()=>{st.idx++;_load();}, 2100);
  }

  /* ── Fin ─────────────────────────────────────────────── */
  function _finish() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (window.responsiveVoice) responsiveVoice.cancel();
    _vizStop();
    GameSession.currentGame=null;
    const pct=Math.round((st.correct/st.questions.length)*100);
    const xp=st.score+st.maxStreak*40;
    GamesCore.showResult({
      game:'listening', won:pct>=60,
      stats:{
        xp, pct,
        sub:`${st.correct} de ${st.questions.length} audios correctos (${pct}%).`,
        perfect:st.correct===st.questions.length,
        items:[
          {val:st.score,      lbl:'PUNTOS'},
          {val:`${pct}%`,     lbl:'ACIERTOS'},
          {val:st.maxStreak,  lbl:'RACHA MÁX'},
          {val:st.correct,    lbl:'CORRECTAS'},
        ],
      },
    });
  }

  /* ── Helpers ─────────────────────────────────────────── */
  function _el(id)  { return document.getElementById(id); }
  function _set(id,v){ const e=_el(id); if(e) e.textContent=v; }

  return { start, play, _pick };

})();

/* Animación sutil del botón play */
(function(){
  const style=document.createElement('style');
  style.textContent=`
    @keyframes lpPulse {
      0%,100% { box-shadow:0 0 0 0 color-mix(in srgb, var(--sky) 25%, transparent); }
      50%      { box-shadow:0 0 0 6px color-mix(in srgb, var(--sky) 0%, transparent); border-color:var(--sky); }
    }
  `;
  document.head.appendChild(style);
})();
