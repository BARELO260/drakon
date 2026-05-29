/* ═══════════════════════════════════════
   auth.js — Firebase auth, login/register, Groq key management
   Dependencias: state.js, ui.js
   Usado por: app.js
   NOTA: Firebase config está en el HTML (antes de este módulo)
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   FIREBASE AUTH & LOGIN
═══════════════════════════════════════ */
let _loginMode = 'login'; // 'login' | 'register' | 'forgot'

function setLoginMode(mode){
  _loginMode = mode;
  const isLogin = mode === 'login';
  const loginBtn  = document.getElementById('loginTabBtn');
  const regBtn    = document.getElementById('registerTabBtn');
  const submitBtn = document.getElementById('loginSubmitBtn');
  const forgot    = document.getElementById('loginForgot');
  if(loginBtn){
    loginBtn.style.background  = isLogin ? 'var(--gold)' : 'none';
    loginBtn.style.color       = isLogin ? '#fff' : 'var(--muted)';
    regBtn.style.background    = !isLogin ? 'var(--gold)' : 'none';
    regBtn.style.color         = !isLogin ? '#fff' : 'var(--muted)';
  }
  if(submitBtn) submitBtn.textContent = isLogin ? 'Iniciar sesión' : 'Crear cuenta';
  if(forgot) forgot.style.display = isLogin ? 'block' : 'none';
  clearLoginErr();
}

function clearLoginErr(){
  const e = document.getElementById('loginErr'); if(e) e.textContent='';
  const o = document.getElementById('loginOk');  if(o) o.textContent='';
}

function showLoginErr(msg){ const e=document.getElementById('loginErr'); if(e) e.textContent=msg; }
function showLoginOk(msg){  const o=document.getElementById('loginOk');  if(o) o.textContent=msg; }

async function submitLogin(){
  if(!window._fbInit){ showFbConfigNote(); return; }
  const email = document.getElementById('loginEmail')?.value?.trim();
  const pass  = document.getElementById('loginPass')?.value;
  if(!email || !pass){ showLoginErr('Ingresa tu correo y contraseña.'); return; }
  if(pass.length < 6){ showLoginErr('La contraseña debe tener al menos 6 caracteres.'); return; }

  const btn = document.getElementById('loginSubmitBtn');
  if(btn){ btn.disabled=true; btn.textContent='...'; }
  clearLoginErr();

  try{
    let user;
    if(_loginMode === 'register'){
      user = await window._firebase.signUp(email, pass);
    } else {
      user = await window._firebase.signIn(email, pass);
    }
    // onAuthStateChanged will handle the rest
  } catch(e){
    if(e.code === 'auth/email-already-in-use'){
      // Puede que ya exista con Google — sugerir eso
      const methods = await firebase.auth().fetchSignInMethodsForEmail(email).catch(()=>[]);
      if(methods.includes('google.com')){
        showLoginErr('Este correo ya tiene cuenta con Google. Usa el botón "Continuar con Google".');
      } else {
        showLoginErr(firebaseErrMsg(e.code));
      }
    } else {
      showLoginErr(firebaseErrMsg(e.code));
    }
  } finally {
    if(btn){ btn.disabled=false; btn.textContent = _loginMode==='register' ? 'Crear cuenta' : 'Iniciar sesión'; }
  }
}

async function loginWithGoogle(){
  if(!window._fbInit){ showFbConfigNote(); return; }
  clearLoginErr();
  try{
    await window._firebase.signInGoogle();
    // onAuthStateChanged maneja el resto
  } catch(e){
    if(e.code !== 'auth/popup-closed-by-user') showLoginErr(firebaseErrMsg(e.code));
  }
}

