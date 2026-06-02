/* ═══════════════════════════════════════
   data.js — LANGS, CHARS, LESSON_TEMPLATES, EN_EXERCISES
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
  {flag:'🇵🇱',name:'Polaco',    native:'Polski',     code:'PL',lang:'pl-PL'},
  {flag:'🇳🇱',name:'Neerlandés',native:'Nederlands', code:'NL',lang:'nl-NL'},
];

const CHARS = [
  {id:'dragon', name:'Drakón',          img:'assets/characters/faces/drakon.png',     anim:'assets/characters/faces/drakona.webm',     speak:'assets/characters/faces/drakonspeak.webm',     desc:'Dragón de fuego. Intenso, motivador, nunca se rinde.',              free:true},
  {id:'wizard', name:'Merlingo',         img:'assets/characters/faces/merlingo.png',   anim:'assets/characters/faces/merlingoa.webm',    speak:'assets/characters/faces/merlingospeak.webm',   desc:'Mago sabio. Explica gramática con metáforas mágicas.',               free:true},
  {id:'fox',    name:'Zorrek',           img:'assets/characters/faces/zorrek.png',     anim:'assets/characters/faces/zorreka.webm',      speak:'assets/characters/faces/zorrekspeak.webm',     desc:'Zorro astuto. Experto en expresiones idiomáticas.',                  free:true},
  {id:'robot',  name:'Syntinator',       img:'assets/characters/faces/syntinator.png', anim:'assets/characters/faces/syntinatora.webm',  speak:'assets/characters/faces/syntinatorspeak.webm', desc:'Robot analítico. Perfecto para gramática estructurada.',             free:false},
  {id:'alien',  name:'Marshal',          img:'assets/characters/faces/marshal.png',    desc:'Alienígena curioso. Aprende el idioma desde cero contigo.',          free:false},
  {id:'phoenix',name:'Azhar Flamebeard', img:'assets/characters/faces/azhar.png',      anim:'assets/characters/faces/azhara.webm',       speak:'assets/characters/faces/azharspeak.webm',      desc:'Fénix dorado. Resurge de tus errores más fuerte.',                  free:false},
  {id:'ninja',  name:'Kenjiro',          img:'assets/characters/faces/kenjiro.png',    anim:'assets/characters/faces/kenjiroa.webm',     speak:'assets/characters/faces/kenjirospeak.webm',    desc:'Ninja lingüístico. Entrena tu mente para la fluidez.',              free:false},
  {id:'panda',  name:'Bao',              img:'assets/characters/faces/bao.png',        desc:'Oso panda zen. Aprende sin estrés, con calma y constancia.',         free:false},
  {id:'triton', name:'Barón Tritón',     img:'assets/characters/faces/triton.png',     desc:'Tiburón caballero medieval. Honorable, formal y muy elocuente.',    free:false},
  {id:'axonic', name:'Axónic',           img:'assets/characters/faces/axonic.png',     desc:'Ajolote DJ. Vibrante, creativo y lleno de energía cultural.',       free:false},
];

const THEMES = [
  {id:'dark',   name:'Oscuro',     bg:'#0c0800', acc:'#f59200', free:true},
  {id:'light',  name:'Claro',      bg:'#fdf6e3', acc:'#c97000', free:true},
  {id:'amoled', name:'AMOLED',     bg:'#000000', acc:'#f59200', free:true},
  {id:'forest', name:'Bosque',     bg:'#031a09', acc:'#00e870', free:false},
  {id:'ocean',  name:'Océano',     bg:'#020f22', acc:'#00c8ff', free:false},
  {id:'purple', name:'Galaxia',    bg:'#0e0520', acc:'#b050ff', free:false},
  {id:'ruby',   name:'Rubí',       bg:'#1e0206', acc:'#ff1040', free:false},
  {id:'matrix', name:'Matrix',     bg:'#010d03', acc:'#00ff41', free:false},
  {id:'sunset', name:'Atardecer',  bg:'#1e0800', acc:'#ff5500', free:false},
  {id:'rose',   name:'Rosa Neón',  bg:'#1a0014', acc:'#ff10a0', free:false},
  {id:'ice',    name:'Ártico',     bg:'#020e1c', acc:'#30d0ff', free:false},
  {id:'lava',   name:'Lava',       bg:'#160200', acc:'#ff3300', free:false},
  {id:'mint',   name:'Menta',      bg:'#e0f8ee', acc:'#009060', free:false},
  {id:'sand',   name:'Desierto',   bg:'#1a1400', acc:'#e0a800', free:false},
  {id:'neon',   name:'Neon X',     bg:'#0e0012', acc:'#ff00ff', free:false},
  {id:'volcano',name:'Volcán',     bg:'#1a0400', acc:'#ff6600', free:false},
  {id:'cherry', name:'Cerezo',     bg:'#f5e8ec', acc:'#c01040', free:false},
  {id:'aurora', name:'Aurora',     bg:'#020818', acc:'#00ffaa', free:false},
];

/* ═══════════════════════════════════════
   LESSON GENERATOR — PER LANGUAGE
═══════════════════════════════════════ */
const LESSON_TEMPLATES = {
  EN: {
    name:'Inglés', native:'English',
    A1:['Saludos y presentaciones','Números 1–20','Colores y formas','La familia','Comida y bebida','Días y meses','El cuerpo humano','Animales y mascotas','Ropa y accesorios','La casa y el hogar','Verbos: to be','Verbos: to have','Pronombres personales','Artículos a/an/the','Preguntas básicas','El clima','Medios de transporte','En la ciudad','Frases de cortesía','Números 20–100','Adjetivos básicos','Posesivos my/your/his','Presente simple','En el restaurante','Compras básicas','Profesiones','La escuela','Verbos de acción','Vocabulario doméstico','Expresar gustos básicos'],
    A2:['Presente continuo','Pasado simple regulares','Pasado simple irregulares','Futuro con will','Futuro con going to','There is / there are','Comparativos','Superlativos','Preposiciones de lugar','Preposiciones de tiempo','Viajes y turismo','En el aeropuerto','En el hotel','Salud y síntomas','En el médico','Trabajo y oficina','Tecnología cotidiana','Deportes y hobbies','Expresar opiniones','Modalidad: can/could','Modalidad: must/should','Adverbios de frecuencia','Preguntas con Wh-','Phrasal verbs básicos','Conectores básicos','Comprensión de textos A2','Vocabulario de compras','Describir personas','Hablar del pasado','Planes y predicciones','Escribir emails simples','Escuchar y entender A2','Narrar eventos pasados','Vocabulario de emociones','Expresar acuerdo/desacuerdo'],
    B1:['Presente perfecto','Pasado continuo','Pasado perfecto','Voz pasiva básica','Condicional tipo 1','Condicional tipo 2','Condicional tipo 3','Reported speech','Cláusulas relativas','Phrasal verbs intermedios','Expresiones idiomáticas I','Conectores de contraste','Vocabulario académico I','Registro formal e informal','Emails profesionales','Argumentar y debatir','Pronunciación: ritmo','Linking words','Colocaciones I','Vocabulario de negocios','Descripción de imágenes','Expresar probabilidad','Falsos amigos comunes','Preguntas indirectas','Verbos modales avanzados','Artículos avanzados','Expresiones de tiempo','Hablar de experiencias','Expresiones telefónicas','Vocabulario de viajes avanzado','Narración de anécdotas','Idioms de uso diario','Conectores de causa/efecto','Diferencias BR vs US English','Comprensión de textos B1'],
    B2:['Voz pasiva compleja','Inversión enfática','Cleft sentences','Wish / If only','Gerundios e infinitivos avanzados','Verbos causativos','Discourse markers','Cohesión textual','Argumentación escrita','Vocabulario académico II','Idioms avanzados I','Idioms avanzados II','Phrasal verbs avanzados','Colocaciones avanzadas','Metáforas lingüísticas','Inglés para negocios II','Negociación comercial','Presentaciones orales','Textos científicos','Pronunciación: acento','Variantes del inglés','Humor e ironía','Lenguaje político','Análisis de textos B2','Gramática contrastiva','Vocabulario literario','Expresiones formales','Escritura argumentativa','Colocaciones de registro alto','Resúmenes ejecutivos','Vocabulario tecnológico','Expresiones de datos','Análisis crítico','Subjuntivo inglés','Verbos de percepción','Énfasis y foco'],
    C1:['Gramática de texto avanzada','Nominalización','Densidad léxica','Registro ultra-formal','Metáforas conceptuales','Ironía y sarcasmo','Textos académicos complejos','Análisis del discurso','Retórica persuasiva','Textos jurídicos','Inglés científico','Glosas y paráfrasis','Resumen académico','Análisis literario','Variedades diacrónicas','Etimología avanzada','Expresiones parafrásticas','Colocaciones especializadas','Lenguaje diplomático','Vocabulario especializado','Hablar con precisión','Argumentación filosófica','Textos periodísticos avanzados','Expresiones de registro C1','Pragmática conversacional','Conectores sofisticados','Léxico de ciencias sociales','Inglés para investigación','Escritura académica C1','Comprensión auditiva avanzada'],
    C2:['Pragmática del discurso','Sociolingüística aplicada','Lingüística cognitiva','Traducción literaria','Análisis contrastivo','Inglés jurídico avanzado','Redacción académica avanzada','Estilos literarios','Lenguaje poético','Análisis lingüístico','Variación dialectal','Lexicografía práctica','Deixis y referencia','Code-switching','Lingüística histórica','Léxico arcaico y literario','Pragmática intercultural','Análisis de géneros textuales','Escritura creativa avanzada','Dominio nativo: matices'],
  },
  FR: {
    name:'Francés', native:'Français',
    A1:['Bonjour — saludos','Chiffres 1–20','Les couleurs','La famille','La nourriture','Les jours','Le corps','Les animaux','Les vêtements','La maison','Être et avoir','Les pronoms','Les articles','Questions simples','La météo','Les transports','En ville','Politesse','Adjectifs de base','Présent simple'],
    A2:['Présent continu','Passé composé','Imparfait intro','Futur proche','Comparatifs','Superlatifs','Prépositions','Voyages','À l\'hôtel','Santé','Au travail','Sports','Opinions','Pouvoir/vouloir/devoir','Adverbes','Questions Wh-','Phrasal verbs FR','Connecteurs','Textes A2','Plans et prédictions','Achats','Décrire des personnes','Exprimer accord/désaccord','Passé récent','Vocabulaire émotions'],
    B1:['Subjonctif présent','Conditionnel présent','Passé composé avancé','Plus-que-parfait','Voix passive','Discours indirect','Connecteurs avancés','Vocabulaire académique','Expressions idiomatiques','Registre formel','Emails professionnels','Débat et argumentation','Compréhension B1','Narration B1','Textes journalistiques','Prononciation B1','Conjugaisons irrégulières','Faux amis FR-ES','Vocabulaire des affaires','Évaluation B1'],
    B2:['Subjonctif passé','Conditionnel passé','Gérondif','Pronoms relatifs avancés','Style indirect avancé','Argumentation écrite','Vocabulaire académique II','Français formel','Analyse de textes','Phonétique avancée','Expressions littéraires','Textes scientifiques','Évaluation B2'],
    C1:['Grammaire avancée','Nuances stylistiques','Textes littéraires','Rhétorique','Français des affaires C1','Analyse discursive','Évaluation partielle C1'],
    C2:['Linguistique française','Traduction littéraire','Registres extrêmes','Évaluation finale C2'],
  },
  DE: {
    name:'Alemán', native:'Deutsch',
    A1:['Guten Tag — saludos','Zahlen 1–20','Farben','Familie','Essen','Tage & Monate','Körper','Tiere','Kleidung','Haus','Sein und haben','Pronomen','Artikel der/die/das','Einfache Fragen','Wetter','Verkehr','In der Stadt','Höflichkeit','Adjektive','Präsens'],
    A2:['Perfekt','Präteritum','Futur I','Komparativ','Superlativ','Präpositionen','Reisen','Im Hotel','Gesundheit','Arbeit','Sport','Meinungen','Modalverben','Adverbien','Fragen','Phrasal Verbs DE','Konnektoren','Texte A2','Pläne','Beschreiben'],
    B1:['Konjunktiv I','Konjunktiv II','Passiv','Indirekter Rede','Relativsätze','Akademischer Wortschatz','Idiome','Formelle Register','Geschäftsemails','Debattieren','Verständnis B1','Texte B1','Aussprache B1','Evaluation B1'],
    B2:['Komplexe Grammatik','Erweiterte Idiome','Literarische Texte','Wissenschaft DE','Evaluation B2'],
    C1:['Hochdeutsch avancé','Linguistik DE','Evaluation C1'],
    C2:['Meisterniveau DE','Evaluation C2'],
  },
};

