/* ═══════════════════════════════════════
   app.js — settings, sound FX, profile, PWA install, SW, keyboard, init()
   Dependencias: TODOS los módulos anteriores
   Este es el punto de entrada principal de la app
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   SETTINGS
═══════════════════════════════════════ */
function toggleNotifs(){
  state.notifs=!state.notifs; save();
  const t=document.getElementById('notifToggle'); if(t) t.classList.toggle('on',state.notifs);
  showToast(state.notifs?'🔔 Recordatorios activados':'🔕 Recordatorios desactivados');
}
function toggleSounds(){
  state.sounds=!state.sounds; save();
  const t=document.getElementById('soundToggle'); if(t) t.classList.toggle('on',state.sounds);
  showToast(state.sounds?'🔊 Sonidos activados':'🔇 Sonidos desactivados');
}
function resetProgress(){
  if(!confirm('¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) return;
  localStorage.removeItem('drakon_pwa');
  location.reload();
}
function updateToggleUI(){
  const nt=document.getElementById('notifToggle'); if(nt) nt.classList.toggle('on',state.notifs);
  const st=document.getElementById('soundToggle'); if(st) st.classList.toggle('on',state.sounds);
}

/* ═══════════════════════════════════════
   SOUND FX — assets/sounds/*.mp3
   Un único punto de verdad para toda la app (lecciones, pronunciación,
   minijuegos). 'complete'/'win' son alias del mismo sonido de victoria.
═══════════════════════════════════════ */
const SFX_FILES = {
  correct: 'assets/sounds/correct.mp3',
  wrong:   'assets/sounds/wrong.mp3',
  win:     'assets/sounds/win.mp3',
  complete:'assets/sounds/win.mp3',
};
const _sfxCache = {};
function _getSfx(type){
  const src = SFX_FILES[type] || SFX_FILES.correct;
  if(!_sfxCache[src]){
    const a = new Audio(src);
    a.preload = 'auto';
    _sfxCache[src] = a;
  }
  return _sfxCache[src];
}
function playSound(type){
  if(!state.sounds) return;
  try{
    const base = _getSfx(type);
    // Clonar el nodo permite reproducir el mismo efecto varias veces seguidas
    // (p.ej. respuestas rápidas) sin cortar la reproducción anterior.
    const node = base.cloneNode(true);
    node.volume = type === 'wrong' ? 0.6 : 0.7;
    node.play().catch(()=>{});
  }catch(e){}
}

/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
function goTo(sid){
  const cur=document.getElementById(state.screen); state.prevScreen=state.screen;
  const next=document.getElementById(sid); if(!next) return;
  if(cur) cur.classList.remove('active');
  if(state.screen==='screen-chat' && sid!=='screen-chat'){
    if(window.speechSynthesis) window.speechSynthesis.cancel();
    if(isListening){ try{ if(recognition) recognition.stop(); }catch(e){} }
  }
  next.classList.add('active'); state.screen=sid;
  // Show bottom nav on all "tab-level" screens
  const showNav=['screen-main','screen-situations','screen-profile','screen-saved-chats','screen-chat-history'].includes(sid);
  const nav=document.getElementById('bottomNav');
  if(nav) nav.style.display=showNav?'flex':'none';
  // Sync active bottom nav tab
  const tabMap={'screen-main':'home','screen-saved-chats':'chat','screen-chat-history':'chat','screen-situations':'situations','screen-profile':'profile'};
  if(tabMap[sid]){
    document.querySelectorAll('.bn').forEach(b=>b.classList.remove('active'));
    const el=document.getElementById('bn-'+tabMap[sid]); if(el) el.classList.add('active');
  }
}
function goBack(){ goTo(state.prevScreen||'screen-main'); }
function navTo(tab){
  document.querySelectorAll('.bn').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('bn-'+tab); if(el) el.classList.add('active');
  if(tab==='home'){ goTo('screen-main'); switchTab('home'); }
  else if(tab==='chat'){ goTo('screen-saved-chats'); renderSavedChats(); }
  else if(tab==='situations'){ goTo('screen-situations'); }
  else if(tab==='profile'){ goTo('screen-profile'); renderProfile(); }
  else if(tab==='games'){
    // Guardar el estado actual (idioma/tema/XP) antes de salir de la
    // SPA, para que games.html lo lea desde localStorage al entrar.
    if(typeof save==='function') save();
    window.location.href='games.html';
  }
}
function switchTab(tab){
  ['home','lessons','ai'].forEach(t=>{
    const el=document.getElementById('tab-'+t); if(el) el.style.display=t===tab?'block':'none';
    const mt=document.getElementById('mtab-'+t); if(mt) mt.classList.toggle('active',t===tab);
  });
  if(tab==='lessons') renderLessons();
}
function openSettings(){
  renderThemeGrid(); updateToggleUI(); loadGroqKeyUI();
  goTo('screen-settings');
}

/* ═══════════════════════════════════════
   PROFILE
═══════════════════════════════════════ */
function renderProfile(){
  const ch=getChar();
  const pc=document.getElementById('profileChar'); if(pc) pc.innerHTML='<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">';
  const pn=document.getElementById('profileName'); if(pn) pn.textContent=ch.name;
  const pl=document.getElementById('profileLangSub'); if(pl) pl.textContent=state.lang?`Aprendiendo: ${state.lang.name} ${state.lang.flag}`:'Selecciona un idioma';
  const sm=document.getElementById('statMsgs'); if(sm) sm.textContent=state.totalMessages;
  updatePremUI();
  const al=document.getElementById('achList'); if(!al) return;
  al.innerHTML=state.achievements.map(a=>`
    <div class="ach ${a.earned?'':'locked'}">
      <span class="ach-ic">${a.icon}</span>
      <div><div class="ach-n">${a.name}</div><div class="ach-d">${a.desc}</div></div>
      <span class="ach-b ${a.badge}">${a.earned?'✓ Ganado':'Bloqueado'}</span>
    </div>`).join('');
}

/* ═══════════════════════════════════════
   TOASTS
═══════════════════════════════════════ */
function showToast(msg){ const t=document.getElementById('toast'); if(!t) return; t.textContent=msg; t.classList.remove('show'); void t.offsetWidth; t.classList.add('show'); }

/* ═══════════════════════════════════════
   UPDATE ALL
═══════════════════════════════════════ */
function updateAllUI(){
  gainXP(0,false); updateStreakUI(); updatePremUI(); renderMissions(); renderSituations();
  const ch=getChar();
  const ti=document.getElementById('tbChar'); if(ti){ ti.innerHTML='<img src="'+ch.img+'" style="width:24px;height:24px;object-fit:contain">'; }
  const hi=document.getElementById('heroChar');
  if(hi){
    if(ch.speak){
      hi.innerHTML='<video src="'+ch.speak+'" autoplay loop muted playsinline style="width:90px;height:90px;object-fit:contain;display:block;">';
    } else {
      hi.innerHTML='<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">';
    }
  }
  const tn=document.getElementById('tbName'); if(tn) tn.textContent=ch.name;
  if(state.lang){ const ld=document.getElementById('langDisplay'); if(ld) ld.textContent=state.lang.code; const lp=document.getElementById('chatLangP'); if(lp) lp.textContent=state.lang.code; }
  const ie=document.getElementById('introEmoji'); if(ie) ie.innerHTML='<img src="'+ch.img+'" style="width:110px;height:110px;object-fit:contain">';
  renderCharPickRow(); updateAIBar();
  setInterval(updateStreakCountdown, 60000); // update countdown every minute
}

/* ═══════════════════════════════════════
   PWA INSTALL
═══════════════════════════════════════ */
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault(); deferredPrompt=e;
  if(!localStorage.getItem('pwa_installed')){ showInstallBanner(); }
});
function showInstallBanner(){
  const banner=document.createElement('div'); banner.className='install-banner'; banner.id='installBanner';
  banner.innerHTML='<span class="ib-icon"><img src="assets/characters/faces/drakon.png" style="width:32px;height:32px;object-fit:contain"></span><div class="ib-text"><div class="ib-title">Instala Drakón</div><div class="ib-sub">Úsala como app en tu dispositivo</div></div><button class="ib-btn" onclick="installPWA()">Instalar</button><button class="ib-close" onclick="dismissInstall()">✕</button>';
  document.body.appendChild(banner);
}
async function installPWA(){
  if(!deferredPrompt) return;
  deferredPrompt.prompt(); const r=await deferredPrompt.userChoice;
  if(r.outcome==='accepted'){ localStorage.setItem('pwa_installed','1'); dismissInstall(); showToast('✅ ¡Drakón instalado!'); }
  deferredPrompt=null;
}
function dismissInstall(){ const b=document.getElementById('installBanner'); if(b) b.remove(); }