async function showForgotPassword(){
  if(!window._fbInit){ showFbConfigNote(); return; }
  const email = document.getElementById('loginEmail')?.value?.trim();
  if(!email){ showLoginErr('Ingresa tu correo primero.'); return; }
  clearLoginErr();
  try{
    await window._firebase.resetPassword(email);
    showLoginOk('📧 Correo enviado. Revisa tu bandeja de entrada.');
  } catch(e){
    showLoginErr(firebaseErrMsg(e.code));
  }
}

function showFbConfigNote(){
  const note = document.getElementById('fbConfigNote');
  if(note) note.style.display='block';
  showLoginErr('⚙️ Firebase no está configurado aún.');
}

function firebaseErrMsg(code){
  const msgs = {
    'auth/user-not-found':'No existe una cuenta con ese correo.',
    'auth/wrong-password':'Contraseña incorrecta.',
    'auth/invalid-credential':'Correo o contraseña incorrectos.',
    'auth/email-already-in-use':'Ya existe una cuenta con ese correo. Intenta iniciar sesión.',
    'auth/account-exists-with-different-credential':'Ya existe una cuenta con ese correo pero con otro método de login.',
    'auth/weak-password':'La contraseña es muy débil (mínimo 6 caracteres).',
    'auth/invalid-email':'El correo no es válido.',
    'auth/too-many-requests':'Demasiados intentos. Espera un momento.',
    'auth/network-request-failed':'Sin conexión a internet.',
    'auth/popup-blocked':'El popup fue bloqueado. Permite popups en tu navegador.',
  };
  return msgs[code] || 'Error inesperado. Intenta de nuevo.';
}

// Called when Firebase confirms user is logged in
window.onFirebaseUserReady = async function(user){
  // Cancelar cualquier ejecución anterior y arrancar fresca
  // (onAuthStateChanged puede dispararse 2 veces seguidas en móvil)
  window._fbReadyToken = (window._fbReadyToken || 0) + 1;
  const myToken = window._fbReadyToken;

  showLoadingOverlay('Cargando tu cuenta...');

  // Limpiar localStorage antes de cargar — evita que datos de otro usuario
  // (o sesión anterior) contaminen al usuario que acaba de entrar.
  // Los datos reales vendrán de Firestore.
  try{ localStorage.removeItem('drakon_pwa'); }catch(e){}
  try{ localStorage.removeItem('drakon_groq_key'); }catch(e){}

  let cloudData = null;
  try {
    cloudData = await window._firebase.loadData(user.uid);
  } catch(e){
    console.warn('[Drakón] Error cargando datos de la nube:', e);
  }

  // Si mientras cargábamos llegó una ejecución más nueva, ceder el paso
  if(myToken !== window._fbReadyToken) return;

  if(cloudData && Object.keys(cloudData).length > 0){
    // ── Usuario existente: la nube manda, salvo en progreso acumulado ──
    const localXP     = state.xp            || 0;
    const localStreak = state.streak         || 0;
    const localMsgs   = state.totalMessages  || 0;

    // Todos los campos: la nube gana (incluye theme, groqKey, isPremium, musicEnabled, etc.)
    const OVERWRITE_KEYS = [
      'lastActiveDate','lastMsgDate','msgsToday','charId','lang','theme',
      'nativeLang','groqKey','quizDone','missions','achievements','lessonsCompleted',
      'userLevel','correctionsToday','situationsToday','notifs','sounds','ttsEnabled',
      'savedChats','isPremium','musicEnabled',
    ];
    for(const k of OVERWRITE_KEYS){
      if(cloudData[k] !== undefined) state[k] = cloudData[k];
    }

    // Progreso acumulado: siempre el mayor (evita perder XP por desincronización)
    state.xp            = Math.max(localXP,     cloudData.xp            || 0);
    state.streak        = Math.max(localStreak,  cloudData.streak        || 0);
    state.totalMessages = Math.max(localMsgs,    cloudData.totalMessages || 0);

    // Persistir estado fusionado en localStorage
    try{ localStorage.setItem('drakon_pwa', JSON.stringify(state)); }catch(e){}
    loadGroqKey();

    // Si el local tenía más progreso, subir la versión fusionada a la nube
    const fbUser = window._fbUser || (window._fbAuth && window._fbAuth.currentUser);
    if(localXP > (cloudData.xp||0) || localStreak > (cloudData.streak||0) || localMsgs > (cloudData.totalMessages||0)){
      if(fbUser && window._firebase){
        window._firebase.saveData({ ...state, updatedAt: Date.now() });
      }
    }

  } else {
    // ── Usuario nuevo o sin datos en Firestore ──
    // Subir el estado con fullOverwrite=true para hacer un set limpio
    // (no merge), asegurando que no queden datos fantasma de otro usuario.
    const fbUser = window._fbUser || (window._fbAuth && window._fbAuth.currentUser);
    if(fbUser && window._firebase){
      window._firebase.saveData({ ...state, updatedAt: Date.now() }, true);
    }
  }

  hideLoadingOverlay();
  applyTheme(state.theme||'dark');
  applyNativeLanguageUI();
  updateAllUI();

  // Verificar racha — puede haberse roto entre dispositivos
  const today = getLocalDate();
  if(state.lastActiveDate && state.lastActiveDate !== today && state.lastActiveDate !== getYesterday()){
    state.streak = 0;
    save();
  }
  // Reset diario
  if(state.lastMsgDate !== today){
    state.msgsToday = 0; state.lastMsgDate = today;
    state.correctionsToday = 0; state.situationsToday = 0;
    state.missions = DEF_MISSIONS();
    save();
  }

  if(!state.nativeLang){
    goTo('screen-native');
  } else if(state.lang && (state.quizDone || state.xp>0 || state.totalMessages>0 ||
      (state.lessonsCompleted&&state.lessonsCompleted.length>0) ||
      (state.userLevel && state.userLevel!=='A1'))){
    goToMain();
  } else if(state.lang){
    goToMain();
  } else {
    goTo('screen-intro');
  }
  scheduleMidnightReset();
  updateStreakCountdown();
  setInterval(updateStreakCountdown, 60000);
};

