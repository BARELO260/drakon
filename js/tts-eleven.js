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
function _warnElevenFailure(detail, isPermission){
  console.error('[Drakón][ElevenLabs] Falló la síntesis de voz, usando fallback nativo:', detail);
  if(_elevenWarnedThisSession) return;
  _elevenWarnedThisSession = true;
  if(typeof showToast === 'function'){
    showToast(isPermission
      ? '⚠️ Tu clave de ElevenLabs no tiene activado el permiso "Text to Speech". Ve a Ajustes → edítala en elevenlabs.io y actívalo.'
      : '⚠️ La voz de ElevenLabs falló (revisa tu API key/cuota/voice_id). Usando voz del navegador.');
  }
}

/* ── Cola global de peticiones a ElevenLabs ────────────────────────────
   Varias partes de la app pueden pedir voz casi al mismo tiempo sin
   saber unas de otras (el chat, la mascota reaccionando, un ejercicio de
   "Escuchar", la videollamada...). Si dos de esas peticiones coinciden,
   pueden chocar con el límite de peticiones simultáneas de la cuenta de
   ElevenLabs (el plan gratuito solo permite muy pocas a la vez) — eso
   hacía que la voz "empezara bien y luego se trabara": la primera
   petición iba bien, la segunda (que coincidía con otra en curso en
   cualquier parte de la app) fallaba. Esta cola asegura que NUNCA haya
   más de una petición a ElevenLabs en vuelo a la vez en TODA la app. */
let _elevenQueue = Promise.resolve();
function _elevenEnqueue(task){
  const run = () => task();
  const result = _elevenQueue.then(run, run);
  _elevenQueue = result.then(() => {}, () => {}); // la cola sigue aunque una tarea falle
  return result;
}

/* ── Interruptor de emergencia (circuit breaker) ──────────────────────
   Antes, cuando la clave de ElevenLabs era inválida o no tenía cuota,
   CADA tramo de CADA respuesta volvía a intentar la petición completa
   (incluyendo, en el caso de un 404, una segunda vuelta pidiendo la lista
   de voces de la cuenta y reintentando) antes de caer al navegador — eso
   es lo que hacía que la voz se sintiera "lentísima": el mismo fallo se
   repetía una y otra vez, tramo tras tramo, mensaje tras mensaje.
   Ahora, en cuanto UNA petición falla de verdad, se recuerda que
   ElevenLabs no está disponible durante un tiempo (2 minutos) y todos los
   tramos siguientes van DIRECTO al fallback nativo, sin esperar ni un
   solo milisegundo de red extra. Si el usuario cambia su clave (p.ej.
   corrige un typo en Ajustes), el interruptor se resetea al instante. */
const ELEVEN_COOLDOWN_MS = 60000; // 1 minuto: tras un fallo, no se reintenta ElevenLabs hasta pasado este tiempo (evita seguir insistiendo con red)
let _elevenBrokenKey   = null;
let _elevenBrokenUntil = 0;

