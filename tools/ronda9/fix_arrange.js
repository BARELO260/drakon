// Ronda 9: distractores de `arrange` que eran un orden también válido -> ordenación inequívocamente incorrecta
const fs=require('fs'),path=require('path'),vm=require('vm');
const DST=process.argv[2]||'/home/claude/drakon';
// [lang,lessonId,ex#(1-based), texto del distractor a sustituir]
const T=[
['EN','a2_shopping',12,'Please I need a receipt.'],['EN','b1_job_interview',5,'In a team I like working'],['EN','a1_house_rooms',5,'In the kitchen there is a table'],['EN','a2_health_pharmacy',5,'Every eight hours take one pill'],['EN','a1_emotions_feelings',5,'After work I\'m tired'],['EN','a1_professions_jobs',5,'In a restaurant I work as a waiter'],['EN','a1_weather_seasons',5,'today it\'s sunny'],
['ES','es_a1_daily_routine',6,'A las diez duermo'],['ES','es_a2_weather_seasons',6,'Hoy hace mucho calor'],['ES','es_b1_job_interview',5,'En equipo me gusta trabajar'],['ES','es_b1_personal_finance',5,'Para un objetivo quiero ahorrar'],['ES','es_a1_professions_jobs',5,'En un restaurante trabajo de camarero'],['ES','es_a1_weather_seasons',5,'hoy hace sol'],['ES','es_b1_sports_fitness',5,'para mantenerme en forma Corro'],
['FR','fr_a1_daily_routine',6,'À dix heures je dors'],['FR','fr_a2_weather_seasons',6,"Aujourd'hui il fait très chaud"],['FR','fr_a2_directions_transport',5,"À l'arrêt prenez le bus"],['FR','fr_b1_job_interview',5,"En équipe j'aime travailler"],['FR','fr_a1_house_rooms',5,'Dans la cuisine il y a une table'],['FR','fr_a1_emotions_feelings',5,'Après le travail je suis fatiguée'],['FR','fr_b1_personal_finance',5,'Pour un objectif je veux économiser'],['FR','fr_a1_professions_jobs',5,'Dans un restaurant je travaille comme serveur'],['FR','fr_a1_weather_seasons',5,"aujourd'hui il fait beau"],
['IT','it_a2_weather_seasons',6,'Oggi fa molto caldo'],['IT','it_b1_job_interview',5,'In squadra mi piace lavorare'],['IT','it_a1_house_rooms',5,"In cucina c'è un tavolo"],['IT','it_b1_personal_finance',5,'Per un obiettivo voglio risparmiare'],['IT','it_a1_professions_jobs',5,'In un ristorante lavoro come cameriere'],['IT','it_b1_dating_love',5,'domani Avrò un appuntamento'],['IT','it_b2_imperfetto_abitudini',5,'a Roma io vivevo'],['IT','it_b1_passivo_base',5,'si parla inglese qui'],
['PT','pt_a1_daily_routine',6,'Às dez horas durmo'],['PT','pt_a2_weather_seasons',6,'Hoje está muito calor'],['PT','pt_a1_dates_time',5,'Às segundas-feiras vou ao ginásio'],['PT','pt_a2_directions_transport',5,'Na paragem apanhe o autocarro'],['PT','pt_b1_job_interview',5,'Em equipa gosto de trabalhar'],['PT','pt_a1_house_rooms',5,'Na cozinha há uma mesa'],['PT','pt_b1_personal_finance',5,'Para um objetivo quero poupar'],['PT','pt_a1_weather_seasons',5,'está ensolarado hoje']
];
const ctx={console};ctx.window=ctx;vm.createContext(ctx);
const files=fs.readdirSync(path.join(DST,'docs/js/lessons-data')).filter(f=>f.endsWith('.js')).sort((a,b)=>a==='en.js'?-1:b==='en.js'?1:a.localeCompare(b));
for(const f of files)vm.runInContext(fs.readFileSync(path.join(DST,'docs/js/lessons-data',f),'utf8'),ctx);
const sp=s=>s.split(' ');
const make=(correct,used)=>{const t=sp(correct);const cands=[];
  const sw=(i,j)=>{const a=t.slice();[a[i],a[j]]=[a[j],a[i]];return a};
  const fix=a=>{const first=t[0];const cap=/^[A-ZÀ-Ý]/.test(first);let r=a.slice();
    r[0]=cap?r[0].charAt(0).toUpperCase()+r[0].slice(1):r[0].charAt(0).toLowerCase()+r[0].slice(1);
    if(cap&&a[0]!==t[0]&&!/^(I|I'm|I'd)$/.test(a[1]||''))r[1]=(r[1]||'').replace(/^([A-ZÀ-Ý])(?![A-ZÀ-Ý])/,c=>c.toLowerCase());
    return r.join(' ')};
  cands.push(fix(sw(0,1)));cands.push(fix(sw(t.length-2,t.length-1)));cands.push(fix(sw(1,2)));cands.push(fix(t.slice().reverse()));
  for(const c of cands){if(c.toLowerCase()!==correct.toLowerCase()&&!used.has(c.toLowerCase()))return c}throw new Error('sin candidato '+correct)};
