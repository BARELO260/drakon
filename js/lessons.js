/* ═══════════════════════════════════════════════════════════
   lessons.js — Sistema de lecciones de inglés práctico
   Drakón v5.0 — Reescrito completamente
   ═══════════════════════════════════════════════════════════
   Estructura:
     · ENGLISH_LESSONS   → array de lecciones por nivel
     · LessonEngine      → motor de ejercicios (vidas, progreso, navegación)
     · renderLessons()   → renderiza la lista de lecciones en el tab
     · startLesson(id)   → lanza una lección
   ═══════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════
   BANCO DE LECCIONES — INGLÉS PRÁCTICO
   Niveles: A1 · A2 · B1 · B2
   Tipos de ejercicio:
     'mcq'        → multiple choice (4 opciones)
     'translate'  → traduce la frase (opciones)
     'fill'       → completa el espacio en blanco
     'arrange'    → ordena las palabras para formar una frase
     'listen_mcq' → escucha y elige (usa texto como audio mock)
   ════════════════════════════════════════════════════════════ */

const ENGLISH_LESSONS = [

  /* ══════════════════════════════════════
     A1 — PRINCIPIANTE ABSOLUTO
  ══════════════════════════════════════ */
  {
    id: 'a1_greetings',
    level: 'A1',
    title: 'Saludos y presentaciones',
    emoji: '👋',
    description: 'Aprende a saludar y presentarte en inglés.',
    xp: 30,
    exercises: [
      {
        type: 'mcq',
        question: '¿Cómo se dice "Buenos días" en inglés?',
        context: '☀️ Son las 9 de la mañana. Llegas a la oficina y ves a un compañero.',
        options: ['Good morning', 'Good night', 'Good evening', 'Goodbye'],
        correct: 0,
        explanation: '"Good morning" se usa desde que amanece hasta el mediodía. "Good afternoon" es de 12 a 6pm, y "Good evening" de 6pm en adelante.'
      },
      {
        type: 'mcq',
        question: 'Alguien te dice "How are you?". ¿Cuál es la respuesta más común?',
        context: '💬 Te encuentras a un conocido en la calle.',
        options: ["I'm fine, thank you!", 'I am a student', 'My name is María', 'See you later'],
        correct: 0,
        explanation: '"I\'m fine, thank you!" es la respuesta estándar. También puedes decir "I\'m good, thanks!" o "Not bad, thanks!"'
      },
      {
        type: 'fill',
        question: 'Completa la presentación: "Hi! ___ name is Carlos. I ___ from Mexico."',
        options: ['My / am', 'I / is', 'Your / are', 'His / am'],
        correct: 0,
        explanation: 'Para hablar de ti mismo usas "My" (mi) y "am" (primera persona del verbo to be). → "My name is Carlos. I am from Mexico."'
      },
      {
        type: 'translate',
        question: 'Traduce al inglés: "Mucho gusto en conocerte."',
        options: ['Nice to meet you!', 'How old are you?', 'Where are you from?', 'See you tomorrow!'],
        correct: 0,
        explanation: '"Nice to meet you!" es la frase estándar cuando conoces a alguien. También se dice "Pleased to meet you!" en contextos más formales.'
      },
      {
        type: 'mcq',
        question: '¿Qué significa "What\'s your name?"',
        context: '🏫 Un nuevo compañero de clase te pregunta algo.',
        options: ['¿Cómo te llamas?', '¿De dónde eres?', '¿Cuántos años tienes?', '¿Dónde vives?'],
        correct: 0,
        explanation: '"What\'s your name?" = "¿Cómo te llamas?". Respuesta: "My name is ___" o simplemente "I\'m ___".'
      },
      {
        type: 'arrange',
        question: 'Ordena las palabras: [am / I / teacher / a]',
        options: ['I am a teacher', 'A I am teacher', 'Teacher am I a', 'Am I a teacher'],
        correct: 0,
        explanation: 'En inglés el orden es: Sujeto + Verbo + Complemento. → "I am a teacher." (Yo soy un/a profesor/a.)'
      },
      {
        type: 'mcq',
        question: '¿Cómo se dice "adiós" de forma informal en inglés?',
        context: '👋 Te despides de un amigo al final del día.',
        options: ['Bye!', 'Hello!', 'Sorry!', 'Please!'],
        correct: 0,
        explanation: '"Bye!" es informal y muy común. También puedes decir "See you!", "See you later!", "Take care!" o "Catch you later!"'
      },
      {
        type: 'fill',
        question: '"___ are you?" — "I\'m 25 years old."',
        options: ['How old', 'How many', 'What age', 'Who'],
        correct: 0,
        explanation: '"How old are you?" = ¿Cuántos años tienes? Respuesta: "I\'m [número] years old." No olvides "years old" al final.'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿De dónde eres?"',
        options: ['Where are you from?', 'How are you?', 'What do you do?', 'Who are you?'],
        correct: 0,
        explanation: '"Where are you from?" = ¿De dónde eres? Respuesta: "I\'m from [país/ciudad]." Por ejemplo: "I\'m from Spain."'
      },
      {
        type: 'mcq',
        question: 'Tu jefe entra a la reunión. ¿Cuál es el saludo más apropiado?',
        context: '🏢 Contexto formal, son las 3 de la tarde.',
        options: ['Good afternoon!', 'Hey!', "What's up?", 'Yo!'],
        correct: 0,
        explanation: '"Good afternoon!" es formal y apropiado para las tardes (12pm–6pm). En contextos informales con amigos puedes decir "Hey!" o "What\'s up?"'
      },
      {
        type: 'fill',
        question: '"Nice to meet you!" — "Nice to meet ___, too!"',
        options: ['you', 'me', 'him', 'them'],
        correct: 0,
        explanation: 'La respuesta correcta es "Nice to meet you, too!" — repites "you" porque te refieres a la persona que tienes enfrente.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [from / I / Mexico / am]',
        options: ['I am from Mexico', 'Mexico am I from', 'From Mexico I am', 'Am I from Mexico'],
        correct: 0,
        explanation: '"I am from Mexico." — Sujeto (I) + Verbo (am) + Complemento (from Mexico). En inglés el sujeto siempre va primero en oraciones afirmativas.'
      },
    ]
  },

  {
    id: 'a1_numbers_colors',
    level: 'A1',
    title: 'Números, colores y objetos',
    emoji: '🔢',
    description: 'Aprende números del 1 al 100, colores básicos y objetos cotidianos.',
    xp: 30,
    exercises: [
      {
        type: 'mcq',
        question: '¿Cómo se dice el número 15 en inglés?',
        options: ['Fifteen', 'Fifty', 'Five', 'Fiveteen'],
        correct: 0,
        explanation: '15 = fifteen. Ojo: 50 = fifty. Los números del 13 al 19 terminan en "-teen": thirteen (13), fourteen (14), fifteen (15)...'
      },
      {
        type: 'mcq',
        question: '¿Qué color es "red"?',
        context: '🍎 Piensa en una manzana madura.',
        options: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
        correct: 0,
        explanation: 'Red = rojo. Otros colores básicos: blue (azul), green (verde), yellow (amarillo), white (blanco), black (negro).'
      },
      {
        type: 'translate',
        question: 'Traduce: "Hay tres sillas azules en la sala."',
        options: [
          'There are three blue chairs in the living room.',
          'There is three blue chair in the living room.',
          'There are three chairs blue in the living room.',
          'Is three blue chairs in the living room.'
        ],
        correct: 0,
        explanation: '"There are" (hay — plural), "three" (tres), "blue chairs" (sillas azules — el adjetivo va ANTES del sustantivo en inglés), "in the living room" (en la sala).'
      },
      {
        type: 'fill',
        question: '"How ___ books do you have?" — "I have five books."',
        options: ['many', 'much', 'old', 'big'],
        correct: 0,
        explanation: '"How many" se usa con cosas que se pueden contar (libros, personas, objetos). "How much" se usa con cosas incontables (agua, dinero, tiempo).'
      },
      {
        type: 'mcq',
        question: '¿Qué significa "a pen"?',
        context: '✏️ Estás en clase y necesitas escribir algo.',
        options: ['un bolígrafo', 'un lápiz', 'un cuaderno', 'una regla'],
        correct: 0,
        explanation: '"A pen" = un bolígrafo/pluma. "A pencil" = un lápiz. "A notebook" = un cuaderno. "A ruler" = una regla.'
      },
      {
        type: 'mcq',
        question: '¿Cómo se dice "la mesa" en inglés?',
        options: ['The table', 'The chair', 'The desk', 'The door'],
        correct: 0,
        explanation: '"The table" = la mesa. "The chair" = la silla. "The desk" = el escritorio. "The door" = la puerta. "The" es el artículo definido en inglés.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [car / have / red / a / I]',
        options: ['I have a red car', 'I have a car red', 'Red car I have a', 'A red I have car'],
        correct: 0,
        explanation: '"I have a red car." — En inglés el adjetivo (red) siempre va ANTES del sustantivo (car). No como en español: "un coche ROJO" → en inglés: "a RED car".'
      },
      {
        type: 'fill',
        question: '"___ is your favorite color?" — "My favorite color is blue."',
        options: ['What', 'How', 'Where', 'Who'],
        correct: 0,
        explanation: '"What is your favorite color?" = ¿Cuál es tu color favorito? "What" (qué/cuál) se usa para preguntar sobre cosas, colores, nombres, etc.'
      },
      {
        type: 'mcq',
        question: '¿Cuánto es "twenty + thirty" en inglés?',
        options: ['Fifty', 'Forty', 'Sixty', 'Seventy'],
        correct: 0,
        explanation: '20 (twenty) + 30 (thirty) = 50 (fifty). Recuerda: 40 = forty, 60 = sixty, 70 = seventy, 80 = eighty, 90 = ninety.'
      },
      {
        type: 'translate',
        question: 'Traduce: "El cielo es azul y el sol es amarillo."',
        options: [
          'The sky is blue and the sun is yellow.',
          'The sky is yellow and the sun is blue.',
          'Sky is blue and sun is yellow.',
          'The sky are blue and the sun are yellow.'
        ],
        correct: 0,
        explanation: '"The sky is blue" — usamos "is" (singular). "The sun is yellow" — también singular. Los adjetivos no cambian de forma en inglés (no hay masculino/femenino).'
      },
    ]
  },

  {
    id: 'a1_daily_routine',
    level: 'A1',
    title: 'Rutina diaria',
    emoji: '⏰',
    description: 'Habla sobre tu día: mañana, tarde y noche.',
    xp: 35,
    exercises: [
      {
        type: 'mcq',
        question: '¿Cómo se dice "Me despierto a las 7"?',
        options: ['I wake up at 7', 'I woke up at 7', 'I wake at 7 up', 'I am wake up at 7'],
        correct: 0,
        explanation: '"I wake up at 7." — "wake up" es un phrasal verb que significa despertar(se). El presente simple sin "s" al final porque el sujeto es "I".'
      },
      {
        type: 'fill',
        question: '"Every morning I ___ breakfast at home."',
        options: ['have', 'has', 'am having', 'to have'],
        correct: 0,
        explanation: 'Con "I" usamos "have" (no "has"). "Has" va con he/she/it. → "I have breakfast" = desayuno. Otros verbos de rutina: eat, drink, go, take.'
      },
      {
        type: 'mcq',
        question: '¿Qué significa "I go to work by bus"?',
        context: '🚌 Describes cómo llegas al trabajo.',
        options: ['Voy al trabajo en autobús', 'Trabajo en un autobús', 'El autobús va al trabajo', 'Voy a casa en autobús'],
        correct: 0,
        explanation: '"I go to work by bus" = Voy al trabajo en autobús. "By + transporte": by bus, by car, by train, by subway/metro. A pie = on foot.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [at / I / usually / lunch / 1pm / have]',
        options: ['I usually have lunch at 1pm', 'I have usually lunch at 1pm', 'Usually I have at 1pm lunch', 'I lunch have usually at 1pm'],
        correct: 0,
        explanation: '"I usually have lunch at 1pm." — Los adverbios de frecuencia (usually, always, often, never) van ANTES del verbo principal pero DESPUÉS del verbo "to be".'
      },
      {
        type: 'translate',
        question: 'Traduce: "Me ducho por las mañanas."',
        options: ['I take a shower in the morning.', 'I take a bath in the morning.', 'I shower to the morning.', 'In the morning I am showering.'],
        correct: 0,
        explanation: '"I take a shower" = me ducho. "I take a bath" = me baño (en bañera). "In the morning" = por las mañanas. Recuerda: en inglés americano se dice "take a shower", en British también "have a shower".'
      },
      {
        type: 'mcq',
        question: '¿Cuál es la forma correcta para decir tu horario?',
        context: '📅 Te preguntan a qué hora terminas de trabajar.',
        options: ['I finish work at 6 o\'clock', 'I finish work in 6 o\'clock', 'I finish work on 6 o\'clock', 'I finish work at the 6'],
        correct: 0,
        explanation: 'Para horas usamos la preposición "at": at 6 o\'clock, at noon, at midnight, at 8:30. "In" se usa para períodos: in the morning, in the afternoon. "On" para días: on Monday.'
      },
      {
        type: 'fill',
        question: '"After dinner, I ___ TV for an hour."',
        options: ['watch', 'see', 'look', 'view'],
        correct: 0,
        explanation: '"Watch TV" = ver la televisión. En inglés: "watch" para TV/películas/deportes en directo, "see" para películas en el cine, "look at" para observar algo estático.'
      },
      {
        type: 'mcq',
        question: '¿Qué significa "I go to bed early on weekdays"?',
        options: [
          'Me acuesto temprano entre semana',
          'Me levanto temprano entre semana',
          'Trabajo temprano entre semana',
          'Como temprano entre semana'
        ],
        correct: 0,
        explanation: '"Go to bed" = acostarse. "Early" = temprano. "Weekdays" = días entre semana (lunes a viernes). "Weekend" = fin de semana.'
      },
      {
        type: 'translate',
        question: 'Traduce: "Los sábados duermo hasta tarde."',
        options: [
          'On Saturdays I sleep late.',
          'On Saturday I sleep until late.',
          'In Saturdays I sleep late.',
          'Saturdays I sleeping late.'
        ],
        correct: 0,
        explanation: '"On Saturdays" (los sábados — usamos "on" con días). "I sleep late" = duermo hasta tarde. También correcto: "I sleep in on Saturdays" (phrasal verb coloquial).'
      },
      {
        type: 'arrange',
        question: 'Ordena: [never / I / coffee / drink]',
        options: ['I never drink coffee', 'Never I drink coffee', 'I drink never coffee', 'I drink coffee never'],
        correct: 0,
        explanation: '"I never drink coffee." — "Never" (nunca) es un adverbio de frecuencia. Va ANTES del verbo principal. Frecuencia: always (100%) > usually > often > sometimes > rarely > never (0%).'
      },
      {
        type: 'mcq',
        question: '¿Qué frase describe mejor esta imagen? 🧑‍💻 [persona trabajando en computadora]',
        options: ['He is working on his computer', 'He works on his computer always', 'He worked on computer', 'He is work on his computer'],
        correct: 0,
        explanation: '"He is working" = present continuous (estar haciendo algo AHORA). Se forma con: am/is/are + verbo-ING. Se usa para acciones que ocurren en este momento.'
      },
      {
        type: 'fill',
        question: '"___ the evening, I read books or listen to music."',
        options: ['In', 'At', 'On', 'By'],
        correct: 0,
        explanation: '"In the evening" = por las tardes/noches. Las preposiciones de tiempo: IN the morning/afternoon/evening, AT night/noon/midnight, ON Monday/weekends.'
      },
    ]
  },

  {
    id: 'a1_food_drink',
    level: 'A1',
    title: 'Comida y restaurantes',
    emoji: '🍽️',
    description: 'Pide comida, habla de lo que te gusta y maneja un menú en inglés.',
    xp: 35,
    exercises: [
      {
        type: 'mcq',
        question: 'Estás en un restaurante. ¿Cómo pides la cuenta?',
        context: '🍽️ Ya terminaste de comer y quieres pagar.',
        options: ['Can I have the bill, please?', 'Can I have the menu, please?', 'I want to pay now!', 'Give me the money!'],
        correct: 0,
        explanation: '"Can I have the bill, please?" = ¿Me puede traer la cuenta? En EE.UU. también se dice "check" en vez de "bill". Siempre añade "please" para sonar educado.'
      },
      {
        type: 'fill',
        question: '"I ___ like some water, please." (pedir amablemente)',
        options: ['would', 'will', 'am', 'can'],
        correct: 0,
        explanation: '"I would like" = me gustaría / quisiera. Es más educado que "I want". Forma corta: "I\'d like some water, please." Úsalo siempre en restaurantes y tiendas.'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Cuál es el plato del día?"',
        options: [
          "What's the dish of the day?",
          "What's the meal today?",
          "What is today special?",
          "Which dish is today?"
        ],
        correct: 0,
        explanation: '"What\'s the dish of the day?" o también "What\'s today\'s special?" — ambas son correctas y muy usadas en restaurantes de países angloparlantes.'
      },
      {
        type: 'mcq',
        question: '¿Qué significa "I\'m a vegetarian. I don\'t eat meat."?',
        options: [
          'Soy vegetariano. No como carne.',
          'Me gusta la carne. Como mucha.',
          'Soy vegetariano. No como verduras.',
          'No soy vegetariano. Como carne.'
        ],
        correct: 0,
        explanation: '"I\'m a vegetarian" = soy vegetariano/a. "I don\'t eat meat" = no como carne. "Don\'t" = do not, la negación en presente simple con I/you/we/they.'
      },
      {
        type: 'mcq',
        question: '¿Cómo se pregunta si hay opciones sin gluten?',
        context: '🌾 Tienes intolerancia al gluten.',
        options: [
          'Do you have gluten-free options?',
          'Have you gluten-free food?',
          'Is there no gluten?',
          'You have options without gluten?'
        ],
        correct: 0,
        explanation: '"Do you have...?" es la forma correcta de preguntar en presente simple. También puedes decir "Is there anything gluten-free on the menu?"'
      },
      {
        type: 'arrange',
        question: 'Ordena: [spicy / like / food / I / don\'t]',
        options: ["I don't like spicy food", "I like don't spicy food", "Don't I like spicy food", "I don't spicy like food"],
        correct: 0,
        explanation: '"I don\'t like spicy food." — Negación: I + don\'t + like + objeto. Recuerda que en inglés el adjetivo (spicy) va antes del sustantivo (food).'
      },
      {
        type: 'fill',
        question: '"For dessert, I\'ll ___ the chocolate cake."',
        options: ['have', 'take', 'eat', 'want'],
        correct: 0,
        explanation: 'En restaurantes es muy común decir "I\'ll have the..." para pedir algo. "I\'ll have the chocolate cake" suena natural y educado. "I want" suena más brusco.'
      },
      {
        type: 'mcq',
        question: 'El mesero pregunta: "How would you like your steak?" ¿Qué está preguntando?',
        options: [
          '¿Cómo quieres el filete (término de cocción)?',
          '¿Te gustó el filete?',
          '¿Quieres pedir un filete?',
          '¿Cuántos filetes quieres?'
        ],
        correct: 0,
        explanation: 'Pregunta por el punto de cocción: rare (rojo/jugoso), medium rare, medium, well done (bien cocido). Muy importante saberlo en restaurantes angloparlantes.'
      },
      {
        type: 'translate',
        question: 'Traduce: "Quisiera una mesa para dos personas, por favor."',
        options: [
          "I'd like a table for two, please.",
          "I want a table for two people, please.",
          "Give me a table for two, please.",
          "Can I have two tables, please?"
        ],
        correct: 0,
        explanation: '"I\'d like a table for two, please." — "I\'d like" (I would like) es la forma más educada y natural de pedir. "A table for two" = una mesa para dos.'
      },
      {
        type: 'fill',
        question: '"Excuse me, this soup is ___. Can I have a fresh one?" (la sopa está fría)',
        options: ['cold', 'cool', 'hot', 'warm'],
        correct: 0,
        explanation: '"Cold" = frío (temperatura baja, incómodo). "Cool" = fresco/agradablemente frío. "Hot" = caliente. "Warm" = tibio/cálido. Si la sopa no está bien, dices "it\'s cold".'
      },
      {
        type: 'mcq',
        question: '¿Cómo dejas propina y dices que la comida estuvo deliciosa?',
        context: '😋 Acabas de comer en un restaurante en Londres.',
        options: [
          '"The food was delicious! Keep the change."',
          '"Food good. Here money."',
          '"I liked the food. Give change."',
          '"Delicious! No change needed."'
        ],
        correct: 0,
        explanation: '"The food was delicious!" = ¡La comida estuvo deliciosa! "Keep the change" = quédese con el cambio (al dejar propina). Muy natural y educado.'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Puedo ver la carta de vinos?"',
        options: [
          'Can I see the wine list?',
          'I want to see wine card?',
          'Can I look the wine list?',
          'Give me the wine list?'
        ],
        correct: 0,
        explanation: '"Can I see the wine list?" — "see" es correcto aquí. También: "Could I have a look at the wine list?" (más formal). "Wine list" = carta de vinos.'
      },
    ]
  },

  /* ══════════════════════════════════════
     A2 — BÁSICO
  ══════════════════════════════════════ */
  {
    id: 'a2_past_simple',
    level: 'A2',
    title: 'Pasado simple: contar experiencias',
    emoji: '📅',
    description: 'Aprende a hablar de lo que hiciste ayer, la semana pasada y en el pasado.',
    xp: 40,
    exercises: [
      {
        type: 'mcq',
        question: '¿Cómo se dice "Ayer fui al supermercado"?',
        options: [
          'Yesterday I went to the supermarket.',
          'Yesterday I go to the supermarket.',
          'Yesterday I gone to the supermarket.',
          'Yesterday I goed to the supermarket.'
        ],
        correct: 0,
        explanation: '"Go" es irregular: go → went. Verbos irregulares comunes: go→went, buy→bought, eat→ate, see→saw, have→had. ¡Son los más usados en conversación!'
      },
      {
        type: 'fill',
        question: '"Last night I ___ a great movie on Netflix."',
        options: ['watched', 'watch', 'watching', 'have watched'],
        correct: 0,
        explanation: '"Watched" es el pasado simple de "watch" (verbo regular: +ed). "Last night" nos indica que es pasado. Verbos regulares: watch→watched, play→played, work→worked.'
      },
      {
        type: 'translate',
        question: 'Traduce: "No salí de casa el fin de semana pasado."',
        options: [
          "I didn't go out last weekend.",
          "I don't go out last weekend.",
          "I not went out last weekend.",
          "I didn't went out last weekend."
        ],
        correct: 0,
        explanation: 'Negación en pasado simple: didn\'t + verbo en BASE (infinitivo sin "to"). ¡Importante! Después de "didn\'t" el verbo vuelve a su forma base: "didn\'t go" (NO "didn\'t went").'
      },
      {
        type: 'mcq',
        question: 'Tu amigo te pregunta: "Did you enjoy the concert?" ¿Cómo respondes que sí?',
        options: [
          'Yes, I did! It was amazing!',
          'Yes, I enjoyed.',
          'Yes, I do.',
          'Yes, it did.'
        ],
        correct: 0,
        explanation: 'En pasado simple, las respuestas cortas usan "did/didn\'t": "Yes, I did!" / "No, I didn\'t." Añadir "It was amazing!" hace la respuesta más natural.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [did / you / where / go / last / summer?]',
        options: [
          'Where did you go last summer?',
          'Where you did go last summer?',
          'Where did you went last summer?',
          'Did you where go last summer?'
        ],
        correct: 0,
        explanation: 'Preguntas en pasado: Palabra interrogativa + did + sujeto + verbo base. → "Where did you go?" El verbo después de "did" siempre es la forma base (go, not went).'
      },
      {
        type: 'fill',
        question: '"She ___ (buy) a new dress for the party."',
        options: ['bought', 'buyed', 'buy', 'was buying'],
        correct: 0,
        explanation: '"Buy" es irregular: buy → bought. Más irregulares esenciales: think→thought, bring→brought, teach→taught, catch→caught.'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Cuándo llegaste a Madrid?"',
        options: [
          'When did you arrive in Madrid?',
          'When you arrived in Madrid?',
          'When did you arrived in Madrid?',
          'Since when you arrive in Madrid?'
        ],
        correct: 0,
        explanation: '"When did you arrive?" — preposición "in" con ciudades y países: arrive IN Madrid, arrive IN Spain. "Arrive AT" se usa con lugares específicos: arrive AT the airport.'
      },
      {
        type: 'mcq',
        question: '¿Cuál frase está correctamente escrita en pasado?',
        options: [
          'We had a great time at the party.',
          'We have a great time at the party.',
          'We haved a great time at the party.',
          'We did have great time at the party.'
        ],
        correct: 0,
        explanation: '"Have" → "had" (irregular). "We had a great time" = lo pasamos genial / nos divertimos mucho. Una frase muy útil para hablar de experiencias pasadas.'
      },
      {
        type: 'fill',
        question: '"___ you call me last night? I didn\'t hear my phone."',
        options: ['Did', 'Do', 'Were', 'Have'],
        correct: 0,
        explanation: 'Preguntas en pasado simple: Did + sujeto + verbo base. "Did you call...?" = ¿Me llamaste...? Respuesta: "Yes, I did." / "No, I didn\'t."'
      },
      {
        type: 'mcq',
        question: 'Estás contando tus vacaciones. ¿Cuál frase es correcta?',
        context: '🏖️ Vacaciones en Cancún, México.',
        options: [
          'I went to Cancún and stayed at a beautiful hotel.',
          'I go to Cancún and stay at a beautiful hotel.',
          'I went to Cancún and I stay at a beautiful hotel.',
          'I was go to Cancún and stay at a beautiful hotel.'
        ],
        correct: 0,
        explanation: 'Cuando describes una secuencia de eventos pasados, todos los verbos van en pasado: "went... stayed..." Las dos acciones ocurrieron en el mismo viaje pasado.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [didn\'t / she / yesterday / work]',
        options: [
          "She didn't work yesterday.",
          "She work didn't yesterday.",
          "Yesterday she didn't worked.",
          "Didn't she work yesterday"
        ],
        correct: 0,
        explanation: '"She didn\'t work yesterday." — Negación: sujeto + didn\'t + verbo base. El adverbio de tiempo (yesterday) va al final. ¡No cambies "work" a "worked" después de didn\'t!'
      },
      {
        type: 'translate',
        question: 'Traduce: "El año pasado aprendí mucho inglés."',
        options: [
          'Last year I learned a lot of English.',
          'Last year I learn a lot of English.',
          'The last year I learned much English.',
          'Last year I did learned a lot of English.'
        ],
        correct: 0,
        explanation: '"Last year" (el año pasado) → pasado simple. "A lot of" = mucho/a (con sustantivos contables e incontables). "Much" sólo se usa en negativas/preguntas: "I didn\'t learn much."'
      },
    ]
  },

  {
    id: 'a2_shopping',
    level: 'A2',
    title: 'De compras',
    emoji: '🛍️',
    description: 'Compra ropa, pide tallas, pregunta precios y devuelve productos.',
    xp: 40,
    exercises: [
      {
        type: 'mcq',
        question: 'Estás en una tienda de ropa. ¿Cómo preguntas si tienen tu talla?',
        context: '👕 Ves una camiseta que te gusta.',
        options: [
          'Do you have this in a medium?',
          'Have you this in medium size?',
          'Is there this in medium?',
          'Can I have this medium?'
        ],
        correct: 0,
        explanation: '"Do you have this in a medium/large/small?" es la pregunta estándar. Las tallas en inglés: XS, S (small), M (medium), L (large), XL, XXL.'
      },
      {
        type: 'fill',
        question: '"Can I ___ this on? I\'d like to try it before buying."',
        options: ['try', 'put', 'wear', 'take'],
        correct: 0,
        explanation: '"Try on" = probarse (ropa). "Can I try this on?" = ¿Me puedo probar esto? También puedes decir "Is there a fitting room?" = ¿Hay probadores?'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Cuánto cuesta este abrigo?"',
        options: [
          'How much does this coat cost?',
          'How many costs this coat?',
          'What is the price for this coat?',
          'How much is costing this coat?'
        ],
        correct: 0,
        explanation: '"How much does it cost?" = ¿Cuánto cuesta? También muy común: "How much is it?" o "What\'s the price?" "Cost" usa "does" en preguntas (presente simple, 3ª persona).'
      },
      {
        type: 'mcq',
        question: 'El dependiente dice: "It\'s on sale, 30% off." ¿Qué significa?',
        options: [
          'Está rebajado, con 30% de descuento.',
          'Cuesta 30% más que antes.',
          'Hay 30 unidades disponibles.',
          'El precio original era 30.'
        ],
        correct: 0,
        explanation: '"On sale" = en oferta/rebajado. "30% off" = 30% de descuento. Vocabulario útil: discount (descuento), sale (rebaja), half price (mitad de precio), buy one get one free (2x1).'
      },
      {
        type: 'arrange',
        question: 'Ordena: [I / this / like / would / in / black]',
        options: [
          "I would like this in black.",
          "I like would this in black.",
          "This I would like black in.",
          "Would I like this in black."
        ],
        correct: 0,
        explanation: '"I would like this in black." = Quisiera esto en negro. Muy útil para pedir un producto en otro color o talla: "I would like this in [color/size]."'
      },
      {
        type: 'mcq',
        question: '¿Cómo preguntas si aceptan tarjeta de crédito?',
        options: [
          'Do you accept credit cards?',
          'Can you take my credit card?',
          'Is credit card okay?',
          'Do you have credit card?'
        ],
        correct: 0,
        explanation: '"Do you accept credit cards?" es la forma más común. También: "Can I pay by card?" o "Do you take card payments?" Recuerda que en muchos países "card" significa tanto débito como crédito.'
      },
      {
        type: 'fill',
        question: '"I\'d like to ___ this shirt. It has a stain on it." (devolver)',
        options: ['return', 'bring back', 'give back', 'take back'],
        correct: 0,
        explanation: '"Return" = devolver (en tiendas). También "bring back" es correcto coloquialmente. "I\'d like to return this" = Quisiera devolver esto. "It has a stain" = tiene una mancha.'
      },
      {
        type: 'mcq',
        question: 'La dependienta dice: "Sorry, we\'re out of stock in your size." ¿Qué pasó?',
        options: [
          'No tienen tu talla disponible.',
          'Tu talla no existe en esa ropa.',
          'La tienda está cerrada.',
          'El producto es muy caro.'
        ],
        correct: 0,
        explanation: '"Out of stock" = agotado / sin existencias. "In your size" = en tu talla. Otras frases: "in stock" (disponible), "back in stock soon" (disponible pronto), "sold out" (agotado).'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Tienen algo más barato?"',
        options: [
          'Do you have anything cheaper?',
          'Do you have something more cheap?',
          'Have you anything less expensive?',
          'Is there anything more cheap?'
        ],
        correct: 0,
        explanation: '"Anything cheaper" — "cheap" → comparativo: "cheaper". En preguntas y negativas usamos "anything" (algo), no "something". "Do you have anything...?" es muy natural.'
      },
      {
        type: 'fill',
        question: '"The fitting rooms are ___ the back of the store." (al fondo)',
        options: ['at', 'in', 'on', 'by'],
        correct: 0,
        explanation: '"At the back" = al fondo. Preposiciones de lugar en tiendas: at the front (al frente), in the middle (en el medio), on the right/left (a la derecha/izquierda), upstairs/downstairs (arriba/abajo).'
      },
      {
        type: 'mcq',
        question: 'Quieres saber si la camiseta se puede lavar a máquina. ¿Cómo lo preguntas?',
        options: [
          'Can this be machine washed?',
          'Can I wash this in machine?',
          'Is this washable in machine?',
          'Can this go in a washing machine?'
        ],
        correct: 0,
        explanation: '"Can this be machine washed?" o "Is this machine washable?" — ambas son correctas. También puedes mirar la etiqueta de cuidado (care label) que suele tener símbolos universales.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [receipt / I / a / need / please / ,]',
        options: [
          "I need a receipt, please.",
          "Please I need a receipt.",
          "I please need a receipt.",
          "A receipt I need, please."
        ],
        correct: 0,
        explanation: '"I need a receipt, please." — "Receipt" (recibo/ticket). Siempre pide el recibo porque lo necesitas si quieres devolver algo. "Please" al final suena natural y educado.'
      },
    ]
  },

  {
    id: 'a2_travel',
    level: 'A2',
    title: 'Viajes y transporte',
    emoji: '✈️',
    description: 'Navega aeropuertos, hoteles y transporte público en inglés.',
    xp: 40,
    exercises: [
      {
        type: 'mcq',
        question: '¿Cómo preguntas dónde está la puerta de embarque?',
        context: '✈️ Estás en el aeropuerto con tu boarding pass.',
        options: [
          'Where is gate B7, please?',
          'Where is the boarding door B7?',
          'How do I find gate B7?',
          'Both A and C are correct.'
        ],
        correct: 3,
        explanation: 'Tanto "Where is gate B7?" como "How do I find gate B7?" son correctas y naturales. En aeropuertos puedes preguntar directamente por el número de puerta.'
      },
      {
        type: 'fill',
        question: '"I\'d like to ___ a room for two nights, please."',
        options: ['book', 'reserve', 'make', 'All of the above'],
        correct: 3,
        explanation: '"Book a room" y "reserve a room" son igualmente correctas y muy comunes. "Make a reservation" también funciona. Las tres opciones son naturales en hoteles.'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Está incluido el desayuno?"',
        options: [
          'Is breakfast included?',
          'Does breakfast include?',
          'Is breakfast including?',
          'Breakfast is included?'
        ],
        correct: 0,
        explanation: '"Is breakfast included?" — pasiva del verbo "include". En hoteles también preguntas: "Is Wi-Fi included?", "Is parking included?", "Is there a gym?" (¿Hay gimnasio?)'
      },
      {
        type: 'mcq',
        question: 'En la aduana te preguntan: "What is the purpose of your visit?" ¿Qué te están preguntando?',
        options: [
          '¿Cuál es el motivo de tu visita?',
          '¿Cuánto tiempo te quedas?',
          '¿Tienes algo que declarar?',
          '¿De dónde vienes?'
        ],
        correct: 0,
        explanation: '"Purpose of your visit" = motivo de tu visita. Respuestas comunes: "Tourism/vacation" (turismo), "Business" (negocios), "Visiting family/friends" (visitar familia/amigos).'
      },
      {
        type: 'arrange',
        question: 'Ordena: [a / to / ticket / I\'d / buy / like / one-way]',
        options: [
          "I'd like to buy a one-way ticket.",
          "I'd like to buy a ticket one-way.",
          "I like to would buy a one-way ticket.",
          "I'd buy like to a one-way ticket."
        ],
        correct: 0,
        explanation: '"One-way ticket" = billete de ida. "Round-trip ticket" (AmE) / "Return ticket" (BrE) = billete de ida y vuelta. "I\'d like to buy a round-trip ticket to London."'
      },
      {
        type: 'mcq',
        question: 'Tu vuelo ha sido cancelado. ¿Qué le dices al agente de la aerolínea?',
        options: [
          'My flight has been cancelled. Can you rebook me on the next available flight?',
          'My flight is cancelled. I want another flight now.',
          'The flight doesn\'t go. What to do?',
          'Cancel! I need new flight!'
        ],
        correct: 0,
        explanation: '"My flight has been cancelled. Can you rebook me...?" — Usa present perfect para explicar la situación y "can you" para hacer la petición educadamente. "Rebook" = reservar de nuevo.'
      },
      {
        type: 'fill',
        question: '"Excuse me, does this bus ___ to the city center?"',
        options: ['go', 'arrive', 'travel', 'drive'],
        correct: 0,
        explanation: '"Does this bus go to...?" es la forma más natural de preguntar la ruta. También: "Does this train stop at...?" (¿Para este tren en...?). "Go to" indica destino.'
      },
      {
        type: 'translate',
        question: 'Traduce: "Perdí mi equipaje. ¿Qué debo hacer?"',
        options: [
          "I've lost my luggage. What should I do?",
          "I lose my luggage. What I should do?",
          "My luggage is lost. What I do?",
          "I lost luggage. What should I do?"
        ],
        correct: 0,
        explanation: '"I\'ve lost" (present perfect) es más natural que simple past para algo que acaba de ocurrir. "Luggage" = equipaje (incontable, no se dice "luggages"). "Should" = deber.'
      },
      {
        type: 'mcq',
        question: 'El hotel dice que tu habitación no está lista (check-in a las 3pm y son las 12pm). ¿Qué preguntas?',
        options: [
          'Can I leave my luggage here while I wait?',
          'Can I stay in the lobby until 3?',
          'Where can I eat nearby?',
          'All of the above are fine.',
        ],
        correct: 3,
        explanation: 'Las tres son preguntas perfectamente válidas en esta situación. "Can I leave my luggage here?" (dejar el equipaje), "stay in the lobby" (esperar en el lobby), preguntar dónde comer. ¡Sé flexible!'
      },
      {
        type: 'fill',
        question: '"The check-___ time is 12pm and check-___ is at 3pm."',
        options: ['out / in', 'in / out', 'off / on', 'on / off'],
        correct: 0,
        explanation: '"Check-out" (dejar la habitación) es a las 12pm. "Check-in" (llegar y registrarse) a las 3pm. En hoteles: early check-in (llegada anticipada), late check-out (salida tardía).'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Cuánto tarda el tren al aeropuerto?"',
        options: [
          'How long does the train to the airport take?',
          'How much time takes the train to the airport?',
          'How long is the train to the airport?',
          'How many minutes the train to the airport?'
        ],
        correct: 0,
        explanation: '"How long does it take?" = ¿Cuánto tarda/toma? Muy útil para preguntar duración. Respuesta: "It takes about 30 minutes." / "It\'s a 30-minute ride."'
      },
      {
        type: 'mcq',
        question: '¿Qué significa "The flight is delayed by two hours"?',
        options: [
          'El vuelo tiene un retraso de dos horas.',
          'El vuelo fue cancelado dos horas antes.',
          'El vuelo llega dos horas antes.',
          'El vuelo dura dos horas.'
        ],
        correct: 0,
        explanation: '"Delayed" = retrasado. "By two hours" = por dos horas. Vocabulario de aeropuerto: delayed (retrasado), on time (a tiempo), cancelled (cancelado), gate (puerta), boarding (embarque).'
      },
    ]
  },

  /* ══════════════════════════════════════
     B1 — INTERMEDIO
  ══════════════════════════════════════ */
  {
    id: 'b1_present_perfect',
    level: 'B1',
    title: 'Present Perfect: experiencias y noticias',
    emoji: '🎯',
    description: 'Domina el present perfect para hablar de experiencias, noticias recientes y cambios.',
    xp: 50,
    exercises: [
      {
        type: 'mcq',
        question: '¿Cuál es la diferencia entre estas dos frases? A) "I have eaten sushi." B) "I ate sushi yesterday."',
        options: [
          'A habla de experiencia de vida; B de cuándo ocurrió exactamente.',
          'A es más formal que B.',
          'B es incorrecto en inglés.',
          'No hay diferencia real.'
        ],
        correct: 0,
        explanation: 'Present perfect (A) = experiencia de vida, sin tiempo específico. Past simple (B) = momento concreto en el pasado. "Have you ever eaten sushi?" / "Yes, I ate it last year."'
      },
      {
        type: 'fill',
        question: '"I ___ never ___ (visit) New York, but I really want to go."',
        options: ["have / visited", "did / visit", "have / visit", "had / visited"],
        correct: 0,
        explanation: '"I have never visited New York." — Con "never/ever/already/yet" usamos present perfect. La estructura: have/has + participio pasado. "Visited" es el participio de "visit".'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Alguna vez has probado la comida etíope?"',
        options: [
          'Have you ever tried Ethiopian food?',
          'Did you ever try Ethiopian food?',
          'Have you ever eat Ethiopian food?',
          'Did you try ever Ethiopian food?'
        ],
        correct: 0,
        explanation: '"Have you ever...?" = ¿Alguna vez has...? — Present perfect con "ever". Respuesta: "Yes, I have!" o "No, I haven\'t, but I\'d love to try it!"'
      },
      {
        type: 'mcq',
        question: 'Tu amigo dice: "I\'ve just arrived at the airport." ¿Qué significa "just" aquí?',
        options: [
          'Que acaba de llegar (hace muy poco)',
          'Que llegó exactamente a tiempo',
          'Que solo llegó él, sin nadie más',
          'Que llegó justo antes del vuelo'
        ],
        correct: 0,
        explanation: '"Just" con present perfect = acaba de / hace muy poco. "I\'ve just eaten" = acabo de comer. "She\'s just called" = acaba de llamar. Indica una acción muy reciente.'
      },
      {
        type: 'fill',
        question: '"The team ___ (win) three championships so far this season."',
        options: ['has won', 'won', 'have won', 'had won'],
        correct: 0,
        explanation: '"The team has won" — sujeto singular (team) → "has". "So far" (hasta ahora) es una señal clave del present perfect. Otras señales: already, yet, recently, lately, since, for.'
      },
      {
        type: 'mcq',
        question: '¿Cuál frase es correcta?',
        options: [
          'She has lived in Paris for five years.',
          'She lives in Paris since five years.',
          'She has lived in Paris since five years.',
          'She lived in Paris for five years.'
        ],
        correct: 0,
        explanation: '"For" + período de tiempo (for five years, for two months). "Since" + punto de inicio (since 2019, since Monday). "She has lived here for five years" = lleva cinco años viviendo aquí (y sigue).'
      },
      {
        type: 'translate',
        question: 'Traduce: "Todavía no he terminado el informe."',
        options: [
          "I haven't finished the report yet.",
          "I didn't finish the report yet.",
          "I haven't finished yet the report.",
          "I still don't finish the report."
        ],
        correct: 0,
        explanation: '"Yet" en negativas = todavía no. Va al FINAL de la frase. "Yet" en preguntas = ya: "Have you finished yet?" (¿Ya terminaste?). "Already" en afirmativas = ya: "I\'ve already finished."'
      },
      {
        type: 'fill',
        question: '"___ you heard the news? They\'re opening a new restaurant downtown!"',
        options: ['Have', 'Did', 'Are', 'Do'],
        correct: 0,
        explanation: '"Have you heard...?" — Present perfect para noticias recientes o algo que acaba de ocurrir. "Have you heard?" suena más natural que "Did you hear?" cuando la noticia es muy reciente.'
      },
      {
        type: 'mcq',
        question: 'Dices: "This is the best pizza I have ever eaten." ¿Qué expresas?',
        options: [
          'Es la mejor pizza que has comido en toda tu vida.',
          'Es la mejor pizza que comiste el año pasado.',
          'Comiste una pizza muy buena hace tiempo.',
          'Quieres comer más pizza.'
        ],
        correct: 0,
        explanation: '"The best/worst/most [adj] I have ever [verbo]" = es la mayor/mejor/peor experiencia de mi vida. Superlativo + present perfect con "ever" = experiencia de vida máxima.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [changed / a / lot / the / has / city]',
        options: [
          'The city has changed a lot.',
          'The city changed has a lot.',
          'Has the city changed a lot.',
          'The city has a lot changed.'
        ],
        correct: 0,
        explanation: '"The city has changed a lot." — Present perfect para hablar de cambios hasta el presente. "A lot" va al final. También: "The city has changed significantly/dramatically."'
      },
      {
        type: 'translate',
        question: 'Traduce: "Llevan tres horas esperando."',
        options: [
          "They've been waiting for three hours.",
          "They have waited for three hours.",
          "They are waiting since three hours.",
          "They wait for three hours."
        ],
        correct: 0,
        explanation: '"They\'ve been waiting" = present perfect continuous. Se usa para acciones que empezaron en el pasado y siguen ahora (con énfasis en la duración). "For three hours" indica cuánto tiempo.'
      },
      {
        type: 'mcq',
        question: '¿Cuándo usarías "I\'ve been to Japan" vs "I\'m going to Japan"?',
        options: [
          '"I\'ve been to Japan" = ya fui; "I\'m going" = voy a ir en el futuro.',
          '"I\'ve been to Japan" = quiero ir; "I\'m going" = ya fui.',
          'Son la misma idea expresada diferente.',
          '"I\'ve been" = vivo allí; "I\'m going" = visité.'
        ],
        correct: 0,
        explanation: '"I\'ve been to Japan" (present perfect) = fui y volví, es una experiencia pasada. "I\'m going to Japan" (present continuous) = tengo planes de ir. Contextos muy diferentes.'
      },
    ]
  },

  {
    id: 'b1_opinions',
    level: 'B1',
    title: 'Opiniones y debate',
    emoji: '💬',
    description: 'Expresa opiniones, acuerdo y desacuerdo con fluidez y educación.',
    xp: 50,
    exercises: [
      {
        type: 'mcq',
        question: '¿Cuál es la forma más educada de expresar una opinión contraria?',
        context: '🤝 Estás en una reunión de trabajo.',
        options: [
          "I see your point, but I think there might be another way to look at this.",
          "You're wrong. That's a bad idea.",
          "No, I disagree completely.",
          "That's not right at all."
        ],
        correct: 0,
        explanation: '"I see your point, but..." = reconoces su punto de vista antes de presentar el tuyo. Esto mantiene la conversación constructiva. En inglés profesional, el "softening" es fundamental.'
      },
      {
        type: 'fill',
        question: '"___ my opinion, social media has both positive and negative effects."',
        options: ['In', 'From', 'On', 'At'],
        correct: 0,
        explanation: '"In my opinion" = en mi opinión. Otras formas de introducir tu opinión: "I think...", "I believe...", "To my mind...", "As far as I\'m concerned...", "Personally, I feel that..."'
      },
      {
        type: 'translate',
        question: 'Traduce: "Estoy completamente de acuerdo contigo."',
        options: [
          "I completely agree with you.",
          "I am complete in agreement with you.",
          "I agree you completely.",
          "I'm agreeing completely with you."
        ],
        correct: 0,
        explanation: '"I completely agree with you." — También: "I totally agree!", "Absolutely!", "Exactly!", "That\'s a great point!", "You\'re absolutely right." Para acuerdo parcial: "I agree up to a point..."'
      },
      {
        type: 'mcq',
        question: 'Alguien dice algo con lo que no estás de acuerdo. ¿Cuál respuesta es más efectiva en un debate?',
        options: [
          '"That\'s an interesting perspective. However, I\'d argue that..."',
          '"No, you\'re wrong."',
          '"I don\'t think so."',
          '"That doesn\'t make sense."'
        ],
        correct: 0,
        explanation: '"That\'s an interesting perspective. However, I\'d argue that..." — Primero valoras su punto (engagement), luego presentas tu contraargumento (however). Esta estructura es clave en debates formales.'
      },
      {
        type: 'fill',
        question: '"What do you ___ about working from home? I think it\'s great!"',
        options: ['think', 'say', 'feel about', 'believe'],
        correct: 0,
        explanation: '"What do you think about...?" = ¿Qué piensas de...? Es la pregunta de opinión más natural en inglés. También: "What\'s your take on...?" (más informal) o "What are your thoughts on...?"'
      },
      {
        type: 'arrange',
        question: 'Ordena: [it / that / not / seem / does / fair]',
        options: [
          "That doesn't seem fair.",
          "It doesn't seem that fair.",
          "That seem doesn't fair.",
          "Doesn't that seem fair."
        ],
        correct: 0,
        explanation: '"That doesn\'t seem fair." = Eso no parece justo. "Doesn\'t seem" es más suave que "isn\'t" — sirve para expresar opinión sin ser muy absoluto. "It doesn\'t seem fair" también es correcta (opción B).'
      },
      {
        type: 'translate',
        question: 'Traduce: "Por un lado... por otro lado..."',
        options: [
          'On one hand... on the other hand...',
          'On one side... on the other side...',
          'In one hand... in the other hand...',
          'For one hand... for the other hand...'
        ],
        correct: 0,
        explanation: '"On one hand... on the other hand..." — esta expresión es esencial para presentar dos perspectivas en un debate o ensayo. Nota: "on the other hand" siempre va con "the".'
      },
      {
        type: 'mcq',
        question: 'Te preguntan tu opinión sobre el cambio climático. ¿Cómo estructuras tu respuesta en inglés?',
        options: [
          '"Well, I think it\'s one of the most pressing issues we face today. In my view, we need to act urgently."',
          '"Climate change is bad. We must stop it."',
          '"I agree with climate change being a problem."',
          '"Yes, climate change. It\'s happening."'
        ],
        correct: 0,
        explanation: 'La primera respuesta usa: "I think" (opinión) + "In my view" (refuerzo) + "we need to" (recomendación). Es articulada, usa conectores y desarrolla la idea. Las otras son demasiado cortas o incorrectas.'
      },
      {
        type: 'fill',
        question: '"I\'m not ___ sure about that. Can you explain your reasoning?"',
        options: ['entirely', 'complete', 'totally not', 'full'],
        correct: 0,
        explanation: '"I\'m not entirely sure" = no estoy del todo seguro/a. "Entirely" suaviza el desacuerdo y abre el diálogo. Otros modificadores: "I\'m not completely convinced", "I\'m somewhat skeptical about that."'
      },
      {
        type: 'mcq',
        question: '¿Cuál frase expresa mejor un desacuerdo parcial?',
        options: [
          '"You make a fair point, although I\'d say the situation is a bit more complex."',
          '"Yes, but no."',
          '"I partially agree but also disagree at the same time."',
          '"Maybe yes, maybe no, it\'s complicated."'
        ],
        correct: 0,
        explanation: '"You make a fair point, although..." — reconoces el argumento ("fair point") y introduces un matiz ("although"). Esto demuestra pensamiento crítico y fluidez. Muy valorado en inglés B1+.'
      },
      {
        type: 'translate',
        question: 'Traduce: "Desde mi punto de vista, la tecnología ha mejorado nuestra calidad de vida."',
        options: [
          'From my point of view, technology has improved our quality of life.',
          'From my point of view, technology improved our quality of life.',
          'In my point of view, technology has improved our quality of life.',
          'From my point of view, technology improve our quality of life.'
        ],
        correct: 0,
        explanation: '"From my point of view" = desde mi punto de vista. "Has improved" (present perfect) = ha mejorado (con efecto hasta el presente). "Quality of life" = calidad de vida.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [both / arguments / valid / there / are / sides / on]',
        options: [
          'There are valid arguments on both sides.',
          'Both sides there are valid arguments.',
          'There are arguments valid on both sides.',
          'Valid arguments are there on both sides.'
        ],
        correct: 0,
        explanation: '"There are valid arguments on both sides." — Reconocer ambos lados de un debate es señal de madurez comunicativa. Otras formas: "Both sides have merit.", "I can see both perspectives."'
      },
    ]
  },

  /* ══════════════════════════════════════
     B2 — INTERMEDIO ALTO
  ══════════════════════════════════════ */
  {
    id: 'b2_conditionals',
    level: 'B2',
    title: 'Condicionales: situaciones reales e imaginarias',
    emoji: '🔀',
    description: 'Domina los condicionales para hablar de posibilidades, hipótesis y arrepentimientos.',
    xp: 60,
    exercises: [
      {
        type: 'mcq',
        question: '¿Cuál es la diferencia entre estas frases? A) "If it rains, I\'ll stay home." B) "If it rained, I would stay home."',
        options: [
          'A es una situación real posible; B es una hipótesis imaginaria.',
          'A es pasado y B es futuro.',
          'A es más formal que B.',
          'No hay diferencia real en inglés moderno.'
        ],
        correct: 0,
        explanation: 'Condicional 1 (If + present, will + infinitivo): situación posible/real. Condicional 2 (If + past simple, would + infinitivo): hipótesis imaginaria o poco probable. ¡La diferencia es clave!'
      },
      {
        type: 'fill',
        question: '"If I ___ (be) the president, I would invest more in education."',
        options: ['were', 'was', 'am', 'would be'],
        correct: 0,
        explanation: '"If I were..." — En condicional 2, con el verbo "to be" se usa "were" para TODAS las personas (incluido I, he, she, it). "Were" es la forma formal correcta. "Was" es coloquialmente aceptado pero "were" es el estándar.'
      },
      {
        type: 'translate',
        question: 'Traduce: "Si hubiera estudiado más, habría aprobado el examen."',
        options: [
          "If I had studied more, I would have passed the exam.",
          "If I studied more, I would pass the exam.",
          "If I have studied more, I will have passed the exam.",
          "If I had studied more, I would pass the exam."
        ],
        correct: 0,
        explanation: 'Condicional 3: If + past perfect (had + participio), would have + participio. Se usa para hablar de situaciones pasadas que NO ocurrieron y sus consecuencias imaginarias. Expresa arrepentimiento o especulación.'
      },
      {
        type: 'mcq',
        question: 'Tu amigo dice: "I wish I hadn\'t eaten so much." ¿Qué expresa?',
        options: [
          'Se arrepiente de haber comido tanto.',
          'Desea comer más en el futuro.',
          'Está feliz de haber comido tanto.',
          'No quiere comer más hoy.'
        ],
        correct: 0,
        explanation: '"I wish + past perfect" = me arrepiento de algo pasado que no puedo cambiar. "I wish I hadn\'t eaten so much" = ojalá no hubiera comido tanto. "I wish + past simple" = deseo sobre el presente: "I wish I spoke Spanish."'
      },
      {
        type: 'fill',
        question: '"___ you happen to find my keys, please call me right away."',
        options: ['Should', 'If', 'Would', 'Were'],
        correct: 0,
        explanation: '"Should you find my keys..." = "If you should find my keys..." — es una forma formal/escrita del condicional 1 con inversión. Se invierte el sujeto y el auxiliar: Should + sujeto + infinitivo.'
      },
      {
        type: 'mcq',
        question: 'Una persona te aconseja: "If I were you, I\'d apply for that job." ¿Qué te están diciendo?',
        options: [
          'En tu lugar, yo solicitaría ese trabajo.',
          'Quieren solicitar ese trabajo.',
          'Te dicen que ya solicitaron ese trabajo.',
          'Creen que no deberías solicitar ese trabajo.'
        ],
        correct: 0,
        explanation: '"If I were you..." = en tu lugar / yo que tú... Es una de las formas más comunes de dar consejo en inglés. Se usa condicional 2 aunque sea consejo real, porque te pones hipotéticamente en la posición del otro.'
      },
      {
        type: 'translate',
        question: 'Traduce: "A menos que llueva, iremos a la playa."',
        options: [
          "Unless it rains, we'll go to the beach.",
          "If it doesn't rain, we'll go to the beach.",
          "Both A and B are correct.",
          "Except if it rains, we will go to the beach."
        ],
        correct: 2,
        explanation: 'Tanto "unless it rains" (a menos que llueva) como "if it doesn\'t rain" (si no llueve) son correctas y significan lo mismo. "Unless" = "if not" — muy útil para no repetir siempre "if".'
      },
      {
        type: 'fill',
        question: '"What ___ you do if you won the lottery?" "I\'d travel the world!"',
        options: ['would', 'will', 'do', 'did'],
        correct: 0,
        explanation: '"What would you do if...?" — La pregunta está en condicional 2 (situación imaginaria). La respuesta también usa "would" (I\'d = I would). "Won" (pasado de win) confirma que es hipotético.'
      },
      {
        type: 'mcq',
        question: '¿Cuál frase expresa un deseo imposible o muy improbable sobre el presente?',
        options: [
          "I wish I could fly.",
          "I hope I can fly.",
          "If I fly, I will be happy.",
          "I want to fly someday."
        ],
        correct: 0,
        explanation: '"I wish I could fly." — "wish + could" expresa un deseo imposible o muy improbable en el presente. "I hope I can" es para cosas posibles. "Wish" + modal en pasado = fantasía/deseo inalcanzable.'
      },
      {
        type: 'arrange',
        question: 'Ordena: [had / he / earlier / arrived / if / caught / he / would / have / the / train]',
        options: [
          'If he had arrived earlier, he would have caught the train.',
          'He would have caught the train if he had arrived earlier.',
          'Both A and B are correct.',
          'If he arrived earlier, he would catch the train.'
        ],
        correct: 2,
        explanation: 'En el condicional 3, la cláusula "if" puede ir al principio o al final de la oración. Ambas son igualmente correctas. Cuando la cláusula "if" va primero, se usa coma. Cuando va al final, no se necesita coma.'
      },
      {
        type: 'translate',
        question: 'Traduce: "Si siguieras practicando, mejorarías mucho más rápido."',
        options: [
          "If you kept practicing, you would improve much faster.",
          "If you keep practicing, you will improve much faster.",
          "If you had kept practicing, you would have improved faster.",
          "If you would keep practicing, you would improve faster."
        ],
        correct: 0,
        explanation: '"If you kept practicing, you would improve" — condicional 2 (hipotético en el presente/futuro). Nota: "If you keep practicing, you will improve" (Condicional 1) también es válido si se ve como posibilidad real.'
      },
      {
        type: 'mcq',
        question: '"Had I known about the traffic, I would have left earlier." ¿Qué estructura gramatical es esta?',
        options: [
          'Condicional 3 con inversión formal (sin "if")',
          'Condicional 2 con "had"',
          'Past perfect simple',
          'Mixed conditional'
        ],
        correct: 0,
        explanation: '"Had I known..." = "If I had known..." — inversión formal del condicional 3. Se omite "if" y se invierte el sujeto con el auxiliar "had". Común en inglés escrito formal. "Were I to..." y "Should you..." funcionan igual.'
      },
    ]
  },

  {
    id: 'b2_professional',
    level: 'B2',
    title: 'Inglés profesional y entrevistas',
    emoji: '💼',
    description: 'Domina el inglés en contextos laborales, reuniones y entrevistas de trabajo.',
    xp: 60,
    exercises: [
      {
        type: 'mcq',
        question: 'En una entrevista te preguntan: "Tell me about yourself." ¿Cuál es la mejor respuesta?',
        context: '🎯 Primera pregunta de tu entrevista para un puesto de marketing.',
        options: [
          '"I\'m a marketing professional with 5 years of experience. I specialize in digital campaigns and have a track record of increasing engagement by 40%."',
          '"Well, I was born in 1990 and I studied business... I have a dog named Max..."',
          '"I\'m a hard worker and I really need this job."',
          '"I already sent my CV. You can read it there."'
        ],
        correct: 0,
        explanation: '"Tell me about yourself" = habla de tu trayectoria profesional relevante. Estructura ideal: título/rol → años de experiencia → especialidad → logro concreto. Breve, profesional y con datos.'
      },
      {
        type: 'fill',
        question: '"I\'d like to ___ on the progress we\'ve made in Q3." (en una reunión)',
        options: ['update you', 'tell you', 'say you', 'inform for you'],
        correct: 0,
        explanation: '"Update you on..." = informarte sobre / darte una actualización sobre. Vocabulario de reuniones: brief you on (ponerte al día), walk you through (explicarte paso a paso), touch base on (abordar brevemente).'
      },
      {
        type: 'translate',
        question: 'Traduce: "Eso está fuera de mi área de responsabilidad."',
        options: [
          "That's outside my area of responsibility.",
          "That's not in my area.",
          "I don't have responsibility for that.",
          "That is not my problem."
        ],
        correct: 0,
        explanation: '"That\'s outside my area of responsibility" es profesional y claro. También: "That\'s not within my remit" (BrE, muy formal) o "That falls outside my scope." Evita "that\'s not my problem" en contexto laboral.'
      },
      {
        type: 'mcq',
        question: 'Tu jefe dice: "Let\'s circle back to this." ¿Qué quiere decir?',
        options: [
          'Retomar este tema más tarde.',
          'Ir en círculos con el argumento.',
          'Cancelar la discusión.',
          'Repetir lo que se dijo antes.'
        ],
        correct: 0,
        explanation: '"Circle back" = retomar algo más adelante. Jerga corporativa común: "touch base" (ponerse en contacto), "synergy" (sinergia), "bandwidth" (capacidad/tiempo disponible), "deliverable" (entregable), "moving forward" (de ahora en adelante).'
      },
      {
        type: 'fill',
        question: '"Could you please ___ me in on what was discussed at yesterday\'s meeting?"',
        options: ['fill', 'put', 'give', 'catch'],
        correct: 0,
        explanation: '"Fill me in on..." = ponerme al día sobre / contarme lo que pasó. Muy usado en contextos laborales. "Could you fill me in?" suena educado y profesional.'
      },
      {
        type: 'mcq',
        question: '¿Cómo respondes profesionalmente a un email que pide algo que no puedes hacer?',
        options: [
          '"Thank you for reaching out. Unfortunately, I\'m unable to accommodate this request at this time. However, I\'d be happy to suggest an alternative..."',
          '"No, I can\'t do that."',
          '"This is not possible."',
          '"Sorry but no, too busy."'
        ],
        correct: 0,
        explanation: 'Un rechazo profesional tiene tres partes: 1) agradecer el contacto, 2) declinar con "unfortunately I\'m unable to", 3) ofrecer alternativa. Esto mantiene la relación profesional positiva.'
      },
      {
        type: 'arrange',
        question: 'Ordena (email formal): [to / writing / I / you / regarding / am / the / proposal / submitted / recently]',
        options: [
          'I am writing to you regarding the recently submitted proposal.',
          'I am writing you to regarding the proposal recently submitted.',
          'Writing to you I am regarding the recently submitted proposal.',
          'Regarding the proposal I am writing to you recently submitted.'
        ],
        correct: 0,
        explanation: '"I am writing to you regarding..." — apertura clásica de email formal. Otras: "I am writing in response to...", "I am writing to follow up on...", "I hope this email finds you well."'
      },
      {
        type: 'translate',
        question: 'Traduce: "¿Podría enviarme eso por escrito?"',
        options: [
          'Could you send that to me in writing?',
          'Can you write me that?',
          'Could you send me that written?',
          'Would you put in writing that for me?'
        ],
        correct: 0,
        explanation: '"Could you send that to me in writing?" — "in writing" = por escrito (email, carta). "Could" es más formal y educado que "can" en contextos profesionales.'
      },
      {
        type: 'mcq',
        question: 'En una reunión te preguntan tu opinión sobre una propuesta que no entiendes bien. ¿Qué dices?',
        options: [
          '"Could you clarify what you mean by that? I want to make sure I fully understand before commenting."',
          '"I don\'t understand. Explain again."',
          '"No comment."',
          '"I agree with everything."'
        ],
        correct: 0,
        explanation: '"Could you clarify...?" = ¿Podría aclarar...? Pedir aclaraciones muestra inteligencia, no ignorancia. "Before commenting" indica responsabilidad y profesionalismo. Nunca finjas entender algo que no entiendes.'
      },
      {
        type: 'fill',
        question: '"We need to ___ a decision by Friday, or we\'ll miss the deadline."',
        options: ['make', 'take', 'do', 'reach'],
        correct: 0,
        explanation: '"Make a decision" = tomar una decisión. En inglés: MAKE a decision/mistake/effort/progress, TAKE action/responsibility/notes, DO work/business/research. Estas combinaciones (collocations) son esenciales.'
      },
      {
        type: 'mcq',
        question: 'Te piden describir una fortaleza en una entrevista. ¿Cuál respuesta es más efectiva?',
        options: [
          '"One of my key strengths is problem-solving. For example, in my last role I identified a workflow inefficiency that was costing the team 3 hours per week, and I implemented a solution that reduced that to 20 minutes."',
          '"I\'m a hard worker and very dedicated."',
          '"I\'m good at many things, like working in teams and being organized."',
          '"My strength is that I always try my best."'
        ],
        correct: 0,
        explanation: 'La técnica STAR: Situation, Task, Action, Result. Dar ejemplos concretos con datos ("3 hours", "20 minutes") hace la respuesta memorable y creíble. "Hard worker" sin ejemplos no convence a ningún entrevistador.'
      },
      {
        type: 'translate',
        question: 'Traduce: "Les haré saber en cuanto tenga noticias."',
        options: [
          "I'll keep you posted as soon as I hear back.",
          "I will say you when I know something.",
          "I'll tell you when I have news.",
          "As soon as I know, I say you."
        ],
        correct: 0,
        explanation: '"Keep you posted" = mantenerte informado/a. "As soon as I hear back" = en cuanto reciba respuesta. Ambas expresiones son muy profesionales. "Hear back from someone" = recibir respuesta de alguien.'
      },
    ]
  },

];

