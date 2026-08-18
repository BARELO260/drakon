/* Managed AI client. With a gateway URL configured, learners never need API keys.
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
  // gateway gestionado llegara a fallar en tiempo real, el usuario necesita
  // poder verlos y usarlos como respaldo, no solo cuando managed===false.
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

async function managedTTS(text,voiceKey){
  const out=await callManagedAi({action:'tts',text,voiceKey});
  const binary=atob(out.audioBase64); const bytes=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
  return new Blob([bytes],{type:out.contentType||'audio/mpeg'});
}
