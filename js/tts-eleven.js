/* ═══════════════════════════════════════════════════════════
   tts-eleven.js — Motor de síntesis de voz compartido
   Ruta: drakón/js/tts-eleven.js
   Usado por: js/audio.js (chat con personajes), js/lessons.js
              (ejercicios "Escuchar") y js/listening.js (Listening
              Probe en games.html).

   POR QUÉ ESTE ARCHIVO
   Antes cada pantalla llamaba directamente a ResponsiveVoice
   (`responsiveVoice.speak(...)`), un servicio de voces sintéticas
   con acento robótico y sin control real de expresividad/emoción.
   Ahora todas las pantallas pasan por este único motor, que:

     1. Usa la API de ElevenLabs (voces neuronales, naturales y
        expresivas, con soporte multi-idioma real) cuando el
        usuario configuró su API key gratuita en Ajustes.
     2. Si no hay key configurada, o la petición falla (sin
        cuota, sin conexión, key inválida...), cae automáticamente
        a la síntesis de voz nativa del navegador (Web Speech API)
        — igual que antes, para que la app NUNCA se quede muda.

   Por qué ElevenLabs: voces neuronales de calidad profesional,
   soporta más de 25 idiomas con el mismo modelo (incluye todos
   los idiomas del curso: en/es/fr/de/it/pt), permite ajustar
   estabilidad/estilo/velocidad por voz (así cada personaje suena
   distinto y con emoción real, no solo "más agudo o más grave"),
   tiene API REST simple y muy bien documentada, y su plan
   gratuito (10.000 créditos/mes, ~10 min de audio) es suficiente
   para desarrollo y pruebas.
   ═══════════════════════════════════════════════════════════ */

const ELEVEN_API_URL = 'https://api.elevenlabs.io/v1/text-to-speech';
// eleven_multilingual_v2: el modelo más estable de ElevenLabs y el que mejor
// cubre los idiomas de este curso (en, es, fr, de, it, pt) con voces
// consistentes y de alta calidad.
const ELEVEN_MODEL = 'eleven_multilingual_v2';

// Mapa de códigos de idioma de la app → BCP-47, para el fallback nativo.
const TTS_BCP47_MAP = {
  'en-US':'en-US', 'en-GB':'en-GB', 'es-ES':'es-ES', 'es-MX':'es-MX',
  'fr-FR':'fr-FR', 'de-DE':'de-DE', 'it-IT':'it-IT', 'pt-BR':'pt-BR',
};

// Voz "narradora" neutra para frases sueltas de ejercicios (Escuchar /
// Listening Probe), que no están ligadas a ningún personaje concreto.
const NARRATOR_VOICE = { voiceId:'21m00Tcm4TlvDq8ikWAM', name:'Rachel', gender:'F', stability:0.55, style:0.25, speed:1.0 };

let _ttsAudioEl = null; // <audio> actualmente reproduciendo un TTS de ElevenLabs

/* ── Obtiene la API key del usuario, sin importar en qué página estemos ──
   En index.html existe `state.elevenKey` (con su propio localStorage
   dedicado, ver js/auth.js). En games.html no se carga state.js, así que
   leemos directamente la misma clave de localStorage que usa toda la app. */
function getElevenKey(){
  if(typeof state !== 'undefined' && state && state.elevenKey) return state.elevenKey;
  try{
    const dedicated = localStorage.getItem('drakon_eleven_key');
    if(dedicated) return dedicated;
    const pwa = JSON.parse(localStorage.getItem('drakon_pwa') || '{}');
    if(pwa && pwa.elevenKey) return pwa.elevenKey;
  }catch(e){}
  return null;
}

/* ── Llamada real a la API de ElevenLabs ──────────────────────────────
   Devuelve una Promise<boolean>: true si logró reproducir el audio,
   false si no hay key o la petición falló (para que el llamador use el
   fallback de Web Speech API). `onend` se llama cuando el audio termina
   (o falla a mitad de reproducción, para no dejar la UI colgada). */
// Evita spamear al usuario: solo un aviso de fallo por sesión de página.
let _elevenWarnedThisSession = false;
function _warnElevenFailure(detail){
  console.error('[Drakón][ElevenLabs] Falló la síntesis de voz, usando fallback nativo:', detail);
  if(_elevenWarnedThisSession) return;
  _elevenWarnedThisSession = true;
  if(typeof showToast === 'function'){
    showToast('⚠️ La voz de ElevenLabs falló (revisa tu API key/cuota/voice_id). Usando voz del navegador.');
  }
}

