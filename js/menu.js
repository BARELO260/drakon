/* ═══════════════════════════════════════
   menu.js — native lang selection, lang grid, quiz, onboarding flow
   Dependencias: state.js, data.js, ui.js
   Usado por: app.js
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   NATIVE LANGUAGE SELECTION
═══════════════════════════════════════ */
const NATIVE_LANGS = [
  {code:'es', flag:'🇪🇸', uiName:'Español',   selfName:'Español',    title:'¿Cuál es tu idioma?',           sub:'Elige el idioma que hablas nativamente', btn:'Continuar →'},
  {code:'en', flag:'🇺🇸', uiName:'English',   selfName:'English',    title:'What\'s your language?',        sub:'Choose the language you speak natively', btn:'Continue →'},
  {code:'pt', flag:'🇧🇷', uiName:'Portuguese',selfName:'Português',  title:'Qual é o seu idioma?',          sub:'Escolha o idioma que você fala nativamente', btn:'Continuar →'},
  {code:'fr', flag:'🇫🇷', uiName:'French',    selfName:'Français',   title:'Quelle est votre langue ?',     sub:'Choisissez votre langue natale', btn:'Continuer →'},
  {code:'de', flag:'🇩🇪', uiName:'German',    selfName:'Deutsch',    title:'Was ist deine Sprache?',        sub:'Wähle deine Muttersprache', btn:'Weiter →'},
  {code:'it', flag:'🇮🇹', uiName:'Italian',   selfName:'Italiano',   title:'Qual è la tua lingua?',         sub:'Scegli la lingua che parli nativamente', btn:'Continua →'},
  {code:'zh', flag:'🇨🇳', uiName:'Chinese',   selfName:'中文',        title:'你的语言是什么？',                    sub:'选择你的母语', btn:'继续 →'},
  {code:'ja', flag:'🇯🇵', uiName:'Japanese',  selfName:'日本語',      title:'あなたの言語は？',                  sub:'母語を選んでください', btn:'続ける →'},
  {code:'ko', flag:'🇰🇷', uiName:'Korean',    selfName:'한국어',      title:'당신의 언어는 무엇입니까?',            sub:'모국어를 선택하세요', btn:'계속 →'},
  {code:'ru', flag:'🇷🇺', uiName:'Russian',   selfName:'Русский',    title:'Какой ваш язык?',               sub:'Выберите ваш родной язык', btn:'Продолжить →'},
  {code:'ar', flag:'🇸🇦', uiName:'Arabic',    selfName:'العربية',    title:'ما هي لغتك؟',                   sub:'اختر لغتك الأم', btn:'متابعة →'},
  {code:'tr', flag:'🇹🇷', uiName:'Turkish',   selfName:'Türkçe',     title:'Diliniz nedir?',                sub:'Ana dilinizi seçin', btn:'Devam Et →'},
  {code:'nl', flag:'🇳🇱', uiName:'Dutch',     selfName:'Nederlands', title:'Wat is uw taal?',               sub:'Kies de taal die je moedertaal is', btn:'Doorgaan →'},
  {code:'pl', flag:'🇵🇱', uiName:'Polish',    selfName:'Polski',     title:'Jaki jest twój język?',         sub:'Wybierz swój język ojczysty', btn:'Kontynuuj →'},
];

