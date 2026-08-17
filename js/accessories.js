/* Character wardrobe: lightweight, themed rewards without changing character art. */
const ACCESSORIES=[
  {id:'passport',icon:'🛂',name:'Pasaporte de viaje',desc:'Listo para tus situaciones reales.',unlocks:()=>true},
  {id:'headphones',icon:'🎧',name:'Audífonos de estudio',desc:'Completa 2 lecciones.',unlocks:()=>state.lessonsCompleted.length>=2},
  {id:'suitcase',icon:'🧳',name:'Maleta de cabina',desc:'Practica una situación de viaje.',unlocks:()=>memorySituations().some(x=>/aeropuerto|hotel|transporte/i.test(x))},
  {id:'chef',icon:'👨‍🍳',name:'Gorro de chef',desc:'Practica en el restaurante.',unlocks:()=>memorySituations().some(x=>/restaurante/i.test(x))},
  {id:'briefcase',icon:'💼',name:'Portafolio profesional',desc:'Completa 10 lecciones.',unlocks:()=>state.lessonsCompleted.length>=10},
  {id:'laurel',icon:'🏅',name:'Insignia de racha',desc:'Alcanza una racha de 7 días.',unlocks:()=>state.streak>=7},
];

function memorySituations(){ return state.learnerMemory?.situations||[]; }
function ensureAccessories(){
  state.accessories=Object.assign({equipped:null,unlocked:['passport']},state.accessories||{});
  if(!Array.isArray(state.accessories.unlocked)) state.accessories.unlocked=['passport'];
  ACCESSORIES.filter(a=>a.unlocks()).forEach(a=>{ if(!state.accessories.unlocked.includes(a.id)) state.accessories.unlocked.push(a.id); });
  return state.accessories;
}
function equippedAccessory(){ const inv=ensureAccessories(); return ACCESSORIES.find(a=>a.id===inv.equipped)||null; }
function renderAccessoryOverlay(){
  const el=document.getElementById('csAccessoryOverlay'); if(!el) return;
  const a=equippedAccessory(); el.textContent=a?a.icon:''; el.title=a?a.name:''; el.style.display=a?'grid':'none';
}
function openWardrobe(){
  const panel=document.getElementById('csWardrobe'); if(!panel) return;
  const inv=ensureAccessories();
  panel.innerHTML=`<div class="wardrobe-head"><span>✨ Accesorios</span><button onclick="closeWardrobe()">×</button></div><div class="wardrobe-sub">Equipa recompensas que cuentan tu historia de aprendizaje.</div><div class="wardrobe-grid">${ACCESSORIES.map(a=>{const unlocked=inv.unlocked.includes(a.id);const selected=inv.equipped===a.id;return `<button class="wardrobe-item ${unlocked?'':'locked'} ${selected?'selected':''}" ${unlocked?`onclick="equipAccessory('${a.id}')"`:'disabled'}><span>${a.icon}</span><b>${a.name}</b><small>${unlocked?(selected?'Equipado':'Tocar para equipar'):`🔒 ${a.desc}`}</small></button>`}).join('')}</div>`;
  panel.style.display='block'; renderAccessoryOverlay(); save();
}
function closeWardrobe(){const panel=document.getElementById('csWardrobe');if(panel)panel.style.display='none';}
function equipAccessory(id){
  const inv=ensureAccessories(); if(!inv.unlocked.includes(id)) return;
  inv.equipped=inv.equipped===id?null:id; save(); renderAccessoryOverlay(); openWardrobe();
  const a=equippedAccessory(); showToast(a?`✨ ${a.name} equipado`:'Accesorio guardado');
}
