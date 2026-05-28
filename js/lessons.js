/* ═══════════════════════════════════════
   lessons.js — lesson rendering, exercises, progress
   Dependencias: state.js, data.js, ui.js, audio.js
   Usado por: app.js
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   LESSONS
═══════════════════════════════════════ */
let currentLessons=[];
function getLessons(){
  const code=state.lang?.code||'EN';
  return buildLessons(code);
}
function renderLessons(){
  const container=document.getElementById('lessonsContent'); if(!container) return;
  const lessons=getLessons();
  const completed=new Set(state.lessonsCompleted);
  const nextUnlocked=lessons.find(l=>!completed.has(l.id));
  const groups={};
  lessons.forEach(l=>{ if(!groups[l.levelCode]) groups[l.levelCode]=[]; groups[l.levelCode].push(l); });
  let html=`<div style="font-family:var(--ff);font-size:15px;font-weight:800;color:var(--gold);margin-bottom:3px">${state.lang?.flag||'🌍'} Lecciones de ${state.lang?.name||'Idioma'}</div>
  <div style="font-size:11px;color:var(--muted);margin-bottom:12px">${lessons.length} lecciones · ${completed.size} completadas</div>`;
  Object.entries(groups).forEach(([code,grp])=>{
    const prem=grp[0].premium&&!state.isPremium;
    html+=`<div class="level-group"><div class="level-hdr">${grp[0].levelEmoji} ${code} — ${grp[0].levelName} ${prem?'🔒':''}</div><div>`;
    grp.forEach((les,i)=>{
      const done=completed.has(les.id);
      const isCurrent=nextUnlocked&&les.id===nextUnlocked.id;
      const locked=prem||(i>0&&!completed.has(grp[i-1].id)&&!isCurrent&&!done);
      const cls=`lesson-node${done?' done':''}${isCurrent?' current':''}${locked?' locked':''}`;
      html+=`${i>0?`<div class="lesson-conn ${completed.has(grp[i-1].id)?'done-conn':''}"></div>`:''}
        <div class="${cls}" onclick="${prem?'showPremModal()':locked?'':'startLesson(\''+les.id+'\')'}">
          <div class="lesson-bubble">${done?'✅':locked||prem?'🔒':les.icon}</div>
          <div style="flex:1"><div class="li-title">${les.globalNum}. ${les.title}</div>
          <div class="li-meta">${les.exercises.length} ejercicios · ${prem?'Pro':locked?'Bloqueado':'Disponible'}</div>
          <div class="li-xp">+${les.xp} XP</div></div>
          ${isCurrent?'<div style="font-size:18px">▶️</div>':''}
        </div>`;
    });
    html+=`</div></div>`;
  });
  container.innerHTML=html;
}

