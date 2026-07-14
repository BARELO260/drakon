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
/* ═══════════════════════════════════════
   CHAR_REACTIONS — personalidad por evento de lección
   Cada personaje reacciona distinto a: acertar, fallar,
   racha, terminar lección, pronunciación mala, y regresar
   después de estar ausente. El contenido pedagógico (pregunta/
   explicación) NUNCA cambia; esto es solo la capa de personalidad.
   Uso: getReaction('wrong') devuelve una línea random del personaje activo.
═══════════════════════════════════════ */
const CHAR_REACTIONS = {

  correct: {
    dragon:  ['¡ESO ES! Sabía que tenías fuego dentro. 🔥','¡BOOM! Ni el dragón lo hace mejor. 🐲','¡Ahí está! Sigue quemando etapas. 🔥'],
    wizard:  ['El hechizo salió perfecto. ✨','Así se lanza un buen conjuro gramatical. 🪄','La magia responde cuando sabes las palabras correctas. 🔮'],
    fox:     ['Vaya, vaya... hasta un reloj descompuesto acierta dos veces al día. No está mal. 🦊','¿Viste eso? Ni yo lo hubiera dicho mejor. Bueno, sí, pero casi. 😏','Aprendes rápido para alguien que hace diez minutos no sabía ni saludar. Sigue así.'],
    robot:   ['CONFIRMADO: respuesta óptima registrada. ⚙️✅','Precisión del 100%. Syntinator está... satisfecho. Creo. 🤖','Cálculo correcto. Continúa la secuencia. 📊'],
    alien:   ['¡Increíble! Un humano dominando su propio idioma. Fascinante. 👽','¡Lo lograste! Voy a anotarlo en mi bitácora espacial. 🛸','Correcto. Los humanos aprenden más rápido de lo que reportan mis sensores. 🌌'],
    phoenix: ['¡Así se renace, con cada acierto más fuerte! 🔥','El fuego que dominas hoy, ilumina mañana. ✨','Otra pluma dorada para tu vuelo. 🪶'],
    ninja:   ['Aceptable. No te acostumbres al halago. 🥷','Correcto. El camino continúa, no te detengas a celebrar. ⚔️','Bien. Apenas.'],
    panda:   ['Muy bien. Hasta yo me sorprendí, y yo no me sorprendo por nada. 🐼','Perfecto. Guárdate ese orgullo, aquí no dura mucho. 🍃','Bien hecho. El bambú se inclina en señal de respeto. Un poco.'],
    triton:  ['¡Bien hecho, noble aprendiz! Por mis branquias, qué elegancia. 🦈','Acierto digno de una corte real. 🏰','El honor de la lengua correcta te acompaña. ⚔️'],
    axonic:  ['¡Ese fue un golpe perfecto al beat! 🎧','¡Combo perfecto! El ritmo del idioma no te suelta. 🎵','Así se mezcla, sin errores en la pista. 🦎🔥'],
  },

  wrong: {
    dragon:  ['Fallaste... ¿en serio? Vamos, el dragón espera más de ti. 😤','Ouch. Otra vez, con más fuego esta vez. 🔥','Eso no contaba ni para un dragón bebé. Repite.'],
    wizard:  ['El hechizo salió mal, pero hasta yo fallé mis primeros conjuros. Otra vez. ✨','No pasa nada, hasta la mejor varita tiembla a veces. 🪄','Casi. La magia perdona a quien insiste.'],
    fox:     ['Uy no. Esa respuesta se perdió más rápido que una gallina entre las patas de un zorro. Otra vez. 🦊','¿Confiaste en tu instinto? Pésima decisión, como siempre. Repite.','Te tendiste una trampa tú solo y caíste redondito. Otra vez.','Ni con radar de zorro se explica cómo llegaste a esa respuesta. Inténtalo de nuevo.'],
    robot:   ['ERROR DETECTADO. Probabilidad de acierto en el próximo intento: 87%. 🤖','ANÁLISIS: respuesta incorrecta. Recalculando estrategia de aprendizaje...','FALLO REGISTRADO. Syntinator no juzga. (Sí lo hace un poco.) ⚙️'],
    alien:   ['Fascinante error. Los humanos cometéis fallos de formas muy creativas. 👽','No lo lograste, pero mis lecturas dicen que aprendes de esto. Inténtalo otra vez. 🛸','Interesante... eso definitivamente no era lo que buscábamos. Otra vez.'],
    phoenix: ['Esto no es una caída, es el inicio de tu renacimiento. Otra vez. 🔥','Las cenizas de este error alimentan tu próximo acierto. ✨','Hasta el fuego más brillante tropieza antes de arder fuerte.'],
    ninja:   ['Eso no fue un error. Fue una falta de respeto al idioma. Otra vez. 🥷','Un guerrero que responde así ya perdió la batalla antes de empezar. Repite.','Silencio habría sido más honorable que esa respuesta. Otra vez.','Esa técnica no pasa ni el primer cinturón blanco. Repite con más disciplina.'],
    panda:   ['Respira... y acepta con serenidad que eso estuvo pésimo. Otra vez. 🐼','El universo no juzga. Yo tampoco... mentira, sí. Repite.','En la quietud del bambú, hasta el bambú se dobló de la vergüenza ajena. Otra vez, con calma.','No hay prisa, pero definitivamente sí hay vergüenza. Repite.'],
    triton:  ['¡Por mis aletas! Ese golpe no dio en el blanco. De nuevo, con honor. 🦈','Un caballero no se rinde tras un tropiezo. Otra vez. ⚔️','Eso no fue digno de tu armadura. Repite con más brío.'],
    axonic:  ['Uy, ese beat se saltó por completo. Otra vez, con más flow. 🎧','El ritmo se rompió ahí. Vamos a remixarlo. 🎵','Casi, casi, pero la pista te pide otra vuelta. 🦎'],
  },

  streak: {
    dragon:  ['¡Racha en llamas! Nadie te para ahora. 🔥🔥','Imparable. El dragón está orgulloso, y eso no pasa siempre. 🐲','Sigue así y vas a fundir el marcador.'],
    wizard:  ['Tu constancia se está volviendo un hechizo poderoso. ✨','Cada día que vuelves, el portal se hace más fuerte. 🔮','Esto ya no es suerte, es maestría en construcción.'],
    fox:     ['Racha activa. Milagros existen, después de todo. 🦊','Ya van varios días. Empiezo a sospechar que aprendiste algo de mí.','Sigues aquí. Impresionante, para alguien que suele rendirse rápido.'],
    robot:   ['RACHA DETECTADA. Consistencia por encima del promedio humano. 📊','SISTEMA: patrón de éxito confirmado. Continúa la secuencia. 🤖','Syntinator calcula que esta racha es... admirable. Sí, dije admirable.'],
    alien:   ['Increíble, sigues regresando. Los humanos son criaturas de hábitos fascinantes. 👽','Otra vez aquí. Mi bitácora ya tiene una sección solo para ti. 🛸','Tu constancia rompe mis predicciones estadísticas.'],
    phoenix: ['Cada día es una nueva llama que se suma al fuego eterno. 🔥','Tu racha ya brilla como mis propias alas. ✨','No te apagas. Eso es lo que te hace imparable.'],
    ninja:   ['La constancia se nota. No te acostumbres a mi aprobación. 🥷','Sigues en el camino. A duras penas, pero sigues.','Disciplina detectada. No dura mucho en la mayoría.'],
    panda:   ['Mira nada más, la constancia te sienta bien. No te acostumbres a que te lo diga. 🐼','Cada día que vuelves, el bambú se pregunta si por fin maduraste. 🍃','Vas bien. No preguntes cuántas veces lo dudé.'],
    triton:  ['Tu perseverancia es digna de una leyenda naval. 🦈','Día tras día en la contienda, como un verdadero caballero. ⚔️','El honor se construye con constancia, y tú lo demuestras.'],
    axonic:  ['¡Racha imparable! Este mixtape no para de sonar. 🎧🔥','Cada día suma un beat más a tu playlist de idiomas. 🎵','Sigues en la pista. Así se hacen los himnos.'],
  },

  lessonComplete: {
    dragon:  ['¡Lección quemada! Literal. Vamos por la siguiente. 🔥','Otra victoria para la colección del dragón. 🐲','Eso fue fuego puro. Sigue así.'],
    wizard:  ['Un hechizo más dominado. Tu grimorio crece. ✨','Lección completada. El portal a la fluidez se abre un poco más. 🔮','Bien hecho, aprendiz. La magia del lenguaje te reconoce.'],
    fox:     ['Otra lección en el bolsillo. Zorrek está impresionado. 🦊','Listo. Un truco más para tu colección de astucias.','Eso fue rápido y limpio. Me gusta tu estilo.'],
    robot:   ['LECCIÓN COMPLETADA. Progreso acumulado registrado. ⚙️','Syntinator confirma: nivel de dominio en aumento. 📊','Secuencia finalizada con éxito. Buen trabajo, humano.'],
    alien:   ['Lección terminada. Añadido a mi archivo de descubrimientos humanos. 👽','Excelente. Estoy aprendiendo tanto de ti como tú del idioma. 🛸','Otra pieza del rompecabezas lingüístico, resuelta.'],
    phoenix: ['Una lección más, una llama más en tu vuelo. 🔥','Renaces un poco más fuerte con cada final de lección. ✨','El fuego de tu progreso no se detiene.'],
    ninja:   ['Entrenamiento completado. El camino continúa mañana. 🥷','Bien. Un paso más hacia la verdadera fluidez. ⚔️','Disciplina cumplida por hoy. Descansa, guerrero.'],
    panda:   ['Lección terminada. Ya te ganaste tu té y tu descanso. 🐼🍵','Muy bien hecho. Sin prisa llegaste hasta aquí.','Qué gusto verte avanzar así, con calma y constancia.'],
    triton:  ['¡Lección superada con honor! La corte estaría orgullosa. 🏰','Otra victoria para tu historial de caballero. 🦈','Bien luchado. El idioma se rinde ante tu constancia.'],
    axonic:  ['¡Track completado! Ese fue un set increíble. 🎧','Lección cerrada con broche de oro. Sigue el show. 🎵','Ese fue un mix perfecto de esfuerzo y ritmo. 🔥'],
  },

  pronunciation_bad: {
    dragon:  ['Eso sonó más a lagartija resfriada que a dragón. Otra vez. 🦎🔥','¿Eso fue francés o un estornudo? Vamos, repite con más fuerza.','Mmm, no. Ni el eco del dragón dijo eso bien.'],
    wizard:  ['El hechizo se pronunció mal y por poco invocas otra cosa. Repite. 🪄','Cuidado, un acento mal puesto puede convertir un saludo en un sapo. Otra vez.','Casi, pero la pronunciación exacta es lo que activa la magia.'],
    fox:     ['Eso que dijiste no existe en ningún idioma conocido por la humanidad. Ni por los zorros. Repite. 🦊','Sonaste como alguien leyendo al revés y sin lentes. Otra vez.','Si eso fue un buen acento, yo soy un chihuahua. Repite, con más honestidad.','Le rompiste el corazón a esa palabra. Al menos ofrécele una disculpa repitiéndola bien.'],
    robot:   ['ANÁLISIS FONÉTICO: 42% de coincidencia. Ajuste requerido. 🤖','SEÑAL DE AUDIO NO RECONOCIDA. Vuelve a intentarlo.','Syntinator no logró procesar eso como lenguaje humano conocido.'],
    alien:   ['Fascinante sonido... pero no corresponde a ningún idioma en mi base de datos. Otra vez. 👽','Interesante. Repite, quiero confirmar que fue un error y no un nuevo dialecto. 🛸','Mis sensores no captaron eso como palabra. Inténtalo de nuevo.'],
    phoenix: ['Ese intento se quemó antes de despegar. Otra vez, con más fuego en la voz. 🔥','No pasa nada, hasta el fénix desafina antes de encontrar su canto.','Repite. De las cenizas de ese intento nace uno mejor.'],
    ninja:   ['Esa pronunciación no merece ni una reverencia. Repite. 🥷','Hablas como quien jamás ha escuchado este idioma en su vida. Corrige eso.','El sonido que hiciste no te honra ni a ti ni al idioma. Otra vez.','Un susurro mal dicho seguiría siendo mejor que ese intento. Repite.'],
    panda:   ['Cierra los ojos, respira hondo, y acepta que sonó fatal. Otra vez. 🐼','Ese sonido perturbó mi paz interior. Repite, con más armonía.','Ni la meditación más profunda explica esa pronunciación. Otra vez.','Todo fluye en este universo, menos esa pronunciación. Vuelve a intentarlo.'],
    triton:  ['¡Por mis branquias! Eso no sonó como ninguna lengua conocida en mi reino. Otra vez. 🦈','Un caballero pronuncia con honor. Repite con más elocuencia.','Ese intento necesita más pulido antes de presentarse en la corte.'],
    axonic:  ['Uy, ese sonido salió totalmente desafinado. Otra vez, con más flow. 🎧','El beat de tu voz se perdió ahí. Vamos a remixarlo. 🎵','Casi, pero la pista pide otra toma. 🦎'],
  },

  comeback: {
    dragon:  ['¡Regresaste! El fuego nunca se apaga, ¿verdad? Vamos con todo. 🔥','Ya era hora. El dragón empezaba a extrañarte. Vamos.','Se te extrañó por aquí. Hora de recuperar terreno.'],
    wizard:  ['Bienvenido de vuelta, aprendiz. El portal seguía abierto para ti. ✨','El tiempo pasa distinto para un mago. No te preocupes, retomemos. 🔮','Me alegra verte. La magia no se olvida, solo espera.'],
    fox:     ['Miren quién decidió aparecer. ¿La racha se rompió o tú también? 🦊','Vaya, pensé que te había comido un oso. Bienvenido de vuelta, desertor.','Tres días desaparecido y ni una excusa buena preparada. Empecemos.'],
    robot:   ['USUARIO DETECTADO TRAS AUSENCIA. Reanudando progreso. 🤖','Registro actualizado: has vuelto. Continuemos la secuencia.','Bienvenida de nuevo. Syntinator no dormía, solo esperaba.'],
    alien:   ['¡Volviste! Mis sensores registraron tu ausencia con curiosidad. 👽','Fascinante, los humanos regresan cuando menos lo esperas. Bienvenido. 🛸','Me alegra verte de nuevo por aquí.'],
    phoenix: ['Todo regreso es un renacimiento. Bienvenido de vuelta. 🔥','No importa cuánto tardaste, el fuego sigue encendido. ✨','Vuelves más fuerte de lo que crees. Continuemos.'],
    ninja:   ['Regresaste. El entrenamiento no perdona el tiempo perdido. 🥷','Un guerrero ausente sigue siendo un guerrero débil. Empecemos de nuevo.','No hay excusas en el dojo. Solo trabajo pendiente.'],
    panda:   ['Ah, volviste. El universo es paciente. Yo, un poco menos. 🐼','Te esperé con calma... y con una pizca de decepción silenciosa. Empecemos.','Bienvenido de vuelta. El bambú no juzga. Bueno, un poco sí.'],
    triton:  ['¡Ha regresado el aprendiz! La corte te recibe con honores. 🏰','Un caballero siempre vuelve a la batalla, tarde o temprano. 🦈','Bienvenido de nuevo a esta noble empresa.'],
    axonic:  ['¡Volviste a la pista! Te guardé un lugar en el set. 🎧','El show continúa, y tú eres parte del mix otra vez. 🎵','Bienvenido de vuelta, sigamos con el ritmo. 🔥'],
  },
};

