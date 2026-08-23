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
   0) CÁMARA / MICRÓFONO — permisos reales, una sola vez
   Un único punto de acceso a getUserMedia() para todo "Estoy allí ahora"
   (Escanear necesita solo cámara; Videollamada necesita cámara+mic). Esto
   dispara el diálogo NATIVO de permiso del navegador/PWA la primera vez
   — nunca antes de que el usuario entre a una función que lo requiera — y
   el propio navegador ya se encarga de NO volver a preguntar si el
   usuario ya lo concedió (no hace falta guardar eso nosotros). Si el
   usuario lo rechaza, o no hay cámara/mic, devolvemos un error real que
   se muestra con un mensaje claro (ver _mediaAccessDeniedHtml).
═══════════════════════════════════════ */
async function requestMediaStream(constraints){
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    return { stream:null, error:{ name:'NotSupportedError' } };
  }
  try{
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    return { stream, error:null };
  } catch(e){
    return { stream:null, error:e };
  }
}

// Tarjeta de error clara y accionable — nunca dejamos la pantalla "colgada"
// aparentando que algo está funcionando cuando el permiso fue rechazado.
function _mediaAccessDeniedHtml(e, needs, retryFnCall){
  const what = needs.camera && needs.mic ? 'la cámara y el micrófono' : needs.camera ? 'la cámara' : 'el micrófono';
  const icon = needs.camera ? '📷' : '🎙️';
  const name = e?.name || '';
  let detail = `Drakón necesita ${what} para esta función.`;
  if(name==='NotAllowedError' || name==='PermissionDeniedError' || name==='SecurityError'){
    detail = `Parece que el permiso fue rechazado antes. Ve a los ajustes de este sitio (icono 🔒 junto a la dirección, o Ajustes del sistema → Apps → Drakón → Permisos) y activa ${what}, luego vuelve a intentarlo.`;
  } else if(name==='NotFoundError' || name==='DevicesNotFoundError'){
    detail = `No encontramos ${needs.camera?'una cámara':'un micrófono'} disponible en este dispositivo.`;
  } else if(name==='NotReadableError' || name==='TrackStartError'){
    detail = `${needs.camera?'La cámara':'El micrófono'} parece estar en uso por otra aplicación. Ciérrala e inténtalo de nuevo.`;
  } else if(name==='NotSupportedError'){
    detail = `Este navegador no soporta acceso a ${what}. Prueba a abrir Drakón en Chrome.`;
  }
  return `<div class="media-denied">
    <div class="media-denied-ic">${icon}</div>
    <div class="media-denied-t">Necesitamos acceso a ${what}</div>
    <div class="media-denied-s">${detail}</div>
    <button class="scan-cta" onclick="${retryFnCall}">🔁 Reintentar</button>
  </div>`;
}


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
    <button class="sit-back" onclick="backToSituationsGrid()">← Todas las situaciones</button>
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
  // La cuadrícula y el planificador de una situación viven en la MISMA
  // pantalla (screen-situations) — para que el botón Atrás distinga entre
  // ambos, empujamos aquí un sub-estado propio (ver _dispatchNavState en
  // app.js). Si esta llamada vino del propio botón Atrás (popstate), no
  // volvemos a empujar para no crear un bucle.
  if(!window._navFromPopstate) _pushNavState({sid:'screen-situations', sitKey:key});
}

