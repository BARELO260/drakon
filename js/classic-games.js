/* Juegos clásicos: todos funcionan sin servicios externos. */
const ClassicGames = (() => {
  let type = '', score = 0, state = {}, chessMode = 'local', chessColor = 'white';
  const $ = id => document.getElementById(id);
  const host = () => $('classicGame');
  const shuffle = a => [...a].sort(() => Math.random() - .5);

  /* ── Temas de tablero de ajedrez ──────────────────────────
     Se guardan en localStorage para recordarse entre partidas.
     Cada tema define las variables --cb-* que usa el CSS (ver
     games.css, bloque "AJEDREZ"). */
  const CHESS_THEMES = [
    {id:'dragon',  label:'Reino Dragón', emoji:'🐉'},
    {id:'wood',   label:'Madera',  emoji:'🪵'},
    {id:'fire',   label:'Fuego',   emoji:'🔥'},
    {id:'galaxy', label:'Galaxia', emoji:'🌌'},
    {id:'ocean',  label:'Océano',  emoji:'🌊'},
    {id:'neon',   label:'Neón',    emoji:'💠'},
  ];
  let boardTheme = 'dragon';
  try { boardTheme = (typeof localStorage!=='undefined' && localStorage.getItem('drakon_chess_theme')) || 'dragon'; } catch(e) {}
  if (!CHESS_THEMES.some(t=>t.id===boardTheme)) boardTheme = 'dragon';

  function setChessTheme(id){
    if (!CHESS_THEMES.some(t=>t.id===id)) return;
    boardTheme = id;
    try { localStorage.setItem('drakon_chess_theme', id); } catch(e) {}
    closeThemePicker();
    if (type === 'chess') drawChess();
  }
  function openThemePicker(){
    if ($('chessThemeOverlay')) return;
    const wrap = document.createElement('div');
    wrap.id = 'chessThemeOverlay';
    wrap.className = 'chess-theme-overlay';
    wrap.onclick = (e) => { if (e.target === wrap) closeThemePicker(); };
    wrap.innerHTML = `<div class="chess-theme-sheet">
      <div class="chess-theme-sheet__title">🎨 Diseño del tablero</div>
      <div class="chess-theme-sheet__sub">Elige el estilo con el que quieres jugar.</div>
      <div class="chess-theme-grid">${CHESS_THEMES.map(t=>`
        <button class="chess-theme-card ${t.id===boardTheme?'active':''}" onclick="ClassicGames.setChessTheme('${t.id}')">
          <div class="chess-theme-swatch cb-theme-${t.id}"><span></span><span></span><span></span><span></span></div>
          <div class="chess-theme-card__label">${t.emoji} ${t.label}</div>
          <div class="chess-theme-card__check">${t.id===boardTheme?'✓ Actual':''}</div>
        </button>`).join('')}</div>
      <button class="chess-theme-close" onclick="ClassicGames.closeThemePicker()">Cerrar</button>
    </div>`;
    document.body.appendChild(wrap);
  }
  function closeThemePicker(){ $('chessThemeOverlay')?.remove(); }

  /* ── Reverso de cartas del solitario ──────────────────────
     Dos diseños disponibles (assets/games/solitaire/{blue,red}card.png),
     elegibles desde el mismo botón de "estilo" que usa el ajedrez.
     Se guarda en localStorage para recordarse entre partidas. */
  const CARD_BACKS = [
    {id:'blue', label:'Azul', file:'bluecard.png'},
    {id:'red',  label:'Rojo', file:'redcard.png'},
  ];
  let cardBack = 'blue';
  try { cardBack = (typeof localStorage!=='undefined' && localStorage.getItem('drakon_card_back')) || 'blue'; } catch(e) {}
  if (!CARD_BACKS.some(b=>b.id===cardBack)) cardBack = 'blue';
  const cardBackSrc = () => `assets/games/solitaire/${CARD_BACKS.find(b=>b.id===cardBack).file}`;

  function setCardBack(id){
    if (!CARD_BACKS.some(b=>b.id===id)) return;
    cardBack = id;
    try { localStorage.setItem('drakon_card_back', id); } catch(e) {}
    closeThemePicker();
    if (type === 'solitaire') drawSolitaire();
  }
  function openCardBackPicker(){
    if ($('chessThemeOverlay')) return;
    const wrap = document.createElement('div');
    wrap.id = 'chessThemeOverlay';
    wrap.className = 'chess-theme-overlay';
    wrap.onclick = (e) => { if (e.target === wrap) closeThemePicker(); };
    wrap.innerHTML = `<div class="chess-theme-sheet">
      <div class="chess-theme-sheet__title">🎴 Reverso de las cartas</div>
      <div class="chess-theme-sheet__sub">Elige el diseño con el que quieres jugar.</div>
      <div class="chess-theme-grid grid-2">${CARD_BACKS.map(b=>`
        <button class="chess-theme-card ${b.id===cardBack?'active':''}" onclick="ClassicGames.setCardBack('${b.id}')">
          <div class="chess-theme-swatch sol-back-swatch"><img src="assets/games/solitaire/${b.file}" alt=""></div>
          <div class="chess-theme-card__label">${b.label}</div>
          <div class="chess-theme-card__check">${b.id===cardBack?'✓ Actual':''}</div>
        </button>`).join('')}</div>
      <button class="chess-theme-close" onclick="ClassicGames.closeThemePicker()">Cerrar</button>
    </div>`;
    document.body.appendChild(wrap);
  }
  /* El botón de estilo en la barra superior es compartido: abre el
     selector correspondiente según el juego activo. */
  function openStylePicker(){ return type === 'solitaire' ? openCardBackPicker() : openThemePicker(); }

  const clean = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z]/g, '').toUpperCase();
  const difficulty = () => (typeof GameSession !== 'undefined' && GameSession.difficulty) || 'beginner';
  const level = () => ({beginner:0,medium:1,pro:2,legendary:3}[difficulty()] || 0);
  function words() {
    const pool = DrakonBridge.getExercisePool(DrakonBridge.getLangCode());
    return [...new Set(pool.flatMap(q => [q.question, ...(q.options || [])]).map(clean).filter(w => w.length >= 3 && w.length <= 10))];
  }
  function start(kind) {
    type = kind; score = 0; state = {}; GameSession.currentGame = 'classic';
    host().classList.toggle('is-chess', kind === 'chess');
    const meta = {hangman:['🎯 Ahorcado','Vocabulario de tus lecciones'],wordsearch:['🔎 Buscador de palabras','Encuentra todas las palabras'],sudoku:['🔢 Sudoku','Completa cada fila, columna y bloque'],solitaire:['🃏 Solitario','Klondike · toca origen y destino'],kakuro:['➕ Cross Sums','Cada grupo suma 6 sin repetir'],chess:['♟️ Ajedrez','Partida local: blancas contra negras']}[kind];
    $('classicTitle').textContent = meta[0]; $('classicSub').textContent = meta[1]; $('classicScore').textContent = '0';
    const themeBtn = $('classicThemeBtn'); if (themeBtn) themeBtn.style.display = (kind==='chess'||kind==='solitaire') ? 'flex' : 'none';
    GamesCore.showScreen('screen-classic');
    ({hangman,wordsearch,sudoku,solitaire,kakuro,chess})[kind]();
  }
  function add(n) { score += n; $('classicScore').textContent = score; }
  function finish(label, pct=100) { GameSession.currentGame=null; GamesCore.showResult({game:'classic',won:true,stats:{xp:score||100,pct,sub:label,items:[{val:score||100,lbl:'PUNTOS'}]}}); }

  function hangman() {
    const list = words(); if (!list.length) return empty();
    /* Dificultad claramente escalonada: Principiante = palabras cortas
       y muchos intentos; Legendario = palabras largas y muy pocos
       intentos. Antes solo variaba un poco el intento máximo (8→5) y
       la longitud máxima, así que apenas se notaba la diferencia. */
    const ranges = [[3,5],[4,7],[6,9],[8,12]][level()];
    const attempts = [10,8,6,4][level()];
    let pool = list.filter(w => w.length>=ranges[0] && w.length<=ranges[1]);
    if (!pool.length) pool = list;
    state.word = shuffle(pool)[0]; state.used=[]; state.left=attempts; state.maxLeft=attempts; state.hintsUsed=0;
    drawHangman();
  }

  /* Dibuja el muñeco de la horca de verdad (horca + cabeza, torso,
     brazos y piernas que se van agregando), en vez de una hilera de
     símbolos sueltos uno al lado del otro que antes no se parecía en
     nada a un ahorcado. Las etapas se reparten proporcionalmente a
     los intentos de la dificultad actual, así el dibujo siempre
     termina justo cuando se acaban los intentos. */
  function hangmanFigureSVG(wrongCount, maxLeft) {
    const stage = maxLeft>0 ? Math.min(6, Math.ceil(wrongCount / maxLeft * 6)) : 0;
    let parts = `<line x1="8" y1="150" x2="72" y2="150"/><line x1="30" y1="150" x2="30" y2="14"/><line x1="28" y1="14" x2="102" y2="14"/><line x1="102" y1="14" x2="102" y2="30"/>`;
    if (stage>=1) parts += `<circle cx="102" cy="44" r="14" class="hg-body"/>`;
    if (stage>=2) parts += `<line x1="102" y1="58" x2="102" y2="102" class="hg-body"/>`;
    if (stage>=3) parts += `<line x1="102" y1="68" x2="83" y2="88" class="hg-body"/>`;
    if (stage>=4) parts += `<line x1="102" y1="68" x2="121" y2="88" class="hg-body"/>`;
    if (stage>=5) parts += `<line x1="102" y1="102" x2="86" y2="132" class="hg-body"/>`;
    if (stage>=6) parts += `<line x1="102" y1="102" x2="118" y2="132" class="hg-body"/>`;
    return `<svg viewBox="0 0 140 160" class="hang-svg">${parts}</svg>`;
  }

  function drawHangman() {
    const w = state.word;
    const tiles = w.split('').map(c => `<span class="hang-tile ${state.used.includes(c)?'filled':''}">${state.used.includes(c)?c:''}</span>`).join('');
    const wrong = state.maxLeft - state.left;
    const letters='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    const hiddenLeft = w.split('').some(c=>!state.used.includes(c));
    const canHint = hiddenLeft && state.left > 1;
    host().innerHTML = `<div class="classic-center">${hangmanFigureSVG(wrong, state.maxLeft)}<div class="hang-word">${tiles}</div><p>Intentos restantes: <b>${state.left}</b>${state.hintsUsed?` · Pistas usadas: <b>${state.hintsUsed}</b>`:''}</p><button class="classic-action classic-action--ghost" onclick="ClassicGames.hint()" ${canHint?'':'disabled'}>💡 Pista (revela una letra · cuesta 1 intento)</button><div class="letter-grid">${letters.map(l=>`<button ${state.used.includes(l)?'disabled':''} onclick="ClassicGames.letter('${l}')">${l}</button>`).join('')}</div></div>`;
  }

  function letter(l) {
    if (state.used.includes(l)) return;
    state.used.push(l);
    if (!state.word.includes(l)) state.left--;
    if (state.word.split('').every(c=>state.used.includes(c))) { add(120+level()*40+state.left*15); return finish(`¡Encontraste “${state.word}”!`); }
    if (!state.left) { GamesCore.toast(`La palabra era ${state.word}`); return setTimeout(hangman,1000); }
    drawHangman();
  }

  /* Pista: revela una letra oculta al azar, pero cuesta un intento —
     así sigue existiendo tensión y la ayuda no rompe la dificultad
     que ya elegiste. */
  function hint() {
    const hidden = [...new Set(state.word.split(''))].filter(c=>!state.used.includes(c));
    if (!hidden.length || state.left <= 1) return;
    const pick = hidden[Math.floor(Math.random()*hidden.length)];
    state.used.push(pick);
    state.left--;
    state.hintsUsed = (state.hintsUsed||0) + 1;
    if (state.word.split('').every(c=>state.used.includes(c))) { add(90+level()*30+state.left*15); return finish(`¡Encontraste “${state.word}”!`); }
    if (!state.left) { GamesCore.toast(`La palabra era ${state.word}`); return setTimeout(hangman,1000); }
    drawHangman();
  }

  function wordsearch() {
    /* Escalonado con más contraste: tablero y cantidad de palabras
       crecen bastante más de un nivel al siguiente (antes solo subía
       1 casilla y 1 palabra por nivel, casi imperceptible). */
    const n=[7,9,11,13][level()], wordCount=[3,5,7,9][level()];
    const candidates=shuffle(words()).filter(w=>w.length<=n).slice(0,14), grid=Array.from({length:n},()=>Array(n).fill('')), list=[];
    candidates.forEach(word=> { let placed=false; for(let k=0;k<100&&!placed;k++){const dirs=[[0,1],[1,0],[1,1],[-1,1]], [dr,dc]=dirs[Math.floor(Math.random()*dirs.length)], rMin=dr<0?word.length-1:0, rMax=dr>0?n-word.length:n-1, cMax=dc>0?n-word.length:n-1, r=rMin+Math.floor(Math.random()*(rMax-rMin+1)), c=Math.floor(Math.random()*(cMax+1)); if(word.split('').every((x,j)=>!grid[r+dr*j][c+dc*j]||grid[r+dr*j][c+dc*j]===x)){word.split('').forEach((x,j)=>grid[r+dr*j][c+dc*j]=x);list.push(word);placed=true;} } });
    if(list.length<3) return empty(); state={grid, list:list.slice(0,wordCount), found:[], selected:[]};
    grid.forEach(row=>row.forEach((x,i)=>{if(!x)row[i]='ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random()*26)]})); drawSearch();
  }
  function drawSearch() { host().innerHTML=`<div class="ws-words">${state.list.map(w=>`<span class="${state.found.includes(w)?'found':''}">${w}</span>`).join('')}</div><p class="classic-help">Toca las letras de una palabra en orden.</p><div class="word-grid" style="grid-template-columns:repeat(${state.grid.length},1fr)">${state.grid.flatMap((r,i)=>r.map((x,j)=>`<button class="${state.selected.some(p=>p[0]===i&&p[1]===j)?'selected':''}" onclick="ClassicGames.cell(${i},${j})">${x}</button>`)).join('')}</div><button class="classic-action" onclick="ClassicGames.clearSelection()">Limpiar selección</button>`; }
  function cell(r,c) { const prev=state.selected.at(-1); if(prev && Math.max(Math.abs(prev[0]-r),Math.abs(prev[1]-c))!==1) state.selected=[]; state.selected.push([r,c]); const word=state.selected.map(p=>state.grid[p[0]][p[1]]).join(''); if(state.list.includes(word)&&!state.found.includes(word)){state.found.push(word);state.selected=[];add(60);if(state.found.length===state.list.length)return finish('¡Encontraste todas las palabras!');} else if(!state.list.some(w=>w.startsWith(word)))state.selected=[[r,c]]; drawSearch(); }
  function clearSelection(){state.selected=[];drawSearch();}

  function sudoku() {
    const solved=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];
    /* Más casillas reveladas al principio, muchas menos al final —
       antes iba de 68% a 32%, ahora el salto es mayor en ambos
       extremos para que se note de verdad. */
    const nums=shuffle([1,2,3,4,5,6,7,8,9]), reveal=[.75,.55,.38,.22][level()]; state.solution=solved.map(r=>r.map(v=>nums[v-1])); state.given=state.solution.map(r=>r.map(()=>Math.random()<reveal)); drawSudoku();
  }
  function drawSudoku(){host().innerHTML=`<div class="sudoku-grid">${state.solution.flatMap((r,i)=>r.map((v,j)=>state.given[i][j]?`<div class="given">${v}</div>`:`<input inputmode="numeric" maxlength="1" data-r="${i}" data-c="${j}">`)).join('')}</div><button class="classic-action" onclick="ClassicGames.checkSudoku()">Verificar</button>`;}
  function checkSudoku(){
    /* La ayuda visual también baja con la dificultad: Principiante y
       Medio ven exactamente qué casillas están mal; Profesional solo
       sabe cuántas; Legendario no recibe ninguna pista, solo si el
       tablero entero es correcto o no. */
    let ok=true, wrongCount=0;
    const cells=[...host().querySelectorAll('input')];
    cells.forEach(e=>{const good=+e.value===state.solution[e.dataset.r][e.dataset.c]; if(!good) wrongCount++; ok=ok&&good; e.classList.remove('wrong');});
    if(ok){add(200+level()*90);finish('Sudoku completado correctamente.');return;}
    if(level()<=1){ cells.forEach(e=>{const good=+e.value===state.solution[e.dataset.r][e.dataset.c]; e.classList.toggle('wrong',!good);}); GamesCore.toast('Aún hay números incorrectos.'); }
    else if(level()===2){ GamesCore.toast(`Hay ${wrongCount} casilla(s) incorrecta(s), pero no te decimos cuáles.`); }
    else { GamesCore.toast('El tablero todavía no es correcto.'); }
  }

  const suits=['♠','♥','♦','♣'], ranks=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const val=c=>ranks.indexOf(c.r)+1, red=c=>c.s==='♥'||c.s==='♦';
  function solitaire(){
    const deck=shuffle(suits.flatMap(s=>ranks.map(r=>({s,r,up:false}))));
    /* Antes la dificultad no afectaba en nada al solitario. Ahora:
       Principiante roba 1 carta a la vez y puede rebarajar el mazo
       sin límite; Legendario roba 3 a la vez y solo puede rebarajar
       una vez, como en la variante "dura" clásica. */
    const drawCount=[1,1,2,3][level()], redealsMax=[Infinity,5,3,1][level()];
    state={stock:deck, waste:[], tabs:Array.from({length:7},()=>[]), foundation:[[],[],[],[]],pick:null,drawCount,redealsMax,redealsUsed:0};
    for(let i=0;i<7;i++)for(let j=0;j<=i;j++){let c=state.stock.pop();c.up=j===i;state.tabs[i].push(c)}drawSolitaire();
  }
  function card(c,loc){return `<button class="play-card ${red(c)?'red':''} ${c.up?'':'down'} ${state.pick===loc?'picked':''}" data-card="${c.s}${c.r}" onclick="ClassicGames.move('${loc}')">${c.up?c.r+c.s:`<img class="card-back-img" src="${cardBackSrc()}" alt="">`}</button>`}
  /* Casillas vacías (base sin cartas / columna vaciada) — antes se
     dibujaban como texto plano ('♢' o nada) sin botón, así que nunca
     se podía tocar ahí para soltar un As o un Rey. Ahora son un botón
     real y el destino funciona. */
  function emptySlot(loc,symbol){return `<button class="play-card empty-slot ${state.pick===loc?'picked':''}" onclick="ClassicGames.move('${loc}')">${symbol}</button>`}
  function drawSolitaire(){const redealsLeft=state.redealsMax===Infinity?'∞':Math.max(0,state.redealsMax-state.redealsUsed);host().innerHTML=`<div class="solitaire"><div class="sol-top"><button class="stock" onclick="ClassicGames.stock()">${state.stock.length?`<img class="card-back-img" src="${cardBackSrc()}" alt="">`:'↻'}</button><div class="waste">${state.waste.at(-1)?card(state.waste.at(-1),'w'):''}</div>${state.foundation.map((f,i)=>`<div class="foundation">${f.at(-1)?card(f.at(-1),'f'+i):emptySlot('f'+i,'♢')}</div>`).join('')}</div><div class="tableau">${state.tabs.map((t,i)=>`<div class="pile">${t.length?t.map((c,j)=>card(c,'t'+i+'-'+j)).join(''):emptySlot('t'+i+'-0','')}</div>`).join('')}</div><p class="classic-help">Selecciona una carta y luego su destino. Las bases se construyen por palo, de As a Rey.<br><small>Robas ${state.drawCount} carta(s) a la vez · Repartos restantes: ${redealsLeft}</small></p></div>`;}
  function stock(){
    const prev=captureCardRects();
    if(!state.stock.length){
      if(state.redealsUsed>=state.redealsMax){ GamesCore.toast('Sin más repartos disponibles en este nivel de dificultad.'); return; }
      state.redealsUsed++;
      state.stock=state.waste.reverse();
      state.waste=[];
      state.stock.forEach(c=>c.up=false);
    } else {
      for(let i=0;i<state.drawCount && state.stock.length;i++){ let c=state.stock.pop(); c.up=true; state.waste.push(c); }
    }
    drawSolitaire();
    playFlip(prev);
  }
  function move(loc){
    const source=state.pick;
    if(!source){ const initial=getCard(loc); if(initial&&initial.up){state.pick=loc;drawSolitaire();} return; }
    const c=getCard(source);
    if(!c||!c.up){state.pick=null;return drawSolitaire()}
    let moved=false;
    if(loc.startsWith('f')){
      const f=state.foundation[+loc[1]];
      if((!f.length&&c.r==='A')||(f.length&&f.at(-1).s===c.s&&val(c)===val(f.at(-1))+1)){removeCard(source);f.push(c);add(10);moved=true}
    }else if(loc.startsWith('t')){
      const pile=state.tabs[+loc[1]], top=pile.at(-1);
      if((!top&&c.r==='K')||(top&&red(c)!==red(top)&&val(c)===val(top)-1)){const moving=removeCard(source);pile.push(...moving);moved=true}
    }
    state.pick=null;
    const prev=captureCardRects();
    drawSolitaire();
    if(moved) playFlip(prev);
    if(state.foundation.every(f=>f.length===13)){add(400);finish('¡Solitario completado!');}
  }
  function getCard(loc){if(loc==='w')return state.waste.at(-1);if(loc.startsWith('t'))return state.tabs[+loc[1]][+loc.slice(3)];if(loc.startsWith('f'))return state.foundation[+loc[1]].at(-1)}
  function removeCard(loc){if(loc==='w')return [state.waste.pop()];if(loc.startsWith('t')){let p=state.tabs[+loc[1]],i=+loc.slice(3),moving=p.splice(i);if(p.at(-1))p.at(-1).up=true;return moving}if(loc.startsWith('f'))return [state.foundation[+loc[1]].pop()];return []}

  /* Animación de desplazamiento de cartas (técnica FLIP): se capturan
     las posiciones antes de redibujar y, tras el redibujado, cada
     carta que cambió de sitio "viaja" visualmente desde su posición
     anterior hasta la nueva. Cada carta es identificable de forma
     única por palo+valor (data-card), así funciona igual para mover
     una sola carta o una fila completa del tablero. */
  function captureCardRects(){
    const map={};
    host().querySelectorAll('[data-card]').forEach(el=>{ map[el.dataset.card]=el.getBoundingClientRect(); });
    return map;
  }
  function playFlip(prevRects){
    requestAnimationFrame(()=>{
      host().querySelectorAll('[data-card]').forEach(el=>{
        const before=prevRects[el.dataset.card];
        if(!before) return;
        const after=el.getBoundingClientRect();
        const dx=before.left-after.left, dy=before.top-after.top;
        if(Math.abs(dx)<1&&Math.abs(dy)<1) return;
        el.style.transition='none';
        el.style.transform=`translate(${dx}px,${dy}px)`;
        el.getBoundingClientRect();
        requestAnimationFrame(()=>{
          el.style.transition='transform .28s cubic-bezier(.2,.8,.2,1)';
          el.style.transform='';
        });
      });
    });
  }

  function kakuro(){
    const target=[6,9,12,15][level()];
    state={target};
    const hint = level()>=3
      ? `Cada fila, columna <b>y diagonal</b> suma <b>${target}</b>, sin repetir cifras en toda la cuadrícula (es un cuadrado mágico completo).`
      : level()===2
        ? `Cada fila y columna suma <b>${target}</b>, y las 9 cifras de la cuadrícula deben ser todas distintas.`
        : `Completa los 9 cuadros: cada fila y columna suma <b>${target}</b> sin repetir cifras en esa línea.`;
    host().innerHTML=`<div class="kakuro-header"><span>↘ ${target}</span><b>CROSS SUMS</b><span>↓ ${target}</span></div><p class="classic-help">${hint}</p><div class="kakuro-grid">${Array.from({length:9},(_,i)=>`<input class="kakuro-input" aria-label="Casilla ${i+1}" type="text" inputmode="numeric" pattern="[1-9]" maxlength="1" data-k="${i}">`).join('')}</div><button class="classic-action" onclick="ClassicGames.checkKakuro()">Verificar sumas</button>`;
  }
  function checkKakuro(){
    const a=[...host().querySelectorAll('[data-k]')].map(e=>+e.value);
    const lines=[0,1,2].flatMap(i=>[[a[i*3],a[i*3+1],a[i*3+2]],[a[i],a[i+3],a[i+6]]]);
    /* Escalado real de dificultad: a partir de "Profesional" además se
       exige que las 9 cifras de toda la cuadrícula sean distintas entre
       sí (no solo dentro de cada línea); en "Legendario" también deben
       cuadrar las dos diagonales — un cuadrado mágico completo. */
    let ok = lines.every(l=>l.reduce((x,y)=>x+y,0)===state.target && new Set(l).size===3);
    if(ok && level()>=2) ok = new Set(a).size===9;
    if(ok && level()>=3){
      const diag1=[a[0],a[4],a[8]], diag2=[a[2],a[4],a[6]];
      ok = [diag1,diag2].every(l=>l.reduce((x,y)=>x+y,0)===state.target && new Set(l).size===3);
    }
    if(ok){ add(200+level()*100); finish('Todas las sumas cruzadas son correctas.'); }
    else GamesCore.toast(level()>=3 ? `Cada fila, columna y diagonal debe sumar ${state.target}, sin repetir ninguna cifra.` : level()>=2 ? `Cada línea debe sumar ${state.target} y las 9 cifras deben ser distintas.` : `Cada línea debe sumar ${state.target} y no repetir números.`);
  }

  function chooseChessMode(){ $('difficultyGameName').textContent='¿Cómo quieres jugar?'; $('difficultyOptions').innerHTML=`<button class="difficulty-card difficulty-card--medium" onclick="ClassicGames.chooseChessColor('cpu')"><span class="difficulty-icon">🤖</span><span><b>Contra la computadora</b><small>Elige con qué color jugar; la IA adapta su elección al nivel.</small></span><span class="difficulty-arrow">›</span></button><button class="difficulty-card difficulty-card--beginner" onclick="ClassicGames.startChess('local','white')"><span class="difficulty-icon">👥</span><span><b>Dos jugadores</b><small>Turnos locales en el mismo dispositivo.</small></span><span class="difficulty-arrow">›</span></button>`; GamesCore.showScreen('screen-difficulty'); }
  function chooseChessColor(mode){
    $('difficultyGameName').textContent='¿Con qué piezas quieres jugar?';
    $('difficultyOptions').innerHTML=`<button class="difficulty-card difficulty-card--beginner" onclick="ClassicGames.startChess('${mode}','white')"><span class="difficulty-icon">⚪</span><span><b>Piezas blancas</b><small>Mueves tú primero.</small></span><span class="difficulty-arrow">›</span></button><button class="difficulty-card difficulty-card--medium" onclick="ClassicGames.startChess('${mode}','black')"><span class="difficulty-icon">⚫</span><span><b>Piezas negras</b><small>La IA mueve primero.</small></span><span class="difficulty-arrow">›</span></button>`;
    GamesCore.showScreen('screen-difficulty');
  }
  function startChess(mode,color){ chessMode=mode; chessColor=(color==='black')?'black':'white'; start('chess'); }
  function chess(){
    const back='♜♞♝♛♚♝♞♜'.split('');
    state={board:[back,['♟','♟','♟','♟','♟','♟','♟','♟'],...Array.from({length:4},()=>Array(8).fill('')),['♙','♙','♙','♙','♙','♙','♙','♙'],'♖♘♗♕♔♗♘♖'.split('')],turn:'white',pick:null,mode:chessMode,userColor:chessColor,over:false,animating:false,lastMove:null};
    drawChess();
    // Si el usuario eligió jugar con negras contra la IA, las blancas (IA) mueven primero.
    if(state.mode==='cpu' && state.userColor==='black') setTimeout(computerMove,500);
  }

  /* Dibuja el tablero. Si la partida ya terminó (rey capturado), se
     muestra un aviso y se deshabilita el tablero para que no se pueda
     seguir jugando — antes la partida nunca terminaba al comer al rey. */
  /* Piezas de ajedrez como imágenes reales (en vez de los símbolos
     Unicode de antes). El tablero interno (state.board) sigue
     usando los caracteres ♙♖♘♗♕♔ / ♟♜♞♝♛♚ para toda la lógica del
     juego; esto solo mapea cada carácter a su imagen para dibujarlo.
     Ruta relativa a games.html (assets/ vive junto a games.html). */
  const PIECE_IMG_DIR = 'assets/games/chess/';
  const PIECE_IMG = {
    '♙':'whitepawn.png', '♖':'whiterook.png', '♘':'whitehorse.png', '♗':'whitebishop.png', '♕':'whitequeen.png', '♔':'whiteking.png',
    '♟':'blackpawn.png', '♜':'blackrook.png', '♞':'blackhorse.png', '♝':'blackbishop.png', '♛':'blackqueen.png', '♚':'blackking.png',
  };
  function pieceImgTag(p){
    if(!p) return '';
    const isWhite = '♙♖♘♗♕♔'.includes(p);
    return `<span class="chess-piece-wrap ${isWhite?'cp-white':'cp-black'}"><img class="chess-piece-img" src="${PIECE_IMG_DIR}${PIECE_IMG[p]}" alt="" draggable="false"></span>`;
  }

  function drawChess(){
    const banner = state.over ? `<div class="chess-over-banner">🏁 Partida finalizada</div>` : '';
    const lm = state.lastMove || [];
    const isLast = (i,j) => lm.some(([lr,lc])=>lr===i&&lc===j);
    /* Cuando el usuario juega con negras, en vez de intercambiar las
       imágenes de las piezas (lo cual confundía qué bando controla
       realmente el jugador), volteamos la ORIENTACIÓN del tablero
       180° para que sus piezas negras queden abajo, como en un
       tablero físico visto desde el lado de las negras. Las
       coordenadas reales (i,j) que usan el clic y la lógica del
       juego no cambian: solo se reordena el dibujado. */
    const flip = state.mode==='cpu' && state.userColor==='black';
    const order = flip ? [7,6,5,4,3,2,1,0] : [0,1,2,3,4,5,6,7];
    const squaresHtml = order.map(i => order.map(j => {
      const p = state.board[i][j];
      return `<button class="${(i+j)%2?'dark':''} ${state.pick&&state.pick[0]===i&&state.pick[1]===j?'chosen':''} ${isLast(i,j)?'last-move':''}" data-sq="${i}-${j}" onclick="ClassicGames.chessMove(${i},${j})" ${state.over?'disabled':''}>${pieceImgTag(p)}</button>`;
    }).join('')).join('');
    host().innerHTML = `<div class="chess-toolbar"><div class="chess-turn-pill ${state.turn==='black'?'turn-black':''}"><span class="dot"></span>${state.mode==='cpu'?(state.turn===state.userColor?'Tu turno':'🤖 Pensando…'):(state.turn==='white'?'Turno: blancas':'Turno: negras')}</div></div>${banner}<div class="chess-board-frame cb-theme-${boardTheme}"><div class="chess-board cb-theme-${boardTheme} ${state.over?'is-over':''}">${squaresHtml}</div></div><p class="classic-help">${state.over?'Toca «Jugar de nuevo» para revancha.':'Toca una pieza y luego la casilla de destino.'}</p>`;
  }

  function chessMove(r,c){
    if(state.over||state.animating) return;
    if(state.mode==='cpu'&&state.turn!==state.userColor)return;
    const p=state.board[r][c],white=p&&'♙♖♘♗♕♔'.includes(p),want=state.turn==='white';
    if(!state.pick){if(p&&white===want)state.pick=[r,c];return drawChess()}
    const [sr,sc]=state.pick, piece=state.board[sr][sc];
    if(sr===r&&sc===c){state.pick=null;return drawChess()}
    if(p&&('♙♖♘♗♕♔'.includes(p))===want){state.pick=[r,c];return drawChess()}
    if(!legal(piece,sr,sc,r,c)){ GamesCore.toast('Movimiento no permitido para esa pieza.'); state.pick=null; return drawChess(); }
    const capturedPiece = state.board[r][c];
    state.pick = null;
    state.animating = true;
    animatePieceMove(sr,sc,r,c,piece, () => {
      makeChessMove(sr,sc,r,c);
      state.turn = want ? 'black' : 'white';
      state.animating = false;
      state.lastMove = [[sr,sc],[r,c]];
      drawChess();
      if(capturedPiece==='♔'||capturedPiece==='♚'){ endChess(capturedPiece==='♔' ? 'black' : 'white'); return; }
      if(state.mode==='cpu'&&state.turn!==state.userColor) setTimeout(computerMove,350);
    });
  }

  function makeChessMove(sr,sc,r,c){const piece=state.board[sr][sc];state.board[r][c]=piece;state.board[sr][sc]='';if(piece==='♙'&&r===0)state.board[r][c]='♕';if(piece==='♟'&&r===7)state.board[r][c]='♛';}

  /* Valor de cada pieza, usado por la IA para pensar sus jugadas. */
  const PIECE_VALUE = {'♙':1,'♟':1,'♘':3,'♞':3,'♗':3,'♝':3,'♖':5,'♜':5,'♕':9,'♛':9,'♔':1000,'♚':1000};

  function movesFor(board, white){
    const moves=[];
    board.forEach((row,sr)=>row.forEach((piece,sc)=>{
      if(!piece) return;
      if(('♙♖♘♗♕♔'.includes(piece))!==white) return;
      for(let r=0;r<8;r++)for(let c=0;c<8;c++)
        if(legal(piece,sr,sc,r,c,board)) moves.push({sr,sc,r,c,capValue: board[r][c]?PIECE_VALUE[board[r][c]]:0});
    }));
    return moves;
  }
  function applyMove(board, mv){
    const nb=board.map(row=>row.slice());
    const piece=nb[mv.sr][mv.sc];
    nb[mv.r][mv.c]=piece; nb[mv.sr][mv.sc]='';
    if(piece==='♙'&&mv.r===0) nb[mv.r][mv.c]='♕';
    if(piece==='♟'&&mv.r===7) nb[mv.r][mv.c]='♛';
    return nb;
  }
  /* Balance de material visto desde la perspectiva de la IA (cpuIsWhite):
     positivo = bien para la IA, sin importar con qué color juegue. */
  function materialScore(board, cpuIsWhite){
    let s=0;
    board.forEach(row=>row.forEach(p=>{ if(!p) return; const v=PIECE_VALUE[p]; const pieceIsWhite='♙♖♘♗♕♔'.includes(p); s += (pieceIsWhite===cpuIsWhite) ? v : -v; }));
    return s;
  }
  /* Profesional: valora capturas por el valor de la pieza comida y evita
     dejar la pieza movida "regalada" si el rival puede comerla gratis
     en su siguiente turno (mirada a 1 jugada). */
  function bestMoveGreedy(moves, board, cpuIsWhite){
    let best=[], bestScore=-Infinity;
    moves.forEach(m=>{
      const nb=applyMove(board,m);
      let sc = m.capValue*10;
      const replies = movesFor(nb, !cpuIsWhite).filter(w=>w.r===m.r&&w.c===m.c);
      if(replies.length) sc -= PIECE_VALUE[nb[m.r][m.c]]||0;
      if(sc>bestScore){ bestScore=sc; best=[m]; } else if(sc===bestScore) best.push(m);
    });
    return best[Math.floor(Math.random()*best.length)];
  }
  /* Legendario: minimax a 2 jugadas — para cada jugada propia, asume
     que las blancas responderán con SU mejor jugada, y elige la que
     deje el mejor balance de material posible en el peor de los casos. */
  function bestMoveMinimax(moves, board, cpuIsWhite){
    let best=[], bestScore=-Infinity;
    moves.forEach(m=>{
      const nb=applyMove(board,m);
      const oppMoves=movesFor(nb, !cpuIsWhite);
      let worst = materialScore(nb, cpuIsWhite);
      oppMoves.forEach(om=>{
        const nb2=applyMove(nb, om);
        const sc2=materialScore(nb2, cpuIsWhite);
        if(sc2<worst) worst=sc2;
      });
      const sc = worst + m.capValue*0.1;
      if(sc>bestScore){ bestScore=sc; best=[m]; } else if(sc===bestScore) best.push(m);
    });
    return best[Math.floor(Math.random()*best.length)];
  }

  function computerMove(){
    if(state.mode!=='cpu'||state.over) return;
    const cpuIsWhite = state.userColor === 'black';
    if(state.turn !== (cpuIsWhite ? 'white' : 'black')) return;
    const moves = movesFor(state.board, cpuIsWhite);
    if(!moves.length) return;
    /* Fuerza de la IA claramente escalonada:
       🌱 Principiante — mueve casi al azar y con frecuencia EVITA
          capturas, incluso piezas gratis. Un rival muy flojo.
       ⚡ Medio — juega razonable: si puede comer algo, normalmente
          lo hace (cualquier captura, sin priorizar valor).
       🔥 Profesional — valora qué pieza captura y evita dejar sus
          piezas regaladas al alcance del rival.
       👑 Legendario — piensa una jugada más adelante (mini-max a 2
          plies), anticipando la mejor respuesta del rival. */
    const lvl = level();
    let pick;
    if (lvl===0){
      const captures=moves.filter(m=>m.capValue>0), nonCaptures=moves.filter(m=>m.capValue===0);
      const pool = (nonCaptures.length && Math.random()<0.75) ? nonCaptures : (captures.length?captures:moves);
      pick = pool[Math.floor(Math.random()*pool.length)];
    } else if (lvl===1){
      const captures=moves.filter(m=>m.capValue>0);
      const pool = captures.length && Math.random()<0.8 ? captures : moves;
      pick = pool[Math.floor(Math.random()*pool.length)];
    } else if (lvl===2){
      pick = bestMoveGreedy(moves, state.board, cpuIsWhite);
    } else {
      pick = bestMoveMinimax(moves, state.board, cpuIsWhite);
    }
    const piece = state.board[pick.sr][pick.sc], capturedPiece = state.board[pick.r][pick.c];
    state.animating = true;
    animatePieceMove(pick.sr,pick.sc,pick.r,pick.c,piece, () => {
      makeChessMove(pick.sr,pick.sc,pick.r,pick.c);
      state.turn = state.userColor;
      state.animating = false;
      state.lastMove = [[pick.sr,pick.sc],[pick.r,pick.c]];
      drawChess();
      if(capturedPiece==='♔'||capturedPiece==='♚'){ endChess(capturedPiece==='♔' ? 'black' : 'white'); }
    });
  }

  /* Termina la partida cuando un rey es capturado — antes esto no
     existía y el tablero seguía jugándose sin sentido tras "comerse"
     al rey de cualquier bando. */
  function endChess(winner){
    state.over = true;
    let label, pct;
    if (state.mode === 'cpu') {
      if (winner === state.userColor) { label = '👑 ¡Capturaste al rey rival! Ganaste la partida.'; pct = 100; }
      else { label = '💀 La computadora capturó tu rey. Partida perdida.'; pct = 25; }
    } else {
      label = winner === 'white' ? '👑 ¡Ganan las blancas! Rey negro capturado.' : '👑 ¡Ganan las negras! Rey blanco capturado.';
      pct = 100;
    }
    score = Math.max(score, 220 + level()*45 + (pct===100?100:0));
    $('classicScore').textContent = score;
    drawChess();
    setTimeout(() => finish(label, pct), 650);
  }

  /* Anima el desplazamiento de una pieza de origen a destino con un
     clon flotante que se desliza sobre el tablero (la pieza "real" se
     coloca al terminar el movimiento). */
  function animatePieceMove(sr,sc,r,c,piece,onDone){
    const boardEl = host().querySelector('.chess-board');
    const srcEl = boardEl && boardEl.querySelector(`[data-sq="${sr}-${sc}"]`);
    const dstEl = boardEl && boardEl.querySelector(`[data-sq="${r}-${c}"]`);
    if (!boardEl || !srcEl || !dstEl) { onDone(); return; }
    const boardRect = boardEl.getBoundingClientRect();
    const srcRect = srcEl.getBoundingClientRect();
    const dstRect = dstEl.getBoundingClientRect();
    const fly = document.createElement('div');
    fly.className = 'chess-fly-piece';
    fly.innerHTML = pieceImgTag(piece);
    fly.style.width = srcRect.width + 'px';
    fly.style.height = srcRect.height + 'px';
    fly.style.left = (srcRect.left - boardRect.left) + 'px';
    fly.style.top  = (srcRect.top  - boardRect.top)  + 'px';
    srcEl.classList.add('piece-flying');
    boardEl.appendChild(fly);
    const dx = dstRect.left - srcRect.left, dy = dstRect.top - srcRect.top;
    requestAnimationFrame(() => { fly.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`; });
    setTimeout(() => { fly.remove(); onDone(); }, 240);
  }
  function legal(p,sr,sc,r,c,board){
    board = board || state.board;
    const dr=r-sr,dc=c-sc,ad=Math.abs(dr),ac=Math.abs(dc),white='♙♖♘♗♕♔'.includes(p), target=board[r][c];
    if(target&&('♙♖♘♗♕♔'.includes(target))===white)return false;
    if(p==='♙'||p==='♟'){let dir=white?-1:1,start=white?6:1;return (dc===0&&!target&&(dr===dir||(sr===start&&dr===2*dir&&!board[sr+dir][sc]))||(ac===1&&dr===dir&&target))}
    if(p==='♘'||p==='♞')return ad*ac===2;
    if(p==='♔'||p==='♚')return ad<=1&&ac<=1;
    let straight=dr===0||dc===0,diag=ad===ac;
    if((p==='♖'||p==='♜')&&!straight)return false;
    if((p==='♗'||p==='♝')&&!diag)return false;
    if((p==='♕'||p==='♛')&&!(straight||diag))return false;
    const nr=Math.sign(dr),nc=Math.sign(dc);
    for(let i=sr+nr,j=sc+nc;i!==r||j!==c;i+=nr,j+=nc)if(board[i][j])return false;
    return true;
  }
  function empty(){host().innerHTML='<div class="g-empty-state"><div class="g-empty-state__icon">🌱</div><div class="g-empty-state__title">Aún no hay vocabulario suficiente</div><button class="g-empty-state__btn" onclick="GamesCore.showScreen(\'screen-menu\')">Volver al menú</button></div>'}
  function replay(){ if(type) start(type); }
  return {start,replay,chooseChessMode,chooseChessColor,startChess,letter,hint,cell,clearSelection,checkSudoku,stock,move,checkKakuro,chessMove,openThemePicker,closeThemePicker,setChessTheme,openCardBackPicker,setCardBack,openStylePicker};
})();