// UI strings per native language for the whole app
const UI_STRINGS = {
  es: { learnQ:'¿Qué idioma quieres aprender?', learnSub:'Elige tu aventura lingüística 🌍', start:'¡Empezar ahora! 🚀', companion:'Elige tu compañero', levelQ:'¿Cuál es tu nivel?', levelSub:'5 preguntas para personalizar tu camino 🐲' },
  en: { learnQ:'What language do you want to learn?', learnSub:'Choose your linguistic adventure 🌍', start:'Start now! 🚀', companion:'Choose your companion', levelQ:'What\'s your level?', levelSub:'5 questions to personalize your journey 🐲' },
  pt: { learnQ:'Qual idioma você quer aprender?', learnSub:'Escolha sua aventura linguística 🌍', start:'Começar agora! 🚀', companion:'Escolha seu companheiro', levelQ:'Qual é o seu nível?', levelSub:'5 perguntas para personalizar sua jornada 🐲' },
  fr: { learnQ:'Quelle langue voulez-vous apprendre ?', learnSub:'Choisissez votre aventure linguistique 🌍', start:'Commencer maintenant ! 🚀', companion:'Choisissez votre compagnon', levelQ:'Quel est votre niveau ?', levelSub:'5 questions pour personnaliser votre parcours 🐲' },
  de: { learnQ:'Welche Sprache möchtest du lernen?', learnSub:'Wähle dein sprachliches Abenteuer 🌍', start:'Jetzt starten! 🚀', companion:'Wähle deinen Begleiter', levelQ:'Was ist dein Niveau?', levelSub:'5 Fragen, um deinen Weg zu personalisieren 🐲' },
  it: { learnQ:'Quale lingua vuoi imparare?', learnSub:'Scegli la tua avventura linguistica 🌍', start:'Inizia ora! 🚀', companion:'Scegli il tuo compagno', levelQ:'Qual è il tuo livello?', levelSub:'5 domande per personalizzare il tuo percorso 🐲' },
  zh: { learnQ:'你想学哪种语言？', learnSub:'选择你的语言冒险 🌍', start:'现在开始！🚀', companion:'选择你的伙伴', levelQ:'你的水平如何？', levelSub:'5个问题来个性化你的旅程 🐲' },
  ja: { learnQ:'どの言語を学びたいですか？', learnSub:'あなたの言語の冒険を選んでください 🌍', start:'今すぐ始める！🚀', companion:'コンパニオンを選ぶ', levelQ:'あなたのレベルは？', levelSub:'あなたの旅をカスタマイズする5つの質問 🐲' },
  ko: { learnQ:'어떤 언어를 배우고 싶으세요?', learnSub:'언어 모험을 선택하세요 🌍', start:'지금 시작! 🚀', companion:'동반자 선택', levelQ:'당신의 수준은?', levelSub:'여정을 맞춤화하는 5가지 질문 🐲' },
  ru: { learnQ:'Какой язык хочешь выучить?', learnSub:'Выбери своё языковое приключение 🌍', start:'Начать сейчас! 🚀', companion:'Выбери своего компаньона', levelQ:'Каков твой уровень?', levelSub:'5 вопросов для персонализации твоего пути 🐲' },
  ar: { learnQ:'ما اللغة التي تريد تعلمها؟', learnSub:'اختر مغامرتك اللغوية 🌍', start:'ابدأ الآن! 🚀', companion:'اختر رفيقك', levelQ:'ما هو مستواك؟', levelSub:'٥ أسئلة لتخصيص رحلتك 🐲' },
  tr: { learnQ:'Hangi dili öğrenmek istiyorsunuz?', learnSub:'Dil maceranızı seçin 🌍', start:'Şimdi başla! 🚀', companion:'Arkadaşını seç', levelQ:'Seviyeniz nedir?', levelSub:'Yolculuğunuzu kişiselleştirmek için 5 soru 🐲' },
  nl: { learnQ:'Welke taal wil je leren?', learnSub:'Kies jouw taalavontuur 🌍', start:'Nu beginnen! 🚀', companion:'Kies je metgezel', levelQ:'Wat is jouw niveau?', levelSub:'5 vragen om jouw reis te personaliseren 🐲' },
  pl: { learnQ:'Jakiego języka chcesz się nauczyć?', learnSub:'Wybierz swoją językową przygodę 🌍', start:'Zacznij teraz! 🚀', companion:'Wybierz swojego towarzysza', levelQ:'Jaki jest twój poziom?', levelSub:'5 pytań, aby spersonalizować twoją podróż 🐲' },
};

function getUI(key){ return (UI_STRINGS[state.nativeLang] || UI_STRINGS.es)[key] || UI_STRINGS.es[key]; }

function renderNativeLangs(){
  const grid = document.getElementById('nativeGrid'); if(!grid) return;
  grid.innerHTML = NATIVE_LANGS.map(l=>`
    <div class="native-card ${state.nativeLang===l.code?'sel':''}" onclick="selectNativeLang('${l.code}')">
      <div class="native-flag">${l.flag}</div>
      <div class="native-name">${l.selfName}</div>
    </div>`).join('');
}

function selectNativeLang(code){
  state.nativeLang = code;
  renderNativeLangs();
  const nl = NATIVE_LANGS.find(l=>l.code===code);
  if(nl){
    const btn = document.getElementById('nativeNextBtn');
    if(btn){ btn.classList.add('show'); btn.textContent = nl.btn; }
    const title = document.getElementById('nativeTitleText');
    if(title) title.textContent = nl.title;
    const sub = document.getElementById('nativeSubText');
    if(sub) sub.textContent = nl.sub;
  }
}

