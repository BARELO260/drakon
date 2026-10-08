const fs=require('fs'),path=require('path'),vm=require('vm');
const SRC=process.argv[2]||'/home/claude/drakon_r8b', DST=process.argv[3]||'/home/claude/drakon', BASE=process.argv[4]||'/home/claude/drakon_r7';
const D=require('./r8c_data.js');
const loadB=(root)=>{const ctx={console};ctx.window=ctx;vm.createContext(ctx);for(const f of ['fr','de','it','pt'])vm.runInContext(fs.readFileSync(path.join(root,'docs/js/lessons-data',f+'.js'),'utf8'),ctx);return ctx.LESSON_BANKS};
const cur=loadB(SRC),base=loadB(BASE);
const QS=/(\\"|[«“„])([^»”“"\\]+?)(\\"|[»”“])|\(([^)]+)\)/g;
const esc=s=>JSON.stringify(s).slice(1,-1);
const cap=(s,o)=>/^[A-ZÀ-Ý]/.test(o)?s.charAt(0).toUpperCase()+s.slice(1):s;
const GK=Object.keys(D.GLOSS).sort((x,y)=>y.length-x.length);
const st={q:0,ex:0,cap:0,lines:0};
for(const L of ['FR','DE','IT','PT']){
  const file=L.toLowerCase()+'.js';const lines=fs.readFileSync(path.join(SRC,'docs/js/lessons-data',file),'utf8').split('\n');
  const byId=Object.fromEntries(cur[L].map(l=>[l.id,l]));const baseById=Object.fromEntries(base[L].map(l=>[l.id,l]));let id=null;
  for(let i=0;i<lines.length;i++){
    const im=lines[i].match(/^\s*id:\s*['"]([^'"]+)['"]/);if(im)id=im[1];
    const t=lines[i].trim();if(!t.startsWith('["'))continue;let arr;try{arr=JSON.parse(t.replace(/,\s*$/,''))}catch(e){continue}
    if(!byId[id]||['writing','speaking'].includes(arr[0]))continue;
    if(byId[id].ex.findIndex(e=>JSON.stringify(e)===JSON.stringify(arr))<0)continue; // solo líneas que son ejercicios (no vocab/grammar)
    let line=lines[i],ch=false;
    const seg=(m,a,s,b,par)=>{const inner=par!==undefined?par:s;const es=D.SEG[inner.trim().toLowerCase()];if(!es)return m;const lead=inner.match(/^\s*/)[0],tr=inner.match(/\s*$/)[0];const v=cap(es,inner.trim());return par!==undefined?'('+lead+v+tr+')':a+lead+v+tr+b};
    if(typeof arr[1]==='string'){const o=esc(arr[1]);const n=o.replace(QS,seg);if(n!==o){line=line.replace(JSON.stringify(arr[1]),()=>'"'+n+'"');st.q++;ch=true}}
    if(typeof arr[4]==='string'){const o=esc(arr[4]);let n=o.replace(QS,seg);
      for(const g of GK){const re=new RegExp('(=\\s*|\\()'+g.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?=[\\s.,;)\\\\]|$)','gi');n=n.replace(re,(m,pre)=>pre+D.GLOSS[g])}
      // mayúscula inicial si el original de la ronda 7 la tenía
      const j=byId[id].ex.findIndex(e=>JSON.stringify(e)===JSON.stringify(arr));const be=baseById[id]&&baseById[id].ex[j];
      if(be&&typeof be[4]==='string'){const m1=be[4].match(/^[^A-Za-zÀ-ÿ¿¡]*([A-ZÀ-Ý])/),m2=n.match(/^([^A-Za-zÀ-ÿ¿¡\\]*)([a-zà-ÿ])/);
        if(m1&&m2&&/^[^A-Za-zÀ-ÿ]*$/.test(be[4].slice(0,be[4].search(/[A-Za-zÀ-ÿ]/)))){n=n.replace(/^([^A-Za-zÀ-ÿ¿¡\\]*)([a-zà-ÿ])/,(m,p,c)=>p+c.toUpperCase());st.cap++}}
      if(n!==o){line=line.replace(JSON.stringify(arr[4]),()=>'"'+n+'"');st.ex++;ch=true}}
    if(ch){const c=JSON.parse(line.trim().replace(/,\s*$/,''));if(c.length!==arr.length||c[0]!==arr[0]||c[3]!==arr[3]||JSON.stringify(c[2])!==JSON.stringify(arr[2]))throw new Error('integridad '+id);lines[i]=line;st.lines++}
  }
  fs.writeFileSync(path.join(DST,'docs/js/lessons-data',file),lines.join('\n'));
}
// Literales finales (ejercicios DE con opciones en inglés)
const J=a=>JSON.stringify(a);
const LIT=[['de.js',J(["Investing in public transport reduces pollution in the long term.","Investing in public transport reduce pollution in the long term.","Invest in public transport reduces pollution long term.","Reduces investing in public transport pollution long term."]),J(["Invertir en transporte público reduce la contaminación a largo plazo.","Invertir en transporte público aumenta la contaminación a largo plazo.","Invertir en transporte público reduce la contaminación solo a corto plazo.","Reducir la contaminación reduce la inversión en transporte público."]),1],
 ['de.js',J(["I usually play tennis on Sundays.","I usually do yoga on Sundays.","I usually lift weights on Sundays.","I usually do yoga on Saturdays."]),J(["Suelo jugar al tenis los domingos.","Suelo hacer yoga los domingos.","Suelo levantar pesas los domingos.","Suelo hacer yoga los sábados."]),1],
 ['de.js','significa «I usually do yoga on Sundays».','significa «Suelo hacer yoga los domingos».',1]];
for(const [f,a,b,n] of LIT){const fp=path.join(DST,'docs/js/lessons-data',f);let t=fs.readFileSync(fp,'utf8');const c=t.split(a).length-1;if(c!==n)throw new Error('literal x'+c+' '+a.slice(0,50));t=t.split(a).join(b);fs.writeFileSync(fp,t);}
console.log(JSON.stringify(st));