/* Devuelve una línea random de reacción para el personaje activo del usuario.
   category: 'correct' | 'wrong' | 'streak' | 'lessonComplete' | 'pronunciation_bad' | 'comeback' */
function getReaction(category){
  const charId = (state.charId) || 'dragon';
  const pool = (CHAR_REACTIONS[category] && CHAR_REACTIONS[category][charId]) || CHAR_REACTIONS[category]?.dragon || ['¡Sigue así!'];
  return pool[Math.floor(Math.random()*pool.length)];
}

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
                 style="width:56px;height:56px;object-fit:contain;display:block;filter:drop-shadow(0 4px 12px rgba(0,0,0,.5));transition:opacity .18s;position:relative;z-index:1;${active?'opacity:0;':''}">
           <video class="cc-anim" src="${c.anim}" loop muted playsinline preload="auto"
                  style="width:56px;height:56px;object-fit:contain;position:absolute;top:0;left:0;transition:opacity .18s;z-index:2;display:block;opacity:${active?'1':'0'};"></video>
         </div>`
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
    if(ch.speak){
      hi.innerHTML='<video src="'+ch.speak+'" autoplay loop muted playsinline style="width:90px;height:90px;object-fit:contain;display:block;">';
    } else {
      hi.innerHTML='<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">';
    }
  }
  const ie = document.getElementById('introEmoji');
  if(ie) ie.innerHTML = '<img src="'+ch.img+'" style="width:110px;height:110px;object-fit:contain">';
  const pc = document.getElementById('profileChar');
  if(pc) pc.innerHTML = '<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">';
  renderChars();
  playSelectedAnim();
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


/* ═══════════════════════════════════════
   PANTALLA INMERSIVA DE SELECCIÓN DE PERSONAJES
   (fondo de video + protagonista + flechas laterales)
═══════════════════════════════════════ */
let csIndex = 0;

function csPickBgSrc(){
  const portrait = window.innerHeight >= window.innerWidth;
  return portrait ? 'assets/charactersbackground/background920.mp4' : 'assets/charactersbackground/background209.mp4';
}

function openCharSelect(){
  csIndex = CHARS.findIndex(c=>c.id===state.charId);
  if(csIndex<0) csIndex=0;

  const bg = document.getElementById('csBgVideo');
  if(bg){
    const wantedSrc = csPickBgSrc();
    if(!bg.dataset.src || !bg.dataset.src.endsWith(wantedSrc)){
      bg.dataset.src = wantedSrc;
      bg.src = wantedSrc;
      bg.load();
      bg.play().catch(()=>{});
    }
  }

  showCsChar(csIndex, false);
  goTo('screen-charselect');
}

function closeCharSelect(){
  goTo('screen-main');
}

function showCsChar(i, animate){
  const c = CHARS[i];
  if(!c) return;
  const locked = !c.free && !state.isPremium;

  const video = document.getElementById('csCharVideo');
  if(video){
    const applyMedia = ()=>{
      video.src = c.anim || c.speak || '';
      if(video.src){ video.load(); video.play().catch(()=>{}); }
      video.style.animation='none'; void video.offsetWidth; video.style.animation='csFadeIn .35s ease both';
    };
    if(animate){ video.style.opacity='0'; setTimeout(()=>{ video.style.opacity='1'; applyMedia(); }, 90); }
    else { video.style.opacity='1'; applyMedia(); }
  }

  const nameEl=document.getElementById('csName'); if(nameEl) nameEl.textContent=c.name;
  const descEl=document.getElementById('csDesc'); if(descEl) descEl.textContent=c.desc;
  const lockEl=document.getElementById('csLock'); if(lockEl) lockEl.style.display = locked?'flex':'none';

  const btn=document.getElementById('csSelectBtn');
  if(btn){
    const isCurrent = state.charId===c.id;
    btn.textContent = locked ? '🔒 Desbloquear' : (isCurrent ? 'Seleccionado ✓' : 'Seleccionar');
    btn.classList.toggle('is-current', isCurrent && !locked);
  }

  const dots=document.getElementById('csDots');
  if(dots) dots.innerHTML = CHARS.map((cc,idx)=>'<span class="cs-dot'+(idx===i?' active':'')+'"></span>').join('');
}

function csPrev(){ csIndex=(csIndex-1+CHARS.length)%CHARS.length; showCsChar(csIndex,true); }
function csNext(){ csIndex=(csIndex+1)%CHARS.length; showCsChar(csIndex,true); }

function csConfirmSelect(){
  const c = CHARS[csIndex]; if(!c) return;
  const locked = !c.free && !state.isPremium;
  if(locked){ showPremModal(); return; }
  selectChar(c.id);
  showCsChar(csIndex,false);
}

window.addEventListener('resize', ()=>{
  const bg=document.getElementById('csBgVideo');
  if(!bg || document.getElementById('screen-charselect')?.classList.contains('active')===false) return;
  const wantedSrc = csPickBgSrc();
  if(!bg.dataset.src || !bg.dataset.src.endsWith(wantedSrc)){
    bg.dataset.src = wantedSrc; bg.src = wantedSrc; bg.load(); bg.play().catch(()=>{});
  }
});
