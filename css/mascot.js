/* ═══════════════════════════════════════
   mascot.js — Mascota IA del chat (Drakón)
   Controla las animaciones idle/laugh/speak que hacen sentir
   que la mascota está hablando directamente con el usuario.
   Dependencias: state.js, characters.js
   Usado por: chat.js, auth.js
═══════════════════════════════════════ */

const MASCOT_ANIM_BASE = 'assets/characters/animations/ia';
// Personaje que sirve de mascota anfitriona del chat por defecto.
// Hoy solo Drakón tiene set de animaciones idle/laugh/speak; si en el
// futuro se añaden más personajes en assets/characters/animations/ia/<id>/
// basta con agregarlos aquí para que se usen automáticamente.
const MASCOT_DEFAULT_CHAR = 'dragon';
const MASCOT_ANIMATED_CHARS = ['dragon'];

const MASCOT_SWAP_MS = 180;     // duración del crossfade al cambiar de pose
const MASCOT_ERROR_HOLD_MS = 1400; // cuánto se queda riendo antes de pasar a hablar
const MASCOT_MIN_SPEAK_MS = 1800;
const MASCOT_MAX_SPEAK_MS = 6500;

let _mascotState = 'idle';      // 'idle' | 'laugh' | 'speak'
let _mascotSpeakTimer = null;
let _mascotErrorTimer = null;

function _mascotCharFolder(){
  const id = (typeof state !== 'undefined' && state.charId) || MASCOT_DEFAULT_CHAR;
  return MASCOT_ANIMATED_CHARS.includes(id) ? id : MASCOT_DEFAULT_CHAR;
}

function _mascotSrc(anim){
  return `${MASCOT_ANIM_BASE}/${_mascotCharFolder()}/${anim}.svg`;
}

function _mascotStages(){ return document.querySelectorAll('.mascot-stage'); }
function _mascotImgs(){ return document.querySelectorAll('.mascot-img'); }

const MASCOT_STATUS_TEXT = {
  idle:  '',
  laugh: '😄 Detecté un error…',
  speak: '💬 Hablando…',
};

function _mascotApplyState(newState){
  _mascotStages().forEach(el=>{
    el.classList.remove('is-idle','is-laugh','is-speak','is-swapping');
  });
  const src = _mascotSrc(newState);
  // Fundido suave: baja opacidad, cambia el src, sube opacidad con la nueva pose
  _mascotStages().forEach(el=>el.classList.add('is-swapping'));
  setTimeout(()=>{
    _mascotImgs().forEach(img=>{ if(img.getAttribute('src')!==src) img.src = src; });
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

// Punto de entrada usado por el chat: decide sola/laugh según el contenido
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
// pose base antes de cualquier interacción.
function mascotReset(){
  clearTimeout(_mascotSpeakTimer);
  clearTimeout(_mascotErrorTimer);
  _mascotState = 'idle';
  _mascotStages().forEach(el=>{
    el.classList.remove('is-laugh','is-speak','is-swapping');
    el.classList.add('is-idle');
  });
  const src = _mascotSrc('idle');
  _mascotImgs().forEach(img=>{ img.src = src; });
  document.querySelectorAll('.mascot-status').forEach(el=>{ el.textContent=''; el.style.opacity='0'; });
}

document.addEventListener('DOMContentLoaded', mascotReset);
