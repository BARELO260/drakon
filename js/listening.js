/* ═══════════════════════════════════════════════════════════
   listening.js  —  Listening Probe
   Ruta: drakón/js/listening.js
   ═══════════════════════════════════════════════════════════ */

const ListeningProbe = (() => {

  /* ── Preguntas de comprensión auditiva ──────────────── */
  const QUESTIONS = [
    { audio:'Good morning! How are you today?',
      question:'¿Qué preguntó el hablante?',
      options:['Buenos días, ¿cómo estás?','Buenas noches, ¿dónde estás?','Buenos días, ¿a dónde vas?','Buen día, ¿qué hora es?'],
      correct:0, tip:'"How are you?" = ¿Cómo estás?' },
    { audio:'I would like a glass of water, please.',
      question:'¿Qué pidió la persona?',
      options:['Una taza de café','Un vaso de agua','Un vaso de jugo','Una botella de leche'],
      correct:1, tip:'"a glass of water" = un vaso de agua' },
    { audio:'The library is on the left side of the street.',
      question:'¿Dónde está la biblioteca?',
      options:['Al final de la calle','A la derecha','A la izquierda','Frente al parque'],
      correct:2, tip:'"on the left" = a la izquierda' },
    { audio:'She has been studying English for three years.',
      question:'¿Cuánto tiempo lleva estudiando inglés?',
      options:['Un año','Dos años','Cinco años','Tres años'],
      correct:3, tip:'"three years" = tres años' },
    { audio:'Can you help me find the train station?',
      question:'¿Qué necesita la persona?',
      options:['Encontrar un taxi','Llegar a la estación de tren','Encontrar el aeropuerto','Conseguir un mapa'],
      correct:1, tip:'"train station" = estación de tren' },
    { audio:'It is raining heavily outside. You should bring an umbrella.',
      question:'¿Qué recomienda la persona?',
      options:['Llevar un sombrero','Quedarse en casa','Llevar un paraguas','Ponerse una chaqueta'],
      correct:2, tip:'"bring an umbrella" = llevar paraguas' },
    { audio:'My favorite subject at school is mathematics.',
      question:'¿Cuál es su materia favorita?',
      options:['Historia','Ciencias naturales','Arte','Matemáticas'],
      correct:3, tip:'"mathematics" = matemáticas' },
    { audio:'We are going to the beach next Saturday.',
      question:'¿Cuándo van a la playa?',
      options:['El próximo domingo','El próximo viernes','El próximo sábado','Este fin de semana'],
      correct:2, tip:'"next Saturday" = el próximo sábado' },
    { audio:'The movie starts at seven thirty in the evening.',
      question:'¿A qué hora empieza la película?',
      options:['A las siete en punto','A las siete y media','A las seis y media','A las ocho'],
      correct:1, tip:'"seven thirty" = siete y media' },
    { audio:'He works as a doctor at the city hospital.',
      question:'¿Cuál es su profesión?',
      options:['Enfermero','Ingeniero','Médico','Farmacéutico'],
      correct:2, tip:'"works as a doctor" = trabaja como médico' },
    { audio:'Please turn off the lights before you leave.',
      question:'¿Qué pidió la persona?',
      options:['Cerrar la puerta al salir','Apagar las luces al salir','Encender las luces','Bajar el volumen'],
      correct:1, tip:'"turn off the lights" = apagar las luces' },
    { audio:'I usually wake up at six o\'clock in the morning.',
      question:'¿A qué hora suele despertarse?',
      options:['A las siete','A las cinco','A las seis','A las ocho'],
      correct:2, tip:'"six o\'clock" = las seis en punto' },
  ];

  /* ── Estado ─────────────────────────────────────────── */
  let st = {};
  let vizBars=[], vizAnim=null, vizOn=false;

  function _reset() {
    st = {
      questions:[],
      idx:0, score:0, correct:0,
      streak:0, maxStreak:0,
      played:false, answered:false,
    };
  }

  /* ── Iniciar ─────────────────────────────────────────── */
  function start() {
    GameSession.currentGame = 'listening';
    _reset();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    st.questions = [...QUESTIONS].sort(()=>Math.random()-.5).slice(0, 8);
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
    st.played=false; st.answered=false;

    _set('lpProgressTxt', `${st.idx+1} / ${st.questions.length}`);
    _set('lpScore',   st.score);
    _set('lpCorrect', st.correct);
    _set('lpStreak',  st.streak);
    _set('lpCombo',   `×${Math.min(st.streak+1,5)}`);

    const pb=_el('lpPlayBtn');
    if (pb) { pb.disabled=false; }
    _set('lpPlayIcon',  '▶');
    _set('lpPlayLabel', 'REPRODUCIR AUDIO');
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
    const pb=_el('lpPlayBtn'); if (pb) pb.disabled=true;
    _vizStart();
    _set('lpPlayIcon','⏸');
    _set('lpPlayLabel','REPRODUCIENDO…');

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utt=new SpeechSynthesisUtterance(q.audio);
      utt.lang='en-US'; utt.rate=0.88; utt.pitch=1; utt.volume=1;

      /* Usar voz nativa si existe */
      const voices=window.speechSynthesis.getVoices();
      const voice=voices.find(v=>v.lang.startsWith('en')&&!v.localService)
                ||voices.find(v=>v.lang.startsWith('en-US'))
                ||voices.find(v=>v.lang.startsWith('en'));
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
    const pb=_el('lpPlayBtn'); if (pb) pb.disabled=false;
    _set('lpPlayIcon','↺');
    _set('lpPlayLabel','ESCUCHAR DE NUEVO');
  }

  /* ── Seleccionar respuesta (pública para onclick) ─────── */
  function _pick(idx) {
    if (st.answered) return;
    if (!st.played) {
      GamesCore.toast('🔊 Primero reproduce el audio');
      /* Parpadeo del botón play como indicación */
      const pb=_el('lpPlayBtn');
      if (pb) { pb.style.animation='none'; void pb.offsetWidth; pb.style.animation='lpPulse .5s ease 2'; }
      return;
    }
    _vizStop();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    st.answered=true;

    const q=st.questions[st.idx];
    const ok=idx===q.correct;

    /* Estilos visuales de las opciones */
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
      GamesCore.toast(`✅ ×${combo} → +${pts} pts  •  ${q.tip}`, 2400);
    } else {
      st.streak=0;
      _set('lpStreak','0');
      _set('lpCombo','×1');
      GamesCore.toast(`❌ ${q.tip}`, 2600);
    }

    setTimeout(()=>{st.idx++;_load();}, 2100);
  }

  /* ── Fin ─────────────────────────────────────────────── */
  function _finish() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
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
