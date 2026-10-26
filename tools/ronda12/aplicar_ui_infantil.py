import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from patchlib import sub
A='docs/js/age-gate.js'; G='docs/js/gamification.js'

# 1) Función que adapta la interfaz al modo infantil (oculta todo lo que depende de IA/compras)
sub(A, """// Un menor de 13 no puede crear cuenta (ni por correo ni por Google).""", """// Adapta la interfaz al modo infantil: oculta lo que depende de IA, cuentas o compras, para que
// no se ofrezca nada que no funciona (y para no promocionar compras a menores; Política de Familias).
// Se llama desde startLocalSession() y updatePremUI() (esta se ejecuta en cada refresco de la interfaz).
function applyChildModeUI(){
  try{
    if(!document.getElementById('child-style')){
      const s = document.createElement('style'); s.id = 'child-style';
      s.textContent = '.child-mode #mtab-ai,.child-mode #bn-chat,.child-mode #planPill,.child-mode .memory-card,.child-mode .prem-banner,.child-mode .setting-row[onclick*="showPremModal"]{display:none!important}';
      document.head.appendChild(s);
    }
    const child = isChildLocalMode();
    document.body.classList.toggle('child-mode', child);
    if(child){
      const aiTab = document.getElementById('tab-ai');
      if(aiTab && aiTab.style.display !== 'none' && typeof switchTab === 'function') switchTab('home');
    }
    return child;
  }catch(e){ return false; }
}

// Un menor de 13 no puede crear cuenta (ni por correo ni por Google).""")
sub(A, """    applyNativeLanguageUI();
    updateAllUI();
    scheduleMidnightReset();""", """    applyNativeLanguageUI();
    applyChildModeUI();
    updateAllUI();
    scheduleMidnightReset();""")

# 2) Premium: ni modal ni anuncio para menores
sub(G, "function showPremModal(){ document.getElementById('premModal').style.display='flex'; renderPremModal(); }",
"""function showPremModal(){
  // Menores de 13: no se muestran planes ni precios (las compras están bloqueadas y no se promocionan).
  if(typeof isMinorRestricted==='function' && isMinorRestricted()){ if(typeof showToast==='function') showToast('Esta función no está disponible en el modo infantil'); return; }
  document.getElementById('premModal').style.display='flex'; renderPremModal();
}""")
sub(G, "  const pl=document.getElementById('planLbl'); if(pl) pl.textContent=isPremiumActive()?'Premium':'Gratis';\n  updateAIBar();",
"  const pl=document.getElementById('planLbl'); if(pl) pl.textContent=isPremiumActive()?'Premium':'Gratis';\n  if(typeof applyChildModeUI==='function') applyChildModeUI();\n  updateAIBar();")

# 3) Misiones: sin las que exigen chatear con la IA
sub(G, """  list.innerHTML=state.missions.map((m,i)=>`""", """  // En modo infantil no hay IA: se ocultan las misiones de mensajes y correcciones.
  const ms=(typeof isChildLocalMode==='function'&&isChildLocalMode())?state.missions.filter(m=>m.type!=='messages'&&m.type!=='corrections'):state.missions;
  list.innerHTML=ms.map((m,i)=>`""")
sub(G, """  const done=state.missions.filter(m=>m.done).length;
  const mb=document.getElementById('missionBar'); if(mb) mb.style.width=(done/state.missions.length*100)+'%';
  const mp=document.getElementById('missionProg'); if(mp) mp.textContent=`${done} / ${state.missions.length}`;""",
"""  const done=ms.filter(m=>m.done).length;
  const mb=document.getElementById('missionBar'); if(mb) mb.style.width=(done/ms.length*100)+'%';
  const mp=document.getElementById('missionProg'); if(mp) mp.textContent=`${done} / ${ms.length}`;""")
print('ok')
