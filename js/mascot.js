/* ═══════════════════════════════════════
   mascot.js — Mascota IA del chat
   Controla el video (idle/laugh/speak) y la burbuja de texto que
   sale de la boca del personaje, dando la sensación de que la
   mascota habla directamente con el usuario (no un chat clásico).
   Dependencias: state.js, characters.js
   Usado por: chat.js, auth.js

   Solo Drakón tiene su propio set de video mp4 (idle/speak/laugh) en
   assets/characters/animations/ia/drakon/. El resto de personajes usan
   sus propias animaciones (assets/characters/faces/*), nunca las de Drakón.
═══════════════════════════════════════ */

const MASCOT_ANIM_BASE = 'assets/characters/animations/ia';
// Mapa charId -> carpeta de video dedicada (idle.mp4 / speak.mp4 / laugh.mp4).
// Si un personaje no aparece aquí, se usan sus propias animaciones (anim/speak)
// definidas en CHARS (js/data.js) — nunca las de Drakón.
const MASCOT_VIDEO_FOLDER = { dragon: 'drakon' };

const MASCOT_SWAP_MS = 180;     // duración del crossfade al cambiar de pose
const MASCOT_ERROR_HOLD_MS = 1400; // cuánto se queda riendo antes de pasar a hablar
const MASCOT_MIN_SPEAK_MS = 1800;
const MASCOT_MAX_SPEAK_MS = 6500;

let _mascotState = 'idle';      // 'idle' | 'laugh' | 'speak'
let _mascotSpeakTimer = null;
let _mascotErrorTimer = null;

// Devuelve {idle, speak, laugh} con las rutas de video para el personaje activo.
function _mascotAssets(){
  const id = (typeof state !== 'undefined' && state.charId) || 'dragon';
  const folder = MASCOT_VIDEO_FOLDER[id];
  if(folder){
    return {
      idle:  `${MASCOT_ANIM_BASE}/${folder}/idle.mp4`,
      speak: `${MASCOT_ANIM_BASE}/${folder}/speak.mp4`,
      laugh: `${MASCOT_ANIM_BASE}/${folder}/laugh.mp4`,
    };
  }
  // Personajes sin set dedicado: usan sus propias animaciones (nunca las de Drakón).
  const ch = (typeof getChar==='function') ? getChar() : null;
  const idle = ch?.anim || ch?.img || '';
  const speak = ch?.speak || idle;
  return { idle, speak, laugh: speak };
}

function _mascotVideos(){ return document.querySelectorAll('.mascot-video'); }
function _mascotStages(){ return document.querySelectorAll('.ai-scene'); }
function _mascotBubbleTexts(){ return document.querySelectorAll('.ai-scene-bubble-text'); }
function _mascotBubbles(){ return document.querySelectorAll('.ai-scene-bubble'); }

const MASCOT_STATUS_TEXT = {
  idle:  '',
  laugh: '😄 Detecté un error…',
  speak: '💬 Hablando…',
};

function _mascotApplyState(newState){
  const assets = _mascotAssets();
  const src = assets[newState] || assets.idle;

  _mascotStages().forEach(el=>{
    el.classList.remove('is-idle','is-laugh','is-speak');
    el.classList.add('is-swapping');
  });

  setTimeout(()=>{
    _mascotVideos().forEach(video=>{
      if(!src) return;
      const abs = new URL(src, window.location.href).href;
      if(video.currentSrc !== abs && video.getAttribute('src') !== src){
        video.src = src;
      }
      const p = video.play();
      if(p && p.catch) p.catch(()=>{});
    });
    _mascotStages().forEach(el=>{
      el.classList.remove('is-swapping');
      el.classList.add('is-'+newState);
    });
  }, MASCOT_SWAP_MS);

  document.querySelectorAll('.mascot-status').forEach(el=>{
    const txt = MASCOT_STATUS_TEXT[newState] || '';
    el.textContent = txt;
    el.style.opacity = txt ? '1' : '0';
  });

  _mascotState = newState;
}

/* ── API pública ──────────────────────────── */

