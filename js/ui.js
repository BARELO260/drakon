/* ═══════════════════════════════════════
   ui.js — themes, navigation, toasts, particles, UI helpers
   Dependencias: state.js, data.js
   Usado por: app.js, todos los módulos
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   THEME
═══════════════════════════════════════ */
function applyTheme(id){
  state.theme=id;
  document.documentElement.setAttribute('data-theme',id);
  save();
  renderThemeGrid();
  // Update canvas background colors — orb1/orb2 brighter, bg1/bg2 more colorful, extra orbs for variety
  const themeCanvasColors={
    // 🌑 OSCURO — fuego naranja sobre fondo casi negro azulado
    dark:  {orb1:[255,160,0,.22],  orb2:[255,80,0,.14],   orb3:[120,40,255,.08], line:[255,160,0,.1],  bg1:[22,14,6],    bg2:[8,4,18]},
    // ☀️ CLARO — lavanda clara con destellos dorados
    light: {orb1:[160,80,255,.12], orb2:[255,180,0,.08],  orb3:[0,180,255,.06],  line:[160,80,255,.07],bg1:[240,230,255],bg2:[255,248,235]},
    // ⬛ AMOLED — negro puro con chispas azul eléctrico
    amoled:{orb1:[0,160,255,.18],  orb2:[120,0,255,.12],  orb3:[0,255,200,.07],  line:[0,160,255,.08], bg1:[8,4,16],     bg2:[0,0,0]},
    // 🌲 BOSQUE — verde intenso, fondo verde-musgo oscuro
    forest:{orb1:[0,255,100,.18],  orb2:[60,200,0,.12],   orb3:[200,255,0,.06],  line:[0,255,100,.1],  bg1:[2,22,6],     bg2:[0,10,2]},
    // 🌊 OCÉANO — azul profundo con cian brillante
    ocean: {orb1:[0,200,255,.2],   orb2:[0,80,200,.14],   orb3:[0,255,220,.08],  line:[0,200,255,.1],  bg1:[0,14,32],    bg2:[0,6,20]},
    // 💜 MORADO — violeta eléctrico sobre fondo índigo
    purple:{orb1:[200,80,255,.22], orb2:[100,40,255,.14], orb3:[255,80,200,.08], line:[200,80,255,.1],  bg1:[16,4,30],    bg2:[6,0,18]},
    // 💎 RUBÍ — carmesí brillante, fondo vino oscuro
    ruby:  {orb1:[255,20,70,.24],  orb2:[200,0,40,.15],   orb3:[255,100,160,.08],line:[255,20,70,.1],  bg1:[28,0,8],     bg2:[16,0,4]},
    // 💻 MATRIX — verde néon sobre negro, líneas de datos
    matrix:{orb1:[0,255,60,.22],   orb2:[0,180,40,.14],   orb3:[120,255,0,.08],  line:[0,255,60,.12],  bg1:[0,16,2],     bg2:[0,6,0]},
    // 🌅 ATARDECER — naranja-magenta, cielo crepuscular
    sunset:{orb1:[255,100,0,.22],  orb2:[255,0,80,.14],   orb3:[255,200,0,.09],  line:[255,100,0,.1],  bg1:[30,8,0],     bg2:[18,2,6]},
    // 🌸 ROSA NEÓN — magenta eléctrico sobre fondo ciruela
    rose:  {orb1:[255,0,160,.24],  orb2:[200,0,100,.15],  orb3:[255,100,255,.08],line:[255,0,160,.1],  bg1:[24,0,16],    bg2:[14,0,10]},
    // 🧊 ÁRTICO — azul glacial brillante sobre fondo marino
    ice:   {orb1:[80,220,255,.2],  orb2:[0,140,255,.13],  orb3:[200,240,255,.08],line:[80,220,255,.1], bg1:[0,16,28],    bg2:[0,8,18]},
    // 🌋 LAVA — naranja-amarillo incandescente, fondo negro volcánico
    lava:  {orb1:[255,140,0,.26],  orb2:[255,60,0,.16],   orb3:[255,220,0,.1],   line:[255,140,0,.12], bg1:[20,4,0],     bg2:[6,0,0]},
    // 🌿 MENTA — verde agua fresco sobre fondo blanco-verdoso
    mint:  {orb1:[0,200,140,.14],  orb2:[0,230,180,.09],  orb3:[100,255,180,.06],line:[0,200,140,.08], bg1:[210,248,232],bg2:[240,255,248]},
    // 🏜️ DESIERTO — ocre y siena sobre arena caliente
    sand:  {orb1:[220,140,0,.18],  orb2:[200,80,0,.12],   orb3:[255,200,80,.08], line:[220,140,0,.09], bg1:[245,224,180],bg2:[255,240,210]},
    // 🌆 NEON X — cian eléctrico sobre fondo negro-teal
    neon:  {orb1:[0,255,210,.26],  orb2:[0,180,255,.16],  orb3:[80,255,180,.1],  line:[0,255,210,.12], bg1:[0,16,18],    bg2:[0,6,8]},
    // 🌍 TIERRA — ocre/marrón cálido, fondo tierra oscura
    earth: {orb1:[200,140,40,.2],  orb2:[140,80,0,.13],   orb3:[180,200,60,.07], line:[200,140,40,.09],bg1:[20,12,0],    bg2:[10,6,0]},
    // 🌺 CEREZA — rosa-rojo suave sobre crema rosada
    cherry:{orb1:[220,40,80,.12],  orb2:[180,10,50,.08],  orb3:[255,120,160,.06],line:[220,40,80,.07], bg1:[248,224,230],bg2:[255,242,246]},
    // 🪨 PIZARRA — verde-gris fresco, fondo oscuro tipo pizarrón
    slate: {orb1:[60,200,140,.2],  orb2:[0,160,100,.13],  orb3:[100,255,180,.07],line:[60,200,140,.09],bg1:[8,20,14],    bg2:[4,12,8]},
  };
  // Inject third orb into canvas draw if not already patched
  const t = themeCanvasColors[id] || themeCanvasColors.dark;
  if(t.orb3) window._canvasOrb3 = t.orb3; else window._canvasOrb3 = null;
  window._canvasTheme = t;
  window._themeId = id;
}
function renderThemeGrid(){
  var grid=document.getElementById('themeGrid'); if(!grid) return;

  // Each theme gets a unique visual "personality" in the preview
  function buildPreview(id, m, isActive){
    var dot = isActive ? '<div style="position:absolute;top:5px;right:5px;width:8px;height:8px;border-radius:50%;background:'+m.c1+';box-shadow:0 0 10px '+m.c1+',0 0 4px #fff4"></div>' : '';
    var p = '';
    if(id==='dark'){
      // Dragon fire — glowing orb in center with radiating lines
      p='<div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 60%,#f5920020,transparent)"></div>'
       +'<div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:22px;height:22px;border-radius:50%;background:radial-gradient(circle,#fbbf24,#f59200,#c05000);box-shadow:0 0 12px #f59200,0 0 24px #f5920055"></div>'
       +'<div style="position:absolute;bottom:14px;left:14px;right:14px;height:1px;background:linear-gradient(90deg,transparent,#f5920060,transparent)"></div>'
       +'<div style="position:absolute;top:6px;left:10px;font-size:13px;line-height:1">🐲</div>';
    } else if(id==='light'){
      // Sun rays on parchment
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#fff8e1,#fdf6e3)"></div>'
       +'<div style="position:absolute;top:-4px;right:4px;width:18px;height:18px;border-radius:50%;background:radial-gradient(circle,#ffd54f,#ff8f00);box-shadow:0 0 8px #ff8f0066"></div>'
       +'<div style="position:absolute;bottom:6px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#c9700040,#c97000,#c9700040);border-radius:1px"></div>'
       +'<div style="position:absolute;bottom:11px;left:8px;right:8px;height:1px;background:#c9700025"></div>';
    } else if(id==='amoled'){
      // Pure black void with minimal gold spark
      p='<div style="position:absolute;inset:0;background:#000"></div>'
       +'<div style="position:absolute;inset:0;background:radial-gradient(ellipse 40% 30% at 50% 50%,#f5920012,transparent)"></div>'
       +'<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:3px;height:3px;background:#fbbf24;border-radius:50%;box-shadow:0 0 12px #fbbf24,0 0 24px #f59200"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:1px;background:linear-gradient(90deg,transparent,#f5920080,transparent)"></div>';
    } else if(id==='forest'){
      // Canopy leaves + green glow ground
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#020c06 40%,#031a09)"></div>'
       +'<div style="position:absolute;top:3px;left:4px;font-size:16px;opacity:.7">🌿</div>'
       +'<div style="position:absolute;top:3px;right:2px;font-size:11px;opacity:.5">🍃</div>'
       +'<div style="position:absolute;bottom:0;left:0;right:0;height:10px;background:radial-gradient(ellipse 80% 100% at 50% 100%,#00e87040,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#00e870,#00ff90);border-radius:1px;box-shadow:0 0 6px #00e87088"></div>';
    } else if(id==='ocean'){
      // Waves + deep blue glow
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#010810 0%,#020f22 50%,#031c36 100%)"></div>'
       +'<div style="position:absolute;bottom:0;left:0;right:0;height:14px;background:radial-gradient(ellipse 100% 100% at 50% 100%,#00c8ff30,transparent)"></div>'
       +'<div style="position:absolute;bottom:11px;left:0;right:0;height:2px;border-radius:50%;background:linear-gradient(90deg,transparent,#00c8ff88,transparent);filter:blur(1px)"></div>'
       +'<div style="position:absolute;bottom:7px;left:4px;right:4px;height:1px;border-radius:50%;background:linear-gradient(90deg,transparent,#38d8ff60,transparent)"></div>'
       +'<div style="position:absolute;top:5px;right:6px;font-size:11px">🌊</div>';
    } else if(id==='purple'){
      // Galaxy stars + nebula
      p='<div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 30% 40%,#5010a022,transparent),radial-gradient(ellipse 50% 50% at 80% 70%,#a060ff15,transparent),#07010f"></div>'
       +'<div style="position:absolute;top:5px;left:8px;width:2px;height:2px;border-radius:50%;background:#c4a0ff;box-shadow:0 0 4px #b050ff"></div>'
       +'<div style="position:absolute;top:9px;right:10px;width:1.5px;height:1.5px;border-radius:50%;background:#d8b8ff;box-shadow:0 0 3px #b050ff"></div>'
       +'<div style="position:absolute;top:14px;left:16px;width:1px;height:1px;border-radius:50%;background:#e0ccff"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#b050ff,#d890ff);border-radius:1px;box-shadow:0 0 8px #b050ffaa"></div>';
    } else if(id==='ruby'){
      // Blood red with gem refraction
      p='<div style="position:absolute;inset:0;background:linear-gradient(135deg,#200308,#1e0206)"></div>'
       +'<div style="position:absolute;top:4px;left:50%;transform:translateX(-50%);width:14px;height:14px;background:linear-gradient(135deg,#ff5060,#ff1040,#800020);clip-path:polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%);box-shadow:0 0 10px #ff1040"></div>'
       +'<div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 30%,#ff204015,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#ff1040,#ff5060);border-radius:1px;box-shadow:0 0 8px #ff104088"></div>';
    } else if(id==='matrix'){
      // Falling green code rain columns
      p='<div style="position:absolute;inset:0;background:#010d03"></div>'
       +'<div style="position:absolute;top:0;left:7px;width:1px;height:100%;background:linear-gradient(180deg,transparent,#00ff41aa,#00ff4130,transparent)"></div>'
       +'<div style="position:absolute;top:0;left:17px;width:1px;height:100%;background:linear-gradient(180deg,#00dd3520,#00ff41cc,transparent,transparent)"></div>'
       +'<div style="position:absolute;top:0;left:27px;width:1px;height:100%;background:linear-gradient(180deg,transparent,transparent,#00ff4199,transparent)"></div>'
       +'<div style="position:absolute;top:0;left:37px;width:1px;height:100%;background:linear-gradient(180deg,#00ff4140,transparent,#00ff41bb,transparent)"></div>'
       +'<div style="position:absolute;top:0;left:47px;width:1px;height:100%;background:linear-gradient(180deg,transparent,#00dd35aa,transparent,#00ff4150)"></div>'
       +'<div style="position:absolute;top:4px;left:5px;font-size:7px;color:#00ff41;font-family:monospace;opacity:.8;line-height:1.1">ｱ1ﾆ0<br>0ｶ1ﾄ<br>ﾊ0ｱ0</div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#00ff41,#00dd35);border-radius:1px;box-shadow:0 0 10px #00ff41cc"></div>';
    } else if(id==='sunset'){
      // Gradient sky with horizon glow
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#0f0500 0%,#3d1400 40%,#8b2200 70%,#c44000 90%,#ff6600 100%)"></div>'
       +'<div style="position:absolute;bottom:10px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#ff880088,transparent)"></div>'
       +'<div style="position:absolute;top:4px;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;background:radial-gradient(circle,#ffee88,#ff8800);box-shadow:0 0 12px #ff880088"></div>'
       +'<div style="position:absolute;bottom:5px;left:8px;right:8px;height:3px;background:linear-gradient(90deg,#ff5500,#ff8800,#ffcc00);border-radius:1px;box-shadow:0 0 8px #ff550088"></div>';
    } else if(id==='rose'){
      // Pink neon glow with rose petals vibe
      p='<div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 80% at 50% 110%,#ff10a025,transparent),#0d0008"></div>'
       +'<div style="position:absolute;top:5px;left:50%;transform:translateX(-50%);font-size:14px">🌸</div>'
       +'<div style="position:absolute;bottom:0;left:0;right:0;height:12px;background:radial-gradient(ellipse 80% 100% at 50% 100%,#ff10a035,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#ff10a0,#ff60d0);border-radius:1px;box-shadow:0 0 8px #ff10a0aa"></div>';
    } else if(id==='ice'){
      // Arctic frost crystals
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#00080f,#020e1c)"></div>'
       +'<div style="position:absolute;top:3px;left:3px;font-size:11px;opacity:.6">❄️</div>'
       +'<div style="position:absolute;top:3px;right:4px;font-size:9px;opacity:.4">❄️</div>'
       +'<div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 0%,#88e8ff15,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#30d0ff,#88e8ff);border-radius:1px;box-shadow:0 0 8px #30d0ff88"></div>';
    } else if(id==='lava'){
      // Molten rock cracks glowing
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#160200,#0a0000)"></div>'
       +'<div style="position:absolute;top:8px;left:4px;right:4px;height:1px;background:linear-gradient(90deg,transparent,#ff330055,#ff6600aa,#ff330055,transparent);filter:blur(0.5px)"></div>'
       +'<div style="position:absolute;top:16px;left:8px;right:12px;height:1px;background:linear-gradient(90deg,#ff440060,transparent,#ff330070)"></div>'
       +'<div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 80%,#ff330020,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:3px;background:linear-gradient(90deg,#ff3300,#ff6600,#ff9900);border-radius:1px;box-shadow:0 0 10px #ff3300aa"></div>';
    } else if(id==='mint'){
      // Fresh garden with light green
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#e8faf2,#d4f5e6)"></div>'
       +'<div style="position:absolute;top:3px;right:4px;font-size:14px">🌱</div>'
       +'<div style="position:absolute;bottom:0;left:0;right:0;height:10px;background:linear-gradient(0deg,#009060aa,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#009060,#00b870);border-radius:1px;box-shadow:0 0 6px #00906088"></div>';
    } else if(id==='sand'){
      // Desert dunes gradient
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#100c00,#1a1400)"></div>'
       +'<div style="position:absolute;bottom:0;left:0;right:0;height:18px;background:radial-gradient(ellipse 120% 100% at 30% 100%,#e0a80018,transparent),radial-gradient(ellipse 80% 100% at 70% 100%,#ffd00022,transparent)"></div>'
       +'<div style="position:absolute;top:4px;right:5px;font-size:11px;opacity:.6">🌙</div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#e0a800,#ffd000);border-radius:1px;box-shadow:0 0 6px #e0a80088"></div>';
    } else if(id==='neon'){
      // Cyberpunk neon on black
      p='<div style="position:absolute;inset:0;background:#020002"></div>'
       +'<div style="position:absolute;top:8px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#ff00ff80,transparent)"></div>'
       +'<div style="position:absolute;top:18px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#00ffff50,transparent)"></div>'
       +'<div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 20% 50%,#ff00ff10,transparent),radial-gradient(ellipse 50% 50% at 80% 50%,#00ffff10,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:3px;background:linear-gradient(90deg,#ff00ff,#ff80ff,#00ffff);border-radius:1px;box-shadow:0 0 10px #ff00ffaa"></div>';
    } else if(id==='earth'){
      // Warm earthy tones with terrain feel
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#140e00,#080500)"></div>'
       +'<div style="position:absolute;bottom:8px;left:0;right:0;height:16px;background:radial-gradient(ellipse 100% 100% at 50% 100%,#a0784020,transparent)"></div>'
       +'<div style="position:absolute;top:4px;left:4px;font-size:12px;opacity:.7">🌍</div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#c09040,#deb060);border-radius:1px;box-shadow:0 0 6px #c0904080"></div>';
    } else if(id==='cherry'){
      // Cherry blossom light
      p='<div style="position:absolute;inset:0;background:linear-gradient(180deg,#f8f0f2,#ead4db)"></div>'
       +'<div style="position:absolute;top:3px;left:3px;font-size:14px;opacity:.8">🌸</div>'
       +'<div style="position:absolute;top:6px;right:5px;font-size:9px;opacity:.5">🌸</div>'
       +'<div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,#ff82a910,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#c82850,#e04870);border-radius:1px;box-shadow:0 0 6px #c8285080"></div>';
    } else if(id==='slate'){
      // Blueprint / tech schematic
      p='<div style="position:absolute;inset:0;background:#0a0c10"></div>'
       +'<div style="position:absolute;inset:0;background-image:linear-gradient(rgba(64,128,240,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(64,128,240,.06) 1px,transparent 1px);background-size:7px 7px"></div>'
       +'<div style="position:absolute;top:6px;left:6px;width:12px;height:12px;border:1px solid #6090e060;border-radius:1px"></div>'
       +'<div style="position:absolute;top:8px;left:22px;right:8px;height:1px;background:#6090e030"></div>'
       +'<div style="position:absolute;top:14px;left:22px;right:14px;height:1px;background:#6090e020"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,#6090e0,#90b8ff);border-radius:1px;box-shadow:0 0 6px #6090e088"></div>';
    } else {
      // Fallback generic
      p='<div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,'+m.c1+'18,transparent)"></div>'
       +'<div style="position:absolute;bottom:7px;left:6px;right:6px;height:2px;background:linear-gradient(90deg,'+m.c1+','+m.c2+');border-radius:1px;box-shadow:0 0 6px '+m.c1+'88"></div>';
    }
    return p + dot;
  }

  var meta={
    dark:  {bg:'#0c0800',c1:'#f59200',c2:'#fbbf24'},
    light: {bg:'#fdf6e3',c1:'#c97000',c2:'#e8a000'},
    amoled:{bg:'#000000',c1:'#f59200',c2:'#fbbf24'},
    forest:{bg:'#020c06',c1:'#00c87a',c2:'#00f5a0'},
    ocean: {bg:'#010810',c1:'#00b8ff',c2:'#38d8ff'},
    purple:{bg:'#07010f',c1:'#a060ff',c2:'#c4a0ff'},
    ruby:  {bg:'#0f0002',c1:'#ff2050',c2:'#ff6080'},
    matrix:{bg:'#010d03',c1:'#00ff41',c2:'#00dd35'},
    sunset:{bg:'#0f0500',c1:'#ff6000',c2:'#ff9830'},
    rose:  {bg:'#0d0008',c1:'#ff40b0',c2:'#ff80d0'},
    ice:   {bg:'#00080f',c1:'#60d0ff',c2:'#a0e8ff'},
    lava:  {bg:'#0a0000',c1:'#ff4400',c2:'#ff7700'},
    mint:  {bg:'#f0faf6',c1:'#00a864',c2:'#00cc78'},
    sand:  {bg:'#100c00',c1:'#d4a020',c2:'#f0c040'},
    neon:  {bg:'#020002',c1:'#ff00ff',c2:'#ff80ff'},
    earth: {bg:'#080500',c1:'#a07840',c2:'#c8a060'},
    cherry:{bg:'#f8f0f2',c1:'#c82850',c2:'#e04870'},
    slate: {bg:'#0a0c10',c1:'#6090e0',c2:'#90b8ff'},
  };
  grid.innerHTML=THEMES.map(function(t){
    var locked=t.free===false&&!state.isPremium;
    var m=meta[t.id]||{bg:'#111',c1:'#f59200',c2:'#fbbf24'};
    var isActive=state.theme===t.id;
    var lock=locked?'<div style="position:absolute;inset:0;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;font-size:16px;backdrop-filter:blur(2px)">&#128274;</div>':'';
    var action=locked?"showPremModal()":"applyTheme('"+t.id+"')";
    var activeBorder=isActive?'border-color:'+m.c1+';box-shadow:0 0 14px '+m.c1+'55':'';
    return '<div class="theme-card '+(isActive?'active-theme':'')+'" onclick="'+action+'" style="'+activeBorder+'">'
      +'<div class="theme-preview" style="background:'+m.bg+';position:relative;overflow:hidden">'
        +buildPreview(t.id, m, isActive)
        +lock
      +'</div>'
      +'<div class="theme-name" style="'+(isActive?'color:'+m.c1:'')+'">'+t.name+'</div>'
      +'</div>';
  }).join('');
}


