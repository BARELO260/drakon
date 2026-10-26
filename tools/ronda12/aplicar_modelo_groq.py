import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from patchlib import sub
F='functions/index.js'
sub(F,"""    const resp=await fetch('https://api.groq.com/openai/v1/chat/completions',{
      method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ_API_KEY.value()}`},
      body:JSON.stringify({model:'llama-3.3-70b-versatile',messages,max_tokens:900,temperature:0.7})
    });
    if(!resp.ok){ await refundQuota(request.auth.uid,'chat',data.localDate); throw new HttpsError('internal','The tutor is temporarily unavailable.'); }
    const json=await resp.json(); const text=json?.choices?.[0]?.message?.content?.trim();
    if(!text){ await refundQuota(request.auth.uid,'chat',data.localDate); throw new HttpsError('internal','The tutor returned an empty response.'); }
    return {text,remaining};""","""    // Modelos de Groq en orden de preferencia. `llama-3.3-70b-versatile` fue retirado por Groq el
    // 16/08/2026 (https://console.groq.com/docs/deprecations); si un modelo falla o desaparece, se
    // prueba el siguiente para que el chat no se caiga. Revisa esta lista cuando Groq anuncie cambios.
    let text='';
    for(const model of GROQ_CHAT_MODELS){
      let resp;
      try{
        resp=await fetch('https://api.groq.com/openai/v1/chat/completions',{
          method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ_API_KEY.value()}`},
          // reasoning_effort:'low': estos modelos razonan antes de responder y, con un tope de 900 tokens,
          // un razonamiento largo dejaría la respuesta vacía (igual que en el cliente, ver chat.js).
          body:JSON.stringify({model,messages,max_tokens:900,temperature:0.7,reasoning_effort:'low'})
        });
      }catch(e){ console.warn('[drakonAi] fallo de red con', model, e&&e.message); continue; }
      if(!resp.ok){ console.warn('[drakonAi] Groq respondió', resp.status, 'con', model); continue; }
      const json=await resp.json(); text=(json?.choices?.[0]?.message?.content||'').trim();
      if(text) break;
    }
    if(!text){ await refundQuota(request.auth.uid,'chat',data.localDate); throw new HttpsError('internal','The tutor is temporarily unavailable.'); }
    return {text,remaining};""")
sub(F,"const GROQ_API_KEY = defineSecret('GROQ_API_KEY');","const GROQ_API_KEY = defineSecret('GROQ_API_KEY');\nconst GROQ_CHAT_MODELS = ['openai/gpt-oss-120b', 'qwen/qwen3.6-27b', 'openai/gpt-oss-20b'];")
sub('tools/ninos/pruebas/functions.test.js',"  console.log('BORRADO DE CUENTA — limpieza en el servidor');","""  console.log('CHAT DE IA — modelos de Groq vigentes (llama-3.3-70b-versatile fue retirado el 16/08/2026)');
  const realFetch=global.fetch;const bodies=[];
  setUser('ai1',{birthYear:Y-30});
  global.fetch=async(u,o)=>{bodies.push(JSON.parse(o.body));return {ok:true,status:200,json:async()=>({choices:[{message:{content:'respuesta'}}]})}};
  let r=await chat('ai1');
  ok(bodies.length===1&&bodies[0].model==='openai/gpt-oss-120b','usa openai/gpt-oss-120b como primer modelo ('+(bodies[0]&&bodies[0].model)+')');
  ok(bodies.every(b=>!/llama-3\\.3-70b-versatile/.test(b.model)),'no usa el modelo retirado');
  ok(bodies[0].reasoning_effort==='low'&&bodies[0].max_tokens===900,'reasoning_effort=low y max_tokens=900 (como el cliente)');
  bodies.length=0;let n=0;
  global.fetch=async(u,o)=>{const b=JSON.parse(o.body);bodies.push(b);n++;return n===1?{ok:false,status:400,json:async()=>({error:{code:'model_decommissioned'}})}:{ok:true,status:200,json:async()=>({choices:[{message:{content:'desde el respaldo'}}]})}};
  r=await chat('ai1');
  ok(bodies.length===2&&bodies[1].model==='qwen/qwen3.6-27b'&&r.r&&r.r.text==='desde el respaldo','si el 1.º modelo falla, prueba el siguiente y responde ('+bodies.map(b=>b.model)+')');
  bodies.length=0;global.fetch=async(u,o)=>{bodies.push(JSON.parse(o.body));return {ok:false,status:503,json:async()=>({})}};
  const before=db.get('aiRateLimits/ai1_chat')&&db.get('aiRateLimits/ai1_chat').dailyCount;r=await chat('ai1');
  ok(r.err==='internal'&&bodies.length===3,'si fallan los 3 modelos devuelve error «internal» tras probar los 3');
  ok(db.get('aiRateLimits/ai1_chat').dailyCount===before,'y se devuelve el mensaje del cupo diario');
  bodies.length=0;global.fetch=async(u,o)=>{bodies.push(JSON.parse(o.body));return {ok:true,status:200,json:async()=>({choices:[{message:{content:'   '}}]})}};
  r=await chat('ai1');ok(r.err==='internal'&&bodies.length===3,'una respuesta vacía también cuenta como fallo y prueba el siguiente modelo');
  global.fetch=realFetch;
  console.log('BORRADO DE CUENTA — limpieza en el servidor');""")