/* ── Resolución dinámica de voces contra la cuenta real del usuario ────
   Los voiceId de arriba son voces "premade" clásicas de ElevenLabs, pero
   ElevenLabs ha ido deprecando/retirando varias de ellas y no todas las
   cuentas (sobre todo las nuevas) las tienen disponibles. Si el voiceId
   hardcodeado devuelve 404, en vez de rendirnos, pedimos la lista real de
   voces de la cuenta (GET /v1/voices), buscamos una con el mismo nombre
   ("Arnold", "Rachel"...), y si tampoco existe, asignamos una voz libre
   de la cuenta a ese personaje. La asignación se recuerda en localStorage
   para no tener que resolverla en cada frase. */
let _accountVoicesPromise = null;
let _accountVoicesForKey  = null;
async function _getAccountVoices(){
  const key = getElevenKey();
  if(!key) return [];
  if(_accountVoicesPromise && _accountVoicesForKey === key) return _accountVoicesPromise;
  _accountVoicesForKey = key;
  _accountVoicesPromise = (async () => {
    try{
      const r = await fetch('https://api.elevenlabs.io/v1/voices', { headers:{ 'xi-api-key': key } });
      if(!r.ok) return [];
      const data = await r.json();
      return Array.isArray(data.voices) ? data.voices : [];
    }catch(e){ return []; }
  })();
  return _accountVoicesPromise;
}

const _VOICE_MAP_LS_KEY = 'drakon_eleven_voice_map_v1';
function _loadVoiceMap(){
  try{ return JSON.parse(localStorage.getItem(_VOICE_MAP_LS_KEY) || '{}'); }catch(e){ return {}; }
}
function _saveVoiceMap(map){
  try{ localStorage.setItem(_VOICE_MAP_LS_KEY, JSON.stringify(map)); }catch(e){}
}
// No guardamos la key completa en el mapa (solo un fragmento), por si cambia de cuenta.
// Incluimos voice.name en la clave: si en el código se reasigna la voz de un
// personaje (p.ej. al intercambiar voces entre dos personajes), la caché
// vieja en localStorage queda automáticamente obsoleta y se recalcula, en
// vez de seguir devolviendo la voz que tenía antes del cambio.
function _voiceMapCacheKey(apiKey, charKey, voiceName){
  return apiKey.slice(-6) + ':' + charKey + ':' + (voiceName || '').toLowerCase();
}

async function _resolveVoiceId(charKey, voice, forceRefresh){
  const apiKey = getElevenKey();
  if(!apiKey) return voice.voiceId;
  const cacheKey = _voiceMapCacheKey(apiKey, charKey, voice.name);
  const map = _loadVoiceMap();
  if(!forceRefresh && map[cacheKey]) return map[cacheKey];

  const voices = await _getAccountVoices();
  if(voices.length === 0) return voice.voiceId; // no se pudo listar: probamos con el id original

  // 1) coincidencia exacta por nombre (p.ej. "Arnold")
  let match = voice.name ? voices.find(v => v.name && v.name.toLowerCase() === voice.name.toLowerCase()) : null;
  // 2) el voiceId original sigue existiendo en esta cuenta
  if(!match) match = voices.find(v => v.voice_id === voice.voiceId);
  // 3) primera voz de la cuenta aún no asignada a otro personaje, priorizando el mismo género
  if(!match){
    const used = new Set(Object.values(map));
    const wantGender = voice.gender === 'F' ? 'female' : 'male';
    match = voices.find(v => !used.has(v.voice_id) && v.labels && v.labels.gender === wantGender)
         || voices.find(v => !used.has(v.voice_id))
         || voices[0];
  }

  const id = match.voice_id;
  map[cacheKey] = id;
  _saveVoiceMap(map);
  return id;
}

async function _elevenSpeak(text, voice, onend, charKey){
  if(typeof hasManagedAi==='function' && hasManagedAi()){
    try{ return _elevenPlayBlob(await managedTTS(text,charKey||'narrator'),onend); }
    catch(e){ _warnElevenFailure('managed voice service unavailable'); return false; }
  }
  const key = getElevenKey();
  if(!key || !text) return false; // sin key configurada: fallback silencioso, es lo esperado
  const resolveKey = charKey || voice.name || voice.voiceId;
  try{
    const voiceId = await _resolveVoiceId(resolveKey, voice);
    const r = await _elevenRequest(text, voice, voiceId, key);
    if(r.ok) return _elevenPlay(r, onend);

    // Si da 404, la voz asignada tampoco existe (o cambió) — invalidamos la
    // caché y forzamos una re-resolución fresca antes de rendirnos.
    if(r.status === 404){
      const r2id = await _resolveVoiceId(resolveKey, voice, true);
      if(r2id !== voiceId){
        const r2 = await _elevenRequest(text, voice, r2id, key);
        if(r2.ok) return _elevenPlay(r2, onend);
        await _reportFailure(r2, r2id);
        return false;
      }
    }
    await _reportFailure(r, voiceId);
    return false;
  } catch(e){
    _warnElevenFailure(e && e.message ? e.message : e);
    return false;
  }
}

