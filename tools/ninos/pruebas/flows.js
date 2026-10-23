const H=require('./harness.js');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let pass=0,fail=0;const ok=(c,m)=>{if(c){pass++;console.log('  ✓',m)}else{fail++;console.log('  ✗ FALLA:',m)}};
const answerYear=async(t,year)=>{const sel=t.w.document.getElementById('ageGateYear');sel.value=String(year);t.w.submitAgeGate();await sleep(300)};
(async()=>{
  const Y=new Date().getFullYear();
  console.log('T1 instalación nueva, sin sesión → verificación de edad primero');
  let t=await H.boot();t.fireAuth(null);await sleep(400);
  ok(t.activeScreen().join()==='screen-age-gate','la primera pantalla es la verificación de edad ('+t.activeScreen()+')');
  ok(!t.w.document.getElementById('screen-login').classList.contains('active'),'el login/registro NO se muestra antes de la edad');

  console.log('T2 niño de 10 años → modo infantil local');
  await answerYear(t,Y-10);
  ok(t.st().isMinor===true&&t.st().ageGateCompleted===true,'se registra como menor de 13');
  ok(!t.activeScreen().includes('screen-login'),'no se le muestra el login ('+t.activeScreen()+')');
  ok(t.w.canCreateAccount()===false&&t.w.isChildLocalMode()===true,'no puede crear cuenta; está en modo infantil local');
  ok(JSON.parse(t.w.localStorage.getItem('drakon_pwa')).isMinor===true,'la edad se guarda solo en localStorage');
  let blocked=0;for(const u of ['https://api.groq.com/openai/v1/chat/completions','https://api.elevenlabs.io/v1/text-to-speech/x']){try{await t.w.fetch(u,{method:'POST'})}catch(e){if(/blocked-minor/.test(e.message))blocked++}}
  ok(blocked===2,'fetch a Groq y ElevenLabs bloqueado');
  let gum='ok';try{await t.w.navigator.mediaDevices.getUserMedia({audio:true})}catch(e){gum=e.name}
  ok(gum==='NotAllowedError'&&t.calls.gum===0,'micrófono/cámara bloqueados (getUserMedia)');
  const purchase=await t.w.eval('DrakonBilling.purchasePremium()');
  ok(purchase.ok===false&&purchase.reason==='minor','compra Premium rechazada');
  t.w.setLoginMode('register');t.w.document.getElementById('loginEmail').value='nino@x.com';t.w.document.getElementById('loginPass').value='123456';
  let su=false;t.w._firebase.signUp=()=>{su=true;return Promise.resolve({})};await t.w.submitLogin();await sleep(100);
  ok(su===false,'registro con correo bloqueado');
  let g=false;t.w._firebase.signInGoogle=()=>{g=true;return Promise.resolve()};await t.w.loginWithGoogle();ok(g===false,'acceso con Google bloqueado');
  await t.w.logOut();await sleep(100);ok(!t.activeScreen().includes('screen-login'),'«cerrar sesión» no lleva al registro');
  // función restringida: no pide correo de tutor, solo informa
  t.w.goTo('screen-parental-consent');t.w.renderParentalConsent();
  const d=t.w.document;
  ok(d.getElementById('parentalConsentForm').style.display==='none'&&d.getElementById('parentalConsentSendBtn').style.display==='none','la pantalla de función restringida NO pide el correo de un tutor');
  ok(/no está disponible/i.test(d.getElementById('parentalConsentTitle').textContent),'muestra «no está disponible»');
  t.w.close();

  console.log('T3 reabrir la app con datos del niño guardados (arranque sin sesión)');
  const saved=JSON.stringify({xp:120,streak:3,totalMessages:0,isMinor:true,ageGateCompleted:true,birthYear:Y-10,parentalConsentStatus:'pending',lessonsCompleted:['a1'],lang:null,nativeLang:'es'});
  t=await H.boot({local:{drakon_pwa:saved}});t.fireAuth(null);await sleep(400);
  ok(t.st().xp===120&&(t.st().lessonsCompleted||[]).length===1,'el progreso local NO se borra al arrancar sin sesión');
  ok(JSON.parse(t.w.localStorage.getItem('drakon_pwa')||'{}').xp===120,'localStorage conserva el progreso');
  ok(!t.activeScreen().includes('screen-login')&&!t.activeScreen().includes('screen-age-gate'),'va a la app sin login ni nueva pregunta de edad ('+t.activeScreen()+')');
  t.w.close();

  console.log('T4 adulto (35 años) → acceso normal');
  t=await H.boot();t.fireAuth(null);await sleep(300);await answerYear(t,Y-35);
  ok(t.activeScreen().join()==='screen-login','tras la edad ve la pantalla de acceso ('+t.activeScreen()+')');
  ok(t.w.canCreateAccount()===true&&t.st().isMinor===false,'puede crear cuenta');
  t.calls.fetch.length=0;await t.w.fetch('https://api.groq.com/x',{});ok(t.calls.fetch.includes('https://api.groq.com/x'),'el adulto no tiene la red bloqueada');
  let sup=false;t.w._firebase.signUp=()=>{sup=true;return Promise.resolve({})};t.w.setLoginMode('register');
  t.w.document.getElementById('loginEmail').value='a@b.com';t.w.document.getElementById('loginPass').value='123456';await t.w.submitLogin();ok(sup===true,'el adulto sí puede registrarse');

  console.log('T5 adulto inicia y cierra sesión (dispositivo compartido)');
  t.w._firebase.loadData=()=>Promise.resolve(null);t.w._firebase.saveData=()=>{};
  t.fireAuth({uid:'u1',email:'a@b.com'});await sleep(800);
  ok(!t.activeScreen().includes('screen-age-gate'),'con sesión y edad declarada no vuelve a preguntar ('+t.activeScreen()+')');
  t.w._fbUser=null;t.fireAuth(null);await sleep(400);
  ok(t.activeScreen().join()==='screen-age-gate','al cerrar sesión, la siguiente persona ve la verificación de edad');
  ok(t.st().ageGateCompleted===false,'se borra la edad de la sesión anterior');
  t.w.close();
  console.log('\nRESULTADO: '+pass+' correctas, '+fail+' fallos');H.close();process.exit(fail?1:0);
})().catch(e=>{console.error('EXCEPCIÓN',e);H.close();process.exit(2)});
