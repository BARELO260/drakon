/* ═══════════════════════════════════════════════════════════
   situations.js — Lógica de la sección "Situaciones"
   Dependencias: state.js, data.js, situations-data.js, lessons.js,
                 chat.js (buildPrompt/goToChat), audio.js (speakText),
                 ai-gateway.js (managedChat)
   ═══════════════════════════════════════════════════════════
   Los tres botones de cada situación ahora son tres experiencias
   distintas (ver requisitos del proyecto):

     🧭 Enséñame primero  → renderSituationLessons()  (screen-situation-lessons)
     🎭 Practicar con IA  → goToChat('situation', sit) (screen-chat, con fondo)
     ⚡ Estoy allí ahora  → openSituationLive()        (screen-situation-live)
                              ├─ 📷 Escanear   (screen-scan)
                              └─ 🎥 Videollamada (screen-livecall)
   ═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════
   1) GRID DE SITUACIONES Y PLANIFICADOR
═══════════════════════════════════════ */
function renderSituations(){
  const g=document.getElementById('sitGrid'); if(!g) return;
  g.innerHTML=SITUATIONS.map(s=>`
    <div class="sit-card" style="--sit-bg:url('${s.bg}')" onclick="openSituation('${s.key}')">
      <span class="sit-lv ${s.level==='easy'?'easy':s.level==='med'?'med':'hard'}">${s.level==='easy'?'Fácil':s.level==='med'?'Medio':'Difícil'}</span>
      <span class="sit-ic">${s.icon}</span>
      <div class="sit-n">${s.name}</div>
      <div class="sit-d">${s.desc}</div>
    </div>`).join('');
}

function _sitLessonProgressSummary(key){
  const lessons = getSituationLessons(key);
  if(!lessons.length) return null;
  const completedIds = (typeof state!=='undefined') ? (state.lessonsCompleted||[]) : [];
  const done = lessons.filter(l=>completedIds.includes(l.id)).length;
  return {done, total:lessons.length};
}

function openSituation(key){
  const s=getSituation(key); const g=document.getElementById('sitGrid'); if(!s||!g) return;
  state._activeSituation = key;
  const prog = _sitLessonProgressSummary(key);
  const progLabel = prog ? `${prog.done}/${prog.total} lecciones` : 'Lecciones en camino';
  g.innerHTML=`<section class="sit-planner" style="--sit-bg:url('${s.bg}')">
    <button class="sit-back" onclick="renderSituations()">← Todas las situaciones</button>
    <div class="sit-planner-hero">
      <div class="sit-planner-hero-bg"></div>
      <div class="sit-planner-hero-fg"><span>${s.icon}</span><div><h2>${s.name}</h2><p>${s.desc}</p></div></div>
    </div>
    <div class="sit-plan-block"><h3>1. Prepárate</h3><ol>${s.steps.map(x=>`<li>${x}</li>`).join('')}</ol></div>
    <div class="sit-plan-block"><h3>Frases para usar ahora</h3>${s.phrases.map((x,n)=>`<button class="sit-phrase" onclick="copySituationPhrase('${key}',${n})"><span>${x}</span><b>Copiar</b></button>`).join('')}</div>
    <div class="sit-plan-actions">
      <button class="sit-action sit-action-secondary" onclick="startSituationStage('${key}','prepare')">
        🧭 Enséñame primero <small>${progLabel}</small>
      </button>
      <button class="sit-action" onclick="startSituationStage('${key}','practice')">
        🎭 Practicar con IA <small>Simulación real de ${s.name.toLowerCase()}</small>
      </button>
      <button class="sit-action sit-action-urgent" onclick="startSituationStage('${key}','live')">
        ⚡ Estoy allí ahora <small>Escanea o llama a Drakón en vivo</small>
      </button>
    </div>
  </section>`;
}

function copySituationPhrase(key,n){
  const s=getSituation(key); const phrase=s?.phrases?.[n]; if(!phrase) return;
  navigator.clipboard?.writeText(phrase).then(()=>showToast('📋 Frase copiada')).catch(()=>showToast(`📋 ${phrase}`));
}

