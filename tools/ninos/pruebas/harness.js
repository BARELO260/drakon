// Arnés de pruebas del flujo de edad / modo infantil con jsdom (sin red; Firebase simulado).
// Uso: NODE_PATH=<carpeta con node_modules/jsdom@22> node flows.js     (DOCS=<ruta a docs> para probar otra versión)
const {JSDOM,ResourceLoader,VirtualConsole}=require('jsdom');
const path=require('path'),http=require('http'),fs=require('fs');
const DOCS=process.env.DOCS||path.resolve(__dirname,'../../../docs');
const MIME={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json'};
let _srv=null,_port=0;
function startServer(){return new Promise(res=>{if(_srv)return res(_port);_srv=http.createServer((rq,rs)=>{let p=decodeURIComponent(rq.url.split('?')[0]);if(p==='/')p='/index.html';const f=path.join(DOCS,p);fs.readFile(f,(e,d)=>{if(e){rs.statusCode=404;return rs.end('')}rs.setHeader('Content-Type',MIME[path.extname(f)]||'application/octet-stream');rs.end(d)})}).listen(0,'127.0.0.1',()=>{_port=_srv.address().port;res(_port)})})}
let _requested=[];
class Loader extends ResourceLoader{ fetch(url,o){ _requested.push(String(url)); if(url.startsWith('http://127.0.0.1'))return super.fetch(url,o); return Promise.resolve(Buffer.from('')); } }
exports.close=()=>{if(_srv){_srv.close();_srv=null}};
exports.boot=async function(opts={}){
  _requested=[];
  const vc=new VirtualConsole();const logs=[];
  vc.on('jsdomError',e=>logs.push('ERR '+String(e.message).slice(0,160)));
  vc.on('error',(...a)=>logs.push('console.error '+a.map(x=>x&&x.message||String(x)).join(' ').slice(0,200)));
  let authCb=null;const calls={fetch:[],gum:0};
  const port=await startServer();
  const dom=await JSDOM.fromURL('http://127.0.0.1:'+port+'/index.html',{runScripts:'dangerously',resources:new Loader(),pretendToBeVisual:true,virtualConsole:vc,
   beforeParse(w){
     if(opts.local){for(const k in opts.local)w.localStorage.setItem(k,opts.local[k]);}
     w.matchMedia=w.matchMedia||(()=>({matches:false,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}}));
     w.IntersectionObserver=function(){return{observe(){},unobserve(){},disconnect(){}}};
     w.ResizeObserver=w.IntersectionObserver;w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};
     const authObj={currentUser:null,onAuthStateChanged(cb){authCb=cb},setPersistence(){return Promise.resolve()},signOut(){authObj.currentUser=null;authCb&&authCb(null);return Promise.resolve()},fetchSignInMethodsForEmail(){return Promise.resolve([])}};
     w.firebase={initializeApp(){return{}},apps:[],auth:Object.assign(()=>authObj,{Auth:{Persistence:{LOCAL:'local'}},GoogleAuthProvider:function(){}}),firestore:Object.assign(()=>({collection:()=>({doc:()=>({get:()=>Promise.resolve({exists:false,data:()=>({})}),set:()=>Promise.resolve(),delete:()=>Promise.resolve()})}),enablePersistence:()=>Promise.resolve(),settings(){}}),{FieldValue:{serverTimestamp:()=>0},Timestamp:{now:()=>0}})};
     w.fetch=function(u){calls.fetch.push(String(u));return Promise.resolve({ok:true,json:()=>Promise.resolve({}),text:()=>Promise.resolve('')})};
     Object.defineProperty(w.navigator,'mediaDevices',{value:{getUserMedia(){calls.gum++;return Promise.resolve({getTracks:()=>[]})}},configurable:true});
   }});
  const w=dom.window;
  await new Promise(r=>setTimeout(r,1800));
  if(w.eval('state.screen')==='screen-intro'&&!w.document.querySelector('.screen.active')){ try{ w.init(); }catch(e){ logs.push('init: '+e.message); } } // solo si init() no llegó a ejecutarse
  return {w,dom,logs,calls,requested:()=>_requested.slice(),st:()=>w.eval('state'),fireAuth:(u)=>{if(u)w._fbUser=u; authCb&&authCb(u||null)},activeScreen:()=>[...w.document.querySelectorAll('.screen.active')].map(e=>e.id)};
};
