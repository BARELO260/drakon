/* ═══════════════════════════════════════
   gamification.js — XP, misiones, logros, premium
   Dependencias: state.js, ui.js
   Usado por: app.js, chat.js, lessons.js
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   XP & GAMIFICATION
═══════════════════════════════════════ */
function getLevel(){ return XP_TABLE.find(l=>state.xp>=l.min&&state.xp<l.max)||XP_TABLE.at(-1); }
function gainXP(n, burst=true){
  const old=getLevel().label; state.xp+=n;
  const lv=getLevel();
  const xpN=document.getElementById('xpNum'); if(xpN) xpN.textContent=state.xp;
  const sX=document.getElementById('statXP'); if(sX) sX.textContent=state.xp;
  const pct=Math.min((state.xp-lv.min)/(lv.next-lv.min)*100,100);
  const f=document.getElementById('xpBarFill'); if(f) f.style.width=pct+'%';
  const bl=document.getElementById('xpBarLbl'); if(bl) bl.textContent=`${state.xp} / ${lv.next} XP`;
  const ll=document.getElementById('xpLevel'); if(ll) ll.textContent=`Nivel ${lv.label}`;
  if(burst) showXPBurst(n);
  if(old!==lv.label){ showToast(`🎉 ¡Subiste a nivel ${lv.label}!`); checkAchievements(); }
}
function showXPBurst(n){ const el=document.getElementById('xpBurst'); if(!el) return; el.textContent=`+${n} XP ⭐`; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); }
function updateStreakUI(){
  const n=state.streak;
  const sp=document.getElementById('streakNum'); if(sp) sp.textContent=n;
  const pill=document.getElementById('streakPill');
  if(pill) pill.classList.toggle('dead',n===0);
  const fb=document.getElementById('streakFireBig'); if(fb) fb.style.filter=n===0?'grayscale(1)':'none';
  const cb=document.getElementById('streakCountBig'); if(cb) cb.textContent=n;
  const sb=document.getElementById('streakSubText'); if(sb){
    if(n===0) sb.textContent='Empieza tu racha hoy';
    else if(n<3) sb.textContent='¡Buen comienzo! Sigue así';
    else if(n<7) sb.textContent='¡Vas muy bien!';
    else if(n<30) sb.textContent='¡Racha increíble!';
    else sb.textContent='¡RACHA LEGENDARIA! 🏆';
  }
  const sD=document.getElementById('statDays'); if(sD) sD.textContent=n;
  updateStreakCountdown();
}
function updateStreakCountdown(){
  const today=getLocalDate();
  const cd=document.getElementById('streakCountdown'); if(!cd) return;
  if(state.lastActiveDate===today){ cd.textContent='✅ Ya practicaste hoy'; cd.style.color='var(--mint)'; }
  else { cd.textContent=`⏰ Te quedan ${getTimeUntilMidnight()} para practicar`; cd.style.color='var(--coral)'; }
}
function showStreakInfo(){
  const today=getLocalDate();
  if(state.lastActiveDate===today) showToast(`🔥 Racha de ${state.streak} días. ¡Sigue así!`);
  else showToast(`⏰ Practica antes de medianoche para mantener tu racha de ${state.streak} días`);
}
function updateAIBar(){
  const lbl=document.getElementById('aiUsageLbl'); if(lbl) lbl.textContent=`${state.msgsToday} de ${state.isPremium?'∞':FREE_LIMIT} mensajes usados hoy`;
  const bar=document.getElementById('aiUsageBar'); if(bar) bar.style.width=Math.min(state.msgsToday/FREE_LIMIT*100,100)+'%';
}

/* ═══════════════════════════════════════
   MISSIONS
═══════════════════════════════════════ */
function renderMissions(){
  const list=document.getElementById('missionList'); if(!list) return;
  list.innerHTML=state.missions.map((m,i)=>`
    <div class="mi ${m.done?'done':''}">
      <span class="mi-ic">${m.icon}</span>
      <div class="mi-info"><div class="mi-n">${m.name}</div><div class="mi-d">${m.desc}</div><div class="mi-xp">${m.reward}</div></div>
      <div class="mi-check">${m.done?'✓':''}</div>
    </div>`).join('');
  const done=state.missions.filter(m=>m.done).length;
  const mb=document.getElementById('missionBar'); if(mb) mb.style.width=(done/state.missions.length*100)+'%';
  const mp=document.getElementById('missionProg'); if(mp) mp.textContent=`${done} / ${state.missions.length}`;
}
function checkMissions(){
  state.missions.forEach((m,i)=>{
    if(m.done) return;
    if(m.type==='messages'&&state.msgsToday>=m.target) completeMission(i);
    if(m.type==='corrections'&&state.correctionsToday>=m.target) completeMission(i);
    if(m.type==='situations'&&state.situationsToday>=m.target) completeMission(i);
    if(m.type==='daily') completeMission(i);
  });
  renderMissions();
}
function completeMission(i,notify=true){
  if(state.missions[i].done) return;
  state.missions[i].done=true;
  gainXP(parseInt(state.missions[i].reward.replace(/\D/g,''))||15,false);
  if(notify) showToast('🎯 Misión: '+state.missions[i].name);
  save();
}

/* ═══════════════════════════════════════
   ACHIEVEMENTS
═══════════════════════════════════════ */
function checkAchievements(){
  const lv=getLevel().label;
  const checks=[
    {i:0,c:state.totalMessages>=1},{i:1,c:state.totalMessages>=20},
    {i:2,c:state.xp>=500},{i:3,c:state.situationsToday>=3},
    {i:4,c:state.streak>=7},{i:5,c:state.lessonsCompleted.length>=10},
    {i:6,c:['B1','B1+','B2','B2+','C1','C1+','C2'].includes(lv)},
    {i:7,c:['C1','C1+','C2'].includes(lv)},
    {i:8,c:state.streak>=30},{i:9,c:state.xp>=1000},
  ];
  checks.forEach(({i,c})=>{ if(c&&!state.achievements[i].earned){ state.achievements[i].earned=true; showToast(`🏆 Logro: ${state.achievements[i].name}!`); gainXP(30,false); } });
}

/* ═══════════════════════════════════════
   PREMIUM
═══════════════════════════════════════ */
function showPremModal(){ document.getElementById('premModal').style.display='flex'; }
function closePrem(){ document.getElementById('premModal').style.display='none'; }
function closePremOv(e){ if(e.target===document.getElementById('premModal')) closePrem(); }
function activatePrem(){
  state.isPremium=true; save(); closePrem(); updatePremUI();
  showToast('🎉 ¡Drakón Pro activado! Disfruta sin límites.');
  ['vocabLock','debateLock','storyLock','roleplayLock'].forEach(id=>{ const el=document.getElementById(id); if(el) el.style.display='none'; });
  renderThemeGrid(); renderChars();
}
function updatePremUI(){
  const pp=document.getElementById('planPill'); if(pp){ pp.className=`plan-pill ${state.isPremium?'plan-pro':'plan-free'}`; pp.textContent=state.isPremium?'🔥 Drakón Pro · Activo':'🐾 Plan Gratis · Mejorar'; }
  const pl=document.getElementById('planLbl'); if(pl) pl.textContent=state.isPremium?'Pro':'Gratis';
  if(state.isPremium){ ['vocabLock','debateLock','storyLock','roleplayLock'].forEach(id=>{ const el=document.getElementById(id); if(el) el.style.display='none'; }); }
  updateAIBar();
}

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