const byLang={};for(const [L,id,n,txt] of T)(byLang[L]=byLang[L]||[]).push([id,n,txt]);
let total=0;const log=[];
for(const L in byLang){
  const file=fs.readdirSync(path.join(DST,'docs/js/lessons-data')).filter(f=>/^(en|es|fr|de|it|pt)\.js$/.test(f)&&f.toUpperCase().startsWith(L))[0];
  const fp=path.join(DST,'docs/js/lessons-data',file);const lines=fs.readFileSync(fp,'utf8').split('\n');
  for(const [id,n,txt] of byLang[L]){
    const les=ctx.LESSON_BANKS[L].find(l=>l.id===id||l.id==='x');const e=les.ex[n-1];
    if(e[0]!=='arrange'||!e[2].includes(txt))throw new Error('no coincide '+id+'#'+n);
    const correct=e[2][e[3]];const used=new Set(e[2].map(s=>s.toLowerCase()));
    const OV={'a1_house_rooms#5':'There a is table in the kitchen','it_b2_imperfetto_abitudini#5':'vivevo Roma a io'};
    const rep=OV[id+'#'+n]||make(correct,used);
    // localizar la línea exacta
    const idx=lines.findIndex(l=>{const t=l.trim();if(!t.startsWith('['))return false;try{return JSON.stringify(JSON.parse(t.replace(/,\s*$/,'')))===JSON.stringify(e)}catch(x){return false}});
    if(idx<0)throw new Error('línea no hallada '+id+'#'+n);
    const old=JSON.stringify(txt),nw=JSON.stringify(rep);
    const q=JSON.stringify(e[1]);const a=lines[idx].indexOf(q)+q.length;const ob=lines[idx].indexOf('[',a),cb=lines[idx].indexOf(']',ob);
    const seg=lines[idx].slice(ob,cb+1);if(seg.split(old).length!==2)throw new Error('opción no única '+id);
    lines[idx]=lines[idx].slice(0,ob)+seg.replace(old,()=>nw)+lines[idx].slice(cb+1);
    const chk=JSON.parse(lines[idx].trim().replace(/,\s*$/,''));if(chk[3]!==e[3]||chk[2][e[3]]!==correct||chk[2].length!==e[2].length)throw new Error('integridad '+id);
    total++;log.push(L+' '+id+'#'+n+': «'+txt+'» → «'+rep+'»');
  }
  fs.writeFileSync(fp,lines.join('\n'));
}
console.log('distractores sustituidos',total);fs.writeFileSync('/tmp/arrange_log.txt',log.join('\n'));
