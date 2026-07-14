/* ═══════════════════════════════════════
   data.js — LANGS, CHARS, THEMES
   (El contenido de lecciones vive en js/lessons-data/<code>.js)
   Dependencias: ninguna
   Usado por: characters.js, lessons.js, ai.js
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */
const LANGS = [
  {flag:'🇬🇧',name:'Inglés',    native:'English',    code:'EN',lang:'en-US'},
  {flag:'🇪🇸',name:'Español',   native:'Español',    code:'ES',lang:'es-ES'},
  {flag:'🇫🇷',name:'Francés',   native:'Français',   code:'FR',lang:'fr-FR'},
  {flag:'🇩🇪',name:'Alemán',    native:'Deutsch',    code:'DE',lang:'de-DE'},
  {flag:'🇯🇵',name:'Japonés',   native:'日本語',      code:'JP',lang:'ja-JP'},
  {flag:'🇨🇳',name:'Chino',     native:'普通话',      code:'ZH',lang:'zh-CN'},
  {flag:'🇰🇷',name:'Coreano',   native:'한국어',      code:'KO',lang:'ko-KR'},
  {flag:'🇮🇹',name:'Italiano',  native:'Italiano',   code:'IT',lang:'it-IT'},
  {flag:'🇧🇷',name:'Portugués', native:'Português',  code:'PT',lang:'pt-BR'},
  {flag:'🇷🇺',name:'Ruso',      native:'Русский',    code:'RU',lang:'ru-RU'},
];

const CHARS = [
  {id:'dragon', name:'Drakón',          img:'assets/characters/faces/drakon.png',     anim:'assets/characters/faces/drakona.webm',     speak:'assets/characters/faces/drakonspeak.webm',     desc:'Dragón de fuego. Intenso, motivador, nunca se rinde.',              free:true},
  {id:'wizard', name:'Merlingo',         img:'assets/characters/faces/merlingo.png',   anim:'assets/characters/faces/merlingoa.webm',    speak:'assets/characters/faces/merlingospeak.webm',   desc:'Mago sabio. Explica gramática con metáforas mágicas.',               free:true},
  {id:'fox',    name:'Zorrek',           img:'assets/characters/faces/zorrek.png',     anim:'assets/characters/faces/zorreka.webm',      speak:'assets/characters/faces/zorrekspeak.webm',     desc:'Zorro astuto. Experto en expresiones idiomáticas.',                  free:true},
  {id:'robot',  name:'Syntinator',       img:'assets/characters/faces/syntinator.png', anim:'assets/characters/faces/syntinatora.webm',  speak:'assets/characters/faces/syntinatorspeak.webm', desc:'Robot analítico. Perfecto para gramática estructurada.',             free:false},
  {id:'alien',  name:'Marshal',          img:'assets/characters/faces/marshal.png',    anim:'assets/characters/faces/marshala.webm',     speak:'assets/characters/faces/marshalspeak.webm',    desc:'Alienígena curioso. Aprende el idioma desde cero contigo.',          free:false},
  {id:'phoenix',name:'Azhar Flamebeard', img:'assets/characters/faces/azhar.png',      anim:'assets/characters/faces/azhara.webm',       speak:'assets/characters/faces/azharspeak.webm',      desc:'Fénix dorado. Resurge de tus errores más fuerte.',                  free:false},
  {id:'ninja',  name:'Kenjiro',          img:'assets/characters/faces/kenjiro.png',    anim:'assets/characters/faces/kenjiroa.webm',     speak:'assets/characters/faces/kenjirospeak.webm',    desc:'Ninja lingüístico. Entrena tu mente para la fluidez.',              free:false},
  {id:'panda',  name:'Bao',              img:'assets/characters/faces/bao.png',        anim:'assets/characters/faces/baoa.webm',          speak:'assets/characters/faces/baospeak.webm',        desc:'Oso panda zen. Aprende sin estrés, con calma y constancia.',         free:false},
  {id:'triton', name:'Barón Tritón',     img:'assets/characters/faces/triton.png',     anim:'assets/characters/faces/tritona.webm',       speak:'assets/characters/faces/tritonspeak.webm',     desc:'Tiburón caballero medieval. Honorable, formal y muy elocuente.',    free:false},
  {id:'axonic', name:'Axónic',           img:'assets/characters/faces/axonic.png',     anim:'assets/characters/faces/axonica.webm',       speak:'assets/characters/faces/axonicspeak.webm',     desc:'Ajolote DJ. Vibrante, creativo y lleno de energía cultural.',       free:false},
];

const THEMES = [
  {id:'dark',   name:'Oscuro',     bg:'#0c0800', acc:'#f59200', free:true},
  {id:'light',  name:'Claro',      bg:'#fdf6e3', acc:'#c97000', free:true},
  {id:'amoled', name:'AMOLED',     bg:'#000000', acc:'#f59200', free:true},
  {id:'forest', name:'Bosque',     bg:'#031a09', acc:'#00e870', free:false},
  {id:'ocean',  name:'Océano',     bg:'#020f22', acc:'#00c8ff', free:false},
  {id:'purple', name:'Galaxia',    bg:'#0e0520', acc:'#b050ff', free:false},
  {id:'ruby',   name:'Rubí',       bg:'#1e0206', acc:'#ff1040', free:false},
  {id:'ice',    name:'Ártico',     bg:'#020e1c', acc:'#30d0ff', free:false},
  {id:'sand',   name:'Desierto',   bg:'#1a1400', acc:'#e0a800', free:false},
];
