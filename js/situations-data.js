/* ═══════════════════════════════════════════════════════════
   situations-data.js — Contenido de la sección "Situaciones"
   ═══════════════════════════════════════════════════════════
   Dos cosas viven aquí (nunca lógica, solo datos):

   1) SITUATIONS — las 8 situaciones reales, cada una ligada 1 a 1 a un
      fondo en assets/backgroundsituations/<bg>.png y a un "role" que la
      IA interpreta en "Practicar con IA".

   2) window.SITUATION_LESSON_BANKS — banco de mini-lecciones contextuales
      para el botón "Enséñame primero", con el MISMO formato que
      js/lessons-data/<code>.js (ver README ahí) para que reutilicen
      100% el motor existente (LessonEngine) sin tocarlo.
      Estructura: SITUATION_LESSON_BANKS.<LANG_CODE>.<situationKey> = [...]
      Por ahora solo hay contenido completo para EN (inglés) — el motor
      ya maneja con gracia los idiomas sin contenido todavía (ver
      getSituationLessons en situations.js), igual que renderLessons()
      hace con js/lessons-data/. Para añadir otro idioma: copia el bloque
      de EN, tradúcelo/adáptalo y regístralo bajo el código correspondiente
      (ES/FR/DE/IT/PT) — no hace falta tocar ningún motor.
   ═══════════════════════════════════════════════════════════ */

const SITUATIONS = [
  {
    key:'airport', icon:'✈️', name:'Aeropuerto', desc:'Check-in, seguridad y vuelos',
    level:'easy', bg:'assets/backgroundsituations/airport.png',
    role:'an airport check-in / gate agent', roleLabel:'un agente de aeropuerto',
    prompt:'You are an airport agent (check-in desk, security or gate). Help the learner check in, clear security, find a gate, or solve a flight problem. Speak in {LANG}.',
    steps:['Encontrar el mostrador correcto','Hacer check-in y facturar equipaje','Pasar el control de seguridad','Ubicar tu puerta de embarque'],
    phrases:['I would like to check in, please.','Where is the security checkpoint?','Which gate does my flight leave from?','My flight has been delayed. What should I do?'],
  },
  {
    key:'restaurant', icon:'🍽️', name:'Restaurante', desc:'Pedir, alergias y la cuenta',
    level:'easy', bg:'assets/backgroundsituations/restaurant.png',
    role:'a restaurant server/waiter', roleLabel:'un camarero',
    prompt:'You are a restaurant server. Help the learner get a table, order food, ask about ingredients/allergies, and pay. Speak in {LANG}.',
    steps:['Pedir una mesa','Preguntar por el menú y los platos','Hacer el pedido','Pedir la cuenta y pagar'],
    phrases:['Could I see the menu, please?','Does this contain nuts?','I would like to order this.','Could we have the bill, please?'],
  },
  {
    key:'hotel', icon:'🏨', name:'Hotel', desc:'Check-in y solicitudes',
    level:'easy', bg:'assets/backgroundsituations/hotel.png',
    role:'a hotel receptionist', roleLabel:'un recepcionista de hotel',
    prompt:'You are a hotel receptionist. Help the learner check in/out and resolve practical requests (towels, breakfast, wifi, problems with the room). Speak in {LANG}.',
    steps:['Confirmar la reserva','Hacer el check-in y recibir la llave','Pedir algo que necesitas','Resolver un problema con la habitación'],
    phrases:['I have a reservation under my name.','What time is breakfast?','Could I have an extra towel?','There is a problem with my room.'],
  },
  {
    key:'market', icon:'🛒', name:'Mercado', desc:'Precios, cantidades y regateo',
    level:'med', bg:'assets/backgroundsituations/market.png',
    role:'a market/shop vendor', roleLabel:'un vendedor de mercado',
    prompt:'You are a friendly market vendor selling food or goods. Help the learner ask for products, quantities, prices, and negotiate a little. Speak in {LANG}.',
    steps:['Preguntar por un producto','Preguntar el precio','Pedir una cantidad o pedir un descuento','Pagar y despedirte'],
    phrases:['How much does this cost?','Could you give me a discount?','I would like two kilos, please.','Do you accept cards?'],
  },
  {
    key:'hospital', icon:'🏥', name:'Hospital', desc:'Describir síntomas y citas',
    level:'med', bg:'assets/backgroundsituations/hospital.png',
    role:'a receptionist, nurse or doctor at a hospital', roleLabel:'personal de un hospital',
    prompt:'You are hospital staff (receptionist, nurse, or doctor). Help the learner book an appointment, describe non-emergency symptoms, and understand next steps. Speak in {LANG}. Do not diagnose; encourage urgent local care for real emergencies.',
    steps:['Pedir una cita','Describir tu síntoma','Decir desde cuándo lo tienes','Entender las indicaciones'],
    phrases:['I need to see a doctor.','I have had this pain for two days.','I am allergic to this medicine.','Is this an emergency?'],
  },
  {
    key:'office', icon:'💼', name:'Oficina', desc:'Compañeros, tareas y reuniones',
    level:'med', bg:'assets/backgroundsituations/office.png',
    role:'a coworker, client or boss in an office', roleLabel:'un compañero de oficina',
    prompt:'You are a coworker, client, or boss in an office setting. Have a natural work conversation: ask for help, discuss a deadline, propose a meeting, or give a quick update. Speak in {LANG}.',
    steps:['Saludar y dar contexto','Pedir ayuda o dar una actualización','Hablar de plazos o próximos pasos','Cerrar la conversación'],
    phrases:['Could you help me with this?','When is the deadline?','Can we schedule a meeting?','I will send you the report today.'],
  },
  {
    key:'party', icon:'🎉', name:'Fiesta', desc:'Conversación casual y small talk',
    level:'med', bg:'assets/backgroundsituations/party.png',
    role:'another guest at a party', roleLabel:'un invitado en una fiesta',
    prompt:'You met the learner at a social event/party. Have a natural, friendly conversation, make small talk, and introduce light social challenges. Speak in {LANG}.',
    steps:['Saludar y romper el hielo','Preguntar cómo conoce al anfitrión','Hablar de intereses en común','Despedirte con cortesía'],
    phrases:['How do you know the host?','What do you like to do in your free time?','That sounds interesting!','It was lovely talking to you.'],
  },
  {
    key:'university', icon:'🎓', name:'Universidad', desc:'Matrícula, clases y trámites',
    level:'hard', bg:'assets/backgroundsituations/university.png',
    role:'a university student, professor or administrative staff member', roleLabel:'un miembro de la universidad',
    prompt:'You are a university student, professor, or administrative staff member. Help the learner ask about enrollment, classes, deadlines, or campus life. Speak in {LANG}.',
    steps:['Explicar qué necesitas','Preguntar por requisitos o plazos','Elegir una opción o curso','Confirmar los siguientes pasos'],
    phrases:['I would like information about this course.','What are the entry requirements?','When does enrollment close?','Could you explain the schedule?'],
  },
];