// Called when user signs out
window.onFirebaseSignOut = function(){
  window._fbReadyToken = 0; // cancelar cualquier carga en curso

  // ── Limpiar el state en memoria para que el próximo login no herede datos ──
  // NO limpiar localStorage aquí — se limpia al cargar el próximo usuario.
  // Solo resetear los campos de cuenta para que no "contaminen" otro usuario.
  const RESET_ON_LOGOUT = [
    'xp','streak','totalMessages','lastActiveDate','lastMsgDate','msgsToday',
    'charId','lang','theme','nativeLang','groqKey','quizDone','missions',
    'achievements','lessonsCompleted','userLevel','correctionsToday',
    'situationsToday','notifs','sounds','ttsEnabled','savedChats','isPremium',
    'musicEnabled','chatHistory','savedChats',
  ];
  const defaults = {
    xp:0, streak:0, totalMessages:0, lastActiveDate:null, lastMsgDate:null,
    msgsToday:0, charId:'dragon', lang:null, theme:'dark', nativeLang:null,
    groqKey:null, quizDone:false, missions:DEF_MISSIONS(), achievements:[
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
    lessonsCompleted:[], userLevel:'A1', correctionsToday:0, situationsToday:0,
    notifs:false, sounds:true, ttsEnabled:false, savedChats:[], isPremium:false,
    musicEnabled:true, chatHistory:[], chatSessionId:null,
  };
  for(const k of RESET_ON_LOGOUT){
    if(defaults[k] !== undefined) state[k] = defaults[k];
  }
  // Limpiar localStorage del dispositivo para que no contamine el próximo login
  try{ localStorage.removeItem('drakon_pwa'); }catch(e){}
  try{ localStorage.removeItem('drakon_groq_key'); }catch(e){}

  clearTimeout(_saveCloudTimer); // cancelar cualquier save pendiente

  goTo('screen-login');
  const bn = document.getElementById('bottomNav');
  if(bn) bn.style.display='none';
};

async function logOut(){
  if(window._fbReady && window._fbUser){
    await window._firebase.signOut();
  } else {
    // Local mode logout
    goTo('screen-login');
  }
}

// ── Firebase config setup modal ──
function openFbSetup(){
  const m = document.getElementById('fbSetupModal');
  if(m) m.classList.add('open');
  // Pre-fill if already saved
  const cfg = window._getFirebaseConfig && window._getFirebaseConfig();
  if(cfg){
    const ta = document.getElementById('fbConfigInput');
    if(ta) ta.value = JSON.stringify(cfg, null, 2);
  }
}
function closeFbSetup(){
  const m = document.getElementById('fbSetupModal');
  if(m) m.classList.remove('open');
}
function saveFbConfig(){
  const ta = document.getElementById('fbConfigInput');
  const err = document.getElementById('fbConfigErr');
  if(!ta) return;
  try{
    const cfg = JSON.parse(ta.value.trim());
    if(!cfg.apiKey || !cfg.authDomain || !cfg.projectId){ throw new Error('Faltan campos'); }
    const ok = window._setFirebaseConfig(cfg);
    if(ok){
      if(err) err.textContent='';
      closeFbSetup();
      showToast('✅ Firebase configurado. ¡Ya puedes iniciar sesión!');
      const note = document.getElementById('fbConfigNote');
      if(note) note.style.display='none';
      clearLoginErr();
    } else {
      if(err) err.textContent='❌ Config inválida. Verifica los datos.';
    }
  } catch(e){
    if(err) err.textContent='❌ JSON inválido. Pega el objeto completo de Firebase.';
  }
}

/* ── save() — localStorage inmediato + Firestore con debounce 1.5s ── */
let _saveCloudTimer = null;
function save(){
  // 1. Guardar en localStorage de inmediato (sin importar si hay sesión)
  const data = {
    xp:state.xp, streak:state.streak, totalMessages:state.totalMessages,
    lastActiveDate:state.lastActiveDate, lastMsgDate:state.lastMsgDate, msgsToday:state.msgsToday,
    isPremium:state.isPremium, charId:state.charId, lang:state.lang, theme:state.theme,
    nativeLang:state.nativeLang, groqKey:state.groqKey, quizDone:state.quizDone,
    missions:state.missions, achievements:state.achievements, lessonsCompleted:state.lessonsCompleted,
    userLevel:state.userLevel, correctionsToday:state.correctionsToday, situationsToday:state.situationsToday,
    notifs:state.notifs, sounds:state.sounds, ttsEnabled:state.ttsEnabled, savedChats:state.savedChats,
    musicEnabled:state.musicEnabled,
  };
  try{ localStorage.setItem('drakon_pwa', JSON.stringify(data)); }catch(e){}

  // 2. Sincronizar con Firestore — debounce 1.5s para no spammear escrituras
  // Usar _fbUser directamente (no _fbReady) para no perder datos si el estado
  // de auth tardó en confirmarse (común en móvil)
  const fbUser = window._fbUser || (window._fbAuth && window._fbAuth.currentUser);
  if(window._fbInit && fbUser && window._firebase){
    clearTimeout(_saveCloudTimer);
    _saveCloudTimer = setTimeout(() => {
      window._firebase.saveData({ ...data, updatedAt: Date.now() });
    }, 1500);
  }
}

/* ═══════════════════════════════════════
   GROQ API KEY HELPERS
═══════════════════════════════════════ */

// Double-layer persistence: state + direct localStorage key
const GROQ_LS_KEY = 'drakon_groq_key';

function loadGroqKey(){
  // Try state first (from main save), fallback to dedicated key
  if(!state.groqKey){
    const k = localStorage.getItem(GROQ_LS_KEY);
    if(k) state.groqKey = k;
  }
}

function persistGroqKey(key){
  state.groqKey = key;
  try{ localStorage.setItem(GROQ_LS_KEY, key); }catch(e){}
  save();
}

function onGroqKeyInput(val){
  const st = document.getElementById('groqKeyStatus');
  if(!st) return;
  if(val.startsWith('gsk_') && val.length > 20){
    st.textContent = '✅ Key válida'; st.style.color = 'var(--mint)';
  } else if(val.length > 0){
    st.textContent = '⚠️ Debe empezar con gsk_'; st.style.color = 'var(--coral)';
  } else {
    st.textContent = '';
  }
}

function saveGroqKey(){
  const inp = document.getElementById('groqKeyInput');
  if(!inp) return;
  const val = inp.value.trim();
  if(!val.startsWith('gsk_') || val.length < 20){
    showToast('❌ API key inválida. Debe empezar con gsk_'); return;
  }
  persistGroqKey(val);
  showToast('✅ API key guardada. ¡Ya puedes usar la IA!');
  const st = document.getElementById('groqKeyStatus');
  if(st){ st.textContent = '✅ Guardada correctamente'; st.style.color = 'var(--mint)'; }
  updateNoKeyBanner();
}

function updateNoKeyBanner(){
  const banner = document.getElementById('noKeyBanner');
  if(banner) banner.style.display = state.groqKey ? 'none' : 'block';
}

function loadGroqKeyUI(){
  const inp = document.getElementById('groqKeyInput');
  if(inp){
    inp.value = state.groqKey || '';
    const st = document.getElementById('groqKeyStatus');
    if(st && state.groqKey){ st.textContent = '✅ Key guardada'; st.style.color = 'var(--mint)'; }
  }
}

// ── MODAL FUNCTIONS ──
function showGroqModal(){
  const m = document.getElementById('groqModal');
  if(m) m.classList.add('open');
  const inp = document.getElementById('groqModalInput');
  if(inp){ inp.value = state.groqKey || ''; inp.focus(); }
  const st = document.getElementById('groqModalStatus');
  if(st) st.textContent = '';
}

function closeGroqModal(){
  const m = document.getElementById('groqModal');
  if(m) m.classList.remove('open');
}

function onGroqModalInput(val){
  const st = document.getElementById('groqModalStatus');
  if(!st) return;
  if(val.startsWith('gsk_') && val.length > 20){
    st.textContent = '✅ Key válida — toca Guardar'; st.style.color = 'var(--mint)';
  } else if(val.length > 0){
    st.textContent = '⚠️ Debe empezar con gsk_...'; st.style.color = 'var(--coral)';
  } else {
    st.textContent = '';
  }
}

function saveGroqKeyFromModal(){
  const inp = document.getElementById('groqModalInput');
  if(!inp) return;
  const val = inp.value.trim();
  if(!val.startsWith('gsk_') || val.length < 20){
    const st = document.getElementById('groqModalStatus');
    if(st){ st.textContent = '❌ Key inválida. Cópiala directamente desde Groq.'; st.style.color = 'var(--coral)'; }
    return;
  }
  persistGroqKey(val);
  // Sync the settings field too
  const settInp = document.getElementById('groqKeyInput');
  if(settInp) settInp.value = val;
  const settSt = document.getElementById('groqKeyStatus');
  if(settSt){ settSt.textContent = '✅ Guardada correctamente'; settSt.style.color = 'var(--mint)'; }
  updateNoKeyBanner();
  closeGroqModal();
  showToast('🔥 ¡IA lista! Ya puedes practicar.');
  // Launch the pending chat if there was one
  const mode = state._pendingChatMode || 'free';
  const sit = state._pendingChatSit || null;
  state._pendingChatMode = null;
  state._pendingChatSit = null;
  setTimeout(() => _launchChat(mode, sit), 200);
}

async function sendChatInternal(){
  const typing = addTyping();
  const errBar = document.getElementById('chatErr');
  if(errBar) errBar.style.display = 'none';

  const nativeLang = state.nativeLang || 'es';
  const errMsgs = {
    es: { nokey:'🔑 Falta la API key. Ve a Ajustes → API Key de IA para configurarla (gratis).', timeout:'⏱ La IA tardó demasiado. Revisa tu internet.', net:'📵 Sin conexión a internet.', def:'⚠️ No se pudo conectar con la IA. Intenta de nuevo.' },
    en: { nokey:'🔑 API key missing. Go to Settings → AI API Key to set it up (free).', timeout:'⏱ AI took too long. Check your internet.', net:'📵 No internet connection.', def:'⚠️ Could not connect to AI. Please try again.' },
    pt: { nokey:'🔑 API key em falta. Vá a Configurações → API Key de IA (grátis).', timeout:'⏱ IA demorou demais. Verifique sua internet.', net:'📵 Sem conexão com a internet.', def:'⚠️ Não foi possível conectar à IA. Tente novamente.' },
    fr: { nokey:'🔑 Clé API manquante. Allez dans Paramètres → Clé API IA (gratuit).', timeout:'⏱ L\'IA a mis trop de temps.', net:'📵 Pas de connexion internet.', def:'⚠️ Impossible de se connecter à l\'IA.' },
    de: { nokey:'🔑 API-Schlüssel fehlt. Gehe zu Einstellungen → KI API-Schlüssel (kostenlos).', timeout:'⏱ KI dauerte zu lange.', net:'📵 Keine Internetverbindung.', def:'⚠️ Verbindung zur KI fehlgeschlagen.' },
    zh: { nokey:'🔑 缺少API密钥。前往设置→AI API密钥进行配置（免费）。', timeout:'⏱ AI响应超时。', net:'📵 无网络连接。', def:'⚠️ 无法连接AI，请重试。' },
    ja: { nokey:'🔑 APIキーがありません。設定→AI APIキーで設定してください（無料）。', timeout:'⏱ AIの応答が遅すぎます。', net:'📵 インターネット接続がありません。', def:'⚠️ AIに接続できませんでした。' },
    ko: { nokey:'🔑 API 키가 없습니다. 설정 → AI API 키에서 설정하세요(무료).', timeout:'⏱ AI 응답이 너무 느립니다.', net:'📵 인터넷 연결이 없습니다.', def:'⚠️ AI에 연결할 수 없습니다.' },
  };
  const em = errMsgs[nativeLang] || errMsgs.en;

  if(!state.groqKey){
    typing.remove();
    if(errBar){ errBar.textContent = em.nokey; errBar.style.display = 'block'; }
    return;
  }

  const prompt = buildPrompt();
  const hist = state.chatHistory.slice(-12);

  const messages = [{ role:'system', content: prompt }];
  for(const m of hist){
    messages.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content });
  }

  // Groq models to try in order (all free)
  const models = [
    'llama-3.3-70b-versatile',
    'llama-3.1-8b-instant',
    'gemma2-9b-it',
  ];

  let text = '';
  let lastErr = null;

  for(const model of models){
    try{
      const resp = await Promise.race([
        fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.groqKey}`,
          },
          body: JSON.stringify({ model, messages, max_tokens: 900, temperature: 0.7 }),
        }),
        new Promise((_,rej) => setTimeout(()=>rej(new Error('timeout')), 28000))
      ]);

      if(resp.status === 401){
        // Bad API key
        typing.remove();
        if(errBar){ errBar.textContent = '🔑 API key inválida o expirada. Ve a Ajustes para actualizarla.'; errBar.style.display = 'block'; }
        return;
      }
      if(resp.status === 429){
        // Rate limited — try next model
        await new Promise(r=>setTimeout(r,600));
        continue;
      }
      if(!resp.ok){ throw new Error(`HTTP ${resp.status}`); }

      const data = await resp.json();
      text = data?.choices?.[0]?.message?.content?.trim() || '';
      if(text) break;

    } catch(e){
      lastErr = e;
      const msg = (e.message||'').toLowerCase();
      if(msg.includes('timeout') || msg.includes('500') || msg.includes('503')){
        await new Promise(r=>setTimeout(r,500));
        continue;
      }
      // Network error
      typing.remove();
      let userMsg = em.def;
      if(msg.includes('timeout')) userMsg = em.timeout;
      else if(msg.includes('failed to fetch') || msg.includes('network')) userMsg = em.net;
      if(errBar){ errBar.textContent = userMsg; errBar.style.display = 'block'; }
      return;
    }
  }

  if(!text){
    typing.remove();
    if(errBar){ errBar.textContent = em.def; errBar.style.display = 'block'; }
    return;
  }

  typing.remove();
  addAIMsg(text);
  state.chatHistory.push({ role: 'assistant', content: text });
  state.totalMessages++; state.msgsToday++;
  if(!state.lastMsgDate) state.lastMsgDate = getLocalDate();
  if(text.includes('✏️')) state.correctionsToday++;
  gainXP(text.includes('✏️') ? 12 : 8);
  markActivity(); updateStreakUI(); checkMissions(); checkAchievements(); updateAIBar();
  save();  // guarda XP/stats pero NO el chat — solo se guarda con el botón 💾
}

function addAIMsg(text){
  const area=document.getElementById('chatMsgs'); if(!area) return;
  const ch=getChar();
  const div=document.createElement('div'); div.className='msg';
  // Strip [L] tags from display (legacy cleanup)
  const displayText = text.replace(/\[\/?(L)\]/g,'');
  let html=displayText.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
    .replace(/✏️ CORRECCIÓN:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECCIÓN:$1</div>')
    .replace(/✏️ CORRECTION:(.*?)(?=\n|$)/g,'<div class="corr-block">✏️ CORRECTION:$1</div>')
    .replace(/\n/g,'<br>');
  div.innerHTML='<div class="av"><img src="'+ch.img+'" style="width:26px;height:26px;object-fit:contain"></div><div class="bubble ai">'+html+'</div>';
  area.appendChild(div); area.scrollTop=area.scrollHeight;
  if(state.ttsEnabled) speakText(text);
}
function addUserMsg(text){
  const area=document.getElementById('chatMsgs'); if(!area) return;
  const div=document.createElement('div'); div.className='msg user';
  div.innerHTML=`<div class="bubble user">${text}</div><div class="av av-u">YO</div>`;
  area.appendChild(div); area.scrollTop=area.scrollHeight;
}
function addTyping(){
  const area=document.getElementById('chatMsgs'); if(!area) return {remove:()=>{}};
  const ch=getChar();
  const div=document.createElement('div'); div.className='msg'; div.id='typingMsg';
  div.innerHTML='<div class="av"><img src="'+ch.img+'" style="width:26px;height:26px;object-fit:contain"></div><div class="typing"><span></span><span></span><span></span></div>';
  area.appendChild(div); area.scrollTop=area.scrollHeight;
  return div;
}


/* ═══════════════════════════════════════
   PICKUP DE EVENTOS FIREBASE PENDIENTES
   Firebase puede disparar onAuthStateChanged antes de que auth.js cargue.
   Al terminar de cargar este módulo, procesamos cualquier evento que quedó en cola.
═══════════════════════════════════════ */
(function pickupPendingAuthEvents(){
  if(window._pendingAuthUser){
    const user = window._pendingAuthUser;
    window._pendingAuthUser = null;
    window.onFirebaseUserReady(user);
  } else if(window._pendingSignOut){
    window._pendingSignOut = false;
    window.onFirebaseSignOut();
  }
})();
