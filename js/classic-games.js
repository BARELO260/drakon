/* Juegos clásicos: todos funcionan sin servicios externos. */
const ClassicGames = (() => {
  let type = '', score = 0, state = {}, chessMode = 'local';
  const $ = id => document.getElementById(id);
  const host = () => $('classicGame');
  const shuffle = a => [...a].sort(() => Math.random() - .5);
  const clean = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z]/g, '').toUpperCase();
  const difficulty = () => (typeof GameSession !== 'undefined' && GameSession.difficulty) || 'beginner';
  const level = () => ({beginner:0,medium:1,pro:2,legendary:3}[difficulty()] || 0);
  function words() {
    const pool = DrakonBridge.getExercisePool(DrakonBridge.getLangCode());
    return [...new Set(pool.flatMap(q => [q.question, ...(q.options || [])]).map(clean).filter(w => w.length >= 3 && w.length <= 10))];
  }
  function start(kind) {
    type = kind; score = 0; state = {}; GameSession.currentGame = 'classic';
    const meta = {hangman:['🎯 Ahorcado','Vocabulario de tus lecciones'],wordsearch:['🔎 Buscador de palabras','Encuentra todas las palabras'],sudoku:['🔢 Sudoku','Completa cada fila, columna y bloque'],solitaire:['🃏 Solitario','Klondike · toca origen y destino'],kakuro:['➕ Cross Sums','Cada grupo suma 6 sin repetir'],chess:['♟️ Ajedrez','Partida local: blancas contra negras']}[kind];
    $('classicTitle').textContent = meta[0]; $('classicSub').textContent = meta[1]; $('classicScore').textContent = '0';
    GamesCore.showScreen('screen-classic');
    ({hangman,wordsearch,sudoku,solitaire,kakuro,chess})[kind]();
  }
  function add(n) { score += n; $('classicScore').textContent = score; }
  function finish(label, pct=100) { GameSession.currentGame=null; GamesCore.showResult({game:'classic',won:true,stats:{xp:score||100,pct,sub:label,items:[{val:score||100,lbl:'PUNTOS'}]}}); }

  function hangman() {
    const list = words(); if (!list.length) return empty();
    const max=4+level()*2; state.word = shuffle(list.filter(w=>w.length<=max))[0] || list[0]; state.used=[]; state.left=8-level();
    drawHangman();
  }
  function drawHangman() {
    const w=state.word, revealed=w.split('').map(c=>state.used.includes(c)?c:'_').join(' ');
    const letters='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    host().innerHTML=`<div class="classic-center"><div class="hang-figure">${['◯','│','╱','╲','╱','╲'].slice(0,6-state.left).join(' ')||'⌁'}</div><div class="hang-word">${revealed}</div><p>Intentos restantes: <b>${state.left}</b></p><div class="letter-grid">${letters.map(l=>`<button ${state.used.includes(l)?'disabled':''} onclick="ClassicGames.letter('${l}')">${l}</button>`).join('')}</div></div>`;
  }
  function letter(l) { if (state.used.includes(l)) return; state.used.push(l); if(!state.word.includes(l)) state.left--; if(state.word.split('').every(c=>state.used.includes(c))){add(120+state.left*15); return finish(`¡Encontraste “${state.word}”!`);} if(!state.left){ GamesCore.toast(`La palabra era ${state.word}`); return setTimeout(hangman,1000); } drawHangman(); }

  function wordsearch() {
    const n=8+level(), candidates=shuffle(words()).filter(w=>w.length<=n).slice(0,12), grid=Array.from({length:n},()=>Array(n).fill('')), list=[];
    candidates.forEach(word=> { let placed=false; for(let k=0;k<100&&!placed;k++){const dirs=[[0,1],[1,0],[1,1],[-1,1]], [dr,dc]=dirs[Math.floor(Math.random()*dirs.length)], rMin=dr<0?word.length-1:0, rMax=dr>0?n-word.length:n-1, cMax=dc>0?n-word.length:n-1, r=rMin+Math.floor(Math.random()*(rMax-rMin+1)), c=Math.floor(Math.random()*(cMax+1)); if(word.split('').every((x,j)=>!grid[r+dr*j][c+dc*j]||grid[r+dr*j][c+dc*j]===x)){word.split('').forEach((x,j)=>grid[r+dr*j][c+dc*j]=x);list.push(word);placed=true;} } });
    if(list.length<3) return empty(); state={grid, list:list.slice(0,3+level()), found:[], selected:[]};
    grid.forEach(row=>row.forEach((x,i)=>{if(!x)row[i]='ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random()*26)]})); drawSearch();
  }
  function drawSearch() { host().innerHTML=`<div class="ws-words">${state.list.map(w=>`<span class="${state.found.includes(w)?'found':''}">${w}</span>`).join('')}</div><p class="classic-help">Toca las letras de una palabra en orden.</p><div class="word-grid">${state.grid.flatMap((r,i)=>r.map((x,j)=>`<button class="${state.selected.some(p=>p[0]===i&&p[1]===j)?'selected':''}" onclick="ClassicGames.cell(${i},${j})">${x}</button>`)).join('')}</div><button class="classic-action" onclick="ClassicGames.clearSelection()">Limpiar selección</button>`; }
  function cell(r,c) { const prev=state.selected.at(-1); if(prev && Math.max(Math.abs(prev[0]-r),Math.abs(prev[1]-c))!==1) state.selected=[]; state.selected.push([r,c]); const word=state.selected.map(p=>state.grid[p[0]][p[1]]).join(''); if(state.list.includes(word)&&!state.found.includes(word)){state.found.push(word);state.selected=[];add(60);if(state.found.length===state.list.length)return finish('¡Encontraste todas las palabras!');} else if(!state.list.some(w=>w.startsWith(word)))state.selected=[[r,c]]; drawSearch(); }
  function clearSelection(){state.selected=[];drawSearch();}

  function sudoku() {
    const solved=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];
    const nums=shuffle([1,2,3,4,5,6,7,8,9]), reveal=[.68,.55,.43,.32][level()]; state.solution=solved.map(r=>r.map(v=>nums[v-1])); state.given=state.solution.map(r=>r.map(()=>Math.random()<reveal)); drawSudoku();
  }
  function drawSudoku(){host().innerHTML=`<div class="sudoku-grid">${state.solution.flatMap((r,i)=>r.map((v,j)=>state.given[i][j]?`<div class="given">${v}</div>`:`<input inputmode="numeric" maxlength="1" data-r="${i}" data-c="${j}">`)).join('')}</div><button class="classic-action" onclick="ClassicGames.checkSudoku()">Verificar</button>`;}
  function checkSudoku(){let ok=true;host().querySelectorAll('input').forEach(e=>{const good=+e.value===state.solution[e.dataset.r][e.dataset.c];e.classList.toggle('wrong',!good);ok=ok&&good;});if(ok){add(250);finish('Sudoku completado correctamente.');}else GamesCore.toast('Aún hay números incorrectos.');}

  const suits=['♠','♥','♦','♣'], ranks=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const val=c=>ranks.indexOf(c.r)+1, red=c=>c.s==='♥'||c.s==='♦';
  function solitaire(){const deck=shuffle(suits.flatMap(s=>ranks.map(r=>({s,r,up:false}))));state={stock:deck, waste:[], tabs:Array.from({length:7},()=>[]), foundation:[[],[],[],[]],pick:null};for(let i=0;i<7;i++)for(let j=0;j<=i;j++){let c=state.stock.pop();c.up=j===i;state.tabs[i].push(c)}drawSolitaire();}
  function card(c,loc){return `<button class="play-card ${red(c)?'red':''} ${c.up?'':'down'} ${state.pick===loc?'picked':''}" onclick="ClassicGames.move('${loc}')">${c.up?c.r+c.s:'🂠'}</button>`}
  function drawSolitaire(){host().innerHTML=`<div class="solitaire"><div class="sol-top"><button class="stock" onclick="ClassicGames.stock()">${state.stock.length?'🂠':'↻'}</button><div class="waste">${state.waste.at(-1)?card(state.waste.at(-1),'w'):''}</div>${state.foundation.map((f,i)=>`<div class="foundation">${f.at(-1)?card(f.at(-1),'f'+i):'♢'}</div>`).join('')}</div><div class="tableau">${state.tabs.map((t,i)=>`<div class="pile">${t.map((c,j)=>card(c,'t'+i+'-'+j)).join('')}</div>`).join('')}</div><p class="classic-help">Selecciona una carta y luego su destino. Las bases se construyen por palo, de As a Rey.</p></div>`;}
  function stock(){if(!state.stock.length){state.stock=state.waste.reverse();state.waste=[];state.stock.forEach(c=>c.up=false)}else{let c=state.stock.pop();c.up=true;state.waste.push(c)}drawSolitaire();}
  function move(loc){let source=state.pick;if(!source){const initial=getCard(loc);if(initial&&initial.up){state.pick=loc;drawSolitaire();}return} let c=getCard(source);if(!c||!c.up){state.pick=null;return drawSolitaire()} if(loc.startsWith('f')){let f=state.foundation[+loc[1]];if((!f.length&&c.r==='A')||(f.length&&f.at(-1).s===c.s&&val(c)===val(f.at(-1))+1)){removeCard(source);f.push(c);add(10)}}else if(loc.startsWith('t')){let pile=state.tabs[+loc[1]], top=pile.at(-1);if((!top&&c.r==='K')||(top&&red(c)!==red(top)&&val(c)===val(top)-1)){const moving=removeCard(source);pile.push(...moving)}}state.pick=null;drawSolitaire();if(state.foundation.every(f=>f.length===13)){add(400);finish('¡Solitario completado!');}}
  function getCard(loc){if(loc==='w')return state.waste.at(-1);if(loc.startsWith('t'))return state.tabs[+loc[1]][+loc.slice(3)];if(loc.startsWith('f'))return state.foundation[+loc[1]].at(-1)}
  function removeCard(loc){if(loc==='w')return [state.waste.pop()];if(loc.startsWith('t')){let p=state.tabs[+loc[1]],i=+loc.slice(3),moving=p.splice(i);if(p.at(-1))p.at(-1).up=true;return moving}if(loc.startsWith('f'))return [state.foundation[+loc[1]].pop()];return []}

  function kakuro(){state={target:6+level()*3};host().innerHTML=`<div class="kakuro-header"><span>↘ ${state.target}</span><b>CROSS SUMS</b><span>↓ ${state.target}</span></div><p class="classic-help">Completa los 9 cuadros: cada fila y columna suma <b>${state.target}</b> sin repetir cifras.</p><div class="kakuro-grid">${Array.from({length:9},(_,i)=>`<input class="kakuro-input" aria-label="Casilla ${i+1}" type="text" inputmode="numeric" pattern="[1-9]" maxlength="1" data-k="${i}">`).join('')}</div><button class="classic-action" onclick="ClassicGames.checkKakuro()">Verificar sumas</button>`;}
  function checkKakuro(){const a=[...host().querySelectorAll('[data-k]')].map(e=>+e.value), lines=[0,1,2].flatMap(i=>[[a[i*3],a[i*3+1],a[i*3+2]],[a[i],a[i+3],a[i+6]]]);if(lines.every(l=>l.reduce((x,y)=>x+y,0)===state.target&&new Set(l).size===3)){add(200+level()*75);finish('Todas las sumas cruzadas son correctas.')}else GamesCore.toast(`Cada línea debe sumar ${state.target} y no repetir números.`);}

  function chooseChessMode(){ $('difficultyGameName').textContent='¿Cómo quieres jugar?'; $('difficultyOptions').innerHTML=`<button class="difficulty-card difficulty-card--medium" onclick="ClassicGames.startChess('cpu')"><span class="difficulty-icon">🤖</span><span><b>Contra la computadora</b><small>Juegas con blancas; la IA adapta su elección al nivel.</small></span><span class="difficulty-arrow">›</span></button><button class="difficulty-card difficulty-card--beginner" onclick="ClassicGames.startChess('local')"><span class="difficulty-icon">👥</span><span><b>Dos jugadores</b><small>Turnos locales en el mismo dispositivo.</small></span><span class="difficulty-arrow">›</span></button>`; GamesCore.showScreen('screen-difficulty'); }
  function startChess(mode){ chessMode=mode; start('chess'); }
  function chess(){const back='♜♞♝♛♚♝♞♜'.split('');state={board:[back,['♟','♟','♟','♟','♟','♟','♟','♟'],...Array.from({length:4},()=>Array(8).fill('')),['♙','♙','♙','♙','♙','♙','♙','♙'],'♖♘♗♕♔♗♘♖'.split('')],turn:'white',pick:null,mode:chessMode};drawChess();}
  function drawChess(){host().innerHTML=`<div class="chess-turn">${state.mode==='cpu'?'🤖 Computadora · ':''}Turno: ${state.turn==='white'?'blancas':'negras'}</div><div class="chess-board">${state.board.flatMap((r,i)=>r.map((p,j)=>`<button class="${(i+j)%2?'dark':''} ${state.pick&&state.pick[0]===i&&state.pick[1]===j?'chosen':''}" onclick="ClassicGames.chessMove(${i},${j})">${p}</button>`)).join('')}</div><p class="classic-help">Toca una pieza y luego la casilla de destino.</p>`;}
  function chessMove(r,c){if(state.mode==='cpu'&&state.turn==='black')return;const p=state.board[r][c],white=p&&'♙♖♘♗♕♔'.includes(p),want=state.turn==='white';if(!state.pick){if(p&&white===want)state.pick=[r,c];return drawChess()}const [sr,sc]=state.pick, piece=state.board[sr][sc];if(sr===r&&sc===c){state.pick=null;return drawChess()}if(p&&('♙♖♘♗♕♔'.includes(p))===want){state.pick=[r,c];return drawChess()} if(legal(piece,sr,sc,r,c)){makeChessMove(sr,sc,r,c);state.turn=want?'black':'white';}else GamesCore.toast('Movimiento no permitido para esa pieza.');state.pick=null;drawChess();if(state.mode==='cpu'&&state.turn==='black')setTimeout(computerMove,350);}
  function makeChessMove(sr,sc,r,c){const piece=state.board[sr][sc];state.board[r][c]=piece;state.board[sr][sc]='';if(piece==='♙'&&r===0)state.board[r][c]='♕';if(piece==='♟'&&r===7)state.board[r][c]='♛';}
  function computerMove(){if(state.mode!=='cpu'||state.turn!=='black')return;const moves=[];state.board.forEach((row,sr)=>row.forEach((piece,sc)=>{if(piece&&!'♙♖♘♗♕♔'.includes(piece))for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(legal(piece,sr,sc,r,c))moves.push({sr,sc,r,c,capture:!!state.board[r][c]})}));if(!moves.length)return;const captures=moves.filter(m=>m.capture), pick=(level()>0&&captures.length?captures:moves)[Math.floor(Math.random()*((level()>0&&captures.length?captures:moves).length))];makeChessMove(pick.sr,pick.sc,pick.r,pick.c);state.turn='white';drawChess();}
  function legal(p,sr,sc,r,c){const dr=r-sr,dc=c-sc,ad=Math.abs(dr),ac=Math.abs(dc),white='♙♖♘♗♕♔'.includes(p), target=state.board[r][c];if(target&&('♙♖♘♗♕♔'.includes(target))===white)return false;if(p==='♙'||p==='♟'){let dir=white?-1:1,start=white?6:1;return (dc===0&&!target&&(dr===dir||(sr===start&&dr===2*dir&&!state.board[sr+dir][sc]))||(ac===1&&dr===dir&&target))}if(p==='♘'||p==='♞')return ad*ac===2;if(p==='♔'||p==='♚')return ad<=1&&ac<=1;let straight=dr===0||dc===0,diag=ad===ac;if((p==='♖'||p==='♜')&&!straight)return false;if((p==='♗'||p==='♝')&&!diag)return false;if((p==='♕'||p==='♛')&&!(straight||diag))return false;const nr=Math.sign(dr),nc=Math.sign(dc);for(let i=sr+nr,j=sc+nc;i!==r||j!==c;i+=nr,j+=nc)if(state.board[i][j])return false;return true;}
  function empty(){host().innerHTML='<div class="g-empty-state"><div class="g-empty-state__icon">🌱</div><div class="g-empty-state__title">Aún no hay vocabulario suficiente</div><button class="g-empty-state__btn" onclick="GamesCore.showScreen(\'screen-menu\')">Volver al menú</button></div>'}
  function replay(){ if(type) start(type); }
  return {start,replay,chooseChessMode,startChess,letter,cell,clearSelection,checkSudoku,stock,move,checkKakuro,chessMove};
})();