const DEFAULT_TEMPLATE = {
  A1:['Saludos básicos','Números 1–20','Colores','La familia','Comida','Días y meses','El cuerpo','Animales','Ropa','La casa','Verbo ser/estar','Pronombres','Artículos','Preguntas básicas','El clima','Transporte','En la ciudad','Cortesía','Adjetivos','Tiempo presente'],
  A2:['Tiempo pasado','Tiempo futuro','Comparativos','Superlativos','Preposiciones','Viajes','Hoteles','Salud','Trabajo','Deportes','Opiniones','Verbos modales','Adverbios','Conectores básicos','Textos simples','Vocabulario cotidiano','Emociones','Compras','Descripciones','Planes futuros','Escritura básica','Comprensión lectora','Vocabulario de oficina','Expresar acuerdo','Conversación telefónica'],
  B1:['Subjuntivo básico','Condicional','Voz pasiva','Discurso indirecto','Conectores avanzados','Vocabulario académico','Expresiones idiomáticas','Registro formal','Debate básico','Comprensión B1','Narración','Textos periodísticos','Pronunciación B1','Vocabulario negocios','Errores comunes','Faux amis','Escritura B1','Evaluación B1','Estructuras complejas','Análisis de texto'],
  B2:['Gramática avanzada','Idioms avanzados','Textos literarios','Ciencia y tecnología','Vocabulario académico II','Argumentación escrita','Análisis crítico','Registro académico','Evaluación B2','Expresiones formales'],
  C1:['Gramática de texto','Retórica','Textos complejos','Lingüística aplicada','Evaluación C1'],
  C2:['Nivel maestría','Variación lingüística','Traducción avanzada','Evaluación final C2'],
};

function getLessonData(langCode) {
  return LESSON_TEMPLATES[langCode] || null;
}