function _elevenIsBroken(){
  const key = getElevenKey();
  if(!key) return false;                      // sin key: no es "roto", es el estado normal sin ElevenLabs
  if(key !== _elevenBrokenKey) return false;   // la clave cambió desde el último fallo → reintentar
  return Date.now() < _elevenBrokenUntil;
}
function _markElevenBroken(){
  _elevenBrokenKey   = getElevenKey();
  _elevenBrokenUntil = Date.now() + ELEVEN_COOLDOWN_MS;
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

async function _elevenFetchBlob(text, voice, charKey){
  return _elevenEnqueue(async () => {
    const resolveKey = charKey || voice.name || voice.voiceId;
    const voiceId = await _resolveVoiceId(resolveKey, voice);
    let r = await _elevenRequest(text, voice, voiceId, getElevenKey());
    if(r.ok) return await r.blob();

    // Si da 404, la voz asignada tampoco existe (o cambió) — invalidamos la
    // caché y forzamos una re-resolución fresca antes de rendirnos.
    if(r.status === 404){
      const r2id = await _resolveVoiceId(resolveKey, voice, true);
      if(r2id !== voiceId){
        const r2 = await _elevenRequest(text, voice, r2id, getElevenKey());
        if(r2.ok) return await r2.blob();
        await _reportFailure(r2, r2id);
        _markElevenBroken();
        return null;
      }
    }
    await _reportFailure(r, voiceId);
    _markElevenBroken();
    return null;
  });
}

async function _elevenSpeak(text, voice, onend, charKey){
  if(typeof hasManagedAi==='function' && hasManagedAi()){
    try{ return await _elevenPlayBlob(await managedTTS(text,charKey||'narrator'),onend); }
    catch(e){
      _warnElevenFailure('managed voice service unavailable');
      if(!getElevenKey()) return false;
      // Sigue abajo e intenta con la clave personal como respaldo.
    }
  }
  const key = getElevenKey();
  if(!key || !text) return false; // sin key configurada: fallback silencioso, es lo esperado
  if(_elevenIsBroken()) return false; // ya sabemos que está caído — directo al fallback, sin red
  try{
    const blob = await _elevenFetchBlob(text, voice, charKey);
    if(!blob) return false;
    // OJO: "return await", no "return" a secas — si _elevenPlayBlob
    // rechazara (ya no debería, ver su propio try/catch), un "return"
    // sin await haría que ESTE catch nunca lo viera (el try ya habría
    // terminado), dejando la promesa resultante rechazada sin manejar.
    return await _elevenPlayBlob(blob, onend);
  } catch(e){
    _warnElevenFailure(e && e.message ? e.message : e);
    _markElevenBroken();
    return false;
  }
}

// Pide el audio de un tramo de texto SIN reproducirlo — para poder
// PRECARGAR varios tramos en paralelo (ver speakMixedLanguageText en
// js/audio.js) y luego reproducirlos uno tras otro sin la pausa de red
// entre cada uno, que es lo que hacía que la voz se sintiera entrecortada
// cuando una respuesta mezclaba varios idiomas. Devuelve un Blob, o null
// si no hay key configurada, ElevenLabs está en cooldown por un fallo
// reciente, o la petición falla (el llamador debe usar el fallback nativo
// para ESE tramo en concreto, sin afectar a los demás).
async function ttsFetchAudioBlob(text, voice, charKey){
  if(typeof hasManagedAi==='function' && hasManagedAi()){
    try{ return await managedTTS(text, charKey||'narrator'); }
    catch(e){ if(!getElevenKey()) return null; }
  }
  if(!getElevenKey() || !text) return null;
  if(_elevenIsBroken()) return null; // circuito abierto: ni lo intentamos, directo al fallback
  try{
    const blob = await _elevenFetchBlob(text, voice, charKey);
    if(!blob) return null;
    return blob;
  }
  catch(e){ _markElevenBroken(); return null; }
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
    signal: AbortSignal.timeout(12000), // texto completo en una sola petición: necesita más margen que un tramo corto
  });
}

async function _elevenPlayBlob(blob, onend){
  const url  = URL.createObjectURL(blob);
  if(_ttsAudioEl){ try{ _ttsAudioEl.pause(); }catch(e){} }
  const audioEl = new Audio(url);
  _ttsAudioEl = audioEl;
  let done = false;
  const cleanup = () => { if(done) return; done = true; URL.revokeObjectURL(url); if(onend) onend(); };
  audioEl.onended = cleanup;
  audioEl.onerror  = cleanup;
  try{
    await audioEl.play();
    return true;
  } catch(e){
    // audioEl.play() puede RECHAZAR (política de autoplay del navegador,
    // códec no soportado, etc.) — antes esto se perdía como una promesa
    // rechazada sin manejar y dejaba colgada la secuencia de voz entera
    // (el `onend`/`resolve` de quien llamó nunca se ejecutaba). Ahora
    // SIEMPRE se limpia y se avisa, para que quien llamó pueda seguir
    // (probar el fallback nativo, o continuar con el siguiente tramo).
    _warnElevenFailure('audioEl.play() rechazado: ' + (e && e.message ? e.message : e));
    cleanup();
    return false;
  }
}

async function _reportFailure(r, voiceId){
  // Sí había key configurada pero la petición falló: esto es lo que hace
  // que "las voces no cambien" (cae siempre a la voz nativa del navegador,
  // que es la misma para todos los personajes). Lo hacemos visible en vez
  // de fallar en silencio, para poder diagnosticar (401 = key inválida,
  // 404 = voice_id no existe en esta cuenta, 429 = sin cuota, etc.)
  let bodyText = '';
  try{ bodyText = await r.text(); }catch(e){}
  const isPermission = /permission/i.test(bodyText) || r.status===403;
  _warnElevenFailure(`HTTP ${r.status} (voiceId: ${voiceId}) — ${bodyText.slice(0,300)}`, isPermission);
}