/* ═══════════════════════════════════════
   SERVICE WORKER
═══════════════════════════════════════ */
(async function(){
  if(!('serviceWorker' in navigator)) return;

  // ── BUILD debe coincidir exactamente con el BUILD en sw.js ──
  const BUILD = '20250529-v16';

  // Activar SW en espera inmediatamente (skipWaiting)
  const activate = sw => sw && sw.postMessage('skipWaiting');

  // Detectar cambio de controlador y recargar UNA sola vez
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if(!refreshing){ refreshing = true; window.location.reload(); }
  });

  try {
    // El query-string fuerza al browser a re-descargar sw.js cuando BUILD cambia
    const reg = await navigator.serviceWorker.register('./sw.js?v=' + BUILD);

    // Si ya hay un SW nuevo esperando (tab abierta antes del deploy), activarlo ya
    if(reg.waiting) { activate(reg.waiting); return; }

    // Escuchar futuras actualizaciones
    reg.addEventListener('updatefound', () => {
      const sw = reg.installing;
      if(!sw) return;
      sw.addEventListener('statechange', () => {
        // 'installed' significa que descargó el nuevo SW y está esperando
        if(sw.state === 'installed' && navigator.serviceWorker.controller) {
          activate(sw);
        }
      });
    });

    // Forzar chequeo de actualización en cada carga de página
    reg.update().catch(()=>{});

  } catch(e){ console.warn('SW error:', e); }
})()

