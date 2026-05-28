/* ═══════════════════════════════════════
   characters.js — CHARS data, renderChars, selectChar, mascotTap
   Dependencias: state.js, data.js
   Usado por: app.js, ui.js
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   CHARACTERS
═══════════════════════════════════════ */
const CHAR_SPEECH={
  dragon:['¡Tú puedes! El fuego del dragón te impulsa. 🔥','¡Sigue así! Cada mensaje es un paso más. 💪','¡Eres increíble! You\'re doing amazing! 🐲'],
  wizard:['Las palabras son hechizos. Úsalas sabiamente. ✨','La gramática es tu varita mágica. 🪄','Cada lección abre un portal lingüístico. 🔮'],
  fox:['¡Zorrek siempre encuentra el camino! 🦊','Astucia + vocabulario = fluidez. ¡Vamos!','Un idiom nuevo al día te acercará a la fluidez. 🎯'],
  robot:['SYNTINATOR ONLINE: tasa de éxito proyectada: 99.7% 🤖','SISTEMA: tu progreso supera la media. ⚙️','RECOMENDACIÓN: continuar secuencia de aprendizaje. 📊'],
  unicorn:['¡La magia del idioma te espera! 🦄✨','Cada palabra es un arcoíris de posibilidades. 🌈','¡Eres especial y tu progreso también! 💖'],
  owl:['La sabiduría se construye lección a lección. 🦉','Los grandes maestros nunca dejan de aprender. 📚','El conocimiento lingüístico es poder. 🎓'],
  ninja:['Un guerrero lingüístico entrena cada día. 🥷','La fluidez es el arma más poderosa. ⚔️','¡Silencio y concentración! Aprende sin distracciones. 🎯'],
  alien:['¡Fascinante! Los humanos tenéis idiomas curiosos. 👾','Marshal reportando: tu progreso es excepcional. 🌌','¡Enséñame más de tu idioma! Lo analizo contigo. 🛸'],
  phoenix:['¡Azhar Flamebeard resurge de las cenizas! 🔥','El fuego purifica. Que así sea con tus errores. 🔥','Renace con cada lección. Nunca te rindas. ✨'],
  panda:  ['Respira... aprende despacio pero seguro. 🐼','Sin estrés, el aprendizaje fluye mejor. 🍃','El bambú crece lento pero se vuelve acero. 💪'],
  triton: ['¡Por el honor del idioma, adelante! ⚔️','Un caballero nunca se rinde ante la gramática. 🦈','La elocuencia es tu escudo y tu espada. 🏰'],
  axonic: ['¡Drop the beat, aprende el idioma! 🎧','La cultura es el ritmo del lenguaje. 🎵','¡Vamos, ajolote! El flow no se detiene. 🦎'],
};
function getChar(){ return CHARS.find(c=>c.id===state.charId)||CHARS[0]; }

function renderChars(){
  const grid=document.getElementById('charsGrid'); if(!grid) return;
  grid.innerHTML=CHARS.map(c=>{
    const locked=!c.free&&!state.isPremium;
    const active=state.charId===c.id;
    const clickFn=locked?'showPremModal()':'selectChar(\''+c.id+'\')';
    // Media element: video for chars with animation, img otherwise
    const mediaEl = c.anim
      ? `<div class="cc-media-wrap" style="width:56px;height:56px;margin:0 auto 7px;position:relative;display:block;">
           <img  class="cc-face" src="${c.img}" alt="${c.name}"
                 style="width:56px;height:56px;object-fit:contain;display:block;filter:drop-shadow(0 4px 12px rgba(0,0,0,.5));transition:opacity .18s;position:relative;z-index:1;">
           <video class="cc-anim" src="${c.anim}" loop muted playsinline preload="auto"
                  style="width:56px;height:56px;object-fit:contain;position:absolute;top:0;left:0;opacity:0;transition:opacity .18s;z-index:2;display:block;"></video>
         </div>`
      : `<img src="${c.img}" alt="${c.name}" style="width:56px;height:56px;object-fit:contain;margin-bottom:7px;display:block;margin-left:auto;margin-right:auto;filter:drop-shadow(0 4px 12px rgba(0,0,0,.5))">`;
    return `<div class="char-card ${active?'active-c':''} ${locked?'locked-c':''}"
                 onclick="${clickFn}"
                 ${c.anim?`onmouseenter="charAnimOn(this)" onmouseleave="charAnimOff(this)"
                           ontouchstart="charAnimOn(this);event.preventDefault();" ontouchend="charAnimOff(this)"
                           ontouchcancel="charAnimOff(this)"`:''}
            >
      ${mediaEl}
      <div class="cc-n">${c.name}</div>
      <div class="cc-d">${c.desc}</div>
      ${locked?`<div class="cc-lock">🔒</div>`:''}
      ${active?`<div class="cc-check">✓</div>`:''}
    </div>`;
  }).join('');
}

