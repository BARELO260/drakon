// Pruebas de las Cloud Functions con dependencias simuladas (sin red ni emulador).
// Uso: node functions.test.js   (usa ../../../functions/index.js)
const Module=require('module'),path=require('path');
const FN=path.resolve(__dirname,'../../../functions/index.js');
class HttpsError extends Error{constructor(code,msg){super(msg);this.code=code}}
const db=new Map();           // ruta → datos
const key=(c,d)=>c+'/'+d;
const fsStub={getFirestore:()=>({
  collection:c=>({doc:d=>({
    get:async()=>({data:()=>db.has(key(c,d))?JSON.parse(JSON.stringify(db.get(key(c,d)))):undefined}),
    set:async(v,o)=>{const k=key(c,d);db.set(k,o&&o.merge?Object.assign({},db.get(k)||{},v):v)},
    delete:async()=>{db.delete(key(c,d))},
    __c:c,__d:d}),
    where:(f,op,val)=>({get:async()=>({docs:[...db.entries()].filter(([k,v])=>k.startsWith(c+'/')&&v&&v[f]===val).map(([k])=>({id:k.slice(c.length+1),ref:{delete:async()=>{db.delete(k)}}}))})})}),
  runTransaction:async fn=>fn({get:async r=>({data:()=>db.has(key(r.__c,r.__d))?db.get(key(r.__c,r.__d)):undefined}),set:(r,v,o)=>{const k=key(r.__c,r.__d);db.set(k,o&&o.merge?Object.assign({},db.get(k)||{},v):v)}})
})};
const PID='drakon_premium_monthly';
const v2=(o={})=>({data:Object.assign({kind:'androidpublisher#subscriptionPurchaseV2',subscriptionState:'SUBSCRIPTION_STATE_ACTIVE',acknowledgementState:'ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED',lineItems:[{productId:PID,expiryTime:new Date(Date.now()+86400000).toISOString()}]},o)});
let playResult=v2();const playCalls={v1get:0,v2get:0,ack:0,lastV2:null};
const stubs={
 'firebase-functions/v2/https':{onCall:(opts,h)=>h,HttpsError},
 'firebase-functions/v2/firestore':{onDocumentUpdated:(p,h)=>h},
 'firebase-functions/v1':{auth:{user:()=>({onDelete:h=>h})}},
 'firebase-functions/params':{defineSecret:n=>({value:()=>n==='PLAY_SERVICE_ACCOUNT_JSON'?'{}':'secret-'+n})},
 'firebase-admin/firestore':fsStub,'firebase-admin/app':{initializeApp(){}},
 'googleapis':{google:{auth:{GoogleAuth:function(){}},androidpublisher:()=>({purchases:{subscriptions:{get:async()=>{playCalls.v1get++;return playResult},acknowledge:async()=>{playCalls.ack++;return {}}},subscriptionsv2:{get:async(a)=>{playCalls.v2get++;playCalls.lastV2=a;return playResult}}}})}}
};
const origLoad=Module._load;
Module._load=function(req,...a){ if(stubs[req])return stubs[req]; return origLoad.call(this,req,...a)};
let externalCalls=[];
global.fetch=async(u)=>{externalCalls.push(u);return {ok:true,json:async()=>({choices:[{message:{content:'hola'}}]}),arrayBuffer:async()=>new ArrayBuffer(4)}};
const F=require(FN);
let pass=0,fail=0;const ok=(c,m)=>{if(c){pass++;console.log('  ✓',m)}else{fail++;console.log('  ✗ FALLA:',m)}};
const call=async(h,uid,data)=>{try{return {r:await h({auth:uid?{uid}:null,data})}}catch(e){return {err:e.code||e.message}}};
const Y=new Date().getFullYear();const setUser=(uid,p)=>db.set(key('users',uid),p);
const chat=(uid)=>call(F.drakonAi,uid,{action:'chat',messages:[{role:'user',content:'hola'}],localDate:new Date().toISOString().slice(0,10)});
const tts=(uid)=>call(F.drakonAi,uid,{action:'tts',text:'hola',voiceKey:'dragon',localDate:new Date().toISOString().slice(0,10)});
(async()=>{
  console.log('CHAT con IA');
  ok((await chat(null)).err==='unauthenticated','sin sesión → rechazado');
  setUser('sinEdad',{});          ok((await chat('sinEdad')).err==='failed-precondition','sin edad en el perfil → rechazado');
  setUser('nino',{birthYear:Y-10,parentalConsentStatus:'pending'});externalCalls=[];
  ok((await chat('nino')).err==='permission-denied'&&externalCalls.length===0,'menor de 13 sin consentimiento → rechazado y NO se llama a Groq');
  setUser('ninoOk',{birthYear:Y-10,parentalConsentStatus:'approved'});ok(!!(await chat('ninoOk')).r,'menor con consentimiento aprobado por el servidor → permitido');
  setUser('adulto',{birthYear:Y-30});ok((await chat('adulto')).r&&true,'adulto → permitido');
  setUser('tramposo1',{birthYear:'1980'});ok((await chat('tramposo1')).err==='failed-precondition','birthYear como texto → no se acepta como adulto');
  setUser('tramposo2',{birthYear:Y+5});ok((await chat('tramposo2')).err==='failed-precondition','año futuro → no se acepta');
  setUser('tramposo3',{birthYear:1850});ok((await chat('tramposo3')).err==='failed-precondition','año absurdo → no se acepta');
  console.log('VOZ gestionada (ElevenLabs: solo 18+)');
  ok((await tts('sinEdad')).err==='permission-denied','sin edad → rechazado (antes se permitía)');
  setUser('teen',{birthYear:Y-16});externalCalls=[];ok((await tts('teen')).err==='permission-denied'&&externalCalls.length===0,'16 años → rechazado y NO se llama a ElevenLabs');
  ok((await tts('ninoOk')).err==='permission-denied','menor aunque tenga consentimiento → rechazado');
  ok(!!(await tts('adulto')).r,'adulto → permitido');
  console.log('COMPRAS de Google Play');
  const buy=(uid,tok)=>call(F.verifyPlayPurchase,uid,{purchaseToken:tok||'tok-A',productId:'drakon_premium_monthly'});
  ok((await buy('nino')).err==='permission-denied','menor de 13 → no puede verificar compras');
  const r1=await buy('adulto','tok-A');ok(r1.r&&r1.r.isPremium===true&&db.get('users/adulto').isPremium===true,'adulto: Premium activado');
  setUser('otro',{birthYear:Y-40});const r2=await buy('otro','tok-A');
  ok(r2.err==='already-exists'&&!db.get('users/otro').isPremium,'la misma suscripción NO activa Premium en otra cuenta');
  const r3=await buy('adulto','tok-A');ok(!!r3.r,'la misma cuenta puede volver a verificar su compra (restaurar)');
  playResult=v2({lineItems:[{productId:PID,expiryTime:new Date(Date.now()-1000).toISOString()}]});setUser('x',{birthYear:Y-40});
  ok((await buy('x','tok-B')).err==='failed-precondition','suscripción vencida → rechazada');
  ok((await call(F.verifyPlayPurchase,'adulto',{purchaseToken:'t',productId:'otro_producto'})).err==='invalid-argument','producto desconocido → rechazado');
  console.log('COMPRAS — API v2 (subscriptionsv2)');
  ok(playCalls.v2get>0&&playCalls.v1get===0,'usa purchases.subscriptionsv2.get y NO la v1 obsoleta');
  ok(playCalls.lastV2&&playCalls.lastV2.packageName==='com.drakon.app'&&typeof playCalls.lastV2.token==='string'&&!('subscriptionId' in playCalls.lastV2),'la consulta lleva paquete y token (la v2 no necesita subscriptionId)');
  const exp=(ms)=>new Date(Date.now()+ms).toISOString();
  const tryState=async(uid,tok,over)=>{setUser(uid,{birthYear:Y-40});playResult=v2(over);return buy(uid,tok)};
  ok(!!(await tryState('s1','t-s1',{subscriptionState:'SUBSCRIPTION_STATE_CANCELED'})).r,'cancelada pero aún dentro del periodo pagado → Premium');
  ok(!!(await tryState('s2','t-s2',{subscriptionState:'SUBSCRIPTION_STATE_IN_GRACE_PERIOD'})).r,'periodo de gracia → Premium');
  for(const st of ['SUBSCRIPTION_STATE_ON_HOLD','SUBSCRIPTION_STATE_PAUSED','SUBSCRIPTION_STATE_EXPIRED','SUBSCRIPTION_STATE_PENDING']){
    const r=await tryState('n'+st,'t-'+st,{subscriptionState:st});
    ok(r.err==='failed-precondition'&&!db.get('users/n'+st).isPremium,st+' → NO es Premium');
  }
  ok((await tryState('p1','t-p1',{lineItems:[{productId:'otro_producto',expiryTime:exp(86400000)}]})).err==='invalid-argument','el token es de otro producto → rechazado');
  ok((await tryState('p2','t-p2',{lineItems:[{productId:PID}]})).err==='failed-precondition','sin fecha de vencimiento → rechazado');
  ok((await tryState('p3','t-p3',{lineItems:[{productId:PID,expiryTime:'no-es-una-fecha'}]})).err==='failed-precondition','fecha ilegible → rechazado');
  ok((await tryState('p4','t-p4',{lineItems:[]})).err==='invalid-argument','sin líneas de suscripción → rechazado');
  playCalls.ack=0;await tryState('a1','t-a1',{acknowledgementState:'ACKNOWLEDGEMENT_STATE_PENDING'});
  ok(playCalls.ack===1,'compra pendiente de confirmar → se confirma ante Google Play');
  playCalls.ack=0;await tryState('a2','t-a2',{acknowledgementState:'ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED'});
  ok(playCalls.ack===0,'compra ya confirmada → no se vuelve a confirmar');
  const prem=db.get('users/s1');ok(prem.premiumExpiresAt>Date.now()&&prem.premiumProductId===PID,'premiumExpiresAt sale de lineItems[].expiryTime (milisegundos)');
  console.log('CHAT DE IA — modelos de Groq vigentes (llama-3.3-70b-versatile fue retirado el 16/08/2026)');
  const realFetch=global.fetch;const bodies=[];
  setUser('ai1',{birthYear:Y-30});
  global.fetch=async(u,o)=>{bodies.push(JSON.parse(o.body));return {ok:true,status:200,json:async()=>({choices:[{message:{content:'respuesta'}}]})}};
  let r=await chat('ai1');
  ok(bodies.length===1&&bodies[0].model==='openai/gpt-oss-120b','usa openai/gpt-oss-120b como primer modelo ('+(bodies[0]&&bodies[0].model)+')');
  ok(bodies.every(b=>!/llama-3\.3-70b-versatile/.test(b.model)),'no usa el modelo retirado');
  ok(bodies[0].reasoning_effort==='low'&&bodies[0].max_tokens===900,'reasoning_effort=low y max_tokens=900 (como el cliente)');
  bodies.length=0;let n=0;
  global.fetch=async(u,o)=>{const b=JSON.parse(o.body);bodies.push(b);n++;return n===1?{ok:false,status:400,json:async()=>({error:{code:'model_decommissioned'}})}:{ok:true,status:200,json:async()=>({choices:[{message:{content:'desde el respaldo'}}]})}};
  r=await chat('ai1');
  ok(bodies.length===2&&bodies[1].model==='qwen/qwen3.6-27b'&&r.r&&r.r.text==='desde el respaldo','si el 1.º modelo falla, prueba el siguiente y responde ('+bodies.map(b=>b.model)+')');
  bodies.length=0;global.fetch=async(u,o)=>{bodies.push(JSON.parse(o.body));return {ok:false,status:503,json:async()=>({})}};
  const before=db.get('aiRateLimits/ai1_chat')&&db.get('aiRateLimits/ai1_chat').dailyCount;r=await chat('ai1');
  ok(r.err==='internal'&&bodies.length===3,'si fallan los 3 modelos devuelve error «internal» tras probar los 3');
  ok(db.get('aiRateLimits/ai1_chat').dailyCount===before,'y se devuelve el mensaje del cupo diario');
  bodies.length=0;global.fetch=async(u,o)=>{bodies.push(JSON.parse(o.body));return {ok:true,status:200,json:async()=>({choices:[{message:{content:'   '}}]})}};
  r=await chat('ai1');ok(r.err==='internal'&&bodies.length===3,'una respuesta vacía también cuenta como fallo y prueba el siguiente modelo');
  global.fetch=realFetch;
  console.log('BORRADO DE CUENTA — limpieza en el servidor');
  setUser('del',{birthYear:Y-30});db.set('parentalConsentRequests/del',{status:'pending'});db.set('aiRateLimits/del_chat',{dailyCount:3});db.set('aiRateLimits/del_tts',{dailyCount:1});
  db.set('playPurchaseTokens/h1',{uid:'del'});db.set('playPurchaseTokens/h2',{uid:'del'});db.set('playPurchaseTokens/h3',{uid:'otraPersona'});db.set('users/otraPersona',{birthYear:Y-30});
  await F.onAccountDeleted({uid:'del'});
  ok(!db.has('users/del')&&!db.has('parentalConsentRequests/del')&&!db.has('aiRateLimits/del_chat')&&!db.has('aiRateLimits/del_tts'),'se borran perfil, consentimiento y contadores de IA de esa cuenta');
  ok(!db.has('playPurchaseTokens/h1')&&!db.has('playPurchaseTokens/h2'),'se borran los vínculos de compra de esa cuenta');
  ok(db.has('playPurchaseTokens/h3')&&db.has('users/otraPersona'),'NO se toca nada de otras cuentas');
  let again='ok';try{await F.onAccountDeleted({uid:'del'})}catch(e){again=e.message}ok(again==='ok','es idempotente (ejecutarlo dos veces no falla)');
  let none='ok';try{await F.onAccountDeleted({})}catch(e){none=e.message}ok(none==='ok','sin uid no hace nada');
  console.log('\nRESULTADO: '+pass+' correctas, '+fail+' fallos');process.exit(fail?1:0);
})();
