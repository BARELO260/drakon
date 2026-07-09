/* ═══════════════════════════════════════
   audio.js — mic, Web Speech API, Whisper, TTS, ResponsiveVoice
   Dependencias: state.js, data.js
   Usado por: ai.js, lessons.js
   NOTA: No modificar los prompts internos de voz sin revisar CHAR_VOICE
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   PRONUNCIATION — real audio analysis
═══════════════════════════════════════ */
let recognition=null, isListening=false, pronunTarget='', pronunPhonetic='', pronunContext='chat';
let audioCtx=null, analyser=null, micStream=null;

/* ═══════════════════════════════════════
   SPEECH RECOGNITION — cross-platform
   Primary:  Web Speech API (Chrome Android/Desktop)
   Fallback: MediaRecorder → Groq Whisper (iOS Safari, Firefox, etc.)

   Fixes vs previous version:
   • Un solo getUserMedia por grabación (no doble stream)
   • startMicVisualization reutiliza el stream ya abierto
   • Groq Whisper como backend (más estable que HuggingFace)
   • timeslice en MediaRecorder.start(250) → chunks seguros en iOS
   • Timeout de seguridad de 60 s para liberar mic si algo falla
   • Limpieza de tracks garantizada en todos los caminos de error
═══════════════════════════════════════ */
let mediaRecorder = null;
let mediaChunks = [];
let usingWhisper = false;
let _activeStream = null;   // stream compartido para recorder + visualización
let _safetyTimer = null;    // timeout que libera mic si el usuario olvida parar
let _cachedStream = null;   // stream persistente reutilizable entre grabaciones
let _wsApiFailCount = 0;    // contador de fallos consecutivos de Web Speech API

// ── helpers ──────────────────────────────────────────────────
function hasSpeechRecognition(){
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

function _releaseStream(stream){
  try{ if(stream) stream.getTracks().forEach(t=>t.stop()); } catch(e){}
}

function _clearSafetyTimer(){
  if(_safetyTimer){ clearTimeout(_safetyTimer); _safetyTimer=null; }
}

// Obtiene un stream de micrófono, reutilizando el cacheado si sigue activo.
// Esto evita que el navegador muestre el diálogo de permiso más de una vez.
async function _getStream(){
  // Reutilizar stream activo si sus tracks siguen vivos
  if(_cachedStream && _cachedStream.getTracks().every(t => t.readyState === 'live')){
    return _cachedStream;
  }
  // Si hay un stream muerto, limpiarlo
  if(_cachedStream){ _releaseStream(_cachedStream); _cachedStream = null; }

  const stream = await navigator.mediaDevices.getUserMedia({
    audio:{ echoCancellation:true, noiseSuppression:true, sampleRate:16000 }
  });
  _cachedStream = stream;
  return stream;
}

// Devuelve la extensión más adecuada para el blob grabado
function _bestMime(){
  const types = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg;codecs=opus',
    'audio/mp4',
  ];
  for(const t of types){ if(MediaRecorder.isTypeSupported(t)) return t; }
  return '';
}

