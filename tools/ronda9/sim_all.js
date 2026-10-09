const fs=require('fs'),vm=require('vm'),path=require('path');
const src=fs.readFileSync('/home/claude/drakon/docs/js/lessons.js','utf8');
const m=src.match(/_shuffleOptions\(ex\)\s*\{[\s\S]*?\n  \}/);
const fn=new Function('return {'+m[0]+'}')()._shuffleOptions;
const ctx={console};ctx.window=ctx;vm.createContext(ctx);
const dir='/home/claude/drakon/docs/js/lessons-data';
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.js')).sort((a,b)=>a==='en.js'?-1:b==='en.js'?1:a.localeCompare(b)))vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'),ctx);
vm.runInContext(fs.readFileSync('/home/claude/drakon/docs/js/situations-data.js','utf8'),ctx);
let n=0,bad=0,ex=0;
const run=(les)=>{for(const e of les.ex){ex++;if(!Array.isArray(e[2])||!e[2].length||e[0]==='arrange'&&0)continue;if(typeof e[3]!=='number')continue;
  const o={type:e[0],question:e[1],options:e[2],correct:e[3]};const t=e[2][e[3]];for(let k=0;k<100;k++){const s=fn.call({},o);n++;if(s.options[s.correct]!==t)bad++}}};
for(const L in ctx.LESSON_BANKS)for(const les of ctx.LESSON_BANKS[L])run(les);
const S=ctx.SITUATION_LESSON_BANKS;for(const L in S)for(const k in S[L]){const g=S[L][k];const arr=Array.isArray(g)?g:(g.lessons||Object.values(g));for(const les of arr)if(les&&les.ex)run(les)}
console.log('ejercicios',ex,'barajados',n,'fallos',bad);