// Estado base: siempre vuelve aquí cuando ninguna acción está en curso
function mascotIdle(){
  clearTimeout(_mascotSpeakTimer);
  clearTimeout(_mascotErrorTimer);
  _mascotSpeakTimer = null;
  _mascotErrorTimer = null;
  _mascotApplyState('idle');
}

// El personaje está hablando (idle → speak). Vuelve solo a idle al terminar.
function mascotSpeak(durationMs){
  clearTimeout(_mascotErrorTimer);
  _mascotApplyState('speak');
  clearTimeout(_mascotSpeakTimer);
  const ms = Math.max(MASCOT_MIN_SPEAK_MS, Math.min(MASCOT_MAX_SPEAK_MS, durationMs || 3200));
  _mascotSpeakTimer = setTimeout(()=>{ mascotIdle(); }, ms);
}

// El usuario cometió un error (idle → laugh). Tras un instante pasa a hablar
// la corrección (laugh → speak) y finalmente vuelve a idle.
function mascotError(nextSpeakMs){
  clearTimeout(_mascotSpeakTimer);
  clearTimeout(_mascotErrorTimer);
  _mascotApplyState('laugh');
  _mascotErrorTimer = setTimeout(()=>{
    mascotSpeak(nextSpeakMs);
  }, MASCOT_ERROR_HOLD_MS);
}

// Punto de entrada usado por el chat: decide idle/laugh según el contenido
// del mensaje de la IA y calcula cuánto debe "hablar" según su longitud.
function mascotReactToMessage(text){
  const clean = (text || '').replace(/\[\/?(L)\]/g,'');
  const speakMs = Math.min(MASCOT_MAX_SPEAK_MS, Math.max(MASCOT_MIN_SPEAK_MS, clean.length * 38));
  const hadError = clean.includes('✏️');
  if(hadError){
    mascotError(speakMs);
  } else {
    mascotSpeak(speakMs);
  }
}

// Se llama al abrir/relanzar la pantalla de chat para dejar la mascota en su
// pose base antes de cualquier interacción, y vacía la burbuja de la boca.
function mascotReset(){
  clearTimeout(_mascotSpeakTimer);
  clearTimeout(_mascotErrorTimer);
  _mascotState = 'idle';
  const assets = _mascotAssets();
  _mascotStages().forEach(el=>{
    el.classList.remove('is-laugh','is-speak','is-swapping');
    el.classList.add('is-idle');
  });
  _mascotVideos().forEach(video=>{
    if(assets.idle) video.src = assets.idle;
    const p = video.play();
    if(p && p.catch) p.catch(()=>{});
  });
  document.querySelectorAll('.mascot-status').forEach(el=>{ el.textContent=''; el.style.opacity='0'; });
  mascotClearBubble();
}

/* ── Burbuja de texto que sale de la boca del personaje ──────────── */

// Muestra los tres puntos de "escribiendo…" dentro de la burbuja.
function mascotSetBubbleTyping(on){
  _mascotBubbles().forEach(b=>b.classList.toggle('is-typing', !!on));
  if(on){
    _mascotBubbleTexts().forEach(t=>{
      t.innerHTML = '<span class="bubble-dots"><span></span><span></span><span></span></span>';
    });
  }
}

// Vuelca el HTML (ya formateado) del último mensaje de la IA en la burbuja
// y dispara la animación de entrada.
function mascotSetBubbleHTML(html){
  _mascotBubbles().forEach(b=>b.classList.remove('is-typing'));
  _mascotBubbleTexts().forEach(t=>{ t.innerHTML = html; });
  _mascotBubbles().forEach(b=>{
    b.classList.remove('bubble-pop');
    void b.offsetWidth; // reinicia la animación
    b.classList.add('bubble-pop');
  });
}

function mascotClearBubble(){
  _mascotBubbles().forEach(b=>b.classList.remove('is-typing','bubble-pop'));
  _mascotBubbleTexts().forEach(t=>{ t.innerHTML=''; });
}

document.addEventListener('DOMContentLoaded', mascotReset);
