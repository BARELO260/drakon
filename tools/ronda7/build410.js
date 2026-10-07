const fs=require('fs'),path=require('path');
const ES=require('./es_defs.js');
const SRC=process.argv[2]||'/home/claude/drakon_orig', DST=process.argv[3]||'/home/claude/drakon';
const norm=s=>String(s).trim().toLowerCase().replace(/\s+/g,' ');
const qq=/[«“„"]\s*([^»“”"]+?)\s*[»“”"]/;
const CFG={
 FR:{file:'fr.js',pat:/en anglais\s*\?/,q:c=>`Comment dit-on «${c}» en français ?`,x:(c,a)=>`«${c}» se dit «${a}» en français.`},
 DE:{file:'de.js',pat:/auf Englisch\s*\?/,q:c=>`Wie sagt man „${c}“ auf Deutsch?`,x:(c,a)=>`„${c}“ heißt auf Deutsch „${a}“.`},
 IT:{file:'it.js',pat:/in inglese\s*\?/,q:c=>`Come si dice “${c}” in italiano?`,x:(c,a)=>`“${c}” si dice “${a}” in italiano.`},
 PT:{file:'pt.js',pat:/em inglês\s*\?/,q:c=>`Como se diz “${c}” em português?`,x:(c,a)=>`“${c}” diz-se “${a}” em português.`},
 ES:{file:'es.js',pat:/en inglés\s*\?/}
};
// lecciones cuya palabra preguntada es una variante de una entrada con "/" en el vocabulario
const OVR={
 art_world:{re:/surestim|überbewert|sopravvalut|sobrevalor/i,cue:'estar sobrevalorado'},
 relationships_friendship:{re:/entend|auskomm|d'accordo|dar-se bem|llevarse/i,cue:'llevarse bien con alguien',only:true},
 dating_love:{re:/tomber amoureux/i,cue:'enamorarse de alguien'}
};
const hash=s=>{let h=2166136261;for(const ch of s){h^=ch.codePointAt(0);h=Math.imul(h,16777619)}return h>>>0};
const wc=s=>s.split(/\s+/).length;
const shape=s=>/^(le|la|les|un|une|el|los|las|o|a|os|as|um|uma|der|die|das|ein|eine|il|lo|i|gli|uno)\s|^[ld]'/i.test(s)?'N':'V';
const LANGOF={FR:'FR',DE:'DE',IT:'IT',PT:'PT',ES:'ES'};
const ctxL=(()=>{const vm=require('vm');const ctx={console};ctx.window=ctx;vm.createContext(ctx);
 for(const L in CFG)vm.runInContext(fs.readFileSync(path.join(SRC,'docs/js/lessons-data',CFG[L].file),'utf8'),ctx);return ctx.LESSON_BANKS})();
const report={};let total=0;
for(const L in CFG){
  const cfg=CFG[L];const lessons=Object.fromEntries(ctxL[L].map(l=>[l.id,l]));
  const fp=path.join(SRC,'docs/js/lessons-data',cfg.file);
  const lines=fs.readFileSync(fp,'utf8').split('\n');
  let cur=null,n=0;const log=[];
  for(let i=0;i<lines.length;i++){
    const im=lines[i].match(/^\s*id:\s*['"]([^'"]+)['"]/);if(im)cur=im[1];
    const t=lines[i].trim();
    if(!t.startsWith('["mcq"')||!cfg.pat.test(t))continue;
    const ex=JSON.parse(t.replace(/,\s*$/,''));
    const les=lessons[cur];if(!les)throw new Error('sin lección '+cur+' línea '+(i+1));
    const word=ex[1].match(qq)[1].trim();const suffix=cur.replace(/^[a-z]{2}_[a-c][12]_/,'');
    let opts,ans,q,expl;
    const voc=les.study.vocab;
    if(L==='ES'){
      const key=ES[cur.replace(/^es_/,'')];if(!key)throw new Error('sin defs '+cur);
      const asked=[...new Set(les.ex.filter(e=>e[0]==='mcq'&&cfg.pat.test(e[1])).map(e=>norm(e[1].match(qq)[1])))];
      const w=norm(word);let def=key.defs[w];
      if(!def)throw new Error('sin definición '+cur+' / '+word);
      let pool=Object.keys(key.defs).filter(k=>k!==w&&!(key.solo&&asked.includes(k)));
      if(pool.length<3)throw new Error('pocos distractores '+cur);
      pool.sort((a,b)=>hash(cur+w+a)-hash(cur+w+b));
      opts=[def,...pool.slice(0,3).map(k=>key.defs[k])];ans=def;
      q=`¿Qué significa “${word}”?`;
      expl=`“${word}”: ${def[0].toLowerCase()}${def.slice(1)}.`;
    }else{
      let row,cue;const o=OVR[suffix];
      const exact=voc.find(v=>norm(v[0])===norm(word));
      if(exact&&!(o&&o.only&&false)){row=exact;cue=exact[1];}
      else if(o){row=voc.find(v=>o.re.test(v[0]));cue=o.cue;if(!row)throw new Error('ovr sin fila '+cur);}
      else throw new Error('no encontrada '+cur+' '+word);
      const SPECIAL={'it_a1_neighborhood_city|la farmacia':['Dove si comprano le medicine?','Le medicine si comprano nella farmacia (la farmacia).']};
      const sp=SPECIAL[cur+'|'+norm(word)];
      if(norm(row[0])===norm(row[1])&&!sp)throw new Error('circular '+cur+' '+word);
      ans=exact?exact[0]:word;
      if(exact&&/\//.test(exact[0])&&false){}
      const cn=norm(cue);
      let cand=voc.filter(v=>v!==row&&norm(v[1])!==norm(row[1])&&norm(v[0])!==norm(ans)&&!/,/.test(v[0])&&!v[0].includes(ans)&&!ans.includes(v[0]));
      if(cand.length<3)cand=voc.filter(v=>v!==row&&norm(v[0])!==norm(ans)&&!v[0].includes(ans)&&!ans.includes(v[0]));
      if(cand.length<3)throw new Error('pocos distractores '+cur+' '+word);
      cand.sort((a,b)=>((shape(a[0])!==shape(ans))-(shape(b[0])!==shape(ans)))||(Math.abs(wc(a[0])-wc(ans))-Math.abs(wc(b[0])-wc(ans)))||(hash(cur+word+a[0])-hash(cur+word+b[0])));
      opts=[ans,...cand.slice(0,3).map(v=>v[0])];
      q=sp?sp[0]:cfg.q(cue);expl=sp?sp[1]:cfg.x(cue,ans);
    }
    if(new Set(opts.map(norm)).size!==4)throw new Error('opciones duplicadas '+cur+' '+word);
    const pos=hash(cur+word)%4;const o2=opts.slice(1);o2.splice(pos,0,opts[0]);
    const indent=lines[i].match(/^\s*/)[0];
    lines[i]=`${indent}["mcq",${JSON.stringify(q)},[${o2.map(s=>JSON.stringify(s)).join(', ')}],${pos},${JSON.stringify(expl)}],`;
    n++;log.push([cur,q,o2,pos]);
  }
  fs.writeFileSync(path.join(DST,'docs/js/lessons-data',cfg.file),lines.join('\n'));
  report[L]=n;total+=n;fs.writeFileSync(`/tmp/log_${L}.json`,JSON.stringify(log));
}
console.log(report,total);

// Correcciones puntuales de alemán halladas al releer (errores de significado/género preexistentes)
{
  const fp=path.join(DST,'docs/js/lessons-data/de.js');let t=fs.readFileSync(fp,'utf8');
  for(const [a,b] of [['Hausaufgaben automatisieren','Haushaltsaufgaben automatisieren'],['das Serienmarathon','der Serienmarathon']]){
    const c=t.split(a).length-1;t=t.split(a).join(b);console.log('DE fix',a,'->',b,'x'+c);
  }
  fs.writeFileSync(fp,t);
}
