/* ═══════════════════════════════════════════════════════════
   invaders.js  —  Invasión Galáctica
   Ruta: drakón/js/invaders.js
   ═══════════════════════════════════════════════════════════ */

const Invaders = (() => {

  /* ── Configuración de niveles ──────────────────────────── */
  const LEVEL_NAMES = [
    'EXPLORADOR','CADETE','TENIENTE','CAPITÁN',
    'COMANDANTE','MAYOR','CORONEL','GENERAL',
    'ALMIRANTE','LEYENDA',
  ];

  const LVL = [
    { rows:2, cols:6,  spd:1.0, freq:0.012, bossHp:1 },
    { rows:2, cols:7,  spd:1.2, freq:0.015, bossHp:1 },
    { rows:3, cols:7,  spd:1.35,freq:0.018, bossHp:2 },
    { rows:3, cols:8,  spd:1.5, freq:0.020, bossHp:2 },
    { rows:3, cols:9,  spd:1.7, freq:0.022, bossHp:2 },
    { rows:4, cols:8,  spd:1.9, freq:0.025, bossHp:3 },
    { rows:4, cols:9,  spd:2.1, freq:0.028, bossHp:3 },
    { rows:4, cols:10, spd:2.3, freq:0.030, bossHp:3 },
    { rows:5, cols:9,  spd:2.6, freq:0.033, bossHp:4 },
    { rows:5, cols:10, spd:3.0, freq:0.038, bossHp:4 },
  ];

  const TYPES = {
    basic:{ emoji:'👽', pts:100, hp:1 },
    fast: { emoji:'🛸', pts:150, hp:1 },
    tank: { emoji:'👾', pts:200, hp:2 },
    boss: { emoji:'💀', pts:400, hp:4 },
  };

  /* ── Estado ─────────────────────────────────────────────── */
  let canvas, ctx, animId, lastTs;

  const st = {
    running:false, paused:true,
    level:1, score:0, lives:3, hiScore:0,
  };

  const player = { x:0, y:0, w:36, h:28, spd:5, invTimer:0 };

  let bullets=[], enemies=[], explosions=[], particles=[], stars=[];
  let enemyDir=1, moveTimer=0, moveInterval=40, fireTimer=0;
  const keys = { left:false, right:false, fire:false };

  /* ── Setup ─────────────────────────────────────────────── */
  function _setup() {
    canvas = _el('invCanvas');
    ctx    = canvas.getContext('2d');
    _resize();
    _genStars();

    try { st.hiScore = +localStorage.getItem('dkInvHi') || 0; } catch(_){}

    document.addEventListener('keydown', _kd);
    document.addEventListener('keyup',   _ku);
    window.addEventListener('resize', () => { _resize(); _genStars(); });

    /* Touch en canvas: swipe = mover, tap = disparar */
    let tx0 = 0;
    canvas.addEventListener('touchstart', e => {
      e.preventDefault(); tx0 = e.touches[0].clientX;
    }, { passive:false });
    canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      const dx = e.touches[0].clientX - tx0;
      if (Math.abs(dx) > 6) {
        keys.left  = dx < 0;
        keys.right = dx > 0;
        tx0 = e.touches[0].clientX;
      }
    }, { passive:false });
    canvas.addEventListener('touchend', e => {
      e.preventDefault();
      keys.left = keys.right = false;
      keys.fire = true;
      setTimeout(() => keys.fire = false, 80);
    }, { passive:false });
  }

  function _resize() {
    if (!canvas) return;
    canvas.width  = canvas.offsetWidth  || window.innerWidth;
    canvas.height = canvas.offsetHeight || Math.floor(window.innerHeight * 0.52);
    player.x = canvas.width  / 2 - player.w / 2;
    player.y = canvas.height - 55;
  }

  function _genStars() {
    stars = [];
    const n = Math.floor(canvas.width * canvas.height / 3000);
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 1.4 + 0.3,
        a: Math.random() * 0.6 + 0.2,
        ph: Math.random() * Math.PI * 2,
      });
    }
  }

  function _kd(e) {
    if (e.key==='ArrowLeft' || e.key==='a')  { e.preventDefault(); keys.left =true; }
    if (e.key==='ArrowRight'|| e.key==='d')  { e.preventDefault(); keys.right=true; }
    if (e.key===' ')                          { e.preventDefault(); keys.fire =true; }
    if (e.key==='p'||e.key==='Escape')       { st.paused ? resume() : pause(); }
  }
  function _ku(e) {
    if (e.key==='ArrowLeft' || e.key==='a')  keys.left =false;
    if (e.key==='ArrowRight'|| e.key==='d')  keys.right=false;
    if (e.key===' ')                          keys.fire =false;
  }

  /* API para botones táctiles del HTML */
  function setKey(k, v) { keys[k] = v; }

  /* ── Nivel ─────────────────────────────────────────────── */
  function _initLevel() {
    const cfg = LVL[Math.min(st.level-1, LVL.length-1)];
    bullets=[]; explosions=[]; particles=[];
    enemies=[];
    enemyDir=1; moveTimer=0;
    moveInterval = Math.max(7, 40 - (st.level-1)*3);

    const cw   = canvas.width;
    const cellW= Math.min(46, (cw - 40) / (cfg.cols + 1));
    const sx   = (cw - cellW * cfg.cols) / 2;

    for (let r=0; r<cfg.rows; r++) {
      for (let c=0; c<cfg.cols; c++) {
        const type = r===0 ? 'boss' : r===1 && cfg.rows>=3 ? 'tank' : r%2===0 ? 'fast' : 'basic';
        const def  = TYPES[type];
        const hp   = type==='boss' ? cfg.bossHp : def.hp;
        enemies.push({
          x: sx + c*cellW, y: 48 + r*30,
          w:26, h:22, type, hp, maxHp:hp, alive:true,
          sTimer: Math.random()*120+40,
        });
      }
    }
    _hud();
  }

  /* ── Loop ─────────────────────────────────────────────── */
  function _loop(ts) {
    if (!st.running || st.paused) { animId=null; return; }
    const dt = Math.min((ts - lastTs) / 16.67, 3);
    lastTs = ts;
    _update(dt);
    _draw(ts);
    animId = requestAnimationFrame(_loop);
  }

  /* ── Update ─────────────────────────────────────────────── */
  function _update(dt) {
    const cfg = LVL[Math.min(st.level-1, LVL.length-1)];

    /* Player */
    const ps = player.spd * cfg.spd * 0.55 * dt;
    if (keys.left)  player.x = Math.max(0, player.x - ps);
    if (keys.right) player.x = Math.min(canvas.width - player.w, player.x + ps);

    /* Invincibilidad */
    if (player.invTimer > 0) player.invTimer -= dt;

    /* Disparo jugador */
    fireTimer -= dt;
    if (keys.fire && fireTimer <= 0) {
      bullets.push({ x:player.x+player.w/2-2, y:player.y-4, w:4, h:16, vy:-14, player:true });
      fireTimer = 6;
    }

    /* Mover balas */
    bullets = bullets.filter(b => { b.y += b.vy*dt; return b.y>-30 && b.y<canvas.height+10; });

    /* Mover enemigos */
    moveTimer -= dt;
    if (moveTimer <= 0) {
      moveTimer = moveInterval;
      const alive = enemies.filter(e=>e.alive);
      if (!alive.length) return;
      const step = Math.max(4, 13*cfg.spd*(1+(30-alive.length)*0.02));
      let wall = false;
      alive.forEach(e => { e.x += enemyDir*step; if(e.x<=0||e.x+e.w>=canvas.width) wall=true; });
      if (wall) {
        enemyDir *= -1;
        alive.forEach(e => { e.y += 16; e.x += enemyDir*step; });
      }
      /* Disparos enemigos */
      alive.forEach(e => {
        e.sTimer -= 1;
        if (e.sTimer<=0 && Math.random()<cfg.freq*alive.length) {
          bullets.push({ x:e.x+e.w/2-2, y:e.y+e.h, w:4, h:11, vy:5+cfg.spd*0.8, player:false });
          e.sTimer = 60+Math.random()*80;
        }
      });
    }

    /* Colisiones: balas del jugador vs enemigos */
    const pb = bullets.filter(b=>b.player);
    enemies.filter(e=>e.alive).forEach(e => {
      pb.forEach(b => {
        if (_overlap(b,e)) {
          b.y=-999; e.hp--;
          _sparks(e.x+e.w/2, e.y+e.h/2, e.hp<=0?12:4, e.hp<=0?'#ff9020':'#ffdd60');
          if (e.hp<=0) {
            e.alive=false;
            st.score += TYPES[e.type].pts * st.level;
            explosions.push({ x:e.x+e.w/2, y:e.y+e.h/2, r:0, maxR:e.type==='boss'?40:26, life:1, col:e.type==='boss'?'#ff4060':'#ff9020' });
            _hud();
          }
        }
      });
    });

    /* Colisiones: balas enemigas vs jugador */
    if (player.invTimer<=0) {
      const eb = bullets.filter(b=>!b.player);
      for (const b of eb) {
        if (_overlap(b,{x:player.x,y:player.y,w:player.w,h:player.h})) {
          b.y=9999; _hitPlayer(); break;
        }
      }
      /* Enemigo alcanza suelo */
      if (enemies.filter(e=>e.alive).some(e=>e.y+e.h>=player.y-4)) _hitPlayer();
    }

    /* ¿Nivel superado? */
    if (enemies.every(e=>!e.alive)) { _levelComplete(); return; }

    /* Actualizar explosiones y partículas */
    explosions.forEach(ex=>{ ex.r+=2.5*dt; ex.life-=0.055*dt; });
    explosions=explosions.filter(ex=>ex.life>0);
    particles.forEach(p=>{ p.x+=p.vx*dt; p.y+=p.vy*dt; p.vy+=0.12*dt; p.life-=0.04*dt; });
    particles=particles.filter(p=>p.life>0);
  }

  /* ── Draw ─────────────────────────────────────────────── */
  function _draw(ts) {
    const cw=canvas.width, ch=canvas.height, t=ts/1000;
    ctx.clearRect(0,0,cw,ch);
    ctx.fillStyle='#000'; ctx.fillRect(0,0,cw,ch);

    /* Estrellas */
    stars.forEach(s=>{
      ctx.globalAlpha = s.a*(0.6+0.4*Math.sin(t*1.4+s.ph));
      ctx.fillStyle='#fff'; ctx.fillRect(s.x,s.y,s.s,s.s);
    });
    ctx.globalAlpha=1;

    /* Línea de suelo */
    ctx.strokeStyle='rgba(56,208,248,.14)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(0,ch-42); ctx.lineTo(cw,ch-42); ctx.stroke();

    /* Enemigos */
    ctx.textAlign='center'; ctx.textBaseline='bottom';
    enemies.filter(e=>e.alive).forEach(e=>{
      ctx.globalAlpha = e.maxHp>1 && e.hp<e.maxHp ? 0.6 : 1;
      ctx.font='20px serif';
      ctx.shadowColor=TYPES[e.type].pts>150?'rgba(255,64,96,.7)':'rgba(251,146,6,.5)';
      ctx.shadowBlur=7;
      ctx.fillText(TYPES[e.type].emoji, e.x+e.w/2, e.y+e.h);
      ctx.shadowBlur=0; ctx.globalAlpha=1;
      /* Barra HP */
      if (e.maxHp>1) {
        ctx.fillStyle='rgba(255,255,255,.14)'; ctx.fillRect(e.x,e.y+e.h+2,e.w,3);
        ctx.fillStyle=e.hp/e.maxHp>0.5?'#00f5c4':'#ff4060';
        ctx.fillRect(e.x,e.y+e.h+2,e.w*(e.hp/e.maxHp),3);
      }
    });

    /* Balas del jugador */
    bullets.filter(b=>b.player).forEach(b=>{
      const gr=ctx.createLinearGradient(0,b.y,0,b.y+b.h);
      gr.addColorStop(0,'rgba(56,208,248,0)'); gr.addColorStop(1,'rgba(56,208,248,1)');
      ctx.fillStyle=gr; ctx.shadowColor='rgba(56,208,248,.9)'; ctx.shadowBlur=8;
      ctx.fillRect(b.x,b.y,b.w,b.h); ctx.shadowBlur=0;
    });

    /* Balas enemigas */
    bullets.filter(b=>!b.player).forEach(b=>{
      ctx.fillStyle='rgba(255,60,80,.9)'; ctx.shadowColor='rgba(255,60,80,.8)'; ctx.shadowBlur=6;
      ctx.fillRect(b.x,b.y,b.w,b.h); ctx.shadowBlur=0;
    });

    /* Explosiones */
    explosions.forEach(ex=>{
      ctx.globalAlpha=ex.life;
      const gr=ctx.createRadialGradient(ex.x,ex.y,0,ex.x,ex.y,ex.r);
      gr.addColorStop(0,'rgba(255,240,100,1)');
      gr.addColorStop(0.4,ex.col+'cc'); gr.addColorStop(1,'rgba(255,0,0,0)');
      ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(ex.x,ex.y,ex.r,0,Math.PI*2); ctx.fill();
      ctx.globalAlpha=1;
    });

    /* Partículas */
    particles.forEach(p=>{
      ctx.globalAlpha=p.life; ctx.fillStyle=p.col;
      ctx.shadowColor=p.col; ctx.shadowBlur=4;
      ctx.fillRect(p.x-p.sz/2,p.y-p.sz/2,p.sz,p.sz);
    });
    ctx.shadowBlur=0; ctx.globalAlpha=1;

    /* Nave del jugador — emoji del personaje */
    const char = GameSession.selectedChar;
    ctx.font='28px serif';
    ctx.textAlign='center'; ctx.textBaseline='bottom';
    if (player.invTimer>0 && Math.floor(t*8)%2===0) ctx.globalAlpha=0.25;
    ctx.shadowColor='rgba(56,208,248,.75)'; ctx.shadowBlur=14;
    ctx.fillText(char ? char.emoji : '🚀', player.x+player.w/2, player.y+player.h);
    ctx.shadowBlur=0; ctx.globalAlpha=1;
  }

  /* ── HUD ─────────────────────────────────────────────── */
  function _hud() {
    const set = (id,v) => { const e=_el(id); if(e) e.textContent=v; };
    set('invScore',  st.score.toLocaleString());
    set('invLevel',  st.level);
    set('invLevelName', LEVEL_NAMES[st.level-1]||'LEYENDA');

    /* Nave en el centro del HUD: video .webm o emoji fallback */
    const char = GameSession.selectedChar;
    const wrap = _el('invHudShipWrap');
    if (wrap && char) {
      wrap.innerHTML = `
        <video class="g-inv-ship-wrap video" src="${char.ship}"
               autoplay loop muted playsinline
               onerror="this.classList.add('failed')" style="width:38px;height:28px;object-fit:contain;filter:drop-shadow(0 4px 10px rgba(0,0,0,.25))"></video>
        <span class="g-inv-ship-emoji" style="display:none;font-size:22px;color:#fff">${char.emoji}</span>
      `;
      const v = wrap.querySelector('video');
      if (v) v.addEventListener('error', () => {
        v.style.display='none';
        const em = wrap.querySelector('.g-inv-ship-emoji');
        if (em) em.style.display='block';
      });
    }

    /* Vidas: miniaturas del .webm */
    const livesEl = _el('invLives');
    if (livesEl && char) {
      livesEl.innerHTML = Array.from({length: Math.max(0,st.lives)}).map(()=>`
        <video src="${char.ship}" autoplay loop muted playsinline
               class="g-inv-life-video"
               onerror="this.outerHTML='<span class=\\'g-inv-life-emoji\\'>${char.emoji}</span>'"
               style="width:18px;height:14px;object-fit:contain;filter:drop-shadow(0 2px 6px rgba(0,0,0,.25))">
        </video>
      `).join('');
    }
  }

  /* ── Helpers ─────────────────────────────────────────── */
  function _overlap(a,b) {
    return a.x<b.x+b.w && a.x+a.w>b.x && a.y<b.y+(b.h||4) && a.y+(a.h||4)>b.y;
  }
  function _sparks(x,y,n,col) {
    for (let i=0;i<n;i++) {
      const ang=Math.random()*Math.PI*2, spd=1+Math.random()*3;
      particles.push({ x,y, vx:Math.cos(ang)*spd, vy:Math.sin(ang)*spd-1,
                       life:1, sz:2+Math.random()*3, col });
    }
  }
  function _hitPlayer() {
    st.lives--;
    player.invTimer=120;
    _sparks(player.x+player.w/2, player.y+player.h/2, 16, '#38d0f8');
    _hud();
    if (st.lives<=0) _gameOver();
  }

  /* ── Transiciones ─────────────────────────────────────── */
  function _levelComplete() {
    st.running=false;
    if (animId) { cancelAnimationFrame(animId); animId=null; }
    const bonus = st.level*200;
    st.score += bonus; _hud();
    if (st.level>=10) { _win(); return; }
    st.level++;
    _showOverlay({
      title:   '¡NIVEL SUPERADO!',
      badge:   `NIVEL ${st.level} — ${LEVEL_NAMES[st.level-1]}`,
      sub:     `Bonus: +${bonus} pts\nLos invasores se vuelven más agresivos…`,
      mainTxt: '▶ CONTINUAR', mainFn: resume,
      secTxt:  '← RENDIRSE',  secFn:  ()=>GamesCore.showScreen('screen-menu'),
    });
    _initLevel();
  }

  function _gameOver() {
    st.running=false;
    if (animId) { cancelAnimationFrame(animId); animId=null; }
    _saveHi();
    GamesCore.showResult({
      game:'invaders', won:false,
      stats:{
        xp:   Math.floor(st.score/10),
        pct:  Math.min(99, Math.round(((st.level-1)/10)*100+10)),
        sub:  `Llegaste al nivel ${st.level} con ${st.score.toLocaleString()} puntos.`,
        items:[
          {val:st.score.toLocaleString(), lbl:'PUNTOS'},
          {val:st.level,                  lbl:'NIVEL'},
          {val:st.hiScore.toLocaleString(),lbl:'RÉCORD'},
        ],
      },
    });
  }

  function _win() {
    _saveHi();
    GamesCore.showResult({
      game:'invaders', won:true,
      stats:{
        xp:   Math.floor(st.score/8)+500,
        pct:  100,
        perfect: st.lives===3,
        sub:  `¡10 niveles completados! Puntuación: ${st.score.toLocaleString()}`,
        items:[
          {val:st.score.toLocaleString(), lbl:'PUNTOS'},
          {val:'10/10',                   lbl:'NIVELES'},
          {val:st.lives,                  lbl:'VIDAS'},
          {val:st.hiScore.toLocaleString(),lbl:'RÉCORD'},
        ],
      },
    });
  }

  function _saveHi() {
    if (st.score>st.hiScore) {
      st.hiScore=st.score;
      try { localStorage.setItem('dkInvHi',st.hiScore); } catch(_){}
    }
  }

  /* ── Overlay ────────────────────────────────────────── */
  function _showOverlay({title,badge,sub,mainTxt,mainFn,secTxt,secFn}) {
    const ov=_el('invOverlay'); if (!ov) return;
    _el('invOvTitle').textContent = title;
    _el('invOvBadge').textContent = badge;
    _el('invOvSub').textContent   = sub;
    const mb=_el('invOvMainBtn'); mb.textContent=mainTxt; mb.onclick=mainFn;
    const sb=_el('invOvSecBtn');  sb.textContent=secTxt;  sb.onclick=secFn;
    ov.classList.remove('hidden');
  }
  function _hideOverlay() {
    const ov=_el('invOverlay'); if(ov) ov.classList.add('hidden');
  }

  /* ── API pública ────────────────────────────────────── */
  function start() {
    if (!GameSession.selectedChar) {
      GamesCore.toast('Selecciona un personaje primero');
      GamesCore.showCharSelect();
      return;
    }
    GameSession.currentGame='invaders';
    st.running=false; st.paused=true;
    st.level=1; st.score=0; st.lives=3;
    try { st.hiScore=+localStorage.getItem('dkInvHi')||0; } catch(_){}

    GamesCore.showScreen('screen-invaders');
    if (!canvas) _setup(); else { _resize(); _genStars(); }
    _initLevel();
    _hud();
    _showOverlay({
      title:   'INVASIÓN GALÁCTICA',
      badge:   `NIVEL 1 — ${LEVEL_NAMES[0]}`,
      sub:     `Piloto: ${GameSession.selectedChar.name}\nPrepara tus cañones.`,
      mainTxt: '▶ COMENZAR',    mainFn: resume,
      secTxt:  '← CAMBIAR NAVE', secFn: ()=>GamesCore.showScreen('screen-char-select'),
    });
  }

  function resume() {
    _hideOverlay();
    st.running=true; st.paused=false;
    lastTs=performance.now();
    if (animId) cancelAnimationFrame(animId);
    animId=requestAnimationFrame(_loop);
  }

  function pause() {
    if (!st.running) return;
    st.running=false; st.paused=true;
    if (animId) { cancelAnimationFrame(animId); animId=null; }
    _showOverlay({
      title:   'EN PAUSA',
      badge:   `NIVEL ${st.level} — ${LEVEL_NAMES[st.level-1]}`,
      sub:     `Puntos: ${st.score.toLocaleString()}`,
      mainTxt: '▶ CONTINUAR', mainFn: resume,
      secTxt:  '← MENÚ',     secFn:  ()=>GamesCore.showScreen('screen-menu'),
    });
  }

  function isRunning() { return st.running; }

  function _el(id) { return document.getElementById(id); }

  return { start, resume, pause, setKey, isRunning };

})();