/* exercise pools per language */
/* ═══════════════════════════════════════
   LESSON EXERCISES — mapped 1:1 to topic titles, no repeats
═══════════════════════════════════════ */
const EN_EXERCISES = {
  // A1
  'Saludos y presentaciones':[
    {type:'choice',q:'¿Cómo se dice "hola" en inglés?',opts:['Hello','Goodbye','Please','Thank you'],correct:0,exp:'"Hello" o "Hi" son los saludos más comunes'},
    {type:'fill',q:'Completa: "My ___ is Carlos."',answer:'name',exp:'"My name is..." = "Me llamo..."'},
    {type:'choice',q:'"How are you?" significa:',opts:['¿Cómo te llamas?','¿De dónde eres?','¿Cómo estás?','¿Cuántos años tienes?'],correct:2,exp:'Pregunta por el estado de ánimo'},
    {type:'fill',q:'Respuesta a "How are you?": "I am ___, thanks."',answer:'fine',exp:'"Fine", "good" o "great" son respuestas típicas'},
    {type:'choice',q:'"Nice to meet you" se dice cuando:',opts:['Te despides','Conoces a alguien','Pides ayuda','Das las gracias'],correct:1,exp:'Lo dices al conocer a alguien por primera vez'},
    {type:'pronun',word:'Hello',phonetic:'/həˈloʊ/',tip:'La "H" se aspira suavemente, el acento cae en "lo"'},
  ],
  'Números 1–20':[
    {type:'choice',q:'"Fifteen" es el número:',opts:['13','14','15','16'],correct:2,exp:'15 = fifteen'},
    {type:'fill',q:'¿Cómo se escribe el número 11?',answer:'eleven',exp:'11 = eleven (irregular, apréndelo de memoria)'},
    {type:'choice',q:'"Twelve" significa:',opts:['10','11','12','13'],correct:2,exp:'12 = twelve'},
    {type:'fill',q:'El número 20 en inglés:',answer:'twenty',exp:'20 = twenty'},
    {type:'choice',q:'¿Cuál está bien escrito?',opts:['Forteen','Fourteen','Fourten','Forten'],correct:1,exp:'14 = fourteen'},
    {type:'pronun',word:'Thirteen',phonetic:'/θɜːrˈtiːn/',tip:'El acento cae en "teen": "ther-TEEN"'},
  ],
  'Colores y formas':[
    {type:'choice',q:'"Red" significa:',opts:['Azul','Verde','Rojo','Amarillo'],correct:2,exp:'Red = rojo'},
    {type:'fill',q:'El cielo es "___ sky."',answer:'blue',exp:'Blue = azul'},
    {type:'choice',q:'"A square has ___ sides."',opts:['3','4','5','6'],correct:1,exp:'Un cuadrado tiene 4 lados (four sides)'},
    {type:'fill',q:'El color de la hierba: "The grass is ___."',answer:'green',exp:'Green = verde'},
    {type:'choice',q:'"Circle" es una:',opts:['Línea','Figura circular','Figura con esquinas','Triángulo'],correct:1,exp:'Circle = círculo'},
    {type:'pronun',word:'Purple',phonetic:'/ˈpɜːrpəl/',tip:'Dos sílabas: "PUR-pul", la "r" es suave'},
  ],
  'La familia':[
    {type:'choice',q:'"Brother" significa:',opts:['Hermana','Primo','Hermano','Tío'],correct:2,exp:'Brother = hermano. Sister = hermana'},
    {type:'fill',q:'El padre de tu padre es tu "grand___."',answer:'father',exp:'Grandfather = abuelo'},
    {type:'choice',q:'"My ___ is 35 years old." (tu mamá)',opts:['father','mother','sister','aunt'],correct:1,exp:'Mother = madre/mamá'},
    {type:'fill',q:'Hijo en inglés:',answer:'son',exp:'Son = hijo. Daughter = hija'},
    {type:'choice',q:'"Uncle" es:',opts:['Tío','Primo','Sobrino','Abuelo'],correct:0,exp:'Uncle = tío. Aunt = tía'},
  ],
  'Comida y bebida':[
    {type:'choice',q:'"Apple" es:',opts:['Naranja','Manzana','Pera','Plátano'],correct:1,exp:'Apple = manzana'},
    {type:'fill',q:'La bebida más popular en el desayuno: "___ or coffee?"',answer:'tea',exp:'Tea = té. Coffee = café'},
    {type:'choice',q:'"I am hungry" significa:',opts:['Tengo sed','Tengo sueño','Tengo hambre','Tengo frío'],correct:2,exp:'Hungry = hambriento/a'},
    {type:'fill',q:'"I would like some ___." (agua)',answer:'water',exp:'Water = agua'},
    {type:'choice',q:'"Bread" es:',opts:['Arroz','Pan','Pasta','Sopa'],correct:1,exp:'Bread = pan'},
  ],
  'Días y meses':[
    {type:'choice',q:'El primer día de la semana (en inglés):',opts:['Monday','Sunday','Saturday','Tuesday'],correct:1,exp:'En inglés la semana empieza en Sunday (domingo)'},
    {type:'fill',q:'El mes de Navidad: "De___."',answer:'December',exp:'December = diciembre'},
    {type:'choice',q:'"Wednesday" es:',opts:['Lunes','Martes','Miércoles','Jueves'],correct:2,exp:'Wednesday = miércoles. Se pronuncia "WENZdei"'},
    {type:'fill',q:'El mes de San Valentín: "Fe___."',answer:'February',exp:'February = febrero'},
    {type:'pronun',word:'Wednesday',phonetic:'/ˈwɛnzdeɪ/',tip:'¡La "d" del medio es muda! "WENZ-day"'},
  ],
  'El cuerpo humano':[
    {type:'choice',q:'"Head" es:',opts:['Mano','Pie','Cabeza','Brazo'],correct:2,exp:'Head = cabeza. "Head, shoulders, knees and toes!"'},
    {type:'fill',q:'La mano en inglés:',answer:'hand',exp:'Hand = mano. Finger = dedo'},
    {type:'choice',q:'"My ___ hurts." (te duele la espalda)',opts:['back','face','leg','arm'],correct:0,exp:'Back = espalda. "My back hurts" = me duele la espalda'},
    {type:'fill',q:'Los ojos en inglés:',answer:'eyes',exp:'Eye = ojo. Eyes = ojos (plural)'},
  ],
  'Animales y mascotas':[
    {type:'choice',q:'"Dog" es:',opts:['Gato','Perro','Pájaro','Pez'],correct:1,exp:'Dog = perro. Cat = gato'},
    {type:'fill',q:'El rey de la selva en inglés:',answer:'lion',exp:'Lion = león'},
    {type:'choice',q:'"I have a ___ at home." (un pez)',opts:['fish','bird','horse','rabbit'],correct:0,exp:'Fish = pez/pescado'},
    {type:'pronun',word:'Elephant',phonetic:'/ˈɛlɪfənt/',tip:'3 sílabas: "EL-i-funt", la "ph" suena como "f"'},
  ],
  'Ropa y accesorios':[
    {type:'choice',q:'"Shoes" son:',opts:['Calcetines','Zapatos','Pantalones','Camisas'],correct:1,exp:'Shoes = zapatos. Socks = calcetines'},
    {type:'fill',q:'La ropa que cubre las piernas: "trou___"',answer:'trousers',exp:'Trousers (UK) / Pants (US) = pantalones'},
    {type:'choice',q:'"I wear a ___ when it rains." (impermeable)',opts:['t-shirt','raincoat','dress','shorts'],correct:1,exp:'Raincoat = impermeable/gabardina'},
    {type:'fill',q:'La ropa para dormir: "paja___"',answer:'pajamas',exp:'Pajamas = pijama'},
  ],
  'La casa y el hogar':[
    {type:'choice',q:'"Kitchen" es:',opts:['Baño','Dormitorio','Cocina','Sala'],correct:2,exp:'Kitchen = cocina. Bathroom = baño'},
    {type:'fill',q:'El lugar donde duermes: "bed___"',answer:'bedroom',exp:'Bedroom = dormitorio/habitación'},
    {type:'choice',q:'"The sofa is in the ___."',opts:['kitchen','garage','living room','garden'],correct:2,exp:'Living room = sala de estar'},
    {type:'fill',q:'La puerta principal: "front ___"',answer:'door',exp:'Front door = puerta de entrada'},
  ],
  'Verbos: to be':[
    {type:'choice',q:'Correcto: "She ___ happy."',opts:['am','is','are','be'],correct:1,exp:'She/He/It + IS (tercera persona singular)'},
    {type:'fill',q:'"We ___ students."',answer:'are',exp:'We/You/They + ARE'},
    {type:'choice',q:'Negativo: "I ___ tired."',opts:["am not","is not","are not","not am"],correct:0,exp:'I + am not (negativo de to be)'},
    {type:'fill',q:'Pregunta: "___ you ready?"',answer:'Are',exp:'"Are you...?" para preguntas con you/we/they'},
    {type:'pronun',word:"aren't",phonetic:"/ˈɑːrnt/",tip:'Contracción de "are not". Una sola sílaba: "ARNT"'},
  ],
  'Verbos: to have':[
    {type:'choice',q:'Correcto: "She ___ a car."',opts:['have','has','had','haves'],correct:1,exp:'He/She/It + HAS (tercera persona)'},
    {type:'fill',q:'"I ___ two brothers."',answer:'have',exp:'I/You/We/They + HAVE'},
    {type:'choice',q:'"Do you ___ a pen?" — "Yes, I ___."',opts:['have/has','has/have','have/have','has/has'],correct:2,exp:'Do you have...? Yes, I have. (No cambia con I)'},
    {type:'fill',q:'Negativo: "She ___ a dog." (no tiene)',answer:"doesn't have",exp:'"Doesn\'t have" = no tiene (tercera persona)'},
  ],
  'Pronombres personales':[
    {type:'choice',q:'Pronombre de "Carlos y yo":',opts:['They','We','You','He'],correct:1,exp:'Carlos and I = We (nosotros)'},
    {type:'fill',q:'Pronombre para una chica: "___"',answer:'she',exp:'She = ella'},
    {type:'choice',q:'"___ is raining." (llueve)',opts:['He','She','It','They'],correct:2,exp:'"It" se usa para el clima y fenómenos naturales'},
    {type:'fill',q:'Pronombre plural para personas: "___"',answer:'they',exp:'They = ellos/ellas'},
  ],
  'Artículos a/an/the':[
    {type:'choice',q:'"___ umbrella" (un paraguas)',opts:['A','An','The','—'],correct:1,exp:'"An" antes de sonido vocálico (umbrella empieza con /ʌ/)'},
    {type:'fill',q:'"I have ___ dog." (un perro cualquiera)',answer:'a',exp:'"A" antes de consonante para objetos indefinidos'},
    {type:'choice',q:'"___ sun is hot." (el sol, específico)',opts:['A','An','The','—'],correct:2,exp:'"The" para referirse a algo específico o único'},
    {type:'fill',q:'"She is ___ engineer."',answer:'an',exp:'"An" porque "engineer" empieza con sonido vocálico /ɛ/'},
  ],
  'Preguntas básicas':[
    {type:'choice',q:'"What is your name?" = ',opts:['¿Dónde vives?','¿Cómo te llamas?','¿Cuántos años tienes?','¿De dónde eres?'],correct:1,exp:'"What is your name?" = ¿Cómo te llamas?'},
    {type:'fill',q:'Pregunta de lugar: "___ do you live?"',answer:'Where',exp:'"Where" = ¿dónde?'},
    {type:'choice',q:'"How old are you?" pregunta:',opts:['Tu nombre','Tu ciudad','Tu edad','Tu trabajo'],correct:2,exp:'"How old are you?" = ¿Cuántos años tienes?'},
    {type:'fill',q:'Pregunta de tiempo: "___ is the meeting?"',answer:'When',exp:'"When" = ¿cuándo?'},
  ],
  'El clima':[
    {type:'choice',q:'"It\'s sunny" significa:',opts:['Está lloviendo','Está nevando','Está soleado','Está nublado'],correct:2,exp:'Sunny = soleado. Rainy = lluvioso'},
    {type:'fill',q:'Hace viento: "It\'s ___."',answer:'windy',exp:'Windy = ventoso. Wind = viento'},
    {type:'choice',q:'"What\'s the weather like?" pregunta:',opts:['La temperatura exacta','El clima en general','Si va a llover','La hora'],correct:1,exp:'Pregunta general sobre el tiempo/clima'},
    {type:'fill',q:'Hace frío: "It\'s ___."',answer:'cold',exp:'Cold = frío. Hot = caliente/caluroso'},
  ],
  'Medios de transporte':[
    {type:'choice',q:'"I go to work by ___." (en autobús)',opts:['car','plane','bus','boat'],correct:2,exp:'"By bus" = en autobús. "By car" = en carro'},
    {type:'fill',q:'Avión en inglés:',answer:'plane',exp:'Plane / Airplane = avión'},
    {type:'choice',q:'"Underground" o "subway" es:',opts:['El tren','El metro','El barco','El taxi'],correct:1,exp:'Underground (UK) / Subway (US) = metro/subterráneo'},
    {type:'fill',q:'"I ___to school." (camino)',answer:'walk',exp:'"Walk" = caminar. "I walk to school" = voy a la escuela caminando'},
  ],
  'En la ciudad':[
    {type:'choice',q:'"Where is the bank?" pregunta:',opts:['La hora','La dirección del banco','El precio','El nombre'],correct:1,exp:'Pregunta por la ubicación del banco'},
    {type:'fill',q:'La tienda en inglés:',answer:'store',exp:'Store (US) / Shop (UK) = tienda'},
    {type:'choice',q:'"Turn left at the corner" significa:',opts:['Siga recto','Doble a la derecha','Doble a la izquierda','Regrese'],correct:2,exp:'Turn left = doble a la izquierda. Turn right = doble a la derecha'},
    {type:'fill',q:'El hospital en inglés:',answer:'hospital',exp:'Hospital = hospital (¡igual en español!)'},
  ],
  'Frases de cortesía':[
    {type:'choice',q:'"You\'re welcome" se dice después de:',opts:['"Hello"','"Goodbye"','"Thank you"','"Sorry"'],correct:2,exp:'"You\'re welcome" = de nada (respuesta a "thank you")'},
    {type:'fill',q:'Perdón/disculpa: "___"',answer:'Sorry',exp:'"Sorry" = perdón. "Excuse me" = con permiso'},
    {type:'choice',q:'"Please" se usa para:',opts:['Agradecer','Despedirse','Pedir algo amablemente','Saludar'],correct:2,exp:'"Please" hace una petición más cortés'},
    {type:'fill',q:'Respuesta a "Good morning!": "Good morning to ___ too!"',answer:'you',exp:'"Good morning to you too!" = ¡Buenos días a ti también!'},
  ],
  'Números 20–100':[
    {type:'choice',q:'"Fifty" es:',opts:['15','25','50','55'],correct:2,exp:'50 = fifty. Cuidado: fifteen (15) vs fifty (50)'},
    {type:'fill',q:'El número 33 en inglés:',answer:'thirty-three',exp:'33 = thirty-three (decena + guion + unidad)'},
    {type:'choice',q:'"One hundred" es:',opts:['10','100','1000','1100'],correct:1,exp:'100 = one hundred'},
    {type:'fill',q:'El número 75:',answer:'seventy-five',exp:'75 = seventy-five'},
    {type:'pronun',word:'Forty',phonetic:'/ˈfɔːrti/',tip:'¡Sin "u"! No es "fourty". Solo "for-tee"'},
  ],
  'Adjetivos básicos':[
    {type:'choice',q:'Opuesto de "big":',opts:['tall','fat','small','long'],correct:2,exp:'Big = grande. Small/Little = pequeño'},
    {type:'fill',q:'"This book is very ___." (aburrido)',answer:'boring',exp:'Boring = aburrido. Interesting = interesante'},
    {type:'choice',q:'Adjetivo para algo caliente:',opts:['cold','cool','hot','warm'],correct:2,exp:'Hot = muy caliente. Warm = tibio/cálido'},
    {type:'fill',q:'"She is very ___." (inteligente)',answer:'smart',exp:'Smart / Intelligent = inteligente'},
  ],
  'Posesivos my/your/his':[
    {type:'choice',q:'"That is ___ book." (de él)',opts:['my','your','his','her'],correct:2,exp:'His = de él. Her = de ella'},
    {type:'fill',q:'"___ name is Ana." (posesivo de ella)',answer:'Her',exp:'"Her" = de ella (posesivo). "She" = ella (sujeto)'},
    {type:'choice',q:'"This is ___ car." (mío)',opts:['my','your','his','their'],correct:0,exp:'My = mío/mi'},
    {type:'fill',q:'De nosotros: "___ house"',answer:'Our',exp:'Our = nuestro/de nosotros'},
  ],
  'Presente simple':[
    {type:'choice',q:'Correcto en presente simple:',opts:['She go','She goes','She going','She gos'],correct:1,exp:'Tercera persona singular: verbo + -s/-es'},
    {type:'fill',q:'"I ___ coffee every morning." (bebo)',answer:'drink',exp:'Presente simple con I/You/We/They: forma base del verbo'},
    {type:'choice',q:'Negativo: "He ___ like vegetables."',opts:["don't","doesn't","isn't","aren't"],correct:1,exp:'"Doesn\'t" para he/she/it en negativo'},
    {type:'fill',q:'Pregunta: "___ she speak French?"',answer:'Does',exp:'"Does" para preguntas con he/she/it'},
  ],
  'En el restaurante':[
    {type:'choice',q:'"Can I have the menu, please?" significa:',opts:['¿Dónde está el baño?','¿Me da la carta?','¿Cuánto cuesta?','¿Tiene mesa?'],correct:1,exp:'Pides la carta/menú de forma educada'},
    {type:'fill',q:'"I\'d like the ___, please." (filete)',answer:'steak',exp:'Steak = filete/bistec'},
    {type:'choice',q:'"The bill, please" pide:',opts:['Más agua','El postre','La cuenta','La carta'],correct:2,exp:'Bill (UK) / Check (US) = la cuenta'},
    {type:'fill',q:'"Is the tip ___?" (incluida)',answer:'included',exp:'"Is the tip included?" = ¿está incluida la propina?'},
  ],
  'Compras básicas':[
    {type:'choice',q:'"How much is this?" pregunta:',opts:['El tamaño','El precio','El color','El material'],correct:1,exp:'"How much?" = ¿cuánto cuesta?'},
    {type:'fill',q:'"Do you have this in a larger ___?"',answer:'size',exp:'"Size" = talla/tamaño. "Do you have it in a larger size?" = ¿lo tiene en talla más grande?'},
    {type:'choice',q:'"I\'ll take it" significa:',opts:['No me gusta','Me lo llevo','¿Puedo probarlo?','¿Tiene descuento?'],correct:1,exp:'"I\'ll take it" = me lo llevo'},
    {type:'fill',q:'El recibo en inglés: "rece___"',answer:'receipt',exp:'Receipt = recibo. La "p" es muda: se dice "ri-SEET"'},
  ],
  'Profesiones':[
    {type:'choice',q:'"Teacher" es:',opts:['Doctor','Maestro','Enfermero','Abogado'],correct:1,exp:'Teacher = maestro/profesor. Doctor = médico'},
    {type:'fill',q:'El que cocina profesionalmente: "ch___"',answer:'chef',exp:'Chef = chef/cocinero profesional'},
    {type:'choice',q:'"What do you do for a living?" pregunta:',opts:['¿Dónde vives?','¿Cuánto ganas?','¿A qué te dedicas?','¿Cuándo trabajas?'],correct:2,exp:'Pregunta por tu profesión u ocupación'},
    {type:'fill',q:'Abogado en inglés:',answer:'lawyer',exp:'Lawyer = abogado. Attorney también se usa en EE.UU.'},
  ],
  'La escuela':[
    {type:'choice',q:'"Homework" es:',opts:['La prueba','La tarea','El recreo','El cuaderno'],correct:1,exp:'Homework = tarea/deberes escolares'},
    {type:'fill',q:'La pizarra en inglés: "black___"',answer:'board',exp:'Blackboard / Whiteboard = pizarra/tablero'},
    {type:'choice',q:'"The exam is on Friday" indica:',opts:['El examen fue el viernes','El examen es el viernes','No hay examen','El examen fue cancelado'],correct:1,exp:'El examen es el viernes (presente simple para planes fijos)'},
    {type:'fill',q:'El director del colegio: "princi___"',answer:'principal',exp:'Principal = director/a de escuela'},
  ],
  'Verbos de acción':[
    {type:'choice',q:'"Run" significa:',opts:['Caminar','Saltar','Correr','Nadar'],correct:2,exp:'Run = correr. Walk = caminar. Jump = saltar'},
    {type:'fill',q:'"Can you ___ me?" (ayudarme)',answer:'help',exp:'"Help" = ayudar. "Can you help me?" = ¿puedes ayudarme?'},
    {type:'choice',q:'"She ___ the door." (abre)',opts:['closes','opens','breaks','knocks'],correct:1,exp:'Open = abrir. Close = cerrar'},
    {type:'fill',q:'Escribir en inglés:',answer:'write',exp:'Write = escribir. Read = leer'},
  ],
  'Vocabulario doméstico':[
    {type:'choice',q:'"Fridge" es:',opts:['Horno','Lavadora','Refrigerador','Microondas'],correct:2,exp:'Fridge / Refrigerator = refrigerador'},
    {type:'fill',q:'La lavadora en inglés: "wash___"',answer:'washing machine',exp:'Washing machine = lavadora'},
    {type:'choice',q:'"Could you take out the ___?" (basura)',opts:['dishes','trash','laundry','dog'],correct:1,exp:'Trash (US) / Rubbish (UK) = basura'},
    {type:'fill',q:'El techo/tejado: "roo___"',answer:'roof',exp:'Roof = techo/tejado'},
  ],
  'Expresar gustos básicos':[
    {type:'choice',q:'"I like pizza" significa:',opts:['No me gusta la pizza','Me gusta la pizza','Quiero pizza','Necesito pizza'],correct:1,exp:'"I like" = me gusta/gustan'},
    {type:'fill',q:'"She ___ dancing." (no le gusta)',answer:"doesn't like",exp:'"Doesn\'t like" = no le gusta (tercera persona)'},
    {type:'choice',q:'"I love music" expresa:',opts:['Gusto moderado','Indiferencia','Amor intenso','Disgusto'],correct:2,exp:'Love > Like > Don\'t mind > Dislike > Hate'},
    {type:'fill',q:'"Do you ___ spicy food?" (te gusta)',answer:'like',exp:'"Do you like...?" = ¿te gusta...?'},
  ],
  // A2
  'Presente continuo':[
    {type:'choice',q:'Correcto en presente continuo:',opts:['She is sleep','She is sleeping','She sleeping','She are sleeping'],correct:1,exp:'To be + verbo-ing = presente continuo'},
    {type:'fill',q:'"They ___ football right now."',answer:'are playing',exp:'They + are + verbo-ing'},
    {type:'choice',q:'¿Cuándo NO se usa el presente continuo?',opts:['Acciones en este momento','Planes futuros','Verdades permanentes','Tendencias actuales'],correct:2,exp:'Para verdades permanentes ("The sun rises in the east") usamos presente simple'},
    {type:'fill',q:'Negativo: "He ___ TV at the moment."',answer:"isn't watching",exp:'"Isn\'t watching" = no está viendo (ahora mismo)'},
  ],
  'Pasado simple regulares':[
    {type:'choice',q:'Pasado de "walk":',opts:['walked','walkt','walking','walks'],correct:0,exp:'Verbos regulares: añade -ed → walked'},
    {type:'fill',q:'"She ___ her homework last night."',answer:'finished',exp:'Finish → finished (verbo regular)'},
    {type:'choice',q:'Pasado de "study":',opts:['studyed','studyed','studied','studid'],correct:2,exp:'Verbo en -y → cambia y→i y añade -ed: studied'},
    {type:'fill',q:'"They ___ in Spain for two years."',answer:'lived',exp:'Live → lived (regular, quita la -e y añade -ed)'},
  ],
  'Pasado simple irregulares':[
    {type:'choice',q:'Pasado de "go":',opts:['goed','goes','went','gone'],correct:2,exp:'Go → went (completamente irregular)'},
    {type:'fill',q:'Pasado de "eat":',answer:'ate',exp:'Eat → ate → eaten'},
    {type:'choice',q:'Pasado de "buy":',opts:['buyed','buied','bought','boughted'],correct:2,exp:'Buy → bought'},
    {type:'fill',q:'"She ___ a letter yesterday." (escribir)',answer:'wrote',exp:'Write → wrote → written'},
  ],
  'Futuro con will':[
    {type:'choice',q:'"I will call you later" indica:',opts:['Una acción pasada','Una decisión espontánea','Un hábito','Una preferencia'],correct:1,exp:'"Will" para decisiones tomadas en el momento de hablar o predicciones'},
    {type:'fill',q:'"It ___ rain tomorrow, I think."',answer:'will',exp:'"Will" para predicciones personales'},
    {type:'choice',q:'Contracción de "I will":',opts:["I'd","I'll","I've","I'm"],correct:1,exp:'"I will" → "I\'ll"'},
    {type:'fill',q:'Negativo: "She ___ come to the party."',answer:"won't",exp:'"Won\'t" = will not (negativo)'},
  ],
  'Futuro con going to':[
    {type:'choice',q:'"I\'m going to study tonight" indica:',opts:['Una decisión espontánea','Un plan previo','Una condición','Un hábito'],correct:1,exp:'"Going to" para planes ya decididos antes de hablar'},
    {type:'fill',q:'"They ___ move to Canada next year."',answer:'are going to',exp:'"Are going to" = van a (plan futuro)'},
    {type:'choice',q:'¿Cuándo usar "going to" en vez de "will"?',opts:['Para decisiones del momento','Para planes previos','Para promesas','Para peticiones'],correct:1,exp:'"Going to" = plan ya existente. "Will" = decisión en el momento'},
    {type:'fill',q:'"Look at those clouds! It ___ rain."',answer:"'s going to",exp:'Evidencia visual → "going to": "It\'s going to rain"'},
  ],
  'There is / there are':[
    {type:'choice',q:'"There ___ a cat on the roof."',opts:['are','is','am','be'],correct:1,exp:'"There is" + singular. "There are" + plural'},
    {type:'fill',q:'"___ many students in the class."',answer:'There are',exp:'"There are" + sustantivo plural'},
    {type:'choice',q:'Negativo singular: "There ___ any milk left."',opts:["aren't","isn't","isn't any","is no"],correct:2,exp:'"There isn\'t any..." = no hay (ningún)'},
    {type:'fill',q:'Pregunta: "___ a pharmacy near here?"',answer:'Is there',exp:'"Is there...?" para preguntar por algo en singular'},
  ],
  'Comparativos':[
    {type:'choice',q:'Comparativo de "tall":',opts:['taller','more tall','tallest','most tall'],correct:0,exp:'Adjetivos cortos (1 sílaba): adj + -er'},
    {type:'fill',q:'Comparativo de "expensive":',answer:'more expensive',exp:'Adjetivos largos (+2 sílabas): more + adjetivo'},
    {type:'choice',q:'"My car is ___ than yours." (rápido)',opts:['fast','faster','fastest','more fast'],correct:1,exp:'Fast → faster (una sílaba → añade -er)'},
    {type:'fill',q:'"She is ___ than her brother." (alta)',answer:'taller',exp:'Tall → taller → tallest'},
  ],
  'Superlativos':[
    {type:'choice',q:'Superlativo de "good":',opts:['gooder','goodest','better','best'],correct:3,exp:'Good → better → best (irregular)'},
    {type:'fill',q:'"This is ___ movie I\'ve ever seen." (peor)',answer:'the worst',exp:'Bad → worse → worst (irregular)'},
    {type:'choice',q:'Superlativo de "big":',opts:['biggest','most big','bigest','more biggest'],correct:0,exp:'"Big" → "biggest" (dobla consonante final)'},
    {type:'fill',q:'"She is ___ student in the class." (mejor)',answer:'the best',exp:'El superlativo siempre va con "the"'},
  ],
  'Preposiciones de lugar':[
    {type:'choice',q:'"The cat is ___ the box." (encima)',opts:['in','under','on','between'],correct:2,exp:'"On top of" / "On" = encima de (contacto)'},
    {type:'fill',q:'"The keys are ___ the table." (debajo)',answer:'under',exp:'"Under" = debajo de'},
    {type:'choice',q:'"The bank is ___ the school and the park."',opts:['next to','in front of','between','behind'],correct:2,exp:'"Between" = entre (dos elementos)'},
    {type:'fill',q:'"The post office is ___ the corner." (en)',answer:'on',exp:'"On the corner" = en la esquina'},
  ],
  'Preposiciones de tiempo':[
    {type:'choice',q:'"___ Monday" (los lunes)',opts:['in','on','at','by'],correct:1,exp:'"On" para días de la semana: on Monday, on Friday'},
    {type:'fill',q:'"I was born ___ 1998."',answer:'in',exp:'"In" para años, meses y estaciones: in 1998, in July'},
    {type:'choice',q:'"The meeting is ___ 3 p.m."',opts:['in','on','at','by'],correct:2,exp:'"At" para horas específicas: at 3 p.m., at noon'},
    {type:'fill',q:'"She studies ___ the morning."',answer:'in',exp:'"In the morning/afternoon/evening" (partes del día)'},
  ],
  'Viajes y turismo':[
    {type:'choice',q:'"Boarding pass" es:',opts:['Pasaporte','Tarjeta de embarque','Maleta','Visa'],correct:1,exp:'Boarding pass = tarjeta de embarque'},
    {type:'fill',q:'El equipaje en inglés:',answer:'luggage',exp:'Luggage (UK) / Baggage (US) = equipaje'},
    {type:'choice',q:'"Where is the departure gate?" pregunta:',opts:['Por la llegada','Por la puerta de salida','Por el equipaje','Por la visa'],correct:1,exp:'Departure gate = puerta de embarque/salida'},
    {type:'fill',q:'"Do I need a ___ to enter this country?" (visado)',answer:'visa',exp:'Visa = visa/visado'},
  ],
  'En el aeropuerto':[
    {type:'choice',q:'"Check-in" es el proceso de:',opts:['Recoger el equipaje','Registrarse para el vuelo','Pasar el control de pasaportes','Buscar el gate'],correct:1,exp:'Check-in = registrarse y entregar el equipaje'},
    {type:'fill',q:'La cinta para recoger maletas: "baggage ___"',answer:'claim',exp:'Baggage claim = recogida de equipajes'},
    {type:'choice',q:'"My flight has been delayed" significa:',opts:['El vuelo fue cancelado','El vuelo está retrasado','El vuelo salió a tiempo','El vuelo llegó'],correct:1,exp:'Delayed = retrasado/demorado'},
    {type:'fill',q:'El control de seguridad: "security ___"',answer:'check',exp:'Security check/screening = control de seguridad'},
  ],
  'En el hotel':[
    {type:'choice',q:'"I\'d like to check in" significa:',opts:['Quiero hacer el check-out','Quiero registrarme','Quiero el desayuno','Quiero el wifi'],correct:1,exp:'Check in = registrarse al llegar al hotel'},
    {type:'fill',q:'La llave de la habitación: "room ___"',answer:'key',exp:'Room key = llave de la habitación'},
    {type:'choice',q:'"Is breakfast included?" pregunta:',opts:['A qué hora es el desayuno','Si el desayuno está incluido','Dónde es el desayuno','Si hay desayuno'],correct:1,exp:'"Is it included?" = ¿está incluido?'},
    {type:'fill',q:'Cama doble: "___ bed"',answer:'double',exp:'Double bed = cama doble. Single bed = cama individual'},
  ],
  'Salud y síntomas':[
    {type:'choice',q:'"I have a headache" significa:',opts:['Tengo fiebre','Me duele la cabeza','Tengo tos','Me duele el estómago'],correct:1,exp:'Headache = dolor de cabeza. Stomachache = dolor de estómago'},
    {type:'fill',q:'La fiebre en inglés:',answer:'fever',exp:'Fever = fiebre. "I have a fever" = tengo fiebre'},
    {type:'choice',q:'"I feel dizzy" significa:',opts:['Me siento cansado','Me siento mareado','Me siento mal del estómago','Me siento con fiebre'],correct:1,exp:'Dizzy = mareado'},
    {type:'fill',q:'La tos: "I have a ___."',answer:'cough',exp:'Cough = tos. "I\'m coughing" = estoy tosiendo'},
  ],
  'En el médico':[
    {type:'choice',q:'"Where does it hurt?" pregunta:',opts:['¿Cuánto tiempo llevas enfermo?','¿Dónde te duele?','¿Tienes alergias?','¿Tomas medicamentos?'],correct:1,exp:'"Where does it hurt?" = ¿dónde te duele?'},
    {type:'fill',q:'La receta médica: "presc___"',answer:'prescription',exp:'Prescription = receta médica'},
    {type:'choice',q:'"Take this twice a day" indica:',opts:['Tomarlo una vez al día','Tomarlo dos veces al día','Tomarlo con comida','Tomarlo por la noche'],correct:1,exp:'Twice = dos veces. Once = una vez. Three times = tres veces'},
    {type:'fill',q:'La alergia en inglés:',answer:'allergy',exp:'Allergy = alergia. "I\'m allergic to..." = soy alérgico a...'},
  ],
  'Trabajo y oficina':[
    {type:'choice',q:'"I have a meeting at 10" indica:',opts:['Una cita médica','Una reunión de trabajo','Un examen','Una entrevista'],correct:1,exp:'Meeting = reunión/junta de trabajo'},
    {type:'fill',q:'El jefe en inglés:',answer:'boss',exp:'Boss = jefe. Manager = gerente/director'},
    {type:'choice',q:'"I work overtime" significa:',opts:['Trabajo a tiempo parcial','Trabajo horas extra','Trabajo desde casa','Trabajo de noche'],correct:1,exp:'Overtime = horas extra (trabajo)'},
    {type:'fill',q:'El sueldo/salario: "sal___"',answer:'salary',exp:'Salary = salario mensual. Wage = pago por hora'},
  ],
  'Tecnología cotidiana':[
    {type:'choice',q:'"Could you charge my phone?" pide:',opts:['Apagar el teléfono','Cargar el teléfono','Reparar el teléfono','Prestar el teléfono'],correct:1,exp:'Charge = cargar (batería). "My phone is dead" = se quedó sin batería'},
    {type:'fill',q:'La contraseña en inglés:',answer:'password',exp:'Password = contraseña/clave'},
    {type:'choice',q:'"Download" significa:',opts:['Subir archivos','Descargar archivos','Borrar archivos','Compartir archivos'],correct:1,exp:'Download = descargar. Upload = subir/cargar'},
    {type:'fill',q:'La aplicación del móvil: "___"',answer:'app',exp:'App = aplicación móvil (abreviatura de "application")'},
  ],
  'Deportes y hobbies':[
    {type:'choice',q:'"I play tennis" usa "play" porque:',opts:['Es un deporte de equipo','Es un deporte con pelota','Es un deporte de raqueta','Siempre se usa play con deportes'],correct:1,exp:'Play: deportes con pelota. Go: deportes en movimiento. Do: deportes individuales'},
    {type:'fill',q:'"I ___ swimming every week." (voy a nadar)',answer:'go',exp:'"Go" + verbo-ing para actividades: go swimming, go hiking'},
    {type:'choice',q:'"I do yoga" usa "do" porque:',opts:['Es un deporte de equipo','Es un deporte de contacto','Es una actividad individual sin pelota','Es siempre con "do"'],correct:2,exp:'"Do" para deportes/actividades individuales sin pelota'},
    {type:'fill',q:'Mi pasatiempo favorito: "My favorite ___ is reading."',answer:'hobby',exp:'Hobby = pasatiempo/afición'},
  ],
  'Expresar opiniones':[
    {type:'choice',q:'"In my opinion" sirve para:',opts:['Pedir opinión','Expresar tu opinión','Cambiar de tema','Estar de acuerdo'],correct:1,exp:'"In my opinion..." = en mi opinión...'},
    {type:'fill',q:'"I ___ that exercise is important." (creer)',answer:'think',exp:'"I think that..." = creo que... / pienso que...'},
    {type:'choice',q:'"I disagree" significa:',opts:['Estoy de acuerdo','No estoy seguro','No estoy de acuerdo','Tienes razón'],correct:2,exp:'"Disagree" = no estar de acuerdo. "Agree" = estar de acuerdo'},
    {type:'fill',q:'"That\'s a good ___." (punto/argumento)',answer:'point',exp:'"That\'s a good point!" = ¡Ese es un buen argumento!'},
  ],
  'Modalidad: can/could':[
    {type:'choice',q:'"Can you swim?" pregunta:',opts:['Si estás nadando','Si puedes/sabes nadar','Si te gusta nadar','Si nadaste'],correct:1,exp:'"Can" = habilidad/capacidad en el presente'},
    {type:'fill',q:'"When I was a child, I ___ climb trees." (podía)',answer:'could',exp:'"Could" = pasado de "can" / habilidad en el pasado'},
    {type:'choice',q:'"Could you help me?" es más ___ que "Can you help me?"',opts:['directo','informal','formal/educado','urgente'],correct:2,exp:'"Could" es más formal y educado que "can"'},
    {type:'fill',q:'"I ___ speak French when I was 10." (podía)',answer:'could',exp:'"Could" para habilidades que tenías en el pasado'},
  ],
  'Modalidad: must/should':[
    {type:'choice',q:'"You should see a doctor" expresa:',opts:['Obligación fuerte','Recomendación','Prohibición','Permiso'],correct:1,exp:'"Should" = recomendación (no es tan fuerte como "must")'},
    {type:'fill',q:'"You ___ wear a seatbelt. It\'s the law." (debes)',answer:'must',exp:'"Must" = obligación fuerte (a menudo una regla o ley)'},
    {type:'choice',q:'"You shouldn\'t eat so much sugar" expresa:',opts:['Está prohibido','Se recomienda no hacerlo','Es imposible hacerlo','Tienes que hacerlo'],correct:1,exp:'"Shouldn\'t" = recomendación negativa'},
    {type:'fill',q:'"You ___ smoke in here." (no debes — prohibición)',answer:"mustn't",exp:'"Mustn\'t" = prohibición. "Don\'t have to" = no es necesario (diferente)'},
  ],
  'Adverbios de frecuencia':[
    {type:'choice',q:'Orden correcto: "I go ___ to the gym." (a menudo)',opts:['often','always','never','rarely'],correct:0,exp:'Often ≈ frequently = a menudo/seguido'},
    {type:'fill',q:'"She ___ drinks alcohol." (nunca)',answer:'never',exp:'"Never" = nunca. Va antes del verbo principal'},
    {type:'choice',q:'¿Dónde va el adverbio en "She is always happy"?',opts:['Al inicio','Después del verbo "to be"','Al final','Antes del sujeto'],correct:1,exp:'Con "to be": sujeto + to be + adverbio de frecuencia'},
    {type:'fill',q:'"I ___ brush my teeth twice a day." (siempre)',answer:'always',exp:'"Always" = siempre. Posición: entre sujeto y verbo principal'},
  ],
  'Preguntas con Wh-':[
    {type:'choice',q:'"Why" se usa para preguntar:',opts:['Lugar','Tiempo','Razón/motivo','Manera'],correct:2,exp:'"Why" = ¿por qué? Respuesta: "Because..."'},
    {type:'fill',q:'"___ did you come here?" (cómo)',answer:'How',exp:'"How" = ¿cómo?'},
    {type:'choice',q:'"Whose bag is this?" pregunta:',opts:['¿Dónde está la bolsa?','¿De quién es la bolsa?','¿Cómo es la bolsa?','¿Cuándo compraste la bolsa?'],correct:1,exp:'"Whose" = ¿de quién? (posesión)'},
    {type:'fill',q:'"___ of these do you prefer?" (cuál)',answer:'Which',exp:'"Which" = ¿cuál? (entre opciones limitadas)'},
  ],
  'Phrasal verbs básicos':[
    {type:'choice',q:'"Give up" significa:',opts:['Dar un regalo','Rendirse','Subir','Comenzar'],correct:1,exp:'"Give up" = rendirse/abandonar. "Don\'t give up!" = ¡No te rindas!'},
    {type:'fill',q:'"Turn ___ the light, please." (apaga)',answer:'off',exp:'"Turn off" = apagar. "Turn on" = encender'},
    {type:'choice',q:'"Look after" significa:',opts:['Mirar hacia atrás','Buscar algo','Cuidar de alguien','Ignorar'],correct:2,exp:'"Look after" = cuidar de alguien o algo'},
    {type:'fill',q:'"I\'ll ___ you up at 8." (recoger/buscar)',answer:'pick',exp:'"Pick up" = recoger a alguien en carro'},
  ],
  'Conectores básicos':[
    {type:'choice',q:'"However" expresa:',opts:['Adición','Causa','Contraste','Consecuencia'],correct:2,exp:'"However" = sin embargo (contraste)'},
    {type:'fill',q:'"I was tired, ___ I kept studying." (pero/sin embargo)',answer:'but',exp:'"But" = pero (contraste informal)'},
    {type:'choice',q:'"Therefore" indica:',opts:['Contraste','Causa','Consecuencia','Adición'],correct:2,exp:'"Therefore" = por lo tanto (consecuencia lógica)'},
    {type:'fill',q:'"She studied hard; ___, she passed." (por eso)',answer:'therefore',exp:'"Therefore" = por lo tanto / por eso (formal)'},
  ],
  // B1
  'Presente perfecto':[
    {type:'choice',q:'Correcto en presente perfecto:',opts:['She has went','She has gone','She have gone','She is gone'],correct:1,exp:'Have/has + participio pasado'},
    {type:'fill',q:'"I ___ never ___ sushi." (probar)',answer:'have never eaten',exp:'"Have never + past participle"'},
    {type:'choice',q:'"How long have you lived here?" usa presente perfecto para:',opts:['Una acción acabada','Una situación que empezó en el pasado y continúa','Una acción pasada específica','Un plan futuro'],correct:1,exp:'Presente perfecto: acción/estado que empezó antes y continúa'},
    {type:'fill',q:'"She ___ just ___ the report." (terminar)',answer:'has just finished',exp:'"Just" indica que algo ocurrió recientemente'},
  ],
  'Pasado continuo':[
    {type:'choice',q:'Pasado continuo correcto:',opts:['She was sleep','She was sleeping','She were sleeping','She is sleeping'],correct:1,exp:'Was/were + verbo-ing = pasado continuo'},
    {type:'fill',q:'"What ___ you ___ at 8 pm?" (hacer)',answer:'were doing',exp:'"Were you doing?" o "What were you doing?"'},
    {type:'choice',q:'Cuándo usar pasado continuo:',opts:['Acción corta en el pasado','Acción en progreso en un momento pasado','Hábito pasado','Secuencia de eventos'],correct:1,exp:'Pasado continuo = acción en progreso en un momento específico del pasado'},
    {type:'fill',q:'"I ___ while she was cooking." (estudiar)',answer:'was studying',exp:'"Was studying" — dos acciones simultáneas en el pasado'},
  ],
  'Condicional tipo 1':[
    {type:'choice',q:'Condicional 1 correcto:',opts:['If it rains, I would stay','If it rains, I will stay','If it rained, I will stay','If it will rain, I stay'],correct:1,exp:'If + presente simple → will + infinitivo'},
    {type:'fill',q:'"If she ___ harder, she will pass." (estudiar)',answer:'studies',exp:'"If + present simple": she studies (3a persona + -s)'},
    {type:'choice',q:'El condicional 1 expresa:',opts:['Situación irreal','Situación hipotética imposible','Posibilidad real en el futuro','Deseo'],correct:2,exp:'Tipo 1 = condición real y posible en el futuro'},
    {type:'fill',q:'"Unless you ___, you won\'t improve." (practicar)',answer:'practice',exp:'"Unless" = if not / a menos que'},
  ],
  'Condicional tipo 2':[
    {type:'choice',q:'Condicional 2 correcto:',opts:['If I have money, I would travel','If I had money, I would travel','If I have money, I will travel','If I had money, I will travel'],correct:1,exp:'If + past simple → would + infinitivo'},
    {type:'fill',q:'"If I ___ you, I would apologize." (ser)',answer:'were',exp:'"Were" (no "was") en el condicional 2 con "I": "If I were you..."'},
    {type:'choice',q:'El condicional 2 expresa:',opts:['Una posibilidad real','Una situación hipotética o irreal','Una acción habitual','Una promesa'],correct:1,exp:'Tipo 2 = hipótesis irreal en el presente o futuro'},
    {type:'fill',q:'"What would you do if you ___ a million dollars?" (ganar)',answer:'won',exp:'"Won" = pasado de "win"'},
  ],
  'Voz pasiva básica':[
    {type:'choice',q:'Voz pasiva correcta:',opts:['The book was wrote by her','The book was written by her','The book were written by her','The book written by her'],correct:1,exp:'Was/were + participio pasado (not past simple)'},
    {type:'fill',q:'"The letter ___ every day." (se entrega — presente pasiva)',answer:'is delivered',exp:'"Is delivered" = presente simple pasivo'},
    {type:'choice',q:'¿Cuándo usamos la voz pasiva?',opts:['Cuando el agente es conocido e importante','Cuando no importa o no se sabe quién hace la acción','Solo en textos formales','Para describir emociones'],correct:1,exp:'La pasiva enfatiza la acción, no el agente'},
    {type:'fill',q:'"English ___ in many countries." (se habla)',answer:'is spoken',exp:'"Is spoken" = presente simple pasivo'},
  ],
  'Reported speech':[
    {type:'choice',q:'Reported speech de "I am tired":',opts:['"He said he is tired"','"He said he was tired"','"He said he were tired"','"He said I am tired"'],correct:1,exp:'Presente → pasado en reported speech (backshift)'},
    {type:'fill',q:'"She said she ___ come." (would — futuro en reported)',answer:'would',exp:'"Will" → "would" en reported speech'},
    {type:'choice',q:'"She asked me where I lived." Esto es:',opts:['Pregunta directa','Pregunta indirecta/reported','Orden','Exclamación'],correct:1,exp:'Pregunta indirecta en reported speech: sin inversión sujeto-verbo'},
    {type:'fill',q:'"He told me not to ___ late." (llegar)',answer:'arrive',exp:'"Tell someone not to do something" = decirle a alguien que no haga algo'},
  ],
  'Comprensión de textos A2':[
    {type:'choice',q:'Read: "The train leaves at 8 AM." What time does it leave?',opts:['7 AM','8 AM','9 AM','10 AM'],correct:1,exp:'El tren sale a las 8 AM — comprensión directa de horarios'},
    {type:'choice',q:'Read: "She doesn\'t like coffee, but she loves tea." What does she like?',opts:['Coffee','Both','Tea','Neither'],correct:2,exp:'"But" indica contraste — no le gusta el café, sí le gusta el té'},
    {type:'fill',q:'Read: "He works from Monday to Friday." How many days does he work? Write the number.',answer:'five',exp:'Monday to Friday = 5 días laborales'},
    {type:'choice',q:'Read: "The shop opens at 9 and closes at 6." It is open for how many hours?',opts:['7','8','9','10'],correct:2,exp:'De 9 a 6 = 9 horas abierto'},
    {type:'choice',q:'Read: "I\'m going to the gym after work, not before." When does she go?',opts:['Before work','During work','After work','At lunchtime'],correct:2,exp:'"After" = después de'},
  ],
  'Vocabulario de compras':[
    {type:'choice',q:'En una tienda, ¿cómo preguntas el precio?',opts:['"Where is it?"','"How much is it?"','"What is it?"','"Can I have it?"'],correct:1,exp:'"How much is it?" = ¿Cuánto cuesta?'},
    {type:'fill',q:'"I\'d like to pay by ___." (tarjeta)',answer:'card',exp:'"Pay by card" = pagar con tarjeta / "pay in cash" = pagar en efectivo'},
    {type:'choice',q:'"Do you have this in a smaller ___?" ¿Qué palabra falta?',opts:['colour','size','price','style'],correct:1,exp:'"Size" = talla/tamaño en ropa'},
    {type:'fill',q:'"Can I ___ this on?" (probarse ropa)',answer:'try',exp:'"Try on" = probarse (ropa). "Can I try this on?"'},
    {type:'choice',q:'"The sale is 50% off." ¿Qué significa?',opts:['Precio doble','Descuento del 50%','Fuera de stock','Precio fijo'],correct:1,exp:'"Off" en oferta = descuento. 50% off = mitad de precio'},
  ],
  'Describir personas':[
    {type:'choice',q:'¿Cómo describes a alguien con mucho cabello?',opts:['He is bald','She has long hair','He is short','She is thin'],correct:1,exp:'"Has long hair" = tiene el cabello largo'},
    {type:'fill',q:'"She is very ___." (inteligente)',answer:'intelligent',exp:'"Intelligent" o "smart" = inteligente'},
    {type:'choice',q:'"He is in his thirties." ¿Qué edad aproximada tiene?',opts:['20-29','30-39','40-49','50-59'],correct:1,exp:'"In his thirties" = entre 30 y 39 años'},
    {type:'fill',q:'"He has ___ eyes." (ojos azules)',answer:'blue',exp:'Los adjetivos van ANTES del sustantivo en inglés: blue eyes'},
    {type:'choice',q:'¿Cuál describe personalidad, no apariencia?',opts:['Tall','Blonde','Generous','Slim'],correct:2,exp:'"Generous" = generoso — característica de personalidad'},
  ],
  'Hablar del pasado':[
    {type:'choice',q:'"Yesterday I ___ to the gym." ¿Qué forma es correcta?',opts:['go','goes','went','going'],correct:2,exp:'"Went" es el pasado irregular de "go"'},
    {type:'fill',q:'"Last week she ___ a great book." (leer)',answer:'read',exp:'"Read" en pasado se pronuncia /rɛd/ pero se escribe igual que el presente'},
    {type:'choice',q:'¿Cuál NO es un marcador de tiempo pasado?',opts:['Yesterday','Last night','Tomorrow','Two days ago'],correct:2,exp:'"Tomorrow" = mañana — es futuro, no pasado'},
    {type:'fill',q:'"We ___ a movie last Saturday." (ver)',answer:'watched',exp:'"Watch" es regular: watch → watched'},
    {type:'choice',q:'"Did you enjoy the party?" ¿Cómo respondes negativamente?',opts:['Yes, I did','No, I didn\'t','No, I don\'t','Not, I did'],correct:1,exp:'Negativo con "did": "No, I didn\'t"'},
  ],
  'Planes y predicciones':[
    {type:'choice',q:'"I ___ going to travel next month." ¿Qué falta?',opts:['will','am','is','going'],correct:1,exp:'"I am going to" = plan concreto ya decidido'},
    {type:'fill',q:'"It ___ rain tomorrow." (predicción con will)',answer:'will',exp:'"Will + infinitivo" para predicciones o decisiones espontáneas'},
    {type:'choice',q:'"Look at those clouds! It ___ rain." Usa going to o will:',opts:['will','is going to','going to','would'],correct:1,exp:'Con evidencia visible usamos "going to": ¡hay nubes!'},
    {type:'fill',q:'"She ___ to start a new job next week." (going to)',answer:'is going',exp:'"She is going to start" — plan decidido'},
    {type:'choice',q:'¿Qué expresa decisión en el momento?',opts:['"I\'m going to have tea."','"I\'ll have tea, please."','"I have tea."','"I had tea."'],correct:1,exp:'"Will" para decisiones espontáneas: "I\'ll have tea"'},
  ],
  'Escribir emails simples':[
    {type:'choice',q:'¿Cómo empiezas un email formal?',opts:['"Hey!"','"Dear Mr. Smith,"','"Yo!"','"Hi bro,"'],correct:1,exp:'"Dear + título + apellido" es el saludo formal estándar'},
    {type:'fill',q:'Para terminar un email formal: "___ regards, [tu nombre]"',answer:'Kind',exp:'"Kind regards" o "Best regards" = un saludo formal de despedida'},
    {type:'choice',q:'"I am writing to enquire about..." ¿Para qué sirve esta frase?',opts:['Quejarse','Preguntar/consultar','Confirmar','Cancelar'],correct:1,exp:'"To enquire about" = preguntar/consultar sobre algo'},
    {type:'fill',q:'"Please find ___ my CV." (adjunto)',answer:'attached',exp:'"Please find attached" = adjunto encontrarás — frase estándar de email'},
    {type:'choice',q:'¿Cuál es el tono correcto para un email a tu jefe?',opts:['Informal y con emojis','Formal y respetuoso','Muy casual','Sin saludo'],correct:1,exp:'Con superiores: tono formal, sin abreviaciones ni emojis'},
  ],
  'Narrar eventos pasados':[
    {type:'choice',q:'Para dar contexto en una narración usamos:',opts:['Past simple','Past continuous','Future simple','Present perfect'],correct:1,exp:'Past continuous (was/were + -ing) da el contexto/fondo de la historia'},
    {type:'fill',q:'"While I ___ cooking, the phone rang." (past continuous)',answer:'was',exp:'"While I was cooking" — acción de fondo en pasado continuo'},
    {type:'choice',q:'"Suddenly" en una narración indica:',opts:['Acción de fondo','Evento abrupto/sorpresa','Final de la historia','Tiempo habitual'],correct:1,exp:'"Suddenly" = de repente — marca un evento inesperado'},
    {type:'fill',q:'Conecta eventos: "First... ___ ... finally."',answer:'then',exp:'"First, then, finally" = primero, luego, finalmente — conectores narrativos'},
    {type:'choice',q:'"I had already eaten when she arrived." ¿Qué pasó primero?',opts:['She arrived','I ate','Both at same time','Neither'],correct:1,exp:'Past perfect = "had + past participle" indica la acción que pasó primero'},
  ],
  'Vocabulario de emociones':[
    {type:'choice',q:'"I feel overwhelmed." ¿Qué significa?',opts:['Emocionado','Aburrido','Agobiado/sobrepasado','Satisfecho'],correct:2,exp:'"Overwhelmed" = sentirse agobiado, con demasiadas cosas encima'},
    {type:'fill',q:'"She was ___ when she won the prize." (encantada/muy feliz)',answer:'thrilled',exp:'"Thrilled" = emocionado/encantado (positivo intenso)'},
    {type:'choice',q:'¿Cuál es una emoción negativa?',opts:['Excited','Grateful','Anxious','Proud'],correct:2,exp:'"Anxious" = ansioso/nervioso — emoción negativa'},
    {type:'fill',q:'"He was ___ of his results." (orgulloso)',answer:'proud',exp:'"Proud of" = orgulloso de'},
    {type:'choice',q:'"She felt relieved." ¿Qué significa?',opts:['Triste','Aliviada','Enojada','Confundida'],correct:1,exp:'"Relieved" = aliviado, cuando algo que te preocupaba se resuelve'},
  ],
  'Expresar acuerdo/desacuerdo':[
    {type:'choice',q:'¿Cómo expresas acuerdo fuerte?',opts:['"Not really"','"I totally agree"','"I\'m not sure"','"Maybe"'],correct:1,exp:'"I totally agree" = estoy totalmente de acuerdo'},
    {type:'fill',q:'"I see your point, ___ I disagree." (pero)',answer:'but',exp:'"I see your point, but..." = entiendo tu punto, pero... — desacuerdo educado'},
    {type:'choice',q:'"That\'s a fair point." ¿Qué expresa?',opts:['Desacuerdo total','Reconocimiento del argumento del otro','Cambio de tema','Confusión'],correct:1,exp:'"Fair point" = buen punto — reconoces el argumento sin ceder'},
    {type:'fill',q:'"___ agree to disagree." (podemos)',answer:'We can',exp:'"Agree to disagree" = aceptar que cada uno tiene su opinión'},
    {type:'choice',q:'"I\'m not convinced." ¿Qué significa?',opts:['Estoy convencido','No estoy convencido','Estoy de acuerdo','No entiendo'],correct:1,exp:'"Not convinced" = no estás persuadido por el argumento'},
  ],
  // B1 topics
  'Voz pasiva básica':[
    {type:'choice',q:'"The book was written by Tolkien." ¿Quién escribió el libro?',opts:['Un personaje del libro','Tolkien','El narrador','No se sabe'],correct:1,exp:'Voz pasiva: "was written by Tolkien" — Tolkien es el agente'},
    {type:'fill',q:'Transforma a pasiva: "They clean the office every day." → "The office ___ cleaned every day."',answer:'is',exp:'Presente pasivo: "is/are + past participle"'},
    {type:'choice',q:'"The report will be submitted tomorrow." ¿Qué tiempo es?',opts:['Presente pasivo','Pasado pasivo','Futuro pasivo','Presente perfecto pasivo'],correct:2,exp:'"Will be + past participle" = futuro en voz pasiva'},
    {type:'fill',q:'"The window ___ broken by the ball." (past passive)',answer:'was',exp:'"Was/were + past participle" para pasado pasivo'},
    {type:'choice',q:'¿Cuándo usamos voz pasiva principalmente?',opts:['Cuando el agente es importante','Cuando no sabemos o no importa quién hizo la acción','En lenguaje informal','Para hablar del futuro'],correct:1,exp:'La pasiva enfoca la acción, no el agente — útil cuando el agente es desconocido o irrelevante'},
  ],
  'Pasado perfecto':[
    {type:'choice',q:'"She had already left when I arrived." ¿Qué ocurrió primero?',opts:['Yo llegué','Ella se fue','Los dos al mismo tiempo','No se puede saber'],correct:1,exp:'Past perfect indica la acción que ocurrió ANTES en el pasado'},
    {type:'fill',q:'"By the time he called, I ___ finished dinner."',answer:'had',exp:'"Had + past participle" = past perfect'},
    {type:'choice',q:'¿Qué frase usa correctamente el past perfect?',opts:['"I had went to the store"','"I had gone to the store"','"I have gone to the store"','"I went to the store"'],correct:1,exp:'"Had gone" — "go" tiene pasado participio irregular: "gone"'},
    {type:'fill',q:'"They ___ never seen snow before." (past perfect)',answer:'had',exp:'"Had never seen" — negativo con "never" en past perfect'},
  ],
  'Condicional tipo 3':[
    {type:'choice',q:'"If I had studied, I would have passed." ¿Qué significa?',opts:['Condición real futura','Situación imaginaria presente','Situación pasada irreal','Hábito pasado'],correct:2,exp:'Condicional tipo 3: situación en el PASADO que no ocurrió — puro arrepentimiento'},
    {type:'fill',q:'"If she ___ earlier, she would have caught the train."',answer:'had left',exp:'"If + had + past participle" en la cláusula if'},
    {type:'choice',q:'Completa: "I would have called you if I ___ your number."',opts:['know','knew','had known','have known'],correct:2,exp:'Tipo 3: "had known" — conocimiento en el pasado que no tenías'},
    {type:'fill',q:'"They would have ___ if it hadn\'t rained." (ganado)',answer:'won',exp:'"Would have + past participle" en la cláusula resultado'},
  ],
  'Expresiones idiomáticas I':[
    {type:'choice',q:'"Break a leg!" significa:',opts:['Rómpete una pierna','¡Buena suerte!','¡Ten cuidado!','¡Detente!'],correct:1,exp:'"Break a leg" es el equivalente a "¡Mucha suerte!" en contextos teatrales y generales'},
    {type:'choice',q:'"It\'s raining cats and dogs." significa:',opts:['Está lloviendo animales','Llueve muy fuerte','Hace buen tiempo','Está nublado'],correct:1,exp:'"Raining cats and dogs" = llover a cántaros'},
    {type:'fill',q:'"The exam was a piece of ___." (muy fácil)',answer:'cake',exp:'"A piece of cake" = pan comido, algo muy fácil'},
    {type:'choice',q:'"Hit the books" significa:',opts:['Golpear los libros','Ponerse a estudiar','Ir a la biblioteca','Comprar libros'],correct:1,exp:'"Hit the books" = ponerse a estudiar en serio'},
    {type:'fill',q:'"He\'s under the ___." (enfermo)',answer:'weather',exp:'"Under the weather" = estar mal de salud, no sentirse bien'},
  ],
  'Reported speech':[
    {type:'choice',q:'She said: "I am happy." → She said she ___ happy.',opts:['is','was','were','be'],correct:1,exp:'En reported speech el presente → pasado: "am" → "was"'},
    {type:'fill',q:'He said: "I will call you." → He said he ___ call me.',answer:'would',exp:'"Will" → "would" en reported speech'},
    {type:'choice',q:'She asked: "Do you like pizza?" → She asked if I ___ pizza.',opts:['like','liked','likes','liking'],correct:1,exp:'En preguntas indirectas: "do you like" → "if I liked"'},
    {type:'fill',q:'"I can swim." → He said he ___ swim.',answer:'could',exp:'"Can" → "could" en reported speech'},
    {type:'choice',q:'¿Cuál es la forma correcta de reported speech?',opts:['"She said she wants coffee"','"She said she wanted coffee"','"She said she want coffee"','"She said she will want coffee"'],correct:1,exp:'"Wanted" — el tiempo retrocede un paso en reported speech'},
  ],
  'Cláusulas relativas':[
    {type:'choice',q:'"The man WHO called is my uncle." ¿Qué introduce "who"?',opts:['Una cosa','Una persona','Un lugar','Un tiempo'],correct:1,exp:'"Who" se usa para referirse a personas en cláusulas relativas'},
    {type:'fill',q:'"The book ___ I read was amazing." (para cosas)',answer:'that',exp:'"That" o "which" para cosas en cláusulas relativas'},
    {type:'choice',q:'"The city WHERE I was born is beautiful." ¿Qué introduce "where"?',opts:['Persona','Cosa','Lugar','Tiempo'],correct:2,exp:'"Where" se usa para lugares en cláusulas relativas'},
    {type:'fill',q:'"The day ___ we met was special." (cuando)',answer:'when',exp:'"When" para tiempos/momentos en cláusulas relativas'},
  ],
  'Vocabulario académico I':[
    {type:'choice',q:'"Analyze" en un ensayo significa:',opts:['Copiar','Examinar en detalle','Resumir brevemente','Ignorar'],correct:1,exp:'"Analyze" = examinar sistemáticamente los componentes de algo'},
    {type:'fill',q:'"The author ___ that technology improves education." (argumenta)',answer:'argues',exp:'"Argue/argues" = argumentar. Verbos académicos: argue, suggest, state, claim'},
    {type:'choice',q:'¿Cuál NO es un conector académico?',opts:['Furthermore','Nevertheless','Consequently','Gonna'],correct:3,exp:'"Gonna" es informal. Los conectores académicos: furthermore, nevertheless, consequently, therefore'},
    {type:'fill',q:'"In ___ to my previous point..." (referencia)',answer:'relation',exp:'"In relation to" = en relación con — frase académica frecuente'},
    {type:'choice',q:'"The evidence suggests..." ¿Para qué sirve esta frase?',opts:['Para afirmar un hecho absoluto','Para presentar evidencia con cautela','Para contradecir','Para concluir'],correct:1,exp:'"Suggest" añade cautela académica — no afirma certeza absoluta'},
  ],
};