// ── Web Speech API ────────────────────────────────────────────
function initSpeech(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR) return false;
  recognition = new SR();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.lang = state.lang?.lang || 'en-US';

  recognition.onresult = e => {
    _wsApiFailCount = 0; // reconocimiento exitoso — resetear contador de fallos
    let interim = '', finalText = '', confidence = 0;
    for(let i = e.resultIndex; i < e.results.length; i++){
      if(e.results[i].isFinal){
        finalText += e.results[i][0].transcript;
        confidence = e.results[i][0].confidence || 0.85;
      } else {
        interim += e.results[i][0].transcript;
      }
    }
    if(pronunContext === 'chat'){
      const inp = document.getElementById('chatIn');
      // Mientras se habla mostramos el texto provisional (interim); al llegar
      // el texto final, dejamos ESE guardado en el input (no se pierde).
      if(inp) inp.value = finalText ? finalText.trim() : interim;
    }
    if(finalText) handleVoiceResult(finalText.trim(), confidence);
  };

  recognition.onerror = e => {
    _clearSafetyTimer();
    const msgs = {
      'not-allowed': '🎙️ Permiso denegado. Habilita el micrófono en ajustes.',
      'audio-capture':'🎙️ No se encontró micrófono.',
      'aborted':     null,
    };
    // Para no-speech y network: intentar Whisper automáticamente
    if(e.error === 'no-speech' || e.error === 'network'){
      _wsApiFailCount++;
      // Si falla 2+ veces seguidas, usar Whisper como backend principal
      if(_wsApiFailCount >= 2){
        showToast('🔄 Cambiando a grabación alternativa...');
        stopListening();
        // Arrancar Whisper con el stream cacheado si sigue vivo
        _getStream().then(stream => {
          const btn = document.getElementById('micBtn') || document.getElementById('exMicBtn');
          if(btn) btn.classList.add('on');
          startMicVisualization(stream);
          startWhisperRecording(stream).then(ok => { if(!ok) resetMicUI(); });
        }).catch(() => { resetMicUI(); showToast('🎙️ No se pudo acceder al micrófono.'); });
        return;
      }
      // Primer fallo: mostrar aviso y dejar que el usuario vuelva a intentar
      showToast('🔇 No se detectó voz. Habla más cerca del micrófono.');
      stopListening(); resetMicUI();
      return;
    }
    stopListening(); resetMicUI();
    const msg = msgs[e.error];
    if(msg) showToast(msg);
  };

  recognition.onend = () => { _clearSafetyTimer(); stopListening(); resetMicUI(); };
  return true;
}

// ── Groq Whisper transcription ────────────────────────────────
async function transcribeWithWhisper(blob){
  // Try Groq first (fast, reliable, free tier generoso)
  const groqKey = state.groqKey || localStorage.getItem('groqKey');
  if(groqKey){
    try{
      const ext  = blob.type.includes('mp4') ? 'mp4' : blob.type.includes('ogg') ? 'ogg' : 'webm';
      const fd   = new FormData();
      fd.append('file', blob, `audio.${ext}`);
      fd.append('model', 'whisper-large-v3-turbo');
      fd.append('language', (state.lang?.lang||'en-US').split('-')[0]);
      fd.append('response_format', 'json');
      const r = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
        method:'POST', headers:{'Authorization':'Bearer '+groqKey}, body:fd,
        signal: AbortSignal.timeout(25000)
      });
      if(r.ok){ const j=await r.json(); if(j.text) return j.text.trim(); }
    } catch(e){}
  }

  // Fallback: Pollinations Whisper proxy (no key needed, menos confiable)
  try{
    const ext  = blob.type.includes('mp4') ? 'mp4' : blob.type.includes('ogg') ? 'ogg' : 'webm';
    const fd   = new FormData();
    fd.append('file', blob, `audio.${ext}`);
    const r = await fetch('https://audio.api.pollinations.ai/transcriptions', {
      method:'POST', body:fd,
      signal: AbortSignal.timeout(25000)
    });
    if(r.ok){ const j=await r.json(); if(j.text) return j.text.trim(); }
  } catch(e){}

  return null;
}

function blobToBase64(blob){
  return new Promise(resolve=>{
    const r = new FileReader();
    r.onload = ()=> resolve(r.result);
    r.readAsDataURL(blob);
  });
}

// ── MediaRecorder (Whisper fallback) ─────────────────────────
// Recibe el stream ya abierto para NO pedir permiso dos veces
async function startWhisperRecording(stream){
  try{
    _activeStream = stream;
    mediaChunks   = [];
    const mimeType = _bestMime();
    mediaRecorder  = new MediaRecorder(stream, mimeType ? {mimeType} : {});

    mediaRecorder.ondataavailable = e => {
      if(e.data && e.data.size > 0) mediaChunks.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      _clearSafetyTimer();
      // Solo liberamos _activeStream si es diferente al stream cacheado,
      // para no matar el track compartido entre grabaciones.
      if(_activeStream && _activeStream !== _cachedStream){
        _releaseStream(_activeStream);
      }
      _activeStream = null;
      stopMicVisualization();

      if(mediaChunks.length === 0){
        stopListening(); resetMicUI();
        showToast('🔇 No se capturó audio. Intenta de nuevo.');
        return;
      }
      const blob = new Blob(mediaChunks, {type: mimeType || 'audio/webm'});
      showToast('🔄 Procesando audio...');
      const text = await transcribeWithWhisper(blob);
      if(text && text.trim()){
        handleVoiceResult(text.trim(), 0.85);
      } else {
        stopListening(); resetMicUI();
        showToast('🔇 No se pudo reconocer el audio. Intenta de nuevo.');
      }
    };

    mediaRecorder.onerror = () => {
      _clearSafetyTimer();
      if(_activeStream && _activeStream !== _cachedStream) _releaseStream(_activeStream);
      _activeStream = null;
      stopListening(); resetMicUI();
      showToast('🎙️ Error al grabar. Intenta de nuevo.');
    };

    // timeslice=250ms → chunks frecuentes, seguro en iOS Safari
    mediaRecorder.start(250);
    usingWhisper = true;
    isListening  = true;

    // Safety timeout: libera el mic después de 60 s si no se detiene manualmente
    _safetyTimer = setTimeout(()=>{
      if(isListening && mediaRecorder && mediaRecorder.state !== 'inactive'){
        showToast('⏱️ Grabación detenida automáticamente (60 s)');
        mediaRecorder.stop();
      }
    }, 60000);

    return true;
  } catch(e){
    if(stream && stream !== _cachedStream) _releaseStream(stream);
    _activeStream = null;
    showToast('🎙️ No se pudo iniciar la grabación: ' + (e.message||e));
    return false;
  }
}