/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
function goTo(sid){
  const cur=document.getElementById(state.screen); state.prevScreen=state.screen;
  const next=document.getElementById(sid); if(!next) return;
  if(cur) cur.classList.remove('active');
  if(state.screen==='screen-chat' && sid!=='screen-chat'){
    if(window.speechSynthesis) window.speechSynthesis.cancel();
    if(isListening){ try{ if(recognition) recognition.stop(); }catch(e){} }
  }
  next.classList.add('active'); state.screen=sid;
  // Show bottom nav on all "tab-level" screens
  const showNav=['screen-main','screen-situations','screen-profile','screen-saved-chats','screen-chat-history'].includes(sid);
  const nav=document.getElementById('bottomNav');
  if(nav) nav.style.display=showNav?'flex':'none';
  // Sync active bottom nav tab
  const tabMap={'screen-main':'home','screen-saved-chats':'chat','screen-chat-history':'chat','screen-situations':'situations','screen-profile':'profile'};
  if(tabMap[sid]){
    document.querySelectorAll('.bn').forEach(b=>b.classList.remove('active'));
    const el=document.getElementById('bn-'+tabMap[sid]); if(el) el.classList.add('active');
  }
}
function goBack(){ goTo(state.prevScreen||'screen-main'); }
function navTo(tab){
  document.querySelectorAll('.bn').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('bn-'+tab); if(el) el.classList.add('active');
  if(tab==='home'){ goTo('screen-main'); switchTab('home'); }
  else if(tab==='chat'){ goTo('screen-saved-chats'); renderSavedChats(); }
  else if(tab==='situations'){ goTo('screen-situations'); }
  else if(tab==='profile'){ goTo('screen-profile'); renderProfile(); }
}
function switchTab(tab){
  ['home','lessons','ai','chars','settings'].forEach(t=>{
    const el=document.getElementById('tab-'+t); if(el) el.style.display=t===tab?'block':'none';
    const mt=document.getElementById('mtab-'+t); if(mt) mt.classList.toggle('active',t===tab);
  });
  if(tab==='lessons') renderLessons();
  if(tab==='chars') renderChars();
  if(tab==='settings'){ renderThemeGrid(); updateToggleUI(); loadGroqKeyUI(); }
}