// Generic exercises that actually teach vocabulary/grammar for any topic+language
function makeGenericExercises(topic, langCode, langName, levelCode){
  const lang = LANGS.find(l=>l.code===langCode)||{name:langName||langCode, native:langCode};
  const ln = lang.native || lang.name; // the language being learned
  // Return exercises that prompt real learning via the topic name
  // These are fill/choice based on the topic string for non-English languages
  return [
    {type:'choice',
     q:`En ${ln}, ¿cuál de estas frases es correcta para el tema "${topic}"?`,
     opts:[`Estudia "${topic}" con atención`,`"${topic}" es un tema de nivel ${levelCode}`,`Practica "${topic}" todos los días`,`Todas las anteriores son buenas estrategias`],
     correct:3,
     exp:`Para dominar "${topic}" en ${ln}: estudia, practica y repasa regularmente.`},
    {type:'fill',
     q:`Escribe en ${ln} la palabra más importante que asocias con "${topic}":`,
     answer:'',
     exp:`Asociar conceptos clave al tema "${topic}" refuerza la memoria a largo plazo.`},
    {type:'choice',
     q:`¿Cuál es la mejor estrategia para aprender "${topic}" en ${ln}?`,
     opts:['Memorizar sin contexto','Usar la palabra en oraciones reales','Solo leer definiciones','Ignorar la pronunciación'],
     correct:1,
     exp:'Usar las palabras en contexto real es la forma más efectiva de aprenderlas.'},
    {type:'fill',
     q:`Escribe una oración corta en ${ln} usando el tema "${topic}":`,
     answer:'',
     exp:`Crear tus propias oraciones con "${topic}" acelera el aprendizaje activo.`},
  ];
}