// ── Mic visualización (reutiliza stream activo) ───────────────
function startMicVisualization(stream){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    // Reanudar contexto suspendido (política autoplay de iOS)
    if(audioCtx.state === 'suspended') audioCtx.resume();
    const src = audioCtx.createMediaStreamSource(stream);
    analyser  = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    src.connect(analyser);
    micStream = stream;   // solo guardamos referencia, no somos dueños del track
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

// No detenemos los tracks aquí — el dueño (recorder o recognition) los libera
function stopMicVisualization(){ micStream=null; analyser=null; }

// ── toggleMic (chat) ──────────────────────────────────────────
async function toggleMic(){
  // —— Parar si ya está grabando ——
  if(isListening){
    _clearSafetyTimer();
    if(usingWhisper && mediaRecorder && mediaRecorder.state !== 'inactive'){
      mediaRecorder.stop();
    } else if(recognition){
      recognition.stop();
    }
    return;
  }

  pronunContext = 'chat'; pronunTarget = '';

  // —— Obtener micrófono (reutiliza stream cacheado si ya tiene permiso) ——
  let stream;
  try{
    stream = await _getStream();
  } catch(e){
    const denied = e.name === 'NotAllowedError' || e.name === 'PermissionDeniedError';
    showToast(denied
      ? '🎙️ Permiso de micrófono denegado. Habilítalo en los ajustes del navegador.'
      : '🎙️ No se pudo acceder al micrófono: ' + (e.message||e));
    return;
  }

  // —— Web Speech API: reutiliza el stream ya abierto para visualización ——
  if(hasSpeechRecognition()){
    recognition = null;
    if(initSpeech()){
      recognition.lang = state.lang?.lang || 'en-US';
      try{
        recognition.start();
        isListening = true;
        const btn = document.getElementById('micBtn'); if(btn) btn.classList.add('on');
        const inp = document.getElementById('chatIn'); if(inp) inp.placeholder = '🎙️ Escuchando...';
        startMicVisualization(stream);
        // Safety timer para Web Speech (60 s)
        _safetyTimer = setTimeout(()=>{
          if(isListening && recognition){ recognition.stop(); }
        }, 60000);
        return;
      } catch(e){
        // Web Speech lanzó excepción — liberar stream y caer a Whisper
        _releaseStream(stream);
        recognition = null;
      }
    }
  }

  // —— Whisper fallback ——
  const btn = document.getElementById('micBtn'); if(btn) btn.classList.add('on');
  const inp = document.getElementById('chatIn'); if(inp) inp.placeholder = '🎙️ Grabando... toca 🎙️ para detener';
  showToast('🎙️ Grabando... toca el micrófono para terminar');
  startMicVisualization(stream);
  const ok = await startWhisperRecording(stream);
  if(!ok){ resetMicUI(); }
}

// ── startPronunEx (ejercicio de pronunciación) ────────────────
async function startPronunEx(word, phonetic){
  if(isListening){
    _clearSafetyTimer();
    if(usingWhisper && mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    else if(recognition) recognition.stop();
    return;
  }

  let stream;
  try{
    stream = await _getStream();
  } catch(e){
    showToast('🎙️ Permiso de micrófono denegado.'); return;
  }

  pronunTarget = word; pronunPhonetic = phonetic; pronunContext = 'exercise';

  const btn    = document.getElementById('exMicBtn');
  const wave   = document.getElementById('exWave');
  const status = document.getElementById('pronunStatus');
  if(btn){ btn.classList.add('listening'); btn.textContent = '🔴 Escuchando...'; }
  if(wave) wave.style.display = 'flex';
  if(status) status.textContent = `Escuchando... pronuncia "${word}" ahora`;

  startMicVisualization(stream);

  if(hasSpeechRecognition()){
    recognition = null;
    if(initSpeech()){
      recognition.lang = state.lang?.lang || 'en-US';
      try{
        recognition.start(); isListening = true;
        _safetyTimer = setTimeout(()=>{ if(isListening && recognition) recognition.stop(); }, 60000);
        return;
      } catch(e){
        _releaseStream(stream);
        recognition = null;
      }
    }
  }

  // Whisper fallback
  const ok = await startWhisperRecording(stream);
  if(!ok){ resetMicUI(); }
}

// ── shared result handler ─────────────────────────────────────
// Se llama cuando ya tenemos texto FINAL (Web Speech o Whisper).
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
  isListening  = false;
  usingWhisper = false;
  stopMicVisualization();
}

function resetMicUI(){
  const mb = document.getElementById('micBtn');    if(mb) mb.classList.remove('on');
  const eb = document.getElementById('exMicBtn'); if(eb){ eb.classList.remove('listening'); eb.textContent='🎙️ Pronunciar'; }
  const ew = document.getElementById('exWave');   if(ew) ew.style.display='none';
  const inp= document.getElementById('chatIn');   if(inp) inp.placeholder='Escribe aquí...';
}

/* ═══════════════════════════════════════
   TTS — ResponsiveVoice (proper accents) + Web Speech fallback
═══════════════════════════════════════ */
let ttsActive = false;

// ResponsiveVoice names per language code
// Native language voice mapping for ResponsiveVoice
// Personalidad de voz por personaje: {gender, rate, pitch, volume}
// gender 'M' = Male voice, 'F' = Female voice
// Cada personaje suena distinto usando los parámetros del sintetizador
const CHAR_VOICE = {
  // 🐲 Drakón — dragón poderoso: grave y majestuoso, cadencia lenta pero clara.
  dragon: { gender:'M', rate:0.82, pitch:0.72, volume:1    },

  // 🧙 Merlingo — mago sabio: solemne y pausado, cada palabra suena con peso.
  wizard: { gender:'M', rate:0.78, pitch:0.82, volume:0.92 },

  // 🦊 Zorrek — zorro pícaro: ágil y animado, energético pero inteligible.
  fox:    { gender:'M', rate:1.10, pitch:1.20, volume:1    },

  // 🤖 Syntinator — robot analítico: ritmo uniforme y tono metálico neutro.
  robot:  { gender:'M', rate:0.90, pitch:0.70, volume:1    },

  // 👽 Marshal — alienígena: vivo y agudo, extraño pero comprensible.
  alien:  { gender:'M', rate:1.10, pitch:1.35, volume:1    },

  // 🔥 Azhar — fénix inspirador: cálido, fluido y con lift natural.
  phoenix:{ gender:'F', rate:0.95, pitch:1.20, volume:1    },

  // 🥷 Kenjiro — ninja: sereno y preciso, habla con control y claridad.
  ninja:  { gender:'M', rate:0.85, pitch:0.88, volume:0.88 },

  // 🐼 Bao — panda zen: suave y tranquilo, volumen más bajo pero audible.
  panda:  { gender:'F', rate:0.80, pitch:1.05, volume:0.82 },

  // 🦈 Barón Tritón — caballero: resonante y formal, pitch bajo pero legible.
  triton: { gender:'M', rate:0.82, pitch:0.75, volume:1    },

  // 🎵 Axónic — DJ ajolote: energético y chispeante, rápido pero claro.
  axonic: { gender:'F', rate:1.15, pitch:1.30, volume:1    },
};

const TARGET_RV_VOICES = {
  'en-US': 'US English Female',
  'en-GB': 'UK English Female',
  'es-ES': 'Spanish Female',
  'es-MX': 'Spanish Latin American Female',
  'fr-FR': 'French Female',
  'de-DE': 'Deutsch Female',
  'ja-JP': 'Japanese Female',
  'zh-CN': 'Chinese Female',
  'ko-KR': 'Korean Female',
  'it-IT': 'Italian Female',
  'pt-BR': 'Brazilian Portuguese Female',
  'ru-RU': 'Russian Female',
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
          model: 'llama-3.1-8b-instant', // fast & cheap for translation
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
  const bcp47Map   = {'en-US':'en-US','en-GB':'en-GB','es-ES':'es-ES','es-MX':'es-MX','fr-FR':'fr-FR','de-DE':'de-DE','ja-JP':'ja-JP','zh-CN':'zh-CN','ko-KR':'ko-KR','it-IT':'it-IT','pt-BR':'pt-BR','ru-RU':'ru-RU'};

  // Obtener personalidad de voz del personaje actual
  const cv = CHAR_VOICE[state.charId] || { gender:'F', rate:0.9, pitch:1, volume:1 };

  // Construir nombre de voz ResponsiveVoice según género del personaje
  const baseVoice  = TARGET_RV_VOICES[targetLang] || 'US English Female';
  // Cambiar Female→Male o Male→Female según el personaje
  const charVoice  = cv.gender === 'M'
    ? baseVoice.replace('Female','Male')
    : baseVoice.replace('Male','Female');

  if(window.responsiveVoice && responsiveVoice.voiceSupport()){
    responsiveVoice.cancel();
    responsiveVoice.speak(text, charVoice, {
      rate:   cv.rate,
      pitch:  cv.pitch,
      volume: cv.volume
    });
  } else if(window.speechSynthesis){
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang   = bcp47Map[targetLang] || targetLang;
    utt.rate   = cv.rate * 0.95;
    utt.pitch  = cv.pitch;
    utt.volume = cv.volume;
    window.speechSynthesis.speak(utt);
  }
}

async function speakText(rawText){
  if(!state.ttsEnabled) return;
  if(!window.responsiveVoice && !window.speechSynthesis) return;

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
  if(window.responsiveVoice) responsiveVoice.cancel();
  if(window.speechSynthesis) window.speechSynthesis.cancel();
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
        'ja-JP': '立ち上がれ、戦士よ！言語の炎があなたを待っている。',
        'default': 'Rise, warrior! The fire of language awaits you!'
      },
      wizard: {
        'en-US': 'Patience, young apprentice... for wisdom is not rushed. Let us begin.',
        'es-ES': 'Paciencia, joven aprendiz... pues la sabiduría no se apresura. Comencemos.',
        'fr-FR': 'Patience, jeune apprenti... car la sagesse ne se presse point. Commençons.',
        'de-DE': 'Geduld, junger Lehrling... denn Weisheit lässt sich nicht hetzen. Beginnen wir.',
        'ja-JP': '焦るな、若き弟子よ。知恵とは急ぐものではない。さあ、始めよう。',
        'default': 'Patience, young apprentice... wisdom is not rushed. Let us begin.'
      },
      fox: {
        'en-US': "Ha! Think you can outsmart a language? Let's see if you're quick enough!",
        'es-ES': '¡Ja! ¿Crees que puedes con el idioma? ¡Veamos si eres suficientemente rápido!',
        'fr-FR': "Ha! Tu crois pouvoir maîtriser le langage? Voyons si tu es assez rapide!",
        'de-DE': 'Ha! Du glaubst, du kannst die Sprache überlisten? Mal sehen, ob du schnell genug bist!',
        'ja-JP': 'ははは！言語に勝てると思ってる？さあ、ついてこられるかな！',
        'default': "Ha! Think you can outsmart a language? Let's see how quick you are!"
      },
      robot: {
        'en-US': 'System initialized. Language protocol active. Commencing optimal learning sequence.',
        'es-ES': 'Sistema inicializado. Protocolo de idioma activo. Iniciando secuencia de aprendizaje óptima.',
        'fr-FR': 'Système initialisé. Protocole linguistique actif. Début de la séquence optimale.',
        'de-DE': 'System initialisiert. Sprachprotokoll aktiv. Optimale Lernsequenz beginnt.',
        'ja-JP': 'システム初期化完了。言語プロトコル起動。最適学習シーケンスを開始します。',
        'default': 'System initialized. Language protocol active. Commencing optimal learning sequence.'
      },
      alien: {
        'en-US': 'Greetings, carbon unit! Your language patterns are... most fascinating! Let us begin!',
        'es-ES': '¡Saludos, unidad de carbono! ¡Tus patrones lingüísticos son... fascinantes! ¡Empecemos!',
        'fr-FR': 'Salutations, unité carbonée! Vos structures langagières sont... fascinantes! Commençons!',
        'de-DE': 'Grüße, Kohlenstoffeinheit! Deine Sprachmuster sind... faszinierend! Beginnen wir!',
        'ja-JP': 'こんにちは、炭素ベースの生命体！あなたの言語パターンは実に興味深い！',
        'default': 'Greetings, carbon unit! Your language patterns are fascinating. Let us begin!'
      },
      phoenix: {
        'en-US': 'Every word is a new beginning. Rise from your mistakes and soar with me!',
        'es-ES': 'Cada palabra es un nuevo comienzo. ¡Resurge de tus errores y vuela conmigo!',
        'fr-FR': 'Chaque mot est un nouveau départ. Renais de tes erreurs et envole-toi avec moi!',
        'de-DE': 'Jedes Wort ist ein neuer Anfang. Erhebe dich aus deinen Fehlern und flieg mit mir!',
        'ja-JP': '一つ一つの言葉が新しい始まりです。間違いから立ち上がり、共に羽ばたきましょう！',
        'default': 'Every word is a new beginning. Rise from your mistakes and soar!'
      },
      ninja: {
        'en-US': 'Focus. Breathe. A language is mastered one step at a time. Begin.',
        'es-ES': 'Concéntrate. Respira. Un idioma se domina paso a paso. Comienza.',
        'fr-FR': 'Concentre-toi. Respire. Une langue se maîtrise pas à pas. Commence.',
        'de-DE': 'Fokus. Atme. Eine Sprache wird Schritt für Schritt gemeistert. Beginne.',
        'ja-JP': '集中しろ。呼吸しろ。言語は一歩一歩習得するものだ。始めよ。',
        'default': 'Focus. Breathe. A language is mastered one step at a time. Begin.'
      },
      panda: {
        'en-US': 'Hmmm... no rush. We learn gently, like bamboo growing in the morning sun.',
        'es-ES': 'Hmm... sin prisa. Aprendemos suavemente, como el bambú que crece al sol de la mañana.',
        'fr-FR': 'Hmm... rien ne presse. On apprend doucement, comme le bambou qui pousse au soleil.',
        'de-DE': 'Hmm... keine Eile. Wir lernen sanft, wie Bambus, der in der Morgensonne wächst.',
        'ja-JP': 'ふむ…急がなくていいよ。竹が朝日の中でゆっくり育つように、丁寧に学ぼう。',
        'default': 'Hmmm... no rush. We learn gently, like bamboo in the morning sun.'
      },
      triton: {
        'en-US': 'By my honour, noble student, I shall guide thee through the art of language. Shall we commence?',
        'es-ES': 'Por mi honor, noble estudiante, te guiaré a través del arte del idioma. ¿Comenzamos?',
        'fr-FR': "Par mon honneur, noble étudiant, je te guiderai dans l'art du langage. Commençons?",
        'de-DE': 'Bei meiner Ehre, edler Schüler, ich werde dich durch die Kunst der Sprache führen. Sollen wir beginnen?',
        'ja-JP': '我が名誉にかけて、高貴なる学徒よ、言語の術へと導こう。始めようではないか。',
        'default': 'By my honour, noble student, I shall guide thee through the art of language!'
      },
      axonic: {
        'en-US': "Yo yo yo! Drop the beat, drop the words — let's GO! Language is a VIBE!",
        'es-ES': '¡Yooo! ¡Suelta el beat, suelta las palabras — vamos! ¡El idioma es una vibra!',
        'fr-FR': "Yooo! Lâche le beat, lâche les mots — go! Le langage c'est une VIBE!",
        'de-DE': 'Yooo! Drop den Beat, drop die Wörter — los! Sprache ist eine VIBE!',
        'ja-JP': 'いえーい！ビートを刻め、言葉を刻め！言語はバイブだ！レッツゴー！',
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