/* ═══════════════════════════════════════
   KEYBOARD
═══════════════════════════════════════ */
document.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&!e.shiftKey){
    if(state.screen==='screen-chat'){ e.preventDefault(); sendChat(); }
    if(state.screen==='screen-exercise'){ const fi=document.getElementById('fillIn'); if(fi&&!fi.disabled){ e.preventDefault(); answerFill(); } }
  }
});

/* ── MOBILE KEYBOARD: keep chat-bar above virtual keyboard ── */
(function(){
  // visualViewport API is supported in all modern mobile browsers
  if(!window.visualViewport) return;
  const chatBar = () => document.querySelector('#screen-chat .chat-bar');
  const chatMsgs = () => document.getElementById('chatMsgs');
  let lastHeight = window.visualViewport.height;

  window.visualViewport.addEventListener('resize', () => {
    const vv = window.visualViewport;
    const keyboardH = window.innerHeight - vv.height - vv.offsetTop;
    const bar = chatBar();
    const msgs = chatMsgs();
    if(bar){
      // Lift the chat bar above the keyboard
      bar.style.transform = keyboardH > 50
        ? `translateY(-${keyboardH}px)`
        : '';
    }
    if(msgs && keyboardH > 50){
      // Scroll to bottom so last message stays visible
      setTimeout(() => msgs.scrollTop = msgs.scrollHeight, 50);
    }
  });
})();


/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */

function showLoadingOverlay(msg){
  const o=document.getElementById('loadingOverlay');
  const m=document.getElementById('loadingMsg');
  if(o){ o.style.display='flex'; }
  if(m && msg) m.textContent=msg;
}
function hideLoadingOverlay(){
  const o=document.getElementById('loadingOverlay');
  if(o) o.style.display='none';
}
/* ═══════════════════════════════════════
   BOOT SPLASH — progreso de carga real
═══════════════════════════════════════ */
function runBootSequence(onDone){
  const fill = document.getElementById('bootBarFill');
  const pct  = document.getElementById('bootPct');
  let shown = 0, target = 4, finished = false;
  function setTarget(v){ target = Math.max(target, Math.min(100, v)); }
  function paint(){
    shown += (target - shown) * 0.16;
    if(target>=100 && (100 - shown) < 0.4) shown = 100;
    const v = Math.round(shown);
    if(fill) fill.style.width = v + '%';
    if(pct)  pct.textContent = 'Cargando... ' + v + '%';
    if(shown < 100){ requestAnimationFrame(paint); }
    else if(!finished){ finished = true; setTimeout(onDone, 250); }
  }
  requestAnimationFrame(paint);

  const fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  const imgsReady = new Promise(res=>{
    const imgs = (typeof CHARS!=='undefined' ? CHARS.slice(0,4).map(c=>c.img) : []).filter(Boolean);
    let left = imgs.length;
    if(!left) return res();
    imgs.forEach(src=>{
      const im = new Image();
      im.onload = im.onerror = ()=>{ left--; if(left<=0) res(); };
      im.src = src;
    });
  });
  const pageReady = new Promise(res=>{
    if(document.readyState==='complete') return res();
    window.addEventListener('load', res, {once:true});
  });
  const minDelay = new Promise(res=>setTimeout(res, 450));
  // Red de seguridad: si algún recurso (fuente, imagen, o la página completa)
  // nunca resuelve por problemas de red, no dejamos la app congelada para
  // siempre — forzamos el 100% a los 6s como máximo.
  const hardCap = new Promise(res=>setTimeout(res, 6000));

  fontsReady.then(()=>setTarget(35)).catch(()=>setTarget(35));
  imgsReady.then(()=>setTarget(65));
  pageReady.then(()=>setTarget(90));
  Promise.race([
    Promise.all([fontsReady.catch(()=>{}), imgsReady, pageReady, minDelay]),
    hardCap,
  ]).then(()=>setTarget(100));
}

function init(){
  try{
    const skipBoot = sessionStorage.getItem('drakon_skip_boot') === '1';
    if(skipBoot) sessionStorage.removeItem('drakon_skip_boot');
    state.screen = 'screen-boot';
    load();
    loadGroqKey();
    applyTheme(state.theme||'dark');
    renderNativeLangs();
    renderLangs(); renderSituations(); renderMissions(); renderCharPickRow();
    const bn = document.getElementById('bottomNav'); if(bn) bn.style.display='none';
    if(skipBoot){
      goTo('screen-main'); switchTab('home');
      return;
    }
    // Firebase is always configured — go to login screen
    // onAuthStateChanged (in the module) will call onFirebaseUserReady or onFirebaseSignOut
    runBootSequence(()=>{
      // Si mientras cargaba el splash, Firebase ya resolvió la sesión
      // (onFirebaseUserReady / onFirebaseSignOut) y navegó a otra pantalla,
      // no lo pisamos forzando el login — solo mostramos login si nadie
      // más tomó el control de la navegación todavía.
      if(state.screen === 'screen-boot'){
        goTo('screen-login');
        setLoginMode('login');
      }
    });
  } catch(e){
    console.error('[Drakón] Error durante init():', e);
    // Aunque algo haya fallado, nunca dejamos al usuario atrapado en el splash.
    if(state.screen === 'screen-boot'){ goTo('screen-login'); setLoginMode('login'); }
  }
}

// Red de seguridad global: pase lo que pase (error de red, excepción no
// controlada, recurso colgado), a los 9s como máximo el usuario debe poder
// ver la pantalla de login — nunca quedarse mirando el splash para siempre.
setTimeout(()=>{
  if(typeof state!=='undefined' && state.screen === 'screen-boot'){
    console.warn('[Drakón] Tope de seguridad del splash alcanzado — mostrando login.');
    goTo('screen-login');
    if(typeof setLoginMode==='function') setLoginMode('login');
  }
}, 9000);

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