/* ── Hover animation helpers ── */
function charAnimOn(card){
  const img   = card.querySelector('.cc-face');
  const video = card.querySelector('.cc-anim');
  if(!video) return;
  const doPlay = () => {
    if(img) img.style.opacity = '0';
    video.style.opacity = '1';
    video.currentTime = 0;
    const p = video.play();
    if(p && typeof p.catch === 'function'){
      p.catch(() => {
        if(img) img.style.opacity = '1';
        video.style.opacity = '0';
      });
    }
  };
  // Si el video ya tiene datos suficientes, reproducir de una
  if(video.readyState >= 3){
    doPlay();
  } else {
    // Esperar a que cargue suficiente (HAVE_FUTURE_DATA)
    const onReady = () => { video.removeEventListener('canplay', onReady); doPlay(); };
    video.addEventListener('canplay', onReady);
    video.load(); // forzar carga si no había iniciado
  }
}
function charAnimOff(card){
  const img   = card.querySelector('.cc-face');
  const video = card.querySelector('.cc-anim');
  if(!video) return;
  video.pause();
  video.currentTime = 0;
  if(img) img.style.opacity = '1';
  video.style.opacity = '0';
}
function selectChar(id){
  state.charId = id;
  const ch = getChar();
  // Actualizar TODOS los elementos visuales al instante
  const ti = document.getElementById('tbChar');
  if(ti) ti.innerHTML = '<img src="'+ch.img+'" style="width:24px;height:24px;object-fit:contain">';
  const tn = document.getElementById('tbName');
  if(tn) tn.textContent = ch.name;
  const hi = document.getElementById('heroChar');
  if(hi){ hi.innerHTML = '<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">'; hi.style.fontSize=''; }
  const ie = document.getElementById('introEmoji');
  if(ie) ie.innerHTML = '<img src="'+ch.img+'" style="width:110px;height:110px;object-fit:contain">';
  const pc = document.getElementById('profileChar');
  if(pc) pc.innerHTML = '<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">';
  renderChars();
  renderCharPickRow();
  save();
  showToast('¡'+ch.name+' es tu compañero!');
  mascotTap();
}
function renderCharPickRow(){
  const row=document.getElementById('charPickRow'); if(!row) return;
  row.innerHTML=CHARS.filter(c=>c.free).map(c=>`
    <div class="cpick ${state.charId===c.id?'sel':''}" onclick="selectChar('${c.id}')"><img src="${c.img}" style="width:22px;height:22px;object-fit:contain;vertical-align:middle"> ${c.name}</div>`).join('');
}
function mascotTap(){
  const ch=getChar();
  const phrases=CHAR_SPEECH[ch.id]||CHAR_SPEECH.dragon;
  const sp=document.getElementById('homeSpeech');
  if(sp){ sp.style.animation='none'; void sp.offsetWidth; sp.style.animation='popIn .4s both'; sp.textContent=phrases[Math.floor(Math.random()*phrases.length)]; }
  const hi=document.getElementById('heroChar'); if(hi){ hi.style.animation='none'; void hi.offsetWidth; hi.style.animation='bounce .5s ease 2'; }
}
function introMascotTap(){
  const ie=document.getElementById('introEmoji'); if(!ie) return;
  ie.style.animation='none'; void ie.offsetWidth; ie.style.animation='bounce .5s ease 3,fadeUp .6s both';
}

