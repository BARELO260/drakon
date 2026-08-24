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

// Translate text to the target language using Groq, then speak it
async function translateAndSpeak(cleanText){
  if(!state.groqKey) return speak(cleanText); // no key — skip translate

  const targetLang  = state.lang?.lang  || 'en-US';
  const targetName  = state.lang?.name  || 'English'; // e.g. "Inglés"
  const targetNative= state.lang?.native|| 'English'; // e.g. "English"

  try{
    const resp = await Promise.race([
      fetch('https://api.groq.com/openai/v1/chat/completions',{
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':`Bearer ${state.groqKey}`},
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b', // fast & cheap for translation
          max_tokens: 400,
          temperature: 0.1,
          messages:[{
            role:'user',
            content:`Translate the following text to ${targetNative}. Return ONLY the translated text, no explanations, no quotes, no extra text.\n\n${cleanText}`
          }]
        })
      }),
      new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),10000))
    ]);
    if(!resp.ok) throw new Error('translate_fail');
    const data = await resp.json();
    const translated = data?.choices?.[0]?.message?.content?.trim();
    if(translated) return speak(translated, targetLang);
  } catch(e){}

  // Fallback: speak original text with target voice anyway
  speak(cleanText, targetLang);
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

  // Translate to target language then speak with target voice
  await translateAndSpeak(text);
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

