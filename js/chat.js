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
  const ch = getChar();
  area.innerHTML = messages.map(m => {
    if(m.role==='user'){
      return `<div class="msg user"><div class="av av-u">YO</div><div class="bubble user">${m.content.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div></div>`;
    } else {
      let html = m.content
        .replace(/\[\/?(L)\]/g,'')
        .replace(/</g,'&lt;')
        .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
        .replace(/✏️ CORRECCIÓN:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECCIÓN:$1</div>')
        .replace(/✏️ CORRECTION:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECTION:$1</div>')
        .replace(/\n/g,'<br>');
      return '<div class="msg"><div class="av"><img src="'+ch.img+'" style="width:26px;height:26px;object-fit:contain"></div><div class="bubble ai">'+html+'</div></div>';
    }
  }).join('');
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
  const ch = getChar();
  for(const m of state.chatHistory){
    if(m.role==='user'){
      const d = document.createElement('div'); d.className='msg user';
      d.innerHTML=`<div class="av av-u">YO</div><div class="bubble user">${m.content.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>`;
      area.appendChild(d);
    } else {
      const displayText = m.content.replace(/\[\/?(L)\]/g,'');
      let html=displayText.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
        .replace(/✏️ CORRECCIÓN:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECCIÓN:$1</div>')
        .replace(/✏️ CORRECTION:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECTION:$1</div>')
        .replace(/\n/g,'<br>');
      const d=document.createElement('div'); d.className='msg';
      d.innerHTML='<div class="av"><img src="'+ch.img+'" style="width:26px;height:26px;object-fit:contain"></div><div class="bubble ai">'+html+'</div>';
      area.appendChild(d);
    }
  }
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

  // Show typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className='msg'; typingDiv.id='histTyping';
  typingDiv.innerHTML='<div class="av"><img src="'+getChar().img+'" style="width:26px;height:26px;object-fit:contain"></div><div class="bubble ai typing-dots"><span></span><span></span><span></span></div>';
  if(area){ area.appendChild(typingDiv); area.scrollTop=area.scrollHeight; }

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
    document.getElementById('histTyping')?.remove();
    if(errBar){ errBar.textContent=e.message==='auth'?'🔑 API key inválida':'⚠️ Error al conectar con la IA. Intenta de nuevo.'; errBar.style.display='block'; }
    c.messages.pop();
    state.chatHistory=prevHistory; state.chatMode=prevMode;
    renderHistoryMsgs(c.messages);
    if(typeof mascotIdle==='function') mascotIdle();
    return;
  }

  document.getElementById('histTyping')?.remove();
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
  {icon:'✈️',name:'En el aeropuerto',desc:'Check-in, seguridad',level:'easy',prompt:'Eres agente de aeropuerto. El usuario hace check-in. Habla en {LANG}.'},
  {icon:'🍽️',name:'En el restaurante',desc:'Ordenar comida',level:'easy',prompt:'Eres mesero. El usuario ordena. Habla en {LANG}.'},
  {icon:'🏨',name:'En el hotel',desc:'Check-in, solicitudes',level:'easy',prompt:'Eres recepcionista. El usuario hace check-in. Habla en {LANG}.'},
  {icon:'🛒',name:'De compras',desc:'Precios, tallas',level:'med',prompt:'Eres vendedor. El usuario compra ropa. Habla en {LANG}.'},
  {icon:'🏥',name:'En el médico',desc:'Describir síntomas',level:'med',prompt:'Eres médico. El usuario describe síntomas. Habla en {LANG}.'},
  {icon:'💼',name:'Entrevista de trabajo',desc:'Preguntas profesionales',level:'hard',prompt:'Eres entrevistador serio. El usuario está en entrevista. Habla en {LANG}.'},
  {icon:'📞',name:'Llamada telefónica',desc:'Servicio al cliente',level:'med',prompt:'Eres operador de servicio. El usuario llama con solicitud. Habla en {LANG}.'},
  {icon:'🎓',name:'En la universidad',desc:'Matrícula, clases',level:'hard',prompt:'Eres consejero académico. El usuario pide info de cursos. Habla en {LANG}.'},
  {icon:'🎉',name:'Evento social',desc:'Conversación casual',level:'med',prompt:'Conociste al usuario en una fiesta. Conversa naturalmente en {LANG}.'},
  {icon:'🚇',name:'Transporte público',desc:'Rutas, horarios',level:'easy',prompt:'Eres empleado del metro. El usuario pide información. Habla en {LANG}.'},
];
function renderSituations(){
  const g=document.getElementById('sitGrid'); if(!g) return;
  g.innerHTML=SITUATIONS.map((s,i)=>`
    <div class="sit-card" onclick="startSit(${i})">
      <span class="sit-lv ${s.level==='easy'?'easy':s.level==='med'?'med':'hard'}">${s.level==='easy'?'Fácil':s.level==='med'?'Medio':'Difícil'}</span>
      <span class="sit-ic">${s.icon}</span>
      <div class="sit-n">${s.name}</div>
      <div class="sit-d">${s.desc}</div>
    </div>`).join('');
}
function startSit(i){ state.situationsToday++; state.chatSituation=SITUATIONS[i]; goToChat('situation',SITUATIONS[i]); checkMissions(); }

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
EXTRA FOR SITUATIONS: Play the indicated role, responding MAINLY in ${native}. After each exchange add [Useful vocab: word = translation in ${nativeLangName}]. Only correct errors in ${native}.`;
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

  return `${persona} You are a ${lang} tutor in Drakón. User level: ${level}.
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