// Botón "← Todas las situaciones" del planificador — vuelve a la cuadrícula
// y mantiene el historial coherente con el botón Atrás físico.
function backToSituationsGrid(){
  renderSituations();
  if(!window._navFromPopstate) _pushNavState({sid:'screen-situations'});
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
  const screen=document.getElementById('screen-chat');
  if(!stage) return;
  if(sit && sit.bg){
    stage.classList.add('in-situation');
    if(screen) screen.classList.add('in-situation-scene');
    if(bgLayer){ bgLayer.style.backgroundImage=`url('${sit.bg}')`; bgLayer.style.display='block'; }
  } else {
    stage.classList.remove('in-situation');
    if(screen) screen.classList.remove('in-situation-scene');
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

/* ── 4a) Escanear — detección REAL de texto y objetos ─────────────
   Usa el modelo de visión de Groq (qwen/qwen3.6-27b — ver
   console.groq.com/docs/vision, ya confirmado que soporta imagen+texto,
   modo JSON y hasta 5 imágenes por petición) para analizar la foto de
   verdad: decide si lo que ve es texto, un objeto, o ambos, y devuelve
   una traducción real y una descripción real — nunca datos inventados.
   Si no hay clave de Groq configurada (Ajustes → IA), se usa Tesseract.js
   como reserva local: SOLO detecta texto (sin objetos ni traducción), y
   se avisa claramente de la limitación en vez de simular que funciona. */

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

// Reduce cualquier imagen (object URL de un File, o un <canvas> con un
// fotograma de video) a un data URL JPEG de tamaño razonable. Groq admite
// hasta 20MB, pero menos peso = respuesta más rápida — importante cuando
// el usuario está caminando en una situación real.
function _imageSourceToDataUrl(source, maxDim=1024, quality=0.78){
  return new Promise((resolve,reject)=>{
    const finish=(w,h,drawFn)=>{
      let tw=w, th=h;
      if(Math.max(w,h)>maxDim){ const scale=maxDim/Math.max(w,h); tw=Math.round(w*scale); th=Math.round(h*scale); }
      const canvas=document.createElement('canvas'); canvas.width=tw; canvas.height=th;
      drawFn(canvas.getContext('2d'), tw, th);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    if(source instanceof HTMLCanvasElement){
      finish(source.width, source.height, (ctx,tw,th)=>ctx.drawImage(source,0,0,tw,th));
      return;
    }
    const img=new Image();
    img.onload=()=>finish(img.naturalWidth, img.naturalHeight, (ctx,tw,th)=>ctx.drawImage(img,0,0,tw,th));
    img.onerror=()=>reject(new Error('No se pudo leer la imagen.'));
    img.src=source;
  });
}

// Analiza una foto con el modelo de visión de Groq y devuelve SIEMPRE un
// objeto con esta forma (o null si no hay clave / falla la petición) —
// nunca datos inventados: si el modelo no ve texto u objetos, los campos
// quedan vacíos en vez de rellenarse con algo genérico.
async function analyzeSceneImage(imageDataUrl){
  if(!state.groqKey) return null;
  const nativeLangName=(typeof NATIVE_LANGS!=='undefined' && NATIVE_LANGS.find(l=>l.code===state.nativeLang)?.uiName) || 'Spanish';
  const targetLangName=state.lang?.name || 'inglés';
  const sys=`You are a real-time visual scene analyzer for a language-learning app. Look ONLY at the photo provided — never invent details you cannot actually see. Reply ONLY with a single JSON object, no markdown, no extra text, matching EXACTLY this shape:
{"hasText": boolean, "text": string, "textTranslation": string, "objects": [{"label": string, "translation": string, "note": string}], "summary": string}
Field rules:
- "hasText": true only if there is real, legible text visible in the photo.
- "text": the EXACT visible text, verbatim (empty string if hasText is false).
- "textTranslation": that text translated into ${nativeLangName} (empty string if hasText is false).
- "objects": up to 4 notable physical objects, items, food dishes, signs, or places relevant to a language learner in this scene (empty array if nothing clearly identifiable, or if the photo only shows text with nothing else). Each "label" in ${targetLangName}, "translation" in ${nativeLangName}, "note" = one short useful sentence in ${nativeLangName} about it.
- "summary": ONE short, warm sentence in ${nativeLangName}, written as Drakón (a friendly dragon language-tutor companion) describing what you actually see, in first person — e.g. "Veo un menú de restaurante en inglés." Never say you cannot see the image — you can see it.`;
  const messages=[{role:'user', content:[
    {type:'text', text:sys},
    {type:'image_url', image_url:{url:imageDataUrl}},
  ]}];
  try{
    const resp=await Promise.race([
      fetch('https://api.groq.com/openai/v1/chat/completions',{
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':`Bearer ${state.groqKey}`},
        body:JSON.stringify({model:'qwen/qwen3.6-27b', messages, response_format:{type:'json_object'}, max_completion_tokens:700, temperature:0.25})
      }),
      new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),25000))
    ]);
    if(!resp.ok) return null;
    const data=await resp.json();
    const raw=data?.choices?.[0]?.message?.content; if(!raw) return null;
    const parsed=JSON.parse(raw);
    return {
      hasText: !!parsed.hasText,
      text: String(parsed.text||'').trim(),
      textTranslation: String(parsed.textTranslation||'').trim(),
      objects: Array.isArray(parsed.objects) ? parsed.objects.slice(0,4).map(o=>({
        label:String(o?.label||'').trim(), translation:String(o?.translation||'').trim(), note:String(o?.note||'').trim(),
      })).filter(o=>o.label) : [],
      summary: String(parsed.summary||'').trim(),
    };
  } catch(e){ return null; }
}