let curLesson=null, exIdx=0, exLives=3, exCorrect=0;
function startLesson(id){
  const les=getLessons().find(l=>l.id===id); if(!les) return;
  curLesson=les; exIdx=0; exLives=les.maxLives||3; exCorrect=0;
  state.prevScreen=state.screen;
  renderEx(); updateExProg(); goTo('screen-exercise');
  markActivity();
}
function updateExProg(){
  const pct=curLesson?(exIdx/curLesson.exercises.length*100):0;
  const f=document.getElementById('exFill'); if(f) f.style.width=pct+'%';
  const l=document.getElementById('livesEl'); if(l) l.textContent='❤️'.repeat(exLives)+'🖤'.repeat(Math.max(0,(curLesson?.maxLives||3)-exLives));
}
function renderEx(){
  const area=document.getElementById('exArea'); if(!area) return;
  if(!curLesson||exIdx>=curLesson.exercises.length){ showLessonComplete(); return; }
  const ex=curLesson.exercises[exIdx];
  const typeLabels={choice:'Selección múltiple',fill:'Completa la oración',pronun:'Pronunciación 🎙️'};
  let html=`<div class="ex-area"><div class="ex-type-tag">${typeLabels[ex.type]||ex.type}</div>
    <div class="ex-q">${ex.q}</div>
    ${ex.snippet?`<div class="ex-snip">${ex.snippet}</div>`:''}`;
  if(ex.type==='choice'){
    html+=`<div class="ex-opts">${ex.opts.map((o,i)=>`<button class="ex-opt" onclick="answerEx(${i})">${o}</button>`).join('')}</div>`;
  } else if(ex.type==='fill'){
    const isOpen = !ex.answer || ex.answer==='';
    html+=`<input class="ex-fill" id="fillIn" placeholder="${isOpen?'Escribe tu respuesta…':'Tu respuesta...'}" autocomplete="off"/>
           <button class="ex-submit" id="exSubmit" onclick="answerFill()">Verificar ✓</button>`;
  } else if(ex.type==='pronun'){
    html+=`<div class="pronun-ex">
      <div class="pronun-word">${ex.word}</div>
      <div class="pronun-phonetic">${ex.phonetic||''}</div>
      ${ex.tip?`<div style="font-size:11px;color:var(--muted);margin-bottom:12px">💡 ${ex.tip}</div>`:''}
      <div class="pronun-waveform" id="exWave" style="display:none">${Array.from({length:8},(_,i)=>`<span style="--wd:${.3+i*.07}s"></span>`).join('')}</div>
      <button class="pronun-mic-btn" id="exMicBtn" onclick="startPronunEx('${ex.word}','${ex.phonetic||''}')">🎙️ Pronunciar</button>
      <div class="pronun-status" id="pronunStatus">Toca el micrófono y pronuncia la palabra</div>
      <button onclick="skipPronunEx()" style="margin-top:14px;background:none;border:1.5px solid var(--border);border-radius:99px;padding:8px 22px;font-family:var(--ff);font-size:12px;font-weight:800;color:var(--muted);cursor:pointer">⏭ Saltar ejercicio</button>
    </div>`;
  }
  html+=`<div class="ex-fb" id="exFb"></div></div>`;
  area.innerHTML=html;
  if(ex.type==='fill') setTimeout(()=>document.getElementById('fillIn')?.focus(),80);
}
function answerEx(i){
  const ex=curLesson.exercises[exIdx];
  document.querySelectorAll('.ex-opt').forEach(o=>o.disabled=true);
  const ok=i===ex.correct;
  document.querySelectorAll('.ex-opt')[i].classList.add(ok?'ok':'no');
  if(!ok&&ex.correct!==undefined) document.querySelectorAll('.ex-opt')[ex.correct].classList.add('ok');
  if(!ok) exLives--; else exCorrect++;
  showExFb(ok,ex.exp,!ok&&ex.opts?`Correcto: "${ex.opts[ex.correct]}"`:'');
  if(state.sounds) playSound(ok?'correct':'wrong');
  updateExProg();
  if(exLives<=0){ setTimeout(()=>failLesson(),1300); return; }
  setTimeout(()=>{ exIdx++; renderEx(); },1500);
}
function answerFill(){
  const ex=curLesson.exercises[exIdx];
  const inp=document.getElementById('fillIn'); if(!inp) return;
  const val = inp.value.trim();
  if(!val){ inp.focus(); return; } // don't submit empty
  inp.disabled=true; const btn=document.getElementById('exSubmit'); if(btn) btn.disabled=true;

  // Open-ended exercise (no fixed answer) — accept anything non-empty
  if(!ex.answer || ex.answer===''){
    exCorrect++;
    inp.style.borderColor='var(--mint)';
    showExFb(true, ex.exp||'¡Bien hecho! Practica usando esta palabra en oraciones reales.','');
    if(state.sounds) playSound('correct');
    updateExProg();
    setTimeout(()=>{ exIdx++; renderEx(); },1600);
    return;
  }

  const ok=val.toLowerCase()===ex.answer.toLowerCase();
  if(!ok) exLives--; else exCorrect++;
  inp.style.borderColor=ok?'var(--mint)':'var(--coral)';
  showExFb(ok,ex.exp,!ok?`Respuesta: "${ex.answer}"`:'');
  if(state.sounds) playSound(ok?'correct':'wrong');
  updateExProg();
  if(exLives<=0){ setTimeout(()=>failLesson(),1300); return; }
  setTimeout(()=>{ exIdx++; renderEx(); },1600);
}
function showExFb(ok,exp,extra=''){
  const fb=document.getElementById('exFb'); if(!fb) return;
  fb.className=`ex-fb ${ok?'ok':'no'}`;
  fb.innerHTML=`${ok?'✅ ¡Correcto!':'❌ Incorrecto'} — ${exp||''}${extra?'<br>'+extra:''}`;
}
function failLesson(){
  document.getElementById('exArea').innerHTML=`<div class="lc-wrap">
    <span style="font-size:48px">💔</span>
    <div class="lc-title" style="color:var(--coral)">¡Sin vidas!</div>
    <div style="font-size:12px;color:var(--muted)">¡No te rindas! La práctica hace al maestro.</div>
    <button class="lc-btn" style="background:linear-gradient(135deg,var(--coral),#9f1239);margin-top:4px" onclick="startLesson('${curLesson.id}')">Intentar de nuevo 🔄</button>
    <button style="margin-top:8px;background:var(--card);border:none;color:var(--muted);font-family:var(--ff);font-size:13px;cursor:pointer;padding:11px 28px;border-radius:99px" onclick="exitEx()">Salir</button>
  </div>`;
}
function showLessonComplete(){
  if(!state.lessonsCompleted.includes(curLesson.id)){
    state.lessonsCompleted.push(curLesson.id);
    gainXP(curLesson.xp);
    state.missions.forEach((m,i)=>{ if(m.type==='lessons'&&!m.done) completeMission(i,false); });
    checkAchievements(); save(); renderLessons();
  }
  const stars=exCorrect>=curLesson.exercises.length?'⭐⭐⭐':exCorrect>curLesson.exercises.length*.6?'⭐⭐':'⭐';
  document.getElementById('exArea').innerHTML=`<div class="lc-wrap">
    <span class="lc-stars">${stars}</span>
    <div class="lc-title">¡Lección completa!</div>
    <div class="lc-stats">
      <div class="lcs"><div class="lcs-v">${exCorrect}/${curLesson.exercises.length}</div><div class="lcs-l">Correctas</div></div>
      <div class="lcs"><div class="lcs-v">+${curLesson.xp}</div><div class="lcs-l">XP</div></div>
      <div class="lcs"><div class="lcs-v">${exLives}/${curLesson.maxLives||3}</div><div class="lcs-l">Vidas</div></div>
    </div>
    <button class="lc-btn" onclick="exitEx()">¡Continuar! 🚀</button>
  </div>`;
  if(state.sounds) playSound('complete');
}
function skipPronunEx(){
  // Stop any active mic
  if(window.recognition) try{ window.recognition.stop(); }catch(e){}
  if(window.mediaRecorder && window.mediaRecorder.state!=='inactive') try{ window.mediaRecorder.stop(); }catch(e){}
  isListening = false;
  const btn = document.getElementById('exMicBtn'); if(btn){ btn.classList.remove('listening'); btn.textContent='🎙️ Pronunciar'; }
  const wave = document.getElementById('exWave'); if(wave) wave.style.display='none';
  // Count as correct (skipped, not wrong) — don't penalize
  showExFb(true, `Ejercicio saltado. La palabra es: "${curLesson?.exercises?.[exIdx]?.word||''}"`, '');
  updateExProg();
  setTimeout(()=>{ exIdx++; renderEx(); }, 1400);
}
function exitEx(){ goTo('screen-main'); switchTab('lessons'); }