function getExercisesForLesson(langCode, levelCode, topic){
  // For English, use our detailed per-topic map
  if(langCode === 'EN'){
    if(EN_EXERCISES[topic]) return EN_EXERCISES[topic];
    // Try partial match
    const key = Object.keys(EN_EXERCISES).find(k => topic.includes(k.split(' ')[0]) || k.includes(topic.split(' ')[0]));
    if(key) return EN_EXERCISES[key];
  }
  // For other languages, use the generic pool if available, else generics
  return makeGenericExercises(topic, langCode, null, levelCode);
}

function buildLessons(langCode) {
  const template = getLessonData(langCode) || {};
  const defaultT = DEFAULT_TEMPLATE;
  const levels = [
    {code:'A1',name:'Básico Inicial',emoji:'🌱',xp:25,lives:3,premium:false},
    {code:'A2',name:'Básico',emoji:'🌿',xp:35,lives:3,premium:false},
    {code:'B1',name:'Intermedio',emoji:'🔥',xp:50,lives:2,premium:true},
    {code:'B2',name:'Intermedio Alto',emoji:'⚡',xp:70,lives:2,premium:true},
    {code:'C1',name:'Avanzado',emoji:'💎',xp:100,lives:2,premium:true},
    {code:'C2',name:'Maestría',emoji:'🏆',xp:150,lives:1,premium:true},
  ];
  const icons=['📝','🎯','💡','🔤','📖','🗣️','✍️','🧠','🎓','⚙️','🌐','💬','🔑','🎭','📚'];
  const lessons=[];
  let globalN=1;
  levels.forEach(lv=>{
    const topics=(template[lv.code]||defaultT[lv.code]||[]);
    topics.forEach((topic,i)=>{
      // Get exercises specific to this topic — no repeats across lessons
      const exercises = getExercisesForLesson(langCode, lv.code, topic);
      lessons.push({
        id:`${langCode}_${lv.code}_${i+1}`,
        levelCode:lv.code, levelName:lv.name, levelEmoji:lv.emoji,
        globalNum:globalN++, title:topic,
        icon:icons[i%icons.length], xp:lv.xp,
        premium:lv.premium, maxLives:lv.lives, exercises,
      });
    });
  });
  return lessons;
}