function confirmNativeLang(){
  if(!state.nativeLang) return;
  save();
  applyNativeLanguageUI();
  goTo('screen-intro');
  scheduleMidnightReset();
  updateStreakCountdown();
  setInterval(updateStreakCountdown, 60000);
}

function applyNativeLanguageUI(){
  const ui = UI_STRINGS[state.nativeLang] || UI_STRINGS.es;
  // Update learn screen
  const lhdr = document.querySelector('#screen-lang .lang-hdr h2');
  if(lhdr) lhdr.textContent = ui.learnQ;
  const lsub = document.querySelector('#screen-lang .lang-hdr p');
  if(lsub) lsub.textContent = ui.learnSub;
  // Update intro button
  const ibtn = document.querySelector('.intro-btn');
  if(ibtn) ibtn.textContent = ui.start;
  // Update companion text
  const compTxt = document.querySelector('#screen-intro > div[style]');
  // Update quiz header
  const qhdr = document.querySelector('#screen-quiz .quiz-hdr h2');
  if(qhdr) qhdr.textContent = ui.levelQ;
  const qsub = document.querySelector('#screen-quiz .quiz-hdr p');
  if(qsub) qsub.textContent = ui.levelSub;
  // Update search placeholder
  const srch = document.getElementById('langSearch');
  if(srch){
    const placeholders = {es:'Buscar idioma...',en:'Search language...',pt:'Buscar idioma...',fr:'Rechercher une langue...',de:'Sprache suchen...',it:'Cerca lingua...',zh:'搜索语言...',ja:'言語を検索...',ko:'언어 검색...',ru:'Поиск языка...',ar:'البحث عن لغة...',tr:'Dil ara...',nl:'Taal zoeken...',pl:'Szukaj języka...'};
    srch.placeholder = placeholders[state.nativeLang] || placeholders.en;
  }
}

/* ═══════════════════════════════════════
   LANG
═══════════════════════════════════════ */
function renderLangs(filter=''){
  const grid=document.getElementById('langGrid'); if(!grid) return;
  const f=filter.toLowerCase();
  const filtered=LANGS.filter(l=>l.name.toLowerCase().includes(f)||l.native.toLowerCase().includes(f));
  grid.innerHTML=filtered.map(l=>`
    <div class="lang-card ${state.lang?.code===l.code?'sel':''}" onclick="selectLang('${l.code}')">
      <div class="lang-flag">${l.flag}</div>
      <div><div class="ln">${l.name}</div><div class="lnn">${l.native}</div></div>
    </div>`).join('');
}
function selectLang(code){
  state.lang=LANGS.find(l=>l.code===code);
  renderLangs(document.getElementById('langSearch')?.value||'');
  const btn=document.getElementById('langNextBtn'); if(btn){ btn.classList.add('show'); btn.textContent=`Aprender ${state.lang.name} ${state.lang.flag} →`; }
  save();
}
function filterLangs(){ renderLangs(document.getElementById('langSearch')?.value||''); }
function afterLangSelect(){
  if(!state.lang) return;
  if(state.quizDone || state.xp>0 || state.totalMessages>0 || state.lessonsCompleted.length>0 || (state.userLevel && state.userLevel!=='A1')){
    goToMain();
  } else {
    goTo('screen-quiz'); startQuiz();
  }
}
function goToMain(){
  // Show logged-in user email in settings
  const emailEl = document.getElementById('sessionUserEmail');
  if(emailEl && window._fbUser) emailEl.textContent = window._fbUser.email || 'Sesión activa';
  document.getElementById('bottomNav').style.display='flex';
  updateAllUI();

  // Si venimos de games.html con un tab pedido (p.ej. index.html?tab=situations),
  // aterrizamos ahí en vez de siempre en Inicio — así la barra inferior se
  // siente continua entre la app y la Zona de Juegos.
  const wantedTab = new URLSearchParams(window.location.search).get('tab');
  if(wantedTab && ['home','situations','chat','profile'].includes(wantedTab)){
    navTo(wantedTab);
    history.replaceState(null, '', window.location.pathname); // limpiar la URL
  } else {
    goTo('screen-main');
  }
}

