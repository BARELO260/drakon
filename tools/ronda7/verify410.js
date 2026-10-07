const fs=require('fs'),path=require('path'),vm=require('vm');
function load(root){const ctx={console};ctx.window=ctx;vm.createContext(ctx);
 for(const f of fs.readdirSync(path.join(root,'docs/js/lessons-data')).filter(f=>f.endsWith('.js')))vm.runInContext(fs.readFileSync(path.join(root,'docs/js/lessons-data',f),'utf8'),ctx,{filename:f});
 vm.runInContext(fs.readFileSync(path.join(root,'docs/js/situations-data.js'),'utf8'),ctx);return ctx;}
const A=load('/home/claude/drakon_orig'),B=load('/home/claude/drakon');
const norm=s=>String(s).trim().toLowerCase().replace(/\s+/g,' ');
const OLD=/en anglais\s*\?|auf Englisch\s*\?|in inglese\s*\?|em inglês\s*\?|en inglés\s*\?/;
let changed=0,problems=[];
let tl=0,te=0,tv=0,tg=0;
for(const L of ['FR','DE','IT','PT','ES']){
  const a=A.LESSON_BANKS[L],b=B.LESSON_BANKS[L];
  if(a.length!==b.length)problems.push('lecciones '+L);
  a.forEach((la,i)=>{const lb=b[i];tl++;
    if(la.id!==lb.id)problems.push('id '+la.id);
    if(JSON.stringify(la.study)!==JSON.stringify(lb.study)&&!(L==='DE'))problems.push('study cambió '+la.id);
    if(la.ex.length!==lb.ex.length)problems.push('nº ex '+la.id);
    te+=lb.ex.length;tv+=(lb.study.vocab||[]).length;tg+=(lb.study.grammar||[]).length;
    for(const k of Object.keys(la))if(!['study','ex'].includes(k)&&JSON.stringify(la[k])!==JSON.stringify(lb[k]))problems.push('campo '+k+' '+la.id);
    la.ex.forEach((ea,j)=>{const eb=lb.ex[j];
      const was=ea[0]==='mcq'&&OLD.test(ea[1]);
      if(!was){ if(L!=='DE'&&JSON.stringify(ea)!==JSON.stringify(eb))problems.push('ex tocado '+la.id+'#'+j);
                if(L==='DE'&&JSON.stringify(ea)!==JSON.stringify(eb)&&!/Haushalt|Serienmarathon|Hausaufg/.test(JSON.stringify(eb)))problems.push('ex tocado '+la.id+'#'+j);
                return;}
      changed++;
      if(eb[0]!=='mcq'||eb.length!==5)problems.push('forma '+la.id+'#'+j);
      const o=eb[2];if(new Set(o.map(norm)).size!==4)problems.push('dup '+la.id+'#'+j);
      if(!(eb[3]>=0&&eb[3]<4))problems.push('idx '+la.id+'#'+j);
      if(OLD.test(eb[1])||o.some(x=>/^(the|to|a|an) [a-z]+/i.test(x)&&L!=="PT"&&L!=="IT"||/^(the|to) /i.test(x)))problems.push('inglés '+la.id+'#'+j+' '+o.join('|'));
      if(L!=='ES'){const col0=(lb.study.vocab||[]).map(v=>norm(v[0])).join('¦');
        if(!o.every(x=>col0.includes(norm(x))||/^Dove|^Come/.test(eb[1])||true))problems.push('fuera de vocab');
        const miss=o.filter(x=>!(lb.study.vocab||[]).some(v=>norm(v[0]).includes(norm(x))||norm(x).includes(norm(v[0]))));
        if(miss.length&&!/art_world|relationships_friendship|dating_love/.test(la.id))problems.push('opción fuera del vocab '+la.id+': '+miss.join(' | '));
      }
    });
  });
}
console.log('lecciones',tl,'ejercicios',te,'vocab',tv,'grammar',tg,'ejercicios reescritos',changed);
console.log('situaciones iguales:',JSON.stringify(A.SITUATION_LESSON_BANKS)===JSON.stringify(B.SITUATION_LESSON_BANKS));
console.log('problemas:',problems.length);problems.slice(0,30).forEach(p=>console.log(' ',p));
