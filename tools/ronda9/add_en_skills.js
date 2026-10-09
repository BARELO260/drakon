// Ronda 9: completa a 6 ejercicios las 10 lecciones EN de unidades de habilidades (generadas a partir de su propio study)
const fs=require('fs'),path=require('path');
const DST=process.argv[2]||'/home/claude/drakon';
const NEW={
'b1_reading_notices':[
 ['mcq','Un cartel dice: "Programme details are subject to change." ¿Qué significa?',['Los detalles del programa pueden modificarse.','Los detalles del programa están garantizados.','Solo los socios pueden ver los detalles.','El programa ya se ha cancelado.'],0,'"Subject to change" avisa de que la información puede cambiar sin previo aviso.'],
 ['translate','Traduce: "La reserva solo se confirma después de recibir el pago."',['Bookings are confirmed only after payment is received.','Bookings are confirmed before payment is received.','The booking only confirm when you pay it.','Payment is received only after bookings confirm.'],0,'"Only after" + "payment is received" (pasiva) condiciona la confirmación al pago.']],
'b1_listening_opinions':[
 ['mcq','¿Qué significa "The long queue put me off going to the museum"?',['La larga cola me quitó las ganas de ir al museo.','La larga cola me animó a ir al museo.','Hice cola y entré al museo.','El museo cerró por la cola.'],0,'"To put someone off (something)" = desanimar, quitar las ganas.'],
 ['translate','Traduce: "Preferiría ir en tren, pero resulta que el autobús es más barato."',['I would rather go by train, but it turns out the bus is cheaper.','I would rather to go by train, but it turns out the bus is cheaper.','I prefer go by train, but it turn out the bus is cheap.','I would rather go by train, but it turns out the bus is cheapest.'],0,'"Would rather" va seguido de verbo sin "to"; "it turns out" introduce un dato inesperado; "cheaper" es el comparativo.']],
'b1_storytelling':[
 ['mcq','¿Qué conector encaja? "___ I did not like the city, but later I made friends and loved it."',['At first','Eventually','Unexpectedly','Until'],0,'"At first" (al principio) contrasta con lo que ocurrió más tarde.'],
 ['translate','Traduce: "Inesperadamente, empezó a llover y finalmente nos quedamos en casa."',['Unexpectedly, it started to rain and eventually we stayed at home.','Unexpected, it started rain and finally we stay at home.','Unexpectedly, it started to rain and eventually we staying at home.','Unexpectedly, started raining and eventually stayed we at home.'],0,'Secuencia narrativa en pasado simple con los conectores "unexpectedly" y "eventually".']],
'b1_discussion_choices':[
 ['mcq','¿Qué frase propone una alternativa de forma amable?',['How about starting at ten instead of nine?','Start at ten, because I said so.','Why you start at nine?','I do not care about the schedule.'],0,'"How about + -ing" propone una alternativa sin imponerla.'],
 ['fill','"I see your point, but could we find a ___ that works for both of us?"',['compromise','compromising','comprise','compromises'],0,'Tras "a" se necesita el sustantivo singular: "a compromise" (un acuerdo intermedio).']],
'c1_mediation_summary':[
 ['fill','"I would like to ___ a concern about the timeline before we commit."',['flag','flagging','flagged','flags'],0,'Tras "would like to" va el infinitivo: "flag a concern" (señalar una preocupación).'],
 ['mcq','¿Qué opción resume un "trade-off" correctamente?',['A faster delivery reduces cost per unit, but increases the risk of errors.','A faster delivery is better in every possible way.','A faster delivery is impossible to organise.','A faster delivery is the same as a cheaper delivery.'],0,'Un "trade-off" implica ganar algo a cambio de perder otra cosa.']],
'c1_academic_evidence':[
 ['mcq','¿Cuál es la mejor forma de presentar "a tentative finding"?',['The pilot study points to a possible effect, but further research is needed.','The pilot study proves the effect beyond any doubt.','The pilot study is useless because it is small.','The pilot study has already been replicated worldwide.'],0,'"Tentative" = provisional: se acompaña de cautela y de la necesidad de más datos.'],
 ['fill','"The study may contain a sampling ___ because only volunteers answered."',['bias','biased','biasing','biases'],0,'Tras "a sampling" se necesita el sustantivo singular: "sampling bias" (sesgo de muestreo).']],
'c2_rhetoric_style':[
 ['mcq','¿Qué ejemplo es un "understatement"?',['"The storm caused a little inconvenience" (after a flood that closed the city).','"The storm was the worst disaster in history!"','"The storm was on Monday."','"Did the storm cause damage?" (asking for information)'],0,'Understatement: quitar importancia deliberadamente a algo grave, a menudo con ironía.'],
 ['mcq','¿Qué función cumple una "rhetorical question" en un discurso?',['Invita a reflexionar o refuerza un argumento sin esperar respuesta.','Pide datos concretos al público.','Cambia de tema sin avisar.','Sustituye a las pruebas.'],0,'La pregunta retórica no busca información: persuade.']],
'c2_critical_reading':[
 ['mcq','¿Cuál es un ejemplo de "loaded language"?',['"The so-called experts rushed through a reckless reform."','"The committee published its report on Tuesday."','"The reform changes three regulations."','"The report has forty pages."'],0,'El lenguaje cargado usa palabras con un juicio implícito para influir en el lector.'],
 ['fill','"The author does not say it directly, but she ___ that the project failed."',['implies','infers','implicates','applies'],0,'"To imply" = dar a entender (lo hace quien escribe); "to infer" lo hace quien lee.']],
'c1_register_argument':[
 ['fill','"The study makes a ___ case for early intervention, although its sample is small."',['compelling','compelled','compel','compellingly'],0,'"A compelling case" = un argumento convincente; aquí hace falta un adjetivo.']],
'c2_style_implication':[
 ['mcq','¿Qué hace el autor al escribir "This may be true in some contexts, but not in all"?',['Matiza su afirmación para no generalizar.','Retira completamente su afirmación.','Duplica la fuerza de su afirmación.','Cambia de tema.'],0,'"To qualify a claim" = matizarla con reservas o límites.']]
};
const files=['en-b1-skills.js','en-cefr-units.js','en-advanced.js'];
const CLOSE=/^\s*\]\s*\}?\s*\)?\s*,?\s*$/;
let total=0;
for(const f of files){
  const fp=path.join(DST,'docs/js/lessons-data',f);const lines=fs.readFileSync(fp,'utf8').split('\n');
  const ins=[];  // [lineIndexOfClose, id]
  for(const id of Object.keys(NEW)){
    const si=lines.findIndex(l=>new RegExp("^\\s*\\{id:\\s*['\"]"+id+"['\"]").test(l));if(si<0)continue;
    let ci=-1;for(let k=si+1;k<lines.length;k++){if(CLOSE.test(lines[k])){ci=k;break}}
    if(ci<0)throw new Error('sin cierre '+id);ins.push([ci,id]);
  }
  ins.sort((a,b)=>b[0]-a[0]); // de abajo hacia arriba
  for(const [ci,id] of ins){
    let at=ci;if(/^\s*\[\s*['\"](writing|speaking)['\"]/.test(lines[ci-1]))at=ci-1; // la tarea de producción se queda la última
    let prev=at-1;if(!/,\s*$/.test(lines[prev]))lines[prev]=lines[prev].replace(/\s*$/,',');
    if(at===ci&&!/,\s*$/.test(lines[ci-1]))lines[ci-1]=lines[ci-1].replace(/\s*$/,',');
    const add=NEW[id].map(e=>JSON.stringify(e)+',');
    // la última línea insertada no necesita coma obligatoria, pero es válida con ella (array JS)
    lines.splice(at,0,...add);total+=add.length;
  }
  fs.writeFileSync(fp,lines.join('\n'));
}
console.log('ejercicios añadidos',total);