function getSituation(key){ return SITUATIONS.find(s=>s.key===key) || null; }

/* ═══════════════════════════════════════════════════════════
   BANCO DE LECCIONES POR SITUACIÓN — INGLÉS (EN)
   Mismo formato exacto que js/lessons-data/en.js (ver buildLessons()
   en lessons.js). IDs prefijados con "sit_" para nunca chocar con el
   banco de lecciones normal del idioma.
   ═══════════════════════════════════════════════════════════ */
window.SITUATION_LESSON_BANKS = window.SITUATION_LESSON_BANKS || {};
window.SITUATION_LESSON_BANKS.EN = {

  airport: [
    { id:'sit_airport_vocab', level:'A1', title:'Vocabulario del aeropuerto', emoji:'🧳', xp:25,
      description:'Las palabras que verás y escucharás antes de volar.',
      study:{ vocab:[
        ['Check-in','Facturación','Donde entregas tu equipaje y recibes tu tarjeta de embarque.'],
        ['Boarding pass','Tarjeta de embarque'],
        ['Gate','Puerta de embarque'],
        ['Luggage / Baggage','Equipaje'],
        ['Security checkpoint','Control de seguridad'],
        ['Passport control','Control de pasaportes'],
      ]},
      ex:[
        ['mcq','¿Cómo se dice "tarjeta de embarque" en inglés?',['Boarding pass','Check-in','Gate','Passport'],0,'"Boarding pass" es el documento que te dejan subir al avión.','🧳 Estás en el mostrador de la aerolínea.'],
        ['fill','"Where is the security ___?"',['checkpoint','gate','luggage','pass'],0,'"Security checkpoint" es el punto donde revisan tu equipaje de mano.'],
        ['mcq','¿Qué palabra usarías para tu maleta?',['Luggage','Gate','Ticket','Desk'],0,'"Luggage" (o "baggage") se refiere a las maletas que llevas.'],
        ['translate','Traduce: "control de pasaportes"',['Passport control','Boarding pass','Security check','Baggage claim'],0,'"Passport control" es donde revisan tu documento de identidad al viajar.'],
        ['arrange','Ordena: [is / boarding / where / my / pass]',['Where is my boarding pass','Boarding is where my pass','My pass is where boarding','Pass boarding where is my'],0,'"Where is my boarding pass?" — pregunta muy común si la pierdes de vista.'],
      ],
    },
    { id:'sit_airport_phrases', level:'A1', title:'Frases para el check-in', emoji:'💬', xp:25,
      description:'Lo esencial para facturar y pasar seguridad sin problemas.',
      study:{ vocab:[
        ['I would like to check in, please.','Quisiera hacer el check-in, por favor.'],
        ['Do you have any bags to check?','¿Tiene equipaje para facturar?'],
        ['Window or aisle seat?','¿Asiento de ventanilla o pasillo?'],
        ['Which gate does my flight leave from?','¿De qué puerta sale mi vuelo?'],
        ['My flight has been delayed.','Mi vuelo se ha retrasado.'],
      ]},
      ex:[
        ['mcq','Quieres empezar el check-in. ¿Qué dices?',['I would like to check in, please.','I am from Spain.','See you later.','This is delicious.'],0,'Es la forma educada y directa de empezar el trámite.','🧳 Llegas al mostrador de tu aerolínea.'],
        ['mcq','El agente te pregunta "Window or aisle seat?". ¿De qué habla?',['Del tipo de asiento','Del equipaje','De la hora del vuelo','Del destino'],0,'Te está preguntando si prefieres asiento de ventanilla o de pasillo.'],
        ['fill','"Which ___ does my flight leave from?"',['gate','luggage','check-in','ticket'],0,'Preguntas por la puerta de embarque para saber a dónde ir.'],
        ['translate','Traduce: "Mi vuelo se ha retrasado."',['My flight has been delayed.','My flight has landed.','My flight is full.','My flight is cheap.'],0,'"Delayed" significa retrasado — muy útil si cambia tu horario.'],
        ['mcq','El agente pregunta "Do you have any bags to check?". ¿Qué te está preguntando?',['Si tienes equipaje para facturar','Si tienes pasaporte','Si tienes hambre','Si tienes reserva de hotel'],0,'"Bags to check" son las maletas que van a la bodega del avión.'],
      ],
    },
    { id:'sit_airport_dialogue', level:'A1', title:'Diálogo: en el mostrador', emoji:'🛂', xp:30,
      description:'Sigue una conversación real de check-in y practica tu respuesta.',
      study:{ grammar:[
        ['Preguntas con "Could you...?"','Forma educada de pedir algo. "Could you..." siempre va seguido del verbo en infinitivo sin "to".','Could you repeat that, please? → ¿Podría repetir eso, por favor?'],
      ]},
      ex:[
        ['mcq','Agente: "Passport, please." Tú respondes dándoselo. ¿Qué NO deberías decir?',['I do not have one.','Here you go.','Of course.','Here it is.'],0,'Si no tienes pasaporte no podrías facturar — en un check-in real siempre lo tendrías a mano.','🎬 Diálogo — Agente: "Passport, please."'],
        ['mcq','Agente: "Your flight is boarding in 20 minutes, gate 14." ¿Qué acabas de entender?',['La puerta y el tiempo que falta para embarcar','El precio del vuelo','Tu asiento','El destino del vuelo'],0,'"Boarding in 20 minutes" = embarque en 20 minutos; "gate 14" es la puerta.','🎬 Diálogo — el agente te da la información final.'],
        ['fill','Tú preguntas: "Could you ___ that, please?" (no escuchaste bien la puerta)',['repeat','check','pay','book'],0,'"Could you repeat that, please?" es perfecto cuando no entiendes algo.'],
        ['translate','Traduce: "¿Podría decirme dónde está la puerta 14?"',['Could you tell me where gate 14 is?','Can I have a window seat?','Where can I buy a ticket?','Is my flight delayed?'],0,'Combina "Could you tell me...?" con la pregunta indirecta "where gate 14 is".'],
        ['speaking','Imagina que estás en el mostrador. Preséntate, di que quieres hacer el check-in y pregunta por tu puerta de embarque. (mínimo 25 palabras)',[],['check-in','gate','boarding pass','please'],'Una buena respuesta usa al menos "check-in", "gate" y una frase educada como "please" o "could you".'],
      ],
    },
  ],

  restaurant: [
    { id:'sit_restaurant_vocab', level:'A1', title:'Vocabulario del restaurante', emoji:'🍽️', xp:25,
      description:'Lo básico para pedir comida sin dudar.',
      study:{ vocab:[
        ['Menu','Menú/carta'],
        ['Reservation','Reserva'],
        ['Order','Pedido / pedir'],
        ['Bill / Check','La cuenta'],
        ['Waiter / Server','Camarero'],
        ['Allergy','Alergia'],
      ]},
      ex:[
        ['mcq','¿Cómo se dice "la cuenta" en inglés (EE.UU.)?',['The check','The menu','The order','The bill (UK)'],0,'En EE.UU. se dice "the check"; en Reino Unido, "the bill". Ambas son correctas.','🍽️ Terminaste de comer y quieres pagar.'],
        ['fill','"Do you have a ___?" (para reservar mesa)',['reservation','allergy','order','waiter'],0,'"Reservation" es la reserva que hiciste con antelación.'],
        ['translate','Traduce: "camarero"',['Waiter','Menu','Guest','Chef'],0,'"Waiter" (o "server", neutro en género) atiende tu mesa.'],
        ['mcq','Le dices al camarero que tienes una alergia. ¿Qué palabra usas?',['Allergy','Reservation','Bill','Menu'],0,'"I have a nut allergy" avisa de una alergia a los frutos secos, por ejemplo.'],
        ['arrange','Ordena: [please / menu / the / could / I / have]',['Could I have the menu, please','The menu could I have please','Please could the menu I have','Have I could the menu please'],0,'"Could I have the menu, please?" es la forma educada de pedir la carta.'],
      ],
    },
    { id:'sit_restaurant_phrases', level:'A1', title:'Frases para pedir', emoji:'💬', xp:25,
      description:'De sentarte a pagar, en cinco frases clave.',
      study:{ vocab:[
        ['A table for two, please.','Una mesa para dos, por favor.'],
        ['Could I see the menu, please?','¿Podría ver el menú, por favor?'],
        ['I will have the...','Voy a pedir el/la...'],
        ['Does this contain nuts?','¿Esto contiene frutos secos?'],
        ['Could we have the bill, please?','¿Nos trae la cuenta, por favor?'],
      ]},
      ex:[
        ['mcq','Llegas al restaurante sin reserva. ¿Qué dices primero?',['A table for two, please.','Does this contain nuts?','Could we have the bill?','I will have the pasta.'],0,'Lo primero es pedir mesa antes de sentarte a mirar el menú.','🍽️ Entras al restaurante con un amigo.'],
        ['fill','"I ___ have the salmon, please."',['will','am','do','have'],0,'"I will have the salmon" es la forma habitual de pedir un plato.'],
        ['mcq','Eres alérgico a los frutos secos. ¿Qué preguntas?',['Does this contain nuts?','Is this table free?','Could I see the menu?','Could we have the bill?'],0,'"Does this contain nuts?" confirma si el plato lleva frutos secos.'],
        ['translate','Traduce: "¿Nos trae la cuenta, por favor?"',['Could we have the bill, please?','Could I see the menu, please?','A table for two, please.','Is this seat taken?'],0,'"Could we have the bill, please?" es la forma educada de pedir la cuenta.'],
        ['mcq','El camarero pregunta "Anything to drink?". ¿De qué te pregunta?',['De bebidas','Del postre','De la mesa','De la propina'],0,'"Anything to drink?" = ¿algo para beber?'],
      ],
    },
    { id:'sit_restaurant_dialogue', level:'A1', title:'Diálogo: pedir la cena', emoji:'🗣️', xp:30,
      description:'Sigue un pedido completo de principio a fin.',
      study:{ grammar:[
        ['"I will have..." para pedir comida','Se usa "will have" (no "want") para sonar natural al pedir en un restaurante.','I will have the chicken, please. → Voy a pedir el pollo, por favor.'],
      ]},
      ex:[
        ['mcq','Camarero: "Good evening! Do you have a reservation?" ¿Qué te está preguntando?',['Si reservaste mesa','Si quieres el menú','Si vas a pagar con tarjeta','Si tienes alergias'],0,'"Do you have a reservation?" pregunta si reservaste con antelación.','🎬 Diálogo — llegas al restaurante por la noche.'],
        ['mcq','Camarero: "Are you ready to order?" ¿Cuál es tu mejor respuesta si aún no decides?',['Could we have a few more minutes, please?','A table for two, please.','Could we have the bill?','This is delicious!'],0,'"A few more minutes, please" pide tiempo educadamente.','🎬 Diálogo — todavía estás mirando el menú.'],
        ['fill','Camarero: "___ to drink?" Tú: "Just water, please."',['Anything','Something','Nothing','Everything'],0,'"Anything to drink?" es la pregunta estándar sobre bebidas.'],
        ['translate','Traduce: "Está delicioso, gracias."',['This is delicious, thank you.','This is expensive, thank you.','This is cold, thank you.','This is spicy, thank you.'],0,'Un buen cumplido para el chef: "This is delicious, thank you."'],
        ['writing','Escribe un pequeño diálogo (mínimo 25 palabras) donde pides una mesa, eliges un plato y pides la cuenta.',[],['table','menu','order','bill'],'Debe incluir al menos pedir mesa, elegir algo del menú y pedir la cuenta.'],
      ],
    },
  ],

  hotel: [
    { id:'sit_hotel_vocab', level:'A1', title:'Vocabulario del hotel', emoji:'🏨', xp:25,
      description:'Palabras clave para tu estadía.',
      study:{ vocab:[
        ['Reservation','Reserva'],
        ['Check-in / Check-out','Entrada / Salida'],
        ['Room key / Key card','Llave / tarjeta de la habitación'],
        ['Front desk','Recepción'],
        ['Wake-up call','Llamada para despertar'],
        ['Towel','Toalla'],
      ]},
      ex:[
        ['mcq','¿Dónde pides ayuda en un hotel?',['Front desk','Gate','Menu','Checkpoint'],0,'"Front desk" es la recepción del hotel.','🏨 Llegas al lobby del hotel.'],
        ['fill','"I have a ___ under my name."',['reservation','towel','key','check-out'],0,'"Reservation" es tu reserva hecha previamente.'],
        ['translate','Traduce: "tarjeta de la habitación"',['Key card','Front desk','Wake-up call','Reservation'],0,'La "key card" abre la puerta de tu habitación.'],
        ['mcq','Quieres que te despierten a las 7am. ¿Qué pides?',['A wake-up call','A key card','A reservation','A towel'],0,'"A wake-up call" es una llamada del hotel para despertarte.'],
        ['arrange','Ordena: [is / what / time / check-out]',['What time is check-out','Check-out is what time','Time what is check-out','Is what time check-out'],0,'"What time is check-out?" pregunta la hora límite para dejar la habitación.'],
      ],
    },
    { id:'sit_hotel_phrases', level:'A1', title:'Frases para el check-in', emoji:'💬', xp:25,
      description:'Del mostrador a la habitación sin sorpresas.',
      study:{ vocab:[
        ['I have a reservation under my name.','Tengo una reserva a mi nombre.'],
        ['What time is breakfast?','¿A qué hora es el desayuno?'],
        ['Could I have an extra towel?','¿Podría darme una toalla extra?'],
        ['Is breakfast included?','¿El desayuno está incluido?'],
        ['There is a problem with my room.','Hay un problema con mi habitación.'],
      ]},
      ex:[
        ['mcq','Llegas a recepción para el check-in. ¿Qué dices primero?',['I have a reservation under my name.','There is a problem with my room.','What time is breakfast?','Could I have a towel?'],0,'Primero confirmas tu reserva para que te den la llave.','🏨 Llegas a la recepción del hotel.'],
        ['fill','"Is breakfast ___?"',['included','reserved','delayed','allergic'],0,'"Is breakfast included?" pregunta si ya está pagado con la habitación.'],
        ['mcq','El aire acondicionado no funciona. ¿Qué dices?',['There is a problem with my room.','What time is breakfast?','I have a reservation.','Could I have a towel?'],0,'Es la frase correcta para reportar un problema en la habitación.'],
        ['translate','Traduce: "¿Podría darme una toalla extra?"',['Could I have an extra towel, please?','Could I have a wake-up call?','Is breakfast included?','What time is check-out?'],0,'"Could I have...?" es la forma educada de pedir algo extra.'],
        ['mcq','Recepcionista: "Breakfast is from 7 to 10 in the lobby." ¿Qué acabas de entender?',['El horario y lugar del desayuno','El precio de la habitación','La hora de check-out','Tu número de habitación'],0,'Te está dando el horario (7 a 10) y el lugar (el lobby).'],
      ],
    },
    { id:'sit_hotel_dialogue', level:'A1', title:'Diálogo: en recepción', emoji:'🗝️', xp:30,
      description:'Practica un check-in completo con imprevistos.',
      study:{ grammar:[
        ['"There is / There are" para describir problemas','"There is" + singular, "There are" + plural. Útil para reportar algo que falta o no funciona.','There is a problem with the shower. → Hay un problema con la ducha.'],
      ]},
      ex:[
        ['mcq','Recepcionista: "Welcome! Do you have a reservation?" Tú respondes que sí, a tu nombre. ¿Qué dices?',['Yes, I have a reservation under my name.','No, I would like the menu.','Yes, this is delicious.','No, I need a doctor.'],0,'Confirmas la reserva usando "under my name".','🎬 Diálogo — check-in en el hotel.'],
        ['mcq','Recepcionista: "Here is your key card. Breakfast is from 7 to 10." ¿Qué información te dieron?',['La llave y el horario de desayuno','El precio de la habitación','La hora de salida','El número de tu vuelo'],0,'Te entregan la llave y te informan el horario del desayuno.','🎬 Diálogo — te dan la bienvenida.'],
        ['fill','En la habitación notas que falta jabón. Dices: "___ no soap in the bathroom."',['There is','There are','It has','I have'],0,'"There is no soap" — "soap" es incontable, por eso usamos "there is".'],
        ['translate','Traduce: "Hay un problema con la ducha."',['There is a problem with the shower.','There are two towels.','I have a reservation.','Is breakfast included?'],0,'"There is a problem with the shower" reporta el inconveniente correctamente.'],
        ['speaking','Simula que llegas a recepción: confirma tu reserva, pregunta el horario de desayuno y pide una toalla extra. (mínimo 25 palabras)',[],['reservation','breakfast','towel'],'Una buena respuesta incluye la reserva, el desayuno y la toalla extra.'],
      ],
    },
  ],

  market: [
    { id:'sit_market_vocab', level:'A2', title:'Vocabulario del mercado', emoji:'🛒', xp:25,
      description:'Precios, cantidades y productos frescos.',
      study:{ vocab:[
        ['Price','Precio'],
        ['Discount','Descuento'],
        ['Fresh','Fresco'],
        ['Kilogram / pound','Kilogramo / libra'],
        ['Cash / Card','Efectivo / tarjeta'],
        ['Bargain','Negociar el precio / ganga'],
      ]},
      ex:[
        ['mcq','¿Cómo preguntas el precio de algo?',['How much does this cost?','Is this fresh?','Do you accept cards?','Could I have a bag?'],0,'"How much does this cost?" es la pregunta directa por el precio.','🛒 Estás frente a un puesto de frutas.'],
        ['fill','"Do you accept ___ or only cash?"',['cards','discounts','kilograms','bargains'],0,'Preguntas si aceptan tarjeta, en lugar de solo efectivo.'],
        ['translate','Traduce: "un kilo de tomates"',['A kilogram of tomatoes','A price of tomatoes','A discount on tomatoes','A bargain of tomatoes'],0,'"A kilogram of..." indica la cantidad que quieres comprar.'],
        ['mcq','El vendedor te ofrece bajar el precio. ¿Qué palabra usó probablemente?',['Discount','Fresh','Cash','Bargain (verbo)'],0,'"Discount" significa descuento sobre el precio original.'],
        ['arrange','Ordena: [me / could / a / discount / give / you]',['Could you give me a discount','You could give me a discount','Discount could you give me','Give me a discount could you'],0,'"Could you give me a discount?" es la forma educada de pedir rebaja.'],
      ],
    },
    { id:'sit_market_phrases', level:'A2', title:'Frases para comprar', emoji:'💬', xp:25,
      description:'De preguntar el precio a pagar.',
      study:{ vocab:[
        ['How much does this cost?','¿Cuánto cuesta esto?'],
        ['Could you give me a discount?','¿Podría hacerme un descuento?'],
        ['I would like two kilos, please.','Quisiera dos kilos, por favor.'],
        ['Do you accept cards?','¿Acepta tarjeta?'],
        ['Is this fresh?','¿Esto está fresco?'],
      ]},
      ex:[
        ['mcq','Quieres saber si la fruta llegó hoy. ¿Qué preguntas?',['Is this fresh?','Do you accept cards?','How much does this cost?','I would like two kilos.'],0,'"Is this fresh?" pregunta directamente por la frescura del producto.','🛒 Miras una caja de fresas.'],
        ['fill','"I would ___ two kilos, please."',['like','have','want to','need to'],0,'"I would like..." es la forma educada de pedir una cantidad.'],
        ['mcq','El vendedor dice el precio y te parece alto. ¿Qué le dices?',['Could you give me a discount?','Is this fresh?','Do you accept cards?','I would like two kilos.'],0,'Pides amablemente un descuento con "Could you give me a discount?"'],
        ['translate','Traduce: "¿Acepta tarjeta?"',['Do you accept cards?','Is this fresh?','How much does this cost?','Could I have a bag?'],0,'"Do you accept cards?" confirma el método de pago.'],
        ['mcq','Vendedor: "That will be five dollars." ¿Qué te está diciendo?',['El precio total','El descuento','La cantidad disponible','La hora de cierre'],0,'"That will be five dollars" indica cuánto debes pagar.'],
      ],
    },
    { id:'sit_market_dialogue', level:'A2', title:'Diálogo: en el puesto', emoji:'🗣️', xp:30,
      description:'Negocia un precio de principio a fin.',
      study:{ grammar:[
        ['Cantidades con "a kilo of / a bag of"','Para pedir cantidades usa "a [cantidad] of [producto]".','A kilo of apples, two bags of rice.'],
      ]},
      ex:[
        ['mcq','Vendedor: "These tomatoes are very fresh today." ¿Qué te dice?',['Que los tomates son frescos','Que los tomates son caros','Que no quedan tomates','Que hay descuento'],0,'"Very fresh today" resalta la frescura del producto.','🎬 Diálogo — señalas los tomates.'],
        ['mcq','Preguntas el precio y responde "Three dollars a kilo." Tú quieres 2 kilos. ¿Qué dices?',['I would like two kilos, please.','Is this fresh?','Do you accept cards?','Could I have a bag?'],0,'Confirmas la cantidad que quieres comprar.','🎬 Diálogo — ya sabes el precio por kilo.'],
        ['fill','Regateando, dices: "___ you give me a discount for two kilos?"',['Could','Is','Do','Have'],0,'"Could you give me a discount...?" es la forma educada de negociar.'],
        ['translate','Traduce: "Son cinco dólares en total."',['That is five dollars in total.','That is five kilos in total.','That is a discount of five.','That is fresh for five.'],0,'"That is five dollars in total" confirma el total a pagar.'],
        ['writing','Escribe un diálogo corto (mínimo 25 palabras) donde preguntas el precio, pides una cantidad y negocias un descuento.',[],['price','kilo','discount'],'Debe incluir preguntar el precio, pedir una cantidad y negociar.'],
      ],
    },
  ],

  hospital: [
    { id:'sit_hospital_vocab', level:'A2', title:'Vocabulario del hospital', emoji:'🏥', xp:25,
      description:'Palabras esenciales para explicar cómo te sientes.',
      study:{ vocab:[
        ['Appointment','Cita'],
        ['Symptom','Síntoma'],
        ['Pain','Dolor'],
        ['Prescription','Receta médica'],
        ['Allergic','Alérgico/a'],
        ['Emergency','Emergencia'],
      ]},
      ex:[
        ['mcq','¿Cómo dirías que tienes dolor de cabeza?',['I have a headache.','I have an appointment.','I have a prescription.','I have an emergency.'],0,'"Headache" es dolor de cabeza; se usa con "I have a...".','🏥 Llegas a la recepción del hospital.'],
        ['fill','"I need to book an ___ with a doctor."',['appointment','allergy','emergency','pain'],0,'"Appointment" es la cita que reservas para ver al médico.'],
        ['translate','Traduce: "receta médica"',['Prescription','Appointment','Symptom','Pain'],0,'"Prescription" es lo que el médico te da para comprar medicinas.'],
        ['mcq','Eres alérgico a la penicilina. ¿Qué dices?',['I am allergic to penicillin.','I have an appointment.','This is an emergency.','I need a prescription.'],0,'"I am allergic to..." avisa de una alergia específica.'],
        ['arrange','Ordena: [is / this / an / emergency]',['Is this an emergency','This an emergency is','Emergency this is an','An emergency is this'],0,'"Is this an emergency?" pregunta si la situación requiere atención inmediata.'],
      ],
    },
    { id:'sit_hospital_phrases', level:'A2', title:'Frases para describir síntomas', emoji:'💬', xp:25,
      description:'Explica cómo te sientes con claridad.',
      study:{ vocab:[
        ['I need to see a doctor.','Necesito ver a un médico.'],
        ['I have had this pain for two days.','Tengo este dolor desde hace dos días.'],
        ['I am allergic to this medicine.','Soy alérgico/a a esta medicina.'],
        ['How often should I take this?','¿Cada cuánto debo tomar esto?'],
        ['Is this an emergency?','¿Esto es una emergencia?'],
      ]},
      ex:[
        ['mcq','Llegas a recepción sintiéndote mal. ¿Qué dices primero?',['I need to see a doctor.','How often should I take this?','Is this an emergency?','I am allergic to this medicine.'],0,'Es la frase inicial más natural para pedir atención médica.','🏥 Entras al hospital sintiéndote mal.'],
        ['fill','"I have ___ this pain for two days."',['had','have','having','has'],0,'"I have had this pain for two days" — usamos present perfect para algo que empezó en el pasado y continúa.'],
        ['mcq','El médico te da un medicamento nuevo. ¿Qué preguntas antes de tomarlo si eres alérgico a algo?',['I am allergic to this medicine.','I need to see a doctor.','Is this an emergency?','How often should I take this?'],0,'Avisas de la alergia ANTES de tomar cualquier medicamento nuevo.'],
        ['translate','Traduce: "¿Cada cuánto debo tomar esto?"',['How often should I take this?','How much does this cost?','Is this an emergency?','Do you accept cards?'],0,'"How often should I take this?" pregunta la frecuencia del medicamento.'],
        ['mcq','El médico dice "Take one pill every eight hours." ¿Qué acabas de entender?',['La frecuencia del medicamento','El precio del medicamento','La fecha de tu próxima cita','El nombre del medicamento'],0,'"Every eight hours" indica cada cuánto tiempo debes tomarlo.'],
      ],
    },
    { id:'sit_hospital_dialogue', level:'A2', title:'Diálogo: en recepción', emoji:'🗣️', xp:30,
      description:'Sigue una consulta sencilla de principio a fin.',
      study:{ grammar:[
        ['Present perfect para síntomas: "I have had..."','Se usa para algo que empezó en el pasado y sigue ahora. Muy común al describir síntomas.','I have had a fever since yesterday. → Tengo fiebre desde ayer.'],
      ]},
      ex:[
        ['mcq','Recepcionista: "What seems to be the problem?" ¿Qué te está preguntando?',['Cuál es tu síntoma o molestia','Tu nombre completo','Tu número de seguro','Tu hora de cita'],0,'"What seems to be the problem?" pregunta por tu malestar.','🎬 Diálogo — te reciben en el hospital.'],
        ['mcq','Tú: "I have had a headache since yesterday." ¿Qué acabas de decir?',['Que tienes dolor de cabeza desde ayer','Que tienes una cita mañana','Que eres alérgico a algo','Que es una emergencia'],0,'Describes desde cuándo tienes el síntoma con "since yesterday".','🎬 Diálogo — explicas tu malestar.'],
        ['fill','El médico pregunta: "Are you ___ to any medication?"',['allergic','emergency','symptom','appointment'],0,'"Are you allergic to...?" pregunta por alergias antes de recetar.'],
        ['translate','Traduce: "Necesito ver a un médico, por favor."',['I need to see a doctor, please.','I need a discount, please.','I need a table, please.','I need a room, please.'],0,'"I need to see a doctor, please" pide atención médica educadamente.'],
        ['speaking','Simula que describes un síntoma al médico: qué te duele, desde cuándo y si eres alérgico a algo. (mínimo 25 palabras)',[],['pain','since','allergic'],'Una buena respuesta menciona el síntoma, desde cuándo lo tienes y alergias si aplica.'],
      ],
    },
  ],

  office: [
    { id:'sit_office_vocab', level:'B1', title:'Vocabulario de oficina', emoji:'💼', xp:25,
      description:'Lo básico para tu día a día laboral.',
      study:{ vocab:[
        ['Deadline','Fecha límite'],
        ['Meeting','Reunión'],
        ['Colleague / Coworker','Compañero/a de trabajo'],
        ['Report','Informe'],
        ['Schedule','Agenda / horario'],
        ['Task','Tarea'],
      ]},
      ex:[
        ['mcq','¿Cómo se dice "fecha límite" en inglés?',['Deadline','Meeting','Schedule','Task'],0,'"Deadline" es la fecha máxima para entregar algo.','💼 Estás en tu oficina revisando pendientes.'],
        ['fill','"Let\'s schedule a ___ for tomorrow."',['meeting','deadline','report','task'],0,'"Schedule a meeting" significa organizar una reunión.'],
        ['translate','Traduce: "compañero de trabajo"',['Colleague','Deadline','Report','Task'],0,'"Colleague" (o "coworker") es alguien con quien trabajas.'],
        ['mcq','Tu jefe te pide un documento con resultados. ¿Qué palabra usa probablemente?',['Report','Deadline','Colleague','Meeting'],0,'"Report" es un informe con información o resultados.'],
        ['arrange','Ordena: [is / when / the / deadline]',['When is the deadline','Deadline is when the','Is when the deadline','The deadline is when'],0,'"When is the deadline?" pregunta por la fecha límite.'],
      ],
    },
    { id:'sit_office_phrases', level:'B1', title:'Frases para el trabajo', emoji:'💬', xp:25,
      description:'Pide ayuda, organiza reuniones y da actualizaciones.',
      study:{ vocab:[
        ['Could you help me with this?','¿Podrías ayudarme con esto?'],
        ['When is the deadline?','¿Cuándo es la fecha límite?'],
        ['Can we schedule a meeting?','¿Podemos agendar una reunión?'],
        ['I will send you the report today.','Te enviaré el informe hoy.'],
        ['Can we reschedule?','¿Podemos reagendar?'],
      ]},
      ex:[
        ['mcq','Necesitas ayuda de un compañero con una tarea. ¿Qué dices?',['Could you help me with this?','Can we reschedule?','When is the deadline?','I will send you the report.'],0,'"Could you help me with this?" pide ayuda de forma educada.','💼 Tienes una tarea complicada.'],
        ['fill','"I will ___ you the report today."',['send','have','make','do'],0,'"I will send you..." indica que enviarás algo pronto.'],
        ['mcq','Tienes un conflicto de horario con una reunión. ¿Qué preguntas?',['Can we reschedule?','Could you help me with this?','When is the deadline?','Can we schedule a meeting?'],0,'"Can we reschedule?" pide cambiar la hora de la reunión.'],
        ['translate','Traduce: "¿Podemos agendar una reunión?"',['Can we schedule a meeting?','Can we reschedule?','When is the deadline?','Could you help me with this?'],0,'"Can we schedule a meeting?" propone organizar una reunión.'],
        ['mcq','Tu jefe dice "The deadline is Friday." ¿Qué acabas de entender?',['La fecha límite es el viernes','La reunión es el viernes','El informe llegó el viernes','No hay reunión el viernes'],0,'Te está confirmando cuándo vence el plazo.'],
      ],
    },
    { id:'sit_office_dialogue', level:'B1', title:'Diálogo: pedir ayuda', emoji:'🗣️', xp:30,
      description:'Sigue una conversación laboral típica.',
      study:{ grammar:[
        ['Futuro con "will" para promesas de trabajo','Usa "will" para comprometerte a hacer algo pronto.','I will finish it by Friday. → Lo terminaré para el viernes.'],
      ]},
      ex:[
        ['mcq','Colega: "Do you have a minute? I need your help with the report." ¿Qué te pide?',['Ayuda con un informe','Ayuda con una reserva','Ayuda con una receta médica','Ayuda con un vuelo'],0,'"I need your help with the report" pide ayuda con un informe.','🎬 Diálogo — un compañero se acerca a tu escritorio.'],
        ['mcq','Tú respondes: "Sure, what do you need?" ¿Qué acabas de decir?',['Que estás dispuesto a ayudar y preguntas qué necesita','Que no puedes ayudar','Que estás en una reunión','Que necesitas el informe tú'],0,'"Sure, what do you need?" muestra disposición a ayudar.','🎬 Diálogo — aceptas ayudar.'],
        ['fill','Tu compañero dice: "___ you send it to me by tomorrow?"',['Could','Is','Have','Do'],0,'"Could you send it to me...?" pide algo de forma educada.'],
        ['translate','Traduce: "Lo terminaré para mañana."',['I will finish it by tomorrow.','I finished it yesterday.','I am finishing it now.','I have finished it.'],0,'"I will finish it by tomorrow" es una promesa a futuro con "will".'],
        ['writing','Escribe un breve intercambio (mínimo 25 palabras) donde un compañero te pide ayuda con una tarea y tú aceptas dando un plazo.',[],['help','deadline','will'],'Debe incluir pedir/dar ayuda y mencionar un plazo con "will".'],
      ],
    },
  ],

  party: [
    { id:'sit_party_vocab', level:'A2', title:'Vocabulario de la fiesta', emoji:'🎉', xp:25,
      description:'Para romper el hielo con confianza.',
      study:{ vocab:[
        ['Host','Anfitrión/a'],
        ['Guest','Invitado/a'],
        ['Small talk','Conversación ligera'],
        ['To introduce (someone)','Presentar (a alguien)'],
        ['Toast','Brindis'],
        ['Get-together','Reunión informal'],
      ]},
      ex:[
        ['mcq','¿Cómo se dice "anfitrión" en inglés?',['Host','Guest','Toast','Small talk'],0,'"Host" es la persona que organiza la fiesta.','🎉 Llegas a una fiesta y no conoces a nadie.'],
        ['fill','"Let\'s make a ___ to the birthday girl!"',['toast','host','guest','get-together'],0,'"Make a toast" significa brindar por alguien.'],
        ['translate','Traduce: "presentar a alguien"',['To introduce someone','To toast someone','To host someone','To invite someone'],0,'"To introduce someone" es cuando presentas a dos personas.'],
        ['mcq','Quieres hablar de temas ligeros para romper el hielo. ¿Cómo se llama eso?',['Small talk','Toast','Host','Guest'],0,'"Small talk" es la conversación informal típica al conocer gente.'],
        ['arrange','Ordena: [know / how / you / host / the / do]',['How do you know the host','Do you know how the host','The host do you know how','How the host do you know'],0,'"How do you know the host?" es una pregunta clásica para romper el hielo.'],
      ],
    },
    { id:'sit_party_phrases', level:'A2', title:'Frases para socializar', emoji:'💬', xp:25,
      description:'De saludar a despedirte con estilo.',
      study:{ vocab:[
        ['How do you know the host?','¿Cómo conoces al anfitrión?'],
        ['What do you like to do in your free time?','¿Qué te gusta hacer en tu tiempo libre?'],
        ['That sounds interesting!','¡Eso suena interesante!'],
        ['Can I introduce you to...?','¿Te puedo presentar a...?'],
        ['It was lovely talking to you.','Fue un placer hablar contigo.'],
      ]},
      ex:[
        ['mcq','Conoces a alguien nuevo en la fiesta. ¿Qué preguntas para empezar?',['How do you know the host?','It was lovely talking to you.','Can I introduce you to...?','That sounds interesting!'],0,'Es una pregunta natural para romper el hielo en una fiesta.','🎉 Estás junto a alguien que no conoces.'],
        ['fill','"What do you ___ to do in your free time?"',['like','make','have','go'],0,'"What do you like to do...?" pregunta por sus intereses o hobbies.'],
        ['mcq','Alguien te cuenta algo interesante. ¿Cómo reaccionas amablemente?',['That sounds interesting!','It was lovely talking to you.','How do you know the host?','Can I introduce you to...?'],0,'"That sounds interesting!" muestra interés genuino en lo que cuentan.'],
        ['translate','Traduce: "Fue un placer hablar contigo."',['It was lovely talking to you.','That sounds interesting.','How do you know the host?','Can I introduce you to my friend?'],0,'Es la despedida educada típica al terminar una charla en una fiesta.'],
        ['mcq','Quieres presentar a dos amigos entre sí. ¿Qué dices?',['Can I introduce you to my friend?','That sounds interesting!','How do you know the host?','It was lovely talking to you.'],0,'"Can I introduce you to...?" es la forma de presentar a alguien.'],
      ],
    },
    { id:'sit_party_dialogue', level:'A2', title:'Diálogo: conociendo gente', emoji:'🗣️', xp:30,
      description:'Sigue una charla casual de principio a fin.',
      study:{ grammar:[
        ['Preguntas abiertas para conversar','Las preguntas con "What/How" invitan a respuestas más largas que las de sí/no — ideales para el small talk.','What do you do for a living? → ¿A qué te dedicas?'],
      ]},
      ex:[
        ['mcq','Alguien te dice: "Hi! I don\'t think we\'ve met. I\'m Sam." ¿Qué haces primero?',['Te presentas también','Le pides la cuenta','Le preguntas la fecha límite','Le preguntas si es una emergencia'],0,'Cuando alguien se presenta, lo natural es presentarte también.','🎬 Diálogo — alguien se te acerca en la fiesta.'],
        ['mcq','Sam pregunta: "So, how do you know Maria?" (la anfitriona). ¿Qué te está preguntando?',['Cómo conoces a la anfitriona','Dónde vives','Qué estudias','A qué hora es la fiesta'],0,'Te pregunta la conexión que tienes con la anfitriona de la fiesta.','🎬 Diálogo — sigue la conversación.'],
        ['fill','Quieres saber más de sus intereses: "What do you like ___ in your free time?"',['to do','doing','do','done'],0,'"What do you like to do...?" usa "to do" (infinitivo) después de "like".'],
        ['translate','Traduce: "No creo que nos hayamos conocido antes."',['I don\'t think we\'ve met before.','I don\'t think this is fresh.','I don\'t think it is included.','I don\'t think you are allergic.'],0,'Frase típica para presentarte a alguien nuevo en una fiesta.'],
        ['speaking','Simula que conoces a alguien nuevo en una fiesta: preséntate, pregunta cómo conoce al anfitrión y despídete con cortesía. (mínimo 25 palabras)',[],['host','free time','lovely'],'Una buena respuesta incluye presentación, una pregunta sobre el anfitrión y una despedida cortés.'],
      ],
    },
  ],

  university: [
    { id:'sit_university_vocab', level:'B1', title:'Vocabulario universitario', emoji:'🎓', xp:25,
      description:'Términos clave para trámites y clases.',
      study:{ vocab:[
        ['Enrollment','Matrícula / inscripción'],
        ['Course','Curso / asignatura'],
        ['Professor','Profesor/a'],
        ['Assignment / deadline','Tarea / fecha límite'],
        ['Campus','Campus'],
        ['Tuition','Matrícula (costo)'],
      ]},
      ex:[
        ['mcq','¿Cómo se dice "matrícula" (inscripción) en inglés?',['Enrollment','Campus','Tuition','Course'],0,'"Enrollment" es el proceso de inscribirte a un curso o programa.','🎓 Estás en la oficina de administración de la universidad.'],
        ['fill','"When does ___ close?" (para inscribirte a tiempo)',['enrollment','tuition','campus','course'],0,'"When does enrollment close?" pregunta la fecha límite para inscribirte.'],
        ['translate','Traduce: "profesor"',['Professor','Course','Campus','Tuition'],0,'"Professor" es quien imparte las clases universitarias.'],
        ['mcq','Preguntas cuánto cuesta estudiar allí. ¿Qué palabra usas?',['Tuition','Campus','Enrollment','Assignment'],0,'"Tuition" se refiere al costo de la matrícula/estudios.'],
        ['arrange','Ordena: [this / course / about / information / like / I / would]',['I would like information about this course','Would I like information about this course','Information I would like about this course','About this course I would like information'],0,'"I would like information about this course" pide información de forma educada.'],
      ],
    },
    { id:'sit_university_phrases', level:'B1', title:'Frases para trámites', emoji:'💬', xp:25,
      description:'Pregunta por cursos, requisitos y plazos.',
      study:{ vocab:[
        ['I would like information about this course.','Quisiera información sobre este curso.'],
        ['What are the entry requirements?','¿Cuáles son los requisitos de admisión?'],
        ['When does enrollment close?','¿Cuándo cierra la inscripción?'],
        ['Could you explain the schedule?','¿Podría explicarme el horario?'],
        ['Is there financial aid?','¿Hay ayuda financiera disponible?'],
      ]},
      ex:[
        ['mcq','Llegas a la oficina de admisiones interesado en un curso. ¿Qué dices?',['I would like information about this course.','Is there financial aid?','When does enrollment close?','Could you explain the schedule?'],0,'Es la forma natural de iniciar la consulta sobre un curso.','🎓 Entras a la oficina de admisiones.'],
        ['fill','"What are the entry ___?"',['requirements','deadlines','courses','campuses'],0,'"Entry requirements" son los requisitos para ser admitido.'],
        ['mcq','No tienes suficiente dinero para pagar todo. ¿Qué preguntas?',['Is there financial aid?','What are the entry requirements?','Could you explain the schedule?','When does enrollment close?'],0,'"Is there financial aid?" pregunta por becas o ayudas económicas.'],
        ['translate','Traduce: "¿Cuándo cierra la inscripción?"',['When does enrollment close?','What are the entry requirements?','Is there financial aid?','Could you explain the schedule?'],0,'"When does enrollment close?" pregunta por el plazo límite de inscripción.'],
        ['mcq','El administrativo dice: "Enrollment closes on Friday." ¿Qué acabas de entender?',['El plazo de inscripción termina el viernes','El curso empieza el viernes','La beca se paga el viernes','El profesor llega el viernes'],0,'"Enrollment closes on Friday" indica la fecha límite de inscripción.'],
      ],
    },
    { id:'sit_university_dialogue', level:'B1', title:'Diálogo: en administración', emoji:'🗣️', xp:30,
      description:'Sigue una consulta académica completa.',
      study:{ grammar:[
        ['Preguntas indirectas con "Could you explain...?"','Suena más formal y educado que una pregunta directa — ideal en trámites.','Could you explain how the payment works? → ¿Podría explicarme cómo funciona el pago?'],
      ]},
      ex:[
        ['mcq','Administrativo: "How can I help you today?" ¿Qué te está preguntando?',['En qué te puede ayudar','Cuál es tu curso favorito','Dónde vives','Cuánto dinero tienes'],0,'Es una pregunta abierta para saber qué necesitas.','🎬 Diálogo — llegas a la ventanilla de administración.'],
        ['mcq','Tú: "I would like information about the English course." Administrativo: "Sure, it starts in September." ¿Qué acabas de entender?',['Cuándo empieza el curso','Cuánto cuesta el curso','Quién es el profesor','Dónde está el campus'],0,'"It starts in September" indica la fecha de inicio del curso.','🎬 Diálogo — pides información del curso.'],
        ['fill','Preguntas por el costo: "___ is the tuition for this course?"',['How much','How many','How often','How long'],0,'"How much is the tuition?" pregunta por el precio de la matrícula.'],
        ['translate','Traduce: "¿Podría explicarme el horario de clases?"',['Could you explain the class schedule?','Could you explain the entry requirements?','Is there financial aid?','When does enrollment close?'],0,'"Could you explain...?" pide una explicación de forma educada.'],
        ['writing','Escribe un breve diálogo (mínimo 25 palabras) donde pides información de un curso, preguntas los requisitos y el plazo de inscripción.',[],['course','requirements','enrollment'],'Debe incluir pedir información del curso, preguntar requisitos y el plazo de inscripción.'],
      ],
    },
  ],

};