// Igual que analyzeSceneImage pero para preguntas libres sobre una foto
// (usado por "Mira esto" en la videollamada): el modelo responde en texto
// natural y hablado, no en JSON — aquí queremos conversación, no datos.
async function askDrakonVisionOnce(systemPrompt, userText, imageDataUrl){
  if(!state.groqKey) return '';
  const messages=[
    {role:'system', content:systemPrompt},
    {role:'user', content:[
      {type:'text', text:userText || 'What do you see? Please help me with it.'},
      {type:'image_url', image_url:{url:imageDataUrl}},
    ]},
  ];
  try{
    const resp=await Promise.race([
      fetch('https://api.groq.com/openai/v1/chat/completions',{
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':`Bearer ${state.groqKey}`},
        body:JSON.stringify({model:'qwen/qwen3.6-27b', messages, max_completion_tokens:350, temperature:0.5})
      }),
      new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),25000))
    ]);
    if(!resp.ok) return '';
    const data=await resp.json();
    return data?.choices?.[0]?.message?.content?.trim() || '';
  } catch(e){ return ''; }
}

const ScanCam = { stream:null };

function openScan(){
  goTo('screen-scan');
  _scanShowCameraView();
}

async function _scanShowCameraView(){
  const shell=document.getElementById('scanShell'); if(!shell) return;
  shell.innerHTML=`
    <div class="scan-camera-wrap">
      <video id="scanVideo" class="scan-video" autoplay playsinline muted></video>
      <div class="scan-camera-hint">Enfoca el menú, cartel u objeto</div>
      <div class="scan-camera-controls">
        <label class="scan-gallery-btn" title="Elegir de la galería">
          🖼️
          <input type="file" accept="image/*" style="display:none" onchange="handleScanGalleryFile(event)">
        </label>
        <button class="scan-shutter" onclick="scanCapturePhoto()" aria-label="Capturar"></button>
        <span class="scan-camera-controls-spacer"></span>
      </div>
    </div>`;

  const { stream, error } = await requestMediaStream({ video:{ facingMode:'environment' } });
  if(error){
    shell.innerHTML = _mediaAccessDeniedHtml(error, {camera:true}, 'openScan()');
    return;
  }
  ScanCam.stream = stream;
  const video=document.getElementById('scanVideo');
  if(video){ video.srcObject=stream; video.play().catch(()=>{}); }
}

function _scanStopCamera(){
  if(ScanCam.stream){ ScanCam.stream.getTracks().forEach(t=>t.stop()); ScanCam.stream=null; }
}

async function scanCapturePhoto(){
  const video=document.getElementById('scanVideo'); if(!video || !video.videoWidth) return;
  const canvas=document.createElement('canvas');
  canvas.width=video.videoWidth; canvas.height=video.videoHeight;
  canvas.getContext('2d').drawImage(video,0,0);
  const imgUrl = canvas.toDataURL('image/jpeg', 0.85);
  _scanStopCamera();
  await _scanAnalyze(canvas, imgUrl);
}

async function handleScanGalleryFile(ev){
  const file=ev.target.files && ev.target.files[0]; if(!file) return;
  _scanStopCamera();
  const imgUrl=URL.createObjectURL(file);
  await _scanAnalyze(file, imgUrl);
}