// Punto de entrada único de los 3 botones — reemplaza al antiguo startSit()
function startSituationStage(key, stage){
  const s=getSituation(key); if(!s) return;
  state._activeSituation = key;
  if(stage==='prepare'){ openSituationLessons(key); return; }
  if(stage==='live'){ openSituationLive(key); return; }
  // 'practice' → sigue usando el chat de IA existente, ahora con puesta en escena
  const sit={...s, stage}; state.situationsToday++; state.chatSituation=sit;
  if(typeof rememberSituation==='function') rememberSituation(sit,stage);
  goToChat('situation',sit); checkMissions(); save();
}

/* ═══════════════════════════════════════
   2) ENSÉÑAME PRIMERO — ruta de mini-lecciones contextuales
   Reutiliza 100% el LessonEngine existente; solo cambia de dónde
   saca el banco de lecciones (ver getSituationLessons y el cambio
   en LessonEngine.start(), lessons.js).
═══════════════════════════════════════ */
function openSituationLessons(key){
  const s=getSituation(key); if(!s) return;
  state._activeSituation = key;
  const title=document.getElementById('sitLessonsTitle'); if(title) title.textContent=`${s.icon} ${s.name}`;
  goTo('screen-situation-lessons');
  renderSituationLessonPath(key);
}

function _situationLessonsWithProgress(key){
  const lessons = getSituationLessons(key);
  const completedIds = (typeof state!=='undefined') ? (state.lessonsCompleted||[]) : [];
  let unlockNext = true;
  return lessons.map(lesson=>{
    const done = completedIds.includes(lesson.id);
    const isCurrent = !done && unlockNext;
    const locked = !done && !isCurrent;
    if(isCurrent) unlockNext=false;
    return {lesson, done, isCurrent, locked};
  });
}

function renderSituationLessonPath(key){
  const container=document.getElementById('sitLessonList'); if(!container) return;
  const s=getSituation(key); if(!s) return;
  const progress=_situationLessonsWithProgress(key);

  if(!progress.length){
    container.innerHTML=`<div class="lp-empty">
      <div class="lp-empty-ic">🚧</div>
      <div class="lp-empty-t">Lecciones de ${s.name} en camino para tu idioma</div>
      <div class="lp-empty-s">Todavía no hay lecciones de esta situación en ${state.lang?.name||'tu idioma'}. Mientras tanto, prueba "Practicar con IA".</div>
      <button class="ex-result-btn primary" style="margin-top:14px" onclick="startSituationStage('${key}','practice')">🎭 Practicar con IA</button>
    </div>`;
    return;
  }

  const totalDone = progress.filter(p=>p.done).length;
  const totalXp = progress.filter(p=>p.done).reduce((sum,p)=>sum+p.lesson.xp,0);
  const OFFSETS=[-64,-22,64,22];

  let html=`
    <div class="lp-header">
      <div class="lp-header-ring">
        <svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="19" class="lp-ring-bg"/><circle cx="22" cy="22" r="19" class="lp-ring-fg" style="stroke-dasharray:${Math.round((totalDone/Math.max(1,progress.length))*119)} 119"/></svg>
        <span class="lp-ring-txt">${totalDone}/${progress.length}</span>
      </div>
      <div class="lp-header-info">
        <div class="lp-header-t">Prepárate para: ${s.name}</div>
        <div class="lp-header-s">${totalXp} XP ganados en esta situación</div>
      </div>
    </div>
    <div class="lp-unit-banner" style="--cc:var(--gold)">
      <div class="lp-unit-ic">${s.icon}</div>
      <div class="lp-unit-info">
        <div class="lp-unit-t">${s.name}</div>
        <div class="lp-unit-s">${s.desc}</div>
      </div>
    </div>
    <div class="lp-track">`;

  progress.forEach(({lesson,done,isCurrent,locked},i)=>{
    const offset=OFFSETS[i%OFFSETS.length];
    const statusClass = done?'done':(isCurrent?'current':'locked');
    const clickAttr = locked?'':`onclick="LessonEngine.start('${lesson.id}')"`;
    const inner = done?'✓':(locked?'🔒':lesson.emoji);
    html+=`
      <div class="lp-node-row" style="transform:translateX(${offset}px)">
        <div class="lp-node ${statusClass}" ${clickAttr} style="--cc:var(--gold)">
          ${isCurrent?'<div class="lp-node-badge">EMPEZAR</div>':''}
          <div class="lp-node-circle">${inner}</div>
        </div>
        <div class="lp-node-label ${statusClass}">${lesson.title}</div>
      </div>`;
  });

  html+=`</div>
    <div style="padding:6px 14px 24px">
      <button class="ex-result-btn primary" onclick="startSituationStage('${key}','practice')">🎭 Ya aprendí lo básico — practicar con IA</button>
    </div>`;
  container.innerHTML=html;
}