/* Devuelve el banco de lecciones (ya normalizado con buildLessons) para una
   situación concreta, en el idioma que el usuario está aprendiendo. Si no
   hay contenido para ese idioma todavía, devuelve un array vacío — la UI
   muestra un estado vacío amistoso, igual que hace renderLessons() con los
   idiomas sin banco en js/lessons-data/. */
const _situationLessonCache = {};
function getSituationLessons(situationKey, langCode){
  const code = (langCode || (typeof state!=='undefined' && state.lang && state.lang.code) || 'EN').toUpperCase();
  const cacheKey = `${code}:${situationKey}`;
  if(!_situationLessonCache[cacheKey]){
    const raw = (window.SITUATION_LESSON_BANKS[code] && window.SITUATION_LESSON_BANKS[code][situationKey]) || [];
    _situationLessonCache[cacheKey] = (typeof buildLessons==='function') ? buildLessons(raw) : raw;
  }
  return _situationLessonCache[cacheKey];
}

// Todas las lecciones de TODAS las situaciones para el idioma activo, en un
// único array plano — es lo que necesita LessonEngine.start() para buscar
// por id sin importar de qué situación viene (ver el cambio en lessons.js).
function getAllSituationLessonsFlat(langCode){
  const code = (langCode || (typeof state!=='undefined' && state.lang && state.lang.code) || 'EN').toUpperCase();
  return SITUATIONS.flatMap(s => getSituationLessons(s.key, code));
}
