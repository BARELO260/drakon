/* ═══════════════════════════════════════
   audio.js — mic, Web Speech API, Whisper, TTS (ElevenLabs)
   Dependencias: state.js, data.js, js/tts-eleven.js (motor de voz)
   Usado por: ai.js, lessons.js
   NOTA: No modificar los prompts internos de voz sin revisar CHAR_VOICE
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   PRONUNCIATION — real audio analysis
═══════════════════════════════════════ */
let recognition=null, isListening=false, pronunTarget='', pronunPhonetic='', pronunContext='chat';
let audioCtx=null, analyser=null, micStream=null;

/* ═══════════════════════════════════════
   MICRÓFONO — grabación real + transcripción con Whisper (Groq)

   Por qué NO se usa el "Web Speech API" del navegador (SpeechRecognition):
   esa API depende de un servicio de reconocimiento del propio navegador/SO
   (en Chrome, un viaje de ida y vuelta a los servidores de voz de Google)
   que, dentro de una PWA instalada o un WebView empaquetado en Android,
   con MUCHA frecuencia no está disponible, o arranca pero nunca entrega
   resultados ni errores — se queda "escuchando" sin hacer nada. Esa es la
   causa más probable de que "el micrófono no detecte la voz".

   En su lugar, el micrófono graba un clip de audio real con
   MediaRecorder y se transcribe con Whisper alojado en Groq (el MISMO
   proveedor de IA — y la misma clave — que ya usa toda la app para el
   chat, el escaneo y la videollamada). Es un solo camino, predecible,
   que funciona igual en cualquier navegador o dispositivo — nada de
   "intenta con el navegador y si falla dos veces cambia a otra cosa".

   Flujo: toca 🎙️ → se pide permiso de micrófono la PRIMERA vez → empieza
   a grabar de verdad → toca otra vez para enviar → se transcribe → el
   texto reconocido se comporta exactamente como si lo hubieras escrito.
═══════════════════════════════════════ */
let mediaRecorder = null;
let mediaChunks   = [];
let _activeStream = null;   // stream de la grabación en curso
let _cachedStream = null;   // stream de mic reutilizado entre grabaciones (evita repedir permiso)
let _safetyTimer  = null;   // corta la grabación sola si el usuario se olvida de tocar "detener"

function _releaseStream(stream){
  try{ if(stream) stream.getTracks().forEach(t=>t.stop()); } catch(e){}
}
function _clearSafetyTimer(){
  if(_safetyTimer){ clearTimeout(_safetyTimer); _safetyTimer=null; }
}

// Obtiene un stream de micrófono, reutilizando el cacheado si sigue activo.
// Esto es lo que hace que el navegador NO vuelva a pedir permiso cada vez
// — solo lo pide la primera vez que de verdad se necesita.
async function _getStream(){
  if(_cachedStream && _cachedStream.getTracks().every(t => t.readyState === 'live')){
    return _cachedStream;
  }
  if(_cachedStream){ _releaseStream(_cachedStream); _cachedStream = null; }
  const stream = await navigator.mediaDevices.getUserMedia({
    audio:{ echoCancellation:true, noiseSuppression:true, sampleRate:16000 }
  });
  _cachedStream = stream;
  return stream;
}

function _bestMime(){
  const types = ['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/mp4'];
  for(const t of types){ if(window.MediaRecorder && MediaRecorder.isTypeSupported(t)) return t; }
  return '';
}

// ── Transcripción REAL con Whisper (Groq) — nunca texto inventado ──
async function transcribeWithWhisper(blob){
  const groqKey = state.groqKey || localStorage.getItem('groqKey');
  if(!groqKey || !blob || blob.size < 800) return null;
  try{
    const ext = blob.type.includes('mp4') ? 'mp4' : blob.type.includes('ogg') ? 'ogg' : 'webm';
    const fd  = new FormData();
    fd.append('file', blob, `audio.${ext}`);
    fd.append('model', 'whisper-large-v3-turbo');
    fd.append('language', (state.lang?.lang||'en-US').split('-')[0]);
    fd.append('response_format', 'json');
    const r = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
      method:'POST', headers:{'Authorization':'Bearer '+groqKey}, body:fd,
      signal: AbortSignal.timeout(25000)
    });
    if(r.ok){ const j = await r.json(); if(j.text) return j.text.trim(); }
  } catch(e){}
  return null;
}

// ── Visualización del micrófono (reutiliza el stream ya abierto) ──
function startMicVisualization(stream){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state === 'suspended') audioCtx.resume(); // política de autoplay en iOS/algunos WebViews
    const src = audioCtx.createMediaStreamSource(stream);
    analyser  = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    src.connect(analyser);
    micStream = stream;
    animateWave();
  } catch(e){}
}
function animateWave(){
  if(!isListening || !analyser) return;
  const data = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(data);
  const wave = document.getElementById('exWave');
  if(wave){
    const spans = wave.querySelectorAll('span');
    spans.forEach((s,i)=>{ const v=data[i*4]||0; s.style.height=Math.max(4,v/4)+'px'; });
  }
  requestAnimationFrame(animateWave);
}
function stopMicVisualization(){ micStream=null; analyser=null; }

