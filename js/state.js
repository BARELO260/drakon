/* ═══════════════════════════════════════
   state.js — state object, save/load, localStorage
   Dependencias: ninguna (debe cargarse primero)
   Usado por: todos los módulos
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
const DEF_MISSIONS = ()=>([
  {icon:'💬',name:'Primer chat',desc:'Envía 3 mensajes con la IA',reward:'+20 XP',done:false,type:'messages',target:3},
  {icon:'✏️',name:'Detective de errores',desc:'Recibe 2 correcciones',reward:'+15 XP',done:false,type:'corrections',target:2},
  {icon:'📚',name:'Lección del día',desc:'Completa 1 lección',reward:'+25 XP',done:false,type:'lessons',target:1},
  {icon:'🔥',name:'Mantén la racha',desc:'Practica hoy',reward:'+10 XP',done:false,type:'daily',target:1},
]);

const XP_TABLE=[
  {min:0,max:150,label:'A1',next:150},{min:150,max:400,label:'A1+',next:400},
  {min:400,max:800,label:'A2',next:800},{min:800,max:1400,label:'A2+',next:1400},
  {min:1400,max:2200,label:'B1',next:2200},{min:2200,max:3400,label:'B1+',next:3400},
  {min:3400,max:5000,label:'B2',next:5000},{min:5000,max:7200,label:'B2+',next:7200},
  {min:7200,max:10500,label:'C1',next:10500},{min:10500,max:15000,label:'C1+',next:15000},
  {min:15000,max:999999,label:'C2',next:20000},
];

const state = {
  screen:'screen-intro', prevScreen:null,
  lang:null, charId:'dragon', theme:'dark',
  nativeLang: null,
  groqKey: null,
  quizDone: false,
  xp:0, streak:0, totalMessages:0,
  lastActiveDate:null,   // 'YYYY-MM-DD' local date
  lastMsgDate:null, msgsToday:0,
  correctionsToday:0, situationsToday:0,
  isPremium:false, userLevel:'A1',
  chatMode:'free', chatSituation:null, chatHistory:[],
  chatSessionId: null,
  ttsEnabled:false, savedChats:[],
  missions:DEF_MISSIONS(),
  lessonsCompleted:[], 
  notifs:false, sounds:true, musicEnabled:true,
  achievements:[
    {icon:'🔥',name:'Primera llama',desc:'Envía tu primer mensaje',badge:'bg-gold',earned:false},
    {icon:'💬',name:'Conversador',desc:'20 mensajes enviados',badge:'bg-silver',earned:false},
    {icon:'⭐',name:'Estrella',desc:'Alcanza 500 XP',badge:'bg-gold',earned:false},
    {icon:'🌍',name:'Viajero',desc:'Practica 3 situaciones',badge:'bg-silver',earned:false},
    {icon:'🏆',name:'Racha Maestra',desc:'7 días seguidos',badge:'bg-gold',earned:false},
    {icon:'📚',name:'Estudioso',desc:'Completa 10 lecciones',badge:'bg-silver',earned:false},
    {icon:'🎓',name:'Nivel B1',desc:'Sube a nivel B1',badge:'bg-gold',earned:false},
    {icon:'💎',name:'Nivel C1',desc:'Sube a nivel C1',badge:'bg-coral',earned:false},
    {icon:'🔥🔥',name:'Racha Legendaria',desc:'30 días seguidos',badge:'bg-coral',earned:false},
    {icon:'🌟',name:'1000 XP',desc:'Alcanza 1000 XP',badge:'bg-gold',earned:false},
  ],
};

/* ═══════════════════════════════════════
   PERSISTENCE
═══════════════════════════════════════ */
function load(){
  try{
    const s=JSON.parse(localStorage.getItem('drakon_pwa')||'{}');
    if(s.xp===undefined) return;
    Object.assign(state,s);
    loadGroqKey(); // double-layer: also check dedicated localStorage key
    const today=getLocalDate();
    // Streak: reset if last active was not yesterday or today
    if(state.lastActiveDate && state.lastActiveDate!==today && state.lastActiveDate!==getYesterday()){
      state.streak=0;
    }
    // Daily reset
    if(state.lastMsgDate!==today){
      state.msgsToday=0; state.lastMsgDate=today;
      state.correctionsToday=0; state.situationsToday=0;
      state.missions=DEF_MISSIONS();
    }
  }catch(e){}
}

/* Local date — uses device timezone (not UTC) */
function getLocalDate(){
  const d=new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function getYesterday(){
  const d=new Date(); d.setDate(d.getDate()-1);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

/* Mark activity and update streak */
function markActivity(){
  const today=getLocalDate();
  if(state.lastActiveDate===today) return; // already counted today
  if(state.lastActiveDate===getYesterday()){
    state.streak++; // extend streak
  } else {
    state.streak=1; // start new streak
  }
  state.lastActiveDate=today;
  updateStreakUI();
  if(state.streak>0 && state.streak%7===0) showToast(`🏆 ¡${state.streak} días de racha! ¡Increíble!`);
  save();
}

/* Midnight reset using local time */
function scheduleMidnightReset(){
  const now=new Date();
  const tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0);
  const msUntilMidnight=tomorrow-now;
  setTimeout(()=>{
    // Check if streak should die
    const today=getLocalDate();
    if(state.lastActiveDate && state.lastActiveDate!==today && state.lastActiveDate!==getYesterday()){
      if(state.streak>0){
        state.streak=0; updateStreakUI(); save();
        showToast('💔 Tu racha se reinició. ¡Practica hoy!');
      }
    }
    // Reset daily counts
    state.msgsToday=0; state.correctionsToday=0; state.situationsToday=0;
    state.lastMsgDate=today; state.missions=DEF_MISSIONS();
    renderMissions(); updateAIBar(); save();
    scheduleMidnightReset(); // schedule next day
  }, msUntilMidnight);
}

function getTimeUntilMidnight(){
  const now=new Date();
  const midnight=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0);
  const diff=midnight-now;
  const h=Math.floor(diff/3600000);
  const m=Math.floor((diff%3600000)/60000);
  return `${h}h ${m}m`;
}