// Punto único de análisis — recibe SIEMPRE una imagen real (un <canvas> con
// el fotograma capturado por la cámara, o un File elegido de la galería) y
// nunca datos simulados. `source` se usa para generar el data URL que se
// manda a la IA; `imgUrl` es lo que se muestra en pantalla.
async function _scanAnalyze(source, imgUrl){
  const shell=document.getElementById('scanShell'); if(!shell) return;
  shell.innerHTML=`
    <div class="scan-result">
      <img class="scan-photo" src="${imgUrl}" alt="Foto escaneada">
      <div class="scan-status"><span class="spinner"></span> Analizando la imagen…</div>
    </div>`;

  let dataUrl=null;
  try{ dataUrl = await _imageSourceToDataUrl(source instanceof HTMLCanvasElement ? source : imgUrl); }catch(e){}

  // Camino principal: visión real con Groq (texto Y objetos, con
  // traducción). Camino de respaldo: Tesseract.js, solo texto, sin IA.
  if(dataUrl && state.groqKey){
    const analysis=await analyzeSceneImage(dataUrl);
    if(analysis && (analysis.hasText || analysis.objects.length || analysis.summary)){
      _renderScanResult(analysis, imgUrl, false);
      return;
    }
  }
  await _renderScanFallbackOcr(source, imgUrl);
}



async function _renderScanFallbackOcr(source, imgUrl){
  const shell=document.getElementById('scanShell'); if(!shell) return;
  const statusEl=shell.querySelector('.scan-status');
  if(statusEl) statusEl.innerHTML=`<span class="spinner"></span> ${state.groqKey?'La IA no respondió, probando solo texto…':'Detectando texto (sin IA configurada)…'}`;
  try{
    await _ensureTesseractLoaded();
    const langMap={EN:'eng',ES:'spa',FR:'fra',DE:'deu',IT:'ita',PT:'por'};
    const ocrLang=langMap[state.lang?.code]||'eng';
    const { data }=await Tesseract.recognize(source, ocrLang, { logger:()=>{} });
    const text=(data?.text||'').trim();
    _renderScanResult(text?{hasText:true,text,textTranslation:'',objects:[],summary:''}:null, imgUrl, true);
  } catch(e){
    _renderScanResult(null, imgUrl, true);
  }
}

function _renderScanResult(analysis, imgUrl, isFallback){
  const shell=document.getElementById('scanShell'); if(!shell) return;
  const scanAgainBtn=`<button class="scan-cta scan-cta-ghost" onclick="openScan()">📸 Escanear otra cosa</button>`;

  if(!analysis || (!analysis.hasText && !analysis.objects.length && !analysis.summary)){
    shell.innerHTML=`<div class="scan-result">
      <img class="scan-photo" src="${imgUrl}" alt="Foto escaneada">
      <div class="scan-status">😕 No se detectó nada claro. Acércate más o mejora la luz.</div>
      ${scanAgainBtn}
    </div>`;
    return;
  }

  // No toda la información de golpe: primero una frase corta de Drakón
  // ("qué ve"), y solo si el usuario quiere, se despliega el detalle
  // completo (texto/traducción/objetos) — pensado para usarse caminando.
  const objectsHtml=analysis.objects.length ? `
    <div class="scan-objects">
      ${analysis.objects.map(o=>`<div class="scan-obj-chip"><b>${o.label}</b><span>${o.translation}</span>${o.note?`<small>${o.note}</small>`:''}</div>`).join('')}
    </div>` : '';

  const textHtml=analysis.hasText ? `
    <div class="scan-textbox">
      <div class="scan-textbox-label">Texto detectado</div>
      <div class="scan-textbox-body" id="scanDetectedText">${analysis.text.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
      ${analysis.textTranslation?`<div class="scan-textbox-translation"><b>Traducción:</b> ${analysis.textTranslation.replace(/</g,'&lt;')}</div>`:''}
    </div>` : '';

  const needsTranslateBtn = analysis.hasText && !analysis.textTranslation && state.groqKey;
  const fallbackNote = isFallback ? `<div class="scan-warn">⚠️ Configura tu clave de IA en Ajustes para traducir y reconocer objetos automáticamente.</div>` : '';

  shell.innerHTML=`
    <div class="scan-result">
      <img class="scan-photo" src="${imgUrl}" alt="Foto escaneada">
      ${analysis.summary?`<div class="scan-summary-card">🐉 ${analysis.summary}</div>`:''}
      <button class="scan-details-toggle" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')">Ver todo lo detectado <span>▾</span></button>
      <div class="scan-details">
        ${textHtml}
        ${objectsHtml}
        ${fallbackNote}
        <div class="scan-actions">
          ${needsTranslateBtn?'<button onclick="scanAction(\'translate\')">🌐 Traducir</button>':''}
          ${analysis.hasText?'<button onclick="scanAction(\'listen\')">🔊 Escuchar</button>':''}
          ${analysis.hasText?'<button onclick="scanAction(\'explain\')">💡 Explicar</button>':''}
          ${analysis.hasText?'<button onclick="scanCopyText()">📋 Copiar</button>':''}
        </div>
        <div class="scan-ai-reply" id="scanAiReply" style="display:none"></div>
      </div>
      ${scanAgainBtn}
    </div>`;
}

