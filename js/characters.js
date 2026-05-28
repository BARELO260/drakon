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
      ? (active
          ? `<div class="cc-media-wrap" style="width:56px;height:56px;margin:0 auto 7px;position:relative;display:block;">
               <video class="cc-anim" src="${c.anim}" autoplay loop muted playsinline preload="auto"
                      style="width:56px;height:56px;object-fit:contain;display:block;filter:drop-shadow(0 4px 12px rgba(0,0,0,.5));"></video>
             </div>`
          : `<img src="${c.img}" alt="${c.name}" style="width:56px;height:56px;object-fit:contain;margin-bottom:7px;display:block;margin-left:auto;margin-right:auto;filter:drop-shadow(0 4px 12px rgba(0,0,0,.5))">`)
      : `<img src="${c.img}" alt="${c.name}" style="width:56px;height:56px;object-fit:contain;margin-bottom:7px;display:block;margin-left:auto;margin-right:auto;filter:drop-shadow(0 4px 12px rgba(0,0,0,.5))">`;
    return `<div class="char-card ${active?'active-c':''} ${locked?'locked-c':''}"
                 onclick="${clickFn}"
            >
      ${mediaEl}
      <div class="cc-n">${c.name}</div>
      <div class="cc-d">${c.desc}</div>
      ${locked?`<div class="cc-lock">🔒</div>`:''}
      ${active?`<div class="cc-check">✓</div>`:''}
    </div>`;
  }).join('');
}

/* ── Selected-char animation helpers ── */
function playSelectedAnim(){
  // Para cada card en el grid: si es el seleccionado y tiene video, reproducirlo
  const grid = document.getElementById('charsGrid');
  if(!grid) return;
  grid.querySelectorAll('.char-card').forEach(card => {
    const video = card.querySelector('.cc-anim');
    const img   = card.querySelector('.cc-face');
    if(!video) return;
    const isActive = card.classList.contains('active-c');
    if(isActive){
      img && (img.style.opacity = '0');
      video.style.opacity = '1';
      video.currentTime = 0;
      const p = video.play();
      if(p && typeof p.catch === 'function'){
        p.catch(() => {
          // Si falla, esperar canplay y reintentar
          const onReady = () => { video.removeEventListener('canplay', onReady); video.play().catch(()=>{}); };
          video.addEventListener('canplay', onReady);
          video.load();
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = '0';
      img && (img.style.opacity = '1');
    }
  });
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
  if(hi){
    hi.style.fontSize='';
    if(ch.id==='dragon' && ch.anim){
      const speakAnim='assets/characters/faces/drakonspeak.webm';
      hi.innerHTML='<video src="'+speakAnim+'" autoplay loop muted playsinline style="width:90px;height:90px;object-fit:contain;display:block;">';
    } else {
      hi.innerHTML='<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">';
    }
  }
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