// ── Grabación (recibe el stream ya abierto, NO pide permiso otra vez) ──
async function _startRecording(stream){
  try{
    _activeStream = stream;
    mediaChunks   = [];
    const mimeType = _bestMime();
    mediaRecorder  = mimeType ? new MediaRecorder(stream,{mimeType}) : new MediaRecorder(stream);

    mediaRecorder.ondataavailable = e => { if(e.data && e.data.size > 0) mediaChunks.push(e.data); };

    mediaRecorder.onstop = async () => {
      _clearSafetyTimer();
      // Solo liberamos el stream si NO es el compartido/cacheado, para no
      // matar el track que reutilizamos entre grabaciones.
      if(_activeStream && _activeStream !== _cachedStream) _releaseStream(_activeStream);
      _activeStream = null;
      stopMicVisualization();

      if(mediaChunks.length === 0){
        isListening = false; resetMicUI();
        showToast('🔇 No se capturó audio. Inténtalo de nuevo, más cerca del micrófono.');
        return;
      }
      const blob = new Blob(mediaChunks, {type: (mediaRecorder && mediaRecorder.mimeType) || mimeType || 'audio/webm'});

      if(!state.groqKey && !localStorage.getItem('groqKey')){
        isListening = false; resetMicUI();
        showToast('⚠️ Configura tu clave de IA en Ajustes para usar el micrófono.');
        return;
      }

      _setMicProcessing(true);
      const text = await transcribeWithWhisper(blob);
      isListening = false;
      _setMicProcessing(false);
      if(text){
        handleVoiceResult(text, 0.9);
      } else {
        resetMicUI();
        showToast('😕 No se entendió el audio. Habla más cerca del micrófono e inténtalo de nuevo.');
      }
    };

    mediaRecorder.onerror = () => {
      _clearSafetyTimer();
      if(_activeStream && _activeStream !== _cachedStream) _releaseStream(_activeStream);
      _activeStream = null; isListening = false;
      resetMicUI();
      showToast('🎙️ Error al grabar. Inténtalo de nuevo.');
    };

    mediaRecorder.start(250); // timeslice corto → chunks seguros incluso si se corta abruptamente
    isListening = true;

    // Corte de seguridad: si el usuario se olvida de tocar "detener", la
    // grabación NUNCA se queda bloqueada indefinidamente.
    _clearSafetyTimer();
    _safetyTimer = setTimeout(()=>{
      if(isListening && mediaRecorder && mediaRecorder.state !== 'inactive'){
        showToast('⏱️ Grabación detenida automáticamente (30 s máx.)');
        mediaRecorder.stop();
      }
    }, 30000);

    return true;
  } catch(e){
    if(stream && stream !== _cachedStream) _releaseStream(stream);
    _activeStream = null;
    showToast('🎙️ No se pudo iniciar la grabación: ' + (e.message||e));
    return false;
  }
}

function _setMicProcessing(on){
  const mb = document.getElementById('micBtn');
  if(mb){ mb.classList.remove('on'); mb.classList.toggle('processing', on); }
  const eb = document.getElementById('exMicBtn');
  if(eb && on){ eb.classList.remove('listening'); eb.classList.add('processing'); eb.textContent='🔄 Transcribiendo...'; }
  const inp = document.getElementById('chatIn');
  if(inp && on) inp.placeholder = '🔄 Transcribiendo tu voz...';
}

