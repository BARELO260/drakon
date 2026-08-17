/* ═══════════════════════════════════════
   chat.js — AI chat, saved chats, chat modes, Groq API calls
   Dependencias: state.js, data.js, audio.js, ui.js
   NOTA: Los prompts de IA están en sendChatInternal(). No modificar sin pruebas.
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   SAVED CHATS
═══════════════════════════════════════ */
function autoNameChat(history, mode, sit){
  const modeNames={free:'Chat libre',grammar:'Gramática',vocab:'Vocabulario',debate:'Debate',pronunciation:'Pronunciación',story:'Historia',roleplay:'Roleplay',situation:sit?.name||'Situación'};
  const base = modeNames[mode] || 'Chat';
  const langName = state.lang?.name || '';
  // Take first user message as topic
  const first = history.find(m => m.role==='user');
  if(first && first.content.length > 3){
    const snippet = first.content.slice(0,30).replace(/\n/g,' ').trim();
    return `${langName} · ${base}: ${snippet}${first.content.length>30?'…':''}`;
  }
  const now = new Date();
  return `${langName} · ${base} · ${now.getDate()}/${now.getMonth()+1} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
}

// Auto-save is called after every AI reply — updates existing session or creates new
function autoSaveChat(){
  if(!state.chatHistory || state.chatHistory.length < 2) return; // need at least 1 exchange
  if(!state.savedChats) state.savedChats = [];
  // Use chatSessionId to update same session rather than creating duplicates
  const existing = state.savedChats.findIndex(c => c.sessionId === state.chatSessionId);
  const entry = {
    sessionId: state.chatSessionId,
    id: existing >= 0 ? state.savedChats[existing].id : Date.now(),
    name: autoNameChat(state.chatHistory, state.chatMode, state.chatSituation),
    mode: state.chatMode,
    lang: state.lang?.code || 'EN',
    langName: state.lang?.name || '',
    date: new Date().toISOString(),
    messages: state.chatHistory.slice(),
  };
  if(existing >= 0){
    state.savedChats[existing] = entry; // update in place
  } else {
    state.savedChats.unshift(entry);
    if(state.savedChats.length > 60) state.savedChats = state.savedChats.slice(0,60);
  }
  save();
}

function saveCurrentChat(){
  if(!state.chatHistory || state.chatHistory.length < 2){
    showToast('⚠️ Aún no hay mensajes para guardar'); return;
  }
  autoSaveChat();
  showToast('💾 Chat guardado correctamente');
}

function renderSavedChats(){
  const list = document.getElementById('savedChatsList'); if(!list) return;
  const chats = (state.savedChats||[]).filter(c=>c&&c.messages&&c.messages.length>=2);
  if(!chats.length){
    list.innerHTML=`<div style="text-align:center;padding:32px 20px;color:var(--muted);font-size:13px;line-height:1.8">
      📭 Aún no tienes chats guardados.<br>
      <span style="font-size:11px;opacity:.7">Ve a la pestaña 🤖 IA Chat para empezar una conversación nueva.</span>
      <div style="margin-top:16px"><button onclick="navTo('home');switchTab('ai')" style="background:var(--card);border:none;border-radius:var(--radius-full);padding:11px 22px;font-size:12px;font-weight:700;color:var(--gold);cursor:pointer;font-family:var(--fh)">Ir a IA Chat →</button></div>
    </div>`;
    return;
  }
  const modeIcons={free:'💬',grammar:'📖',vocab:'🔤',debate:'🏆',pronunciation:'🎙️',story:'📝',roleplay:'🎬',situation:'🎭'};
  list.innerHTML = chats.map((c,i)=>{
    const d = new Date(c.date);
    const isToday = d.toDateString()===new Date().toDateString();
    const dateStr = isToday
      ? `Hoy ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
      : `${d.getDate()}/${d.getMonth()+1} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    const userMsgs = c.messages.filter(m=>m.role==='user').length;
    const preview = (c.messages.find(m=>m.role==='user')?.content||'').replace(/\n/g,' ').slice(0,55);
    const langFlag = LANGS.find(l=>l.code===c.lang)?.flag||'🌐';
    return `<div class="sc-item" onclick="viewSavedChat(${i})">
      <div class="sc-icon">${modeIcons[c.mode]||'💬'}</div>
      <div class="sc-info">
        <div class="sc-title">${c.name||'Chat sin nombre'}</div>
        <div class="sc-preview">${preview}${preview.length>=55?'…':''}</div>
        <div class="sc-meta">${langFlag} ${c.langName||c.lang||''} · ${userMsgs} msg · ${dateStr}</div>
      </div>
      <button class="sc-del" onclick="deleteSavedChat(event,${i})" title="Eliminar">🗑</button>
    </div>`;
  }).join('');
}

function clearAllChats(){
  if(!state.savedChats||!state.savedChats.length) return;
  if(!confirm('¿Eliminar todos los chats guardados?')) return;
  state.savedChats=[]; save(); renderSavedChats();
  showToast('🗑 Todos los chats eliminados');
}

let _histChatIdx = -1; // index of currently viewed saved chat

function viewSavedChat(i){
  const c = (state.savedChats||[])[i]; if(!c) return;
  _histChatIdx = i;
  const tEl = document.getElementById('chatHistoryTitle'); if(tEl) tEl.textContent = c.name||'Chat';
  renderHistoryMsgs(c.messages);
  goTo('screen-chat-history');
  if(typeof mascotReset==='function') mascotReset();
  setTimeout(()=>{
    const area = document.getElementById('chatHistoryMsgs');
    if(area) area.scrollTop = area.scrollHeight;
  }, 150);
}

function renderHistoryMsgs(messages){
  const area = document.getElementById('chatHistoryMsgs'); if(!area) return;
  let lastAIHtml = '';
  area.innerHTML = messages.map(m => {
    if(m.role==='user'){
      return `<div class="msg user"><div class="bubble user">${m.content.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div></div>`;
    } else {
      let html = m.content
        .replace(/\[\/?(L)\]/g,'')
        .replace(/</g,'&lt;')
        .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
        .replace(/✏️ CORRECCIÓN:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECCIÓN:$1</div>')
        .replace(/✏️ CORRECTION:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECTION:$1</div>')
        .replace(/\n/g,'<br>');
      lastAIHtml = html;
      return '<div class="msg"><div class="bubble ai">'+html+'</div></div>';
    }
  }).join('');
  if(lastAIHtml && typeof mascotSetBubbleHTML==='function') mascotSetBubbleHTML(lastAIHtml);
}

function continueFromHistory(){
  // Load this saved chat as the active chat and open the main chat screen
  const c = (state.savedChats||[])[_histChatIdx]; if(!c) return;
  state.chatMode = c.mode || 'free';
  state.chatHistory = c.messages.slice();
  state.chatSituation = null;
  state.chatSessionId = c.sessionId || Date.now();
  if(c.lang) {
    const langObj = LANGS.find(l=>l.code===c.lang);
    if(langObj) state.lang = langObj;
  }
  goTo('screen-chat');
  if(typeof mascotReset==='function') mascotReset();
  const area = document.getElementById('chatMsgs'); if(!area) return;
  area.innerHTML = '';
  let lastAIHtml = '';
  for(const m of state.chatHistory){
    if(m.role==='user'){
      const d = document.createElement('div'); d.className='msg user';
      d.innerHTML=`<div class="bubble user">${m.content.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>`;
      area.appendChild(d);
    } else {
      const displayText = m.content.replace(/\[\/?(L)\]/g,'');
      let html=displayText.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
        .replace(/✏️ CORRECCIÓN:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECCIÓN:$1</div>')
        .replace(/✏️ CORRECTION:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECTION:$1</div>')
        .replace(/\n/g,'<br>');
      lastAIHtml = html;
      const d=document.createElement('div'); d.className='msg';
      d.innerHTML='<div class="bubble ai">'+html+'</div>';
      area.appendChild(d);
    }
  }
  if(lastAIHtml && typeof mascotSetBubbleHTML==='function') mascotSetBubbleHTML(lastAIHtml);
  setTimeout(()=>{ area.scrollTop=area.scrollHeight; }, 120);
  updateNoKeyBanner();
}

async function sendHistoryMsg(){
  const inp = document.getElementById('histChatInput'); if(!inp) return;
  const text = inp.value.trim(); if(!text) return;
  const c = (state.savedChats||[])[_histChatIdx]; if(!c) return;
  const errBar = document.getElementById('histChatErr');
  if(errBar) errBar.style.display='none';

  // Add user message to saved chat
  c.messages.push({role:'user', content:text});
  inp.value=''; inp.style.height='';
  renderHistoryMsgs(c.messages);
  const area = document.getElementById('chatHistoryMsgs');
  if(area) area.scrollTop = area.scrollHeight;

  // Load this into active state temporarily for AI call
  const prevHistory = state.chatHistory;
  const prevMode = state.chatMode;
  state.chatHistory = c.messages.slice();
  state.chatMode = c.mode || 'free';
  if(c.lang){ const l=LANGS.find(lg=>lg.code===c.lang); if(l) state.lang=l; }

  // Call AI
  const groqKey = state.groqKey;
  if(!groqKey){
    if(errBar){ errBar.textContent='🔑 Configura tu API key de Groq en Ajustes'; errBar.style.display='block'; }
    c.messages.pop();
    state.chatHistory = prevHistory; state.chatMode = prevMode;
    renderHistoryMsgs(c.messages);
    if(typeof mascotIdle==='function') mascotIdle();
    return;
  }

  // Show typing indicator (in the mouth bubble, not the log)
  if(typeof mascotSetBubbleTyping==='function') mascotSetBubbleTyping(true);

  const prompt = buildPrompt();
  const messages = [{role:'system',content:prompt}];
  for(const m of state.chatHistory) messages.push({role:m.role==='user'?'user':'assistant',content:m.content});

  let aiText = '';
  try{
    const models = ['llama-3.3-70b-versatile','llama-3.1-8b-instant','gemma2-9b-it'];
    for(const model of models){
      const resp = await Promise.race([
        fetch('https://api.groq.com/openai/v1/chat/completions',{
          method:'POST',
          headers:{'Content-Type':'application/json','Authorization':`Bearer ${groqKey}`},
          body:JSON.stringify({model,messages,max_tokens:900,temperature:0.7})
        }),
        new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),28000))
      ]);
      if(resp.status===401){ throw new Error('auth'); }
      if(!resp.ok){ continue; }
      const data = await resp.json();
      aiText = data?.choices?.[0]?.message?.content?.trim()||'';
      if(aiText) break;
    }
  } catch(e){
    if(typeof mascotSetBubbleTyping==='function') mascotSetBubbleTyping(false);
    if(errBar){ errBar.textContent=e.message==='auth'?'🔑 API key inválida':'⚠️ Error al conectar con la IA. Intenta de nuevo.'; errBar.style.display='block'; }
    c.messages.pop();
    state.chatHistory=prevHistory; state.chatMode=prevMode;
    renderHistoryMsgs(c.messages);
    if(typeof mascotIdle==='function') mascotIdle();
    return;
  }

  if(typeof mascotSetBubbleTyping==='function') mascotSetBubbleTyping(false);
  state.chatHistory=prevHistory; state.chatMode=prevMode;

  if(!aiText){ if(errBar){ errBar.textContent='⚠️ Sin respuesta. Intenta de nuevo.'; errBar.style.display='block'; } c.messages.pop(); renderHistoryMsgs(c.messages); if(typeof mascotIdle==='function') mascotIdle(); return; }

  c.messages.push({role:'assistant',content:aiText});
  c.date = new Date().toISOString();
  state.savedChats[_histChatIdx] = c;
  save();
  renderHistoryMsgs(c.messages);
  if(area) setTimeout(()=>{ area.scrollTop=area.scrollHeight; },80);
  if(typeof mascotReactToMessage==='function') mascotReactToMessage(aiText);
  if(state.ttsEnabled) speakText(aiText);
}

function deleteSavedChat(ev, i){
  ev.stopPropagation();
  state.savedChats.splice(i,1);
  save(); renderSavedChats();
  showToast('🗑 Chat eliminado');
}

function levenshtein(a, b){
  const m=a.length, n=b.length;
  const dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++) dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}

/* ═══════════════════════════════════════
   AI CHAT
═══════════════════════════════════════ */
const FREE_LIMIT=25;
const SITUATIONS=[
  {icon:'✈️',name:'En el aeropuerto',desc:'Check-in, seguridad y cambios',level:'easy',prompt:'You are an airport agent. The learner needs to check in, clear security, find a gate, or solve a flight problem. Speak in {LANG}.',steps:['Encontrar el mostrador','Hacer check-in','Pasar seguridad','Ubicar la puerta'],phrases:['I would like to check in, please.','Where is the security checkpoint?','Which gate does my flight leave from?','My flight has been delayed. What should I do?']},
  {icon:'🍽️',name:'En el restaurante',desc:'Pedir, alergias y cuenta',level:'easy',prompt:'You are a restaurant server. Help the learner order, ask about ingredients, and pay. Speak in {LANG}.',steps:['Pedir una mesa','Preguntar por el menú','Hacer el pedido','Pedir la cuenta'],phrases:['Could I see the menu, please?','Does this contain nuts?','I would like to order this.','Could we have the bill, please?']},
  {icon:'🏨',name:'En el hotel',desc:'Check-in y solicitudes',level:'easy',prompt:'You are a hotel receptionist. Help the learner check in and resolve practical requests. Speak in {LANG}.',steps:['Confirmar reserva','Recibir la llave','Pedir ayuda','Resolver un problema'],phrases:['I have a reservation under my name.','What time is breakfast?','Could I have an extra towel?','There is a problem with my room.']},
  {icon:'🛒',name:'De compras',desc:'Precios, tallas y cambios',level:'med',prompt:'You are a helpful shop assistant. The learner is buying clothes or an item and may need a size or exchange. Speak in {LANG}.',steps:['Explicar qué busca','Preguntar talla o color','Probar/comparar','Pagar o cambiar'],phrases:['I am looking for this in a different size.','May I try this on?','How much does it cost?','Can I return or exchange it?']},
  {icon:'🏥',name:'En el médico',desc:'Describir síntomas',level:'med',prompt:'You are a medical receptionist or clinician. Help the learner describe non-emergency symptoms and understand next steps. Speak in {LANG}. Do not diagnose; encourage urgent local care for emergencies.',steps:['Pedir una cita','Describir el síntoma','Decir duración','Entender indicaciones'],phrases:['I need to see a doctor.','I have had this pain for two days.','I am allergic to this medicine.','Is this an emergency?']},
  {icon:'💼',name:'Entrevista de trabajo',desc:'Preguntas profesionales',level:'hard',prompt:'You are a professional job interviewer. Ask realistic, progressively harder questions and give brief feedback. Speak in {LANG}.',steps:['Presentarse','Explicar experiencia','Hablar de logros','Hacer preguntas'],phrases:['I have experience in this area.','One of my strengths is…','I am proud of this achievement.','Could you tell me more about the role?']},
  {icon:'📞',name:'Llamada telefónica',desc:'Servicio al cliente',level:'med',prompt:'You are a customer-service agent on a phone call. Ask concise clarifying questions and help the learner make a request. Speak in {LANG}.',steps:['Identificarse','Explicar el problema','Dar detalles','Confirmar solución'],phrases:['I am calling about…','Could you repeat that, please?','My reference number is…','What are the next steps?']},
  {icon:'🎓',name:'En la universidad',desc:'Matrícula y clases',level:'hard',prompt:'You are an academic advisor. Help the learner ask about enrollment, classes and requirements. Speak in {LANG}.',steps:['Explicar objetivo','Preguntar requisitos','Elegir curso','Confirmar fechas'],phrases:['I would like information about this course.','What are the entry requirements?','When does enrollment close?','Could you explain the schedule?']},
  {icon:'🎉',name:'Evento social',desc:'Conversación casual',level:'med',prompt:'You met the learner at a social event. Have a natural, friendly conversation and introduce small talk challenges. Speak in {LANG}.',steps:['Saludar','Romper el hielo','Hablar de intereses','Despedirse'],phrases:['How do you know the host?','What do you like to do in your free time?','That sounds interesting!','It was lovely talking to you.']},
  {icon:'🚇',name:'Transporte público',desc:'Rutas y horarios',level:'easy',prompt:'You are a public-transport employee. Help the learner find a route, ticket or platform. Speak in {LANG}.',steps:['Decir destino','Preguntar ruta','Comprar boleto','Confirmar parada'],phrases:['How can I get to…?','Which platform do I need?','Where can I buy a ticket?','Does this train stop at…?']},
];
function renderSituations(){
  const g=document.getElementById('sitGrid'); if(!g) return;
  g.innerHTML=SITUATIONS.map((s,i)=>`
    <div class="sit-card" onclick="openSituation(${i})">
      <span class="sit-lv ${s.level==='easy'?'easy':s.level==='med'?'med':'hard'}">${s.level==='easy'?'Fácil':s.level==='med'?'Medio':'Difícil'}</span>
      <span class="sit-ic">${s.icon}</span>
      <div class="sit-n">${s.name}</div>
      <div class="sit-d">${s.desc}</div>
    </div>`).join('');
}
function openSituation(i){
  const s=SITUATIONS[i]; const g=document.getElementById('sitGrid'); if(!s||!g) return;
  g.innerHTML=`<section class="sit-planner"><button class="sit-back" onclick="renderSituations()">← Todas las situaciones</button><div class="sit-planner-hero"><span>${s.icon}</span><div><h2>${s.name}</h2><p>${s.desc}</p></div></div><div class="sit-plan-block"><h3>1. Prepárate</h3><ol>${s.steps.map(x=>`<li>${x}</li>`).join('')}</ol></div><div class="sit-plan-block"><h3>Frases para usar ahora</h3>${s.phrases.map((x,n)=>`<button class="sit-phrase" onclick="copySituationPhrase(${i},${n})"><span>${x}</span><b>Copiar</b></button>`).join('')}</div><div class="sit-plan-actions"><button class="sit-action sit-action-secondary" onclick="startSit(${i},'prepare')">🧭 Enséñame primero</button><button class="sit-action" onclick="startSit(${i},'practice')">🎭 Practicar con IA</button><button class="sit-action sit-action-urgent" onclick="startSit(${i},'live')">⚡ Estoy allí ahora</button></div></section>`;
}
function copySituationPhrase(i,n){
  const phrase=SITUATIONS[i]?.phrases?.[n]; if(!phrase) return;
  navigator.clipboard?.writeText(phrase).then(()=>showToast('📋 Frase copiada')).catch(()=>showToast(`📋 ${phrase}`));
}
function startSit(i,stage='practice'){
  const sit={...SITUATIONS[i],stage}; state.situationsToday++; state.chatSituation=sit;
  if(typeof rememberSituation==='function') rememberSituation(sit,stage);
  goToChat('situation',sit); checkMissions(); save();
}

function checkPrem(mode){ if(state.isPremium){ goToChat(mode); return; } showPremModal(); }

function buildPrompt(){
  const ch=getChar();
  const lang=state.lang?.name||'Inglés';
  const native=state.lang?.native||'English';
  const level=state.userLevel||'A1';
  const nativeLangName = NATIVE_LANGS.find(l=>l.code===state.nativeLang)?.uiName || 'Spanish';
  const persona={
    dragon: 'You are DRAKÓN, an intense fire dragon. Motivating, passionate, never gives up.',
    wizard: 'You are MERLINGO, a wise wizard who explains grammar with magical metaphors.',
    fox:    'You are ZORREK, a clever fox who specializes in idiomatic expressions and slang.',
    robot:  'You are SYNTINATOR, a precise analytical robot who loves grammar structure.',
    alien:  'You are MARSHAL, a curious alien fascinated by human languages, learning alongside the user.',
    phoenix:'You are AZHAR FLAMEBEARD, a golden phoenix who turns every mistake into strength.',
    ninja:  'You are KENJIRO, a linguistic ninja who trains the mind for fluency with discipline.',
    panda:  'You are BAO, a calm zen panda who teaches without stress, slowly and steadily.',
    triton: 'You are BARÓN TRITÓN, a medieval knight shark. Honorable, formal, eloquent, and chivalrous.',
    axonic: 'You are AXÓNIC, an axolotl DJ. Vibrant, creative, full of cultural energy and fun.',
  }[state.charId]||'You are DRAKÓN, a language tutor dragon.';

  // Core rules that NEVER change regardless of mode
  const langCode = state.lang?.lang?.split('-')[0]?.toUpperCase() || 'EN';
  const coreRules = `
ABSOLUTE RULES (non-negotiable):
1. Always speak to the user in ${nativeLangName} for instructions, explanations, and context.
2. Examples, exercises, model phrases, and practice conversation go in ${native} (${lang}).
3. If the user writes in ${native} and makes an error: correct it in ${native} using the format → ✏️ CORRECTION: "[correct version in ${native}]" (very brief explanation in ${nativeLangName}).
4. NEVER correct errors the user makes in ${nativeLangName}. Only correct errors in ${native}.
5. NEVER respond in ${nativeLangName} unless you are giving an explanation or instruction.
6. If the user writes in ${nativeLangName}, reply in ${nativeLangName} AND practice with them in ${native}.
7. Maximum 5 sentences per response. Be concise.
8. The user is learning ${lang} (level ${level}).
9. CONTENT POLICY (STRICT — never violate):
   - Never produce sexual, explicit, pornographic, or erotic content of any kind.
   - Never use homophobic, transphobic, racist, or discriminatory slurs or language.
   - Never make derogatory comments about any religion, ethnicity, gender, or sexual orientation.
   - Never generate hate speech, threats, or content that could harm a person or group.
   - If the user asks you to say, translate, or practice offensive/harmful words, politely decline and redirect to useful vocabulary.
   - You may discuss these topics academically if asked, but never reproduce harmful language directly.
   - Keep all content appropriate for users of all ages and backgrounds.`;

  if(state.chatMode==='situation'&&state.chatSituation){
    const sit=state.chatSituation;
    return `${persona} You are a ${lang} tutor in Drakón. Level: ${level}.
${sit.prompt.replace(/{LANG}/g,native)}
${coreRules}
SITUATION STAGE: ${sit.stage==='prepare'?'PREPARE: explain the four steps and model two essential phrases before roleplay.':sit.stage==='live'?'LIVE HELP: give the single most useful phrase first, then ask only one short clarifying question.': 'PRACTICE: run the interaction one step at a time; increase difficulty when the learner succeeds.'}
EXTRA FOR SITUATIONS: Play the indicated role, responding MAINLY in ${native}. After each exchange add [Useful vocab: word = translation in ${nativeLangName}]. Only correct errors in ${native}.${typeof memoryPrompt==='function'?memoryPrompt():''}`;
  }

  if(state.chatMode==='pronunciation'){
    return `${persona} Pronunciation specialist for ${lang}. Level: ${level}.
${coreRules}
PRONUNCIATION MODE: When the user writes a word in ${native}: 1) Show IPA /phonetic/ transcription. 2) Give 2-3 concrete tips. 3) Compare with sounds from ${nativeLangName} if helpful. Give explanations in ${nativeLangName}, examples in ${native}.`;
  }

  const modeInstructions={
    free:`Converse with the user practicing ${native}. Ask open questions to keep conversation going. Adapt vocabulary to level ${level}. Only correct errors in ${native}.`,
    grammar:`Analyze ${native} grammar in detail. Explain rules in ${nativeLangName} clearly. Use ✏️ CORRECTION for EVERY error in ${native}. Do NOT correct ${nativeLangName}.`,
    vocab:`Teach vocabulary in ${native} on the topic the user mentions. List 4-5 words in ${native} with phonetics and translation to ${nativeLangName}. Then use them in sentences in ${native}.`,
    debate:`Propose a debate topic and ask the user to argue in ${native}. Evaluate their argument. Suggest more sophisticated phrases in ${native}. Counter-argue to stimulate discussion.`,
    story:`Create a collaborative story. The user writes a sentence in ${native}, you continue in ${native}. Subtly correct errors. Make it exciting and fluid.`,
    roleplay:`Accept ANY roleplay scenario and develop it in ${native}. Stay in character. Correct errors at the end of the turn, not mid-roleplay.`,
  };

  return `${persona} You are a ${lang} tutor in Drakón. User level: ${level}.${typeof memoryPrompt==='function'?memoryPrompt():''}