/* ═══════════════════════════════════════
   3) PRACTICAR CON IA — puesta en escena (fondo + mascota integrada)
   Llamado desde chat.js → _launchChat() cuando mode==='situation'.
═══════════════════════════════════════ */
function applySituationChatScene(sit){
  const stage=document.getElementById('mascotStage');
  const bgLayer=document.getElementById('chatSceneBg');
  if(!stage) return;
  if(sit && sit.bg){
    stage.classList.add('in-situation');
    if(bgLayer){ bgLayer.style.backgroundImage=`url('${sit.bg}')`; bgLayer.style.display='block'; }
  } else {
    stage.classList.remove('in-situation');
    if(bgLayer){ bgLayer.style.display='none'; }
  }
}

/* ═══════════════════════════════════════
   4) ESTOY ALLÍ AHORA — Escanear / Videollamada
═══════════════════════════════════════ */
function openSituationLive(key){
  const s=getSituation(key); if(!s) return;
  state._activeSituation = key;
  const title=document.getElementById('sitLiveTitle'); if(title) title.textContent=`⚡ ${s.name} — ahora mismo`;
  const bgEl=document.getElementById('sitLiveBg'); if(bgEl) bgEl.style.backgroundImage=`url('${s.bg}')`;
  goTo('screen-situation-live');
}

/* ── 4a) Escanear (OCR) ─────────────────────────────────────── */
let _ocrEngineReady=null;
function _ensureTesseractLoaded(){
  if(window.Tesseract) return Promise.resolve();
  if(_ocrEngineReady) return _ocrEngineReady;
  _ocrEngineReady=new Promise((resolve,reject)=>{
    const sc=document.createElement('script');
    sc.src='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
    sc.onload=()=>resolve();
    sc.onerror=()=>reject(new Error('No se pudo cargar el motor de escaneo (OCR).'));
    document.head.appendChild(sc);
  });
  return _ocrEngineReady;
}

function openScan(){
  goTo('screen-scan');
  const shell=document.getElementById('scanShell');
  if(shell) shell.innerHTML=`
    <div class="scan-intro">
      <div class="scan-intro-ic">📷</div>
      <div class="scan-intro-t">Apunta y escanea</div>
      <div class="scan-intro-s">Un menú, un cartel, una señal, un documento... Drakón detecta el texto y te ayuda a entenderlo.</div>
      <label class="scan-cta">
        📸 Escanear ahora
        <input type="file" accept="image/*" capture="environment" style="display:none" onchange="handleScanFile(event)">
      </label>
    </div>`;
}