function scanCopyText(){
  const el=document.getElementById('scanDetectedText'); if(!el) return;
  navigator.clipboard?.writeText(el.innerText).then(()=>showToast('📋 Texto copiado')).catch(()=>{});
}

async function scanAction(kind){
  const el=document.getElementById('scanDetectedText'); if(!el) return;
  const text=el.innerText.trim(); if(!text) return;
  const reply=document.getElementById('scanAiReply'); if(!reply) return;
  reply.style.display='block'; reply.textContent='💭 Pensando…';

  if(kind==='listen'){
    state.ttsEnabled=true;
    speakInTargetLang(text, ()=>{ reply.style.display='none'; });
    reply.textContent='🔊 Reproduciendo…';
    return;
  }

  const nativeLangName=(typeof NATIVE_LANGS!=='undefined' && NATIVE_LANGS.find(l=>l.code===state.nativeLang)?.uiName) || 'Spanish';
  let systemPrompt;
  if(kind==='translate') systemPrompt=`Translate the following text into ${nativeLangName}. Reply ONLY with the translation, nothing else.`;
  else systemPrompt=`You are Drakón, a friendly language tutor. Briefly explain in ${nativeLangName} what this text means and any useful vocabulary from it, in 3 sentences max.`;

  try{
    const out=await askDrakonAIOnce(systemPrompt, text);
    reply.textContent = out || '⚠️ Sin respuesta. Intenta de nuevo.';
  } catch(e){
    reply.textContent='⚠️ No se pudo conectar con la IA.';
  }
}

/* ── 4b) Videollamada con Drakón — conversación de voz en vivo con el
   personaje seleccionado, animado de verdad (escuchando/pensando/hablando,
   reutilizando mascot.js) y con la cámara como contexto visual REAL para
   la IA. El reconocimiento de voz por micrófono del navegador
   (SpeechRecognition) es poco fiable fuera de Chrome de escritorio —
   especialmente dentro de un WebView/PWA instalada en Android, donde
   suele fallar en silencio — así que la voz del usuario se transcribe con
   Whisper alojado en Groq (el MISMO proveedor de IA que ya usa toda la
   app, vía la misma clave): se graba un clip real con MediaRecorder y se
   envía a POST /openai/v1/audio/transcriptions. Nunca se inventa texto. */

// Graba SOLO la pista de audio del stream de la videollamada (no el video,
// para que el archivo sea pequeño y rápido de subir).
const VoiceRecorder = {
  mediaRecorder:null, chunks:[], recording:false,
  start(sourceStream){
    const audioOnly=new MediaStream(sourceStream.getAudioTracks());
    const candidates=['audio/webm;codecs=opus','audio/webm','audio/mp4','audio/ogg;codecs=opus'];
    const mimeType=candidates.find(m=>window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m)) || '';
    this.chunks=[];
    try{ this.mediaRecorder = mimeType ? new MediaRecorder(audioOnly,{mimeType}) : new MediaRecorder(audioOnly); }
    catch(e){ this.mediaRecorder=null; return false; }
    this.mediaRecorder.ondataavailable=(e)=>{ if(e.data && e.data.size>0) this.chunks.push(e.data); };
    this.mediaRecorder.start();
    this.recording=true;
    return true;
  },
  stop(){
    return new Promise(resolve=>{
      if(!this.mediaRecorder || !this.recording){ resolve(null); return; }
      this.mediaRecorder.onstop=()=>{
        this.recording=false;
        const blob=new Blob(this.chunks, {type:this.mediaRecorder.mimeType||'audio/webm'});
        resolve(blob.size>0?blob:null);
      };
      try{ this.mediaRecorder.stop(); }catch(e){ this.recording=false; resolve(null); }
    });
  },
  abort(){
    if(this.mediaRecorder && this.recording){ try{ this.mediaRecorder.onstop=null; this.mediaRecorder.stop(); }catch(e){} }
    this.recording=false; this.chunks=[];
  },
};