function _elevenRequest(text, voice, voiceId, key){
  return fetch(`${ELEVEN_API_URL}/${voiceId}`, {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'xi-api-key': key,
      'Accept':'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: ELEVEN_MODEL,
      voice_settings:{
        stability: voice.stability,
        similarity_boost: 0.8,
        style: voice.style,
        use_speaker_boost: true,
        speed: voice.speed,
      },
    }),
    signal: AbortSignal.timeout(20000),
  });
}

async function _elevenPlay(r, onend){
  return _elevenPlayBlob(await r.blob(),onend);
}

async function _elevenPlayBlob(blob, onend){
  const url  = URL.createObjectURL(blob);
  if(_ttsAudioEl){ try{ _ttsAudioEl.pause(); }catch(e){} }
  const audioEl = new Audio(url);
  _ttsAudioEl = audioEl;
  const cleanup = () => { URL.revokeObjectURL(url); if(onend) onend(); };
  audioEl.onended = cleanup;
  audioEl.onerror  = cleanup;
  await audioEl.play();
  return true;
}

async function _reportFailure(r, voiceId){
  // Sí había key configurada pero la petición falló: esto es lo que hace
  // que "las voces no cambien" (cae siempre a la voz nativa del navegador,
  // que es la misma para todos los personajes). Lo hacemos visible en vez
  // de fallar en silencio, para poder diagnosticar (401 = key inválida,
  // 404 = voice_id no existe en esta cuenta, 429 = sin cuota, etc.)
  let bodyText = '';
  try{ bodyText = await r.text(); }catch(e){}
  _warnElevenFailure(`HTTP ${r.status} (voiceId: ${voiceId}) — ${bodyText.slice(0,300)}`);
}

/* ── Fallback: síntesis nativa del navegador (Web Speech API) ────────── */
function _webSpeechSpeak(text, langTag, rate, pitch, onend){
  if(!('speechSynthesis' in window)){ if(onend) onend(); return false; }
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang   = langTag || 'en-US';
  utt.rate   = rate  || 0.95;
  utt.pitch  = pitch !== undefined ? pitch : 1;
  const voices = window.speechSynthesis.getVoices();
  const prefix = (langTag||'en-US').split('-')[0];
  const voice  = voices.find(v=>v.lang===langTag && !v.localService)
              || voices.find(v=>v.lang.startsWith(prefix) && !v.localService)
              || voices.find(v=>v.lang.startsWith(prefix));
  if(voice) utt.voice = voice;
  utt.onend = utt.onerror = () => { if(onend) onend(); };
  window.speechSynthesis.speak(utt);
  return true;
}

/* ── API pública: hablar con la voz de un personaje ────────────────────
   `voice` es una entrada de CHAR_VOICE (js/audio.js): {voiceId, name,
   stability, style, speed, gender}. `langTag` se usa solo si hace falta
   el fallback. `charKey` (p.ej. 'dragon') identifica al personaje para
   poder recordar qué voz real de la cuenta le corresponde. */
function ttsSpeakChar(text, voice, langTag, onend, charKey){
  _elevenSpeak(text, voice, onend, charKey || voice.name).then(ok=>{
    if(!ok) _webSpeechSpeak(text, langTag, voice.speed*0.95, voice.gender==='M'?0.85:1.12, onend);
  });
}

/* ── API pública: hablar una frase suelta (ejercicios de Escuchar) ─────
   `rate` es la velocidad deseada (0.7–1.2 aprox, viene de la dificultad). */
function ttsSpeakPhrase(text, langTag, rate, onend){
  const voice = Object.assign({}, NARRATOR_VOICE, { speed: rate || NARRATOR_VOICE.speed });
  _elevenSpeak(text, voice, onend, 'narrator').then(ok=>{
    if(!ok) _webSpeechSpeak(text, langTag, rate || 0.9, 1, onend);
  });
}

/* ── Detiene cualquier audio en curso (ElevenLabs o nativo) ───────────── */
function ttsStopAll(){
  if(_ttsAudioEl){ try{ _ttsAudioEl.pause(); }catch(e){} _ttsAudioEl = null; }
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
}