async function handleScanFile(ev){
  const file=ev.target.files && ev.target.files[0]; if(!file) return;
  const shell=document.getElementById('scanShell'); if(!shell) return;
  const imgUrl=URL.createObjectURL(file);
  shell.innerHTML=`
    <div class="scan-result">
      <img class="scan-photo" src="${imgUrl}" alt="Foto escaneada">
      <div class="scan-status" id="scanStatus">🔎 Detectando texto…</div>
    </div>`;
  try{
    await _ensureTesseractLoaded();
    const langMap={EN:'eng',ES:'spa',FR:'fra',DE:'deu',IT:'ita',PT:'por'};
    const ocrLang=langMap[state.lang?.code]||'eng';
    const { data } = await Tesseract.recognize(file, ocrLang, { logger:()=>{} });
    const text=(data?.text||'').trim();
    _renderScanResult(text, imgUrl);
  } catch(e){
    const st=document.getElementById('scanStatus');
    if(st) st.textContent='⚠️ No se pudo leer el texto. Intenta con más luz o más de cerca.';
  }
}

function _renderScanResult(text, imgUrl){
  const shell=document.getElementById('scanShell'); if(!shell) return;
  if(!text){
    shell.innerHTML=`
      <div class="scan-result">
        <img class="scan-photo" src="${imgUrl}" alt="Foto escaneada">
        <div class="scan-status">😕 No se detectó texto legible.</div>
        <label class="scan-cta">📸 Intentar de nuevo<input type="file" accept="image/*" capture="environment" style="display:none" onchange="handleScanFile(event)"></label>
      </div>`;
    return;
  }
  shell.innerHTML=`
    <div class="scan-result">
      <img class="scan-photo" src="${imgUrl}" alt="Foto escaneada">
      <div class="scan-textbox">
        <div class="scan-textbox-label">Texto detectado</div>
        <div class="scan-textbox-body" id="scanDetectedText">${text.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
      </div>
      <div class="scan-actions">
        <button onclick="scanAction('translate')">🌐 Traducir</button>
        <button onclick="scanAction('listen')">🔊 Escuchar</button>
        <button onclick="scanAction('explain')">💡 Explicar</button>
        <button onclick="scanCopyText()">📋 Copiar</button>
      </div>
      <div class="scan-ai-reply" id="scanAiReply" style="display:none"></div>
      <label class="scan-cta scan-cta-ghost">📸 Escanear otra cosa<input type="file" accept="image/*" capture="environment" style="display:none" onchange="handleScanFile(event)"></label>
    </div>`;
}

function scanCopyText(){
  const el=document.getElementById('scanDetectedText'); if(!el) return;
  const text=el.innerText;
  navigator.clipboard?.writeText(text).then(()=>showToast('📋 Texto copiado')).catch(()=>{});
}

async function scanAction(kind){
  const el=document.getElementById('scanDetectedText'); if(!el) return;
  const text=el.innerText.trim(); if(!text) return;
  const reply=document.getElementById('scanAiReply'); if(!reply) return;
  reply.style.display='block'; reply.textContent='💭 Pensando…';

  const nativeLangName = (typeof NATIVE_LANGS!=='undefined' && NATIVE_LANGS.find(l=>l.code===state.nativeLang)?.uiName) || 'Spanish';
  const targetLangName = state.lang?.name || 'inglés';
  let systemPrompt, userMsg;
  if(kind==='translate'){
    systemPrompt=`Translate the following text into ${nativeLangName}. Reply ONLY with the translation, nothing else.`;
    userMsg=text;
  } else if(kind==='explain'){
    systemPrompt=`You are Drakón, a friendly language tutor. Briefly explain in ${nativeLangName} what this text means and any useful vocabulary from it, in 3 sentences max.`;
    userMsg=text;
  } else if(kind==='listen'){
    state.ttsEnabled=true;
    speakInTargetLang(text);
    reply.textContent='🔊 Reproduciendo…';
    return;
  }

  try{
    const out=await askDrakonAIOnce(systemPrompt, userMsg);
    reply.textContent = out || '⚠️ Sin respuesta. Intenta de nuevo.';
  } catch(e){
    reply.textContent='⚠️ No se pudo conectar con la IA.';
  }
}