/* ═══════════════════════════════════════
   PROFILE
═══════════════════════════════════════ */
function renderProfile(){
  const ch=getChar();
  const pc=document.getElementById('profileChar'); if(pc) pc.innerHTML='<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">';
  const pn=document.getElementById('profileName'); if(pn) pn.textContent=ch.name;
  const pl=document.getElementById('profileLangSub'); if(pl) pl.textContent=state.lang?`Aprendiendo: ${state.lang.name} ${state.lang.flag}`:'Selecciona un idioma';
  const sm=document.getElementById('statMsgs'); if(sm) sm.textContent=state.totalMessages;
  updatePremUI();
  const al=document.getElementById('achList'); if(!al) return;
  al.innerHTML=state.achievements.map(a=>`
    <div class="ach ${a.earned?'':'locked'}">
      <span class="ach-ic">${a.icon}</span>
      <div><div class="ach-n">${a.name}</div><div class="ach-d">${a.desc}</div></div>
      <span class="ach-b ${a.badge}">${a.earned?'✓ Ganado':'Bloqueado'}</span>
    </div>`).join('');
}

/* ═══════════════════════════════════════
   TOASTS
═══════════════════════════════════════ */
function showToast(msg){ const t=document.getElementById('toast'); if(!t) return; t.textContent=msg; t.classList.remove('show'); void t.offsetWidth; t.classList.add('show'); }

