/* Drakón managed AI gateway.
   Secrets never leave this service: configure them with Firebase Secret Manager. */
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const { getFirestore } = require('firebase-admin/firestore');
const { initializeApp } = require('firebase-admin/app');

initializeApp();

const GROQ_API_KEY = defineSecret('GROQ_API_KEY');
const ELEVENLABS_API_KEY = defineSecret('ELEVENLABS_API_KEY');
const VOICES = {
  dragon:'ErXwobaYiN019PkySvjV', wizard:'VR6AewLTigWG4xSOukaG', fox:'TxGEqnHWrfWFTfGW9XjX',
  robot:'pNInz6obpgDQGcFmaJgB', alien:'onwK4e9ZLuTAKqWW03F9', phoenix:'yoZ06aMxZJJ28mfd3POQ',
  ninja:'TxGEqnHWrfWFTfGW9XjX', panda:'XB0fDUnXU5powFXDhCwa', triton:'N2lVS1w4EtoT3dr4eOWO',
  axonic:'IKne3meq5aSn9XLyUdCD', narrator:'21m00Tcm4TlvDq8ikWAM'
};

function validateText(value, max, label){
  if(typeof value !== 'string' || !value.trim()) throw new HttpsError('invalid-argument', `${label} is required.`);
  if(value.length > max) throw new HttpsError('invalid-argument', `${label} is too long.`);
  return value.trim();
}

async function limit(uid, action){
  const ref=getFirestore().collection('aiRateLimits').doc(`${uid}_${action}`);
  const now=Date.now(), windowMs=60_000, max=action==='tts'?24:12;
  await getFirestore().runTransaction(async tx=>{
    const old=(await tx.get(ref)).data()||{};
    const started=old.startedAt&&now-old.startedAt<windowMs ? old.startedAt : now;
    const count=started===old.startedAt ? (old.count||0)+1 : 1;
    if(count>max) throw new HttpsError('resource-exhausted','Too many requests. Please wait a minute.');
    tx.set(ref,{startedAt:started,count,updatedAt:now},{merge:true});
  });
}

exports.drakonAi = onCall({ region:'us-central1', timeoutSeconds:30, secrets:[GROQ_API_KEY,ELEVENLABS_API_KEY], enforceAppCheck:false }, async request=>{
  if(!request.auth) throw new HttpsError('unauthenticated','Sign in to use Drakón AI.');
  const data=request.data||{};
  const action=data.action;
  if(action==='chat'){
    await limit(request.auth.uid,'chat');
    const incoming=Array.isArray(data.messages)?data.messages.slice(-18):[];
    if(!incoming.length) throw new HttpsError('invalid-argument','messages are required.');
    const messages=incoming.map(m=>({
      role:['system','user','assistant'].includes(m.role)?m.role:'user',
      content:validateText(m.content,4000,'message')
    }));
    const resp=await fetch('https://api.groq.com/openai/v1/chat/completions',{
      method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ_API_KEY.value()}`},
      body:JSON.stringify({model:'llama-3.3-70b-versatile',messages,max_tokens:900,temperature:0.7})
    });
    if(!resp.ok) throw new HttpsError('internal','The tutor is temporarily unavailable.');
    const json=await resp.json(); const text=json?.choices?.[0]?.message?.content?.trim();
    if(!text) throw new HttpsError('internal','The tutor returned an empty response.');
    return {text};
  }
  if(action==='tts'){
    await limit(request.auth.uid,'tts');
    const text=validateText(data.text,900,'text');
    const voiceId=VOICES[data.voiceKey]||VOICES.narrator;
    const resp=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,{
      method:'POST',headers:{'Content-Type':'application/json','xi-api-key':ELEVENLABS_API_KEY.value(),'Accept':'audio/mpeg'},
      body:JSON.stringify({text,model_id:'eleven_multilingual_v2',voice_settings:{stability:.55,similarity_boost:.8,style:.25,use_speaker_boost:true}})
    });
    if(!resp.ok) throw new HttpsError('internal','Voice generation is temporarily unavailable.');
    const audio=Buffer.from(await resp.arrayBuffer()).toString('base64');
    return {audioBase64:audio,contentType:'audio/mpeg'};
  }
  throw new HttpsError('invalid-argument','Unknown action.');
});
