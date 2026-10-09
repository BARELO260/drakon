const fs=require('fs'),path=require('path'),vm=require('vm');
function load(root){const ctx={console};ctx.window=ctx;vm.createContext(ctx);
 const files=fs.readdirSync(path.join(root,'docs/js/lessons-data')).filter(f=>f.endsWith('.js')).sort((a,b)=>a==='en.js'?-1:b==='en.js'?1:a.localeCompare(b));
 for(const f of files)vm.runInContext(fs.readFileSync(path.join(root,'docs/js/lessons-data',f),'utf8'),ctx,{filename:f});
 vm.runInContext(fs.readFileSync(path.join(root,'docs/js/situations-data.js'),'utf8'),ctx);return ctx;}
const A=load(process.argv[2]||'/home/claude/drakon_r8final'),B=load(process.argv[3]||'/home/claude/drakon');
const p=[];const st={lessons:0,exA:0,exB:0,added:0,arrangeOpts:0,qChg:0,xChg:0,optChg:0,gramD:0,gramT:0,vocabNote:0,other:0};
for(const L of Object.keys(A.LESSON_BANKS)){
  const a=A.LESSON_BANKS[L],b=B.LESSON_BANKS[L];if(a.length!==b.length)p.push('n lecciones '+L);
  a.forEach((la,i)=>{const lb=b[i];st.lessons++;if(la.id!==lb.id){p.push('id '+la.id);return}
    st.exA+=la.ex.length;st.exB+=lb.ex.length;
    for(const k of Object.keys(la))if(!['ex','study'].includes(k)&&JSON.stringify(la[k])!==JSON.stringify(lb[k]))p.push('campo '+k+' '+la.id);
    // study
    if(JSON.stringify(la.study.vocab)!==JSON.stringify(lb.study.vocab)){la.study.vocab.forEach((v,j)=>{if(JSON.stringify(v)!==JSON.stringify(lb.study.vocab[j]))st.vocabNote++});if(la.study.vocab.length!==lb.study.vocab.length)p.push('vocab n '+la.id)}
    const ga=la.study.grammar||[],gb=lb.study.grammar||[];if(ga.length!==gb.length)p.push('grammar n '+la.id);
    ga.forEach((g,j)=>{const h=gb[j];if(JSON.stringify(g)===JSON.stringify(h))return;if(g[0]!==h[0])st.gramT++;if(g[1]!==h[1])st.gramD++;if(g[2]!==h[2]||g.length!==h.length)p.push('ejemplo gramática cambió '+la.id)});
    if(la.ex.length!==lb.ex.length){ // lecciones con ejercicios añadidos: los originales deben conservarse en orden (salvo la producción, que se queda al final)
      const aa=la.ex.map(e=>JSON.stringify(e));const bb=lb.ex.map(e=>JSON.stringify(e));
      const miss=aa.filter(x=>!bb.includes(x));if(miss.length)p.push('ejercicio original perdido '+la.id);
      st.added+=lb.ex.length-la.ex.length;if(lb.ex.length!==6&&L==='EN')p.push('no llega a 6 '+la.id);return}
    la.ex.forEach((ea,j)=>{const eb=lb.ex[j];if(JSON.stringify(ea)===JSON.stringify(eb))return;
      if(ea[0]!==eb[0]||ea.length!==eb.length||ea[3]!==eb[3]&&!(Array.isArray(ea[3])))p.push('forma/índice '+la.id+'#'+(j+1));
      if(Array.isArray(ea[2])&&ea[2].length!==eb[2].length)p.push('n opc '+la.id+'#'+(j+1));
      if(Array.isArray(eb[2])&&new Set(eb[2].map(s=>String(s).toLowerCase())).size!==eb[2].length)p.push('dup '+la.id+'#'+(j+1));
      if(ea[0]==='arrange'&&JSON.stringify(ea[2])!==JSON.stringify(eb[2])){st.arrangeOpts++;if(ea[2][ea[3]]!==eb[2][eb[3]])p.push('arrange: cambió la correcta '+la.id);
        const diff=ea[2].map((o,k)=>o===eb[2][k]?0:1).reduce((x,y)=>x+y,0);if(diff!==1)p.push('arrange: más de 1 opción '+la.id)}
      if(ea[1]!==eb[1])st.qChg++;if(ea[4]!==eb[4])st.xChg++;if(ea[0]!=='arrange'&&JSON.stringify(ea[2])!==JSON.stringify(eb[2]))st.optChg++;});
  });
}
console.log(JSON.stringify(st));
console.log('situaciones idénticas:',JSON.stringify(A.SITUATION_LESSON_BANKS)===JSON.stringify(B.SITUATION_LESSON_BANKS));
console.log('problemas:',p.length);p.slice(0,20).forEach(x=>console.log(' ',x));
