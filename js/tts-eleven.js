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
const NARRATOR_VOICE = { voiceId:'21m00Tcm4TlvDq8ikWAM', stability:0.55, style:0.25, speed:1.0 };

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
async function _elevenSpeak(text, voice, onend){
  const key = getElevenKey();
  if(!key || !text) return false;
  try{
    const r = await fetch(`${ELEVEN_API_URL}/${voice.voiceId}`, {
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
    if(!r.ok) return false; // key inválida, sin cuota, voice_id inexistente, etc.

    const blob = await r.blob();
    const url  = URL.createObjectURL(blob);
    if(_ttsAudioEl){ try{ _ttsAudioEl.pause(); }catch(e){} }
    const audioEl = new Audio(url);
    _ttsAudioEl = audioEl;
    const cleanup = () => { URL.revokeObjectURL(url); if(onend) onend(); };
    audioEl.onended = cleanup;
    audioEl.onerror  = cleanup;
    await audioEl.play();
    return true;
  } catch(e){
    return false;
  }
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
   `voice` es una entrada de CHAR_VOICE (js/audio.js): {voiceId, stability,
   style, speed, gender}. `langTag` se usa solo si hace falta el fallback. */
function ttsSpeakChar(text, voice, langTag, onend){
  _elevenSpeak(text, voice, onend).then(ok=>{
    if(!ok) _webSpeechSpeak(text, langTag, voice.speed*0.95, voice.gender==='M'?0.85:1.12, onend);
  });
}

/* ── API pública: hablar una frase suelta (ejercicios de Escuchar) ─────
   `rate` es la velocidad deseada (0.7–1.2 aprox, viene de la dificultad). */
function ttsSpeakPhrase(text, langTag, rate, onend){
  const voice = Object.assign({}, NARRATOR_VOICE, { speed: rate || NARRATOR_VOICE.speed });
  _elevenSpeak(text, voice, onend).then(ok=>{
    if(!ok) _webSpeechSpeak(text, langTag, rate || 0.9, 1, onend);
  });
}

/* ── Detiene cualquier audio en curso (ElevenLabs o nativo) ───────────── */
function ttsStopAll(){
  if(_ttsAudioEl){ try{ _ttsAudioEl.pause(); }catch(e){} _ttsAudioEl = null; }
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
}
