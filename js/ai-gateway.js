/* Managed AI client. With a gateway URL configured, learners never need API keys. */
const DRAKON_AI_GATEWAY = window.DRAKON_AI_GATEWAY || 'https://us-central1-drakon-a30c8.cloudfunctions.net/drakonAi';

function hasManagedAi(){ return Boolean(DRAKON_AI_GATEWAY && window._fbAuth?.currentUser); }

function renderAiServiceStatus(){
  const managed=hasManagedAi();
  document.querySelectorAll('[data-byok]').forEach(el=>el.style.display=managed?'none':'');
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
