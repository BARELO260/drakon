// Comprueba que el empaquetado TWA es coherente (sin red). Uso: node tools/ronda12/comprobar_twa.js
// Errores = algo roto. Pendientes = datos que solo puedes aportar tú (huella SHA-256 de Play, etc.).
const fs=require('fs'),path=require('path');
const R=path.resolve(__dirname,'../..');const rd=p=>fs.readFileSync(path.join(R,p),'utf8');
const errors=[],pending=[];const err=m=>errors.push(m),pend=m=>pending.push(m);
const pngSize=p=>{const b=fs.readFileSync(path.join(R,p));if(b.slice(1,4).toString()!=='PNG')return null;return [b.readUInt32BE(16),b.readUInt32BE(20)]};
// manifest web
const man=JSON.parse(rd('docs/manifest.json'));
for(const k of ['name','short_name','start_url','scope','display','icons','theme_color','background_color'])if(!man[k])err('manifest.json: falta '+k);
if(man.display!=='standalone')err('manifest.json: display debe ser standalone');
const has=(sz,pur)=>(man.icons||[]).some(i=>i.sizes===sz&&(i.purpose||'any').split(' ').includes(pur));
if(!has('192x192','any'))err('manifest: falta icono 192 «any»');if(!has('512x512','any'))err('manifest: falta icono 512 «any»');if(!has('512x512','maskable'))err('manifest: falta icono 512 «maskable»');
for(const i of man.icons||[]){const f='docs/'+i.src;if(!fs.existsSync(path.join(R,f))){err('manifest: no existe '+i.src);continue}
  const s=pngSize(f);const want=i.sizes.split('x').map(Number);if(!s||s[0]!==want[0]||s[1]!==want[1])err('manifest: '+i.src+' mide '+(s||'?')+' y declara '+i.sizes);
  if((i.purpose||'').includes('any')&&(i.purpose||'').includes('maskable'))err('manifest: «any maskable» en el mismo icono no se recomienda; sepáralos ('+i.src+')');}
// service worker y registro
if(!fs.existsSync(path.join(R,'docs/sw.js')))err('falta docs/sw.js');
if(!/serviceWorker\s*\.\s*register/.test(rd('docs/js/app.js'))&&!/serviceWorker\s*\.\s*register/.test(rd('docs/index.html')))err('no se encuentra el registro del service worker');
const shell=(rd('docs/sw.js').match(/APP_SHELL\s*=\s*\[([^\]]*)\]/)||[])[1]||'';
for(const m of shell.match(/'\.\/[^']+'/g)||[]){const f='docs/'+m.slice(3,-1);if(!fs.existsSync(path.join(R,f)))err('sw.js APP_SHELL apunta a un archivo inexistente: '+f)}
// TWA
const tw=JSON.parse(rd('twa/twa-manifest.json'));
const pkgFn=(rd('functions/index.js').match(/ANDROID_PACKAGE_NAME\s*=\s*'([^']+)'/)||[])[1];
if(tw.packageId!==pkgFn)err('packageId ('+tw.packageId+') ≠ ANDROID_PACKAGE_NAME en functions/index.js ('+pkgFn+')');
if(!/^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/.test(tw.packageId))err('packageId no válido');
let u;try{u=new URL(tw.webManifestUrl)}catch(e){err('webManifestUrl no es una URL')}
if(u&&u.host!==tw.host)err('host ('+tw.host+') ≠ host de webManifestUrl ('+u.host+')');
if(tw.host.includes('/')||tw.host.includes(':'))err('host debe ser solo el dominio');
const scope=new URL(tw.fullScopeUrl);if(!new URL(tw.webManifestUrl).pathname.startsWith(scope.pathname))err('webManifestUrl fuera de fullScopeUrl');
if(!tw.startUrl.startsWith(scope.pathname))err('startUrl ('+tw.startUrl+') fuera del ámbito '+scope.pathname);
for(const k of ['iconUrl','maskableIconUrl']){const p=new URL(tw[k]).pathname.replace(scope.pathname,'docs/');if(!fs.existsSync(path.join(R,p)))err('twa '+k+' no existe en docs/: '+p)}
if(!(tw.features&&tw.features.playBilling&&tw.features.playBilling.enabled))err('twa: features.playBilling debe estar activado (la suscripción usa la Digital Goods API)');
if(!(man.id||man.start_url))err('manifest sin id');
// assetlinks
const al=JSON.parse(rd('twa/barelo260.github.io/.well-known/assetlinks.json'));const t=al[0]&&al[0].target;
if(!t||t.package_name!==tw.packageId)err('assetlinks: package_name ≠ packageId');
const fp=(t&&t.sha256_cert_fingerprints)||[];
if(!fp.length)err('assetlinks: sin huellas');
for(const f of fp){if(/REEMPLAZA/i.test(f))pend('assetlinks.json: falta la huella SHA-256 real de Play Console');else if(!/^([0-9A-F]{2}:){31}[0-9A-F]{2}$/.test(f))err('assetlinks: huella con formato inválido: '+f)}
if(!fs.existsSync(path.join(R,'twa/barelo260.github.io/.nojekyll')))err('falta .nojekyll');
// páginas que Play pide
for(const f of ['docs/privacy.html','docs/terms.html','docs/eliminar-cuenta.html'])if(!fs.existsSync(path.join(R,f)))err('falta '+f);
if(/jcordonpineda/.test(rd('docs/privacy.html')+rd('docs/terms.html')+rd('docs/eliminar-cuenta.html')))err('queda el correo antiguo en las páginas legales');
if(!/joseluisdev123@gmail\.com/.test(rd('docs/privacy.html')))err('privacy.html no muestra el correo de contacto vigente');
console.log(errors.length?errors.map(e=>'  ✗ '+e).join('\n'):'  ✓ sin errores');
if(pending.length)console.log(pending.map(e=>'  ⏳ PENDIENTE (depende de ti): '+e).join('\n'));
console.log('RESULTADO: '+errors.length+' errores, '+pending.length+' pendientes');process.exit(errors.length?1:0);