/* ════════════════════════════════════════════════════════════
   MOTOR DE LECCIONES (LessonEngine)
   Gestiona: vidas, progreso, feedback, navegación
════════════════════════════════════════════════════════════ */
const LessonEngine = {

  /* ── Estado ─────────────────────────── */
  lesson:       null,
  exercises:    [],
  currentIdx:   0,
  lives:        5,
  maxLives:     5,
  correctCount: 0,
  answered:     false,   // bloquea respuesta hasta pulsar "Siguiente"
  xpEarned:     0,

  /* ── Iniciar lección ────────────────── */
  start(lessonId) {
    const lesson = ENGLISH_LESSONS.find(l => l.id === lessonId);
    if (!lesson) return;

    this.lesson       = lesson;
    this.exercises    = lesson.exercises;
    this.currentIdx   = 0;
    this.lives        = this.maxLives;
    this.correctCount = 0;
    this.answered     = false;
    this.xpEarned     = 0;

    goTo('screen-exercise');
    this._updateTopBar();
    this._renderExercise();
  },

  /* ── Barra superior ─────────────────── */
  _updateTopBar() {
    // Progreso
    const pct = (this.currentIdx / this.exercises.length) * 100;
    const fill = document.getElementById('exFill');
    if (fill) fill.style.width = pct + '%';

    // Vidas
    const livesEl = document.getElementById('livesEl');
    if (livesEl) {
      livesEl.innerHTML = '';
      for (let i = 0; i < this.maxLives; i++) {
        const heart = document.createElement('span');
        heart.className = 'life-heart' + (i < this.lives ? '' : ' lost');
        heart.textContent = i < this.lives ? '❤️' : '🖤';
        livesEl.appendChild(heart);
      }
    }
  },

  /* ── Renderizar ejercicio actual ────── */
  _renderExercise() {
    const area = document.getElementById('exArea');
    if (!area) return;

    if (this.currentIdx >= this.exercises.length) {
      this._showFinalResult();
      return;
    }

    this.answered = false;
    const ex = this.exercises[this.currentIdx];
    const progress = `${this.currentIdx + 1} / ${this.exercises.length}`;

    let html = `
      <div class="ex-card">
        <div class="ex-progress-label">${progress}</div>
        ${ex.context ? `<div class="ex-context">${ex.context}</div>` : ''}
        <div class="ex-question">${ex.question}</div>
        <div class="ex-options" id="exOptions">
    `;

    ex.options.forEach((opt, i) => {
      html += `
        <button class="ex-option" id="exOpt-${i}" onclick="LessonEngine.answer(${i})">
          <span class="ex-opt-letter">${['A','B','C','D'][i]}</span>
          <span class="ex-opt-text">${opt}</span>
        </button>
      `;
    });

    html += `
        </div>
        <div class="ex-feedback" id="exFeedback" style="display:none"></div>
        <button class="ex-next-btn" id="exNextBtn" style="display:none"
          onclick="LessonEngine.nextExercise()">
          Siguiente ejercicio →
        </button>
      </div>
    `;

    area.innerHTML = html;
  },

  /* ── Responder ──────────────────────── */
  answer(selectedIdx) {
    if (this.answered) return;
    this.answered = true;

    const ex = this.exercises[this.currentIdx];
    const isCorrect = selectedIdx === ex.correct;

    // Colorear opciones
    for (let i = 0; i < ex.options.length; i++) {
      const btn = document.getElementById('exOpt-' + i);
      if (!btn) continue;
      btn.disabled = true;
      if (i === ex.correct) {
        btn.classList.add('correct');
      } else if (i === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    }

    // Feedback
    const feedback = document.getElementById('exFeedback');
    if (feedback) {
      feedback.style.display = 'block';
      if (isCorrect) {
        this.correctCount++;
        this.xpEarned += Math.floor((this.lesson.xp / this.exercises.length));
        feedback.className = 'ex-feedback correct';
        const msgs = ['¡Correcto! 🎉', '¡Excelente! ⭐', '¡Perfecto! 🔥', '¡Muy bien! 💪', '¡Genial! ✨'];
        feedback.innerHTML = `
          <div class="ex-fb-header">${msgs[Math.floor(Math.random() * msgs.length)]}</div>
          <div class="ex-fb-explanation">${ex.explanation}</div>
        `;
      } else {
        this.lives--;
        feedback.className = 'ex-feedback wrong';
        feedback.innerHTML = `
          <div class="ex-fb-header">Respuesta incorrecta 😕</div>
          <div class="ex-fb-correct">✅ La respuesta correcta es: <strong>${ex.options[ex.correct]}</strong></div>
          <div class="ex-fb-explanation">${ex.explanation}</div>
        `;
      }
    }

    // Mostrar botón siguiente
    const nextBtn = document.getElementById('exNextBtn');
    if (nextBtn) {
      // Si es el último ejercicio, cambia el texto
      if (this.currentIdx === this.exercises.length - 1) {
        nextBtn.textContent = 'Ver resultados 🏆';
      }
      nextBtn.style.display = 'block';
    }

    // Actualizar barra superior
    this._updateTopBar();

    // Si no quedan vidas → mostrar resultado al pulsar "siguiente"
    // (No interrumpimos para que el usuario lea la explicación)
    if (this.lives <= 0) {
      if (nextBtn) {
        nextBtn.textContent = 'Ver resultados 💔';
        nextBtn.classList.add('ex-next-btn--danger');
      }
    }

    // Sonido
    if (typeof playSound === 'function') {
      playSound(isCorrect ? 'correct' : 'wrong');
    }

    // XP parcial (solo si correcto)
    if (isCorrect && typeof gainXP === 'function') {
      gainXP(3, false);
    }
  },

  /* ── Siguiente ejercicio ────────────── */
  nextExercise() {
    if (this.lives <= 0) {
      this._showFinalResult();
      return;
    }

    this.currentIdx++;

    if (this.currentIdx >= this.exercises.length) {
      this._showFinalResult();
      return;
    }

    this._updateTopBar();
    this._renderExercise();

    // Scroll suave arriba
    const area = document.getElementById('exArea');
    if (area) area.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /* ── Resultado final ────────────────── */
  _showFinalResult() {
    const total = this.exercises.length;
    const pct   = Math.round((this.correctCount / total) * 100);
    const won   = this.lives > 0 && pct >= 50;

    // Sonido de fin de lección
    if (typeof playSound === 'function') {
      playSound('win');
    }

    // Marcar lección como completada en el estado
    if (typeof state !== 'undefined') {
      if (!state.lessonsCompleted.includes(this.lesson.id)) {
        state.lessonsCompleted.push(this.lesson.id);
      }
      // Misiones
      if (typeof checkMissions === 'function') checkMissions();
      if (typeof checkAchievements === 'function') checkAchievements();
      if (typeof save === 'function') save();
    }

    // XP total de la lección
    const totalXP = won ? this.lesson.xp : Math.floor(this.lesson.xp * 0.3);
    if (typeof gainXP === 'function') gainXP(totalXP);

    // Pantalla de resultado reutilizando el sistema existente de la app
    const area = document.getElementById('exArea');
    if (!area) return;

    const livesLeft = this.lives;
    const grade = pct >= 95 ? '🏆' : pct >= 80 ? '⭐' : pct >= 60 ? '🎯' : pct >= 40 ? '📈' : '💪';
    const title = pct >= 95 ? '¡PERFECCIÓN ABSOLUTA!' : pct >= 80 ? '¡EXCELENTE TRABAJO!' : pct >= 60 ? '¡MISIÓN COMPLETADA!' : pct >= 40 ? 'BUEN PROGRESO' : '¡SIGUE ENTRENANDO!';
    const livesHtml = Array.from({length: this.maxLives}, (_, i) => i < livesLeft ? '❤️' : '🖤').join('');

    area.innerHTML = `
      <div class="ex-result">
        <div class="ex-result-icon">${grade}</div>
        <div class="ex-result-title">${title}</div>
        <div class="ex-result-lesson">${this.lesson.emoji} ${this.lesson.title}</div>
        <div class="ex-result-stats">
          <div class="ex-stat">
            <div class="ex-stat-val">${this.correctCount}/${total}</div>
            <div class="ex-stat-lbl">Correctas</div>
          </div>
          <div class="ex-stat">
            <div class="ex-stat-val">${pct}%</div>
            <div class="ex-stat-lbl">Precisión</div>
          </div>
          <div class="ex-stat">
            <div class="ex-stat-val">+${totalXP}</div>
            <div class="ex-stat-lbl">XP ganados</div>
          </div>
        </div>
        <div class="ex-result-lives">
          <div class="ex-result-lives-label">Vidas restantes</div>
          <div class="ex-result-lives-hearts">${livesHtml}</div>
        </div>
        ${pct === 100 ? '<div class="ex-result-perfect">⭐ ¡PUNTUACIÓN PERFECTA!</div>' : ''}
        <div class="ex-result-btns">
          <button class="ex-result-btn primary" onclick="LessonEngine.start('${this.lesson.id}')">
            ↺ Repetir lección
          </button>
          <button class="ex-result-btn ghost" onclick="exitEx()">
            ← Volver a lecciones
          </button>
        </div>
      </div>
    `;

    // Completar barra de progreso
    const fill = document.getElementById('exFill');
    if (fill) fill.style.width = '100%';
  },

};

/* ════════════════════════════════════════════════════════════
   RENDER DE LA LISTA DE LECCIONES
   Llamado desde ui.js → switchTab('lessons')
════════════════════════════════════════════════════════════ */
function renderLessons() {
  const container = document.getElementById('lessonList');
  if (!container) return;

  const completedIds = (typeof state !== 'undefined') ? (state.lessonsCompleted || []) : [];

  // Agrupar por nivel
  const levels = ['A1', 'A2', 'B1', 'B2'];
  const levelLabels = {
    A1: '🌱 A1 — Principiante',
    A2: '📗 A2 — Básico',
    B1: '📘 B1 — Intermedio',
    B2: '📙 B2 — Intermedio Alto',
  };

  let html = '';

  levels.forEach(lvl => {
    const lessons = ENGLISH_LESSONS.filter(l => l.level === lvl);
    if (!lessons.length) return;

    html += `<div class="lesson-level-header">${levelLabels[lvl]}</div>`;

    lessons.forEach(lesson => {
      const done = completedIds.includes(lesson.id);
      html += `
        <div class="lesson-card ${done ? 'done' : ''}" onclick="LessonEngine.start('${lesson.id}')">
          <div class="lesson-card-icon">${lesson.emoji}</div>
          <div class="lesson-card-info">
            <div class="lesson-card-title">${lesson.title}</div>
            <div class="lesson-card-meta">
              <span class="lesson-card-lvl">${lesson.level}</span>
              <span class="lesson-card-xp">+${lesson.xp} XP</span>
              <span class="lesson-card-count">${lesson.exercises.length} ejercicios</span>
            </div>
            <div class="lesson-card-desc">${lesson.description}</div>
          </div>
          <div class="lesson-card-status">${done ? '✅' : '▶'}</div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
}

/* ════════════════════════════════════════════════════════════
   FUNCIÓN GLOBAL para salir del ejercicio
   Debe existir como función global (llamada desde HTML)
════════════════════════════════════════════════════════════ */
function exitEx() {
  if (LessonEngine.currentIdx > 0 && LessonEngine.currentIdx < LessonEngine.exercises.length) {
    if (!confirm('¿Salir de la lección? Perderás el progreso de esta sesión.')) return;
  }
  goTo('screen-main');
  switchTab('lessons');
}
