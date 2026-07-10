/* ═══════════════════════════════════════
   THEME
═══════════════════════════════════════ */
function applyTheme(id){
  state.theme=id;
  document.documentElement.setAttribute('data-theme',id);
  save();
  renderThemeGrid();
  window._themeId = id;
}

/* Colores de acento por tema, solo para pintar la muestra plana del selector.
   El resto de la UI ya se resuelve con las variables CSS de themes.css. */
var THEME_SWATCH = {
  dark:'#ff9d3d', light:'#7c5cff', amoled:'#e5e5e5', forest:'#34c77b',
  ocean:'#2bb0e6', purple:'#a06bff', ruby:'#ef4a5f', ice:'#2ba7d1',
  sand:'#c4831a'
};

function renderThemeGrid(){
  var grid=document.getElementById('themeGrid'); if(!grid) return;

  grid.innerHTML=THEMES.map(function(t){
    var locked=t.free===false&&!state.isPremium;
    var color=THEME_SWATCH[t.id]||'#7c5cff';
    var isActive=state.theme===t.id;
    var lock=locked?'<div style="position:absolute;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;font-size:15px;border-radius:inherit">&#128274;</div>':'';
    var action=locked?"showPremModal()":"applyTheme('"+t.id+"')";
    var activeBorder=isActive?'border-color:'+color:'';
    return '<div class="theme-card '+(isActive?'active-theme':'')+'" onclick="'+action+'" style="'+activeBorder+'">'
      +'<div class="theme-preview" style="background:'+color+'">'
        +(isActive?'<span class="theme-check">&#10003;</span>':'')
        +lock
      +'</div>'
      +'<div class="theme-name" style="'+(isActive?'color:'+color:'')+'">'+t.name+'</div>'
      +'</div>';
  }).join('');
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
    // Asegurar que el idioma/tema/XP actuales queden guardados en
    // localStorage ANTES de salir, para que games.html los lea al vuelo.
    if(typeof save==='function') save();
    window.location.href='games.html';
  }
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
    if(ch.id==='dragon'){
      hi.innerHTML='<video src="assets/characters/faces/drakonspeak.webm" autoplay loop muted playsinline style="width:90px;height:90px;object-fit:contain;display:block;">';
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