// Transcripción REAL con Whisper (Groq) — nunca texto inventado. Si el
// clip queda vacío o falla la red, se devuelve texto vacío con un motivo,
// y quien llama lo comunica claramente en vez de simular una respuesta.
async function transcribeAudioWithGroq(blob){
  if(!state.groqKey) return { text:'', error:'no-key' };
  if(!blob || blob.size<800) return { text:'', error:'empty' };
  const langMap={EN:'en',ES:'es',FR:'fr',DE:'de',IT:'it',PT:'pt'};
  const lang=langMap[state.lang?.code];
  const ext = blob.type.includes('mp4')?'mp4':blob.type.includes('ogg')?'ogg':'webm';
  const form=new FormData();
  form.append('file', blob, `audio.${ext}`);
  form.append('model','whisper-large-v3-turbo');
  if(lang) form.append('language', lang);
  form.append('response_format','json');
  try{
    const resp=await Promise.race([
      fetch('https://api.groq.com/openai/v1/audio/transcriptions',{
        method:'POST',
        headers:{'Authorization':`Bearer ${state.groqKey}`}, // sin Content-Type: el navegador arma el multipart/boundary
        body:form,
      }),
      new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),20000)),
    ]);
    if(!resp.ok) return { text:'', error:'http-'+resp.status };
    const data=await resp.json();
    return { text:(data?.text||'').trim(), error:null };
  } catch(e){ return { text:'', error:'network' }; }
}

