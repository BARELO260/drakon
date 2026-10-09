const fs=require('fs'),path=require('path');
const DST=process.argv[2]||'/home/claude/drakon';
const rows=JSON.parse(fs.readFileSync('/home/claude/r8data/gram87.json','utf8'));
const NEW=require('./r9_gram.js');
const files={FR:'fr.js',DE:'de.js',IT:'it.js',PT:'pt.js'};
const cache={};for(const L in files){cache[L]=fs.readFileSync(path.join(DST,'docs/js/lessons-data',files[L]),'utf8')}
let n=0,nt=0;
for(const k of Object.keys(NEW)){const r=rows[+k],ch=NEW[k];let t=cache[r.L];
  const oldD=JSON.stringify(r.g[1]);const cnt=t.split(oldD).length-1;if(cnt!==1)throw new Error('D no único '+k+' x'+cnt);
  t=t.replace(oldD,()=>JSON.stringify(ch.D));n++;
  if(ch.T){const oldT=JSON.stringify(r.g[0]);const i=t.indexOf(JSON.stringify(ch.D));const j=t.lastIndexOf(oldT,i);if(j<0||i-j>400)throw new Error('T no hallado '+k);t=t.slice(0,j)+JSON.stringify(ch.T)+t.slice(j+oldT.length);nt++}
  cache[r.L]=t}
for(const L in files)fs.writeFileSync(path.join(DST,'docs/js/lessons-data',files[L]),cache[L]);
console.log('descripciones',n,'títulos',nt);
