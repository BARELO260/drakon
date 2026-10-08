const fs=require('fs'),path=require('path'),vm=require('vm');
const SRC=process.argv[2]||'/home/claude/drakon_r7', DST=process.argv[3]||'/home/claude/drakon';
const T=require('./es_cues.js');
const U=fs.readFileSync('/home/claude/r8data/uniq.txt','utf8').split('\n').map(l=>l.split('\t')[1]);
const items=JSON.parse(fs.readFileSync('/home/claude/r8data/items.json','utf8'));
const norm=s=>s.toLowerCase().replace(/[.?!…:]+$/,'').trim();
const CUE=new Map(U.map((u,i)=>[norm(u),T[i]]));
const FRAG=Object.fromEntries(Object.entries({
"at the traffic light":"en el semáforo","before sharing it":"antes de compartirla","there is no single answer":"no hay una única respuesta","according to the author":"según el autor","we should reduce":"deberíamos reducir","appeals to":"apela a","the desire to belong":"el deseo de pertenecer","subject to":"sujeto a","to learn at your own pace":"aprender a tu propio ritmo","scientific evidence suggests that":"la evidencia científica sugiere que","the dog":"el perro","friendly":"amistoso","i usually do yoga":"suelo hacer yoga","little meat":"poca carne","a lot of vegetables":"muchas verduras","whether we like it or not":"nos guste o no","next to":"al lado de","we usually give gifts":"solemos hacer regalos","you have to trust":"tienes que confiar","softens the impact":"suaviza el impacto","we are going to book":"vamos a reservar","lasts longer than":"dura más que","have been playing all weekend":"llevamos todo el fin de semana jugando","is shaped by":"está marcada por","you have to":"hay que","will get engaged":"se comprometerán","provided that":"siempre que","the notebook":"el cuaderno","in such a way that":"de tal modo que","you can withdraw":"puedes retirar","even if":"incluso si","as if she had been offended":"como si la hubieran ofendido","suggest, but do not confirm":"sugieren, pero no confirman","it's very cold":"hace mucho frío","i have to feed":"tengo que dar de comer","we are going to launch":"vamos a lanzar","will have landed":"habrán aterrizado","should be regulated":"deberían regularse","used to visit":"visitábamos","might have been":"podría haber sido","i can take":"puedo sacar","some firewood":"algo de leña","which":"que","hadn't crashed... would have stayed":"no se hubiera hundido... se habrían mantenido","faced with mounting sanctions":"ante las sanciones crecientes","the longest... in":"más largo... de","a lot of spare parts":"muchos repuestos","want to perform":"quiere actuar","wish... could be solved":"desearían que... se pudiera resolver","if... will win":"si... ganará","are getting... repaired":"van a hacer... reparar","in order to confirm":"para confirmar","in the water":"en el agua","are still studying":"todavía están estudiando","how amazing... is!":"qué asombroso... es","even though":"aunque","in spite of issuing":"a pesar de haber emitido","shouldn't have ignored":"no deberían haber ignorado","my":"mis","how many bowls":"cuántos cuencos","either... or":"o... o","as though it had":"como si tuviera","were it not for":"de no haber sido por","has been training":"lleva entrenando","get used to collecting":"acostumbrarse a coleccionar","little did anyone expect":"nadie esperaba","there is a lot of static":"hay mucha estática","will find":"encontrará","far from settling":"lejos de zanjar","would like to try":"le gustaría probar","rather than guessing":"en lugar de adivinar","to the extent that":"en la medida en que","why":"por qué","our":"nuestros","their":"su","under the table":"debajo de la mesa","i don't like":"no me gusta","can i speak to...?":"¿puedo hablar con...?","she told me":"ella me dijo","first...then":"primero...después","that being said":"dicho esto","to not mince words":"no tener pelos en la lengua","such a complex issue that":"un asunto tan complejo que","the longest":"el más largo","his":"su (de él)","let the dough rest":"deje reposar la masa","no sooner... than":"apenas... cuando","can i take/leave a message?":"¿puedo tomar/dejar un recado?","not only...but also...":"no solo... sino también..."}));
const EXOVR={ // explicaciones enteras reescritas (glosas inglesas sueltas)
 fr_a1_numbers_colors:'"Le ciel est bleu." — ciel = cielo, bleu = azul.',
 de_a1_numbers_colors:'"Der Himmel ist blau." — Himmel = cielo, blau = azul.',
 it_a1_numbers_colors:'"Il cielo è blu." — cielo = cielo, blu = azul.',
 pt_a1_numbers_colors:'"O céu é azul." — céu = cielo, azul = azul.',
 fr_a1_food_restaurant:"Le menu = el menú. L'addition = la cuenta, le plat = el plato, la table = la mesa.",
 de_a1_food_restaurant:'Die Speisekarte = el menú. Die Rechnung = la cuenta, der Teller = el plato, der Tisch = la mesa.',
 it_a1_food_restaurant:'Il menù = el menú. Il conto = la cuenta, il piatto = el plato, il tavolo = la mesa.',
 pt_a1_food_restaurant:'O cardápio = el menú. A conta = la cuenta, o prato = el plato, a mesa = la mesa.',
 fr_b1_questions_indirectes:'En una pregunta indirecta, el “si” español se traduce como “si”.',
 it_b1_domande_indirette:'En una pregunta indirecta, el “si” español se traduce como “se”.',
 pt_b1_perguntas_indiretas:'En una pregunta indirecta, el “si” español se traduce como “se”.'
};
const target=new Set(items.map(i=>i.id+'|'+i.q));
const QS=/(\\"|[«“„])([^»”“"\\]+?)(\\"|[»”“])/g;
const cap=(s,orig)=>/^[A-ZÀ-Ý]/.test(orig)?s.charAt(0).toUpperCase()+s.slice(1):s.charAt(0).toLowerCase()+s.slice(1);
const files={FR:'fr.js',DE:'de.js',IT:'it.js',PT:'pt.js'};
const stats={};
for(const L in files){
  const fp=path.join(SRC,'docs/js/lessons-data',files[L]);const lines=fs.readFileSync(fp,'utf8').split('\n');let cur=null,n=0,nf=0,no=0;
  for(let i=0;i<lines.length;i++){
    const im=lines[i].match(/^\s*id:\s*['"]([^'"]+)['"]/);if(im)cur=im[1];
    const t=lines[i].trim();if(!/^\["(mcq|translate)"/.test(t))continue;
    let arr;try{arr=JSON.parse(t.replace(/,\s*$/,''))}catch(e){continue}
    if(!target.has(cur+'|'+arr[1]))continue;
    let line=lines[i];
    // 1) pregunta: segmento citado inglés -> español (solo en la parte de la pregunta)
    const qRaw=JSON.stringify(arr[1]).slice(1,-1);
    const newQ=qRaw.replace(QS,(m,a,s,b)=>{const k=norm(s.trim());if(!CUE.has(k))return m;const es=CUE.get(k);const lead=s.match(/^\s*/)[0],trail=s.match(/\s*$/)[0];const hasEnd=/[.]$/.test(s.trim());return a+lead+(hasEnd?es:es.replace(/\.$/,''))+trail+b});
    if(newQ===qRaw)throw new Error('pregunta sin cambio '+cur+' '+arr[1]);
    // 2) explicación
    let exRaw=typeof arr[4]==='string'?JSON.stringify(arr[4]).slice(1,-1):null,newEx=exRaw;
    if(exRaw!==null){
      if(EXOVR[cur]&&/^(it|fr|pt|de)_(a1_numbers_colors|a1_food_restaurant|b1_questions_indirectes|b1_domande_indirette|b1_perguntas_indiretas)$/.test(cur)&&arr[1].match(/sky|menu|if she/i)){newEx=JSON.stringify(EXOVR[cur]).slice(1,-1);no++}
      else newEx=exRaw.replace(QS,(m,a,s,b)=>{const k=norm(s.trim());const lead=s.match(/^\s*/)[0],trail=s.match(/\s*$/)[0];
        if(CUE.has(k)){const es=CUE.get(k);return a+lead+(/[.]$/.test(s.trim())?es:es.replace(/\.$/,''))+trail+b}
        const f=FRAG[s.trim().toLowerCase()];if(f){nf++;return a+lead+cap(f,s.trim())+trail+b}
        return m});
    }
    if(typeof arr[4]==='string'){const oq=JSON.stringify(arr[1]),oe=JSON.stringify(arr[4]);
      if(!line.includes(oq)||!line.includes(oe))throw new Error('no localizo cadenas '+cur);
      line=line.replace(oq,()=>'"'+newQ+'"').replace(oe,()=>'"'+newEx+'"');}
    else{const oq=JSON.stringify(arr[1]);if(!line.includes(oq))throw new Error('no localizo q '+cur);line=line.replace(oq,()=>'"'+newQ+'"');}
    // integridad: opciones e índice intactos
    const chk=JSON.parse(line.trim().replace(/,\s*$/,''));
    if(JSON.stringify(chk[2])!==JSON.stringify(arr[2])||chk[3]!==arr[3]||chk[0]!==arr[0])throw new Error('integridad '+cur);
    lines[i]=line;n++;
  }
  fs.writeFileSync(path.join(DST,'docs/js/lessons-data',files[L]),lines.join('\n'));
  stats[L]={lineas:n,fragmentos:nf,explicacionesEnteras:no};
}
console.log(JSON.stringify(stats));