const LiveCall = {
  active:false, stream:null, situationKey:null,
  _speaking:false, _pendingImage:null, _visualTimeout:null, _captionTimer:null, _maxRecTimer:null,

  async start(key){
    this.situationKey = key || null;
    goTo('screen-livecall');
    if(typeof mascotReset==='function') mascotReset();
    const logEl=document.getElementById('liveCallLog'); if(logEl) logEl.innerHTML='';
    const cap=document.getElementById('liveCallCaption'); if(cap){ cap.textContent=''; cap.classList.remove('show'); }
    this._setStatus('📷 Solicitando cámara y micrófono…');
    this._setMicButton('busy');

    const { stream, error } = await requestMediaStream({ video:{facingMode:'environment'}, audio:true });
    if(error){
      const wrap=document.getElementById('liveCallVideoWrap');
      if(wrap) wrap.innerHTML = _mediaAccessDeniedHtml(error, {camera:true, mic:true}, `startLiveCall('${this.situationKey||''}')`);
      return;
    }
    this.stream = stream;
    const video=document.getElementById('liveCallVideo');
    if(video){ video.srcObject=stream; video.play().catch(()=>{}); }
    this.active=true;
    this._greet();
  },

  async _greet(){
    const s=getSituation(this.situationKey);
    const lang=state.lang?.name||'inglés';
    const line = s
      ? `Hi! I'm right here with you at ${s.roleLabel||'this place'}. Tap the microphone to talk to me in ${lang}, or point your camera and tap "Mira esto".`
      : `Hi! I'm right here with you. Tap the microphone to talk to me in ${lang} whenever you're ready.`;
    this._logLine('ai', line);
    if(typeof mascotSpeakUntilDone==='function') mascotSpeakUntilDone();
    this._setStatus('🔊 Drakón está hablando…');
    state.ttsEnabled=true;
    await new Promise(resolve=>speakInTargetLang(line, resolve));
    if(!this.active) return;
    if(typeof mascotIdle==='function') mascotIdle();
    this._setStatus('🎙️ Toca el micrófono para hablar');
    this._setMicButton('idle');
  },

  stop(){
    this._cleanup();
    goTo('screen-situation-live');
  },

  // Apaga cámara/mic/voz sin navegar — la usa goTo() en app.js para
  // garantizar que la cámara NUNCA quede encendida en segundo plano, sea
  // cual sea la vía de salida (botón "Terminar", botón Atrás físico,
  // cambiar de pestaña, etc.).
  _cleanup(){
    this.active=false;
    clearTimeout(this._visualTimeout); clearTimeout(this._captionTimer); clearTimeout(this._maxRecTimer);
    this._pendingImage=null;
    VoiceRecorder.abort();
    if(this.stream){ this.stream.getTracks().forEach(t=>t.stop()); this.stream=null; }
    if(window.speechSynthesis) window.speechSynthesis.cancel();
    if(typeof ttsStopAll==='function') ttsStopAll();
    if(typeof mascotIdle==='function') mascotIdle();
  },

  _setStatus(txt){ const el=document.getElementById('liveCallStatus'); if(el) el.textContent=txt; },

  // mode: 'idle' (listo para grabar) | 'recording' (grabando ahora mismo,
  // toca para enviar) | 'busy' (Drakón está pensando/hablando — no se puede tocar)
  _setMicButton(mode){
    const btn=document.getElementById('lcMicBtn'); if(!btn) return;
    btn.classList.remove('recording','busy');
    if(mode==='recording'){ btn.classList.add('recording'); btn.textContent='⏹️ Enviar'; btn.disabled=false; }
    else if(mode==='busy'){ btn.classList.add('busy'); btn.textContent='🎙️ Hablar'; btn.disabled=true; }
    else { btn.textContent='🎙️ Hablar'; btn.disabled=false; }
  },

  _logLine(who, text){
    const logEl=document.getElementById('liveCallLog');
    if(logEl){
      logEl.innerHTML += `<div class="lc-line ${who==='user'?'lc-user':'lc-ai'}">${who==='user'?'🗣️':'🐉'} ${text}</div>`;
      logEl.scrollTop = logEl.scrollHeight;
    }
    if(who==='ai'){
      const cap=document.getElementById('liveCallCaption');
      if(cap){ cap.textContent=text; cap.classList.add('show'); clearTimeout(this._captionTimer); this._captionTimer=setTimeout(()=>cap.classList.remove('show'),6000); }
    }
  },

  // Botón de micrófono tipo "empuja para hablar": un toque empieza a
  // grabar de verdad con MediaRecorder, otro toque termina y envía el
  // clip a Whisper (Groq) para transcribirlo — nada se reconoce "en vivo"
  // de forma simulada. Límite de seguridad: 15s de grabación máxima.
  async toggleMic(){
    if(!this.active || this._speaking) return;
    if(VoiceRecorder.recording){ this._finishRecording(); return; }
    const ok = VoiceRecorder.start(this.stream);
    if(!ok){ this._setStatus('⚠️ No se pudo acceder al micrófono para grabar.'); return; }
    if(typeof mascotListening==='function') mascotListening();
    this._setStatus('🎙️ Grabando… toca de nuevo para enviar');
    this._setMicButton('recording');
    clearTimeout(this._maxRecTimer);
    this._maxRecTimer=setTimeout(()=>{ if(VoiceRecorder.recording) this._finishRecording(); }, 15000);
  },

  async _finishRecording(){
    clearTimeout(this._maxRecTimer);
    this._setMicButton('busy');
    this._setStatus('📝 Transcribiendo lo que dijiste…');
    if(typeof mascotThinking==='function') mascotThinking();
    const blob = await VoiceRecorder.stop();
    if(!blob){
      this._setMicButton('idle'); if(typeof mascotIdle==='function') mascotIdle();
      this._setStatus('🎙️ No se grabó nada. Mantén pulsado un momento más e inténtalo de nuevo.');
      return;
    }
    if(!state.groqKey){
      this._setMicButton('idle'); if(typeof mascotIdle==='function') mascotIdle();
      this._setStatus('⚠️ Configura tu clave de IA (Groq) en Ajustes para transcribir tu voz.');
      this._pendingImage=null;
      return;
    }
    const { text, error } = await transcribeAudioWithGroq(blob);
    if(!text){
      this._setMicButton('idle'); if(typeof mascotIdle==='function') mascotIdle();
      this._setStatus(error==='network' ? '⚠️ No se pudo conectar para transcribir. Inténtalo de nuevo.' : '😕 No entendí bien lo que dijiste — inténtalo otra vez, más cerca del micrófono.');
      return;
    }
    await this._handleUserSpeech(text);
  },

  async _handleUserSpeech(heard){
    clearTimeout(this._visualTimeout);
    const img=this._pendingImage; this._pendingImage=null;
    this._logLine('user', img?`👀 ${heard}`:heard);
    this._setStatus('💭 Drakón está pensando…');
    this._setMicButton('busy');
    if(typeof mascotThinking==='function') mascotThinking();
    this._speaking=true;

    const s=getSituation(this.situationKey);
    const lang=state.lang?.name||'inglés';
    const visualNote=img?' The learner just showed you something through their camera — base your answer ONLY on what is actually visible in the photo, and never invent details you cannot see.':'';
    const sysPrompt = s
      ? `You are Drakón, a warm live language-help voice companion, PHYSICALLY accompanying the learner right now at: ${s.role}. Give the single most useful, short, spoken-style reply in ${lang} (max 2 short sentences). If they seem stuck, offer one key phrase they can say. Context: ${s.prompt.replace(/{LANG}/g,lang)}${visualNote}`
      : `You are Drakón, a warm live language-help voice companion helping the learner right now in ${lang}. Keep replies short (max 2 sentences), natural, and spoken-style.${visualNote}`;

    let out='';
    try{ out = img ? await askDrakonVisionOnce(sysPrompt, heard, img) : await askDrakonAIOnce(sysPrompt, heard); }
    catch(e){ out=''; }
    if(!out) out = img ? "I couldn't get a clear look at that — try again with a bit more light?" : "Sorry, I couldn't connect. Try again in a moment.";

    this._logLine('ai', out);
    this._setStatus('🔊 Drakón está hablando…');
    if(typeof mascotSpeakUntilDone==='function') mascotSpeakUntilDone();

    state.ttsEnabled = true;
    await new Promise(resolve=>speakInTargetLang(out, resolve));
    this._speaking=false;
    if(!this.active) return;
    if(typeof mascotIdle==='function') mascotIdle();
    this._setStatus('🎙️ Toca el micrófono para hablar');
    this._setMicButton('idle');
  },

  // "Mira esto": toma un fotograma REAL de la cámara ahora mismo. El
  // usuario toca el micrófono para preguntar algo sobre lo que se ve (o,
  // si no dice nada en unos segundos, Drakón lo describe). La imagen
  // SIEMPRE se analiza con el modelo de visión de Groq — nunca se envía
  // nada simulado ni desconectado de la foto real.
  async lookAtView(){
    if(!this.active || this._speaking || VoiceRecorder.recording) return;
    if(!state.groqKey){
      this._setStatus('⚠️ Configura tu clave de IA (Groq) en Ajustes para que Drakón pueda ver.');
      return;
    }
    const video=document.getElementById('liveCallVideo'); if(!video || !video.videoWidth) return;
    const maxDim=1024, scale=Math.min(1, maxDim/Math.max(video.videoWidth, video.videoHeight));
    const canvas=document.createElement('canvas');
    canvas.width=Math.round(video.videoWidth*scale); canvas.height=Math.round(video.videoHeight*scale);
    canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);
    this._pendingImage = canvas.toDataURL('image/jpeg', 0.78);

    const btn=document.getElementById('lcLookBtn'); if(btn){ btn.classList.add('flash'); setTimeout(()=>btn.classList.remove('flash'),350); }
    this._setStatus('👀 Foto tomada — toca el micrófono y pregúntame sobre esto');

    clearTimeout(this._visualTimeout);
    this._visualTimeout=setTimeout(()=>{
      if(this._pendingImage && !VoiceRecorder.recording){
        this._handleUserSpeech('What is this? Please describe it and help me.');
      }
    }, 8000);
  },
};
function startLiveCall(key){ LiveCall.start(key); }
function stopLiveCall(){ LiveCall.stop(); }
function liveCallLookAtView(){ LiveCall.lookAtView(); }
function liveCallToggleMic(){ LiveCall.toggleMic(); }

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