/* ── 4b) Videollamada con Drakón (voz en tiempo real) ────────── */
const LiveCall = {
  active:false, stream:null, recognizer:null, situationKey:null,
  _restartTimer:null,

  async start(key){
    this.situationKey = key || null;
    goTo('screen-livecall');
    const video=document.getElementById('liveCallVideo');
    const statusEl=document.getElementById('liveCallStatus');
    if(statusEl) statusEl.textContent='📷 Solicitando cámara y micrófono…';
    try{
      this.stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}, audio:true});
    } catch(e){
      if(statusEl) statusEl.textContent='⚠️ Necesitamos permiso de cámara y micrófono para la videollamada.';
      return;
    }
    if(video){ video.srcObject=this.stream; video.play().catch(()=>{}); }
    this.active=true;
    if(statusEl) statusEl.textContent='🎙️ Escuchando… habla cuando quieras';
    this._listenOnce();
  },

  stop(){
    this.active=false;
    clearTimeout(this._restartTimer);
    try{ this.recognizer && this.recognizer.stop(); }catch(e){}
    if(this.stream){ this.stream.getTracks().forEach(t=>t.stop()); this.stream=null; }
    if(window.speechSynthesis) window.speechSynthesis.cancel();
    if(typeof ttsStopAll==='function') ttsStopAll();
    goTo('screen-situation-live');
  },

  _listenOnce(){
    if(!this.active) return;
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    const statusEl=document.getElementById('liveCallStatus');
    if(!SR){
      if(statusEl) statusEl.textContent='⚠️ Tu navegador no soporta reconocimiento de voz. Prueba en Chrome.';
      return;
    }
    const rec=new SR();
    this.recognizer=rec;
    rec.lang=state.lang?.lang||'en-US';
    rec.continuous=false; rec.interimResults=false; rec.maxAlternatives=1;
    rec.onresult=(e)=>{
      const heard=e.results[e.results.length-1][0].transcript.trim();
      if(heard) this._handleUserSpeech(heard);
    };
    rec.onerror=()=>{ if(this.active) this._restartTimer=setTimeout(()=>this._listenOnce(),1200); };
    rec.onend=()=>{ if(this.active && !this._speaking) this._restartTimer=setTimeout(()=>this._listenOnce(),400); };
    try{ rec.start(); }catch(e){}
  },

  async _handleUserSpeech(heard){
    const statusEl=document.getElementById('liveCallStatus');
    const logEl=document.getElementById('liveCallLog');
    if(logEl) logEl.innerHTML += `<div class="lc-line lc-user">🗣️ ${heard}</div>`;
    if(statusEl) statusEl.textContent='💭 Drakón está pensando…';
    this._speaking=true;

    const s=getSituation(this.situationKey);
    const lang=state.lang?.name||'inglés';
    const sysPrompt = s
      ? `You are Drakón, a warm live language-help voice assistant. The learner is physically AT this situation right now: ${s.role}. Give the single most useful, short, spoken-style reply in ${lang} (max 2 short sentences), then wait. If they seem stuck, offer one key phrase they can say. Context: ${s.prompt.replace(/{LANG}/g,lang)}`
      : `You are Drakón, a warm live language-help voice assistant helping the learner right now in ${lang}. Keep replies short (max 2 sentences), natural, and spoken-style.`;

    let out='';
    try{ out = await askDrakonAIOnce(sysPrompt, heard); }
    catch(e){ out = ''; }
    if(!out) out = "Sorry, I couldn't connect. Try again in a moment.";

    if(logEl) logEl.innerHTML += `<div class="lc-line lc-ai">🐉 ${out}</div>`;
    if(logEl) logEl.scrollTop = logEl.scrollHeight;
    if(statusEl) statusEl.textContent='🔊 Drakón está hablando…';

    state.ttsEnabled = true;
    await new Promise(resolve=>speakInTargetLang(out, resolve));
    this._speaking=false;
    if(statusEl) statusEl.textContent='🎙️ Escuchando… habla cuando quieras';
    if(this.active) this._restartTimer=setTimeout(()=>this._listenOnce(),500);
  },

  // Toma un fotograma de la cámara, extrae su texto con OCR y lo agrega
  // como contexto visual al próximo turno de la conversación (p.ej. "mira
  // el menú"), sin necesitar un modelo de IA con visión.
  async lookAtView(){
    const video=document.getElementById('liveCallVideo'); if(!video || !video.videoWidth) return;
    const statusEl=document.getElementById('liveCallStatus');
    if(statusEl) statusEl.textContent='👀 Mirando lo que ves…';
    const canvas=document.createElement('canvas');
    canvas.width=video.videoWidth; canvas.height=video.videoHeight;
    canvas.getContext('2d').drawImage(video,0,0);
    try{
      await _ensureTesseractLoaded();
      const langMap={EN:'eng',ES:'spa',FR:'fra',DE:'deu',IT:'ita',PT:'por'};
      const ocrLang=langMap[state.lang?.code]||'eng';
      const { data } = await Tesseract.recognize(canvas, ocrLang, { logger:()=>{} });
      const text=(data?.text||'').trim();
      if(text) this._handleUserSpeech(`(I am pointing my camera at this — please help me with it) "${text.slice(0,300)}"`);
      else if(statusEl) statusEl.textContent='😕 No vi texto claro. Acércate un poco más.';
    } catch(e){
      if(statusEl) statusEl.textContent='⚠️ No se pudo analizar la imagen.';
    }
  },
};
function startLiveCall(key){ LiveCall.start(key); }
function stopLiveCall(){ LiveCall.stop(); }
function liveCallLookAtView(){ LiveCall.lookAtView(); }