// ── toggleMic (micrófono del chat) ─────────────────────────────
// Botón "empuja para hablar": un toque pide permiso (si hace falta) y
// empieza a grabar de verdad; otro toque termina la grabación y la envía
// a transcribir. El micrófono nunca queda "colgado": si algo falla en
// cualquier punto, siempre se libera y se avisa con un mensaje claro.
async function toggleMic(){
  if(isListening){
    _clearSafetyTimer();
    if(mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    return;
  }

  pronunContext = 'chat'; pronunTarget = '';

  let stream;
  try{
    stream = await _getStream();
  } catch(e){
    const denied = e.name === 'NotAllowedError' || e.name === 'PermissionDeniedError';
    showToast(denied
      ? '🎙️ Drakón necesita tu micrófono para escucharte. Actívalo en los permisos de este sitio (icono 🔒 junto a la dirección) y vuelve a intentarlo.'
      : '🎙️ No se pudo acceder al micrófono: ' + (e.message||e));
    return;
  }

  const btn = document.getElementById('micBtn'); if(btn){ btn.classList.remove('processing'); btn.classList.add('on'); }
  const inp = document.getElementById('chatIn'); if(inp) inp.placeholder = '🎙️ Escuchando... toca 🎙️ de nuevo para enviar';
  showToast('🎙️ Grabando... toca el micrófono cuando termines de hablar');
  startMicVisualization(stream);
  const ok = await _startRecording(stream);
  if(!ok) resetMicUI();
}

// ── startPronunEx (ejercicio de pronunciación) ─────────────────
async function startPronunEx(word, phonetic){
  if(isListening){
    _clearSafetyTimer();
    if(mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    return;
  }

  let stream;
  try{
    stream = await _getStream();
  } catch(e){
    showToast('🎙️ Drakón necesita tu micrófono para escucharte. Actívalo en los permisos de este sitio y vuelve a intentarlo.');
    return;
  }

  pronunTarget = word; pronunPhonetic = phonetic; pronunContext = 'exercise';

  const btn    = document.getElementById('exMicBtn');
  const wave   = document.getElementById('exWave');
  const status = document.getElementById('pronunStatus');
  if(btn){ btn.classList.remove('processing'); btn.classList.add('listening'); btn.textContent = '🔴 Escuchando... toca para enviar'; }
  if(wave) wave.style.display = 'flex';
  if(status) status.textContent = `Escuchando... pronuncia "${word}" y toca el botón otra vez para enviar`;

  startMicVisualization(stream);
  const ok = await _startRecording(stream);
  if(!ok) resetMicUI();
}

// ── shared result handler ─────────────────────────────────────
// Se llama cuando ya tenemos texto FINAL transcrito por Whisper.
// - Contexto 'exercise' (botón "Pronunciar" de un ejercicio): se evalúa la
//   pronunciación contra la palabra objetivo.
// - Contexto 'chat' (micrófono del chat): el texto reconocido se comporta
//   EXACTAMENTE como si el usuario lo hubiera escrito — se guarda en el
//   input y se envía con el flujo normal de chat, para que nunca se pierda.
function handleVoiceResult(heard, confidence){
  stopListening();
  if(pronunContext === 'exercise'){
    evaluatePronunEx(heard, confidence);
    return;
  }
  const inp = document.getElementById('chatIn');
  if(inp) inp.value = heard;
  resetMicUI();
  if(heard) sendChat();
}

function evaluatePronunEx(heard, confidence){
  const target    = pronunTarget.toLowerCase();
  const heardClean= heard.toLowerCase().replace(/[.,!?¡¿]/g,'').trim();
  const exact     = heardClean === target;
  const close     = levenshtein(heardClean, target) <= 2;
  const score     = exact ? 100 : close ? Math.round(60+confidence*40) : Math.round(confidence*50);
  const status    = document.getElementById('pronunStatus');
  const fb        = document.getElementById('exFb');
  let emoji, msg;
  if(exact||close){ emoji='🎉'; msg=`¡Excelente pronunciación! (${score}%) Dijiste: "${heard}"`; }
  else             { emoji='🔄'; msg=`Intenta de nuevo. Dijiste: "${heard}" (${score}%). Objetivo: "${pronunTarget}" ${pronunPhonetic}`; }
  if(status) status.textContent = `${emoji} ${msg}`;
  if(fb){ fb.className=`ex-fb ${exact||close?'ok':'no'}`; fb.innerHTML=`${emoji} ${msg}`; }
  if(exact||close){ exCorrect++; gainXP(15); playSound('correct'); }
  else { playSound('wrong'); }
  resetMicUI();
  if(exact||close){ setTimeout(()=>{ exIdx++; renderEx(); }, 1800); }
}

function stopListening(){
  isListening = false;
  stopMicVisualization();
}

function resetMicUI(){
  const mb = document.getElementById('micBtn');    if(mb) mb.classList.remove('on','processing');
  const eb = document.getElementById('exMicBtn'); if(eb){ eb.classList.remove('listening','processing'); eb.textContent='🎙️ Pronunciar'; }
  const ew = document.getElementById('exWave');   if(ew) ew.style.display='none';
  const inp= document.getElementById('chatIn');   if(inp) inp.placeholder='Escribe aquí...';
}

/* ═══════════════════════════════════════
   TTS — ElevenLabs (voces neuronales con personalidad) + Web Speech fallback
   El motor real vive en js/tts-eleven.js (compartido con games.html);
   aquí solo definimos QUÉ voz y personalidad usa cada personaje.
═══════════════════════════════════════ */
let ttsActive = false;

// Personalidad de voz por personaje: voiceId real de ElevenLabs + parámetros
// de expresividad. `stability` baja = más emocional/variable, alta = más
// consistente/monótono. `style` alto = más exagerado/caracterizado.
// `speed` = velocidad relativa (0.7–1.2 aprox., recomendado por ElevenLabs).
// gender 'M'/'F' solo se usa para afinar el fallback de Web Speech API.
//
// Para usar voces distintas de tu propia cuenta de ElevenLabs, consulta
// GET https://api.elevenlabs.io/v1/voices (con tu API key) y sustituye
// el voiceId correspondiente.
const CHAR_VOICE = {
  // 🐲 Drakón — dragón poderoso: grave y majestuoso, cadencia lenta pero clara.
  // Intercambiada con Azhar (ahora usa Bella), a petición del usuario.
  dragon: { voiceId:'EXAVITQu4vr4xnSDxMaL', name:'Bella', gender:'F', stability:0.75, style:0.30, speed:0.88 },

  // 🧙 Merlingo — mago sabio: solemne y pausado, cada palabra suena con peso.
  wizard: { voiceId:'ErXwobaYiN019PkySvjV', name:'Antoni', gender:'M', stability:0.72, style:0.18, speed:0.85 },

  // 🦊 Zorrek — zorro pícaro: ágil y animado, energético pero inteligible.
  // Intercambiada con Bao (ahora usa Rachel), a petición del usuario.
  fox:    { voiceId:'21m00Tcm4TlvDq8ikWAM', name:'Rachel', gender:'F', stability:0.32, style:0.60, speed:1.12 },

  // 🤖 Syntinator — robot analítico: ritmo uniforme y tono metálico neutro.
  robot:  { voiceId:'pNInz6obpgDQGcFmaJgB', name:'Adam', gender:'M', stability:0.88, style:0.02, speed:0.95 },

  // 👽 Marshal — alienígena: vivo y agudo, extraño pero comprensible.
  alien:  { voiceId:'yoZ06aMxZJE3Pfs2fBtY', name:'Sam', gender:'M', stability:0.28, style:0.70, speed:1.15 },

  // 🔥 Azhar — fénix inspirador: cálido, fluido y con lift natural.
  // Usa la misma voz que Drakón tenía antes (Arnold), a petición del usuario.
  phoenix:{ voiceId:'VR6AEwLTigWG4xSOukaG', name:'Arnold', gender:'M', stability:0.45, style:0.55, speed:0.98 },

  // 🥷 Kenjiro — ninja: sereno y preciso, habla con control y claridad.
  ninja:  { voiceId:'N2lVS1w4EtoT3dr4eOWO', name:'Callum', gender:'M', stability:0.82, style:0.10, speed:0.90 },

  // 🐼 Bao — panda zen: suave y tranquilo, ritmo pausado.
  // Usa la misma voz que Zorrek tenía antes (Josh), a petición del usuario.
  panda:  { voiceId:'TxGEqnHWrfWFTfGW9XjX', name:'Josh', gender:'M', stability:0.80, style:0.10, speed:0.85 },

  // 🦈 Barón Tritón — caballero: resonante y formal, pero legible.
  triton: { voiceId:'JBFqnCBsd6RMkjVDRZzb', name:'George', gender:'M', stability:0.75, style:0.15, speed:0.88 },

  // 🎵 Axónic — DJ ajolote: energético y chispeante, rápido pero claro.
  axonic: { voiceId:'AZnzlk1XvdvUeBnXmlld', name:'Domi', gender:'F', stability:0.30, style:0.70, speed:1.15 },
};

/* ═══════════════════════════════════════
   SEGMENTACIÓN POR IDIOMA PARA LA VOZ DEL CHAT

   La IA (Groq) ya mezcla intencionalmente el idioma nativo del usuario y
   el idioma que está aprendiendo dentro de una misma respuesta (para
   explicar, traducir y dar ejemplos) — ESO no cambia aquí.

   Lo que hacía mal el sistema de voz: `translateAndSpeak()` traducía TODA
   la respuesta al idioma que se está aprendiendo antes de hablar (una
   llamada aparte a Groq, distinta de la conversación), perdiendo esa
   mezcla y leyendo todo con un único acento — por eso las palabras en el
   idioma nativo sonaban pronunciadas "a la inglesa" (o al idioma que
   corresponda).

   Ahora, en su lugar: se detecta el idioma REAL de cada palabra del texto
   tal cual lo escribió la IA (con listas de palabras frecuentes de cada
   idioma — la misma técnica que usan los detectores de idioma para textos
   cortos, sin depender de traducir nada), se agrupa en tramos consecutivos
   por idioma, y cada tramo se reproduce con la pronunciación correcta —
   manteniendo SIEMPRE la misma voz de personaje, para que suene como una
   sola respuesta fluida y no como un cambio de voz.

   Nota sobre ElevenLabs: el modelo `eleven_multilingual_v2` ya pronuncia
   cada tramo automáticamente en el idioma correcto según el propio texto
   (no existe ni hace falta un parámetro "language" en su API) — así que
   la segmentación aquí sirve sobre todo para el fallback nativo del
   navegador (Web Speech API), que si necesita un idioma explícito por
   cada frase, y además evita mandarle a ElevenLabs un tramo demasiado
   largo con code-switching interno, que es donde más falla.
═══════════════════════════════════════ */

// Palabras frecuentes por idioma (artículos, pronombres, verbos comunes,
// preposiciones, números...) — suficientes para distinguir con buena
// fiabilidad si una palabra pertenece al idioma que se está aprendiendo.
// Solo hace falta cubrir los 6 idiomas que se pueden APRENDER (el nativo
// se determina "por descarte": lo que no es claramente el idioma meta).
const _TARGET_LANG_WORDS = {
  EN: new Set(['the','a','an','is','are','was','were','be','been','being','have','has','had','do','does','did',
    'will','would','can','could','should','must','may','might','shall','this','that','these','those',
    'i','you','he','she','it','we','they','me','him','her','us','them','my','your','his','its','our','their',
    'mine','yours','hers','ours','theirs','and','or','but','if','because','so','although','while','when',
    'where','why','how','what','who','whom','which','whose','not','no','yes','very','too','also','just',
    'only','still','already','again','always','never','sometimes','often','usually','here','there','now',
    'then','today','tomorrow','yesterday','please','thank','thanks','sorry','hello','hi','hey','bye',
    'goodbye','welcome','good','bad','big','small','new','old','first','last','next','some','any','all',
    'many','much','more','most','less','few','little','one','two','three','four','five','six','seven',
    'eight','nine','ten','in','on','at','to','from','with','without','about','of','for','by','up','down',
    'out','into','over','under','between','through','try','repeat','word','words','mean','means','meaning',
    'said','say','says','speak','listen','look','see','want','need','like','love','know','think','get','go',
    'going','come','coming','take','make','give','tell','ask','answer','question','right','wrong','correct',
    'great','well','okay','ok','sentence','example','practice','learn','learning',
    // Vocabulario básico frecuente (para reconocer palabras sueltas de ejemplo, no solo
    // palabras funcionales) — casa, comida, familia, tiempo, colores, adjetivos comunes...
    'house','home','water','food','bread','meat','fish','chicken','rice','fruit','vegetable',
    'apple','table','chair','door','window','bed','room','kitchen','bathroom','garden','street',
    'road','city','country','world','mother','father','sister','brother','son','daughter','family',
    'friend','teacher','student','doctor','work','job','money','name','number','color','red','blue',
    'green','black','white','yellow','morning','afternoon','evening','night','breakfast','lunch',
    'dinner','coffee','tea','milk','egg','cheese','sugar','salt','hungry','thirsty','tired','happy',
    'sad','angry','afraid','tall','short','fast','slow','easy','hard','difficult','expensive','cheap',
    'beautiful','pretty','ugly','clean','dirty','open','closed','near','far','left','right','front',
    'back','inside','outside','weather','rain','sun','snow','wind','warm','cool','hot','cold','perfect',
    'wonderful','amazing','excellent','nice','beautiful','wrong','true','false','possible','important',
    'different','same','same','free','busy','ready','sure','together','alone','person','people','man',
    'woman','child','children','baby','dog','cat','animal','bird','tree','flower','book','pen','pencil',
    'phone','computer','car','bus','train','plane','airport','ticket','money','price','shop','store',
    'market','restaurant','hotel','school','hospital','office','park','beach','mountain','river','sea',
    'sky','moon','star','fire','ice','summer','winter','spring','autumn','fall']),
  ES: new Set(['el','la','los','las','un','una','unos','unas','y','o','pero','si','porque','aunque','cuando',
    'donde','como','que','cual','quien','quienes','cuyo','no','sí','muy','también','solo','sólo','todavía',
    'ya','otro','otra','siempre','nunca','aquí','ahí','allí','ahora','entonces','hoy','mañana','ayer',
    'favor','gracias','perdón','hola','adiós','bienvenido','bueno','malo','bien','mal','grande','pequeño',
    'nuevo','viejo','primero','último','siguiente','algunos','alguna','todos','todas','muchos','mucho',
    'mucha','más','menos','poco','pocas','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve',
    'diez','en','sobre','a','hacia','desde','con','sin','entre','soy','eres','es','somos','son','era','fue',
    'fueron','ser','estar','estoy','estás','está','estamos','están','tengo','tienes','tiene','tenemos',
    'tienen','haber','hacer','hago','haces','hace','hacemos','hacen','puedo','puedes','puede','podemos',
    'pueden','quiero','quieres','quiere','queremos','quieren','necesito','necesitas','necesita','significa',
    'significar','decir','digo','dice','hablar','hablo','escuchar','mirar','ver','saber','sé','pensar','ir',
    'voy','vamos','venir','vengo','tomar','dar','doy','preguntar','pregunta','respuesta','correcto',
    'incorrecto','genial','vale','casa','palabra','palabras','repetir','intenta','frase','ejemplo',
    'practica','aprender',
    // Vocabulario básico frecuente
    'hogar','agua','comida','pan','carne','pescado','pollo','arroz','fruta','verdura','manzana','mesa',
    'silla','puerta','ventana','cama','cuarto','cocina','baño','jardín','calle','camino','ciudad','país',
    'mundo','madre','padre','hermana','hermano','hijo','hija','familia','amigo','amiga','maestro',
    'maestra','profesor','profesora','estudiante','médico','doctor','trabajo','dinero','nombre','número',
    'color','rojo','azul','verde','negro','blanco','amarillo','mañana','tarde','noche','desayuno',
    'almuerzo','cena','café','leche','huevo','queso','azúcar','sal','hambre','sed','cansado','feliz',
    'triste','enojado','miedo','alto','alta','bajo','baja','rápido','lento','fácil','difícil','caro',
    'barato','bonito','bonita','hermoso','feo','limpio','sucio','abierto','cerrado','cerca','lejos',
    'izquierda','derecha','dentro','fuera','tiempo','lluvia','sol','nieve','viento','caliente','frío',
    'perfecto','maravilloso','excelente','verdad','falso','posible','importante','diferente','mismo',
    'libre','ocupado','listo','seguro','juntos','solo','persona','gente','hombre','mujer','niño','niña',
    'bebé','perro','gato','animal','pájaro','árbol','flor','libro','lápiz','teléfono','computadora',
    'coche','carro','autobús','tren','avión','aeropuerto','boleto','precio','tienda','mercado',
    'restaurante','hotel','escuela','hospital','oficina','parque','playa','montaña','río','mar','cielo',
    'luna','estrella','fuego','hielo','verano','invierno','primavera','otoño']),
  FR: new Set(['le','la','les','un','une','des','et','ou','mais','si','parce','bien','quand','où','comment',
    'que','qui','quoi','dont','ne','pas','non','oui','très','aussi','seulement','toujours','jamais',
    'parfois','souvent','ici','là','maintenant','alors','aujourd\'hui','demain','hier','plaît','merci',
    'pardon','bonjour','salut','revoir','bienvenue','bon','mauvais','bien','mal','grand','petit','nouveau',
    'vieux','premier','dernier','suivant','quelques','tous','toutes','beaucoup','plus','moins','peu','un',
    'deux','trois','quatre','cinq','six','sept','huit','neuf','dix','dans','sur','à','vers','depuis','avec',
    'sans','entre','je','tu','il','elle','nous','vous','ils','elles','mon','ton','son','notre','votre',
    'leur','suis','es','est','sommes','êtes','sont','être','avoir','ai','as','a','avons','avez','ont',
    'faire','fais','fait','faisons','faites','font','peux','peut','pouvons','pouvez','peuvent','veux',
    'veut','voulons','voulez','veulent','savoir','sais','sait','parler','parle','écouter','regarder','voir',
    'penser','aller','vais','venir','viens','prendre','donner','demander','question','réponse','correct',
    'incorrect','super','maison','mot','mots','répéter','essaie','phrase','exemple',
    // Vocabulaire courant fréquent
    'maison','eau','nourriture','pain','viande','poisson','poulet','riz','fruit','légume','pomme',
    'table','chaise','porte','fenêtre','lit','chambre','cuisine','salle','jardin','rue','route','ville',
    'pays','monde','mère','père','sœur','frère','fils','fille','famille','ami','amie','professeur',
    'élève','médecin','travail','argent','nom','numéro','couleur','rouge','bleu','vert','noir','blanc',
    'jaune','matin','après-midi','soir','nuit','petit-déjeuner','déjeuner','dîner','café','lait','œuf',
    'fromage','sucre','sel','faim','soif','fatigué','heureux','triste','fâché','peur','grand','petit',
    'rapide','lent','facile','difficile','cher','bon marché','beau','belle','laid','propre','sale',
    'ouvert','fermé','près','loin','gauche','droite','dedans','dehors','temps','pluie','soleil','neige',
    'vent','chaud','froid','parfait','merveilleux','excellent','vrai','faux','possible','important',
    'différent','même','libre','occupé','prêt','sûr','ensemble','seul','personne','gens','homme','femme',
    'enfant','bébé','chien','chat','animal','oiseau','arbre','fleur','livre','stylo','téléphone',
    'ordinateur','voiture','bus','train','avion','aéroport','billet','prix','magasin','marché',
    'restaurant','hôtel','école','hôpital','bureau','parc','plage','montagne','rivière','mer','ciel',
    'lune','étoile','feu','glace','été','hiver','printemps','automne']),
  DE: new Set(['der','die','das','ein','eine','und','oder','aber','wenn','weil','obwohl','wann','wo','wie',
    'was','wer','welche','nicht','nein','ja','sehr','auch','nur','immer','nie','manchmal','oft','hier','da',
    'jetzt','dann','heute','morgen','gestern','bitte','danke','entschuldigung','hallo','tschüss',
    'willkommen','gut','schlecht','groß','klein','neu','alt','erste','letzte','nächste','einige','alle',
    'viele','viel','mehr','weniger','wenig','eins','zwei','drei','vier','fünf','sechs','sieben','acht',
    'neun','zehn','in','auf','zu','von','mit','ohne','zwischen','ich','du','er','sie','es','wir','ihr',
    'mein','dein','sein','unser','euer','bin','bist','ist','sind','seid','haben','habe','hast','hat','habt',
    'machen','mache','machst','macht','kann','kannst','können','könnt','will','willst','wollen','wollt',
    'wissen','weiß','sprechen','spreche','hören','schauen','sehen','denken','gehen','gehe','kommen','komme',
    'nehmen','geben','fragen','frage','antwort','richtig','falsch','super','haus','wort','wörter',
    'wiederholen','versuch','satz','beispiel',
    // Häufiger Grundwortschatz
    'zuhause','wasser','essen','brot','fleisch','fisch','huhn','reis','obst','gemüse','apfel','tisch',
    'stuhl','tür','fenster','bett','zimmer','küche','bad','garten','straße','stadt','land','welt',
    'mutter','vater','schwester','bruder','sohn','tochter','familie','freund','freundin','lehrer',
    'lehrerin','schüler','arzt','arbeit','geld','name','nummer','farbe','rot','blau','grün','schwarz',
    'weiß','gelb','morgen','nachmittag','abend','nacht','frühstück','mittagessen','abendessen','kaffee',
    'milch','ei','käse','zucker','salz','hunger','durst','müde','glücklich','traurig','wütend','angst',
    'groß','klein','schnell','langsam','einfach','schwierig','teuer','billig','schön','hässlich','sauber',
    'schmutzig','offen','geschlossen','nah','weit','links','rechts','drinnen','draußen','zeit','regen',
    'sonne','schnee','wind','warm','kalt','perfekt','wunderbar','ausgezeichnet','wahr','falsch',
    'möglich','wichtig','anders','gleich','frei','beschäftigt','bereit','sicher','zusammen','allein',
    'person','leute','mann','frau','kind','baby','hund','katze','tier','vogel','baum','blume','buch',
    'stift','telefon','computer','auto','bus','zug','flugzeug','flughafen','ticket','preis','geschäft',
    'markt','restaurant','hotel','schule','krankenhaus','büro','park','strand','berg','fluss','meer',
    'himmel','mond','stern','feuer','eis','sommer','winter','frühling','herbst']),
  IT: new Set(['il','lo','la','i','gli','le','un','uno','una','e','o','ma','se','perché','sebbene','quando',
    'dove','come','che','chi','cosa','quale','non','no','sì','molto','anche','solo','sempre','mai','spesso',
    'qui','qua','lì','adesso','ora','allora','oggi','domani','ieri','favore','grazie','scusa','ciao',
    'salve','arrivederci','benvenuto','buono','cattivo','bene','male','grande','piccolo','nuovo','vecchio',
    'primo','ultimo','prossimo','alcuni','tutti','tutte','molti','molte','più','meno','poco','poche','uno',
    'due','tre','quattro','cinque','sei','sette','otto','nove','dieci','in','su','a','verso','da','con',
    'senza','tra','fra','io','tu','lui','lei','noi','voi','loro','mio','tuo','suo','nostro','vostro','sono',
    'sei','è','siamo','siete','essere','avere','ho','hai','ha','abbiamo','avete','hanno','fare','faccio',
    'fai','fa','facciamo','fate','fanno','posso','puoi','può','possiamo','potete','possono','voglio','vuoi',
    'vuole','vogliamo','volete','vogliono','sapere','so','sai','parlare','parlo','ascoltare','guardare',
    'vedere','pensare','andare','vado','venire','vengo','prendere','dare','chiedere','domanda','risposta',
    'corretto','sbagliato','ottimo','casa','parola','parole','ripetere','prova','frase','esempio',
    // Vocabolario di base frequente
    'acqua','cibo','pane','carne','pesce','pollo','riso','frutta','verdura','mela','tavolo','sedia',
    'porta','finestra','letto','stanza','cucina','bagno','giardino','strada','città','paese','mondo',
    'madre','padre','sorella','fratello','figlio','figlia','famiglia','amico','amica','insegnante',
    'studente','medico','lavoro','soldi','nome','numero','colore','rosso','blu','verde','nero','bianco',
    'giallo','mattina','pomeriggio','sera','notte','colazione','pranzo','cena','caffè','latte','uovo',
    'formaggio','zucchero','sale','fame','sete','stanco','felice','triste','arrabbiato','paura','alto',
    'basso','veloce','lento','facile','difficile','caro','economico','bello','bella','brutto','pulito',
    'sporco','aperto','chiuso','vicino','lontano','sinistra','destra','dentro','fuori','tempo','pioggia',
    'sole','neve','vento','caldo','freddo','perfetto','meraviglioso','eccellente','vero','falso',
    'possibile','importante','diverso','stesso','libero','occupato','pronto','sicuro','insieme','solo',
    'persona','gente','uomo','donna','bambino','bambina','cane','gatto','animale','uccello','albero',
    'fiore','libro','penna','telefono','computer','macchina','autobus','treno','aereo','aeroporto',
    'biglietto','prezzo','negozio','mercato','ristorante','albergo','scuola','ospedale','ufficio',
    'parco','spiaggia','montagna','fiume','mare','cielo','luna','stella','fuoco','ghiaccio','estate',
    'inverno','primavera','autunno']),
  PT: new Set(['o','a','os','as','um','uma','uns','umas','e','ou','mas','se','porque','embora','quando',
    'onde','como','que','quem','qual','não','sim','muito','também','só','sempre','nunca','aqui','ali','lá',
    'agora','então','hoje','amanhã','ontem','favor','obrigado','obrigada','desculpa','olá','oi','tchau',
    'bem-vindo','bom','mau','bem','mal','grande','pequeno','novo','velho','primeiro','último','próximo',
    'alguns','todos','todas','muitos','muitas','mais','menos','pouco','poucas','um','dois','três','quatro',
    'cinco','seis','sete','oito','nove','dez','em','sobre','para','de','com','sem','entre','eu','tu','você',
    'ele','ela','nós','vocês','eles','elas','meu','teu','seu','nosso','sou','és','é','somos','são','ser',
    'estar','estou','está','estamos','estão','tenho','tem','temos','têm','ter','fazer','faço','faz',
    'fazemos','fazem','posso','pode','podemos','podem','quero','quer','queremos','querem','saber','sei',
    'sabe','falar','falo','ouvir','olhar','ver','pensar','ir','vou','vamos','vir','venho','pegar','dar',
    'perguntar','pergunta','resposta','correto','errado','ótimo','casa','palavra','palavras','repetir',
    'tenta','frase','exemplo',
    // Vocabulário básico frequente
    'água','comida','pão','carne','peixe','frango','arroz','fruta','verdura','maçã','mesa','cadeira',
    'porta','janela','cama','quarto','cozinha','banheiro','jardim','rua','cidade','país','mundo','mãe',
    'pai','irmã','irmão','filho','filha','família','amigo','amiga','professor','professora','aluno',
    'médico','trabalho','dinheiro','nome','número','cor','vermelho','azul','verde','preto','branco',
    'amarelo','manhã','tarde','noite','café da manhã','almoço','jantar','café','leite','ovo','queijo',
    'açúcar','sal','fome','sede','cansado','feliz','triste','bravo','medo','alto','baixo','rápido',
    'lento','fácil','difícil','caro','barato','bonito','bonita','feio','limpo','sujo','aberto',
    'fechado','perto','longe','esquerda','direita','dentro','fora','tempo','chuva','sol','neve','vento',
    'quente','frio','perfeito','maravilhoso','excelente','verdade','falso','possível','importante',
    'diferente','mesmo','livre','ocupado','pronto','seguro','juntos','sozinho','pessoa','gente','homem',
    'mulher','criança','bebê','cachorro','gato','animal','pássaro','árvore','flor','livro','caneta',
    'telefone','computador','carro','ônibus','trem','avião','aeroporto','passagem','preço','loja',
    'mercado','restaurante','hotel','escola','hospital','escritório','parque','praia','montanha','rio',
    'mar','céu','lua','estrela','fogo','gelo','verão','inverno','primavera','outono']),
};

// BCP-47 para el idioma NATIVO del usuario (no solo los 6 que se pueden
// aprender — el nativo puede ser cualquiera de los de NATIVE_LANGS) — se
// usa como idioma del fallback nativo del navegador para los tramos que
// NO son el idioma que se está aprendiendo.
const _NATIVE_BCP47 = {
  es:'es-ES', en:'en-US', pt:'pt-BR', fr:'fr-FR', de:'de-DE', it:'it-IT',
  ar:'ar-SA', tr:'tr-TR', nl:'nl-NL', pl:'pl-PL',
};

// Divide un texto (ya mezclado por la IA) en tramos consecutivos por
// idioma: [{text, lang:'target'|'native'}]. Puntuación, espacios y
// números se pegan al tramo donde aparecen (no cortan la voz en cada
// coma). Por defecto una palabra se considera del idioma NATIVO salvo que
// aparezca claramente en la lista de palabras frecuentes del idioma que
// se está aprendiendo — así funciona sin importar cuál sea el nativo.
function segmentMixedLanguageText(text, targetCode){
  const targetSet = _TARGET_LANG_WORDS[targetCode] || _TARGET_LANG_WORDS.EN;
  const tokens = text.match(/[A-Za-zÀ-ÖØ-öø-ÿ']+|[^A-Za-zÀ-ÖØ-öø-ÿ']+/g) || [text];
  const segments = [];
  let current = null;

  for(const tok of tokens){
    const isWord = /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(tok);
    if(!isWord){
      if(current) current.text += tok;
      else current = {text:tok, lang:'native'};
      continue;
    }
    const lang = targetSet.has(tok.toLowerCase()) ? 'target' : 'native';
    if(current && current.lang === lang) current.text += tok;
    else { if(current) segments.push(current); current = {text:tok, lang}; }
  }
  if(current) segments.push(current);

  return segments.filter(s => s.text.trim().length > 0);
}

// Reproduce los tramos EN ORDEN (mismo personaje, pronunciación distinta
// según el idioma real de cada tramo). La CLAVE para que suene fluida y no
// entrecortada: el audio de TODOS los tramos se pide en PARALELO desde el
// principio (Promise.all de peticiones simultáneas a ElevenLabs) en vez de
// pedir un tramo, esperar su respuesta de red, reproducirlo, y solo
// ENTONCES pedir el siguiente — eso es lo que causaba las pausas largas
// entre tramo y tramo. Reproducir sigue siendo estrictamente secuencial
// (nunca se solapan dos audios), pero como ya está todo precargado, el
// siguiente tramo normalmente ya está listo en cuanto termina el anterior.
// `token` identifica esta secuencia: si se llama a stopTTS() mientras
// tanto, deja de coincidir y la reproducción se corta ahí mismo.
let _activeSpeechToken = 0;

async function speakMixedLanguageText(cleanText){
  const cv = CHAR_VOICE[state.charId] || CHAR_VOICE.dragon;
  const charId = state.charId || 'dragon';
  const targetCode = (state.lang?.code || 'EN').toUpperCase();
  const segments = segmentMixedLanguageText(cleanText, targetCode);
  if(!segments.length) return;
  const token = ++_activeSpeechToken;

  const bcp47For = seg => seg.lang === 'target'
    ? (TTS_BCP47_MAP[state.lang?.lang] || state.lang?.lang || 'en-US')
    : (_NATIVE_BCP47[state.nativeLang] || 'es-ES');

  // Dispara TODAS las peticiones de audio a la vez (no una por una).
  const prefetches = segments.map(seg =>
    (typeof ttsFetchAudioBlob === 'function' ? ttsFetchAudioBlob(seg.text, cv, charId) : Promise.resolve(null))
      .catch(() => null)
  );

  for(let i = 0; i < segments.length; i++){
    if(token !== _activeSpeechToken) return; // se paró/canceló mientras tanto
    const seg  = segments[i];
    const blob = await prefetches[i]; // ya debería estar lista (o casi) gracias al paralelismo de arriba
    if(token !== _activeSpeechToken) return;

    // Red de seguridad: pase lo que pase reproduciendo este tramo (incluso
    // un fallo inesperado no previsto abajo), esta promesa SIEMPRE se
    // resuelve — nunca deja colgada la secuencia completa esperando un
    // "fin de audio" que no llegue.
    await new Promise(resolve => {
      let settled = false;
      const done = () => { if(settled) return; settled = true; resolve(); };
      try{
        if(blob && typeof _elevenPlayBlob === 'function'){
          _elevenPlayBlob(blob, done).catch(done);
        } else {
          _webSpeechSpeak(seg.text, bcp47For(seg), cv.speed*0.95, cv.gender==='M'?0.85:1.12, done);
        }
      } catch(e){ done(); }
    });
  }
}

function speak(text, langCode){
  const targetLang = langCode || state.lang?.lang || 'en-US';
  const bcp47      = TTS_BCP47_MAP[targetLang] || targetLang;

  // Obtener personalidad de voz del personaje actual
  const cv = CHAR_VOICE[state.charId] || CHAR_VOICE.dragon;

  // Motor real (ElevenLabs con fallback a Web Speech API) vive en
  // js/tts-eleven.js — aquí solo le pasamos texto + personalidad + idioma.
  // El 5º argumento (charId) permite resolver dinámicamente la voz real
  // disponible en la cuenta de ElevenLabs del usuario, por si el voiceId
  // hardcodeado ya no existe (404).
  ttsSpeakChar(text, cv, bcp47, null, state.charId || 'dragon');
}

async function speakText(rawText){
  if(!state.ttsEnabled) return;
  if(!getElevenKey() && !window.speechSynthesis) return;

  // Clean text: strip correction lines, markdown, HTML, emojis, brackets, underscores
  const text = rawText
    .replace(/\[\/?(L)\]/g,'')
    .replace(/✏️[^\n]*/g,'')
    .replace(/\[[^\]]*\]/g,'')
    .replace(/\*\*(.*?)\*\*/g,'$1')
    .replace(/\*(.*?)\*/g,'$1')
    .replace(/_+/g,' ')              // underscores → space (never read "guión bajo")
    .replace(/#{1,6}\s/g,'')        // markdown headers
    .replace(/`([^`]*)`/g,'$1')     // inline code
    .replace(/<[^>]+>/g,'')
    .replace(/[\u{1F300}-\u{1FAFF}]/gu,'')
    .replace(/[|~>]/g,' ')
    .replace(/\s{2,}/g,' ')
    .trim();
  if(!text) return;

  // Antes: se traducía TODA la respuesta al idioma meta y se leía entera
  // con un único acento (perdiendo la mezcla intencional de idiomas que ya
  // hace la IA). Ahora se detecta el idioma real de cada tramo del texto
  // y cada uno se reproduce con su pronunciación correcta — ver
  // segmentMixedLanguageText() más arriba.
  speakMixedLanguageText(text);
}

function stopTTS(){
  ttsStopAll();
}

function toggleTTS(){
  state.ttsEnabled = !state.ttsEnabled;
  if(!state.ttsEnabled) stopTTS();
  const btn = document.getElementById('ttsBtn');
  if(btn){ btn.textContent = state.ttsEnabled ? '🔊' : '🔇'; btn.classList.toggle('on', state.ttsEnabled); }
  if(state.ttsEnabled){
    const targetLang = state.lang?.lang || 'en-US';
    // Frases de preview con personalidad de cada personaje
    const charPreviews = {
      dragon: {
        'en-US': 'Rise, warrior! The fire of language awaits you. Let us forge your power!',
        'es-ES': '¡Levántate, guerrero! El fuego del idioma te espera. ¡Forjemos tu poder!',
        'fr-FR': 'Lève-toi, guerrier! Le feu du langage t\'attend. Forgeons ta puissance!',
        'de-DE': 'Steh auf, Krieger! Das Feuer der Sprache wartet auf dich. Lass uns deine Kraft schmieden!',
        'default': 'Rise, warrior! The fire of language awaits you!'
      },
      wizard: {
        'en-US': 'Patience, young apprentice... for wisdom is not rushed. Let us begin.',
        'es-ES': 'Paciencia, joven aprendiz... pues la sabiduría no se apresura. Comencemos.',
        'fr-FR': 'Patience, jeune apprenti... car la sagesse ne se presse point. Commençons.',
        'de-DE': 'Geduld, junger Lehrling... denn Weisheit lässt sich nicht hetzen. Beginnen wir.',
        'default': 'Patience, young apprentice... wisdom is not rushed. Let us begin.'
      },
      fox: {
        'en-US': "Ha! Think you can outsmart a language? Let's see if you're quick enough!",
        'es-ES': '¡Ja! ¿Crees que puedes con el idioma? ¡Veamos si eres suficientemente rápido!',
        'fr-FR': "Ha! Tu crois pouvoir maîtriser le langage? Voyons si tu es assez rapide!",
        'de-DE': 'Ha! Du glaubst, du kannst die Sprache überlisten? Mal sehen, ob du schnell genug bist!',
        'default': "Ha! Think you can outsmart a language? Let's see how quick you are!"
      },
      robot: {
        'en-US': 'System initialized. Language protocol active. Commencing optimal learning sequence.',
        'es-ES': 'Sistema inicializado. Protocolo de idioma activo. Iniciando secuencia de aprendizaje óptima.',
        'fr-FR': 'Système initialisé. Protocole linguistique actif. Début de la séquence optimale.',
        'de-DE': 'System initialisiert. Sprachprotokoll aktiv. Optimale Lernsequenz beginnt.',
        'default': 'System initialized. Language protocol active. Commencing optimal learning sequence.'
      },
      alien: {
        'en-US': 'Greetings, carbon unit! Your language patterns are... most fascinating! Let us begin!',
        'es-ES': '¡Saludos, unidad de carbono! ¡Tus patrones lingüísticos son... fascinantes! ¡Empecemos!',
        'fr-FR': 'Salutations, unité carbonée! Vos structures langagières sont... fascinantes! Commençons!',
        'de-DE': 'Grüße, Kohlenstoffeinheit! Deine Sprachmuster sind... faszinierend! Beginnen wir!',
        'default': 'Greetings, carbon unit! Your language patterns are fascinating. Let us begin!'
      },
      phoenix: {
        'en-US': 'Every word is a new beginning. Rise from your mistakes and soar with me!',
        'es-ES': 'Cada palabra es un nuevo comienzo. ¡Resurge de tus errores y vuela conmigo!',
        'fr-FR': 'Chaque mot est un nouveau départ. Renais de tes erreurs et envole-toi avec moi!',
        'de-DE': 'Jedes Wort ist ein neuer Anfang. Erhebe dich aus deinen Fehlern und flieg mit mir!',
        'default': 'Every word is a new beginning. Rise from your mistakes and soar!'
      },
      ninja: {
        'en-US': 'Focus. Breathe. A language is mastered one step at a time. Begin.',
        'es-ES': 'Concéntrate. Respira. Un idioma se domina paso a paso. Comienza.',
        'fr-FR': 'Concentre-toi. Respire. Une langue se maîtrise pas à pas. Commence.',
        'de-DE': 'Fokus. Atme. Eine Sprache wird Schritt für Schritt gemeistert. Beginne.',
        'default': 'Focus. Breathe. A language is mastered one step at a time. Begin.'
      },
      panda: {
        'en-US': 'Hmmm... no rush. We learn gently, like bamboo growing in the morning sun.',
        'es-ES': 'Hmm... sin prisa. Aprendemos suavemente, como el bambú que crece al sol de la mañana.',
        'fr-FR': 'Hmm... rien ne presse. On apprend doucement, comme le bambou qui pousse au soleil.',
        'de-DE': 'Hmm... keine Eile. Wir lernen sanft, wie Bambus, der in der Morgensonne wächst.',
        'default': 'Hmmm... no rush. We learn gently, like bamboo in the morning sun.'
      },
      triton: {
        'en-US': 'By my honour, noble student, I shall guide thee through the art of language. Shall we commence?',
        'es-ES': 'Por mi honor, noble estudiante, te guiaré a través del arte del idioma. ¿Comenzamos?',
        'fr-FR': "Par mon honneur, noble étudiant, je te guiderai dans l'art du langage. Commençons?",
        'de-DE': 'Bei meiner Ehre, edler Schüler, ich werde dich durch die Kunst der Sprache führen. Sollen wir beginnen?',
        'default': 'By my honour, noble student, I shall guide thee through the art of language!'
      },
      axonic: {
        'en-US': "Yo yo yo! Drop the beat, drop the words — let's GO! Language is a VIBE!",
        'es-ES': '¡Yooo! ¡Suelta el beat, suelta las palabras — vamos! ¡El idioma es una vibra!',
        'fr-FR': "Yooo! Lâche le beat, lâche les mots — go! Le langage c'est une VIBE!",
        'de-DE': 'Yooo! Drop den Beat, drop die Wörter — los! Sprache ist eine VIBE!',
        'default': "Yo yo yo! Drop the beat, drop the words — let's GO! Language is a VIBE!"
      }
    };

    const charId = state.charId || 'dragon';
    const charLangPreviews = charPreviews[charId] || charPreviews['dragon'];
    const preview = charLangPreviews[targetLang] || charLangPreviews['default'] || charLangPreviews['en-US'];
    setTimeout(()=> speak(preview, targetLang), 300);
    showToast('🔊 Voz activada');
  } else {
    showToast('🔇 Voz desactivada');
  }
  save();
}