/* ═══════════════════════════════════════
   PARTICLES
═══════════════════════════════════════ */
function createParticles(){
  const c=document.getElementById('particles'); if(!c) return;
  for(let i=0;i<35;i++){ const s=document.createElement('div'); s.className='star'; const sz=Math.random()*2+.6;
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;animation-delay:${Math.random()*5}s`; c.appendChild(s); }
  for(let i=0;i<6;i++){ const e=document.createElement('div'); e.className='ember';
    e.style.cssText=`width:${Math.random()*3+1.5}px;height:${Math.random()*3+1.5}px;left:${Math.random()*100}%;bottom:${Math.random()*15}%;background:${Math.random()>.5?'#f97316':'#f59e0b'};--ed:${5+Math.random()*7}s;animation-delay:${Math.random()*8}s`; c.appendChild(e); }
}

/* ═══════════════════════════════════════
   UPDATE ALL
═══════════════════════════════════════ */
function updateAllUI(){
  gainXP(0,false); updateStreakUI(); updatePremUI(); renderMissions(); renderSituations();
  const ch=getChar();
  const ti=document.getElementById('tbChar'); if(ti){ ti.innerHTML='<img src="'+ch.img+'" style="width:24px;height:24px;object-fit:contain">'; }
  const hi=document.getElementById('heroChar');
  if(hi){
    if(ch.id==='dragon'){
      hi.innerHTML='<video src="assets/characters/faces/drakonspeak.webm" autoplay loop muted playsinline style="width:90px;height:90px;object-fit:contain;display:block;">';
    } else {
      hi.innerHTML='<img src="'+ch.img+'" style="width:90px;height:90px;object-fit:contain">';
    }
  }
  const tn=document.getElementById('tbName'); if(tn) tn.textContent=ch.name;
  if(state.lang){ const ld=document.getElementById('langDisplay'); if(ld) ld.textContent=state.lang.code; const lp=document.getElementById('chatLangP'); if(lp) lp.textContent=state.lang.code; }
  const ie=document.getElementById('introEmoji'); if(ie) ie.innerHTML='<img src="'+ch.img+'" style="width:110px;height:110px;object-fit:contain">';
  renderCharPickRow(); updateAIBar();
  setInterval(updateStreakCountdown, 60000); // update countdown every minute
}