/* ── Validación real de la clave (al guardarla en Ajustes) ─────────────
   La causa MÁS común de que "la voz no funcione" sin que el usuario
   entienda por qué: al crear la clave en ElevenLabs, hay que activar
   manualmente el permiso "Text to Speech" → Access (ver el diálogo
   "Create API Key" del propio ElevenLabs) — si se deja en "No Access", la
   clave es válida pero cualquier síntesis de voz falla. Como esto ocurre
   en un diálogo de ElevenLabs fuera de esta app, no se puede activar por
   ella — pero SÍ se puede detectar al instante, en vez de que el usuario
   lo descubra a mitad de una conversación. Se hace una síntesis mínima
   real ("Hola", coste de cuota insignificante) justo al guardar la clave,
   y si falla específicamente por falta de permiso, se avisa con el paso
   exacto que falta por hacer en la web de ElevenLabs. */
async function validateElevenKey(key){
  if(!key) return {ok:false, reason:'empty'};
  try{
    const cv = (typeof CHAR_VOICE!=='undefined' && (CHAR_VOICE.dragon || Object.values(CHAR_VOICE)[0])) || {stability:.5,style:.4,speed:1,voiceId:null};
    const voiceId = (await _resolveVoiceId('dragon', cv).catch(()=>null)) || cv.voiceId;
    if(!voiceId) return {ok:false, reason:'no-voice'};
    const resp = await fetch(`${ELEVEN_API_URL}/${voiceId}`, {
      method:'POST',
      headers:{'Content-Type':'application/json','xi-api-key':key,'Accept':'audio/mpeg'},
      body: JSON.stringify({
        text:'Hola',
        model_id: ELEVEN_MODEL,
        voice_settings:{stability:cv.stability, similarity_boost:0.8, style:cv.style, use_speaker_boost:true, speed:cv.speed},
      }),
      signal: AbortSignal.timeout(10000),
    });
    if(resp.ok){
      // Si había quedado marcada como "rota" de un intento anterior, se
      // limpia — la clave ya funciona, no hay razón para seguir evitándola.
      _elevenBrokenKey = null; _elevenBrokenUntil = 0;
      return {ok:true};
    }
    const bodyText = await resp.text().catch(()=>'');
    const isPermission = /permission/i.test(bodyText) || resp.status===403;
    const isQuota = /quota|credit/i.test(bodyText) || resp.status===429;
    return {ok:false, status:resp.status, isPermission, isQuota, bodyText: bodyText.slice(0,300)};
  } catch(e){
    return {ok:false, reason:'network', error: e && e.message};
  }
}

/* ── Fallback: síntesis nativa del navegador (Web Speech API) ────────── */
function _webSpeechSpeak(text, langTag, rate, pitch, onend){
  if(!('speechSynthesis' in window)){ if(onend) onend(); return false; }
  let done = false;
  const finish = () => { if(done) return; done = true; if(onend) onend(); };
  try{
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
    utt.onend = utt.onerror = finish;
    window.speechSynthesis.speak(utt);
    // Red de seguridad: en algunos navegadores/WebViews, speechSynthesis
    // puede quedarse "atascado" sin disparar onend/onerror nunca (bug
    // conocido, sobre todo tras cambiar de pestaña). Sin esto, una
    // secuencia de voz con varios tramos podía colgarse para siempre
    // esperando un evento que no llega.
    const estMs = Math.min(15000, Math.max(2500, text.length*90));
    setTimeout(finish, estMs);
    return true;
  } catch(e){
    finish();
    return false;
  }
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
  // Invalida cualquier secuencia de tramos por idioma en curso (ver
  // js/audio.js → _speakSegmentsSequentially) para que, si se para la voz
  // a mitad de una respuesta mezclada, NO siga hablando el siguiente
  // tramo por su cuenta — sea cual sea el sitio desde el que se llamó a
  // ttsStopAll() (hay varios en toda la app).
  if(typeof _activeSpeechToken !== 'undefined') _activeSpeechToken++;
}
