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
    __c:c,__d:d})}),
  runTransaction:async fn=>fn({get:async r=>({data:()=>db.has(key(r.__c,r.__d))?db.get(key(r.__c,r.__d)):undefined}),set:(r,v,o)=>{const k=key(r.__c,r.__d);db.set(k,o&&o.merge?Object.assign({},db.get(k)||{},v):v)}})
})};
let playResult={data:{expiryTimeMillis:String(Date.now()+86400000),paymentState:1,acknowledgementState:1}};
const stubs={
 'firebase-functions/v2/https':{onCall:(opts,h)=>h,HttpsError},
 'firebase-functions/v2/firestore':{onDocumentUpdated:(p,h)=>h},
 'firebase-functions/params':{defineSecret:n=>({value:()=>n==='PLAY_SERVICE_ACCOUNT_JSON'?'{}':'secret-'+n})},
 'firebase-admin/firestore':fsStub,'firebase-admin/app':{initializeApp(){}},
 'googleapis':{google:{auth:{GoogleAuth:function(){}},androidpublisher:()=>({purchases:{subscriptions:{get:async()=>playResult,acknowledge:async()=>({})}}})}}
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
  playResult={data:{expiryTimeMillis:String(Date.now()-1000),paymentState:1}};setUser('x',{birthYear:Y-40});
  ok((await buy('x','tok-B')).err==='failed-precondition','suscripción vencida → rechazada');
  ok((await call(F.verifyPlayPurchase,'adulto',{purchaseToken:'t',productId:'otro_producto'})).err==='invalid-argument','producto desconocido → rechazado');
  console.log('\nRESULTADO: '+pass+' correctas, '+fail+' fallos');process.exit(fail?1:0);
})();
