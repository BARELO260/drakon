const fs=require('fs'),path=require('path'),vm=require('vm');
function load(root){const ctx={console};ctx.window=ctx;vm.createContext(ctx);
 for(const f of fs.readdirSync(path.join(root,'docs/js/lessons-data')).filter(f=>f.endsWith('.js')))vm.runInContext(fs.readFileSync(path.join(root,'docs/js/lessons-data',f),'utf8'),ctx);
 vm.runInContext(fs.readFileSync(path.join(root,'docs/js/situations-data.js'),'utf8'),ctx);return ctx;}
const A=load(process.argv[2]||'/home/claude/drakon_r7'),B=load(process.argv[3]||'/home/claude/drakon');
const p=[];let changed=0,qch=0,och=0,ech=0,tot={l:0,e:0,v:0,g:0};
for(const L of Object.keys(A.LESSON_BANKS)){
  const a=A.LESSON_BANKS[L],b=B.LESSON_BANKS[L];
  if(L==='EN'||L==='ES'){ if(JSON.stringify(a)!==JSON.stringify(b))p.push('banco '+L+' cambió');continue;}
  if(a.length!==b.length)p.push('n lecciones '+L);
  a.forEach((la,i)=>{const lb=b[i];tot.l++;
    if(JSON.stringify(la.study)!==JSON.stringify(lb.study))p.push('study '+la.id);
    for(const k of Object.keys(la))if(!['ex'].includes(k)&&JSON.stringify(la[k])!==JSON.stringify(lb[k]))p.push('campo '+k+' '+la.id);
    if(la.ex.length!==lb.ex.length){p.push('nº ex '+la.id);return}
    tot.e+=lb.ex.length;tot.v+=lb.study.vocab.length;tot.g+=(lb.study.grammar||[]).length;
    la.ex.forEach((ea,j)=>{const eb=lb.ex[j];if(JSON.stringify(ea)===JSON.stringify(eb))return;changed++;
      if(ea.length!==eb.length||ea[0]!==eb[0])p.push('forma '+la.id+'#'+j);
      if(ea[3]!==eb[3])p.push('índice '+la.id+'#'+j);
      if(Array.isArray(ea[2])){if(ea[2].length!==eb[2].length)p.push('n opc '+la.id+'#'+j);
        if(new Set(eb[2].map(s=>String(s).toLowerCase())).size!==eb[2].length)p.push('opc duplicadas '+la.id+'#'+j);
        if(JSON.stringify(ea[2])!==JSON.stringify(eb[2]))och++;}
      if(ea[1]!==eb[1])qch++;if(ea[4]!==eb[4])ech++;
      for(let k=5;k<ea.length;k++)if(JSON.stringify(ea[k])!==JSON.stringify(eb[k]))p.push('extra '+la.id+'#'+j);
      if(typeof eb[1]==='string'&&/\bundefined\b/.test(JSON.stringify(eb)))p.push('undefined '+la.id+'#'+j);
    });});
}
console.log('lecciones',tot.l,'ejercicios',tot.e,'vocab',tot.v,'grammar',tot.g);
console.log('ejercicios modificados',changed,'| con pregunta cambiada',qch,'| opciones cambiadas',och,'| explicación cambiada',ech);
console.log('situaciones iguales:',JSON.stringify(A.SITUATION_LESSON_BANKS)===JSON.stringify(B.SITUATION_LESSON_BANKS));
console.log('problemas:',p.length);p.slice(0,20).forEach(x=>console.log(' ',x));
