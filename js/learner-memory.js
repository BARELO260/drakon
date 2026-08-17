/* Learner memory: compact, editable facts that personalize the tutor. */
function createLearnerMemory(){
  return {
    name:'', goal:'', interests:[], strengths:[], focusAreas:[],
    recentLessons:[], situations:[], corrections:[], updatedAt:null
  };
}

function ensureLearnerMemory(){
  const base=createLearnerMemory();
  state.learnerMemory=Object.assign(base,state.learnerMemory||{});
  ['interests','strengths','focusAreas','recentLessons','situations','corrections'].forEach(k=>{
    if(!Array.isArray(state.learnerMemory[k])) state.learnerMemory[k]=[];
  });
  return state.learnerMemory;
}

function uniqueRecent(items, value, limit){
  const clean=String(value||'').trim(); if(!clean) return items||[];
  return [clean,...(items||[]).filter(x=>x.toLowerCase()!==clean.toLowerCase())].slice(0,limit);
}

function rememberLesson(lesson){
  const memory=ensureLearnerMemory();
  if(!lesson) return;
  memory.recentLessons=uniqueRecent(memory.recentLessons,`${lesson.level}: ${lesson.title}`,8);
  memory.updatedAt=Date.now();
}

function rememberSituation(situation, stage){
  const memory=ensureLearnerMemory();
  if(!situation) return;
  memory.situations=uniqueRecent(memory.situations,`${situation.name}${stage?` (${stage})`:''}`,6);
  memory.updatedAt=Date.now();
}

function rememberCorrection(text){
  const memory=ensureLearnerMemory();
  const match=String(text||'').match(/(?:CORRECCI[ÓO]N|CORRECTION):\s*["“]?([^"”\n]{3,120})/i);
  if(!match) return;
  memory.corrections=uniqueRecent(memory.corrections,match[1].trim(),6);
  memory.updatedAt=Date.now();
}

function rememberFocusArea(area){
  const memory=ensureLearnerMemory();
  memory.focusAreas=uniqueRecent(memory.focusAreas,area,6);
  memory.updatedAt=Date.now();
}

function memoryPrompt(){
  const m=ensureLearnerMemory();
  const facts=[];
  if(m.name) facts.push(`Name: ${m.name}`);
  if(m.goal) facts.push(`Goal: ${m.goal}`);
  if(m.interests.length) facts.push(`Interests: ${m.interests.join(', ')}`);
  if(m.focusAreas.length) facts.push(`Needs practice: ${m.focusAreas.join(', ')}`);
  if(m.recentLessons.length) facts.push(`Recent lessons: ${m.recentLessons.slice(0,4).join(' | ')}`);
  if(m.corrections.length) facts.push(`Recent corrections: ${m.corrections.slice(0,3).join(' | ')}`);
  return facts.length ? `\nLEARNER MEMORY (use naturally; never claim facts not listed):\n${facts.join('\n')}` : '';
}

function updateLearnerMemoryFromProfile(){
  const memory=ensureLearnerMemory();
  const name=document.getElementById('memoryName');
  const goal=document.getElementById('memoryGoal');
  const interests=document.getElementById('memoryInterests');
  if(name) memory.name=name.value.trim().slice(0,60);
  if(goal) memory.goal=goal.value.trim().slice(0,180);
  if(interests) memory.interests=interests.value.split(',').map(x=>x.trim()).filter(Boolean).slice(0,8);
  memory.updatedAt=Date.now(); save();
  if(typeof updateAllUI==='function') updateAllUI(); else renderLearnerMemory();
  showToast('🧠 Memoria de tu tutor actualizada');
}

function clearLearnerMemory(){
  if(!confirm('¿Borrar la memoria de aprendizaje guardada? Tu progreso de lecciones no se eliminará.')) return;
  state.learnerMemory=createLearnerMemory(); save();
  if(typeof updateAllUI==='function') updateAllUI(); else renderLearnerMemory();
  showToast('🧠 Memoria borrada');
}

function renderLearnerMemory(){
  const m=ensureLearnerMemory();
  const name=document.getElementById('memoryName'); if(name) name.value=m.name||'';
  const goal=document.getElementById('memoryGoal'); if(goal) goal.value=m.goal||'';
  const interests=document.getElementById('memoryInterests'); if(interests) interests.value=(m.interests||[]).join(', ');
  const summary=document.getElementById('memorySummary');
  if(summary){
    const bits=[];
    if(m.recentLessons.length) bits.push(`📚 ${m.recentLessons.slice(0,2).join(' · ')}`);
    if(m.focusAreas.length) bits.push(`🎯 Practicar: ${m.focusAreas.slice(0,3).join(', ')}`);
    if(m.corrections.length) bits.push(`✏️ Recuerda: ${m.corrections[0]}`);
    summary.textContent=bits.length?bits.join('\n'):'Tu tutor irá recordando tus lecciones, objetivos y áreas de práctica.';
  }
}