${coreRules}
CURRENT MODE — ${(state.chatMode||'free').toUpperCase()}: ${modeInstructions[state.chatMode]||modeInstructions.free}
Always end with a brief practical exercise in ${native} or a question to keep the user practicing.`;
}
function goToChat(mode,sit){
  // Show Groq setup modal if key not configured yet
  if(!state.groqKey){
    // Store intended destination so we can launch it after setup
    state._pendingChatMode = mode;
    state._pendingChatSit = sit || null;
    showGroqModal();
    return;
  }
  _launchChat(mode, sit);
}

function _launchChat(mode,sit){
  state.chatMode=mode; state.chatHistory=[]; state.chatSituation=sit||null;
  state.chatSessionId = Date.now().toString(); // new session ID for each new chat
  const msgs=document.getElementById('chatMsgs'); if(msgs) msgs.innerHTML='';
  const eb=document.getElementById('chatErr'); if(eb) eb.style.display='none';
  const titles={free:'Conversación libre',grammar:'Gramática 📖',vocab:'Vocabulario 🔤',debate:'Debate 🏆',pronunciation:'Pronunciación 🎙️',story:'Crea una historia 📖',roleplay:'Roleplay 🎬',situation:sit?.name||'Situación'};
  const ct=document.getElementById('chatTitle'); if(ct) ct.textContent=titles[mode]||'Chat';
  const lp=document.getElementById('chatLangP'); if(lp) lp.textContent=state.lang?.code||'EN';
  goTo('screen-chat');
  if(typeof mascotReset==='function') mascotReset();
  const ch=getChar(); const lang=state.lang?.name||'inglés';
  const welcomes={
    free:`¡Hola! Soy ${ch.name}. ¿Cuéntame algo en ${lang}? Te ayudo a mejorar.`,
    grammar:`¡Modo gramática! 📖 Escríbeme cualquier frase en ${lang} y analizo cada detalle.`,
    vocab:`¡Aprendamos palabras! 🔤 Dime un tema y te enseño vocabulario esencial.`,
    debate:`¡Modo debate! 🏆 Argumenta en ${lang}. Primer tema: ¿La tecnología nos hace más o menos inteligentes?`,
    pronunciation:`¡Modo pronunciación! 🎙️ Escribe o habla una palabra en ${lang} y te digo cómo se pronuncia correctamente. También puedes usar el micrófono.`,
    story:`¡Creamos una historia juntos! 📖 Tú escribes la primera frase en ${lang} y yo continúo. ¿De qué quieres que trate?`,
    roleplay:`¡Roleplay activado! 🎬 Dime qué personaje debo ser y en qué escenario. Hablaremos en ${lang}.`,
    situation:`¡Perfecto! Seré tu interlocutor en: **${sit?.name}**. Comienza en ${lang} cuando quieras. 🎭`,
  };
  setTimeout(()=>addAIMsg(welcomes[mode]||welcomes.free),280);
}

async function sendChat(){
  const inp=document.getElementById('chatIn'); if(!inp) return;
  const text=inp.value.trim(); if(!text) return;
  inp.value='';
  if(!state.isPremium&&state.msgsToday>=FREE_LIMIT){ showPremModal(); return; }
  const sb=document.getElementById('sendBtn'); if(sb) sb.disabled=true;
  const eb=document.getElementById('chatErr'); if(eb) eb.style.display='none';
  addUserMsg(text);
  state.chatHistory.push({role:'user',content:text});
  await sendChatInternal();
  if(sb) sb.disabled=false;
  inp.focus();
}

