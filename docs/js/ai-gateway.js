/* Managed AI client. Provider credentials never reach the browser or APK.
   NOTA: el gateway (Firebase Functions) requiere el plan de pago Blaze. Mientras
   el proyecto siga en el plan gratuito Spark, DRAKON_AI_GATEWAY_ENABLED debe
   quedar en false para que la app use siempre las claves personales (BYOK) y
   nunca intente llamar a una función que no existe. Cuando actives Blaze y
   despliegues drakonAi, pon esto en true. */
const DRAKON_AI_GATEWAY_ENABLED = false;
const DRAKON_AI_GATEWAY = window.DRAKON_AI_GATEWAY || 'https://us-central1-drakon-a30c8.cloudfunctions.net/drakonAi';

function hasManagedAi(){ return Boolean(DRAKON_AI_GATEWAY_ENABLED && DRAKON_AI_GATEWAY && window._fbAuth?.currentUser); }

function renderAiServiceStatus(){
  const managed=hasManagedAi();
  // Los campos de clave personal (BYOK) se quedan siempre visibles: si el
  // gateway gestionado llegara a fallar en tiempo real (o el flag de arriba
  // cambia sin que el backend esté listo), el usuario necesita poder verlos
  // y usarlos como respaldo, no solo cuando managed===false.
  document.querySelectorAll('[data-byok]').forEach(el=>el.style.display='');
  const status=document.getElementById('managedAiStatus');
  if(status) status.style.display=managed?'block':'none';
  const voiceStatus=document.getElementById('managedVoiceStatus');
  if(voiceStatus) voiceStatus.style.display=managed?'block':'none';
}

async function callManagedAi(payload){
  if(!hasManagedAi()) throw new Error('managed-ai-unavailable');
  const token=await window._fbAuth.currentUser.getIdToken();
  const response=await fetch(DRAKON_AI_GATEWAY,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`},body:JSON.stringify({data:payload})});
  const body=await response.json().catch(()=>({}));
  if(!response.ok) throw new Error(body?.error?.message||'managed-ai-error');
  return body.result;
}

async function managedChat(messages){ return (await callManagedAi({action:'chat',messages})).text; }

/* ── Limpieza de artefactos de razonamiento interno ──────────────────
   Algunos modelos "razonadores" (los que usamos vía Groq: gpt-oss-120b,
   gpt-oss-20b y qwen3.6-27b) generan primero un borrador de pensamiento
   interno antes de la respuesta final — normalmente el proveedor lo separa
   en un campo aparte, pero a veces (sobre todo si la petición se corta, o
   con ciertas combinaciones de parámetros) ese pensamiento interno queda
   mezclado dentro del mismo texto de respuesta. Si no se filtra, ese texto
   —que nunca estuvo pensado para el usuario— se muestra en el chat y, peor
   aún, se LEE EN VOZ ALTA, sonando como "palabras o frases incoherentes"
   justo antes del mensaje real. Se llama en CADA sitio donde se recibe
   una respuesta cruda de la IA (auth.js, chat.js, situations.js), antes de
   guardarla, mostrarla o hablarla — así nunca se cuela ni se reenvía de
   vuelta al modelo en el historial (lo que además ahorraría tokens en
   vano en los siguientes turnos). */
function stripAIReasoningArtifacts(text){
  if(!text) return text;
  let out = String(text);
  // 1) Bloques de razonamiento con sus propias etiquetas de apertura/cierre
  //    (formato usado por Qwen3 y similares): se elimina la etiqueta Y todo
  //    su contenido, no solo la etiqueta.
  out = out.replace(/<(think|thinking|reasoning|analysis|scratchpad)>[\s\S]*?<\/\1>/gi, '');
  // 2) Formato "Harmony" de los modelos gpt-oss: canales tipo
  //    <|channel|>analysis<|message|>...<|channel|>final<|message|>respuesta real
  //    Si aparece un canal final, nos quedamos solo con lo que hay después
  //    del ÚLTIMO marcador de mensaje final — el resto es borrador interno.
  if(/<\|channel\|>\s*final\s*<\|message\|>/i.test(out)){
    const parts = out.split(/<\|channel\|>\s*final\s*<\|message\|>/i);
    out = parts[parts.length-1];
  }
  // Cualquier token de control suelto que quedara de ese mismo formato.
  out = out.replace(/<\|[a-z_]+\|>/gi, '');
  return out.trim();
}

const _managedTtsCache=new Map();
async function managedTTS(text,voiceKey){
  const cacheKey=`${voiceKey||'narrator'}:${text}`;
  if(_managedTtsCache.has(cacheKey)) return _managedTtsCache.get(cacheKey).slice(0);
  const out=await callManagedAi({action:'tts',text,voiceKey});
  const binary=atob(out.audioBase64); const bytes=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
  const blob=new Blob([bytes],{type:out.contentType||'audio/mpeg'});
  _managedTtsCache.set(cacheKey,blob);
  if(_managedTtsCache.size>48) _managedTtsCache.delete(_managedTtsCache.keys().next().value);
  return blob.slice(0);
}
