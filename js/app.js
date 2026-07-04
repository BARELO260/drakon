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
   SOUND FX (Web Audio)
═══════════════════════════════════════ */
function playSound(type){
  if(!state.sounds) return;
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const osc=ctx.createOscillator(); const gain=ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    const configs={correct:{freq:[523,659,784],dur:.08,vol:.15},wrong:{freq:[311,277],dur:.1,vol:.1},complete:{freq:[523,587,659,784,880],dur:.1,vol:.12}};
    const c=configs[type]||configs.correct;
    c.freq.forEach((f,i)=>{ const o2=ctx.createOscillator(); const g2=ctx.createGain();
      o2.connect(g2); g2.connect(ctx.destination);
      o2.frequency.value=f; g2.gain.setValueAtTime(c.vol,ctx.currentTime+i*c.dur);
      g2.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*c.dur+c.dur);
      o2.start(ctx.currentTime+i*c.dur); o2.stop(ctx.currentTime+i*c.dur+c.dur);
    });
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
}
function switchTab(tab){
  ['home','lessons','ai','chars','settings'].forEach(t=>{
    const el=document.getElementById('tab-'+t); if(el) el.style.display=t===tab?'block':'none';
    const mt=document.getElementById('mtab-'+t); if(mt) mt.classList.toggle('active',t===tab);
  });
  if(tab==='lessons') renderLessons();
  if(tab==='chars') renderChars();
  if(tab==='settings'){ renderThemeGrid(); updateToggleUI(); loadGroqKeyUI(); }
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
function init(){
  load();
  loadGroqKey();
  applyTheme(state.theme||'dark');
  renderNativeLangs();
  renderLangs(); renderSituations(); renderMissions(); renderCharPickRow();
  document.getElementById('bottomNav').style.display='none';
  // Firebase is always configured — go to login screen
  // onAuthStateChanged (in the module) will call onFirebaseUserReady or onFirebaseSignOut
  goTo('screen-login');
  setLoginMode('login');
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