/* Habla un texto que YA está en el idioma que se está aprendiendo, sin
   pasar por la traducción automática de speakText() (esa función asume
   que el texto viene en el idioma nativo y lo traduce antes de hablar —
   aquí el texto del escaneo o de la videollamada ya está en el idioma
   objetivo, así que solo necesitamos reproducirlo). */
function speakInTargetLang(text, onend){
  if(!text) { if(onend) onend(); return; }
  const targetLang = state.lang?.lang || 'en-US';
  const bcp47 = (typeof TTS_BCP47_MAP!=='undefined' && TTS_BCP47_MAP[targetLang]) || targetLang;
  const cv = (typeof CHAR_VOICE!=='undefined' && CHAR_VOICE[state.charId]) || (typeof CHAR_VOICE!=='undefined' && CHAR_VOICE.dragon) || {stability:.5,style:.4,speed:1,gender:'M',name:'Drakón'};
  if(typeof ttsSpeakChar==='function'){
    ttsSpeakChar(text, cv, bcp47, onend, state.charId || 'dragon');
  } else if(onend) onend();
}

/* ═══════════════════════════════════════
   5) Llamada rápida a la IA para tareas puntuales (traducir/explicar/
   ayuda en vivo) — mismo mecanismo que sendChatInternal pero sin tocar
   el historial de chat guardado.
═══════════════════════════════════════ */
async function askDrakonAIOnce(systemPrompt, userText){
  const messages=[{role:'system',content:systemPrompt},{role:'user',content:userText}];
  const managed = typeof hasManagedAi==='function' && hasManagedAi();
  if(managed){
    try{ const t=await managedChat(messages); if(t) return t.trim(); }catch(e){}
  }
  if(state.groqKey){
    const models=['openai/gpt-oss-120b','openai/gpt-oss-20b'];
    for(const model of models){
      try{
        const resp=await Promise.race([
          fetch('https://api.groq.com/openai/v1/chat/completions',{
            method:'POST',
            headers:{'Content-Type':'application/json','Authorization':`Bearer ${state.groqKey}`},
            body:JSON.stringify({model,messages,max_tokens:400,temperature:0.5})
          }),
          new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),20000))
        ]);
        if(!resp.ok) continue;
        const data=await resp.json();
        const text=data?.choices?.[0]?.message?.content?.trim();
        if(text) return text;
      }catch(e){}
    }
  }
  return '';
}
