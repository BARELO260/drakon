// Pruebas de la ronda 12 (jsdom): reportar respuestas de IA, SDK de Google solo para 13+, tipografías propias, páginas legales.
// Uso: NODE_PATH=<carpeta con node_modules/jsdom@22> node ronda12.js     (DOCS=<ruta a docs> para probar otra versión)
const H=require('./harness.js'),fs=require('fs'),path=require('path');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const waitFor=async(f,ms=6000)=>{const t0=Date.now();while(Date.now()-t0<ms){try{if(f())return true}catch(e){}await sleep(50)}return false};
let pass=0,fail=0;const ok=(c,m)=>{if(c){pass++;console.log('  ✓',m)}else{fail++;console.log('  ✗ FALLA:',m)}};
const ROOT=path.resolve(__dirname,'../../..');const DOCS=process.env.DOCS||path.join(ROOT,'docs');const rd=p=>fs.readFileSync(p,'utf8');
const Y=new Date().getFullYear();
const answerYear=async(t,year)=>{const sel=t.w.document.getElementById('ageGateYear');await waitFor(()=>sel.options.length>5,10000);sel.value=String(year);await t.w.submitAgeGate();await sleep(300)};
const goog=t=>t.requested().filter(u=>!u.startsWith('http://127.0.0.1'));
(async()=>{
  console.log('S1 SDK de Firebase (Google) solo después de declarar 13+ años');
  let t=await H.boot();await waitFor(()=>t.activeScreen().join()==='screen-age-gate',10000);await sleep(200);
  ok(t.activeScreen().join()==='screen-age-gate','primera visita: verificación de edad');
  ok(goog(t).length===0,'antes de declarar la edad NO se contacta con ningún servidor externo ('+goog(t).join(',')+')');
  await answerYear(t,Y-9);
  ok(goog(t).length===0&&!t.w._fbInit,'niño de 9 años: no se descarga el SDK ni se inicializa Firebase');
  ok(t.activeScreen().includes('screen-native')||t.activeScreen().includes('screen-intro'),'el niño entra al modo infantil igualmente ('+t.activeScreen()+')');
  t.w.close();
  t=await H.boot({local:{drakon_pwa:JSON.stringify({xp:5,isMinor:true,ageGateCompleted:true,birthYear:Y-9,parentalConsentStatus:'pending',lessonsCompleted:[],lang:null,nativeLang:'es'})}});await sleep(500);
  ok(goog(t).length===0&&!t.w._fbInit,'niño que vuelve a abrir la app: sigue sin cargarse nada de Google');
  t.w.close();
  t=await H.boot();await sleep(300);await answerYear(t,Y-30);await waitFor(()=>t.w._fbInit);
  const fbUrls=goog(t).filter(u=>/gstatic\.com\/firebasejs\//.test(u));
  ok(fbUrls.length===3&&t.w._fbInit===true,'adulto: tras declarar la edad se descargan los 3 módulos de Firebase y se inicializa ('+fbUrls.length+')');
  ok(t.activeScreen().join()==='screen-login','adulto: ve la pantalla de acceso');
  t.w.close();
  t=await H.boot({local:{drakon_pwa:JSON.stringify({xp:5,isMinor:false,ageGateCompleted:true,birthYear:Y-30,lessonsCompleted:[],lang:null,nativeLang:'es'})}});await waitFor(()=>t.w._fbInit);
  ok(t.w._fbInit===true&&goog(t).filter(u=>/firebasejs/.test(u)).length===3,'adulto que vuelve: el SDK se carga al arrancar para restaurar su sesión');
  t.w.close();
  console.log('S2 Tipografías propias (sin Google Fonts)');
  const all=[];for(const sc of ['a','b']){}
  ok(!/fonts\.(googleapis|gstatic)\.com/.test(rd(path.join(DOCS,'index.html'))),'index.html ya no referencia Google Fonts');
  ok(!/fonts\.(googleapis|gstatic)\.com/.test(rd(path.join(DOCS,'games.html'))),'games.html ya no referencia Google Fonts');
  const css=rd(path.join(DOCS,'css/fonts.css'));const files=[...css.matchAll(/url\('([^']+)'\)/g)].map(m=>m[1]);
  ok(files.length===4&&files.every(f=>fs.existsSync(path.join(DOCS,'css',f))),'fonts.css apunta a 4 archivos que existen ('+files.length+')');
  ok(/font-family:'Inter'/.test(css)&&/font-family:'Baloo 2'/.test(css),'declara Inter y Baloo 2 (los nombres que usa themes.css)');
  ok(/css\/fonts\.css/.test(rd(path.join(DOCS,'index.html')))&&/css\/fonts\.css/.test(rd(path.join(DOCS,'games.html'))),'ambas páginas enlazan fonts.css');

  console.log('S3 Reportar respuestas de la IA');
  t=await H.boot();await sleep(300);await answerYear(t,Y-30);await waitFor(()=>t.w._fbInit);
  const w=t.w,d=w.document;const adds=[];
  w._fbUser={uid:'u-secreto',email:'persona@correo.com'};w._fbDb={collection:n=>({add:async r=>{adds.push([n,r]);return {}}})};
  ok(!w.document.body.classList.contains('child-mode'),'adulto: el <body> NO lleva child-mode');
  w.eval('updatePremUI()');w.showPremModal();ok(w.document.getElementById('premModal').style.display==='flex','adulto: la ventana Premium sí se abre');w.closePrem();
  w.addAIMsg('¡Hola! Soy tu tutor.');w.addAIMsg('Respuesta **dudosa** de la IA');await sleep(100);
  const btns=d.querySelectorAll('#chatMsgs .rep-btn');
  ok(btns.length===1,'hay botón «Reportar» en la respuesta de la IA y no en el saludo fijo ('+btns.length+')');
  w.addUserMsg('mi mensaje');await sleep(50);ok(d.querySelectorAll('#chatMsgs .rep-btn').length===1,'los mensajes del usuario no llevan botón');
  btns[0].click();await sleep(50);
  const modal=d.getElementById('repModal');
  ok(!!modal&&modal.querySelectorAll('input[name=repReason]').length===5,'al pulsarlo se abre el diálogo con 5 motivos');
  modal.querySelector('input[value=sexual]').checked=true;d.getElementById('repNote').value='no es apto para niños';
  d.getElementById('repSend').click();await sleep(150);
  ok(adds.length===1&&adds[0][0]==='aiReports','se guarda en la colección aiReports');
  const rec=(adds[0]||[])[1]||{};
  ok(rec.reason==='sexual'&&rec.text==='Respuesta dudosa de la IA'&&rec.note==='no es apto para niños','lleva motivo, texto visible de la respuesta y nota');
  const rules=rd(path.join(ROOT,'firestore.rules'));const allowed=(rules.match(/aiReports[\s\S]*?hasOnly\(\[([^\]]*)\]/)||[])[1].match(/'(\w+)'/g).map(s=>s.replace(/'/g,''));
  ok(Object.keys(rec).every(k=>allowed.includes(k)),'solo usa campos permitidos por firestore.rules ('+Object.keys(rec)+')');
  ok(!JSON.stringify(rec).includes('u-secreto')&&!JSON.stringify(rec).includes('persona@correo.com'),'el reporte NO contiene uid ni correo');
  ok(Number.isInteger(rec.createdAt)&&rec.text.length<=1500,'createdAt es entero y el texto cabe en el límite');
  ok(!d.getElementById('repModal'),'el diálogo se cierra al enviar');
  ok((w.eval('state.aiReportsLog')||[]).length===1&&w.eval('state.aiReportsLog')[0].sent===true&&!('text' in w.eval('state.aiReportsLog')[0]),'se anota localmente (sin el texto) que se envió');
  // validación
  adds.length=0;let r=await w.submitAiReport({text:'x'.repeat(5000),reason:'inventado',note:'n'.repeat(900)});
  ok(adds[0][1].reason==='otra'&&adds[0][1].text.length===1500&&adds[0][1].note.length===300,'motivo inválido → «otra»; texto y nota se recortan a 1500 y 300');
  adds.length=0;r=await w.submitAiReport({text:'   ',reason:'ofensiva'});ok(r.ok===false&&adds.length===0,'respuesta vacía → no se envía nada');
  // historial
  w.renderHistoryMsgs([{role:'user',content:'hola'},{role:'assistant',content:'respuesta guardada'}]);await sleep(80);
  ok(d.querySelectorAll('#chatHistoryMsgs .rep-btn').length===1,'también aparece en las respuestas del historial de chats guardados');
  // fallo de Firestore → borrador de correo
  const opened=[];w.drakonOpenUrl=u=>opened.push(u);w._fbDb={collection:()=>({add:async()=>{throw new Error('offline')}})};
  r=await w.submitAiReport({text:'texto fallido',reason:'peligrosa'});
  ok(r.via==='email'&&opened.length===1&&/^mailto:joseluisdev123@gmail\.com\?/.test(opened[0])&&decodeURIComponent(opened[0]).includes('texto fallido'),'si falla el envío se ofrece un borrador de correo al contacto de soporte');
  ok(w.eval('state.aiReportsLog').slice(-1)[0].sent===false,'queda anotado como no enviado');
  // sin sesión
  opened.length=0;w._fbUser=null;w._fbAuth={currentUser:null};r=await w.submitAiReport({text:'sin sesión',reason:'otra'});
  ok(r.via==='email'&&opened.length===1,'sin sesión → borrador de correo (sin llamar a Firestore)');
  t.w.close();
  console.log('S4 Modo infantil: no se puede reportar ni enviar nada');
  t=await H.boot();await sleep(300);await answerYear(t,Y-8);
  const adds2=[];t.w._fbDb={collection:n=>({add:async r=>{adds2.push(r);return {}}})};t.w._fbUser={uid:'x'};
  ok(t.w.openAiReport('algo')===null&&!t.w.document.getElementById('repModal'),'en modo infantil no se abre el diálogo');
  const _u=t.w._fbUser;t.w._fbUser=null; // estas comprobaciones son del modo infantil «puro» (sin usuario de Firebase)
  t.w.eval('state.screen="screen-main"');t.w.eval('updatePremUI()');
  ok(t.w.document.body.classList.contains('child-mode'),'modo infantil: el <body> lleva la clase child-mode (oculta IA, planes y Premium)');
  t.w.showPremModal();ok(t.w.document.getElementById('premModal').style.display!=='flex','modo infantil: showPremModal() no abre la ventana de planes');
  t.w.eval('renderMissions()');const mt=t.w.document.getElementById('missionList').textContent;
  ok(!/Primer chat|Detective/.test(mt)&&/Lección del día/.test(mt),'modo infantil: las misiones no exigen usar la IA');t.w._fbUser=_u;
  r=await t.w.submitAiReport({text:'algo',reason:'otra'});ok(r.ok===false&&adds2.length===0,'en modo infantil no se envía nada a ningún sitio');
  t.w.close();

  console.log('S5 Páginas legales y eliminación de cuenta (coherencia con el código)');
  const idx=rd(path.join(DOCS,'index.html')),priv=rd(path.join(DOCS,'privacy.html')),terms=rd(path.join(DOCS,'terms.html')),del=fs.existsSync(path.join(DOCS,'eliminar-cuenta.html'))?rd(path.join(DOCS,'eliminar-cuenta.html')):'';
  ok(del.length>500,'existe docs/eliminar-cuenta.html');
  ok(/Drakón/.test(del)&&/JLX Development/.test(del),'nombra la app y el desarrollador (requisito de Play)');
  ok(/mailto:joseluisdev123@gmail\.com/.test(del),'ofrece solicitar la eliminación por correo');
  ok(/Ajustes → Privacidad y datos → Eliminar mi cuenta/.test(del)&&/Privacidad y datos/.test(idx)&&/Eliminar mi cuenta/.test(idx),'la ruta dentro de la app que describe existe en index.html');
  ok(/eliminar-cuenta\.html/.test(idx)&&/eliminar-cuenta\.html/.test(priv)&&/eliminar-cuenta\.html/.test(terms),'se enlaza desde la app, la política y los términos');
  ok(!/jcordonpineda/.test(priv+terms+del+idx),'no queda el correo antiguo');
  ok(/joseluisdev123@gmail\.com/.test(priv)&&/joseluisdev123@gmail\.com/.test(terms),'política y términos muestran el correo nuevo');
  ok(!/registro técnico de errores/.test(priv),'se quitó la frase sobre «registro técnico de errores» (no existe en el código)');
  ok(/Reportar/.test(priv)&&/Reportar/.test(terms),'política y términos describen el reporte de respuestas de IA');
  ok(/solo después de que declares tener 13 años/.test(priv),'la política describe que el SDK de Google solo se carga para 13+');
  console.log('\nRESULTADO: '+pass+' correctas, '+fail+' fallos');H.close();process.exit(fail?1:0);
})().catch(e=>{console.log('EXCEPCIÓN',e);process.exit(1)});