/* ═══════════════════════════════════════
   QUIZ — MULTI-LANGUAGE AWARE
═══════════════════════════════════════ */
function getQuizQuestions(langCode){
  const langName = state.lang?.name || 'el idioma';
  const GENERIC = [
    {q:`¿Cuánto tiempo llevas estudiando ${langName}?`,opts:['Nunca lo he estudiado 🆕','Menos de 3 meses','6 meses a 1 año','2+ años'],scores:[0,1,2,3]},
    {q:`¿Puedes mantener una conversación básica en ${langName}?`,opts:['No, apenas conozco saludos','Puedo decir frases muy simples','Sí, con vocabulario limitado','Sí, con bastante fluidez'],scores:[0,1,2,3]},
    {q:`¿Entiendes textos escritos en ${langName}?`,opts:['No entiendo nada','Solo palabras sueltas','Frases y párrafos simples','Textos complejos sin problema'],scores:[0,1,2,3]},
    {q:`¿Con qué frecuencia practicas ${langName}?`,opts:['Nunca antes de hoy','Ocasionalmente','Varias veces por semana','Casi todos los días'],scores:[0,1,2,3]},
    {q:`¿Puedes escribir un párrafo corto en ${langName}?`,opts:['No puedo escribir nada','Solo oraciones muy simples','Sí, con algunos errores','Sí, con buena gramática'],scores:[0,1,2,3]},
  ];
  const SPECIFIC = {
    EN:[
      {q:'¿Cuánto tiempo llevas estudiando inglés?',opts:['Nunca 🆕','Menos de 3 meses','6 meses a 1 año','2+ años'],scores:[0,1,2,3]},
      {q:'Elige el artículo correcto:',snippet:'"___ apple is on the table."',opts:['A','An','The','—'],scores:[0,3,1,0],correct:1},
      {q:'¿Qué significa: "I haven\'t seen you in ages!"?',opts:['¡No te he visto en años!','¡Eres muy joven!','¡Nos vemos luego!','¡No te vi llegar!'],scores:[3,0,1,0],correct:0},
      {q:'Elige la forma correcta:',snippet:'"She ___ to the store yesterday."',opts:['go','goes','went','has gone'],scores:[0,0,3,2],correct:2},
      {q:'¿Puedes usar tiempos verbales avanzados como Present Perfect o Passive Voice?',opts:['No conozco esos tiempos','Los conozco pero me confundo','Sí, con alguna dificultad','Sí, con soltura'],scores:[0,1,2,3]},
    ],
    FR:[
      {q:'¿Cuánto tiempo llevas estudiando francés?',opts:['Nunca 🆕','Menos de 3 meses','6 meses a 1 año','2+ años'],scores:[0,1,2,3]},
      {q:'¿Qué significa "Bonjour"?',opts:['Buenas noches','Buenos días / Hola','Adiós','Por favor'],scores:[0,3,0,0],correct:1},
      {q:'¿Cuál es el artículo correcto?',snippet:'"___ chat est mignon."',opts:['Le','La','Les','Des'],scores:[3,0,0,0],correct:0},
      {q:'"Je suis allé(e)" usa el auxiliar:',opts:['Avoir','Être','Faire','Aller'],scores:[0,3,0,0],correct:1},
      {q:'¿Puedes usar el Subjonctif en francés?',opts:['No sé qué es eso','Lo he escuchado pero no lo uso','A veces con dificultad','Sí con bastante soltura'],scores:[0,1,2,3]},
    ],
    DE:[
      {q:'¿Cuánto tiempo llevas estudiando alemán?',opts:['Nunca 🆕','Menos de 3 meses','6 meses a 1 año','2+ años'],scores:[0,1,2,3]},
      {q:'¿Qué significa "Guten Morgen"?',opts:['Buenas noches','Buenas tardes','Buenos días','Hola informal'],scores:[0,0,3,0],correct:2},
      {q:'¿Qué función tienen der/die/das?',opts:['Verbos auxiliares','Artículos que marcan género','Pronombres personales','Preposiciones'],scores:[0,3,0,0],correct:1},
      {q:'"Ich habe gegessen" está en:',opts:['Präsens','Perfekt','Präteritum','Futur'],scores:[0,3,0,0],correct:1},
      {q:'¿Puedes usar el Konjunktiv II en alemán?',opts:['No sé qué es','Lo he visto pero no lo uso','A veces','Sí con bastante soltura'],scores:[0,1,2,3]},
    ],
  };
  return SPECIFIC[langCode] || GENERIC;
}

