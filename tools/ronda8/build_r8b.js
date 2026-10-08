const fs=require('fs'),path=require('path'),vm=require('vm');
const SRC=process.argv[2]||'/home/claude/drakon_r8a', DST=process.argv[3]||'/home/claude/drakon';
const D=require('./r8b_data.js');
const OPTEN=JSON.parse(fs.readFileSync('/home/claude/r8data/optuniq.json','utf8'));
const OPT=new Map(OPTEN.map((o,i)=>[o,D.OPT[i]]));
const SCAN=JSON.parse(fs.readFileSync('/home/claude/r8data/scope_r8b.json','utf8'));
const ctx={console};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['fr','de','it','pt'])vm.runInContext(fs.readFileSync(path.join(SRC,'docs/js/lessons-data',f+'.js'),'utf8'),ctx);
const scope=new Set();for(const k of ['q','opt','ex'])for(const x of SCAN[k])scope.add(x[1]+'#'+x[2]);
const QS=/(\\"|[«“„])([^»”“"\\]+?)(\\"|[»”“])|\(([^)]+)\)/g;
const cap=(s,o)=>/^[A-ZÀ-Ý]/.test(o)?s.charAt(0).toUpperCase()+s.slice(1):s;
const esc=s=>JSON.stringify(s).slice(1,-1);
let st={q:0,opt:0,ex:0,gl:0,lines:0};
for(const L of ['FR','DE','IT','PT']){
  const file=L.toLowerCase()+'.js';const fp=path.join(SRC,'docs/js/lessons-data',file);const lines=fs.readFileSync(fp,'utf8').split('\n');
  const byId=Object.fromEntries(ctx.LESSON_BANKS[L].map(l=>[l.id,l]));let cur=null;
  for(let i=0;i<lines.length;i++){
    const im=lines[i].match(/^\s*id:\s*['"]([^'"]+)['"]/);if(im)cur=im[1];
    const t=lines[i].trim();if(!t.startsWith('["'))continue;
    let arr;try{arr=JSON.parse(t.replace(/,\s*$/,''))}catch(e){continue}
    const les=byId[cur];if(!les)continue;
    const j=les.ex.findIndex(e=>JSON.stringify(e)===JSON.stringify(arr));if(j<0||!scope.has(cur+'#'+j))continue;
    let line=lines[i],changed=false;
    // opciones
    if(Array.isArray(arr[2])&&arr[0]!=='arrange'&&arr[2].some(o=>OPT.has(o))){
      const no=arr[2].map(o=>OPT.has(o)?OPT.get(o):o);
      if(new Set(no.map(s=>s.toLowerCase())).size!==no.length)throw new Error('opciones duplicadas '+cur+' '+j);
      const qs=JSON.stringify(arr[1]);const p=line.indexOf(qs)+qs.length;const a=line.indexOf('[',p);const b=line.indexOf(']',a);
      const oldSeg=line.slice(a,b+1);const sep=/",\s/.test(oldSeg)?', ':',';
      line=line.slice(0,a)+'['+no.map(s=>JSON.stringify(s)).join(sep)+']'+line.slice(b+1);arr[2]=no;changed=true;st.opt++;
    }
    const seg=(m,a,s,b,par,orig)=>{const inner=par!==undefined?par:s;const k=inner.trim().toLowerCase();const es=D.SEG[k];if(!es)return m;
      const lead=inner.match(/^\s*/)[0],tr=inner.match(/\s*$/)[0];const v=cap(es,inner.trim());
      return par!==undefined?'('+lead+v+tr+')':a+lead+v+tr+b};
    // pregunta
    const oq=arr[1];let nq=esc(oq).replace(QS,(m,a,s,b,par)=>seg(m,a,s,b,par));
    if(nq!==esc(oq)){const o=JSON.stringify(oq);line=line.replace(o,()=>'"'+nq+'"');st.q++;changed=true;}
    // explicación
    if(typeof arr[4]==='string'){
      const oe=arr[4];let ne=esc(oe).replace(QS,(m,a,s,b,par)=>seg(m,a,s,b,par));
      ne=ne.replace(/'by no means'/,"'de ninguna manera'");
      // glosas sueltas "= gloss" y "(gloss)"
      const keys=Object.keys(D.GLOSS).sort((x,y)=>y.length-x.length);
      for(const g of keys){const re=new RegExp('(=\\s*|\\()'+g.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?=[\\s.,;)\\\\]|$)','gi');
        ne=ne.replace(re,(m,pre)=>{st.gl++;return pre+D.GLOSS[g]});}
      if(ne!==esc(oe)){line=line.replace(JSON.stringify(oe),()=>'"'+ne+'"');st.ex++;changed=true;}
    }
    if(changed){ // integridad
      const chk=JSON.parse(line.trim().replace(/,\s*$/,''));
      if(chk.length!==arr.length||chk[0]!==arr[0]||(chk[3]!==arr[3]))throw new Error('integridad '+cur+' '+j);
      if(Array.isArray(chk[2])&&chk[2].length!==arr[2].length)throw new Error('n opciones '+cur+' '+j);
      lines[i]=line;st.lines++;}
  }
  fs.writeFileSync(path.join(DST,'docs/js/lessons-data',file),lines.join('\n'));
}
// Literales puntuales hallados en el reescaneo final
const LIT=[['de.js','“hypothetical situation”','“situación hipotética”',1],['de.js','“Hypothetical situation”','“Situación hipotética”',1],['de.js','“Whatever” se traduce con','“Sea lo que sea” se traduce con',1],
 ['fr.js',"= What's your name?","= ¿Cómo te llamas?",1],['de.js',"= What's your name?","= ¿Cómo te llamas?",1],['it.js',"= What's your name?","= ¿Cómo te llamas?",1],['pt.js',"= What's your name?","= ¿Cómo te llamas?",1]];
for(const [f,a,b,n] of LIT){const fp=path.join(DST,'docs/js/lessons-data',f);let t=fs.readFileSync(fp,'utf8');const c=t.split(a).length-1;if(c!==n)throw new Error('literal '+a+' x'+c);t=t.split(a).join(b);fs.writeFileSync(fp,t);}
console.log(JSON.stringify(st));