let quizQsActive=[];
let quizStep=0,quizScore=0,quizLocked=false;
function startQuiz(){
  quizStep=0; quizScore=0;
  quizQsActive=getQuizQuestions(state.lang?.code||'EN');
  const langName=state.lang?.name||'el idioma';
  const hdr=document.querySelector('#screen-quiz .quiz-hdr h2');
  if(hdr) hdr.textContent=`¿Cuál es tu nivel en ${langName}?`;
  renderQuizStep();
}
function renderQuizStep(){
  const q=quizQsActive[quizStep];
  document.getElementById('quizStep').textContent=`Pregunta ${quizStep+1} de ${quizQsActive.length}`;
  document.getElementById('quizProgFill').style.width=`${(quizStep+1)/quizQsActive.length*100}%`;
  quizLocked=false;
  document.getElementById('quizContent').innerHTML=`
    <div class="quiz-card">
      <div class="qtext">${q.q}</div>
      ${q.snippet?`<div class="qsnip">${q.snippet}</div>`:''}
      <div class="qopts">${q.opts.map((o,i)=>`<button class="qopt" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>
      <div class="qfb" id="qfb"></div>
    </div>`;
}
function answerQuiz(i){
  if(quizLocked) return; quizLocked=true;
  const q=quizQsActive[quizStep]; quizScore+=q.scores[i];
  const opts=document.querySelectorAll('.qopt'); opts.forEach(o=>o.disabled=true);
  if(q.correct!==undefined){ opts[i].classList.add(i===q.correct?'ok':'no'); if(i!==q.correct) opts[q.correct].classList.add('ok'); }
  else opts[i].classList.add('ok');
  document.getElementById('qfb').textContent=i===q.correct?'¡Correcto! 🎉':(q.correct!==undefined?'No del todo... ✗':'¡Anotado! 👍');
  setTimeout(()=>{ quizStep++; if(quizStep>=quizQsActive.length) showQuizResult(); else renderQuizStep(); },1100);
}
function showQuizResult(){
  // Conservative scoring: max possible = sum of max per question
  const max=quizQsActive.reduce((a,q)=>a+Math.max(...q.scores),0);
  const pct=quizScore/max;
  const langName=state.lang?.name||'el idioma';
  let level,desc,emoji;
  // Conservative thresholds — 5 questions can't reliably place anyone above B1
  if(pct<.18){level='A1';emoji='🐣';desc=`¡Perfecto punto de partida en ${langName}! Construiremos una base sólida desde cero.`;}
  else if(pct<.38){level='A1';emoji='🌱';desc=`Empezamos en A1 para asegurarnos de que tus bases en ${langName} sean fuertes. ¡Avanzarás rápido!`;}
  else if(pct<.56){level='A2';emoji='🔥';desc=`Tienes nociones de ${langName}. Consolidaremos gramática y vocabulario esencial en A2.`;}
  else if(pct<.78){level='B1';emoji='⚡';desc=`¡Buen nivel! Trabajaremos en fluidez y estructuras intermedias de ${langName}.`;}
  else{level='B1';emoji='💪';desc=`Muestras buen conocimiento de ${langName}. Empezamos en B1 para verificar que tus bases sean sólidas y luego avanzamos.`;}
  state.userLevel=level; save();
  document.getElementById('quizContent').innerHTML=`
    <div class="quiz-result">
      <span class="qr-icon">${emoji}</span>
      <div style="font-size:13px;color:var(--muted);font-weight:700;margin-bottom:2px">Tu nivel de partida en ${langName}</div>
      <div class="qr-level">${level}</div>
      <div class="qr-desc">${desc}</div>
      <div style="font-size:11px;color:var(--muted);margin:0 0 14px;padding:8px 12px;background:rgba(245,158,11,.07);border-radius:8px;border:1px solid rgba(245,158,11,.2)">💡 El nivel real se va ajustando conforme avances. ¡5 preguntas son solo el punto de partida!</div>
      <button class="qr-btn" onclick="afterQuiz()">¡Empezar con Drakón! 🚀</button>
    </div>`;
}
function afterQuiz(){ state.quizDone = true; save(); goToMain(); showToast(`¡Bienvenido a ${state.lang?.name||''}! Nivel ${state.userLevel} 🐲`); }

