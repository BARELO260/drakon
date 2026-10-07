/* ═══════════════════════════════════════════════════════════
   js/lessons-data/pt.js — Banco de lecciones: PORTUGUÉS (PT)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.PT = [
  {
    id:"pt_a1_greetings", level:"A1", title:"Cumprimentos e apresentações", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en portugués (Brasil).",
    study: {
      vocab: [
        ["Bom dia / Boa noite", "Buenos días / Buenas tardes"],
        ["Oi / Tchau", "Hola / Adiós"],
        ["Prazer!", "¡Encantado/a de conocerte!"],
        ["Meu nome é...", "Me llamo..."],
        ["Como você está?", "¿Cómo estás?", "Respuesta: \"Estou bem, obrigado(a)\""]
      ],
      grammar: [
        ["El verbo \"ser\" en portugués", "Eu sou, você/ele/ela é, nós somos, eles/elas são.", "Eu sou professor. Ela é do Brasil."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Good morning\" en portugués?", ["Bom dia","Boa noite","Boa tarde","Tchau"], 0, "\"Bom dia\" se usa por la mañana. \"Boa tarde\" es de mediodía a la tarde, y \"Boa noite\" de noche.", "☀️ Son las 9 de la mañana y llegas a la oficina."],
      ["mcq", "Alguien te dice \"Como você está?\". ¿Cuál es una respuesta común?", ["Estou bem, obrigado(a)","Meu nome é Paulo","Tenho vinte anos","Até logo"], 0, "\"Estou bem, obrigado(a)\" es la respuesta estándar. También puedes decir \"Bem, e você?\""],
      ["fill", "Completa: \"Oi! Meu nome ___ Ana. Eu ___ do Brasil.\"", ["é / sou","é / és","são / sou","era / sou"], 0, "\"Meu nome é Ana\" (mi nombre es) y \"Eu sou do Brasil\" (yo soy de). Ambas frases usan el verbo \"ser\" en distinta persona."],
      ["translate", "Traduce al portugués: \"Nice to meet you!\"", ["Prazer em conhecê-lo!","Como você se chama?","De onde você é?","Até amanhã!"], 0, "\"Prazer em conhecê-lo!\" (o simplemente \"Prazer!\") es la expresión estándar al conocer a alguien."],
      ["mcq", "¿Qué significa \"Como você se chama?\"?", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"Como você se chama?\" = What's your name? Respuesta: \"Meu nome é ___\" o \"Eu me chamo ___\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["arrange", "Ordena: [sou / eu / professor / um]", ["Eu sou um professor","Um sou eu professor","Professor eu sou um","Sou eu um professor"], 0, "En portugués el orden es: Sujeto + Verbo + Complemento. → \"Eu sou um professor.\" (Soy profesor.)"],
    ]
  },
  {
    id:"pt_a1_numbers_colors", level:"A1", title:"Números e cores", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 20 y colores básicos en portugués.",
    study: {
      vocab: [
        ["um, dois, três... vinte", "uno, dos, tres... veinte"],
        ["vermelho, azul, verde, amarelo", "rojo, azul, verde, amarillo"],
        ["branco, preto", "blanco, negro"],
        ["Eu tenho ___ anos", "Tengo ___ años", "Se usa el verbo \"ter\" (tener), no \"ser\"."]
      ],
      grammar: [
        ["Concordancia de género en los colores", "Los colores concuerdan en género y número con el sustantivo que describen.", "um carro vermelho / uma casa vermelha."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice el número 15 en portugués?", ["Quinze","Cinquenta","Cinco","Catorze"], 0, "15 = quinze. Ojo: 50 = cinquenta, 5 = cinco."],
      ["mcq", "¿Qué color es \"vermelho\"?", ["Red","Blue","Green","Yellow"], 0, "Vermelho = red. Otros colores: azul (blue), verde (green), amarelo (yellow), branco (white), preto (black).", "🍎 Piensa en una manzana madura."],
      ["fill", "Completa: \"Eu ___ vinte anos.\" (I am 20 years old)", ["tenho","sou","tem","é"], 0, "\"Eu tenho vinte anos\" = I am twenty years old. En portugués la edad se expresa con el verbo \"ter\" (tener), no \"ser\"."],
      ["translate", "Traduce: \"The sky is blue.\"", ["O céu é azul","O céu é verde","A casa é azul","O mar é azul"], 0, "\"O céu é azul.\" — céu = sky, azul = blue."],
      ["mcq", "¿Cómo se dice \"black\" en portugués?", ["Preto","Branco","Cinza","Marrom"], 0, "Preto = black. Branco = white, cinza = gray, marrom = brown."],
      ["arrange", "Ordena: [dois / tenho / gatos]", ["Tenho dois gatos","Dois tenho gatos","Gatos tenho dois","Dois gatos tenho"], 0, "\"Tenho dois gatos.\" = I have two cats. Verbo (tenho) + cantidad (dois) + sustantivo (gatos)."],
    ]
  },
  {
    id:"pt_a1_ser_estar", level:"A1", title:"Ser e estar", emoji:"🧩", xp:35,
    description:"La diferencia entre \"ser\" y \"estar\" en portugués, igual que en español.",
    study: {
      vocab: [
        ["ser", "ser (permanente)"],
        ["estar", "estar (temporal)"],
        ["cansado, contente, doente", "cansado, feliz, enfermo"]
      ],
      grammar: [
        ["Ser vs. Estar", "Igual que en español: \"ser\" para lo permanente, \"estar\" para lo temporal y la ubicación.", "Eu sou estudante. / Eu estou cansado hoje."]
      ]
    },
    ex:[
      ["mcq", "\"Eu ___ estudante.\" (I am a student, permanente)", ["sou","estou","é","está"], 0, "Para profesiones se usa \"ser\": \"Eu sou estudante.\""],
      ["mcq", "\"Ela ___ cansada hoje.\" (She is tired today, temporal)", ["está","é","estou","sou"], 0, "\"Estar\" se usa para estados temporales: \"Ela está cansada hoje.\""],
      ["fill", "Completa: \"São Paulo ___ no Brasil.\" (ubicación)", ["está","é","são","estão"], 0, "Para ubicación se usa \"estar\": \"São Paulo está no Brasil.\""],
      ["translate", "Traduce: \"He is tall.\" (característica permanente)", ["Ele é alto","Ele está alto","Ele é altos","Ele está alta"], 0, "La altura es permanente, por eso se usa \"ser\": \"Ele é alto.\""],
      ["mcq", "¿Cuándo se usa \"estar\" en portugués?", ["Estados temporales y ubicación","Profesiones y nacionalidad","Solo con el clima","Nunca con personas"], 0, "\"Estar\" se usa para estados temporales (cansado, feliz, doente) y ubicación."],
      ["arrange", "Ordena: [contente / muito / estou]", ["Estou muito contente","Muito estou contente","Contente muito estou","Muito contente estou"], 0, "\"Estou muito contente.\" = I am very happy. Verbo (estou) + intensificador (muito) + adjetivo (contente)."],
    ]
  },
  {
    id:"pt_a1_family_home", level:"A1", title:"Família e casa", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en portugués.",
    study: {
      vocab: [
        ["pai, mãe", "padre, madre"],
        ["irmão, irmã", "hermano, hermana"],
        ["filho, filha", "hijo, hija"],
        ["quarto, cozinha, sala", "dormitorio, cocina, salón"],
        ["banheiro, jardim", "baño, jardín"]
      ],
      grammar: [
        ["Adjetivos posesivos", "Meu/minha, teu/tua, seu/sua concuerdan en género con lo que poseen (no con el poseedor).", "Meu pai (masc.) / Minha mãe (fem.)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" en portugués?", ["Mãe","Pai","Irmã","Avó"], 0, "Mãe = mother. Pai = father, irmã = sister, avó = grandmother."],
      ["mcq", "¿Qué habitación es \"a cozinha\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "A cozinha = kitchen. O quarto = bedroom, o banheiro = bathroom, o jardim = garden."],
      ["fill", "Completa: \"___ irmão mora em São Paulo.\" (My brother)", ["Meu","Minha","Meus","Seu"], 0, "\"Meu irmão\" = my brother. \"Irmão\" es masculino, por eso \"meu\" (no \"minha\")."],
      ["translate", "Traduce: \"My family is big.\"", ["Minha família é grande","Minha família é pequena","Minhas famílias são grandes","Sua família é grande"], 0, "\"Minha família é grande.\" — \"família\" es femenino, por eso \"minha\"."],
      ["mcq", "¿Cómo se dice \"grandparents\" en portugués?", ["Avós","Pais","Tios","Primos"], 0, "Avós = grandparents. Pais = parents, tios = aunts/uncles, primos = cousins."],
      ["arrange", "Ordena: [três / tenho / irmãos]", ["Tenho três irmãos","Três tenho irmãos","Irmãos tenho três","Três irmãos tenho"], 0, "\"Tenho três irmãos.\" = I have three siblings. Verbo + cantidad + sustantivo."],
    ]
  },
  {
    id:"pt_a1_food_restaurant", level:"A1", title:"Comida e restaurantes", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en portugués.",
    study: {
      vocab: [
        ["o cardápio", "el menú"],
        ["Eu gostaria de...", "Me gustaría...", "Forma cortés de pedir."],
        ["a conta, por favor", "la cuenta, por favor"],
        ["a água, o pão", "agua, pan"],
        ["delicioso/a", "delicioso"]
      ],
      grammar: [
        ["\"Eu gostaria\" para pedir con cortesía", "\"Eu gostaria de\" es más educado que \"eu quero\" al pedir algo.", "Eu gostaria de um café, por favor. (Más cortés que \"Eu quero um café\".)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en portugués?", ["O cardápio","A conta","O prato","A mesa"], 0, "O cardápio = the menu. A conta = the bill, o prato = the dish, a mesa = the table."],
      ["fill", "Completa: \"___ um café, por favor.\" (I would like)", ["Eu gostaria de","Eu quero","Eu queria só","Eu vou querer talvez"], 0, "\"Eu gostaria de\" es la forma más cortés para pedir algo en un restaurante."],
      ["mcq", "¿Qué significa \"a conta, por favor\"?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"A conta, por favor\" = the bill, please. Se usa al terminar de comer."],
      ["translate", "Traduce: \"This dish is delicious.\"", ["Este prato está delicioso","Este prato está ruim","Esta prato está delicioso","Delicioso está este prato"], 0, "\"Este prato está delicioso.\" — con \"estar\" para valorar el sabor en el momento."],
      ["mcq", "¿Cómo se dice \"waiter\" en portugués?", ["Garçom","Cozinheiro","Cliente","Dono"], 0, "Garçom = waiter (garçonete para mujer, en Brasil). Cozinheiro = cook, cliente = customer."],
      ["arrange","Ordena: [água / gostaria / de / um / copo / de / eu]",["Eu gostaria de um copo de água","Um copo eu gostaria de água","De água eu gostaria um copo","Copo de água eu gostaria"],0,"\"Eu gostaria de um copo de água.\" = I would like a glass of water."],
    ]
  },
  {
    id:"pt_a1_daily_routine", level:"A1", title:"Rotina diária", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en portugués.",
    study: {
      vocab: [
        ["acordar", "despertarse"],
        ["levantar-se", "levantarse"],
        ["tomar café da manhã / almoçar / jantar", "desayunar/almorzar/cenar"],
        ["ir para o trabalho", "ir al trabajo"],
        ["todos os dias", "todos los días"]
      ],
      grammar: [
        ["Verbos reflexivos en presente", "Verbos como \"levantar-se\" llevan un pronombre reflexivo (me, te, se) que cambia según la persona.", "Eu me levanto às 7h. / Ela se levanta cedo."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up at 7\"?", ["Eu acordo às 7h","Você acorda às 7h","Ele acorda às 7h","Acordar às 7h"], 0, "\"Eu acordo às 7h.\" — primera persona del verbo \"acordar\"."],
      ["fill", "Completa: \"Ela ___ às 8h.\" (gets up)", ["se levanta","me levanto","te levantas","levantar"], 0, "\"Se levanta\" = tercera persona de \"levantar-se\" (se + levanta)."],
      ["mcq", "¿Qué significa \"tomar café da manhã\"?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "Tomar café da manhã = to have breakfast. Almoçar = to have lunch, jantar = to have dinner."],
      ["translate", "Traduce: \"I go to work at 9.\"", ["Eu vou para o trabalho às 9h","Eu vou trabalhar 9h","Ele vai para o trabalho às 9h","Eu vou para o trabalho 9h"], 0, "\"Eu vou para o trabalho às 9h.\" — \"ir para o + lugar\" y \"às + hora\" para indicar el momento."],
      ["mcq", "¿Cómo se dice \"every day\" en portugués?", ["Todos os dias","Um dia","Algum dia","O outro dia"], 0, "Todos os dias = every day. Um dia = one day."],
      ["arrange", "Ordena: [horas / dez / durmo / às]", ["Durmo às dez horas","Às dez horas durmo","Dez horas durmo às","Durmo horas às dez"], 0, "\"Durmo às dez horas.\" = I sleep at ten. Verbo + preposición + hora."],
    ]
  },
  {
    id:"pt_a2_shopping_clothes", level:"A2", title:"Fazer compras e roupas", emoji:"🛍️", xp:40,
    description:"Aprende a comprar ropa, preguntar precios y tallas en portugués.",
    study: {
      vocab: [
        ["a camisa, a camiseta", "camisa, camiseta"],
        ["a calça, a saia", "pantalón, falda"],
        ["os sapatos", "zapatos"],
        ["Quanto custa?", "¿Cuánto cuesta?"],
        ["o tamanho", "la talla"],
        ["experimentar (algo)", "probarse (algo)"]
      ],
      grammar: [
        ["Comparativo: mais/menos...do que", "Se usan para comparar dos cosas.", "Esta camisa é mais cara do que aquela."],
        ["El verbo \"ficar\" con ropa", "\"Ficar\" describe cómo le queda la ropa a alguien.", "Estes sapatos ficam pequenos em mim."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"How much does it cost?\" en portugués?", ["Quanto custa?","Qual é o tamanho?","Onde está?","Você gosta disso?"], 0, "\"Quanto custa?\" se usa para preguntar el precio de algo."],
      ["fill", "Completa: \"Esta saia é ___ cara ___ aquela.\" (more...than)", ["mais / do que","menos / de","tão / quanto","muito / que"], 0, "\"Mais...do que\" se usa para comparaciones de superioridad: \"mais cara do que\" = more expensive than."],
      ["mcq", "¿Qué significa \"experimentar uma roupa\"?", ["To try on clothes","To buy clothes","To wash clothes","To fold clothes"], 0, "\"Experimentar\" = to try on. Se usa antes de comprar, para ver si la talla es correcta."],
      ["translate", "Traduce al portugués: \"These shoes are too small for me.\"", ["Estes sapatos ficam pequenos em mim","Estes sapatos são grandes","Esta roupa é cara","Estes sapatos custam muito"], 0, "\"Ficam pequenos em mim\" describe cómo le sienta la prenda a la persona."],
      ["mcq", "¿Cómo se dice \"shirt\" en portugués?", ["Camisa","Calça","Saia","Sapato"], 0, "Camisa = shirt. Calça = pants, saia = skirt, sapato = shoe."],
      ["arrange", "Ordena: [este / é / o / meu / tamanho]", ["Este é o meu tamanho","Meu tamanho é este","É este o meu tamanho","Tamanho este é o meu"], 0, "\"Este é o meu tamanho.\" = This is my size."],
    ]
  },
  {
    id:"pt_a2_weather_seasons", level:"A2", title:"O tempo e as estações", emoji:"🌦️", xp:40,
    description:"Habla del clima y las estaciones del año en portugués.",
    study: {
      vocab: [
        ["está calor / frio", "hace calor / frío"],
        ["chove, neva", "llueve, nieva"],
        ["o verão, o inverno, a primavera, o outono", "verano, invierno, primavera, otoño"],
        ["está nublado / ensolarado", "está nublado / hace sol"]
      ],
      grammar: [
        ["Verbos impessoais do tempo", "\"Estar\", \"chover\" y \"nevar\" se usan en tercera persona sin sujeto explícito.", "Está muito calor hoje. Está chovendo."],
        ["Estar + gerúndio (presente contínuo)", "Describe una acción en curso en este momento.", "Está chovendo agora mesmo."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"it's cold\" en portugués?", ["Está frio","Está calor","Está ensolarado","Está chovendo"], 0, "Está frio = it's cold. Está calor = it's hot."],
      ["fill", "Completa: \"No inverno, às vezes ___.\" (it snows)", ["neva","chove","está calor","está ensolarado"], 0, "Neva = it snows, del verbo \"nevar\", típico del invierno."],
      ["mcq", "¿Qué estación sigue a la primavera (a primavera)?", ["O verão","O inverno","O outono","A primavera"], 0, "El orden de las estaciones es: a primavera, o verão, o outono, o inverno."],
      ["translate", "Traduce al portugués: \"It's raining right now.\"", ["Está chovendo agora mesmo","Vai chover amanhã","Está frio agora","Choveu ontem"], 0, "\"Estar + gerúndio\" (presente continuo) describe una acción en curso ahora mismo."],
      ["mcq", "¿Cómo se dice \"sunny\" en portugués?", ["Ensolarado","Nublado","Chuvoso","Nevado"], 0, "Ensolarado = sunny. Nublado = cloudy, chuvoso = rainy, nevado = snowy."],
      ["arrange", "Ordena: [hoje / muito / calor / está]", ["Está muito calor hoje","Hoje está muito calor","Calor está muito hoje","Muito está calor hoje"], 0, "\"Está muito calor hoje.\" = It's very hot today."],
    ]
  },
  {
    id:"pt_a2_preterito_ontem", level:"A2", title:"Ontem: o pretérito perfeito", emoji:"📅", xp:45,
    description:"Aprende a hablar de acciones terminadas en el pasado con el pretérito perfeito.",
    study: {
      vocab: [
        ["ontem, ontem à noite, semana passada", "ayer, anoche, la semana pasada"],
        ["eu comi, você comeu, ele/ela comeu", "yo comí, tú comiste, él/ella comió"],
        ["eu fui, você foi", "yo fui, tú fuiste"],
        ["O que você fez?", "¿Qué hiciste?"]
      ],
      grammar: [
        ["Pretérito perfeito regular", "Terminações -ar: -ei, -ou. Terminações -er/-ir: -i, -eu/-iu.", "Falei com ela. Comi uma maçã."],
        ["El verbo \"ir\" en pretérito (irregular)", "fui, foi, fomos, foram.", "Ontem fui ao cinema."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I ate\" en portugués?", ["Comi","Como","Comerei","Comendo"], 0, "Comi = I ate (pretérito). Como = I eat (presente)."],
      ["fill", "Completa: \"Ontem ___ ao cinema com meus amigos.\" (I went)", ["fui","vou","irei","ia"], 0, "\"Fui\" es la primera persona del pretérito irregular de \"ir\": fui, foi, fomos..."],
      ["mcq", "¿Cuál es la terminación correcta de \"falar\" en pretérito para \"eu\"?", ["-ei (falei)","-o (falo)","-ava (falava)","-ando (falando)"], 0, "Los verbos -ar terminan en -ei para \"eu\" en pretérito: falei, andei, estudei."],
      ["translate", "Traduce al portugués: \"What did you do last night?\"", ["O que você fez ontem à noite?","O que você faz agora?","O que você fará amanhã?","O que você faz sempre?"], 0, "\"O que você fez\" usa el pretérito de \"fazer\" para preguntar por una acción terminada."],
      ["mcq", "¿Cómo se dice \"last week\" en portugués?", ["A semana passada","Esta semana","A próxima semana","Todos os dias"], 0, "A semana passada = last week. Esta semana = this week."],
      ["arrange", "Ordena: [uma / comi / maçã]", ["Comi uma maçã","Uma comi maçã","Maçã uma comi","Comi maçã uma"], 0, "\"Comi uma maçã.\" = I ate an apple."],
    ]
  },
  {
    id:"pt_b1_reading_notices", level:"B1", title:"Leitura e decisões", emoji:"📌", xp:55,
    description:"Extrai informações práticas de avisos e mensagens do dia a dia.",
    study:{
      vocab:[
        ["disponível mediante pedido", "disponible a petición"],
        ["sujeito a alterações", "sujeto a cambios"],
        ["cumprir os requisitos", "cumplir los requisitos"],
        ["o prazo", "el plazo límite"]
      ],
      grammar:[
        ["Leitura seletiva","Procure primeiro o propósito, a condição e a ação exigida.","As reservas só são confirmadas após o pagamento."]
      ]
    },
    ex:[
      ["mcq","Aviso: \"As vagas do workshop estão reservadas para sócios até sexta-feira; depois as vagas restantes serão liberadas.\" O que deve fazer uma pessoa que não é sócia?",["Esperar até sexta-feira para saber se sobram vagas.","Reservar hoje porque tem prioridade.","Pagar uma taxa obrigatória antes de sexta-feira.","Presumir que o workshop foi cancelado."],0,"O aviso indica prioridade temporária para sócios, não exclusividade permanente."],
      ["mcq","Mensagem: \"Envie o formulário até às 17h de quinta-feira. Candidaturas tardias só serão consideradas se sobrarem vagas.\" Qual é a ação mais segura?",["Enviar o formulário antes das 17h de quinta-feira.","Esperar a confirmação de que sobram vagas.","Enviar na sexta porque candidaturas tardias são sempre aceitas.","Ligar para cancelar a candidatura."],0,"\"Até\" marca um prazo claro; \"só se\" não garante a aceitação tardia."],
      ["fill","Complete: \"Os candidatos devem ser ___ para o programa antes de solicitar a bolsa.\"",["elegíveis","disponíveis","sujeitos","limitados"],0,"\"Elegível\" significa que cumpre os requisitos necessários."],
      ["writing","Escreva um e-mail de 45-60 palavras perguntando se ainda pode se candidatar após o prazo.",[],["tardia","candidatura","disponível"],"Inclua saudação, pedido claro e encerramento adequado.","Você escreve ao coordenador de um curso que fechou ontem."],
    ["mcq","¿Cómo se dice \"disponible a petición\" en portugués?",["disponível mediante pedido","sujeito a alterações","cumprir os requisitos","o prazo"],0,"\"disponible a petición\" se dice \"disponível mediante pedido\" en portugués."],
    ["mcq","¿Cómo se dice \"sujeto a cambios\" en portugués?",["cumprir os requisitos","disponível mediante pedido","sujeito a alterações","o prazo"],2,"\"sujeto a cambios\" se dice \"sujeito a alterações\" en portugués."],
    ]
  },
  {
    id:"pt_b1_opinions", level:"B1", title:"Opiniões e pontos de vista", emoji:"🎧", xp:58,
    description:"Distinga fatos, preferências e razões em conversas do dia a dia.",
    study:{
      vocab:[
        ["eu preferiria", "preferiría"],
        ["acontece que", "resulta que"],
        ["vale a pena", "vale la pena"],
        ["desanimar alguém", "desanimar a alguien"]
      ],
      grammar:[
        ["Opinião com justificativa","Uma resposta B1 deve incluir uma opinião e uma razão.","Eu preferiria viajar de trem porque posso trabalhar durante a viagem."]
      ]
    },
    ex:[
      ["mcq","Leia: \"Maya esperava que o curso fosse difícil, mas acontece que o feedback semanal o torna gerenciável.\" O que Maya pensa?",["O curso é exigente, mas o apoio a ajuda a acompanhar.","O curso é fácil demais.","O feedback torna o curso mais difícil.","Ela desistiu do curso por falta de apoio."],0,"A expectativa inicial é contrastada com um balanço final mais positivo."],
      ["mcq","Qual resposta expressa preferência e motivo?",["Eu preferiria nos encontrar online porque economiza tempo de viagem.","Eu me encontro online ontem.","Reuniões online são um tempo de viagem.","Eu prefiro porque reuniões."],0,"A estrutura inclui preferência, opção e justificativa."],
      ["fill","Complete: \"O preço era alto, mas a experiência ___ a pena.\"",["valeu","preferiu","aconteceu","desanimou"],0,"A expressão fixa é \"valer a pena\"; no passado: \"valeu a pena\"."],
      ["speaking","Fale por 45-60 palavras: compare estudar sozinho e estudar com outras pessoas. Dê uma preferência, uma razão e uma desvantagem.",[],["prefiro","porque","no entanto"],"Organize a resposta: comparação, preferência, razão e ressalva.","Conversa com um colega de turma."],
    ["mcq","¿Cómo se dice \"preferiría\" en portugués?",["acontece que","desanimar alguém","vale a pena","eu preferiria"],3,"\"preferiría\" se dice \"eu preferiria\" en portugués."],
    ["mcq","¿Cómo se dice \"resulta que\" en portugués?",["acontece que","desanimar alguém","vale a pena","eu preferiria"],0,"\"resulta que\" se dice \"acontece que\" en portugués."],
    ]
  },
  {
    id:"pt_b1_storytelling", level:"B1", title:"Contar uma experiência", emoji:"🗺️", xp:60,
    description:"Narre experiências passadas combinando pretérito perfeito e imperfeito.",
    study:{
      vocab:[
        ["no início", "al principio"],
        ["por fim", "con el tiempo"],
        ["inesperadamente", "inesperadamente"],
        ["perceber", "darse cuenta"]
      ],
      grammar:[
        ["Pretérito perfeito vs. imperfeito","O imperfeito descreve o pano de fundo ou uma ação em curso; o pretérito perfeito narra ações concluídas.","Enquanto esperávamos o ônibus, começou a chover."]
      ]
    },
    ex:[
      ["mcq","Qual frase usa corretamente o pretérito perfeito e o imperfeito?",["Enquanto caminhávamos no parque, vimos um acidente.","Enquanto caminhamos no parque, víamos um acidente.","Enquanto caminhávamos no parque, víamos um acidente ontem.","Caminhamos no parque enquanto vimos."],0,"O pano de fundo (caminhávamos) vai no imperfeito; a ação pontual (vimos) vai no pretérito perfeito."],
      ["fill","Complete: \"Eu não ___ de quão tarde era até olhar o celular.\"",["percebi","percebia","percebo","percebia de"],0,"\"Perceber\" no pretérito perfeito para uma ação pontual: \"percebi\"."],
      ["translate","Traduza: \"At first I was nervous, but eventually I enjoyed the experience.\"",["No início eu estava nervoso, mas por fim gostei da experiência.","No início eu fiquei nervoso, mas por fim gostava da experiência.","No início eu estava nervoso, mas por fim gostava muito da experiência.","No início eu estava nervoso, mas por fim gostei de experiência."],0,"O estado de fundo vai no imperfeito (\"estava\"); a ação completa vai no pretérito perfeito (\"gostei\")."],
      ["writing","Escreva uma história de 80-100 palavras sobre um plano que mudou inesperadamente.",[],["no início","mas","por fim"],"Verifique se cada parte avança a história e se os tempos verbais são consistentes.","Uma viagem curta que não saiu como planejado."],
    ["mcq","¿Cómo se dice \"al principio\" en portugués?",["perceber","por fim","inesperadamente","no início"],3,"\"al principio\" se dice \"no início\" en portugués."],
    ["mcq","¿Cómo se dice \"con el tiempo\" en portugués?",["no início","por fim","perceber","inesperadamente"],1,"\"con el tiempo\" se dice \"por fim\" en portugués."],
    ]
  },
  {
    id:"pt_b1_agreement", level:"B1", title:"Discutir e chegar a um acordo", emoji:"🤝", xp:62,
    description:"Proponha opções, responda a ideias alheias e negocie uma decisão.",
    study:{
      vocab:[
        ["e se...?", "¿qué tal si...?"],
        ["entendo o seu ponto", "entiendo tu punto"],
        ["que tal...?", "¿qué tal...?"],
        ["um meio-termo", "un término medio"]
      ],
      grammar:[
        ["Linguagem colaborativa","Para negociar: propor, responder e buscar uma alternativa compartilhada.","Entendo o seu ponto sobre o custo; que tal escolher a opção mais barata?"]
      ]
    },
    ex:[
      ["mcq","Qual resposta constrói um acordo?",["Entendo o seu ponto sobre o custo; que tal convidar menos pessoas?","Sua ideia é ruim, então a minha vence.","Não entendo nenhum ponto.","A opção mais barata são as pessoas."],0,"Reconhece uma ideia e propõe um meio-termo concreto."],
      ["fill","Complete: \"___ nos encontramos na biblioteca depois da aula?\"",["E se","Seria","Fez","Tem"],0,"\"E se...?\" é uma forma comum de propor algo."],
      ["mcq","Qual frase expressa discordância educada?",["Não tenho certeza de que vai funcionar, porque o local fecha cedo.","Isso nunca vai funcionar.","Seu local é péssimo.","Não, obviamente não."],0,"A discordância é suavizada e justificada com uma razão."],
      ["speaking","Fale por 45-60 palavras: proponha um plano de fim de semana, responda a uma objeção e ofereça um meio-termo.",[],["proponho","porque","meio-termo"],"Inclua uma proposta concreta, uma razão e uma resposta colaborativa.","Você organiza uma atividade com um amigo com pouco orçamento."],
    ["mcq","¿Cómo se dice \"entiendo tu punto\" en portugués?",["que tal...?","um meio-termo","e se...?","entendo o seu ponto"],3,"\"entiendo tu punto\" se dice \"entendo o seu ponto\" en portugués."],
    ["mcq","¿Cómo se dice \"¿qué tal...?\" en portugués?",["e se...?","entendo o seu ponto","um meio-termo","que tal...?"],3,"\"¿qué tal...?\" se dice \"que tal...?\" en portugués."],
    ]
  },
  {
    id:"pt_b1_future_plans", level:"B1", title:"Planos e futuro", emoji:"🗓️", xp:60,
    description:"Fale sobre planos, intenções e previsões usando diferentes formas de futuro.",
    study:{
      vocab:[
        ["pretendo", "tengo la intención de"],
        ["em breve", "pronto"],
        ["assim que eu puder", "tan pronto como pueda"],
        ["é possível que", "es posible que"]
      ],
      grammar:[
        ["Futuro com 'ir' vs. futuro simples","\"Ir + infinitivo\" expressa um plano já decidido; o futuro simples expressa previsão ou decisão espontânea.","Vou me mudar no mês que vem. / Acho que vai chover amanhã."]
      ]
    },
    ex:[
      ["mcq","Qual frase expressa um plano já decidido?",["Vou começar um curso de italiano em setembro.","Começarei um curso se tiver tempo.","Acho que vou começar algum curso.","Comecei um curso no ano passado."],0,"\"Ir + infinitivo\" é usado para planos já decididos."],
      ["fill","Complete: \"Assim que eu ___ o relatório, te envio.\"",["terminar","termino","terminarei","terminava"],0,"Depois de \"assim que\" para uma condição futura, usa-se o futuro do subjuntivo: \"terminar\"."],
      ["translate","Traduza: \"As soon as I finish the project, I'll call you.\"",["Assim que eu terminar o projeto, vou te ligar.","Quando eu terminava o projeto, ligo.","Assim que eu terminei o projeto, ligava.","Se eu terminar o projeto, ligava."],0,"\"Assim que\" + futuro do subjuntivo expressa uma condição futura."],
      ["writing","Escreva 45-60 palavras sobre seus planos para o próximo ano. Use pelo menos duas expressões de futuro.",[],["pretendo","assim que","é possível"],"Combine ao menos duas formas de falar do futuro e justifique um plano.","Você conta seus planos a um amigo."],
    ["mcq","¿Cómo se dice \"tengo la intención de\" en portugués?",["pretendo","assim que eu puder","em breve","é possível que"],0,"\"tengo la intención de\" se dice \"pretendo\" en portugués."],
    ["mcq","¿Cómo se dice \"pronto\" en portugués?",["assim que eu puder","pretendo","é possível que","em breve"],3,"\"pronto\" se dice \"em breve\" en portugués."],
    ]
  },
  {
    id:"pt_b1_complaints_requests", level:"B1", title:"Reclamações e pedidos educados", emoji:"✉️", xp:60,
    description:"Formule reclamações e pedidos formais usando o condicional de cortesia.",
    study:{
      vocab:[
        ["eu gostaria", "me gustaría"],
        ["poderia...?", "¿podrías...?"],
        ["lamento informar", "lamento informarle"],
        ["fazer uma reclamação", "presentar una queja"]
      ],
      grammar:[
        ["Condicional de cortesia","\"Gostaria\" e \"poderia\" suavizam pedidos e reclamações formais.","Eu gostaria de saber por que o pedido chegou atrasado."]
      ]
    },
    ex:[
      ["mcq","Qual frase é uma reclamação formal e educada?",["Eu gostaria de saber por que o pacote chegou com uma semana de atraso.","Isso é um desastre total!","Sua empresa nunca faz nada certo.","Não pretendo pagar nada."],0,"Formula a reclamação de modo indireto e respeitoso, sem perder clareza."],
      ["fill","Complete: \"___ me enviar uma cópia da fatura, por favor?\"",["Poderia","Pode","Pôde","Posso"],0,"\"Poderia\" no condicional suaviza o pedido e o torna mais formal."],
      ["translate","Traduza: \"I would like to file a complaint about the service.\"",["Eu gostaria de fazer uma reclamação sobre o serviço.","Eu quero reclamar o serviço.","Eu gosto de fazer uma reclamação do serviço.","Eu faria uma reclamação o serviço."],0,"\"Eu gostaria de\" + infinitivo é a fórmula padrão de cortesia."],
      ["writing","Escreva um e-mail de reclamação de 50-70 palavras sobre um pedido que chegou incompleto. Use o condicional de cortesia.",[],["eu gostaria","poderia","lamento"],"Explique o problema, formule um pedido claro e encerre com cortesia.","Um pedido online chegou com dois itens faltando."],
    ["mcq","¿Cómo se dice \"me gustaría\" en portugués?",["eu gostaria","poderia...?","lamento informar","fazer uma reclamação"],0,"\"me gustaría\" se dice \"eu gostaria\" en portugués."],
    ["mcq","¿Cómo se dice \"lamento informarle\" en portugués?",["lamento informar","fazer uma reclamação","eu gostaria","poderia...?"],0,"\"lamento informarle\" se dice \"lamento informar\" en portugués."],
    ]
  },
  {
    id:"pt_b2_hypotheticals", level:"B2", title:"Hipóteses e condições improváveis", emoji:"🌀", xp:75,
    description:"Expresse hipóteses pouco prováveis ou irreais com se + pretérito imperfeito do subjuntivo.",
    study:{
      vocab:[
        ["se eu tivesse", "si tuviera"],
        ["caso", "por si acaso"],
        ["a menos que", "a menos que"],
        ["supondo que", "suponiendo que"]
      ],
      grammar:[
        ["Período hipotético (tipo 2)","Para hipóteses pouco prováveis no presente: se + pretérito imperfeito do subjuntivo, futuro do pretérito (condicional) na principal.","Se eu tivesse mais tempo, viajaria mais."]
      ]
    },
    ex:[
      ["mcq","Qual frase expressa corretamente uma hipótese pouco provável?",["Se eu tivesse mais dinheiro, compraria uma casa maior.","Se eu tenho mais dinheiro, compraria uma casa maior.","Se eu tivesse mais dinheiro, compro uma casa maior.","Se eu teria mais dinheiro, compraria uma casa."],0,"O tipo 2 exige pretérito imperfeito do subjuntivo na condição e futuro do pretérito na consequência."],
      ["fill","Complete: \"A menos que ___ um esforço extra, não terminaremos a tempo.\"",["façamos","fazemos","faríamos","fizemos"],0,"'A menos que' é sempre seguido de subjuntivo."],
      ["mcq","Qual é a melhor paráfrase de \"Se eu fosse você, não aceitaria essa oferta\"?",["Um conselho hipotético: quem fala não aceitaria a oferta no lugar do ouvinte.","Uma ordem direta.","A descrição de um fato passado.","Uma promessa para o futuro."],0,"A estrutura hipotética expressa um conselho, não um fato nem uma ordem."],
      ["writing","Escreva 60-80 palavras: descreva o que você faria diferente se pudesse reviver um ano da sua vida. Use pelo menos duas hipóteses com 'se'.",[],["se eu tivesse","a menos que","supondo"],"Verifique se cada hipótese combina corretamente o imperfeito do subjuntivo e o condicional.","Reflexão pessoal para um blog."],
    ["mcq","¿Cómo se dice \"si tuviera\" en portugués?",["supondo que","a menos que","caso","se eu tivesse"],3,"\"si tuviera\" se dice \"se eu tivesse\" en portugués."],
    ["mcq","¿Cómo se dice \"por si acaso\" en portugués?",["a menos que","caso","se eu tivesse","supondo que"],1,"\"por si acaso\" se dice \"caso\" en portugués."],
    ]
  },
  {
    id:"pt_b2_reported_speech", level:"B2", title:"Discurso indireto", emoji:"💬", xp:78,
    description:"Relate o que outros disseram adaptando tempos verbais e marcadores temporais.",
    study:{
      vocab:[
        ["disse que", "él/ella dijo que"],
        ["explicou que", "él/ella explicó que"],
        ["perguntou se", "él/ella preguntó si"],
        ["acrescentou que", "él/ella añadió que"]
      ],
      grammar:[
        ["Discurso indireto","No passado, o futuro vira futuro do pretérito (condicional) e o presente costuma virar imperfeito.","Ela disse: 'Vou chegar atrasada.' → Ela disse que chegaria atrasada."]
      ]
    },
    ex:[
      ["mcq","Citação direta: \"Vou terminar o relatório amanhã.\" Qual é o discurso indireto correto?",["Ele disse que terminaria o relatório no dia seguinte.","Ele disse que vai terminar o relatório amanhã.","Ele disse que terminava o relatório amanhã.","Ele disse que termine o relatório no dia seguinte."],0,"O futuro da citação original vira futuro do pretérito; 'amanhã' vira 'no dia seguinte'."],
      ["fill","Complete: \"Ela me perguntou se eu ___ disponível para a reunião de segunda-feira.\"",["estava","estou","estarei","esteja"],0,"O presente da citação original vira imperfeito no discurso indireto no passado."],
      ["mcq","O que geralmente muda ao passar do discurso direto para o indireto no passado?",["O tempo verbal e às vezes os marcadores temporais (amanhã → no dia seguinte).","Apenas o sujeito da frase.","Nada muda nunca.","Apenas a ordem das palavras."],0,"O tempo verbal recua para o passado e alguns marcadores temporais mudam."],
      ["writing","Relate em discurso indireto (50-70 palavras) uma conversa recente em que alguém contou seus planos.",[],["disse que","explicou que","acrescentou que"],"Adapte corretamente os tempos verbais e os marcadores temporais.","Você conta a um amigo o que um colega de trabalho disse."],
    ["mcq","¿Cómo se dice \"él/ella dijo que\" en portugués?",["perguntou se","acrescentou que","disse que","explicou que"],2,"\"él/ella dijo que\" se dice \"disse que\" en portugués."],
    ["mcq","¿Cómo se dice \"él/ella explicó que\" en portugués?",["explicou que","disse que","acrescentou que","perguntou se"],0,"\"él/ella explicó que\" se dice \"explicou que\" en portugués."],
    ]
  },
  {
    id:"pt_b2_passive_impersonal", level:"B2", title:"Voz passiva e passiva pronominal", emoji:"⚙️", xp:76,
    description:"Descreva processos e fatos sem enfatizar quem os realiza.",
    study:{
      vocab:[
        ["ser + particípio", "ser + participio (pasiva)"],
        ["se + verbo", "construcción impersonal/pasiva con 'se'"],
        ["ser levado a cabo", "llevarse a cabo"],
        ["ser responsável por", "estar a cargo de"]
      ],
      grammar:[
        ["Voz passiva e passiva pronominal","A passiva com 'ser' destaca o agente; a passiva pronominal com 'se' é mais natural quando o agente não importa.","O projeto foi aprovado pelo comitê. / Aprovou-se o projeto."]
      ]
    },
    ex:[
      ["mcq","Qual frase usa corretamente a passiva pronominal?",["Assinaram-se os contratos ontem à tarde.","Assinou-se os contratos ontem à tarde.","Foi assinado os contratos ontem.","Assinava-se os contratos por alguém."],0,"O verbo concorda no plural com 'os contratos': 'assinaram-se'."],
      ["fill","Complete: \"O novo edifício ___ projetado por uma empresa internacional.\"",["foi","se projetou","projetou","projetava"],0,"Quando o agente é explícito ('por uma empresa'), prefere-se a passiva com 'ser'."],
      ["mcq","Quando se prefere a passiva pronominal em vez da passiva com 'ser'?",["Quando o agente não é relevante ou não é conhecido.","Quando se quer sempre nomear o agente.","Nunca no português natural.","Só em textos literários antigos."],0,"A passiva pronominal é a forma natural quando o agente não importa."],
      ["writing","Descreva em 50-70 palavras um processo (por exemplo, como se organiza um evento) usando pelo menos duas construções passivas ou impessoais.",[],["se + verbo","foi + particípio","levado a cabo"],"Use pelo menos duas construções diferentes de forma coerente.","Você explica um procedimento a alguém novo na equipe."],
    ["mcq","¿Cómo se dice \"ser + participio\" en portugués?",["se + verbo","ser levado a cabo","ser responsável por","ser + particípio"],3,"\"ser + participio\" se dice \"ser + particípio\" en portugués."],
    ["mcq","¿Cómo se dice \"construcción impersonal/pasiva con 'se'\" en portugués?",["se + verbo","ser responsável por","ser + particípio","ser levado a cabo"],0,"\"construcción impersonal/pasiva con 'se'\" se dice \"se + verbo\" en portugués."],
    ]
  },
  {
    id:"pt_b2_doubt_probability", level:"B2", title:"Dúvida, probabilidade e certeza", emoji:"❓", xp:78,
    description:"Distinga quando usar o subjuntivo ou o indicativo conforme o grau de certeza.",
    study:{
      vocab:[
        ["duvido que", "dudo que"],
        ["não acho que", "no creo que"],
        ["é provável que", "es probable que"],
        ["pode ser que", "podría ser que"]
      ],
      grammar:[
        ["Subjuntivo com dúvida e probabilidade","Verbos e expressões de dúvida ou negação de certeza pedem o subjuntivo na oração subordinada.","Duvido que o projeto esteja pronto para sexta-feira."]
      ]
    },
    ex:[
      ["mcq","Qual frase está gramaticalmente correta?",["Não acho que a proposta seja viável a curto prazo.","Não acho que a proposta é viável a curto prazo.","Não acho que a proposta será viável a curto prazo.","Não acho que a proposta viável a curto prazo."],0,"\"Não acho que\" nega a certeza, por isso exige subjuntivo: \"seja\"."],
      ["fill","Complete: \"Pode ser que eles já ___ tomado a decisão quando chegarmos.\"",["tenham","têm","tomarão","tomavam"],0,"'Pode ser que' + subjuntivo (aqui, pretérito perfeito do subjuntivo para uma ação anterior)."],
      ["mcq","Qual expressão NÃO exige subjuntivo na oração seguinte?",["Tenho certeza de que...","Duvido que...","Não acho que...","É possível que..."],0,"'Tenho certeza de que' expressa certeza, por isso usa-se o indicativo, não o subjuntivo."],
      ["speaking","Fale por 60-80 palavras: dê sua opinião sobre se o trabalho remoto vai se tornar a norma. Use pelo menos uma expressão de dúvida e uma de certeza.",[],["duvido que","é provável","tenho certeza"],"Alterne corretamente subjuntivo e indicativo conforme o grau de certeza.","Debate informal sobre o futuro do trabalho."],
    ["mcq","¿Cómo se dice \"dudo que\" en portugués?",["pode ser que","não acho que","é provável que","duvido que"],3,"\"dudo que\" se dice \"duvido que\" en portugués."],
    ["mcq","¿Cómo se dice \"no creo que\" en portugués?",["não acho que","pode ser que","é provável que","duvido que"],0,"\"no creo que\" se dice \"não acho que\" en portugués."],
    ]
  },
  {
    id:"pt_b2_contrast_connectors", level:"B2", title:"Conectores de contraste", emoji:"⚖️", xp:76,
    description:"Use 'embora' e outros conectores para matizar ideias e contrastar fatos.",
    study:{
      vocab:[
        ["embora", "aunque"],
        ["apesar de", "a pesar de"],
        ["no entanto", "sin embargo"],
        ["contudo", "sin embargo"]
      ],
      grammar:[
        ["Conectores de contraste","'Embora' exige subjuntivo, mesmo para um fato real e conhecido.","Embora tenha chovido, saímos para caminhar."]
      ]
    },
    ex:[
      ["mcq","Qual frase usa corretamente 'embora'?",["Embora o voo tenha atrasado, chegamos a tempo à reunião.","Embora o voo atrasou, chegamos a tempo.","Embora o voo atrasava, chegamos.","Embora o voo vai atrasar, chegamos a tempo."],0,"'Embora' sempre exige subjuntivo, mesmo para um fato confirmado."],
      ["fill","Complete: \"___ o relatório estivesse incompleto, nós o enviamos antes do prazo.\"",["Apesar de que","No entanto","Contudo","Pode ser que"],0,"'Apesar de que' introduz uma oração subordinada de contraste com um fato real."],
      ["mcq","Qual conector geralmente introduz uma nova frase em vez de uma oração subordinada na mesma frase?",["No entanto","Embora","Apesar de","Porque"],0,"'No entanto' funciona como conector entre frases, não como subordinante."],
      ["writing","Escreva um parágrafo de 60-80 palavras apresentando uma opinião e matizando-a com pelo menos dois conectores de contraste diferentes.",[],["embora","no entanto","contudo"],"Combine corretamente os conectores subordinantes e os que ligam frases.","Opinião sobre um tema atual para um fórum."],
    ["mcq","¿Cómo se dice \"aunque\" en portugués?",["embora","apesar de","contudo","no entanto"],0,"\"aunque\" se dice \"embora\" en portugués."],
    ["mcq","¿Cómo se dice \"a pesar de\" en portugués?",["apesar de","embora","contudo","no entanto"],0,"\"a pesar de\" se dice \"apesar de\" en portugués."],
    ]
  },
  {
    id:"pt_b2_debate_nuance", level:"B2", title:"Argumentar com nuances", emoji:"🗣️", xp:80,
    description:"Construa argumentos que reconhecem o ponto contrário antes de defender uma posição.",
    study:{
      vocab:[
        ["por um lado / por outro", "por un lado / por otro lado"],
        ["é inegável que", "es innegable que"],
        ["vale a pena notar que", "cabe destacar que"],
        ["em definitiva", "en última instancia"]
      ],
      grammar:[
        ["Argumentação matizada","Um bom argumento B2 reconhece o ponto contrário antes de defender uma posição.","É inegável que o plano reduz custos, mas vale a pena notar que também traz riscos."]
      ]
    },
    ex:[
      ["mcq","Qual estrutura mostra um argumento bem matizado?",["É inegável que o projeto é caro, mas a longo prazo poderia economizar recursos.","O projeto é caro, ponto final.","O projeto obviamente não custa nada.","Não existe nenhum argumento contra o projeto."],0,"Reconhece um ponto contrário antes de matizá-lo com uma vantagem a longo prazo."],
      ["fill","Complete: \"___, a proposta tem mais vantagens do que desvantagens.\"",["Em definitiva","Embora","A menos que","Duvido que"],0,"'Em definitiva' se usa para fechar um argumento com uma conclusão geral."],
      ["mcq","Que função tem \"vale a pena notar que\" num argumento?",["Destaca um ponto que quem fala considera especialmente relevante.","Introduz uma hipótese irreal.","Expressa dúvida total sobre o tema.","Encerra a conversa abruptamente."],0,"É uma fórmula para destacar um ponto relevante dentro do argumento."],
      ["writing","Escreva um parágrafo argumentativo de 70-90 palavras sobre um tema debatido (por exemplo, o trabalho remoto). Reconheça um ponto contrário antes de defender sua posição.",[],["por um lado","é inegável","em definitiva"],"Estrutura: reconhecimento do ponto contrário, sua posição e uma conclusão.","Contribuição para um debate escrito em aula."],
    ["mcq","¿Cómo se dice \"por un lado / por otro lado\" en portugués?",["é inegável que","por um lado / por outro","em definitiva","vale a pena notar que"],1,"\"por un lado / por otro lado\" se dice \"por um lado / por outro\" en portugués."],
    ["mcq","¿Cómo se dice \"es innegable que\" en portugués?",["em definitiva","vale a pena notar que","por um lado / por outro","é inegável que"],3,"\"es innegable que\" se dice \"é inegável que\" en portugués."],
    ]
  },
  {
    id:"pt_c1_register_nuance", level:"C1", title:"Registro e nuance em textos formais", emoji:"🎩", xp:88,
    description:"Use atenuação (hedging) para expressar afirmações prudentes em registro formal.",
    study:{
      vocab:[
        ["conviria destacar que", "convendría señalar que"],
        ["seria oportuno matizar que", "convendría aclarar que"],
        ["tender a pensar que", "tender a pensar que"],
        ["de modo geral", "en términos generales"]
      ],
      grammar:[
        ["Atenuação (hedging) em registro formal","O futuro do pretérito (condicional) atenua afirmações e as torna mais prudentes e formais que o presente do indicativo.","Conviria argumentar que a medida é prematura, embora os dados ainda sejam limitados."]
      ]
    },
    ex:[
      ["mcq","Qual frase soa mais apropriada em um relatório formal?",["Conviria destacar que os resultados, embora promissores, exigem mais análise.","Os resultados são ótimos, ponto final.","Isso é óbvio para qualquer um.","Não há mais nada a dizer sobre isso."],0,"O registro formal favorece a atenuação e a prudência argumentativa."],
      ["fill","Complete: \"___ matizar que o estudo se baseia em uma amostra reduzida.\"",["Seria oportuno","É óbvio","Nunca","Sempre"],0,"'Seria oportuno' introduz uma recomendação atenuada, própria do registro formal."],
      ["mcq","Que efeito produz usar o futuro do pretérito em vez do presente num relatório?",["Suaviza a afirmação e deixa espaço para dúvida razoável.","Torna a afirmação mais categórica e segura.","Muda completamente o significado.","Não tem nenhum efeito estilístico."],0,"O futuro do pretérito atenua a afirmação sem negá-la."],
      ["writing","Redija 60-80 palavras de um relatório breve que avalie uma proposta, usando pelo menos duas expressões de atenuação.",[],["conviria destacar","seria oportuno","de modo geral"],"O registro formal prioriza a prudência argumentativa sobre a certeza absoluta.","Relatório interno para um comitê diretivo."],
    ["mcq","¿Cómo se dice \"convendría señalar que\" en portugués?",["de modo geral","conviria destacar que","seria oportuno matizar que","tender a pensar que"],1,"\"convendría señalar que\" se dice \"conviria destacar que\" en portugués."],
    ["mcq","¿Cómo se dice \"convendría aclarar que\" en portugués?",["de modo geral","conviria destacar que","seria oportuno matizar que","tender a pensar que"],2,"\"convendría aclarar que\" se dice \"seria oportuno matizar que\" en portugués."],
    ]
  },
  {
    id:"pt_c1_subjunctive_past", level:"C1", title:"Mais-que-perfeito do subjuntivo", emoji:"⏳", xp:90,
    description:"Expresse hipóteses irreais no passado com concordância temporal complexa.",
    study:{
      vocab:[
        ["se eu tivesse sabido", "si lo hubiera sabido"],
        ["era impossível que", "era imposible que"],
        ["teria bastado", "habría bastado"],
        ["só quando", "no fue hasta que"]
      ],
      grammar:[
        ["Pretérito mais-que-perfeito do subjuntivo e concordância temporal","Para hipóteses irreais no passado: se + mais-que-perfeito do subjuntivo, futuro do pretérito composto na principal.","Se eu tivesse sabido o risco, teria agido de outra forma."]
      ]
    },
    ex:[
      ["mcq","Qual frase expressa corretamente uma hipótese irreal no passado?",["Se tivéssemos revisado o contrato a tempo, teríamos evitado o problema.","Se revisamos o contrato a tempo, teríamos evitado o problema.","Se tivéssemos revisado o contrato a tempo, evitamos o problema.","Se teríamos revisado o contrato, teríamos evitado o problema."],0,"É preciso mais-que-perfeito do subjuntivo na condição e futuro do pretérito composto na consequência."],
      ["fill","Complete: \"Era impossível que a equipe ___ o projeto sem mais recursos.\"",["tivesse terminado","tinha terminado","terminaria","termine já"],0,"Depois de 'era impossível que' (dúvida no passado) usa-se subjuntivo; para uma ação anterior, o mais-que-perfeito do subjuntivo."],
      ["mcq","O que distingue o mais-que-perfeito do subjuntivo do imperfeito do subjuntivo?",["O mais-que-perfeito situa a hipótese num momento anterior a outro ponto do passado.","Não há nenhuma diferença real entre os dois.","O mais-que-perfeito só se usa para o futuro.","O imperfeito do subjuntivo não existe em português."],0,"O mais-que-perfeito acrescenta uma camada temporal anterior dentro do passado."],
      ["writing","Escreva 70-90 palavras sobre uma decisão passada que você mudaria. Use pelo menos duas estruturas com o mais-que-perfeito do subjuntivo.",[],["se eu tivesse sabido","teria bastado","só quando"],"Verifique se as estruturas combinam corretamente o mais-que-perfeito do subjuntivo e o futuro do pretérito composto.","Reflexão retrospectiva sobre uma decisão profissional."],
    ["mcq","¿Cómo se dice \"si lo hubiera sabido\" en portugués?",["era impossível que","teria bastado","se eu tivesse sabido","só quando"],2,"\"si lo hubiera sabido\" se dice \"se eu tivesse sabido\" en portugués."],
    ["mcq","¿Cómo se dice \"era imposible que\" en portugués?",["se eu tivesse sabido","só quando","teria bastado","era impossível que"],3,"\"era imposible que\" se dice \"era impossível que\" en portugués."],
    ]
  },
  {
    id:"pt_c1_nominalization", level:"C1", title:"Nominalização e estilo formal", emoji:"📑", xp:86,
    description:"Transforme verbos em substantivos para alcançar um registro acadêmico e técnico.",
    study:{
      vocab:[
        ["a implementação de", "la implementación de"],
        ["a ausência de", "la ausencia de"],
        ["dar origem a", "dar lugar a"],
        ["acarretar", "conllevar"]
      ],
      grammar:[
        ["Nominalização para um registro formal","Transformar verbos em substantivos (implementar → a implementação) é típico de textos acadêmicos e técnicos.","A implementação tardia da medida deu origem a atrasos generalizados."]
      ]
    },
    ex:[
      ["mcq","Qual reformulação é mais adequada a um relatório técnico?",["A ausência de coordenação entre as equipes deu origem à duplicação de tarefas.","Eles não se coordenaram, então fizeram as coisas repetidas.","As equipes não se falaram, então foi uma bagunça.","Foi um desastre porque ninguém se comunicou."],0,"A nominalização condensa a informação num tom mais objetivo."],
      ["fill","Complete: \"A ___ de novas tecnologias acarreta custos iniciais elevados.\"",["adoção","adotar","adotando","adotado"],0,"O substantivo 'adoção' (nominalização de 'adotar') se integra à estrutura formal com artigo."],
      ["mcq","Que vantagem a nominalização traz a um texto técnico?",["Permite condensar informações e adotar um tom mais objetivo e impessoal.","Torna o texto mais informal e próximo do leitor.","Elimina toda possibilidade de precisão.","Não traz nenhuma vantagem real."],0,"A nominalização é central para densidade e objetividade no registro técnico."],
      ["writing","Reescreva em 60-80 palavras um parágrafo informal sobre um problema de trabalho, transformando-o num trecho de relatório formal com pelo menos três nominalizações.",[],["a implementação","a ausência de","dar origem a"],"Identifique os verbos-chave e transforme-os em substantivos para um tom mais formal.","Transformar uma reclamação informal em um relatório interno."],
    ["mcq","¿Cómo se dice \"la implementación de\" en portugués?",["acarretar","dar origem a","a ausência de","a implementação de"],3,"\"la implementación de\" se dice \"a implementação de\" en portugués."],
    ["mcq","¿Cómo se dice \"la ausencia de\" en portugués?",["dar origem a","a implementação de","a ausência de","acarretar"],2,"\"la ausencia de\" se dice \"a ausência de\" en portugués."],
    ]
  },
  {
    id:"pt_c1_causal_connectors", level:"C1", title:"Conectores complexos de causa-consequência", emoji:"🔗", xp:88,
    description:"Encadeie causas e consequências com precisão usando conectores avançados.",
    study:{
      vocab:[
        ["dado que", "dado que"],
        ["na medida em que", "en la medida en que"],
        ["daí que", "por eso / razón por la cual"],
        ["sob pena de", "bajo pena de"]
      ],
      grammar:[
        ["Conectores complexos de causa-consequência","'Daí que' introduz uma consequência lógica e pede subjuntivo; 'dado que' e 'na medida em que' introduzem causas com indicativo.","Dado que os custos aumentaram, daí que se revisasse o orçamento."]
      ]
    },
    ex:[
      ["mcq","Qual frase usa corretamente 'daí que'?",["Os dados eram contraditórios, daí que se atrasasse a publicação do relatório.","Os dados eram contraditórios, daí que se atrasou a publicação.","Daí que os dados eram contraditórios, se atrasou o relatório.","Os dados, daí que contraditórios, atrasaram o relatório."],0,"'Daí que' introduz uma consequência lógica e pede subjuntivo: 'se atrasasse'."],
      ["fill","Complete: \"___ os recursos disponíveis, o projeto avançará mais devagar do que o previsto.\"",["Dado","Daí que","Sob pena de","Conviria destacar"],0,"'Dado' introduz uma causa de forma direta."],
      ["mcq","O que significa aproximadamente 'na medida em que'?",["Na proporção ou grau em que algo ocorre; equivalente a 'à medida que'.","Exatamente o mesmo que 'embora'.","Introduz sempre uma hipótese irreal.","Usa-se apenas para falar de medidas físicas."],0,"Expressa uma proporcionalidade entre dois fatos relacionados."],
      ["writing","Escreva um parágrafo de 70-90 palavras explicando a causa e a consequência de uma decisão empresarial, usando pelo menos dois conectores desta lição.",[],["dado que","daí que","na medida em que"],"Distinga com cuidado os conectores de causa dos de consequência.","Análise causal para um relatório de gestão."],
    ["mcq","¿Cómo se dice \"en la medida en que\" en portugués?",["na medida em que","daí que","dado que","sob pena de"],0,"\"en la medida en que\" se dice \"na medida em que\" en portugués."],
    ["mcq","¿Cómo se dice \"por eso / razón por la cual\" en portugués?",["na medida em que","sob pena de","daí que","dado que"],2,"\"por eso / razón por la cual\" se dice \"daí que\" en portugués."],
    ]
  },
  {
    id:"pt_c1_mediation_summary", level:"C1", title:"Mediação: sintetizar com precisão", emoji:"🗂️", xp:90,
    description:"Resuma informações complexas conservando as relações lógicas entre as ideias.",
    study:{
      vocab:[
        ["em síntese", "en resumen"],
        ["o ponto central é que", "el punto clave es que"],
        ["convém destacar", "cabe destacar"],
        ["a grandes traços", "a grandes rasgos"]
      ],
      grammar:[
        ["Mediação: sintetizar com precisão","Um bom resumo C1 conserva a relação lógica entre as ideias (causa, contraste, condição), não apenas as palavras-chave.","A grandes traços, o relatório conclui que o plano é viável, embora convenha destacar os riscos de financiamento."]
      ]
    },
    ex:[
      ["mcq","Qual é o melhor resumo para uma audiência com pouco tempo?",["A grandes traços, o relatório recomenda uma expansão gradual, condicionada à obtenção de financiamento externo.","O relatório tem muitas páginas sobre expansão e financiamento e outras coisas.","A expansão será perfeita se todos se esforçarem.","Há financiamento, expansão e um relatório envolvidos."],0,"Um bom resumo prioriza a decisão, a condição e o risco principal."],
      ["fill","Complete: \"___, o estudo mostra uma melhora moderada, mas constante, nos resultados.\"",["Em síntese","Sob pena de","Daí que","Conviria"],0,"'Em síntese' introduz uma conclusão geral que fecha o resumo."],
      ["mcq","O que distingue uma boa mediação (resumo) de uma simples lista de palavras-chave?",["Conserva as relações lógicas (causa, contraste, condição) entre as ideias originais.","Elimina toda relação lógica e deixa só termos soltos.","Deve ser sempre mais longa que o texto original.","Não deve incluir nenhuma conclusão."],0,"A mediação exige preservar o sentido e as conexões, não apenas o vocabulário."],
      ["writing","Resuma em 60-80 palavras um relatório imaginário que avalia duas opções estratégicas, indicando a recomendação principal e uma condição ou risco.",[],["em síntese","o ponto central","convém destacar"],"Priorize a decisão, a razão e uma condição ou risco relevante.","Resumo executivo para a diretoria."],
    ["mcq","¿Cómo se dice \"el punto clave es que\" en portugués?",["a grandes traços","convém destacar","o ponto central é que","em síntese"],2,"\"el punto clave es que\" se dice \"o ponto central é que\" en portugués."],
    ["mcq","¿Cómo se dice \"cabe destacar\" en portugués?",["a grandes traços","o ponto central é que","convém destacar","em síntese"],2,"\"cabe destacar\" se dice \"convém destacar\" en portugués."],
    ]
  },
  {
    id:"pt_c1_concession_refutation", level:"C1", title:"Concessão avançada e refutação", emoji:"⚔️", xp:92,
    description:"Reconheça argumentos contrários com força retórica antes de refutá-los com precisão.",
    study:{
      vocab:[
        ["se é verdade que... não é menos certo que", "si bien es cierto que... no es menos cierto que"],
        ["longe de", "lejos de"],
        ["isso não impede que", "eso no impide"],
        ["em última instância", "en última instancia"]
      ],
      grammar:[
        ["Concessão avançada e refutação","Estas estruturas reconhecem um argumento contrário com força retórica antes de refutá-lo ou matizá-lo com precisão.","Se é verdade que o plano reduz custos, não é menos certo que introduz riscos consideráveis."]
      ]
    },
    ex:[
      ["mcq","Qual frase refuta um argumento com mais precisão retórica?",["Longe de resolver o problema, a medida poderia agravá-lo a longo prazo.","A medida é ruim, pronto.","Não serve para nada, obviamente.","Todo mundo sabe que está errado."],0,"'Longe de' introduz uma refutação matizada e argumentada, não uma simples negação."],
      ["fill","Complete: \"O projeto gerou lucros; ___, não cobriu os custos iniciais.\"",["isso não impede que se reconheça que","dado que","daí que","na medida em que"],0,"'Isso não impede que se reconheça que' introduz uma concessão seguida de matização."],
      ["mcq","Que função retórica cumpre \"se é verdade que... não é menos certo que\"?",["Reconhece um ponto válido antes de introduzir uma objeção igualmente sólida.","Nega completamente o primeiro ponto.","Expressa dúvida total sobre ambos os pontos.","É uma fórmula puramente informal."],0,"É uma estrutura de concessão-refutação característica do registro argumentativo culto."],
      ["writing","Escreva um parágrafo de 80-100 palavras que refute com nuances uma postura sobre um tema controverso (por exemplo, a automação do trabalho), usando pelo menos duas estruturas de concessão-refutação.",[],["se é verdade que","longe de","em última instância"],"Reconheça primeiro o ponto contrário e depois matize-o ou refute-o com precisão.","Artigo de opinião para uma revista especializada."],
    ["mcq","¿Cómo se dice \"si bien es cierto que... no es menos cierto que\" en portugués?",["em última instância","se é verdade que... não é menos certo que","isso não impede que","longe de"],1,"\"si bien es cierto que... no es menos cierto que\" se dice \"se é verdade que... não é menos certo que\" en portugués."],
    ["mcq","¿Cómo se dice \"lejos de\" en portugués?",["longe de","isso não impede que","em última instância","se é verdade que... não é menos certo que"],0,"\"lejos de\" se dice \"longe de\" en portugués."],
    ]
  },
  {
    id:"pt_c2_style_implication", level:"C2", title:"Estilo, implicação e nuance", emoji:"🔎", xp:92,
    description:"Interpreta o subtexto e reformula ideias complexas usando inversão enfática e litotes.",
    study:{
      vocab:[
        ["de modo algum", "de ninguna manera","Negação enfática que antecipa o verbo."],
        ["ficar aquém de", "quedarse corto respecto a"],
        ["um pressuposto tácito", "un supuesto tácito"],
        ["matizar uma afirmação", "matizar una afirmación"]
      ],
      grammar:[
        ["Inversão após negação enfática","Com expressões negativas enfáticas no início da frase ('de modo algum', 'em nenhuma circunstância', 'sob nenhum pretexto'), o verbo costuma anteceder o sujeito em registo culto.","De modo algum estes resultados deveriam ser considerados definitivos."],
        ["Litotes: afirmar negando o contrário","Negar o contrário de uma ideia é um recurso culto para afirmá-la com prudência e nuance.","A proposta não deixa de ser arriscada, ainda que os seus benefícios sejam evidentes."]
      ]
    },
    ex:[
      ["mcq","Que reformulação mantém melhor o sentido de \"Os dados são sugestivos, não conclusivos\"?",["Os dados apontam numa direção, mas não bastam para uma conclusão definitiva.","Os dados demonstram a conclusão sem qualquer dúvida.","Não existe nenhum dado disponível sobre o tema.","A conclusão é sugestiva, mas os dados são definitivos."],0,"Mantém a diferença entre indício e prova conclusiva."],
      ["fill","Completa a inversão: \"De modo algum ___ ser considerados definitivos estes resultados.\"",["deveriam","deveria","devíamos","deverias"],0,"O verbo concorda com o sujeito plural 'estes resultados': deveriam ser considerados."],
      ["mcq","Em \"A proposta não deixa de ser arriscada\", que função tem a litote?",["Afirma com nuance que a proposta é de facto arriscada.","Nega por completo que a proposta seja arriscada.","Afirma que a proposta é totalmente segura.","Não acrescenta nenhum significado."],0,"'Não deixa de ser' nega o contrário para afirmar algo com prudência."],
      ["translate","Traduz: \"By no means should this decision be treated as final.\"",["De modo algum esta decisão deveria ser tratada como definitiva.","Esta decisão é definitiva de modo algum.","Deveria ser tratada de modo algum esta decisão.","Esta decisão de modo algum definitiva deveria ser."],0,"'De modo algum' + inversão é o equivalente culto de 'by no means'."],
      ["writing","Escreve 60-80 palavras sobre uma decisão empresarial polémica: usa pelo menos uma inversão enfática ('de modo algum'/'em nenhuma circunstância') e uma litote.",[],["de modo algum","não deixa de ser","em nenhuma circunstância"],"O nível C2 combina precisão argumentativa com recursos retóricos de matização.","Coluna de opinião para uma revista especializada."],
    ["mcq","¿Cómo se dice \"de ninguna manera\" en portugués?",["um pressuposto tácito","matizar uma afirmação","ficar aquém de","de modo algum"],3,"\"de ninguna manera\" se dice \"de modo algum\" en portugués."],
    ]
  },
  {
    id:"pt_c2_rhetoric_tone", level:"C2", title:"Retórica, tom e efeito estilístico", emoji:"🎭", xp:94,
    description:"Escolhe recursos retóricos e ajusta o tom consoante a audiência, o propósito e o efeito pretendido.",
    study:{
      vocab:[
        ["encontrar um equilíbrio", "encontrar un equilibrio"],
        ["uma pergunta retórica", "una pregunta retórica"],
        ["evocar", "evocar"],
        ["assumir responsabilidade de forma proporcional", "reconocer la responsabilidad de forma proporcionada"]
      ],
      grammar:[
        ["Efeito estilístico e escolha lexical","A escolha de uma estrutura ou palavra pode criar proximidade, distância, urgência ou ironia, sem alterar o conteúdo literal.","Não é de todo infundado, ainda que certamente pudesse ser melhorado."],
        ["Reformulação para um registo público formal","Um comunicado público reconhece o impacto, assume responsabilidade de forma proporcional e propõe uma ação verificável, evitando tanto a frieza como a dramatização.","Reconhecemos o transtorno causado e já estamos a aplicar medidas para evitar que se repita."]
      ]
    },
    ex:[
      ["mcq","Que efeito produz geralmente a frase \"não é de todo infundado\"?",["Uma aprovação cautelosa e deliberadamente atenuada.","Uma aprovação entusiástica e sem reservas.","Uma rejeição total da ideia.","Uma instrução técnica sem qualquer juízo de valor."],0,"A dupla atenuação cria uma avaliação reservada, típica do registo culto."],
      ["mcq","Que versão se adapta melhor a um pedido de desculpas público formal?",["Reconhecemos o transtorno causado e estamos a tomar medidas imediatas para evitar que se repita.","Bem, que momento constrangedor, isto passa.","Isso não foi de todo culpa nossa.","Toda a gente comete erros, não vale a pena insistir."],0,"O registo formal reconhece o impacto, assume responsabilidade e propõe uma ação concreta."],
      ["fill","Completa: \"O discurso procura ___ um sentido de responsabilidade partilhada.\"",["evocar","invocar","provocar","revogar"],0,"'Evocar' significa suscitar um sentimento ou uma ideia em quem ouve."],
      ["mcq","Qual é o principal objetivo de uma pergunta retórica num discurso persuasivo?",["Envolver a audiência e sugerir uma resposta sem a formular explicitamente.","Pedir uma informação que o orador realmente desconhece.","Confundir deliberadamente a audiência.","Mudar de assunto sem que se note."],0,"A pergunta retórica orienta o ouvinte para uma conclusão sem a declarar diretamente."],
      ["writing","Reformula esta mensagem interna brusca num comunicado público de 50-70 palavras: \"A equipa falhou, isto tem de ser resolvido já.\" Reconhece o problema, evita dramatizá-lo e propõe uma ação verificável.",[],["reconhecemos","medidas","evitar que se repita"],"Avalia a proporção e o tom: nem frieza excessiva nem dramatização desnecessária.","Comunicado: um serviço digital esteve indisponível durante duas horas."],
    ["mcq","¿Cómo se dice \"encontrar un equilibrio\" en portugués?",["encontrar um equilíbrio","assumir responsabilidade de forma proporcional","evocar","uma pergunta retórica"],0,"\"encontrar un equilibrio\" se dice \"encontrar um equilíbrio\" en portugués."],
    ]
  },
  {
    id:"pt_c2_critical_reading", level:"C2", title:"Leitura crítica e implicaturas", emoji:"🧩", xp:96,
    description:"Interpreta pressuposições, linguagem carregada de valor e conclusões implícitas em textos de opinião.",
    study:{
      vocab:[
        ["dar a entender", "dar a entender"],
        ["uma ressalva", "una salvedad"],
        ["linguagem carregada", "lenguaje cargado (tendencioso)"],
        ["tirar uma inferência", "sacar una inferencia"]
      ],
      grammar:[
        ["Pressuposição","Uma frase pode apresentar uma ideia como já aceite, sem a demonstrar explicitamente.","Até os críticos que restavam aceitaram o plano revisto."]
      ]
    },
    ex:[
      ["mcq","O que pressupõe a frase \"Até os críticos que restavam aceitaram o plano revisto\"?",["Que houve críticos e que alguns já se tinham convencido antes.","Que ninguém alguma vez criticou o plano.","Que o plano foi totalmente rejeitado.","Que não existe nenhum plano revisto."],0,"'Até' e 'que restavam' apresentam a informação como já partilhada e orientam a inferência."],
      ["mcq","Qual é uma leitura crítica apropriada de \"uma solução audaz para um sistema obsoleto\"?",["O adjetivo 'obsoleto' avalia o sistema e predispõe o leitor a favor da solução.","A frase é completamente neutra e não contém nenhum juízo de valor.","A solução já provou ser eficaz.","Não contém qualquer avaliação implícita."],0,"'Obsoleto' é linguagem carregada, não um facto comprovado objetivamente."],
      ["fill","Completa: \"O artigo inclui uma ___ importante: os resultados não foram replicados.\"",["ressalva","ideia","consequência","comparação"],0,"Uma 'ressalva' limita o alcance de uma afirmação."],
      ["mcq","Na frase \"É tempo de devolver o bom senso à política pública\", o que implica o verbo 'devolver'?",["Dá a entender que o bom senso existia antes e se perdeu, sem o demonstrar.","Afirma com dados que a política atual carece de bom senso.","É uma descrição neutra, sem qualquer carga de valor.","Propõe uma política concreta e verificável."],0,"'Devolver' pressupõe uma perda anterior, uma estratégia retórica comum sem prova."],
      ["speaking","Analisa em 50-70 palavras uma frase persuasiva à tua escolha: identifica uma pressuposição, uma palavra carregada de valor e uma inferência razoável.",[],["pressupõe","linguagem","inferência"],"Não basta concordar ou discordar: explica como a linguagem orienta a interpretação.","Frase de exemplo: \"É tempo de pôr fim a esta prática ultrapassada.\""],
    ["arrange","Ordena: [dar / a / entender]",["dar a entender","dar entender a","entender dar a","a dar entender"],0,"El orden correcto es: \"dar a entender\"."],
    ]
  },
  {
    id:"pt_a1_dates_time", level:"A1", title:"Datas, dias e meses", emoji:"📅", xp:35,
    description:"Aprende os dias da semana, os meses e como falar de datas em português.",
    study: {
      vocab: [
        ["segunda-feira, terça-feira, quarta-feira... domingo", "lunes, martes, miércoles... domingo"],
        ["janeiro, fevereiro, março... dezembro", "enero, febrero, marzo... diciembre"],
        ["Que dia é hoje?", "¿Qué día es hoy?"],
        ["Hoje é dia 5 de maio.", "Hoy es 5 de mayo.", "Em português: \"dia\" + número + \"de\" + mês."],
        ["Quando é o teu aniversário?", "¿Cuándo es tu cumpleaños?"]
      ],
      grammar: [
        ["O artigo com os dias", "Os dias da semana usam \"a\" (feminino) para hábitos: \"às segundas-feiras\".", "Vou ao ginásio às segundas-feiras."]
      ]
    },
    ex:[
      ["mcq","Como se diz \"Wednesday\" em português?",["Quarta-feira","Terça-feira","Quinta-feira","Sexta-feira"],0,"\"Quarta-feira\" é o terceiro dia da semana em português."],
      ["mcq","Qual é a forma correta de perguntar que dia é hoje?",["Que dia é hoje?","Que horas são hoje?","Quantos anos tens?","Onde vives?"],0,"\"Que dia é hoje?\" pergunta pelo dia da semana ou pela data."],
      ["fill","Completa: \"O meu aniversário é ___ 10 de março.\"",["dia","o","em","na"],0,"Para uma data concreta usa-se \"dia\": \"dia 10 de março\"."],
      ["translate","Traduz: \"Today is Monday.\"",["Hoje é segunda-feira.","Hoje é terça-feira.","Ontem foi segunda-feira.","Hoje é uma segunda-feira."],0,"\"Today is Monday\" = \"Hoje é segunda-feira\", sem artigo antes do dia."],
      ["arrange","Ordena: [ginásio / vou / segundas-feiras / ao / às]",["Vou ao ginásio às segundas-feiras","Às segundas-feiras vou ao ginásio","Ao ginásio vou às segundas-feiras","Vou às segundas-feiras ao ginásio"],0,"Sujeito + verbo + complemento + \"às segundas-feiras\": \"Vou ao ginásio às segundas-feiras.\""],
      ["writing","Escreve 3 frases (20-30 palavras) em português sobre a tua semana: que dia é hoje, quando é o teu aniversário e o que fazes num dia específico.",[],["hoje","aniversário","dia"],"Inclui pelo menos um dia da semana e um mês. Revê o uso de \"dia\" e \"às\"."]
    ]
  },
  {
    id:"pt_a2_directions_transport", level:"A2", title:"Na cidade: indicações e transportes", emoji:"🧭", xp:42,
    description:"Pede e dá indicações, e fala sobre meios de transporte em português.",
    study: {
      vocab: [
        ["Como chego a...?", "¿Cómo llego a...?"],
        ["Siga em frente / Vire à esquerda / à direita", "Sigue recto / Gira a la izquierda / derecha"],
        ["a paragem de autocarro, a estação de comboio", "la parada de autobús, la estación de tren"],
        ["Fica a dois quarteirões daqui.", "Está a dos calles de aquí."],
        ["Quanto tempo demora a chegar lá?", "¿Cuánto se tarda en llegar?"]
      ],
      grammar: [
        ["O imperativo para dar indicações", "Para dar instruções usa-se o imperativo (tu/você).", "Siga em frente e vire à direita no semáforo."]
      ]
    },
    ex:[
      ["mcq","Queres chegar ao museu. O que perguntas?",["Como chego ao museu?","Que horas são no museu?","De quem é o museu?","Quanto custa o autocarro?"],0,"\"Como chego a...?\" é a pergunta padrão para pedir indicações."],
      ["mcq","Alguém te diz: \"Siga em frente e vire à esquerda na praça.\" O que deves fazer primeiro?",["Caminhar em frente.","Virar à direita.","Apanhar o autocarro.","Perguntar de novo."],0,"\"Siga em frente\" é a primeira instrução; a curva vem depois."],
      ["fill","Completa: \"A estação ___ a dois quarteirões daqui.\"",["fica","é","tem","faz"],0,"\"Fica\" indica localização: \"A estação fica a dois quarteirões daqui.\""],
      ["translate","Traduz: \"Turn right at the traffic light.\"",["Vire à direita no semáforo.","Vire à esquerda na praça.","Siga em frente no semáforo.","Pare no semáforo."],0,"\"Turn right\" = \"Vire à direita\"; \"at the traffic light\" = \"no semáforo\"."],
      ["arrange","Ordena: [autocarro / apanhe / paragem / o / na]",["Apanhe o autocarro na paragem","O autocarro apanhe na paragem","Na paragem apanhe o autocarro","Apanhe na paragem o autocarro"],0,"Verbo + objeto + complemento de lugar: \"Apanhe o autocarro na paragem.\""],
      ["speaking","Explica em português, em 40-60 palavras, como chegar de tua casa a um lugar próximo. Usa pelo menos duas indicações e um meio de transporte.",[],["vire","em frente","minutos"],"Organiza a explicação em ordem: primeiro, depois, finalmente."]
    ]
  },
  {
    id:"pt_b1_job_interview", level:"B1", title:"Trabalho: entrevistas e rotina profissional", emoji:"💼", xp:60,
    description:"Fala sobre a tua experiência profissional e responde a perguntas de entrevista em português.",
    study: {
      vocab: [
        ["O que fazes profissionalmente?", "¿A qué te dedicas?"],
        ["tenho experiência em...", "Tengo experiencia en..."],
        ["os meus pontos fortes / fracos", "mis fortalezas / debilidades"],
        ["trabalhar em equipa, cumprir prazos", "trabajar en equipo, cumplir los plazos"],
        ["um contrato a tempo inteiro / parcial", "un contrato a tiempo completo / parcial"]
      ],
      grammar: [
        ["Pretérito perfeito para experiência", "Usa-se o pretérito perfeito para falar de experiência profissional passada.", "Trabalhei no atendimento ao cliente durante três anos."],
        ["Conectores para estruturar uma resposta", "\"Por um lado... por outro\" ajuda a organizar vantagens e desvantagens.", "Por um lado gosto de trabalhar em equipa, por outro valorizo alguma autonomia."]
      ]
    },
    ex:[
      ["mcq","Numa entrevista perguntam-te: \"O que fazes profissionalmente?\". Qual é uma resposta apropriada?",["Trabalho como designer gráfico numa agência.","Sim, obrigado, muito bem.","Tenho vinte e cinco anos.","Vivo no centro da cidade."],0,"\"O que fazes profissionalmente?\" pergunta pela tua profissão."],
      ["mcq","Que resposta descreve melhor um ponto forte de forma profissional?",["Sou bom a organizar projetos e a cumprir prazos.","Sou o melhor de todos, sem dúvida.","Não tenho nenhum ponto fraco.","Trabalho quando me apetece."],0,"Uma boa resposta é específica e verificável, sem exagerar."],
      ["fill","Completa: \"___ trabalhado em vendas durante dois anos.\"",["Tenho","Sou","Estou","Fui"],0,"\"Tenho trabalhado\" descreve experiência relevante até hoje."],
      ["translate","Traduz: \"I have experience working in a team.\"",["Tenho experiência a trabalhar em equipa.","Tenho experiência trabalho equipa.","Equipa tenho experiência trabalho.","Tenho experiência trabalhar equipa é."],0,"\"I have experience working in a team\" = \"Tenho experiência a trabalhar em equipa.\""],
      ["arrange","Ordena: [gosto / trabalhar / de / equipa / em]",["Gosto de trabalhar em equipa","De gosto trabalhar em equipa","Em equipa gosto de trabalhar","Trabalhar gosto de em equipa"],0,"\"Gosto de\" + infinitivo: \"Gosto de trabalhar em equipa.\""],
      ["writing","Escreve em português uma resposta de entrevista de 45-65 palavras à pergunta \"Porque queres este trabalho?\". Menciona a tua experiência, um ponto forte e a tua motivação.",[],["experiência","porque","gostaria"],"Estrutura: experiência relevante + ponto forte + motivação concreta.","Entrevista para um cargo de atendimento ao cliente."]
    ]
  },
  {
    id:"pt_b2_media_literacy", level:"B2", title:"Meios de comunicação: analisar notícias", emoji:"📰", xp:78,
    description:"Distingue factos de opiniões e avalia a fiabilidade de uma notícia em português.",
    study: {
      vocab: [
        ["uma fonte fiável / pouco fiável", "una fuente fiable / poco fiable"],
        ["segundo fontes próximas do caso", "según fuentes cercanas al caso"],
        ["uma manchete sensacionalista", "un titular sensacionalista"],
        ["cruzar as informações", "contrastar información"],
        ["um facto verificado, uma opinião", "un hecho verificado, una opinión"]
      ],
      grammar: [
        ["Verbos de atribuição", "\"Segundo\", \"afirma que\", \"aponta que\" indicam de onde vem uma afirmação e o seu grau de certeza.", "Segundo o relatório, as vendas aumentaram 10%."],
        ["Distinguir facto de opinião", "Um facto pode ser verificado; uma opinião expressa um juízo de valor.", "O artigo afirma (opinião) que a medida vai 'certamente' falhar, embora os dados (facto) ainda sejam preliminares."]
      ]
    },
    ex:[
      ["mcq","Qual destas frases é um facto verificável, não uma opinião?",["O relatório mostra que o desemprego caiu 2% neste trimestre.","Esta política é claramente um desastre.","Todos sabem que esta medida não vai funcionar.","É óbvio que o governo está errado."],0,"Um facto verificável cita uma fonte e um dado concreto, sem juízo de valor."],
      ["mcq","Manchete: \"Caos total! Cidade à beira do colapso após nova norma.\" O que sugere o estilo da manchete?",["Procura um impacto emocional mais do que informação precisa.","É um resumo neutro e objetivo dos factos.","Cita uma fonte oficial verificável.","Não contém nenhum juízo de valor."],0,"A linguagem exagerada (\"caos total\", \"à beira do colapso\") é típica do sensacionalismo."],
      ["fill","Completa: \"___ fontes próximas do projeto, o lançamento será adiado um mês.\"",["Segundo","Embora","Porque","No entanto"],0,"\"Segundo\" introduz a fonte de uma informação, indicando que não é um facto confirmado pelo próprio meio."],
      ["translate","Traduz: \"It is important to cross-check information before sharing it.\"",["É importante cruzar as informações antes de as partilhar.","É importante partilhar as informações antes de as verificar.","É importante informação partilhar importante.","Cruzar é partilhar informações importantes antes."],0,"\"Cross-check information\" = \"cruzar as informações\"; \"before sharing it\" = \"antes de as partilhar\"."],
      ["mcq","Um artigo diz: \"Os especialistas alertam que o número pode estar sobrestimado.\" Que nível de certeza transmite?",["Uma possibilidade razoável, não uma certeza absoluta.","Uma certeza total e verificada.","Uma opinião pessoal do jornalista sem qualquer fonte.","Um facto já demonstrado com dados definitivos."],0,"\"Pode estar\" indica probabilidade, não uma afirmação categórica."],
      ["writing","Escreve em português uma análise de 55-75 palavras sobre uma notícia (real ou inventada): identifica um facto verificável, uma opinião e avalia quão fiável te parece a fonte.",[],["segundo","facto","opinião"],"Separa claramente o que é um dado citado e o que é uma avaliação do autor."]
    ]
  },
  {
    id:"pt_c1_figurative_language", level:"C1", title:"Linguagem figurada e expressões idiomáticas", emoji:"🗯️", xp:88,
    description:"Interpreta expressões idiomáticas e metáforas comuns em português.",
    study: {
      vocab: [
        ["custar os olhos da cara", "costar un ojo de la cara"],
        ["estar entre a espada e a parede", "estar entre la espada y la pared"],
        ["fazer troça de alguém", "tomarle el pelo a alguien"],
        ["não ter papas na língua", "no andarse con rodeos"],
        ["mexer-se e desenrascar-se", "organizarse de una vez"]
      ],
      grammar: [
        ["Interpretar expressões idiomáticas em contexto", "O significado de uma expressão idiomática quase nunca é literal; deve ser deduzido do contexto comunicativo.", "\"Esta viagem custou-me os olhos da cara\" não fala de olhos reais, mas de um gasto muito elevado."]
      ]
    },
    ex:[
      ["mcq","\"Este carro custou-me os olhos da cara.\" O que significa a expressão?",["Foi muito caro.","Foi muito barato.","O carro ficou danificado.","Teve um acidente."],0,"\"Custar os olhos da cara\" significa que algo teve um preço muito alto."],
      ["mcq","Alguém diz: \"Estou entre a espada e a parede com esta decisão.\" O que transmite?",["Encontra-se perante duas opções difíceis, sem uma saída confortável.","Sente-se completamente tranquilo com a sua decisão.","Não tem nenhuma opção a considerar.","Já tomou a decisão sem qualquer dúvida."],0,"A expressão descreve uma situação sem uma opção claramente boa."],
      ["fill","Completa: \"Para de fazer ___ de mim, sei que não é verdade.\"",["troça","pé","mão","cara"],0,"\"Fazer troça de alguém\" significa brincar ou enganar de forma leve."],
      ["translate","Traduz de forma natural (não literal): \"She doesn't mince her words.\"",["Ela não tem papas na língua.","Ela não tem papa na língua.","A língua dela não tem papas.","Ela nunca papas língua ter."],0,"\"To not mince words\" equivale a \"não ter papas na língua\" em português."],
      ["mcq","Em que contexto encaixaria melhor \"mexer-se e desenrascar-se\"?",["Incentivar alguém a organizar-se e agir com mais energia.","Explicar como carregar um aparelho eletrónico.","Descrever o tempo de uma cidade.","Pedir desculpa formalmente."],0,"\"Mexer-se\" é uma expressão coloquial para incentivar alguém a agir."],
      ["speaking","Escolhe uma expressão desta lição e explica em 45-65 palavras em que situação a usarias e o que significa literalmente face ao seu sentido real.",[],["significa","situação","literalmente"],"Distingue claramente o sentido literal (por vezes absurdo) do sentido idiomático real."]
    ]
  },
  {
    id:"pt_c2_irony_humor", level:"C2", title:"Ironia, humor e ambiguidade deliberada", emoji:"😏", xp:94,
    description:"Reconhece ironia, sarcasmo e ambiguidade intencional no português de nível avançado.",
    study: {
      vocab: [
        ["Que sorte a minha!", "¡Qué suerte la mía! (irónico)"],
        ["com as melhores intenções (irónico)", "con la mejor intención (irónico)"],
        ["um duplo sentido", "un doble sentido"],
        ["dizer algo com tom sarcástico", "decir algo con tono sarcástico"],
        ["minimizar deliberadamente algo", "quitarle importancia a algo"]
      ],
      grammar: [
        ["Marcadores de ironia", "A ironia costuma assinalar-se pelo contexto, pela entoação ou por um contraste evidente entre o que se diz e a realidade, não por palavras explícitas.", "\"Que pontual chegaste!\" dito a alguém que chegou uma hora atrasado é irónico pelo contraste."],
        ["Ambiguidade deliberada", "Às vezes escolhe-se uma expressão ambígua de propósito para não se comprometer totalmente com uma posição.", "\"Poder-se-ia dizer que o projeto teve... resultados interessantes.\""]
      ]
    },
    ex:[
      ["mcq","Alguém chega uma hora atrasado e outra pessoa diz: \"Que pontual chegaste!\". O que comunica realmente?",["O oposto do que diz: a pessoa chegou muito atrasada.","Um elogio sincero sobre a pontualidade.","Uma pergunta sobre as horas.","Um pedido de desculpa pelo seu próprio atraso."],0,"O contraste entre o que se diz e a realidade evidente é a marca típica da ironia."],
      ["mcq","\"Com as melhores intenções, cancelou a reunião sem avisar ninguém.\" Que nuance traz \"com as melhores intenções\" aqui?",["Um tom irónico: assinala que a ação não foi realmente ponderada.","Um elogio sincero à pessoa.","Uma explicação literal e neutra do facto.","Um pedido de desculpa formal do narrador."],0,"O contraste entre a frase e a ação (cancelar sem avisar) gera um efeito irónico."],
      ["fill","\"Poder-se-ia dizer que o projeto teve... resultados ___.\" (ambiguidade deliberada, sem se comprometer)",["interessantes","excelentes","catastróficos","perfeitos"],0,"\"Interessantes\" é deliberadamente ambíguo: não confirma nem nega o sucesso do projeto."],
      ["translate","Traduz com a mesma nuance irónica: \"Genial, otro lunes.\" (dito com aborrecimento)",["Ótimo, mais uma segunda-feira.","A segunda-feira é um ótimo dia.","Que alegria, é sexta-feira.","Odeio completamente as segundas-feiras."],0,"O tom irónico mantém-se com \"Ótimo\" seguido de algo objetivamente pouco entusiasmante."],
      ["mcq","Que função cumpre a minimização em \"O terramoto causou... alguns danos menores\" quando na realidade foi devastador?",["Suaviza deliberadamente a gravidade para criar um efeito irónico ou crítico.","Descreve a situação de forma completamente literal e precisa.","Exagera a magnitude do evento.","Elimina qualquer possível interpretação irónica."],0,"A minimização contrasta a magnitude real com uma descrição minimizada, gerando ironia."],
      ["writing","Escreve em português um breve comentário (50-70 palavras) com ironia subtil sobre uma situação quotidiana incómoda (o trânsito, uma fila longa, etc.), sem insultos nem linguagem explícita.",[],["que sorte","ótimo","claro"],"A ironia deve notar-se pelo contraste entre o tom positivo e a situação negativa, não afirmando-o diretamente."]
    ]
  },
  {
    id:"pt_a1_house_rooms", level:"A1", title:"A casa: divisões e móveis", emoji:"🏠", xp:35,
    description:"Aprende o vocabulário das divisões, dos móveis e dos objetos de uma casa em português.",
    study: {
      vocab: [
        ["a cozinha, a casa de banho, o quarto, a sala", "la cocina, el baño, el dormitorio, el salón"],
        ["a cama, a mesa, a cadeira, o sofá", "la cama, la mesa, la silla, el sofá"],
        ["Onde é a cozinha?", "¿Dónde está la cocina?"],
        ["A cama está no quarto.", "La cama está en el dormitorio."],
        ["em cima de, debaixo de, ao lado de", "encima de, debajo de, al lado de"]
      ],
      grammar: [
        ["\"Há\" para situar objetos", "\"Há\" (invariável) indica o que existe num lugar, no singular e no plural.", "Há uma mesa na cozinha. Há duas cadeiras ao lado."]
      ]
    },
    ex:[
      ["mcq","Onde dormes normalmente?",["No quarto.","Na cozinha.","Na casa de banho.","Na sala."],0,"\"O quarto\" é a divisão onde se dorme."],
      ["mcq","Qual é a forma correta de perguntar onde está algo?",["Onde é a cozinha?","O que é a cozinha?","Quando é a cozinha?","Quem é a cozinha?"],0,"\"Onde é/está...?\" pergunta pela localização de algo."],
      ["fill","Completa: \"O sofá está ___ da janela.\"",["ao lado","em cima","debaixo","atrás"],0,"\"Ao lado de\" indica que duas coisas estão uma perto da outra."],
      ["translate","Traduz: \"The bed is in the bedroom.\"",["A cama está no quarto.","A cama está na cozinha.","A cadeira está no quarto.","A cama é o quarto."],0,"\"The bed is in the bedroom\" = \"A cama está no quarto.\""],
      ["arrange","Ordena: [cozinha / mesa / há / na / uma]",["Há uma mesa na cozinha","Na cozinha há uma mesa","Uma mesa há na cozinha","Há na cozinha uma mesa"],0,"\"Há\" + objeto + \"na\" + lugar: \"Há uma mesa na cozinha.\""],
      ["writing","Descreve em português, em 20-30 palavras, a tua casa ou apartamento: que divisões tem e que móveis há numa delas.",[],["quarto","há"],"Menciona pelo menos duas divisões e dois móveis."]
    ]
  },
  {
    id:"pt_a2_health_pharmacy", level:"A2", title:"A saúde: sintomas e a farmácia", emoji:"💊", xp:44,
    description:"Descreve sintomas comuns e pede ajuda na farmácia ou ao médico em português.",
    study: {
      vocab: [
        ["Dói-me a cabeça / a barriga / a garganta.", "Me duele la cabeza / el estómago / la garganta."],
        ["Tenho febre, tosse, náuseas.", "Tengo fiebre, tos, náuseas."],
        ["Tem alguma coisa para a dor de cabeça?", "¿Tiene algo para el dolor de cabeza?"],
        ["Tome um comprimido de oito em oito horas.", "Tome una pastilla cada ocho horas."],
        ["marcar consulta com o médico", "pedir cita con el médico"]
      ],
      grammar: [
        ["\"Doer\" como \"gostar\"", "\"Doer\" funciona como \"gostar\": concorda com a parte do corpo, não com a pessoa.", "Dói-me a cabeça. / Doem-me os pés."]
      ]
    },
    ex:[
      ["mcq","Tens dor de cabeça. O que dizes?",["Dói-me a cabeça.","Gosto da minha cabeça.","Tenho a minha cabeça.","Sou a minha cabeça."],0,"\"Dói-me a cabeça\" descreve o sintoma com o verbo \"doer\"."],
      ["mcq","Na farmácia, o que perguntas para pedir um medicamento?",["Tem alguma coisa para a dor de cabeça?","Onde está a dor de cabeça?","Quando é a dor de cabeça?","Porque tem dor de cabeça?"],0,"\"Tem alguma coisa para...?\" é a forma natural de pedir um medicamento."],
      ["fill","Completa: \"___ me os pés depois de correr.\"",["Doem","Dói","Dor","Doloroso"],0,"\"Doer\" concorda no plural com \"os pés\": \"doem-me os pés\"."],
      ["translate","Traduz: \"I have a fever and a cough.\"",["Tenho febre e tosse.","Tenho febre e tossir.","Sou febre e tosse.","Dói-me febre e tosse."],0,"\"I have a fever and a cough\" = \"Tenho febre e tosse\", com o verbo \"ter\"."],
      ["arrange","Ordena: [oito / em / comprimido / horas / tome / um / de / oito]",["Tome um comprimido de oito em oito horas","De oito em oito horas tome um comprimido","Um comprimido tome de oito em oito horas","Tome de oito em oito horas um comprimido"],0,"Imperativo + objeto + frequência: \"Tome um comprimido de oito em oito horas.\""],
      ["speaking","Descreve em português, em 40-60 palavras, uma vez em que te sentiste mal: que sintomas tinhas e o que fizeste.",[],["doía-me","tinha","fui"],"Usa pelo menos dois sintomas e uma ação que tomaste para te sentires melhor."]
    ]
  },
  {
    id:"pt_b1_tech_social_media", level:"B1", title:"Tecnologia e redes sociais", emoji:"📱", xp:58,
    description:"Fala sobre o uso da tecnologia e das redes sociais, as suas vantagens e riscos, em português.",
    study: {
      vocab: [
        ["publicar, partilhar, comentar", "publicar, compartir, comentar"],
        ["estar online / desligar-se", "estar conectado / desconectarse"],
        ["a privacidade, os dados pessoais", "privacidad, datos personales"],
        ["depender do telemóvel", "depender del móvil"],
        ["manter-se em contacto com", "mantener el contacto con"]
      ],
      grammar: [
        ["Comparar vantagens e desvantagens", "\"Por um lado... por outro\" e \"enquanto\" ajudam a comparar duas ideias.", "Por um lado as redes sociais ajudam a manter contacto; por outro, podem ocupar muito tempo."]
      ]
    },
    ex:[
      ["mcq","Qual é uma vantagem real das redes sociais?",["Ajudam a manter contacto com amigos distantes.","Dizem sempre toda a verdade.","Nunca afetam a privacidade.","Não precisam de ligação à internet."],0,"Manter contacto com pessoas distantes é uma vantagem concreta e verificável."],
      ["mcq","Que frase expressa preocupação com a privacidade?",["Preocupa-me como usam os meus dados pessoais.","Adoro partilhar tudo sem pensar.","Nunca uso a internet.","Publico fotos a cada cinco minutos."],0,"A preocupação com os dados pessoais é um tema central da privacidade digital."],
      ["fill","Completa: \"___ um lado gosto de estar online, por outro preciso de me desligar às vezes.\"",["Por","Em","De","A"],0,"\"Por um lado... por outro\" é a estrutura para comparar duas ideias."],
      ["mcq","¿Qué significa «Tento não depender demasiado do meu telemóvel.»?",["I try not to depend on my phone too much.","I try not depend too much my phone.","Not I try to depend on my phone.","Depend on my phone I try not too much."],0,"\"Depender de\" = \"to depend on\": \"I try not to depend on my phone too much.\""],
      ["arrange","Ordena: [contacto / ajuda-me / manter / a / com / amigos]",["Ajuda-me a manter contacto com amigos","Manter ajuda-me a em contacto com amigos","A manter ajuda-me em contacto com amigos","Ajuda-me em contacto a manter com amigos"],0,"\"Ajuda-me a\" + infinitivo: \"Ajuda-me a manter contacto com amigos.\""],
      ["writing","Escreve em português 45-65 palavras sobre a tua relação com as redes sociais: uma vantagem, um risco e o que fazes para equilibrar isso.",[],["por um lado","por outro","privacidade"],"Estrutura: vantagem + risco + uma ação concreta para equilibrar ambos."]
    ]
  },
  {
    id:"pt_b2_ethical_dilemmas", level:"B2", title:"Dilemas éticos: argumentar a favor e contra", emoji:"⚖️", xp:80,
    description:"Apresenta e pondera argumentos sobre dilemas éticos comuns em português.",
    study: {
      vocab: [
        ["a favor de / contra", "a favor de / en contra de"],
        ["de um ponto de vista ético", "desde un punto de vista ético"],
        ["o bem comum, o interesse individual", "el bien común, el interés individual"],
        ["justificar uma decisão", "justificar una decisión"],
        ["não há uma resposta única", "no hay una única respuesta"]
      ],
      grammar: [
        ["Estruturar um argumento equilibrado", "Apresentar primeiro um argumento, depois o contrário, e fechar com uma posição matizada evita o enviesamento.", "Alguns argumentam que..., enquanto outros sustentam que... Na minha opinião, ambas as posições fazem sentido."]
      ]
    },
    ex:[
      ["mcq","Que frase apresenta um argumento de forma equilibrada?",["Alguns argumentam que..., enquanto outros sustentam que...","Toda a gente sabe que tenho razão.","É óbvio que a outra posição está errada.","Não há nenhum argumento contra."],0,"Apresentar ambos os lados antes de opinar é próprio de um argumento equilibrado no nível B2."],
      ["mcq","Um dilema ético típico é \"o bem comum face ao interesse individual\". O que significa isto?",["Um conflito entre o que beneficia todos e o que beneficia uma só pessoa.","Uma decisão que não afeta ninguém.","Um tema sem qualquer importância social.","Uma escolha puramente económica sem ética envolvida."],0,"O dilema surge quando o melhor para a comunidade não coincide com o melhor para um indivíduo."],
      ["fill","Completa: \"___ um ponto de vista ético, a decisão é discutível.\"",["De","Para","Por","Com"],0,"\"De um ponto de vista ético\" é a expressão padrão para introduzir uma perspetiva."],
      ["translate","Traduz: \"There is no single answer to this dilemma.\"",["Não há uma resposta única para este dilema.","Não há uma resposta única este dilema.","Este dilema não há resposta única para.","Uma resposta única não há para este dilema."],0,"\"There is no single answer\" = \"Não há uma resposta única.\""],
      ["mcq","Qual destas frases justifica uma decisão de forma racional, não emocional?",["Decidiu-se assim porque os benefícios superavam os riscos a longo prazo.","Decidiu-se assim porque sim, e pronto.","Decidiu-se assim porque todos queriam, sem pensar.","Decidiu-se assim porque é o que sempre se fez."],0,"Uma justificação racional compara explicitamente benefícios e riscos."],
      ["writing","Escolhe um dilema ético do dia a dia (por exemplo, dizer uma mentira piedosa) e escreve em português 55-75 palavras apresentando um argumento a favor, um contra e a tua conclusão matizada.",[],["a favor","contra","no entanto"],"Estrutura: argumento a favor + argumento contra + conclusão matizada, não absoluta."]
    ]
  },
  {
    id:"pt_c1_academic_citing", level:"C1", title:"Discurso académico: citar e parafrasear", emoji:"🎓", xp:90,
    description:"Aprende a citar fontes, parafrasear ideias e evitar o plágio num registo académico em português.",
    study: {
      vocab: [
        ["segundo (autor, ano)", "según (autor, año)"],
        ["como aponta/sustenta o autor", "como señala/argumenta el autor"],
        ["parafrasear uma ideia", "parafrasear una idea"],
        ["citar textualmente", "citar textualmente"],
        ["o plágio, as fontes fiáveis", "el plagio, las fuentes fiables"]
      ],
      grammar: [
        ["Verbos para introduzir citações alheias", "\"Sustenta que\", \"afirma que\", \"aponta que\" variam o matiz: nem todos implicam o mesmo grau de certeza.", "O autor sustenta que a política foi um erro; outros investigadores, contudo, apontam nuances importantes."],
        ["Parafrasear sem copiar a estrutura", "Parafrasear implica mudar tanto as palavras como a ordem das ideias, não apenas sinónimos soltos.", "Original: 'O estudo demonstra que o exercício reduz o stress.' Paráfrase: 'Segundo a investigação, a atividade física ajuda a diminuir os níveis de stress.'"]
      ]
    },
    ex:[
      ["mcq","Qual destas opções é uma paráfrase correta, não uma cópia disfarçada?",["Segundo a investigação, a atividade física ajuda a diminuir os níveis de stress.","O estudo demonstra que o exercício reduz totalmente o stress.","O estudo demonstra, com efeito, que o exercício reduz o stress.","Demonstra o estudo que reduz o stress o exercício."],0,"Uma boa paráfrase muda estrutura e vocabulário, não apenas uma ou duas palavras."],
      ["mcq","Que verbo transmite maior distância crítica do autor citado?",["O autor sugere que...","O autor prova categoricamente que...","O autor demonstra sem dúvida que...","O autor confirma definitivamente que..."],0,"\"Sugere\" indica uma afirmação mais cautelosa, própria de uma análise crítica rigorosa."],
      ["fill","Completa: \"___ aponta o relatório, a medida teve um impacto limitado.\"",["Como","Porque","Embora","No entanto"],0,"\"Como aponta o relatório\" introduz uma ideia atribuída a uma fonte de forma fluida."],
      ["translate","Traduz: \"According to the author, the results are inconclusive.\"",["Segundo o autor, os resultados são pouco conclusivos.","Segundo o autor, os resultados são conclusivos.","O autor segundo resultados pouco conclusivos.","Os resultados segundo o autor são conclusivos não."],0,"\"According to the author\" = \"Segundo o autor\"; \"inconclusive\" = \"pouco conclusivos\"."],
      ["mcq","Qual destas práticas constitui plágio académico?",["Copiar uma frase textual sem aspas nem referência à fonte.","Citar textualmente entre aspas com a respetiva referência.","Parafrasear uma ideia e citar a fonte original.","Resumir um artigo mencionando de onde provém."],0,"Copiar sem aspas nem referência, mesmo que seja uma só frase, é considerado plágio."],
      ["writing","Escreve em português um parágrafo académico de 55-75 palavras que parafraseie (sem copiar) esta ideia: 'O acesso à internet mudou profundamente a forma como as pessoas se informam.' Cita a fonte como (Autor, 2023).",[],["segundo","sustenta","(Autor, 2023)"],"Não copies a frase original: muda a estrutura e o vocabulário mantendo a ideia."]
    ]
  },
  {
    id:"pt_c2_logical_fallacies", level:"C2", title:"Falácias lógicas e persuasão", emoji:"🧠", xp:96,
    description:"Deteta falácias lógicas e estratégias de persuasão em argumentos de alto nível em português.",
    study: {
      vocab: [
        ["o ataque pessoal (ad hominem)", "ataque ad hominem"],
        ["a falsa dicotomia", "falsa dicotomía"],
        ["o declive escorregadio", "pendiente resbaladiza (falacia)"],
        ["generalizar a partir de um único caso", "generalizar a partir de un solo caso"],
        ["apelar à emoção em vez dos factos", "apelar a la emoción en vez de a los hechos"]
      ],
      grammar: [
        ["Identificar falácias no discurso", "Uma falácia parece um argumento válido mas a sua estrutura lógica é defeituosa, embora soe persuasiva.", "\"Se permitirmos isto, em breve tudo estará fora de controlo\" é um declive escorregadio: assume uma cadeia de consequências sem provas."]
      ]
    },
    ex:[
      ["mcq","\"Não devias ouvir o argumento económico dele: além disso, é uma pessoa desagradável.\" Que falácia é esta?",["Ataque pessoal (ad hominem): desacredita a pessoa, não o argumento.","Falsa dicotomia: reduz as opções a apenas duas.","Declive escorregadio: prevê uma cadeia de consequências.","Generalização precipitada a partir de um caso."],0,"O ad hominem ataca quem apresenta o argumento em vez de refutar o próprio argumento."],
      ["mcq","\"Ou apoias esta lei exatamente como está, ou não te importas com a segurança de ninguém.\" Que falácia é esta?",["Falsa dicotomia: apresenta apenas duas opções quando há mais nuances possíveis.","Um ataque pessoal contra o interlocutor.","Um apelo à emoção sem qualquer argumento lógico.","Uma generalização baseada num único caso isolado."],0,"A falsa dicotomia oculta opções intermédias válidas, apresentando apenas dois extremos."],
      ["fill","\"Se permitirmos esta exceção, em breve todo o sistema entrará em colapso.\" Esta frase é um exemplo de ___.",["declive escorregadio","ataque pessoal","falsa dicotomia","apelo à autoridade"],0,"O declive escorregadio assume, sem provas suficientes, uma cadeia inevitável de consequências negativas."],
      ["translate","Traduz com precisão técnica: \"This is a classic false dichotomy.\"",["Esta é uma falsa dicotomia clássica.","Esta é uma dicotomia falsa clássica é.","Clássica esta falsa dicotomia é.","Esta falsa é dicotomia clássica."],0,"\"False dichotomy\" traduz-se tecnicamente como \"falsa dicotomia\"."],
      ["mcq","Um anúncio mostra imagens de crianças a chorar para vender um produto de caridade sem dar dados concretos sobre o seu impacto. Que estratégia usa principalmente?",["Um apelo à emoção em vez de factos verificáveis.","Um argumento lógico rigoroso baseado em dados.","Uma generalização estatística precisa.","Uma citação de uma fonte académica fiável."],0,"Usar imagens emotivas sem dados concretos é apelar à emoção em vez de à evidência."],
      ["writing","Identifica e explica em português, em 55-75 palavras, uma falácia lógica que já tenhas ouvido num debate, anúncio ou discussão recente (real ou inventada). Nomeia a falácia e explica porque é que o argumento é enganador apesar de parecer convincente.",[],["falácia","porque","embora pareça"],"Nomeia explicitamente o tipo de falácia (ad hominem, falsa dicotomia, declive escorregadio, etc.) e justifica a tua identificação."]
    ]
  },
  {
    id:"pt_a1_emotions_feelings", level:"A1", title:"As emoções: como te sentes", emoji:"😊", xp:35,
    description:"Aprende a expressar emoções e sentimentos básicos em português.",
    study: {
      vocab: [
        ["estar feliz, triste, cansado, zangado", "estar feliz, triste, cansado, enfadado"],
        ["Como te sentes?", "¿Cómo te sientes?"],
        ["Estou um pouco nervoso/a.", "Estoy un poco nervioso/a."],
        ["ter medo, ter sono, ter fome", "tener miedo, tener sueño, tener hambre"],
        ["Porque estás triste?", "¿Por qué estás triste?"]
      ],
      grammar: [
        ["\"Estar\" com emoções", "As emoções expressam-se com \"estar\" + adjetivo, por serem estados temporários.", "Estou feliz hoje. / Está cansada depois do trabalho."]
      ]
    },
    ex:[
      ["mcq","Como perguntas a alguém como se sente?",["Como te sentes?","Como te chamas?","Onde vives?","Quantos anos tens?"],0,"\"Como te sentes?\" pergunta pelo estado emocional de alguém."],
      ["mcq","Tens muito trabalho e pouco descanso. Como te sentes?",["Estou cansado/a.","Estou feliz.","Tenho fome.","Tenho frio."],0,"Muito trabalho e pouco descanso levam tipicamente a sentir-se \"cansado/a\"."],
      ["fill","Completa: \"___ um pouco nervoso antes do exame.\"",["Estou","Sou","Tenho","Faço"],0,"As emoções temporárias usam \"estar\": \"Estou um pouco nervoso.\""],
      ["translate","Traduz: \"Why are you sad?\"",["Porque estás triste?","Porque és triste?","Porque tens triste?","Porque fazes triste?"],0,"\"Why are you sad?\" = \"Porque estás triste?\", com \"estar\" para um estado emocional."],
      ["arrange","Ordena: [trabalho / cansada / depois / estou / do]",["Estou cansada depois do trabalho","Depois do trabalho estou cansada","Cansada estou depois do trabalho","Estou depois do trabalho cansada"],0,"Sujeito + \"estou\" + adjetivo + complemento de tempo: \"Estou cansada depois do trabalho.\""],
      ["writing","Escreve em português 20-30 palavras descrevendo como te sentes hoje e porquê. Usa pelo menos duas emoções distintas.",[],["estou","porque","sinto-me"],"Menciona uma razão concreta para cada emoção que descreveres."]
    ]
  },
  {
    id:"pt_a2_hobbies_weekend", level:"A2", title:"Lazer: passatempos e planos de fim de semana", emoji:"🎨", xp:44,
    description:"Fala sobre os teus passatempos e os teus planos para o fim de semana em português.",
    study: {
      vocab: [
        ["O que gostas de fazer nos teus tempos livres?", "¿Qué te gusta hacer en tu tiempo libre?"],
        ["pintar, tocar um instrumento, fazer caminhadas", "pintar, tocar un instrumento, hacer senderismo"],
        ["Que planos tens para o fim de semana?", "¿Qué planes tienes para el fin de semana?"],
        ["vou + infinitivo", "voy a + infinitivo"],
        ["encontrar-se com amigos", "quedar con amigos"]
      ],
      grammar: [
        ["\"Ir\" + infinitivo para planos", "Usa-se \"ir\" + infinitivo para falar de planos futuros próximos.", "No sábado vou encontrar-me com amigos."]
      ]
    },
    ex:[
      ["mcq","Como perguntas pelos passatempos de alguém?",["O que gostas de fazer nos teus tempos livres?","Que horas são?","Onde trabalhas?","Quantos irmãos tens?"],0,"\"O que gostas de fazer nos teus tempos livres?\" pergunta especificamente pelos passatempos."],
      ["mcq","Qual destas frases descreve um plano futuro próximo?",["No sábado vou encontrar-me com amigos.","No sábado encontrei-me com amigos.","No sábado encontro-me sempre com amigos.","No sábado encontrava-me com amigos."],0,"\"Ir\" + infinitivo expressa um plano futuro concreto e próximo."],
      ["fill","Completa: \"Este fim de semana ___ fazer caminhadas.\"",["vou","sou","tenho","faço"],0,"\"Ir\" + infinitivo: \"vou fazer caminhadas\"."],
      ["translate","Traduz: \"What plans do you have for the weekend?\"",["Que planos tens para o fim de semana?","Que planos és para o fim de semana?","Que planos fazes o fim de semana tens?","Para o fim de semana que planos és?"],0,"\"What plans do you have for the weekend?\" = \"Que planos tens para o fim de semana?\""],
      ["arrange","Ordena: [instrumento / tocar / gosto / um / de]",["Gosto de tocar um instrumento","De gosto tocar um instrumento","Um instrumento gosto de tocar","Tocar gosto de um instrumento"],0,"\"Gosto de\" + infinitivo: \"Gosto de tocar um instrumento.\""],
      ["speaking","Explica em português, em 40-60 palavras, os teus passatempos favoritos e os teus planos para o próximo fim de semana.",[],["gosto de","vou","encontrar-me"],"Menciona pelo menos dois passatempos e um plano concreto usando \"vou\"."]
    ]
  },
  {
    id:"pt_b1_environment_sustainability", level:"B1", title:"O ambiente: hábitos sustentáveis", emoji:"🌱", xp:60,
    description:"Fala sobre a proteção do ambiente e os hábitos sustentáveis em português.",
    study: {
      vocab: [
        ["reciclar, reutilizar, reduzir o consumo", "reciclar, reutilizar, reducir el consumo"],
        ["as alterações climáticas, a pegada de carbono", "el cambio climático, la huella de carbono"],
        ["os produtos de utilização única", "los productos de un solo uso"],
        ["poupar energia / água", "ahorrar energía / agua"],
        ["tomar medidas para proteger o planeta", "tomar medidas para proteger el planeta"]
      ],
      grammar: [
        ["O futuro simples para consequências", "O futuro simples descreve consequências prováveis de ações atuais.", "Se não reduzirmos o plástico, a poluição aumentará."]
      ]
    },
    ex:[
      ["mcq","Qual destas ações ajuda a reduzir a pegada de carbono?",["Usar os transportes públicos em vez do carro.","Comprar mais produtos de utilização única.","Deixar as luzes acesas o dia todo.","Usar o carro para trajetos muito curtos."],0,"Os transportes públicos reduzem as emissões individuais de carbono."],
      ["mcq","Que frase descreve corretamente uma consequência futura provável?",["Se não reduzirmos o plástico, a poluição aumentará.","Se não reduzirmos o plástico, a poluição aumentou.","Se não reduzirmos o plástico, a poluição aumenta ontem.","Se não reduzirmos o plástico, poluição aumentar."],0,"O futuro simples (\"aumentará\") exprime uma consequência provável de uma condição atual."],
      ["fill","Completa: \"É importante ___ água, sobretudo no verão.\"",["poupar","gastar","deitar fora","comprar"],0,"\"Poupar água\" é a expressão correta para reduzir o seu consumo."],
      ["translate","Traduz: \"We should reduce the use of single-use products.\"",["Devíamos reduzir o uso de produtos de utilização única.","Devíamos reduzir o uso de produto de utilização única.","Reduzir devíamos produtos de utilização única o uso.","Devíamos usar produtos de utilização única reduzir."],0,"\"Single-use products\" = \"produtos de utilização única\"; \"we should reduce\" = \"devíamos reduzir\"."],
      ["arrange","Ordena: [reciclar / importante / é / vidro / o]",["É importante reciclar o vidro","O vidro é importante reciclar","Importante é reciclar o vidro","É reciclar importante o vidro"],0,"\"É importante\" + infinitivo + objeto: \"É importante reciclar o vidro.\""],
      ["writing","Escreve em português 45-65 palavras sobre três hábitos sustentáveis que praticas ou gostarias de começar a praticar, e porque são importantes.",[],["reciclar","poupar","pegada de carbono"],"Menciona pelo menos três hábitos concretos e uma razão para cada um."]
    ]
  },
  {
    id:"pt_b2_ai_future_work", level:"B2", title:"Inteligência artificial e o futuro do trabalho", emoji:"🤖", xp:80,
    description:"Discute o impacto da inteligência artificial no trabalho, com argumentos matizados em português.",
    study: {
      vocab: [
        ["automatizar tarefas repetitivas", "automatizar tareas repetitivas"],
        ["substituir postos de trabalho", "reemplazar empleos"],
        ["adaptar-se a novas ferramentas", "adaptarse a nuevas herramientas"],
        ["gerar novas oportunidades de trabalho", "generar nuevas oportunidades laborales"],
        ["depende de como é implementada", "depende de cómo se implemente"]
      ],
      grammar: [
        ["O futuro composto para especulação", "\"Terá\" + particípio especula sobre o que provavelmente terá acontecido até um certo momento futuro.", "Até 2030, a IA terá mudado muitos setores."]
      ]
    },
    ex:[
      ["mcq","Qual destas frases apresenta uma posição matizada sobre a IA e o emprego?",["Depende de como é implementada: pode automatizar tarefas mas também gerar novos empregos.","A IA vai destruir todos os empregos, sem exceção.","A IA não afeta o emprego de forma alguma.","Não há nenhuma dúvida sobre o futuro do trabalho."],0,"Uma posição matizada reconhece ambos os efeitos possíveis, sem absolutos."],
      ["mcq","O que significa \"automatizar tarefas repetitivas\"?",["Fazer com que uma máquina realize tarefas que antes eram feitas manualmente e de forma repetida por uma pessoa.","Contratar mais pessoas para tarefas repetitivas.","Eliminar completamente todas as tarefas de uma empresa.","Aumentar o salário de quem faz tarefas repetitivas."],0,"Automatizar significa que um sistema realiza a tarefa em vez de uma pessoa."],
      ["fill","Completa: \"Até 2030, a inteligência artificial ___ mudado muitos setores.\"",["terá","tinha","tem","teria"],0,"O futuro composto (\"terá mudado\") especula sobre algo que provavelmente terá acontecido até uma data futura."],
      ["mcq","¿Qué significa «Alguns empregos serão automatizados, mas também surgirão novos.»?",["Some jobs will be automated, but new ones will also be created.","Some jobs will automate, but new ones will also create.","Jobs some will be automated, but new ones will create.","Some jobs will be automated, but also new ones created."],0,"«Alguns empregos serão automatizados, mas também surgirão novos.» significa «Some jobs will be automated, but new ones will also be created»."],
      ["mcq","Qual destas afirmações mostra pensamento crítico, não uma opinião sem fundamento?",["O impacto da IA no emprego vai depender do setor e de como a transição for gerida.","A IA é sempre boa para todos, sem exceções.","A IA é sempre má para todos, sem exceções.","Não vale a pena pensar no futuro do trabalho."],0,"Reconhecer que o impacto depende de fatores concretos (setor, gestão) é pensamento crítico e matizado."],
      ["writing","Escreve em português 55-75 palavras sobre como pensas que a inteligência artificial vai mudar a tua área de trabalho ou estudo nos próximos anos. Inclui um aspeto positivo e um preocupante.",[],["automatizar","depende de","no entanto"],"Evita os absolutos: reconhece tanto vantagens como riscos concretos."]
    ]
  },
  {
    id:"pt_c1_advertising_persuasion", level:"C1", title:"A linguagem publicitária: persuasão e conotação", emoji:"📢", xp:88,
    description:"Analisa como a linguagem publicitária usa a conotação e as técnicas de persuasão.",
    study: {
      vocab: [
        ["uma conotação positiva / negativa", "una connotación positiva / negativa"],
        ["apelar ao desejo de pertença", "apelar al deseo de pertenencia"],
        ["um slogan cativante", "un eslogan pegadizo"],
        ["criar uma sensação de urgência", "crear una sensación de urgencia"],
        ["o público-alvo", "el público objetivo"]
      ],
      grammar: [
        ["Conotação face a denotação", "A denotação é o significado literal de uma palavra; a conotação é a carga emocional ou cultural associada.", "\"Casa\" (denotação: edifício) face a \"lar\" (conotação: calor, pertença)."]
      ]
    },
    ex:[
      ["mcq","Um anúncio usa a palavra \"lar\" em vez de \"casa\". O que consegue com isto?",["Acrescenta uma conotação emocional de calor e pertença.","Muda completamente o significado literal.","Elimina qualquer interpretação emocional.","Não tem nenhum efeito na mensagem."],0,"\"Lar\" tem conotações emocionais que \"casa\" não transmite da mesma forma."],
      ["mcq","\"Só restam 3 unidades, compre já!\" Que técnica de persuasão usa esta frase?",["Criar uma sensação de urgência para motivar uma decisão rápida.","Apelar exclusivamente a dados técnicos objetivos.","Oferecer uma comparação neutra com outros produtos.","Descrever o produto sem qualquer pressão."],0,"Mencionar unidades limitadas e urgência empurra para decidir sem pensar demasiado."],
      ["fill","Completa: \"Este anúncio dirige-se a um público-___ muito específico: jovens profissionais.\"",["alvo","texto","autor","leitor"],0,"\"Público-alvo\" é a expressão padrão para a audiência a que se dirige uma mensagem."],
      ["translate","Traduz: \"The slogan appeals to the desire to belong.\"",["O slogan apela ao desejo de pertença.","O slogan apela o desejo de pertença.","O desejo de pertença apela ao slogan.","O slogan apelar ao desejo de pertença."],0,"\"Appeals to\" = \"apela a\"; \"the desire to belong\" = \"o desejo de pertença\"."],
      ["mcq","Qual destas palavras tem uma conotação mais positiva do que o seu sinónimo mais neutro?",["\"Exclusivo\" face a \"limitado\".","\"Produto\" face a \"artigo\".","\"Comprar\" face a \"adquirir\".","\"Anúncio\" face a \"publicidade\"."],0,"\"Exclusivo\" acrescenta uma conotação de prestígio e distinção que \"limitado\" não transmite da mesma forma."],
      ["writing","Escolhe um anúncio real ou inventado e escreve em português 55-75 palavras analisando: que conotações usa, a que público-alvo se dirige e que técnica de persuasão emprega.",[],["conotação","público-alvo","urgência"],"Identifica pelo menos uma palavra com conotação específica e uma técnica de persuasão concreta."]
    ]
  },
  {
    id:"pt_c2_political_discourse", level:"C2", title:"O discurso político: ambiguidade estratégica e eufemismo", emoji:"🎙️", xp:96,
    description:"Analisa a ambiguidade estratégica e o eufemismo no discurso político de alto nível em português.",
    study: {
      vocab: [
        ["um eufemismo", "un eufemismo"],
        ["a ambiguidade estratégica", "ambigüedad estratégica"],
        ["evitar uma pergunta direta", "esquivar una pregunta directa"],
        ["um ajuste orçamental (eufemismo para corte)", "un ajuste presupuestario (eufemismo de recorte)"],
        ["comprometer-se sem se comprometer totalmente", "comprometerse sin comprometerse del todo"]
      ],
      grammar: [
        ["Reconhecer o eufemismo político", "Um eufemismo substitui uma expressão direta por outra mais suave, muitas vezes para suavizar uma realidade incómoda.", "\"Ajuste orçamental\" soa mais neutro do que \"corte de despesas\", embora descreva a mesma coisa."],
        ["Ambiguidade estratégica", "Os políticos por vezes escolhem deliberadamente frases vagas para evitar comprometer-se com uma posição clara.", "\"Estamos a avaliar todas as opções\" não diz qual opção será realmente escolhida."]
      ]
    },
    ex:[
      ["mcq","Um político diz \"ajuste orçamental\" em vez de \"corte de despesas\". O que consegue com isto?",["Suaviza o impacto negativo da medida através de um eufemismo.","Muda completamente o significado da medida.","Torna a medida mais transparente e direta.","Elimina qualquer interpretação negativa possível."],0,"O eufemismo suaviza a perceção sem mudar a realidade da medida."],
      ["mcq","\"Estamos a avaliar todas as opções\" dito perante uma pergunta direta. Que função cumpre esta frase?",["Evita um compromisso claro através de ambiguidade estratégica.","Dá uma resposta completamente transparente e específica.","Confirma exatamente que decisão será tomada.","Nega categoricamente qualquer decisão possível."],0,"Esta frase evita comprometer-se com uma posição concreta, mantendo aparentemente todas as opções em aberto."],
      ["fill","Completa: \"O governo anunciou um ___ orçamental que na realidade implicava cortes importantes.\"",["ajuste","aumento","presente","prémio"],0,"\"Ajuste orçamental\" é o eufemismo típico para \"corte\"."],
      ["translate","Traduz com precisão: \"Politicians sometimes commit without fully committing.\"",["Os políticos às vezes comprometem-se sem se comprometer totalmente.","Os políticos às vezes comprometem sem comprometer totalmente.","Às vezes os políticos totalmente se comprometem sem comprometer.","Os políticos comprometem-se às vezes totalmente sem se comprometer."],0,"\"Commit without fully committing\" = \"comprometer-se sem se comprometer totalmente\", captando a ambiguidade intencional."],
      ["mcq","Qual destas frases é um exemplo claro de ambiguidade estratégica?",["Não excluímos nenhuma possibilidade neste momento.","O orçamento será reduzido exatamente 12% este ano.","A lei entrará em vigor a 1 de janeiro, sem exceções.","Vou demitir-me do meu cargo na próxima semana."],0,"\"Não excluímos nenhuma possibilidade\" não compromete nada concreto, deixando todas as portas aparentemente abertas."],
      ["writing","Escreve em português 55-75 palavras analisando um eufemismo ou um caso de ambiguidade estratégica que tenhas visto num discurso político real ou inventado. Explica que frase direta está a evitar e porquê.",[],["eufemismo","em vez de","evita comprometer-se"],"Identifica a frase exata, o significado mais direto que substitui, e o efeito que procura na audiência."]
    ]
  },
  {
    id:"pt_a1_money_prices", level:"A1", title:"Números ordinais, dinheiro e preços", emoji:"💰", xp:36,
    description:"Aprende a falar de preços, dinheiro e números ordinais em português.",
    study: {
      vocab: [
        ["primeiro, segundo, terceiro...", "primero, segundo, tercero..."],
        ["Quanto custa isto?", "¿Cuánto cuesta esto?"],
        ["Custa dez euros.", "Cuesta diez euros."],
        ["barato, caro", "barato, caro"],
        ["pagar em dinheiro / com cartão", "pagar en efectivo / con tarjeta"]
      ],
      grammar: [
        ["\"Custa / Custam\" para preços", "\"Custa\" (singular) e \"custam\" (plural) concordam com o que se compra.", "O livro custa dez euros. Os livros custam vinte euros."]
      ]
    },
    ex:[
      ["mcq","Como perguntas o preço de algo?",["Quanto custa isto?","O que é isto?","Onde está isto?","Quando é isto?"],0,"\"Quanto custa isto?\" é a pergunta padrão para pedir um preço."],
      ["mcq","Um produto de 5 euros é mais barato do que um de 50 euros. Que palavra descreve o de 5 euros?",["Barato.","Caro.","Grátis.","Grande."],0,"\"Barato\" descreve algo de preço baixo em comparação com outra coisa."],
      ["fill","Completa: \"Os sapatos ___ quarenta euros.\"",["custam","custa","é","são"],0,"\"Custam\" concorda no plural com \"os sapatos\"."],
      ["translate","Traduz: \"It costs ten euros.\"",["Custa dez euros.","Custam dez euros.","É dez euros.","Tem dez euros."],0,"\"It costs ten euros\" (singular) = \"Custa dez euros.\""],
      ["arrange","Ordena: [cartão / pago / com / sempre]",["Pago sempre com cartão","Sempre pago com cartão","Com cartão sempre pago","Pago com cartão sempre"],0,"Sujeito + verbo + advérbio + complemento: \"Pago sempre com cartão.\""],
      ["writing","Escreve em português 20-30 palavras sobre os teus hábitos de compra: o que compras normalmente, se preferes pagar em dinheiro ou com cartão, e se procuras coisas baratas.",[],["custa","barato","pago"],"Usa pelo menos um número ordinal ou um preço concreto na tua resposta."]
    ]
  },
  {
    id:"pt_a2_restaurant_ordering", level:"A2", title:"No restaurante: pedir e pagar a conta", emoji:"🍽️", xp:45,
    description:"Aprende a pedir comida, fazer perguntas ao empregado e pagar a conta num restaurante.",
    study: {
      vocab: [
        ["Gostava de pedir...", "Quisiera pedir..."],
        ["O que me recomenda?", "¿Qué recomiendas?"],
        ["Pode trazer a conta, por favor?", "¿Podría traerme la cuenta, por favor?"],
        ["O serviço está incluído?", "¿Está incluida la propina?"],
        ["Para mim, o prato do dia.", "Para mí, el menú del día."]
      ],
      grammar: [
        ["\"Gostava de\" para pedir com cortesia", "\"Gostava de\" (condicional de \"gostar\") é mais formal e cortês do que \"quero\" ao pedir algo.", "Gostava de pedir a sopa e o frango, por favor."]
      ]
    },
    ex:[
      ["mcq","Qual é a forma mais cortês de pedir comida num restaurante?",["Gostava de pedir a sopa, por favor.","Quero a sopa já.","Dá-me a sopa.","Sopa, agora."],0,"\"Gostava de\" é a forma cortês e formal de pedir algo."],
      ["mcq","Acabaste de comer e queres pagar. O que dizes?",["Pode trazer a conta, por favor?","Pode trazer o menu, por favor?","O que me recomenda?","Esta mesa está livre?"],0,"\"Pode trazer a conta, por favor?\" é a frase padrão para pedir para pagar."],
      ["fill","Completa: \"___ pedir o peixe com salada, por favor.\"",["Gostava de","Quero já","Dá-me","Tenho"],0,"\"Gostava de pedir\" é a forma cortês padrão para fazer um pedido."],
      ["translate","Traduz: \"Is the tip included?\"",["O serviço está incluído?","O serviço está incluir?","O serviço incluído está?","Incluído está o serviço em?"],0,"\"Is the tip included?\" = \"O serviço está incluído?\""],
      ["arrange","Ordena: [recomenda / me / que / o]",["O que me recomenda","Me o que recomenda","Recomenda o que me","Me recomenda o que"],0,"Pergunta com \"o que\" no início: \"O que me recomenda?\""],
      ["speaking","Representa em português, em 40-60 palavras, uma conversa breve num restaurante: pede um prato, pergunta por uma recomendação e pede a conta no final.",[],["gostava de","recomenda","a conta"],"Inclui as três partes: pedido, pergunta ao empregado e pedido da conta."]
    ]
  },
  {
    id:"pt_b1_personal_finance", level:"B1", title:"Finanças pessoais: o banco e o orçamento", emoji:"🏦", xp:62,
    description:"Fala sobre contas bancárias, poupança e orçamento pessoal em português.",
    study: {
      vocab: [
        ["abrir uma conta bancária", "abrir una cuenta bancaria"],
        ["fazer um orçamento mensal", "hacer un presupuesto mensual"],
        ["poupar para um objetivo", "ahorrar para una meta"],
        ["as despesas fixas e as despesas variáveis", "gastos fijos y gastos variables"],
        ["pedir um empréstimo, pagar em prestações", "pedir un préstamo, pagar a plazos"]
      ],
      grammar: [
        ["O condicional para conselhos financeiros", "\"Devias\" + infinitivo dá um conselho sem soar demasiado direto.", "Devias poupar pelo menos 10% do teu salário todos os meses."]
      ]
    },
    ex:[
      ["mcq","Qual destas frases dá um conselho financeiro de forma adequada?",["Devias poupar um pouco todos os meses, mesmo que seja pouco.","Poupa já, não há outra opção.","Poupar não serve para nada.","Nunca vais conseguir poupar nada."],0,"\"Devias\" + infinitivo dá um conselho de forma cortês e razoável."],
      ["mcq","Qual é a diferença entre despesas fixas e variáveis?",["As fixas repetem-se todos os meses pelo mesmo valor; as variáveis mudam.","As fixas mudam todos os meses; as variáveis são sempre iguais.","Não há nenhuma diferença real entre elas.","As variáveis só existem em empresas, não em pessoas."],0,"As despesas fixas (a renda, por exemplo) mantêm-se estáveis; as variáveis (lazer, comida) mudam de mês para mês."],
      ["fill","Completa: \"Vou ___ uma conta bancária nova este mês.\"",["abrir","fechar","gastar","perder"],0,"\"Abrir uma conta bancária\" é a colocação correta para criar uma conta nova."],
      ["translate","Traduz: \"You should make a monthly budget.\"",["Devias fazer um orçamento mensal.","Devias fazer orçamento mensal um.","Um orçamento mensal devias fazer.","Devias um orçamento mensal fazer."],0,"\"You should make a monthly budget\" = \"Devias fazer um orçamento mensal.\""],
      ["arrange","Ordena: [poupar / objetivo / para / um / quero]",["Quero poupar para um objetivo","Para um objetivo quero poupar","Poupar quero para um objetivo","Quero para um objetivo poupar"],0,"Sujeito + \"quero\" + infinitivo + complemento: \"Quero poupar para um objetivo.\""],
      ["writing","Escreve em português 45-65 palavras sobre a tua relação com o dinheiro: como organizas o teu orçamento, se poupas para algo concreto e um hábito financeiro que gostarias de melhorar.",[],["orçamento","poupar","despesas"],"Menciona pelo menos uma despesa fixa, uma despesa variável e uma meta de poupança."]
    ]
  },
  {
    id:"pt_b2_mental_wellbeing", level:"B2", title:"Bem-estar e saúde mental: falar com nuance", emoji:"🧘", xp:82,
    description:"Fala sobre o bem-estar emocional e a saúde mental com um vocabulário mais matizado em português.",
    study: {
      vocab: [
        ["sentir-se sobrecarregado/a", "sentirse abrumado/a"],
        ["estabelecer limites, cuidar de si próprio", "poner límites, cuidarse"],
        ["o esgotamento (burnout)", "el agotamiento (burnout)"],
        ["pedir ajuda não é sinal de fraqueza", "pedir ayuda no es señal de debilidad"],
        ["processar as emoções", "procesar las propias emociones"]
      ],
      grammar: [
        ["O conjuntivo com expressões de recomendação", "\"É importante que\" + conjuntivo recomenda uma ação relacionada com o bem-estar.", "É importante que fales do que sentes com alguém de confiança."]
      ]
    },
    ex:[
      ["mcq","Qual destas frases usa corretamente o conjuntivo para dar uma recomendação?",["É importante que descanses quando precisares.","É importante que descansas quando precisas.","É importante descansares quando precisas.","É importante que descansar quando precisares."],0,"\"É importante que\" exige o conjuntivo: \"que descanses\"."],
      ["mcq","O que significa \"sentir-se sobrecarregado/a\"?",["Sentir que há demasiadas coisas para gerir ao mesmo tempo.","Sentir-se extremamente feliz e tranquilo.","Não sentir absolutamente nada.","Sentir curiosidade por algo novo."],0,"\"Sobrecarregado\" descreve uma sensação de excesso de tarefas ou emoções difíceis de gerir."],
      ["fill","Completa: \"Estabelecer ___ é importante para cuidar do teu bem-estar.\"",["limites","dinheiro","roupa","comida"],0,"\"Estabelecer limites\" é a expressão correta para proteger o próprio bem-estar emocional."],
      ["translate","Traduz: \"Asking for help is not a sign of weakness.\"",["Pedir ajuda não é sinal de fraqueza.","Pedir ajuda não é uma fraca sinal.","Pedir ajuda não é sinal de fraqueza não.","Não pedir ajuda é um sinal de fraqueza."],0,"\"Asking for help is not a sign of weakness\" = \"Pedir ajuda não é sinal de fraqueza.\""],
      ["mcq","Qual destas frases reflete processar uma emoção de forma saudável, não evitá-la?",["Reconheço que estou triste e dou-me tempo para entender porquê.","Finjo que não se passa nada e ignoro como me sinto.","Distraio-me constantemente para não sentir nada.","Digo a todos que estou perfeitamente bem, mesmo não estando."],0,"Reconhecer e explorar uma emoção, em vez de a evitar, é um processamento emocional saudável."],
      ["writing","Escreve em português 55-75 palavras sobre uma estratégia que uses (ou gostarias de usar) para cuidar do teu bem-estar emocional quando te sentes sobrecarregado/a.",[],["sobrecarregado","limites","processar"],"Usa pelo menos uma estrutura de recomendação com conjuntivo (\"é importante que...\")."]
    ]
  },
  {
    id:"pt_c1_legal_language", level:"C1", title:"Linguagem jurídica básica: contratos e cláusulas", emoji:"📜", xp:90,
    description:"Compreende o vocabulário e as estruturas básicas da linguagem jurídica em contratos.",
    study: {
      vocab: [
        ["as partes contratantes", "las partes contratantes"],
        ["uma cláusula, um anexo", "una cláusula, un anexo"],
        ["rescindir um contrato", "rescindir un contrato"],
        ["estar sujeito aos termos e condições", "estar sujeto a los términos y condiciones"],
        ["em caso de incumprimento", "en caso de incumplimiento"]
      ],
      grammar: [
        ["A linguagem formal impessoal em contratos", "Os contratos usam estruturas impessoais e passivas para soar objetivos e evitar ambiguidade sobre quem age.", "O presente contrato poderá ser rescindido por qualquer uma das partes mediante um pré-aviso de 30 dias."],
        ["\"Caso\" + conjuntivo para condições legais", "Esta estrutura formal introduz condições legais hipotéticas.", "Caso uma das partes não cumpra o acordado, será aplicada uma penalização."]
      ]
    },
    ex:[
      ["mcq","O que significa \"rescindir um contrato\"?",["Terminar ou anular um contrato antes do previsto.","Assinar um contrato novo.","Modificar apenas uma cláusula do contrato.","Renovar um contrato automaticamente."],0,"\"Rescindir\" significa pôr fim a um contrato, geralmente antes do seu término natural."],
      ["mcq","Qual destas frases usa corretamente a linguagem formal impessoal típica de um contrato?",["O presente contrato poderá ser rescindido por qualquer uma das partes.","Qualquer pessoa pode quebrar este contrato se quiser.","Alguém pode cancelar isto quando lhe apetecer.","Pode-se cancelar o contrato assim, sem mais."],0,"A linguagem contratual formal usa construções passivas e impessoais, evitando um tom coloquial."],
      ["fill","Completa: \"___ uma das partes não cumpra o acordado, será aplicada uma penalização.\"",["Caso","Porque","Embora","No entanto"],0,"\"Caso\" + conjuntivo introduz uma condição legal hipotética."],
      ["translate","Traduz: \"The contract is subject to the terms and conditions described in Appendix A.\"",["O contrato está sujeito aos termos e condições descritos no Anexo A.","O contrato está sujeito os termos e condições descritos no Anexo A.","O contrato está sujeito aos termos e condições no Anexo A descritos.","Sujeito o contrato está aos termos do Anexo A."],0,"\"Subject to\" = \"sujeito a\"; \"described in Appendix A\" = \"descritos no Anexo A\"."],
      ["mcq","O que são \"as partes contratantes\"?",["As pessoas ou entidades que assinam e se comprometem num contrato.","Apenas a pessoa que redige o contrato.","As secções ou capítulos de um contrato.","As testemunhas que não assinam o contrato."],0,"\"As partes contratantes\" refere-se a quem assina o contrato e assume obrigações nele."],
      ["writing","Escreve em português 55-75 palavras redigindo uma cláusula simples de um contrato fictício (por exemplo, sobre prazos de entrega ou condições de cancelamento), usando um registo formal e impessoal.",[],["as partes","caso","rescindir"],"Usa pelo menos uma construção passiva ou impessoal, própria do registo jurídico formal."]
    ]
  },
  {
    id:"pt_c2_literary_criticism", level:"C2", title:"Crítica literária: voz narrativa e estilo", emoji:"📖", xp:97,
    description:"Analisa a voz narrativa, o estilo e as decisões formais de um texto literário em português.",
    study: {
      vocab: [
        ["a voz narrativa", "la voz narrativa"],
        ["um narrador fiável / pouco fiável", "un narrador fiable / poco fiable"],
        ["o ponto de vista (primeira, terceira pessoa)", "el punto de vista (primera, tercera persona)"],
        ["o tom e o registo de um texto", "el tono y el registro de un texto"],
        ["uma técnica narrativa (flashback, elipse)", "una técnica narrativa (flashback, elipsis)"]
      ],
      grammar: [
        ["Analisar decisões formais do autor", "A análise literária avançada liga uma escolha formal (ponto de vista, tempo verbal) ao seu efeito no leitor.", "O uso da primeira pessoa gera proximidade, mas também limita a perspetiva ao que o narrador pode saber ou perceber."]
      ]
    },
    ex:[
      ["mcq","O que caracteriza um \"narrador pouco fiável\"?",["A sua versão dos factos pode estar enviesada, incompleta ou ser enganadora.","Diz sempre a verdade absoluta sobre tudo o que acontece.","Nunca tem opinião sobre os factos que narra.","Só aparece em textos científicos, nunca em ficção."],0,"Um narrador pouco fiável oferece uma perspetiva que o leitor deve questionar, por enviesamento, ignorância ou engano."],
      ["mcq","Que efeito costuma produzir a narração em primeira pessoa?",["Gera proximidade com o narrador, mas limita a perspetiva ao que ele sabe.","Elimina qualquer ligação emocional com o leitor.","Garante sempre uma visão objetiva dos factos.","Só se usa em textos não literários."],0,"A primeira pessoa aproxima o leitor do narrador, à custa de uma visão necessariamente parcial dos factos."],
      ["fill","Completa: \"O uso de um ___ interrompe a cronologia para mostrar um evento do passado.\"",["flashback","epílogo","prólogo","índice"],0,"Um \"flashback\" é a técnica narrativa que interrompe a cronologia linear para mostrar o passado."],
      ["mcq","¿Qué significa «A falta de fiabilidade do narrador obriga o leitor a questionar cada afirmação.»?",["The narrator's unreliability forces the reader to question every claim.","The narrator unreliability force the reader question every claim.","The unreliable narrator force to question reader every claim is.","Question every claim forces the narrator's unreliability the reader."],0,"\"Falta de fiabilidade\" traduz-se tecnicamente como \"unreliability\"."],
      ["mcq","Qual destas análises liga corretamente uma decisão formal ao seu efeito no leitor?",["O tempo presente narrativo cria uma sensação de imediatismo, como se os factos estivessem a acontecer agora mesmo.","O autor usou o presente porque é mais fácil de escrever.","O presente não tem qualquer efeito sobre como a história é percecionada.","O presente só se usa em poesia, nunca em narrativa."],0,"Uma boa análise literária liga a escolha formal (tempo verbal) a um efeito concreto na experiência de leitura."],
      ["writing","Escolhe um conto, romance ou relato que conheças (ou inventa um breve) e escreve em português 55-75 palavras analisando a sua voz narrativa: ponto de vista, fiabilidade do narrador e um efeito que isto produz no leitor.",[],["voz narrativa","ponto de vista","efeito"],"Liga explicitamente uma decisão formal do autor a um efeito concreto na leitura, não te limites a descrever o enredo."]
    ]
  },
  {
    id:"pt_a1_professions_jobs", level:"A1", title:"As profissões: o que fazes na vida?", emoji:"👩‍⚕️", xp:36,
    description:"Aprende o vocabulário básico das profissões e a falar do teu trabalho em português.",
    study: {
      vocab: [
        ["médico/a, professor/a, engenheiro/a, empregado/a de mesa", "médico, profesor, ingeniero, camarero/a"],
        ["O que fazes na vida?", "¿A qué te dedicas?"],
        ["Sou estudante / Trabalho num escritório.", "Soy estudiante / Trabajo en una oficina."],
        ["Onde trabalhas?", "¿Dónde trabajas?"],
        ["trabalhar como + profissão", "trabajar de + profesión"]
      ],
      grammar: [
        ["\"Ser\" com profissões (sem artigo)", "Com profissões, \"ser\" não leva artigo indefinido, ao contrário do inglês.", "Sou professor. (não \"Sou um professor\")"]
      ]
    },
    ex:[
      ["mcq","Como perguntas a profissão de alguém?",["O que fazes na vida?","Como te chamas?","Onde vives?","Quantos anos tens?"],0,"\"O que fazes na vida?\" pergunta especificamente pela profissão."],
      ["mcq","Qual é a forma correta de dizer a tua profissão em português?",["Sou professor.","Sou um professor.","Tenho professor.","Faço professor."],0,"Em português, \"ser\" + profissão não leva artigo: \"Sou professor.\""],
      ["fill","Completa: \"A minha irmã ___ médica num hospital.\"",["é","está","tem","faz"],0,"\"Ser\" usa-se para profissões: \"A minha irmã é médica.\""],
      ["translate","Traduz: \"I work in an office.\"",["Trabalho num escritório.","Trabalho um escritório.","Estou trabalho num escritório.","Trabalho de um escritório."],0,"\"I work in an office\" = \"Trabalho num escritório.\""],
      ["arrange","Ordena: [empregado / trabalho / restaurante / de / mesa / num / como]",["Trabalho como empregado de mesa num restaurante","Como empregado de mesa trabalho num restaurante","Trabalho num restaurante como empregado de mesa","Num restaurante trabalho como empregado de mesa"],0,"\"Trabalho como\" + profissão + \"num\" + lugar: \"Trabalho como empregado de mesa num restaurante.\""],
      ["writing","Escreve em português 20-30 palavras sobre a tua profissão (real ou imaginada) e onde trabalhas. Menciona pelo menos duas tarefas que fazes no trabalho.",[],["sou","trabalho","como"],"Usa \"ser\" para a profissão e \"trabalhar em/como\" para o lugar ou papel."]
    ]
  },
  {
    id:"pt_a2_describing_people", level:"A2", title:"Descrever pessoas: aparência e personalidade", emoji:"🧑‍🤝‍🧑", xp:46,
    description:"Aprende a descrever o aspeto físico e a personalidade de outras pessoas em português.",
    study: {
      vocab: [
        ["alto/a, baixo/a, magro/a", "alto, bajo, delgado"],
        ["tem o cabelo comprido/curto, usa óculos", "tiene el pelo largo/corto, lleva gafas"],
        ["é simpático/a, tímido/a, divertido/a", "es simpático, tímido, gracioso"],
        ["parece-se com a mãe/o pai", "se parece a su madre/padre"],
        ["Como é o teu melhor amigo / a tua melhor amiga?", "¿Cómo es tu mejor amigo/a?"]
      ],
      grammar: [
        ["\"Ser\" para características, \"ter\" e \"usar\" para traços físicos", "\"Ser\" descreve personalidade e traços estáveis; \"ter\" e \"usar\" descrevem partes do corpo ou acessórios.", "É muito simpática, tem o cabelo comprido e usa óculos."]
      ]
    },
    ex:[
      ["mcq","Como perguntas como é a personalidade de alguém?",["Como é o teu melhor amigo?","Como estás?","Que horas são?","De onde és?"],0,"\"Como é...?\" pergunta pelas características ou personalidade de alguém."],
      ["mcq","Qual destas frases descreve corretamente o aspeto físico de alguém?",["Tem o cabelo curto e usa óculos.","É o cabelo curto e usa óculos.","Tem simpático e alto.","É tem óculos."],0,"\"Ter\" usa-se para partes do corpo (\"tem o cabelo curto\") e \"usar\" para acessórios (\"usa óculos\")."],
      ["fill","Completa: \"O meu irmão ___ muito divertido e faz sempre piadas.\"",["é","tem","usa","faz"],0,"\"Ser\" descreve um traço de personalidade estável: \"é muito divertido\"."],
      ["translate","Traduz: \"She has long hair and wears glasses.\"",["Tem o cabelo comprido e usa óculos.","É o cabelo comprido e usa óculos.","Tem cabelo comprido e é óculos.","Usa o cabelo comprido e tem óculos postos."],0,"\"Has long hair\" = \"tem o cabelo comprido\"; \"wears glasses\" = \"usa óculos\"."],
      ["arrange","Ordena: [mãe / parece-se / a / com]",["Parece-se com a mãe","Com a mãe parece-se","A mãe parece-se com","Parece-se a com mãe"],0,"\"Parece-se com\" + pessoa: \"Parece-se com a mãe.\""],
      ["speaking","Descreve em português, em 40-60 palavras, uma pessoa que conheces bem: o seu aspeto físico e três traços da sua personalidade.",[],["tem","é","usa"],"Inclui pelo menos dois traços físicos e dois de personalidade."]
    ]
  },
  {
    id:"pt_b1_education_learning", level:"B1", title:"A educação: sistemas escolares e hábitos de estudo", emoji:"🎒", xp:60,
    description:"Fala sobre sistemas educativos, métodos de estudo e experiências escolares em português.",
    study: {
      vocab: [
        ["a educação obrigatória / superior", "la educación obligatoria / superior"],
        ["passar/chumbar num exame", "aprobar/suspender un examen"],
        ["memorizar face a compreender", "memorizar frente a comprender"],
        ["um plano de estudos, uma disciplina", "un plan de estudios, una asignatura"],
        ["aprender ao teu próprio ritmo", "aprender a tu propio ritmo"]
      ],
      grammar: [
        ["Comparativos para comparar sistemas", "\"Mais... do que\", \"menos... do que\" e \"tão... como\" servem para comparar métodos ou sistemas educativos.", "Este sistema é mais prático do que o tradicional, embora não seja tão estruturado como aquele."]
      ]
    },
    ex:[
      ["mcq","Qual destas frases compara corretamente dois sistemas educativos?",["Este sistema é mais prático do que o tradicional.","Este sistema é prático mais o tradicional.","Este sistema é tão prático o tradicional.","Este sistema mais prático é do que tradicional."],0,"\"Mais... do que\" é a estrutura comparativa correta em português."],
      ["mcq","Que diferença há entre memorizar e compreender?",["Memorizar é repetir informação; compreender implica entender o seu significado e aplicá-lo.","São exatamente a mesma coisa, sem nenhuma diferença.","Memorizar é sempre melhor do que compreender.","Compreender é mais rápido do que memorizar."],0,"Memorizar é reter dados; compreender implica um processamento mais profundo do significado."],
      ["fill","Completa: \"Estudei muito, mas mesmo assim ___ o exame.\"",["chumbei","passei","memorizei","compreendi"],0,"O contexto (\"mas mesmo assim\") sugere um resultado negativo: \"chumbei o exame\"."],
      ["translate","Traduz: \"I prefer to learn at my own pace.\"",["Prefiro aprender ao meu próprio ritmo.","Prefiro aprender meu próprio ritmo.","Prefiro a aprender meu próprio ritmo.","Prefiro meu próprio ritmo aprender a."],0,"\"To learn at your own pace\" = \"aprender ao teu/meu próprio ritmo\"."],
      ["arrange","Ordena: [favorita / disciplina / é / matemática / a minha]",["A minha disciplina favorita é matemática","É a minha disciplina favorita matemática","Matemática é a minha disciplina favorita","A minha favorita disciplina é matemática"],0,"Sujeito + \"é\" + complemento: \"A minha disciplina favorita é matemática.\""],
      ["writing","Escreve em português 45-65 palavras comparando duas formas de estudar ou dois sistemas educativos que conheças (por exemplo, aulas presenciais face a online), e diz qual preferes e porquê.",[],["mais...do que","compreender","ao meu próprio ritmo"],"Usa pelo menos uma estrutura comparativa explícita."]
    ]
  },
  {
    id:"pt_b2_sustainable_cities", level:"B2", title:"Cidades sustentáveis: urbanismo e mobilidade", emoji:"🚲", xp:82,
    description:"Discute propostas de urbanismo e mobilidade sustentável nas cidades, com argumentos matizados em português.",
    study: {
      vocab: [
        ["os transportes públicos, a ciclovia", "el transporte público, el carril bici"],
        ["pedonalizar o centro da cidade", "peatonalizar el centro de la ciudad"],
        ["reduzir o trânsito e a poluição", "reducir el tráfico y la contaminación"],
        ["um espaço verde, uma zona pedonal", "un espacio verde, una zona peatonal"],
        ["investir em infraestrutura sustentável", "invertir en infraestructura sostenible"]
      ],
      grammar: [
        ["O conjuntivo com expressões de dúvida ou opinião", "\"Não acho que\" e \"é possível que\" exigem conjuntivo ao expressar dúvida ou opinião sobre propostas urbanas.", "Não acho que pedonalizar todo o centro seja a única solução possível."]
      ]
    },
    ex:[
      ["mcq","Qual destas frases usa corretamente o conjuntivo para expressar dúvida?",["Não acho que esta medida seja suficiente por si só.","Não acho que esta medida é suficiente por si só.","Não acho esta medida seja suficiente.","Não acho que esta medida ser suficiente."],0,"\"Não acho que\" exige conjuntivo: \"que...seja\"."],
      ["mcq","O que significa \"pedonalizar o centro da cidade\"?",["Restringir ou eliminar o trânsito de veículos para dar prioridade a quem caminha.","Construir mais estradas no centro.","Aumentar o número de carros permitidos no centro.","Eliminar todas as lojas do centro."],0,"\"Pedonalizar\" significa transformar um espaço para uso prioritário de peões, limitando veículos."],
      ["fill","Completa: \"É possível que a ciclovia ___ o trânsito nessa zona.\"",["reduza","reduz","reduzirá","reduziu"],0,"\"É possível que\" exige conjuntivo: \"que reduza\"."],
      ["translate","Traduz: \"Investing in public transport reduces pollution in the long term.\"",["Investir nos transportes públicos reduz a poluição a longo prazo.","Investir nos transportes públicos reduzir a poluição a longo prazo.","Investir transportes públicos em reduz a poluição longo prazo.","Reduz investir nos transportes públicos a poluição a longo prazo."],0,"\"Investing in public transport reduces pollution\" = \"Investir nos transportes públicos reduz a poluição.\""],
      ["mcq","Qual destas frases apresenta uma posição matizada sobre a mobilidade urbana?",["Depende do contexto: em algumas cidades o carro ainda é necessário, noutras não.","O carro devia ser proibido em todo o lado sem exceção.","Os transportes públicos nunca funcionam bem em nenhuma cidade.","Não há nenhuma solução possível para o trânsito urbano."],0,"Uma posição matizada reconhece que a solução depende do contexto específico de cada cidade."],
      ["writing","Escreve em português 55-75 palavras propondo uma melhoria de mobilidade sustentável para uma cidade que conheças, explicando um benefício e uma possível dificuldade de a implementar.",[],["é possível que","pedonal","transportes públicos"],"Usa pelo menos uma estrutura com conjuntivo de dúvida ou opinião."]
    ]
  },
  {
    id:"pt_c1_science_communication", level:"C1", title:"Divulgação científica: comunicar com precisão", emoji:"🔬", xp:90,
    description:"Aprende a comunicar informação científica complexa de forma clara e precisa em português, sem perder rigor.",
    study: {
      vocab: [
        ["simplificar sem distorcer", "simplificar sin distorsionar"],
        ["um resultado preliminar face a um confirmado", "un hallazgo preliminar frente a uno confirmado"],
        ["a evidência científica sugere que...", "la evidencia científica sugiere que..."],
        ["uma analogia útil para explicar algo complexo", "una analogía útil para explicar algo complejo"],
        ["evitar o sensacionalismo científico", "evitar el sensacionalismo científico"]
      ],
      grammar: [
        ["Verbos matizados para comunicar incerteza científica", "\"Sugere\", \"indica\", \"poderia explicar\" transmitem diferentes graus de certeza científica, mais precisos do que \"prova\" ou \"demonstra\".", "O estudo sugere uma possível relação, mas não demonstra causalidade."]
      ]
    },
    ex:[
      ["mcq","Qual destas frases comunica um resultado científico com o matiz correto?",["O estudo sugere uma possível relação, mas não demonstra causalidade.","O estudo prova de forma definitiva que isto causa aquilo.","Os cientistas já sabem tudo sobre este tema.","Este resultado é cem por cento certo, sem qualquer dúvida."],0,"\"Sugere\" e \"não demonstra causalidade\" refletem com precisão o nível real de certeza de um resultado preliminar."],
      ["mcq","Porque é importante \"simplificar sem distorcer\" na divulgação científica?",["Porque simplificar demasiado pode mudar o significado real do resultado.","Porque a ciência nunca devia ser explicada a não especialistas.","Porque os detalhes técnicos não importam nada.","Porque toda a simplificação é automaticamente incorreta."],0,"Simplificar é necessário para chegar a mais público, mas distorcer o significado original é um erro grave de divulgação."],
      ["fill","Completa: \"Este é um resultado ___: são precisos mais estudos para o confirmar.\"",["preliminar","confirmado","definitivo","absoluto"],0,"\"Preliminar\" indica que o resultado ainda não está confirmado de forma conclusiva."],
      ["translate","Traduz: \"Scientific evidence suggests that this treatment could be effective.\"",["A evidência científica sugere que este tratamento poderia ser eficaz.","A evidência científica sugere este tratamento poderia eficaz.","Sugere a evidência científica que tratamento poderia ser eficaz.","A evidência científica sugere que este tratamento ser eficaz poderia."],0,"\"Scientific evidence suggests that\" = \"A evidência científica sugere que\", seguido de \"poderia ser\" para expressar possibilidade."],
      ["mcq","Uma manchete diz \"A ciência confirma: esta fruta cura o cancro!\" baseando-se num único estudo preliminar em ratos. Qual é o problema desta manchete?",["Exagera um resultado preliminar e limitado como se fosse uma certeza absoluta aplicável a humanos.","É um exemplo perfeito de divulgação científica rigorosa.","Não contém nenhum sensacionalismo.","Reflete com precisão o nível de evidência disponível."],0,"A manchete transforma um resultado preliminar em ratos numa afirmação absoluta sobre humanos, um caso claro de sensacionalismo."],
      ["writing","Escolhe uma descoberta científica (real ou inventada) e escreve em português 55-75 palavras explicando-a de forma clara e acessível, usando uma analogia e mantendo o matiz correto de certeza (evita palavras como \"prova\" se o resultado for preliminar).",[],["sugere","preliminar","é como"],"Inclui pelo menos uma analogia e um verbo matizado que reflita corretamente o nível de certeza."]
    ]
  },
  {
    id:"pt_c2_speech_acts_pragmatics", level:"C2", title:"Pragmática: o que fazemos ao dizer algo", emoji:"💭", xp:98,
    description:"Analisa os atos de fala e a pragmática em português: a diferença entre o que se diz e o que se faz ao dizê-lo.",
    study: {
      vocab: [
        ["um ato de fala (pedido, promessa, ordem)", "un acto de habla (petición, promesa, orden)"],
        ["o significado literal face ao significado pretendido", "el significado literal frente al significado pretendido"],
        ["um ato de fala indireto", "un acto de habla indirecto"],
        ["as condições de felicidade de um ato de fala", "las condiciones de adecuación de un acto de habla"],
        ["implicar algo sem o dizer explicitamente", "insinuar algo sin decirlo explícitamente"]
      ],
      grammar: [
        ["Atos de fala diretos face a indiretos", "Um ato de fala indireto usa uma forma gramatical (como uma pergunta) para desempenhar outra função (como um pedido).", "\"Podias fechar a janela?\" tem forma de pergunta, mas a sua função real é um pedido, não perguntar sobre capacidade."]
      ]
    },
    ex:[
      ["mcq","\"Podias passar-me o sal?\" durante um jantar. Que ato de fala é este, na realidade?",["Um pedido indireto, embora tenha forma de pergunta.","Uma pergunta genuína sobre a capacidade da outra pessoa.","Uma ordem direta e explícita.","Uma promessa sobre o futuro."],0,"Embora tenha forma gramatical de pergunta sobre capacidade, a sua função real é pedir que alguém passe o sal: é um pedido indireto."],
      ["mcq","Um chefe diz a um funcionário: \"Está um pouco frio aqui, não está?\" perto de uma janela aberta. O que está provavelmente a fazer com este enunciado?",["Está a pedir indiretamente que alguém feche a janela.","Está simplesmente a comentar o tempo sem qualquer outra intenção.","Está a perguntar pela temperatura exata da sala.","Está a ordenar explicitamente que se desligue o aquecimento."],0,"O comentário funciona como um pedido indireto para que alguém feche a janela, sem o dizer explicitamente."],
      ["fill","Completa: \"Dizer 'prometo' em voz alta não basta; também devem cumprir-se certas ___ para que a promessa seja válida.\"",["condições de felicidade","regras gramaticais","normas ortográficas","perguntas retóricas"],0,"As \"condições de felicidade\" são os requisitos contextuais (sinceridade, capacidade, etc.) para que um ato de fala funcione corretamente."],
      ["mcq","¿Qué significa «Este é um ato de fala indireto: a sua forma literal não corresponde à sua função pretendida.»?",["This is an indirect speech act: its literal form doesn't match its intended function.","This is indirect speech act literal form doesn't match function.","It's a speech act this indirect that doesn't match literal function.","This speech act is indirect its form doesn't function match."],0,"\"Ato de fala indireto\" = \"indirect speech act\"; \"forma literal\" = \"literal form\"; \"função pretendida\" = \"intended function\"."],
      ["mcq","Qual destes enunciados implica algo sem o dizer explicitamente?",["\"Alguns estudantes passaram no exame.\" (implica que nem todos passaram)","\"Todos os estudantes passaram no exame.\"","\"O exame foi na segunda-feira às nove.\"","\"Há trinta estudantes na turma.\""],0,"\"Alguns\" implica pragmaticamente \"nem todos\", embora não o afirme literalmente; é uma implicatura conversacional clássica."],
      ["writing","Escreve em português 55-75 palavras analisando um ato de fala indireto de uma conversa quotidiana (real ou inventada): o que foi dito literalmente, que função pragmática cumpria na realidade, e como o percebeste pelo contexto.",[],["ato de fala","literalmente","na realidade"],"Distingue explicitamente entre a forma gramatical literal do enunciado e a sua função pragmática real."]
    ]
  },
  {
    id:"pt_a1_animals_nature", level:"A1", title:"Os animais e a natureza", emoji:"🐾", xp:36,
    description:"Aprende o vocabulário de animais comuns e da natureza em português.",
    study: {
      vocab: [
        ["o cão", "el perro"],
        ["o gato", "el gato"],
        ["o pássaro", "el pájaro"],
        ["o cavalo", "el caballo"],
        ["o peixe", "el pez"],
        ["a vaca", "la vaca"],
        ["a floresta, a montanha, o rio", "el bosque, la montaña, el río"],
      ],
      grammar: [
        ["Género dos animais", "Muitos nomes de animais mudam de forma consoante o género, mas outros são invariáveis.", "O gato é branco. / A gata é branca. / O peixe é pequeno (invariável)."],
      ]
    },
    ex:[
      ["mcq","Como se diz “o cavalo” em inglês?",["the bird", "the horse", "the cat", "the dog"],1,"“Cavalo” diz-se “horse” em inglês."],
      ["mcq","Como se diz “o pássaro” em inglês?",["the cow", "the fish", "the dog", "the bird"],3,"“Pássaro” diz-se “bird” em inglês."],
      ["fill","Completa: “Gosto de passear na ___ aos domingos.”",["vaca", "gato", "floresta", "peixe"],2,"“Passear na floresta” é uma atividade típica na natureza."],
      ["translate","Traduz: “The dog is very friendly.”",["O cão é muito simpático.", "O pássaro é muito simpático.", "O cavalo é muito simpático.", "O gato é muito simpático."],0,"“The dog” = “o cão”; “friendly” = “simpático”."],
      ["arrange","Ordena: [preto / tenho / gato / um]",["preto gato Tenho um", "um Tenho gato preto", "gato um preto Tenho", "Tenho um gato preto"],3,"Sujeito implícito + verbo + artigo + substantivo + adjetivo."],
      ["writing","Escreve em português 20-30 palavras sobre um animal de que gostas e um lugar na natureza que gostas de visitar.",[],["gosto de", "a floresta", "o animal"]],
    ]
  },
  {
    id:"pt_a2_body_parts", level:"A2", title:"O corpo humano: partes do corpo", emoji:"🦴", xp:46,
    description:"Aprende as partes do corpo e a descrever dores ou características físicas em português.",
    study: {
      vocab: [
        ["a cabeça", "la cabeza"],
        ["o braço", "el brazo"],
        ["a perna", "la pierna"],
        ["a mão", "la mano"],
        ["o pé", "el pie"],
        ["as costas", "la espalda"],
      ],
      grammar: [
        ["Artigo definido com partes do corpo", "Com partes do corpo usa-se o artigo definido, não o possessivo, quando é claro de quem se fala.", "Dói-me a cabeça. (não “Dói-me a minha cabeça”)"],
      ]
    },
    ex:[
      ["mcq","Como se diz “as costas” em inglês?",["the back", "the leg", "the head", "the hand"],0,"“Costas” diz-se “back” em inglês."],
      ["mcq","Como se diz “o pé” em inglês?",["the hand", "the foot", "the arm", "the head"],1,"“Pé” diz-se “foot” em inglês."],
      ["fill","Completa: “Doem-me muito as ___ depois de correr.”",["costas", "perna", "mão", "cabeça"],0,"Correr costuma causar dores nas costas se não se aquecer bem."],
      ["translate","Traduz: “My hand hurts.”",["Dói-me a perna.", "Dói-me o pé.", "Dói-me a mão.", "Dói-me o braço."],2,"“My hand hurts” = “Dói-me a mão”, com o artigo definido."],
      ["arrange","Ordena: [perna / a / dói-me]",["a perna Dói-me","perna a Dói-me","Dói-me a perna","Dói-me perna a"],2,"“Dói-me” + artigo + parte do corpo."],
      ["speaking","Descreve em português, em 40-60 palavras, uma dor que já tiveste: que parte do corpo te doía e o que fizeste.",[],["doía-me", "a perna", "fui ao médico"]],
    ]
  },
  {
    id:"pt_b1_sports_fitness", level:"B1", title:"O desporto e a atividade física", emoji:"🏃", xp:60,
    description:"Fala sobre desportos, rotinas de exercício e hábitos de atividade física em português.",
    study: {
      vocab: [
        ["o futebol", "el fútbol"],
        ["a natação", "la natación"],
        ["o ténis", "el tenis"],
        ["correr", "correr"],
        ["levantar pesos", "levantar pesas"],
        ["fazer ioga", "hacer yoga"],
      ],
      grammar: [
        ["“Costumar” + infinitivo para hábitos", "“Costumar” expressa uma ação habitual.", "Costumo correr três vezes por semana."],
      ]
    },
    ex:[
      ["mcq","Como se diz “levantar pesos” em inglês?",["swimming", "to do yoga", "to run", "to lift weights"],3,"“Levantar pesos” diz-se “to lift weights”."],
      ["mcq","Como se diz “a natação” em inglês?",["soccer/football", "tennis", "to run", "swimming"],3,"“Natação” diz-se “swimming”."],
      ["fill","Completa: “Costumo ___ três vezes por semana para me manter em forma.”",["ténis", "futebol", "natação", "correr"],3,"“Costumar” + infinitivo (“correr”) descreve um hábito."],
      ["translate","Traduz: “I usually do yoga on Sundays.”",["Costumo fazer ioga aos sábados.", "Costumo levantar pesos aos domingos.", "Costumo jogar ténis aos domingos.", "Costumo fazer ioga aos domingos."],3,"“I usually do yoga” = “Costumo fazer ioga”; “on Sundays” = “aos domingos”."],
      ["arrange","Ordena: [forma / manter / em / para / corro / me]",["me forma manter Corro em para","Corro para me manter em forma","me Corro para forma em manter","forma para me manter em Corro"],1,"Verbo + “para” + infinitivo + complemento."],
      ["writing","Escreve em português 45-65 palavras sobre a tua relação com o desporto: que atividade praticas, com que frequência e porque gostas dela (ou não).",[],["costumo", "manter-me em forma", "pratico"]],
    ]
  },
  {
    id:"pt_b2_smart_home_tech", level:"B2", title:"A casa inteligente: domótica e dispositivos", emoji:"💡", xp:82,
    description:"Fala sobre dispositivos inteligentes e domótica, com opiniões matizadas em português.",
    study: {
      vocab: [
        ["uma coluna inteligente", "un altavoz inteligente"],
        ["um termóstato programável", "un termostato programable"],
        ["uma câmara de segurança", "una cámara de seguridad"],
        ["controlar por voz", "controlar por voz"],
        ["automatizar tarefas domésticas", "automatizar tareas del hogar"],
        ["um risco de privacidade", "un riesgo para la privacidad"],
      ],
      grammar: [
        ["O futuro simples para previsões tecnológicas", "O futuro simples descreve previsões razoáveis sobre como a tecnologia vai evoluir.", "Daqui a uns anos, mais casas terão dispositivos conectados."],
      ]
    },
    ex:[
      ["mcq","Como se diz “um risco de privacidade” em inglês?",["a thermostat", "a privacy risk", "a smart speaker", "a security camera"],1,"“Risco de privacidade” diz-se “privacy risk”."],
      ["mcq","Como se diz “automatizar tarefas domésticas” em inglês?",["a privacy risk", "a smart speaker", "to automate household tasks", "to control by voice"],2,"“Automatizar tarefas domésticas” diz-se “to automate household tasks”."],
      ["fill","Completa: “Um termóstato programável pode ___ energia se estiver bem configurado.”",["poupar", "perder", "estragar", "gastar"],0,"Um termóstato bem configurado ajuda a poupar energia, não a gastá-la."],
      ["mcq","¿Qué significa «As colunas inteligentes podem ser controladas por voz.»?",["Smart speakers can be controlled by voice.","Smart speakers can be controlled by text.","Security cameras can be controlled by voice.","Thermostats can be controlled by text."],0,"“Controlar por voz” = “controlled by voice”."],
      ["arrange","Ordena: [privacidade / pode / um / representar / risco / de]",["de risco Pode representar um privacidade", "privacidade Pode de um risco representar", "Pode representar um risco de privacidade", "risco Pode privacidade representar de um"],2,"Verbo + “representar” + objeto: “Pode representar um risco de privacidade.”"],
      ["writing","Escreve em português 55-75 palavras sobre um dispositivo inteligente que usarias (ou já usas) em casa: que vantagem te oferece e que risco de privacidade poderia ter.",[],["automatizar", "risco de privacidade", "por voz"]],
    ]
  },
  {
    id:"pt_c1_workplace_communication", level:"C1", title:"O mundo profissional: reuniões e correspondência", emoji:"🤝", xp:90,
    description:"Domina o vocabulário e as fórmulas típicas de reuniões e e-mails profissionais em português.",
    study: {
      vocab: [
        ["convocar uma reunião", "convocar una reunión"],
        ["anexar um documento", "adjuntar un documento"],
        ["ficamos a aguardar a sua resposta", "esperamos su respuesta"],
        ["retomar um ponto pendente", "hacer seguimiento de un pendiente"],
        ["chegar a um acordo", "llegar a un acuerdo"],
        ["adiar uma reunião", "posponer una reunión"],
      ],
      grammar: [
        ["Fórmulas de cortesia em e-mails formais", "Fórmulas fixas como “Ficamos a aguardar a sua resposta” dão um encerramento profissional sem soar brusco.", "Segue em anexo o relatório solicitado. Ficamos a aguardar a sua resposta."],
      ]
    },
    ex:[
      ["mcq","Como se diz “chegar a um acordo” em inglês?",["to postpone a meeting", "to reach an agreement", "to attach a document", "to call a meeting"],1,"“Chegar a um acordo” diz-se “to reach an agreement”."],
      ["mcq","Como se diz “adiar uma reunião” em inglês?",["to call a meeting", "to attach a document", "to reach an agreement", "to postpone a meeting"],3,"“Adiar uma reunião” diz-se “to postpone a meeting”."],
      ["fill","Completa: “Antes de encerrar a reunião, gostaria de ___ um ponto pendente da semana passada.”",["retomar", "anexar", "convocar", "adiar"],0,"“Retomar um ponto pendente” significa voltar a tratá-lo."],
      ["mcq","¿Qué significa «Anexei o relatório solicitado.»?",["I'm attaching the requested report.","I'm calling the requested report.","I'm postponing the requested report.","I'm attaching the requested email."],0,"“Anexei” = “I'm attaching”; “o relatório solicitado” = “the requested report”."],
      ["arrange","Ordena: [resposta / aguardar / ficamos / sua / a / a]",["Ficamos a aguardar a sua resposta", "Ficamos resposta aguardar a a sua", "Ficamos a resposta aguardar sua a", "Ficamos a resposta a sua aguardar"],0,"Fórmula fixa de encerramento de e-mail profissional."],
      ["writing","Escreve em português um e-mail profissional breve (55-75 palavras) convocando uma reunião, mencionando um ponto pendente e terminando com uma fórmula de cortesia formal.",[],["convoco", "ponto pendente", "ficamos a aguardar"]],
    ]
  },
  {
    id:"pt_c2_register_synonyms", level:"C2", title:"Registo e estilo: sinónimos consoante o contexto", emoji:"🔤", xp:98,
    description:"Escolhe o sinónimo adequado consoante o registo (formal, neutro, coloquial) em português.",
    study: {
      vocab: [
        ["obter (formal) / arranjar (neutro)", "obtener / conseguir"],
        ["falecer (formal) / morrer (neutro) / bater a bota (coloquial)", "fallecer / morir / estirar la pata"],
        ["solicitar (formal) / pedir (neutro)", "solicitar / pedir"],
        ["residir (formal) / viver (neutro)", "residir / vivir"],
        ["não obstante (formal) / mas (neutro)", "sin embargo / pero"],
      ],
      grammar: [
        ["Escolher o registo consoante o contexto comunicativo", "A mesma ideia pode exprimir-se com palavras muito diferentes consoante o contexto seja formal, neutro ou coloquial; usar a palavra errada quebra a coerência do texto.", "Num relatório: “A informação foi obtida.” Entre amigos: “Consegui-o.”"],
      ]
    },
    ex:[
      ["mcq","Num relatório oficial, que palavra é mais apropriada para “obter informação”?",["Obter", "Arranjar", "Apanhar", "Pescar"],0,"“Obter” é o registo formal apropriado para um relatório oficial."],
      ["mcq","Numa conversa informal entre amigos, que verbo soa mais natural para “morrer”?",["Bater a bota", "Falecer", "Perecer", "Expirar"],0,"“Bater a bota” é coloquial e encaixaria numa conversa informal; os outros são demasiado formais ou técnicos."],
      ["fill","Completa: “Numa carta formal diz-se “___, avançamos com o projeto”, não “mas”.”",["não obstante","mas","pois","ainda assim"],0,"“Não obstante” é o conector formal equivalente a “mas”."],
      ["translate","Traduz com o registo formal correto: “We reside in Madrid.”",["Vivemos em Madrid.", "Residimos em Madrid.", "Ficamos em Madrid.", "Somos de Madrid."],1,"“Reside” num registo formal traduz-se como “residir”, não o neutro “viver”."],
      ["arrange","Ordena (registo formal): [foi / a informação / solicitada]",["A informação foi solicitada", "informação solicitada A foi", "solicitada informação foi A", "A foi solicitada informação"],0,"Construção passiva, típica do registo formal/administrativo."],
      ["writing","Escreve em português a mesma mensagem breve (“preciso que me envies o ficheiro”) em dois registos diferentes: um formal (para um chefe) e um coloquial (para um amigo), em 55-75 palavras no total.",[],["formal", "coloquial", "solicito"]],
    ]
  },
  {
    id:"pt_a1_clothing_colors", level:"A1", title:"A roupa e as cores", emoji:"👕", xp:37,
    description:"Aprende o vocabulário das peças de roupa e como combiná-las com cores em português.",
    study: {
      vocab: [
        ["a camisa", "la camisa"],
        ["as calças", "el pantalón"],
        ["os sapatos", "los zapatos"],
        ["o vestido", "el vestido"],
        ["o casaco", "la chaqueta"],
        ["a saia", "la falda"],
        ["vermelho, azul, verde, preto, branco", "rojo, azul, verde, negro, blanco"],
      ],
      grammar: [
        ["Concordância de género e número com adjetivos de cor", "As cores concordam em género e número com o substantivo que descrevem.", "a camisa vermelha / os sapatos pretos / o vestido verde"],
      ]
    },
    ex:[
      ["mcq","Como se diz “o casaco” em inglês?",["the skirt", "the pants/trousers", "the jacket", "the shirt"],2,"“Casaco” diz-se “jacket” em inglês."],
      ["mcq","Como se diz “os sapatos” em inglês?",["the shirt", "the dress", "the shoes", "the skirt"],2,"“Sapatos” diz-se “shoes” em inglês."],
      ["fill","Completa: “Estou a usar uma camisa ___ e umas calças pretas.”",["azuis", "azulados", "azul", "azulado"],2,"“Azul” é invariável em género no singular: “uma camisa azul”."],
      ["translate","Traduz: “I'm wearing a red dress.”",["Estou a usar uma saia vermelha.", "Estou a usar um vestido vermelho.", "Estou a usar uma camisa vermelha.", "Estou a usar sapatos vermelhos."],1,"“I'm wearing” = “Estou a usar”; “a red dress” = “um vestido vermelho”."],
      ["arrange","Ordena: [pretos / tenho / sapatos / uns]",["uns sapatos pretos Tenho", "Tenho uns sapatos pretos", "sapatos uns Tenho pretos", "pretos sapatos Tenho uns"],1,"Sujeito implícito + verbo + artigo + substantivo + adjetivo (concordando no plural)."],
      ["writing","Descreve em português, em 20-30 palavras, a roupa que estás a usar hoje, mencionando pelo menos três peças e as suas cores.",[],["estou a usar", "de cor", "e"]],
    ]
  },
  {
    id:"pt_a2_fruits_vegetables", level:"A2", title:"Frutas e legumes", emoji:"🥦", xp:47,
    description:"Aprende o vocabulário de frutas e legumes e a falar de uma alimentação saudável em português.",
    study: {
      vocab: [
        ["a maçã", "la manzana"],
        ["a banana", "el plátano"],
        ["a cenoura", "la zanahoria"],
        ["o tomate", "el tomate"],
        ["a alface", "la lechuga"],
        ["a laranja", "la naranja"],
      ],
      grammar: [
        ["Quantificadores: muito/a, pouco/a", "Estes quantificadores concordam em género com o substantivo e servem para falar de quantidades de forma aproximada.", "Como muita fruta e pouca carne."],
      ]
    },
    ex:[
      ["mcq","Como se diz “a cenoura” em inglês?",["the orange", "the apple", "the banana", "the carrot"],3,"“Cenoura” diz-se “carrot” em inglês."],
      ["mcq","Como se diz “a banana” em inglês?",["the lettuce", "the banana", "the carrot", "the tomato"],1,"“Banana” diz-se “banana” em inglês."],
      ["fill","Completa: “Como ___ fruta todos os dias para me manter saudável.”",["muitas", "muitos", "muito", "muita"],3,"“Fruta” é feminino singular, por isso o quantificador concorda: “muita fruta”."],
      ["translate","Traduz: “I eat little meat and a lot of vegetables.”",["Como pouca carne e muitos legumes.", "Como pouca fruta e muitos legumes.", "Como pouca carne e poucos legumes.", "Como muita carne e muitos legumes."],0,"“Little meat” = “pouca carne”; “a lot of vegetables” = “muitos legumes”."],
      ["arrange","Ordena: [tomate / salada / tem / a / alface / e]",["e A tomate salada tem alface", "tem tomate e alface A salada", "A salada tem tomate e alface", "tem alface salada A e tomate"],2,"Sujeito + verbo + objeto (dois substantivos unidos por “e”)."],
      ["speaking","Descreve em português, em 40-60 palavras, a tua alimentação habitual: que frutas e legumes comes normalmente e com que frequência.",[],["como", "muitas vezes", "legumes"]],
    ]
  },
  {
    id:"pt_b1_cooking_recipes", level:"B1", title:"A cozinha: verbos e receitas simples", emoji:"🍳", xp:61,
    description:"Aprende verbos de cozinha e a explicar os passos de uma receita simples em português.",
    study: {
      vocab: [
        ["cortar, descascar", "cortar, pelar"],
        ["ferver, fritar", "hervir, freír"],
        ["misturar os ingredientes", "mezclar los ingredientes"],
        ["adicionar sal a gosto", "añadir sal al gusto"],
        ["deixar a massa repousar", "dejar reposar la masa"],
        ["pré-aquecer o forno", "precalentar el horno"],
      ],
      grammar: [
        ["O imperativo para dar instruções de receita", "As receitas usam o imperativo para dar instruções passo a passo.", "Corte os legumes, ferva a água e adicione sal a gosto."],
      ]
    },
    ex:[
      ["mcq","Como se diz “misturar os ingredientes” em inglês?",["to preheat the oven", "to cut, to peel", "to mix the ingredients", "to boil, to fry"],2,"“Misturar os ingredientes” diz-se “to mix the ingredients”."],
      ["mcq","Como se diz “pré-aquecer o forno” em inglês?",["to let the dough rest", "to add salt to taste", "to cut, to peel", "to preheat the oven"],3,"“Pré-aquecer o forno” diz-se “to preheat the oven”."],
      ["fill","Completa: “Antes de assar, é preciso ___ o forno a 180 graus.”",["pré-aquecer", "ferver", "fritar", "misturar"],0,"“Pré-aquecer o forno” é o passo típico antes de assar."],
      ["translate","Traduz: “Let the dough rest for ten minutes.”",["Deixe a massa fritar durante dez minutos.", "Deixe a massa cortar durante dez minutos.", "Deixe a massa repousar durante dez minutos.", "Deixe a massa ferver durante dez minutos."],2,"“Let the dough rest” = “Deixe a massa repousar”."],
      ["arrange","Ordena: [gosto / sal / adicione / a]",["gosto Adicione a sal", "a gosto sal Adicione", "sal a gosto Adicione", "Adicione sal a gosto"],3,"Imperativo + objeto + expressão fixa “a gosto”."],
      ["writing","Escreve em português 45-65 palavras explicando os passos de uma receita simples que sabes fazer, usando pelo menos três verbos de cozinha no imperativo.",[],["corte", "adicione", "deixe repousar"]],
    ]
  },
  {
    id:"pt_b2_art_world", level:"B2", title:"O mundo da arte: pintura, música e cinema", emoji:"🎨", xp:83,
    description:"Fala sobre arte, música e cinema, expressando opiniões e apreciações matizadas em português.",
    study: {
      vocab: [
        ["uma obra-prima", "una obra maestra"],
        ["a encenação", "la puesta en escena"],
        ["uma interpretação comovente", "una interpretación conmovedora"],
        ["o estilo de um artista", "el estilo de un artista"],
        ["deixar uma impressão duradoura", "dejar una impresión duradera"],
        ["estar sobrevalorizado/subvalorizado", "estar sobrevalorado/infravalorado"],
      ],
      grammar: [
        ["Verbos de opinião + conjuntivo/indicativo consoante a certeza", "“Parece-me que” + indicativo exprime uma opinião com alguma segurança; “não acho que” + conjuntivo exprime dúvida.", "Parece-me que este filme é uma obra-prima. / Não acho que esteja sobrevalorizado."],
      ]
    },
    ex:[
      ["mcq","Como se diz “uma interpretação comovente” em inglês?",["a lasting impression", "an artist's style", "a moving performance", "a masterpiece"],2,"“Uma interpretação comovente” diz-se “a moving performance”."],
      ["mcq","Como se diz “estar sobrevalorizado” em inglês?",["to be overrated", "an artist's style", "to leave an impression", "to be underrated"],0,"“Estar sobrevalorizado” diz-se “to be overrated”."],
      ["fill","Completa: “Não acho que este filme ___ tão bom quanto dizem.”",["é", "seja", "será", "foi"],1,"“Não acho que” exige conjuntivo: “que seja”."],
      ["translate","Traduz: “This performance left a lasting impression on me.”",["Este estilo deixou-me uma impressão duradoura.", "Esta interpretação deixou-me uma impressão duradoura.", "Esta interpretação deixou-me uma obra-prima.", "Esta encenação deixou-me sobrevalorizado."],1,"“Left a lasting impression” = “deixou uma impressão duradoura”."],
      ["arrange","Ordena: [obra-prima / esta / é / uma]",["uma obra-prima é Esta", "Esta uma é obra-prima", "Esta é uma obra-prima", "Esta uma obra-prima é"],2,"Sujeito + “é” + artigo + substantivo composto."],
      ["writing","Escreve em português 55-75 palavras dando a tua opinião sobre uma obra de arte, filme ou canção (real ou inventada): o que achaste e porquê, usando pelo menos uma estrutura com conjuntivo de opinião.",[],["parece-me que", "não acho que", "uma impressão"]],
    ]
  },
  {
    id:"pt_c1_giving_feedback", level:"C1", title:"A crítica construtiva: dar e receber feedback", emoji:"🗨️", xp:91,
    description:"Aprende a dar e receber feedback de forma construtiva e profissional em português.",
    study: {
      vocab: [
        ["apontar um ponto a melhorar", "señalar un aspecto a mejorar"],
        ["reconhecer os pontos fortes antes das críticas", "reconocer los puntos fuertes antes de criticar"],
        ["formular a crítica em termos concretos", "formular la crítica en términos concretos"],
        ["estar aberto/a ao feedback", "estar abierto a las críticas constructivas"],
        ["levar a crítica para o lado pessoal", "tomarse la crítica como algo personal"],
        ["propor uma solução, não só apontar o problema", "proponer una solución, no solo señalar el problema"],
      ],
      grammar: [
        ["Atenuadores para suavizar uma crítica", "Expressões como “talvez pudesses considerar” ou “uma sugestão seria” suavizam uma crítica sem perder clareza.", "Talvez pudesses considerar reestruturar o relatório; uma sugestão seria começar pelas conclusões."],
      ]
    },
    ex:[
      ["mcq","Como se diz “formular a crítica em termos concretos” em inglês?",["to be open to feedback", "to phrase criticism in concrete terms", "to point out an area for improvement", "to take criticism personally"],1,"“Formular a crítica em termos concretos” diz-se “to phrase criticism in concrete terms”."],
      ["mcq","Como se diz “levar a crítica para o lado pessoal” em inglês?",["to be open to feedback", "to propose a solution", "to acknowledge strengths", "to take criticism personally"],3,"“Levar a crítica para o lado pessoal” diz-se “to take criticism personally”."],
      ["fill","Completa: “Antes de dar uma crítica, é boa ideia ___ os pontos fortes do trabalho.”",["criticar", "reconhecer", "esconder", "ignorar"],1,"“Reconhecer os pontos fortes antes das críticas” faz com que o feedback seja melhor recebido."],
      ["mcq","¿Qué significa «Uma sugestão seria começar pelas conclusões.»?",["One criticism would be to start with the conclusions.","One suggestion would be to start with the conclusions.","One problem would be to start with the conclusions.","One suggestion would be to finish with the conclusions."],1,"“Uma sugestão seria” = “One suggestion would be to”."],
      ["arrange","Ordena: [problema / propõe / só / o / uma solução / não / aponta]",["aponta o solução só propõe problema, Não uma", "Não aponta só o problema, propõe uma solução", "o aponta solução Não só uma propõe problema,", "uma problema, propõe só solução o Não aponta"],1,"Estrutura de contraste: “não só... [verbo]” + “[verbo]... uma solução”."],
      ["writing","Escreve em português 55-75 palavras dando feedback construtivo sobre um trabalho (real ou inventado): reconhece um ponto forte, aponta um ponto a melhorar concreto e propõe uma solução.",[],["reconheço que", "talvez pudesses", "uma sugestão seria"]],
    ]
  },
  {
    id:"pt_c2_inclusive_language", level:"C2", title:"A linguagem inclusiva e a evolução da língua", emoji:"🌐", xp:99,
    description:"Analisa o debate sobre a linguagem inclusiva e como as línguas evoluem com a sociedade.",
    study: {
      vocab: [
        ["a linguagem inclusiva", "el lenguaje inclusivo"],
        ["uma língua viva evolui com o uso", "una lengua viva evoluciona con el uso"],
        ["prescritivismo versus descritivismo", "prescriptivismo frente a descriptivismo"],
        ["um neologismo é incorporado ao dicionário", "se añade un neologismo al diccionario"],
        ["gerar resistência face a uma mudança linguística", "generar resistencia a un cambio lingüístico"],
        ["um argumento não implica necessariamente uma posição política", "un argumento no implica necesariamente una postura política"],
      ],
      grammar: [
        ["Apresentar um debate linguístico sem viés", "Uma análise rigorosa separa a descrição do fenómeno (como a língua muda) da avaliação pessoal (se a mudança deveria ser adotada ou não).", "Do ponto de vista descritivista, a mudança é documentada sem se julgar; do prescritivista, avalia-se se convém normalizá-la."],
      ]
    },
    ex:[
      ["mcq","Como se diz “prescritivismo versus descritivismo” em inglês?",["prescriptivism versus descriptivism", "a neologism", "linguistic change", "inclusive language"],0,"“Prescritivismo versus descritivismo” diz-se “prescriptivism versus descriptivism”."],
      ["mcq","Como se diz “um neologismo é incorporado ao dicionário” em inglês?",["to generate resistance", "a neologism is added to the dictionary", "inclusive language", "a living language evolves with use"],1,"“Um neologismo é incorporado ao dicionário” diz-se “a neologism is added to the dictionary”."],
      ["fill","Completa: “O descritivismo foca-se em documentar como as pessoas falam realmente, não em ditar como ___ falar.”",["costumam", "deveriam", "podem", "querem"],1,"O descritivismo descreve o uso real, sem ditar normas sobre como se “deveria” falar."],
      ["mcq","¿Qué significa «Uma língua viva evolui com o uso, quer gostemos quer não.»?",["A living language evolves without use, whether we like it or not.","A dead language evolves with use, whether we like it or not.","A living language evolves with use, even if it doesn't change.","A living language evolves with use, whether we like it or not."],3,"“Quer gostemos quer não” traduz-se idiomaticamente como “whether we like it or not”."],
      ["arrange","Ordena: [necessariamente / implica / não / uma posição / política / um argumento]",["posição não argumento uma necessariamente implica política Um", "Um argumento não implica necessariamente uma posição política", "posição uma política não implica necessariamente argumento Um", "não necessariamente posição argumento implica Um política uma"],1,"Sujeito + negação + “implica necessariamente” + objeto."],
      ["writing","Escreve em português 55-75 palavras apresentando de forma equilibrada duas posições sobre uma mudança linguística atual (real ou inventada), sem tomar partido explicitamente, distinguindo descrição de avaliação.",[],["por um lado", "por outro", "sem necessariamente"]],
    ]
  },
  {
    id:"pt_a1_neighborhood_city", level:"A1", title:"O bairro e a cidade", emoji:"🏙️", xp:38,
    description:"Aprenda o vocabulário dos lugares do bairro e como dizer onde ficam em português.",
    study: {
      vocab: [
        ["o banco", "el banco"],
        ["o supermercado", "el supermercado"],
        ["o parque", "el parque"],
        ["a farmácia", "la farmacia"],
        ["a biblioteca", "la biblioteca"],
        ["o ponto de ônibus", "la parada de autobús"],
        ["perto de, longe de, ao lado de", "cerca de, lejos de, al lado de"],
      ],
      grammar: [
        ["“Há/Tem” + preposições de lugar", "“Há” (ou “tem”, no português coloquial do Brasil) serve para dizer que algo existe em um lugar; não muda com o número. As preposições de lugar indicam onde algo está.", "Há uma farmácia perto do parque. / A biblioteca fica ao lado do banco."],
      ]
    },
    ex:[
      ["mcq","Como se diz “a farmácia” em inglês?",["the library", "the pharmacy", "the supermarket", "the bank"],1,"“Farmácia” é “pharmacy” em inglês."],
      ["mcq","Como se diz “o ponto de ônibus” em inglês?",["the pharmacy", "the bus stop", "the bank", "the park"],1,"“Ponto de ônibus” é “bus stop” em inglês."],
      ["fill","Completa: “No meu bairro ___ uma biblioteca muito grande.”",["há", "está", "é", "tem de"],0,"“Há” serve para dizer que algo existe, sem mudar com o número: “há uma biblioteca”."],
      ["translate","Traduza: “The pharmacy is next to the park.”",["A farmácia fica ao lado do parque.", "A farmácia fica perto da biblioteca.", "A farmácia fica longe do parque.", "O banco fica ao lado do parque."],0,"“Next to” = “ao lado de”; o sujeito e o lugar devem corresponder ao original."],
      ["arrange","Ordene: [supermercado / longe / o / não / fica]",["O não fica longe supermercado", "supermercado longe O fica não", "O supermercado não fica longe", "fica não O supermercado longe"],2,"Sujeito + verbo + negação + advérbio de lugar."],
      ["writing","Descreva em 20-30 palavras o seu bairro: que lugares há e onde ficam (use “há”, “perto de” e “longe de”).",[],["há", "perto de", "longe de"]],
    ]
  },
  {
    id:"pt_a2_celebrations_holidays", level:"A2", title:"As celebrações e festas", emoji:"🎉", xp:48,
    description:"Aprenda vocabulário de celebrações e a falar de costumes com “costumar”.",
    study: {
      vocab: [
        ["o aniversário", "el cumpleaños"],
        ["o casamento", "la boda"],
        ["o Natal", "la Navidad"],
        ["o Ano Novo", "el Año Nuevo"],
        ["celebrar, festejar", "celebrar"],
        ["dar um presente", "hacer un regalo"],
      ],
      grammar: [
        ["“Costumar” + infinitivo para falar de costumes", "“Costumar” + infinitivo expressa o que se faz habitualmente; funciona como um verbo auxiliar de hábito.", "Costumamos nos reunir com a família no Natal. / Quando criança, eu costumava celebrar meu aniversário no parque."],
      ]
    },
    ex:[
      ["mcq","Como se diz “dar um presente” em inglês?",["to celebrate", "the wedding", "Christmas", "to give a gift"],3,"“Dar um presente” é “to give a gift” em inglês."],
      ["mcq","Como se diz “o casamento” em inglês?",["the birthday", "to celebrate", "the wedding", "New Year"],2,"“Casamento” é “wedding” em inglês."],
      ["fill","Completa: “Todo Ano Novo, ___ celebrar com toda a família.”",["somos", "temos", "fazemos", "costumamos"],3,"“Costumar” + infinitivo expressa um hábito: “costumamos celebrar”."],
      ["translate","Traduza: “We usually give gifts at Christmas.”",["Costumamos dar presentes no Natal.", "Costumamos celebrar presentes no Natal.", "Costumamos dar presentes no aniversário.", "Damos um presente no Natal."],0,"“We usually give gifts” = “Costumamos dar presentes”, com “costumar” + infinitivo."],
      ["arrange","Ordene: [aniversário / celebro / meu / com amigos]",["Celebro meu aniversário com amigos", "Celebro amigos com meu aniversário", "amigos meu com Celebro aniversário", "amigos com meu Celebro aniversário"],0,"Verbo + objeto possessivo + preposição + complemento."],
      ["speaking","Descreva em 40-60 palavras como você costuma celebrar uma festa importante para você (aniversário, Natal, Ano Novo ou outra), usando “costumar”.",[],["costumo", "celebro", "com"]],
    ]
  },
  {
    id:"pt_b1_relationships_friendship", level:"B1", title:"As relações pessoais e a amizade", emoji:"🤝", xp:62,
    description:"Aprenda vocabulário sobre amizade e a dar conselhos com “dever” e “ter que”.",
    study: {
      vocab: [
        ["confiar em alguém", "confiar en alguien"],
        ["dar-se bem/mal com alguém", "llevarse bien/mal con alguien"],
        ["ter algo em comum", "tener algo en común"],
        ["manter contato", "mantener el contacto"],
        ["um amigo/uma amiga de confiança", "un amigo cercano/de confianza"],
        ["fazer as pazes depois de uma discussão", "reconciliarse después de una discusión"],
      ],
      grammar: [
        ["Conselhos com “dever” e “ter que”", "“Dever” + infinitivo dá um conselho suave; “ter que” + infinitivo expressa uma obrigação mais forte.", "Você deveria manter contato com seus amigos. / Vocês têm que fazer as pazes se quiserem continuar amigos."],
      ]
    },
    ex:[
      ["mcq","Como se diz “dar-se bem com alguém” em inglês?",["to get along well/badly with someone", "to have something in common", "to trust someone", "to keep in touch"],0,"“Dar-se bem com alguém” é “to get along well with someone” em inglês."],
      ["mcq","Como se diz “fazer as pazes depois de uma discussão” em inglês?",["to have something in common", "to make up after an argument", "to keep in touch", "a close/trustworthy friend"],1,"“Fazer as pazes depois de uma discussão” é “to make up after an argument” em inglês."],
      ["fill","Completa: “Se você quer manter essa amizade, ___ manter contato.”",["deve de", "deveria", "deveu", "deverá"],1,"“Deveria” (condicional de “dever”) dá um conselho suave na segunda pessoa."],
      ["translate","Traduza: “You have to trust your friends.”",["Você deveria confiar nos seus amigos.", "Você tem que confiar nos seus amigos.", "Você tem que confiar na sua família.", "Você tem que se dar bem com os seus amigos."],1,"“You have to trust” = “Você tem que confiar”, com “ter que” + infinitivo."],
      ["arrange","Ordene: [comum / muito / temos / em]",["muito em Temos comum", "comum em Temos muito", "Temos muito comum em", "Temos muito em comum"],3,"Verbo + quantificador + preposição fixa “em comum”."],
      ["writing","Escreva 45-65 palavras sobre uma amizade importante para você: o que vocês têm em comum e que conselho você daria a alguém que quer manter uma amizade assim.",[],["temos em comum", "você deveria", "confiar"]],
    ]
  },
  {
    id:"pt_b2_remote_work_balance", level:"B2", title:"O trabalho remoto e o equilíbrio vida-trabalho", emoji:"💻", xp:84,
    description:"Fale sobre trabalho remoto e conciliação vida-trabalho usando o gerúndio em português.",
    study: {
      vocab: [
        ["trabalhar remotamente", "trabajar de forma remota"],
        ["o horário flexível", "horario laboral flexible"],
        ["a desconexão digital", "la desconexión digital"],
        ["o esgotamento (burnout)", "el agotamiento (burnout)"],
        ["conciliar a vida profissional e pessoal", "equilibrar el trabajo y la vida personal"],
        ["ser produtivo/a", "ser productivo"],
      ],
      grammar: [
        ["O gerúndio para expressar simultaneidade ou causa", "O gerúndio (-ando/-endo) expressa uma ação simultânea a outra ou a sua causa, sem precisar de conjunção.", "Trabalhando de casa, economiza-se tempo de deslocamento. / Muitos sofrem de esgotamento trabalhando sem desconectar."],
      ]
    },
    ex:[
      ["mcq","Como se diz “a desconexão digital” em inglês?",["digital disconnection", "to balance work and personal life", "burnout", "to be productive"],0,"“Desconexão digital” é “digital disconnection” em inglês."],
      ["mcq","Como se diz “conciliar a vida profissional e pessoal” em inglês?",["to work remotely", "burnout", "to balance work and personal life", "digital disconnection"],2,"“Conciliar a vida profissional e pessoal” é “to balance work and personal life” em inglês."],
      ["fill","Completa: “___ de casa, muitas pessoas conseguem conciliar melhor a vida profissional e pessoal.”",["Trabalhar", "Trabalhado", "Trabalhos", "Trabalhando"],3,"O gerúndio (“trabalhando”) expressa a circunstância que permite o resultado que segue."],
      ["translate","Traduza: “Working without disconnecting can lead to burnout.”",["Desconectando do trabalho, pode-se chegar ao esgotamento.", "Trabalhar sem desconectar pode evitar o esgotamento.", "Trabalhando com horário flexível, pode-se chegar ao esgotamento.", "Trabalhando sem desconectar, pode-se chegar ao esgotamento."],3,"O gerúndio “trabalhando sem desconectar” expressa a causa do esgotamento."],
      ["arrange","Ordene: [flexível / valorizam / um / muitos / horário]",["Muitos valorizam um horário flexível", "horário um Muitos valorizam flexível", "um Muitos flexível horário valorizam", "um horário Muitos flexível valorizam"],0,"Sujeito + verbo + artigo + substantivo + adjetivo."],
      ["writing","Escreva 55-75 palavras sobre as vantagens e desvantagens do trabalho remoto para o equilíbrio vida-trabalho, usando pelo menos um gerúndio de simultaneidade ou causa.",[],["trabalhando", "conciliar", "no entanto"]],
    ]
  },
  {
    id:"pt_c1_negotiation_conflict", level:"C1", title:"A negociação e a resolução de conflitos", emoji:"🤝", xp:92,
    description:"Aprenda a negociar e a suavizar propostas com o condicional em um registro formal.",
    study: {
      vocab: [
        ["chegar a um acordo", "llegar a un acuerdo"],
        ["fazer concessões", "ceder terreno/hacer concesiones"],
        ["um impasse", "un punto muerto"],
        ["uma postura intransigente", "una postura inflexible/intransigente"],
        ["buscar um meio-termo", "buscar un término medio"],
        ["quebrar o gelo", "romper el hielo"],
      ],
      grammar: [
        ["O condicional para suavizar propostas", "O condicional simples suaviza pedidos e propostas em negociações, dando uma impressão de maior cortesia e flexibilidade.", "Estaria disposto a fazer concessões nesse ponto? / Seria preferível buscar um meio-termo antes de chegar a um impasse."],
      ]
    },
    ex:[
      ["mcq","Como se diz “um impasse” em inglês?",["to reach an agreement", "an inflexible/uncompromising stance", "to look for a middle ground", "a deadlock/stalemate"],3,"“Um impasse” é “a deadlock” ou “stalemate” em inglês."],
      ["mcq","Como se diz “uma postura intransigente” em inglês?",["a deadlock/stalemate", "an inflexible/uncompromising stance", "to reach an agreement", "to give ground/make concessions"],1,"“Uma postura intransigente” é “an inflexible/uncompromising stance” em inglês."],
      ["fill","Completa: “___ preferível buscar um meio-termo antes de chegar a um impasse.”",["Será", "É", "Seria", "Foi"],2,"O condicional “seria” suaviza a afirmação, próprio do registro de negociação formal."],
      ["translate","Traduza em registro formal: “Would you be willing to make concessions on this point?”",["Estaria disposto a fazer concessões nesse ponto?", "Está disposto a fazer concessões nesse ponto?", "Estaria disposto a chegar a um acordo nesse ponto?", "Estaria disposto a quebrar o gelo nesse ponto?"],0,"O condicional “estaria disposto” suaviza a pergunta, mais formal que o presente “está disposto”."],
      ["arrange","Ordene: [acordo / difícil / chegar / será / a / um]",["difícil Será acordo a um chegar", "Será difícil chegar a um acordo", "a Será chegar acordo um difícil", "Será difícil chegar um acordo a"],1,"Futuro + adjetivo + infinitivo + complemento."],
      ["writing","Escreva 55-75 palavras descrevendo uma negociação (real ou inventada) em que ambas as partes fizeram concessões para evitar um impasse, usando pelo menos dois condicionais de cortesia.",[],["seria", "estaria disposto", "meio-termo"]],
    ]
  },
  {
    id:"pt_c2_corporate_euphemism", level:"C2", title:"A linguagem corporativa e o eufemismo", emoji:"🏢", xp:100,
    description:"Analise o eufemismo na linguagem corporativa e pratique conectores de reformulação.",
    study: {
      vocab: [
        ["um eufemismo", "un eufemismo"],
        ["o jargão corporativo", "la jerga corporativa"],
        ["uma reestruturação (eufemismo para demissões)", "una reestructuración (eufemismo de despidos)"],
        ["suavizar o impacto de uma mensagem", "suavizar el impacto de un mensaje"],
        ["um anglicismo desnecessário", "un anglicismo innecesario"],
        ["diluir a responsabilidade de alguém", "diluir la responsabilidad de alguien"],
      ],
      grammar: [
        ["Conectores de reformulação e matização", "Expressões como “ou seja”, “em outras palavras” ou “dito de outra forma” reformulam uma ideia, muitas vezes para suavizá-la ou precisá-la — essenciais para identificar eufemismos.", "A empresa anunciou uma “reestruturação”, ou seja, demissões. / Em outras palavras: vão reduzir o quadro de funcionários."],
      ]
    },
    ex:[
      ["mcq","Como se diz “diluir a responsabilidade de alguém” em inglês?",["corporate jargon", "to soften the impact of a message", "to dilute someone's responsibility", "an unnecessary anglicism"],2,"“Diluir a responsabilidade de alguém” é “to dilute someone's responsibility” em inglês."],
      ["mcq","Como se diz “uma reestruturação (eufemismo para demissões)” em inglês?",["a euphemism", "a restructuring (euphemism for layoffs)", "corporate jargon", "an unnecessary anglicism"],1,"“Reestruturação” é “restructuring” em inglês, eufemismo habitual de “layoffs” (demissões)."],
      ["fill","Completa: “A empresa fala em “otimização de recursos”, ___ , de demissões.”",["ou seja", "no entanto", "por exemplo", "embora"],0,"“Ou seja” reformula a expressão eufemística com seu significado literal."],
      ["translate","Traduza com precisão: “Corporate jargon often softens the impact of bad news.”",["O jargão corporativo costuma evitar o impacto das más notícias.", "O jargão corporativo costuma suavizar o impacto das más notícias.", "Um eufemismo costuma suavizar o impacto das más notícias.", "O jargão corporativo costuma diluir o impacto das más notícias."],1,"“Softens the impact” = “suaviza o impacto”; o sujeito deve ser “o jargão corporativo”."],
      ["arrange","Ordene: [demissões / eufemismo / reestruturação / um / de / é]",["é de demissões Reestruturação eufemismo um", "um eufemismo de é Reestruturação demissões", "de Reestruturação eufemismo um é demissões", "Reestruturação é um eufemismo de demissões"],3,"Sujeito + verbo + artigo + substantivo + preposição + complemento."],
      ["writing","Escreva 55-75 palavras analisando um eufemismo corporativo real ou inventado: o que ele esconde, por que é usado e como você o reformularia com mais clareza, usando pelo menos um conector de reformulação.",[],["ou seja", "eufemismo", "em outras palavras"]],
    ]
  },
  {
    id:"pt_a1_airport_hotel", level:"A1", title:"No aeroporto e no hotel", emoji:"✈️", xp:38,
    description:"Aprenda vocabulário de viagem e a falar de planos imediatos com “ir + infinitivo”.",
    study: {
      vocab: [
        ["o passaporte", "el pasaporte"],
        ["a mala", "la maleta"],
        ["o voo", "el vuelo"],
        ["o quarto", "la habitación"],
        ["a reserva", "la reserva"],
        ["fazer o check-in da bagagem", "facturar el equipaje"],
      ],
      grammar: [
        ["“Ir” + infinitivo para o futuro próximo", "“Ir” + infinitivo expressa um plano ou uma ação que vai acontecer em breve, muito usado na fala cotidiana.", "Vou fazer o check-in da bagagem. / Vamos reservar um quarto para sexta-feira."],
      ]
    },
    ex:[
      ["mcq","Como se diz “o passaporte” em inglês?",["the room", "the passport", "the flight", "to check in luggage"],1,"“Passaporte” é “passport” em inglês."],
      ["mcq","Como se diz “fazer o check-in da bagagem” em inglês?",["the room", "the passport", "the suitcase", "to check in luggage"],3,"“Fazer o check-in da bagagem” é “to check in luggage” em inglês."],
      ["fill","Completa: “Amanhã eu ___ fazer o check-in da bagagem bem cedo.”",["vou", "tenho ido", "irei a", "vou a"],0,"“Ir” + infinitivo: “vou fazer”, o verbo “ir” se conjuga no presente."],
      ["translate","Traduza: “We are going to book a room for Friday.”",["Vamos fazer o check-in de um quarto para sexta-feira.", "Vamos reservar um voo para sexta-feira.", "Vamos reservar um quarto para sexta-feira.", "Vamos reservar um quarto para segunda-feira."],2,"“We are going to book” = “Vamos reservar”, com “ir” + infinitivo."],
      ["arrange","Ordene: [passaporte / vou / meu / procurar]",["procurar meu Vou passaporte", "Vou procurar passaporte meu", "procurar passaporte meu Vou", "Vou procurar meu passaporte"],3,"Verbo “ir” + infinitivo + objeto possessivo."],
      ["writing","Descreva em 20-30 palavras os seus planos de viagem: o que você vai fazer (check-in da bagagem, reservar quarto, etc.) usando “ir + infinitivo”.",[],["vou", "vamos", "reservar"]],
    ]
  },
  {
    id:"pt_a2_everyday_tech", level:"A2", title:"A tecnologia do dia a dia", emoji:"📱", xp:48,
    description:"Aprenda vocabulário de tecnologia cotidiana e a comparar com “tão...quanto” e “mais...que”.",
    study: {
      vocab: [
        ["o wifi", "el wifi"],
        ["a senha", "la contraseña"],
        ["o aplicativo", "la aplicación"],
        ["carregar o celular", "cargar el móvil"],
        ["baixar", "descargar"],
        ["a bateria", "la batería"],
      ],
      grammar: [
        ["Comparativos de igualdade e superioridade", "“Tão + adjetivo + quanto” compara qualidades iguais; “mais + adjetivo + que” compara superioridade.", "Esse aplicativo é tão rápido quanto o outro. / Minha bateria dura mais que a sua."],
      ]
    },
    ex:[
      ["mcq","Como se diz “a senha” em inglês?",["the battery", "to charge the phone", "to download", "the password"],3,"“Senha” é “password” em inglês."],
      ["mcq","Como se diz “baixar” em inglês?",["the password", "the battery", "to download", "the app"],2,"“Baixar” é “download” em inglês."],
      ["fill","Completa: “Esse aplicativo é ___ rápido quanto o outro.”",["mais", "tão", "muito", "menos"],1,"“Tão + adjetivo + quanto” compara duas coisas com a mesma qualidade."],
      ["translate","Traduza: “My battery lasts longer than yours.”",["Minha bateria dura menos que a sua.", "Minha bateria dura tão quanto a sua.", "Minha bateria dura mais que a sua.", "Meu wifi dura mais que a sua."],2,"“Lasts longer than” = “dura mais que”, comparativo de superioridade."],
      ["arrange","Ordene: [senha / preciso / uma / mais / segura / de]",["Preciso uma senha mais de segura", "senha mais segura de Preciso uma", "uma de senha mais segura Preciso", "Preciso de uma senha mais segura"],3,"Verbo + preposição + artigo + substantivo + comparativo + adjetivo."],
      ["speaking","Descreva em 40-60 palavras como você usa a tecnologia no dia a dia, comparando dois aplicativos ou dispositivos com “tão...quanto” ou “mais...que”.",[],["tão...quanto", "mais...que", "aplicativo"]],
    ]
  },
  {
    id:"pt_b1_digital_entertainment", level:"B1", title:"O lazer digital: séries e videogames", emoji:"🎮", xp:62,
    description:"Aprenda vocabulário de entretenimento digital e a expressar duração com “estar + gerúndio + há”.",
    study: {
      vocab: [
        ["a série", "la serie"],
        ["o videogame", "el videojuego"],
        ["a plataforma de streaming", "la plataforma de streaming"],
        ["viciar-se em algo", "engancharse a algo"],
        ["a maratona de séries", "maratón de series"],
        ["as legendas", "los subtítulos"],
      ],
      grammar: [
        ["“Estar + gerúndio + há” para expressar duração", "“Estar” + gerúndio + “há” + tempo expressa há quanto tempo uma ação continua acontecendo, semelhante a “to have been doing something”.", "Estou vendo essa série há duas horas. / Estamos jogando videogame há todo o fim de semana."],
      ]
    },
    ex:[
      ["mcq","Como se diz “viciar-se em algo” em inglês?",["to get hooked on something", "the streaming platform", "the series/show", "the video game"],0,"“Viciar-se em algo” é “to get hooked on something” em inglês."],
      ["mcq","Como se diz “a maratona de séries” em inglês?",["binge-watching", "to get hooked on something", "the series/show", "the subtitles"],0,"“Maratona de séries” é “binge-watching” em inglês."],
      ["fill","Completa: “___ vendo essa série há duas horas sem parar.”",["Sou", "Vou", "Tenho", "Estou"],3,"“Estar” + gerúndio + “há” expressa a duração de uma ação em curso: “estou vendo há duas horas”."],
      ["translate","Traduza: “We have been playing video games all weekend.”",["Jogamos videogame todo o fim de semana.", "Estamos jogando videogame há todo o fim de semana.", "Estamos vendo videogame há todo o fim de semana.", "Estamos jogando séries há todo o fim de semana."],1,"“Have been playing all weekend” = “Estamos jogando há todo o fim de semana”, com “estar + gerúndio + há”."],
      ["arrange","Ordene: [viciado / fiquei / nessa série]",["nessa Fiquei viciado série", "série viciado nessa Fiquei", "nessa série viciado Fiquei", "Fiquei viciado nessa série"],3,"Sujeito + verbo + adjetivo + preposição + complemento."],
      ["writing","Escreva 45-65 palavras sobre uma série ou videogame no qual você ficou viciado, usando “estar + gerúndio + há” para dizer há quanto tempo.",[],["estou", "viciado", "plataforma"]],
    ]
  },
  {
    id:"pt_b2_cybersecurity_privacy", level:"B2", title:"A cibersegurança e a privacidade online", emoji:"🔒", xp:84,
    description:"Fale sobre cibersegurança usando orações relativas restritivas e explicativas.",
    study: {
      vocab: [
        ["a cibersegurança", "la ciberseguridad"],
        ["invadir um sistema", "hackear un sistema"],
        ["os dados pessoais", "los datos personales"],
        ["uma senha segura", "una contraseña segura"],
        ["o roubo de identidade", "robo de identidad/phishing"],
        ["criptografar as informações", "cifrar información"],
      ],
      grammar: [
        ["Orações relativas restritivas e explicativas", "As restritivas (sem vírgulas) identificam do que estamos falando e não podem ser omitidas; as explicativas (entre vírgulas) acrescentam informação extra e podem ser omitidas.", "Os dados que compartilhamos online podem ser invadidos. (restritiva) / Meus dados, que compartilho pouco, estão bem protegidos. (explicativa)"],
      ]
    },
    ex:[
      ["mcq","Como se diz “o roubo de identidade” em inglês?",["to encrypt information", "personal data", "a strong password", "identity theft/phishing"],3,"“Roubo de identidade” é “identity theft” ou “phishing” em inglês."],
      ["mcq","Como se diz “criptografar as informações” em inglês?",["cybersecurity", "personal data", "to encrypt information", "a strong password"],2,"“Criptografar as informações” é “to encrypt information” em inglês."],
      ["fill","Completa: “Os dados ___ compartilhamos online podem ser invadidos.”",["quem", "cujo", "que", "onde"],2,"A oração restritiva usa “que” sem vírgulas para identificar de quais dados se fala."],
      ["translate","Traduza: “My data, which I rarely share, is well protected.”",["Meus dados que compartilho pouco estão bem protegidos.", "Meus dados, que compartilho pouco, estão mal protegidos.", "Meus dados, que invado pouco, estão bem protegidos.", "Meus dados, que compartilho pouco, estão bem protegidos."],3,"A vírgula marca uma explicativa: “meus dados, que compartilho pouco,” acrescenta informação extra."],
      ["arrange","Ordene: [segura / precisa / de / uma / senha / você]",["precisa segura de senha Você uma", "Você senha de segura precisa uma", "de uma Você precisa segura senha", "Você precisa de uma senha segura"],3,"Sujeito + verbo + preposição + artigo + substantivo + adjetivo."],
      ["writing","Escreva 55-75 palavras sobre como você protege seus dados pessoais online, usando pelo menos uma oração relativa restritiva e uma explicativa.",[],["que", "o qual/a qual", "dados pessoais"]],
    ]
  },
  {
    id:"pt_c1_historical_memory_heritage", level:"C1", title:"A memória histórica e o patrimônio cultural", emoji:"🏛️", xp:92,
    description:"Analise a memória histórica e o patrimônio cultural usando “estar + particípio” para estados resultantes.",
    study: {
      vocab: [
        ["o patrimônio cultural", "el patrimonio cultural"],
        ["preservar a memória histórica", "preservar la memoria histórica"],
        ["um monumento comemorativo", "un monumento conmemorativo"],
        ["o legado", "el legado"],
        ["reescrever a história", "reescribir la historia"],
        ["a identidade coletiva", "la identidad colectiva"],
      ],
      grammar: [
        ["“Estar + particípio” para o estado resultante", "“Estar” + particípio descreve o estado resultante de uma ação passada, como um adjetivo, diferente da voz passiva com “ser” que descreve a ação em si.", "O monumento está dedicado às vítimas. / A história está marcada por conflitos internos."],
      ]
    },
    ex:[
      ["mcq","Como se diz “o legado” em inglês?",["to preserve historical memory", "the legacy", "a memorial", "cultural heritage"],1,"“Legado” é “legacy” em inglês."],
      ["mcq","Como se diz “reescrever a história” em inglês?",["collective identity", "the legacy", "to rewrite history", "cultural heritage"],2,"“Reescrever a história” é “to rewrite history” em inglês."],
      ["fill","Completa: “O monumento ___ dedicado às vítimas do conflito.”",["esteja", "está", "foi", "é"],1,"“Estar + particípio” descreve o estado resultante: “o monumento está dedicado”."],
      ["translate","Traduza: “Collective identity is often shaped by historical memory.”",["O patrimônio cultural costuma estar marcado pela memória histórica.", "A identidade coletiva costuma estar marcada pela memória histórica.", "A identidade coletiva costuma ser marcada pela memória histórica.", "A identidade coletiva costuma estar marcada pelo legado histórico."],1,"“Is shaped by” como estado resultante se traduz com “está marcada por”."],
      ["arrange","Ordene: [patrimônio / preservar / o / cultural / devemos]",["Devemos patrimônio cultural o preservar", "cultural o patrimônio preservar Devemos", "Devemos preservar o patrimônio cultural", "cultural Devemos patrimônio preservar o"],2,"Verbo modal + infinitivo + artigo + substantivo + adjetivo."],
      ["writing","Escreva 55-75 palavras sobre um monumento ou tradição que preserve a memória histórica da sua comunidade, usando pelo menos duas construções com “estar + particípio”.",[],["está dedicado", "está marcado", "patrimônio cultural"]],
    ]
  },
  {
    id:"pt_c2_institutional_ambiguity", level:"C2", title:"A ambiguidade calculada no discurso institucional", emoji:"🏛️", xp:100,
    description:"Analise a ambiguidade institucional e pratique conectores de matização epistêmica.",
    study: {
      vocab: [
        ["a ambiguidade calculada", "ambigüedad calculada"],
        ["um comunicado institucional", "una declaración institucional"],
        ["evitar se comprometer", "evitar comprometerse"],
        ["a vagueza deliberada", "vaguedad deliberada"],
        ["ler nas entrelinhas", "leer entre líneas"],
        ["uma linguagem evasiva", "lenguaje evasivo"],
      ],
      grammar: [
        ["Conectores de matização epistêmica", "Expressões como “cabe destacar que”, “não há dúvida de que” ou “de certa forma” matizam o grau de certeza ou relevância de uma afirmação, típicas do discurso institucional.", "Cabe destacar que o comunicado evita se comprometer com datas concretas. / De certa forma, a vagueza é deliberada."],
      ]
    },
    ex:[
      ["mcq","Como se diz “ler nas entrelinhas” em inglês?",["evasive language", "calculated ambiguity", "to read between the lines", "to avoid committing oneself"],2,"“Ler nas entrelinhas” é “to read between the lines” em inglês."],
      ["mcq","Como se diz “uma linguagem evasiva” em inglês?",["to read between the lines", "evasive language", "calculated ambiguity", "to avoid committing oneself"],1,"“Uma linguagem evasiva” é “evasive language” em inglês."],
      ["fill","Completa: “___ destacar que o comunicado evita se comprometer com datas concretas.”",["Cabe", "Está", "Há", "Pode"],0,"“Cabe destacar que” é um conector fixo de matização epistêmica que introduz uma observação relevante."],
      ["translate","Traduza com precisão: “In a way, the vagueness is deliberate.”",["De certa forma, a vagueza é evasiva.", "De certa maneira, a vagueza é deliberada.", "De certa forma, a ambiguidade é calculada.", "De certa forma, a vagueza é deliberada."],3,"“In a way” = “de certa forma”, conector fixo de matização."],
      ["arrange","Ordene: [dúvida / há / não / de / que / a linguagem / é evasiva]",["a dúvida de linguagem há evasiva Não é que", "Não há dúvida de que a linguagem é evasiva", "a que há evasiva é linguagem dúvida de Não", "Não dúvida a linguagem evasiva é que de há"],1,"Conector fixo “não há dúvida de que” + subordinada."],
      ["writing","Escreva 55-75 palavras analisando um comunicado institucional real ou inventado que use ambiguidade calculada, usando pelo menos dois conectores de matização epistêmica.",[],["cabe destacar que", "não há dúvida de que", "de certa forma"]],
    ]
  },
  {
    id:"pt_a1_sports_exercise", level:"A1", title:"Os esportes e o exercício físico", emoji:"⚽", xp:38,
    description:"Aprenda vocabulário de esportes e a expressar gostos com o verbo “gostar de”.",
    study: {
      vocab: [
        ["o futebol", "el fútbol"],
        ["a natação", "la natación"],
        ["correr", "correr"],
        ["a academia", "el gimnasio"],
        ["fazer exercício", "hacer ejercicio"],
        ["o time", "el equipo"],
      ],
      grammar: [
        ["O verbo “gostar de” + infinitivo/substantivo", "“Gostar de” é seguido pela preposição “de” + infinitivo ou substantivo, e concorda com a pessoa que gosta, não com o que é gostado.", "Eu gosto de nadar. / Ela gosta de esportes coletivos."],
      ]
    },
    ex:[
      ["mcq","Como se diz “a natação” em inglês?",["the gym", "to exercise", "soccer/football", "swimming"],3,"“Natação” é “swimming” em inglês."],
      ["mcq","Como se diz “o time” em inglês?",["to run", "soccer/football", "the team", "to exercise"],2,"“Time” é “team” em inglês."],
      ["fill","Completa: “Eu ___ de correr pela manhã.”",["gosta", "gosto", "gostamos", "gostas"],1,"“Gostar de” concorda com o sujeito “eu”: “eu gosto de”."],
      ["translate","Traduza: “She likes team sports.”",["Ela gosta de esporte coletivo.", "Ela gosta de esportes coletivos.", "Elas gostam de esportes coletivos.", "Ela gosta de esportes individuais."],1,"“Ela gosta” concorda com o sujeito singular “ela”."],
      ["arrange","Ordene: [academia / vou / à / fazer exercício]",["Vou à academia fazer exercício", "à academia fazer Vou exercício", "fazer Vou academia exercício à", "Vou à exercício fazer academia"],0,"Verbo + preposição + artigo + substantivo + infinitivo."],
      ["writing","Descreva em 20-30 palavras quais esportes você gosta e com que frequência faz exercício, usando “gostar de”.",[],["eu gosto de", "fazer exercício", "futebol"]],
    ]
  },
  {
    id:"pt_a2_household_chores", level:"A2", title:"Os afazeres domésticos", emoji:"🧹", xp:48,
    description:"Aprenda vocabulário de tarefas de casa e a expressar obrigação impessoal com “é preciso”.",
    study: {
      vocab: [
        ["varrer", "barrer"],
        ["lavar a louça", "fregar los platos"],
        ["tirar o lixo", "sacar la basura"],
        ["passar a roupa", "planchar la ropa"],
        ["arrumar a cama", "hacer la cama"],
        ["passar o aspirador", "pasar la aspiradora"],
      ],
      grammar: [
        ["“É preciso” + infinitivo para a obrigação impessoal", "“É preciso” + infinitivo expressa uma obrigação geral, sem especificar quem deve fazê-la, diferente de “ter que” que leva sujeito.", "É preciso tirar o lixo todos os dias. / Antes de sair, é preciso arrumar a cama."],
      ]
    },
    ex:[
      ["mcq","Como se diz “lavar a louça” em inglês?",["to sweep", "to take out the trash", "to wash the dishes", "to make the bed"],2,"“Lavar a louça” é “to wash the dishes” em inglês."],
      ["mcq","Como se diz “passar o aspirador” em inglês?",["to sweep", "to iron the clothes", "to vacuum", "to make the bed"],2,"“Passar o aspirador” é “to vacuum” em inglês."],
      ["fill","Completa: “Antes de sair de casa, ___ preciso arrumar a cama.”",["é", "está", "tem", "há"],0,"“É preciso” + infinitivo expressa uma obrigação geral sem sujeito específico."],
      ["translate","Traduza: “You have to take out the trash every day.”",["É preciso varrer o lixo todos os dias.","É preciso tirar o lixo uma vez por semana.","É preciso tirando o lixo todos os dias.","É preciso tirar o lixo todos os dias."],3,"“You have to” aqui é impessoal no sentido geral, por isso se traduz melhor com “é preciso”."],
      ["arrange","Ordene: [louça / lavar / preciso / a / é]",["É preciso louça lavar a", "a preciso louça É lavar", "lavar É louça a preciso", "É preciso lavar a louça"],3,"“É preciso” + infinitivo + complemento."],
      ["speaking","Descreva em 40-60 palavras quais afazeres domésticos é preciso fazer na sua casa toda semana, usando “é preciso”.",[],["é preciso", "toda semana", "em casa"]],
    ]
  },
  {
    id:"pt_b1_dating_love", level:"B1", title:"Os encontros e o amor", emoji:"💕", xp:62,
    description:"Aprenda vocabulário sobre encontros e a fazer promessas e previsões com o futuro simples.",
    study: {
      vocab: [
        ["ter um encontro", "tener una cita"],
        ["apaixonar-se por alguém", "enamorarse de alguien"],
        ["terminar com alguém", "romper con alguien"],
        ["o parceiro/a parceira", "la pareja"],
        ["sentir falta de alguém", "echar de menos a alguien"],
        ["noivar/se comprometer", "comprometerse"],
      ],
      grammar: [
        ["O futuro simples para promessas e previsões", "O futuro simples (-ei, -ás, -á...) se usa para fazer promessas formais ou prever o que vai acontecer, mais definitivo que “ir + infinitivo”.", "Prometo que nunca terminarei com você. / Acho que vocês noivarão em breve."],
      ]
    },
    ex:[
      ["mcq","Como se diz “apaixonar-se por alguém” em inglês?",["to go on a date", "to miss someone", "to fall in love with someone", "to get engaged/commit"],2,"“Apaixonar-se por alguém” é “to fall in love with someone” em inglês."],
      ["mcq","Como se diz “sentir falta de alguém” em inglês?",["to break up with someone", "to miss someone", "to get engaged/commit", "the partner/couple"],1,"“Sentir falta de alguém” é “to miss someone” em inglês."],
      ["fill","Completa: “Prometo que nunca ___ com você.”",["tenho terminado", "terminarei", "terminava", "termino"],1,"O futuro simples “terminarei” expressa uma promessa firme sobre algo que não vai acontecer."],
      ["translate","Traduza: “I think you two will get engaged soon.”",["Acho que vocês noivam em breve.", "Acho que vocês noivarão amanhã.", "Acho que vocês noivarão em breve.", "Acho que vocês se apaixonarão em breve."],2,"“Will get engaged” = “noivarão”, futuro simples para uma previsão."],
      ["arrange","Ordene: [encontro / vou / ter / um / amanhã]",["Vou ter um encontro amanhã", "ter um Vou encontro amanhã", "amanhã ter um Vou encontro", "encontro ter amanhã Vou um"],0,"“Ir” + infinitivo + artigo + substantivo + advérbio de tempo."],
      ["writing","Escreva 45-65 palavras sobre um relacionamento (real ou inventado), usando pelo menos dois verbos no futuro simples para fazer promessas ou previsões.",[],["prometerei/prometerá", "seremos", "parceiro/a"]],
    ]
  },
  {
    id:"pt_b2_sustainable_tourism", level:"B2", title:"O turismo sustentável e o overtourism", emoji:"🧳", xp:84,
    description:"Fale sobre turismo sustentável usando “a menos que” e “desde que” + subjuntivo.",
    study: {
      vocab: [
        ["o overtourism (turismo de massa)", "la masificación turística"],
        ["saturar um destino turístico", "saturar un destino turístico"],
        ["o turismo sustentável", "el turismo sostenible"],
        ["encarecer a moradia local", "encarecer la vivienda local"],
        ["distribuir o impacto turístico", "repartir el impacto del turismo"],
        ["respeitar a cultura local", "respetar la cultura local"],
      ],
      grammar: [
        ["“A menos que” e “desde que” + subjuntivo", "“A menos que” (unless) e “desde que” (provided that) introduzem uma condição e são seguidas de subjuntivo.", "O destino continuará saturado a menos que o turismo seja regulado. / O turismo será positivo desde que a cultura local seja respeitada."],
      ]
    },
    ex:[
      ["mcq","Como se diz “encarecer a moradia local” em inglês?",["overtourism", "to drive up local housing costs", "to overcrowd a tourist destination", "to spread out tourism's impact"],1,"“Encarecer a moradia local” é “to drive up local housing costs” em inglês."],
      ["mcq","Como se diz “distribuir o impacto turístico” em inglês?",["to spread out tourism's impact", "overtourism", "to overcrowd a tourist destination", "sustainable tourism"],0,"“Distribuir o impacto turístico” é “to spread out tourism's impact” em inglês."],
      ["fill","Completa: “O destino continuará saturado a menos que o turismo ___ regulado.”",["seja", "é", "seria", "será"],0,"“A menos que” exige subjuntivo: “a menos que seja regulado”."],
      ["translate","Traduza: “Tourism will be positive provided that the local culture is respected.”",["O turismo será positivo a menos que a cultura local seja respeitada.", "O turismo será positivo desde que a cultura local seja respeitada.", "O turismo será positivo desde que a cultura local seja ignorada.", "O turismo será positivo desde que a cultura local é respeitada."],1,"“Provided that” = “desde que”, seguido de subjuntivo: “seja respeitada”."],
      ["arrange","Ordene: [saturados / destinos / muitos / estão / turísticos]",["Muitos destinos saturados turísticos estão", "Muitos destinos turísticos estão saturados", "estão destinos turísticos Muitos saturados", "Muitos saturados destinos turísticos estão"],1,"Sujeito + verbo + adjetivo."],
      ["writing","Escreva 55-75 palavras sobre o overtourism em um destino que você conhece, usando pelo menos um “a menos que” e um “desde que” com subjuntivo.",[],["a menos que", "desde que", "sustentável"]],
    ]
  },
  {
    id:"pt_c1_gastronomy_identity", level:"C1", title:"A gastronomia e a identidade cultural", emoji:"🍽️", xp:92,
    description:"Analise a gastronomia como identidade cultural usando estruturas enfáticas com “o que”.",
    study: {
      vocab: [
        ["a denominação de origem protegida", "denominación de origen protegida"],
        ["um prato emblemático", "un plato emblemático"],
        ["a fusão culinária", "la fusión culinaria"],
        ["preservar uma receita tradicional", "preservar una receta tradicional"],
        ["apropriar-se de uma tradição culinária", "apropiarse de una tradición culinaria"],
        ["o paladar coletivo", "el paladar colectivo"],
      ],
      grammar: [
        ["Estruturas enfáticas com “o que”", "“O que” + verbo + “é” enfatiza um elemento da frase, dando-lhe maior destaque, muito usado no registro argumentativo.", "O que define uma cultura é a sua gastronomia. / O que preocupa os chefs locais é a apropriação de suas receitas."],
      ]
    },
    ex:[
      ["mcq","Como se diz “um prato emblemático” em inglês?",["to preserve a traditional recipe", "the collective palate", "an iconic/signature dish", "protected designation of origin"],2,"“Um prato emblemático” é “an iconic/signature dish” em inglês."],
      ["mcq","Como se diz “apropriar-se de uma tradição culinária” em inglês?",["to appropriate a culinary tradition", "protected designation of origin", "an iconic/signature dish", "to preserve a traditional recipe"],0,"“Apropriar-se de uma tradição culinária” é “to appropriate a culinary tradition” em inglês."],
      ["fill","Completa: “O que ___ uma cultura é, em grande parte, a sua gastronomia.”",["definem", "define", "definiria", "definir"],1,"A estrutura enfática “o que + verbo + é” leva o verbo no singular, concordando com “o que”."],
      ["translate","Traduza com estrutura enfática: “What worries local chefs is the appropriation of their recipes.”",["O que preocupam os chefs locais é a apropriação de suas receitas.", "O que preocupa os chefs locais é a fusão de suas receitas.", "O que preocupa os chefs locais são a apropriação de suas receitas.", "O que preocupa os chefs locais é a apropriação de suas receitas."],3,"O verbo “preocupa” concorda no singular com “o que”, sujeito da oração enfática."],
      ["arrange","Ordene: [receita / preservar / esta / devemos / tradicional]",["preservar Devemos receita esta tradicional", "Devemos preservar esta receita tradicional", "receita preservar tradicional Devemos esta", "preservar receita Devemos esta tradicional"],1,"Verbo modal + infinitivo + objeto demonstrativo + substantivo + adjetivo."],
      ["writing","Escreva 55-75 palavras sobre um prato que você considera parte da sua identidade cultural, usando pelo menos duas estruturas enfáticas com “o que”.",[],["o que define", "o que representa", "identidade cultural"]],
    ]
  },
  {
    id:"pt_c2_crisis_rhetoric", level:"C2", title:"A retórica da crise e o pânico moral", emoji:"📢", xp:100,
    description:"Analise a retórica de crise e pratique estruturas de intensificação retórica.",
    study: {
      vocab: [
        ["o pânico moral", "el pánico moral"],
        ["uma crise fabricada", "una crisis fabricada"],
        ["catastrofizar uma situação", "catastrofizar una situación"],
        ["um bode expiatório", "un chivo expiatorio"],
        ["desproporcionar uma ameaça", "exagerar desproporcionadamente una amenaza"],
        ["um discurso alarmista", "la retórica alarmista"],
      ],
      grammar: [
        ["Estruturas de intensificação retórica", "“Não só... mas também” e “cada vez mais” intensificam uma afirmação, acumulando gravidade — recurso típico do discurso de crise e do pânico moral.", "Não só se exagera a ameaça, mas também se busca um bode expiatório. / O discurso alarmista está cada vez mais frequente na mídia."],
      ]
    },
    ex:[
      ["mcq","Como se diz “um bode expiatório” em inglês?",["a manufactured crisis", "to blow a threat out of proportion", "to catastrophize a situation", "a scapegoat"],3,"“Um bode expiatório” é “a scapegoat” em inglês."],
      ["mcq","Como se diz “desproporcionar uma ameaça” em inglês?",["to catastrophize a situation", "to blow a threat out of proportion", "a scapegoat", "a manufactured crisis"],1,"“Desproporcionar uma ameaça” é “to blow a threat out of proportion” em inglês."],
      ["fill","Completa: “Não só se exagera a ameaça, ___ também se busca um bode expiatório.”",["portanto", "porém", "mas", "pois"],2,"“Não só... mas também” intensifica uma afirmação acrescentando um segundo elemento com verbo próprio."],
      ["translate","Traduza com precisão: “Alarmist rhetoric is becoming increasingly common in the media.”",["O discurso alarmista está cada vez menos frequente na mídia.", "O discurso alarmista está cada vez mais grave na mídia.", "O discurso alarmista está cada vez mais frequente na mídia.", "O pânico moral está cada vez mais frequente na mídia."],2,"“Increasingly common” = “cada vez mais frequente”, estrutura de intensificação gradual."],
      ["arrange","Ordene: [expiatório / busca / um / mídia / bode / a]",["A expiatório busca bode mídia um", "bode expiatório um A mídia busca", "A mídia busca um bode expiatório", "bode busca mídia A expiatório um"],2,"Sujeito + verbo + artigo + substantivo + adjetivo."],
      ["writing","Escreva 55-75 palavras analisando um caso real ou inventado de pânico moral na mídia, usando pelo menos uma estrutura “não só... mas também” e uma com “cada vez mais”.",[],["não só... mas também", "cada vez mais", "pânico moral"]],
    ]
  },
  {
    id:"pt_a1_school_supplies_subjects", level:"A1", title:"Na escola: material escolar e disciplinas", emoji:"🎒", xp:38,
    description:"Aprenda vocabulário escolar e a usar corretamente os artigos definidos e indefinidos.",
    study: {
      vocab: [
        ["o caderno", "el cuaderno"],
        ["o lápis", "el lápiz"],
        ["a mochila", "la mochila"],
        ["a matemática", "las matemáticas"],
        ["a história", "la historia"],
        ["o professor/a professora", "el profesor/la profesora"],
      ],
      grammar: [
        ["Artigos definidos e indefinidos", "Os artigos definidos (o, a, os, as) indicam algo específico ou já conhecido; os indefinidos (um, uma, uns, umas) indicam algo não específico ou mencionado pela primeira vez.", "Tenho um caderno novo. / O caderno está na mochila."],
      ]
    },
    ex:[
      ["mcq","Como se diz “o lápis” em inglês?",["the backpack", "the pencil", "the teacher", "history"],1,"“Lápis” é “pencil” em inglês."],
      ["mcq","Como se diz “a matemática” em inglês?",["math", "the notebook", "the pencil", "the teacher"],0,"“Matemática” é “math” em inglês."],
      ["fill","Completa: “Tenho ___ mochila nova para a escola.”",["uma", "um", "a", "o"],0,"Usa-se o artigo indefinido “uma” porque é a primeira vez que é mencionada."],
      ["translate","Traduza: “The notebook is in the backpack.”",["O lápis está na mochila.", "O caderno está na sala de aula.", "Um caderno está na mochila.", "O caderno está na mochila."],3,"“The notebook” já é conhecido, por isso se usa o artigo definido “o”."],
      ["arrange","Ordene: [história / muito / eu / gosto / de]",["de gosto história Eu muito", "Eu gosto muito de história", "Eu muito história de gosto", "Eu de história gosto muito"],1,"Sujeito + verbo + advérbio + preposição + substantivo."],
      ["writing","Descreva em 20-30 palavras que material escolar você tem e de qual disciplina você mais gosta, usando artigos definidos e indefinidos.",[],["um/uma", "o/a", "eu gosto"]],
    ]
  },
  {
    id:"pt_a2_post_office_packages", level:"A2", title:"O correio e os pacotes", emoji:"📦", xp:48,
    description:"Aprenda vocabulário postal e a usar pronomes de objeto direto (o/a/os/as).",
    study: {
      vocab: [
        ["o pacote", "el paquete"],
        ["a carta", "la carta"],
        ["o selo", "el sello"],
        ["enviar pelo correio", "enviar por correo"],
        ["a caixa de correio", "el buzón"],
        ["o endereço", "la dirección"],
      ],
      grammar: [
        ["Pronomes de objeto direto (o/a/os/as)", "Os pronomes de objeto direto substituem um substantivo já mencionado, concordando em gênero e número, geralmente colocados antes ou ligados ao verbo.", "A carta? Eu a enviei ontem. / Os pacotes? Eu os recebi esta manhã."],
      ]
    },
    ex:[
      ["mcq","Como se diz “o selo” em inglês?",["to mail/send", "the stamp", "the package", "the mailbox"],1,"“Selo” é “stamp” em inglês."],
      ["mcq","Como se diz “a caixa de correio” em inglês?",["the stamp", "the mailbox", "to mail/send", "the package"],1,"“Caixa de correio” é “mailbox” em inglês."],
      ["fill","Completa: “O pacote? Eu ___ recebi esta manhã.”",["lhe", "os", "a", "o"],3,"“O pacote” é masculino singular, por isso se substitui com “o”."],
      ["translate","Traduza: “The letters? I sent them yesterday.”",["As cartas? Eu a enviei ontem.", "As cartas? Eu os enviei ontem.", "As cartas? Eu as enviei ontem.", "A carta? Eu as enviei ontem."],2,"“As cartas” é feminino plural, por isso se substitui com “as”."],
      ["arrange","Ordene: [endereço / preciso / do / seu]",["Preciso do seu endereço", "do Preciso endereço seu", "seu endereço do Preciso", "do Preciso seu endereço"],0,"Verbo + preposição + objeto possessivo + substantivo."],
      ["speaking","Descreva em 40-60 palavras a última vez que você enviou uma carta ou um pacote, usando pronomes de objeto direto (o/a/os/as).",[],["eu o/a enviei", "eu os/as recebi", "pacote"]],
    ]
  },
  {
    id:"pt_b1_movies_theater", level:"B1", title:"Ir ao cinema e ao teatro", emoji:"🎬", xp:62,
    description:"Aprenda vocabulário de cinema e teatro e a construir orações temporais com “quando”, “enquanto” e “antes que”.",
    study: {
      vocab: [
        ["o ingresso", "la entrada"],
        ["a estreia", "el estreno"],
        ["o elenco", "el reparto"],
        ["os efeitos especiais", "los efectos especiales"],
        ["a poltrona", "el asiento"],
        ["o intervalo", "el intermedio"],
      ],
      grammar: [
        ["Orações temporais com “quando”, “enquanto” e “antes que”", "“Quando” e “enquanto” + indicativo descrevem ações habituais ou simultâneas; “antes que” exige subjuntivo porque introduz uma ação ainda não realizada.", "Compro os ingressos quando chego ao cinema. / Conversamos enquanto esperamos a estreia. / Chegamos antes que o filme comece."],
      ]
    },
    ex:[
      ["mcq","Como se diz “a estreia” em inglês?",["the intermission", "the seat", "the premiere", "special effects"],2,"“Estreia” é “premiere” em inglês."],
      ["mcq","Como se diz “o elenco” em inglês?",["the premiere", "the intermission", "the seat", "the cast"],3,"“Elenco” é “cast” em inglês."],
      ["fill","Completa: “Chegamos antes que o filme ___.”",["começa", "começou", "começará", "comece"],3,"“Antes que” exige subjuntivo porque a ação ainda não aconteceu: “antes que comece”."],
      ["translate","Traduza: “We talk while we wait for the premiere.”",["Conversamos quando esperamos a estreia.", "Conversamos enquanto esperamos a estreia.", "Conversamos enquanto esperamos o intervalo.", "Conversamos enquanto esperemos a estreia."],1,"“Enquanto” + indicativo descreve ações simultâneas: “enquanto esperamos”."],
      ["arrange","Ordene: [cinema / vamos / frequentemente / ao]",["frequentemente ao Vamos cinema", "Vamos frequentemente ao cinema", "Vamos ao cinema frequentemente", "frequentemente Vamos ao cinema"],1,"Sujeito + verbo + advérbio + preposição + substantivo."],
      ["writing","Escreva 45-65 palavras sobre sua última visita ao cinema ou ao teatro, usando pelo menos duas orações temporais com “quando”, “enquanto” ou “antes que”.",[],["quando", "enquanto", "antes que"]],
    ]
  },
  {
    id:"pt_b2_social_activism_protests", level:"B2", title:"O ativismo social e os protestos", emoji:"✊", xp:84,
    description:"Fale sobre ativismo social usando o subjuntivo com verbos de influência (exigir, pedir que).",
    study: {
      vocab: [
        ["uma manifestação/protesto", "una protesta"],
        ["exigir uma mudança", "exigir un cambio"],
        ["assinar uma petição", "firmar una petición"],
        ["conscientizar sobre algo", "concienciar sobre algo"],
        ["um coletivo/organização", "un colectivo/una organización"],
        ["mobilizar as pessoas", "movilizar a la gente"],
      ],
      grammar: [
        ["Subjuntivo com verbos de influência", "Verbos como “exigir”, “pedir” ou “sugerir” + “que” exigem subjuntivo na oração subordinada porque tentam influenciar a ação de outra pessoa.", "Os manifestantes exigem que o governo aja. / O coletivo pede que a petição seja assinada."],
      ]
    },
    ex:[
      ["mcq","Como se diz “conscientizar sobre algo” em inglês?",["to demand change", "to raise awareness about something", "to sign a petition", "to mobilize people"],1,"“Conscientizar sobre algo” é “to raise awareness about something” em inglês."],
      ["mcq","Como se diz “mobilizar as pessoas” em inglês?",["to mobilize people", "to sign a petition", "a collective/organization", "to demand change"],0,"“Mobilizar as pessoas” é “to mobilize people” em inglês."],
      ["fill","Completa: “Os manifestantes exigem que o governo ___.”",["aja", "agiria", "age", "agirá"],0,"“Exigir que” exige subjuntivo: “exigem que aja”."],
      ["translate","Traduza: “The collective is asking people to sign the petition.”",["O coletivo pede que as pessoas assinem a manifestação.", "O coletivo pede que as pessoas assinam a petição.", "O coletivo pede que as pessoas assinem a petição.", "O coletivo exige que as pessoas assinem a petição."],2,"“Pedir que” exige subjuntivo: “pede que assinem”."],
      ["arrange","Ordene: [petição / vou / assinar / a]",["petição a assinar Vou", "a petição Vou assinar", "a Vou petição assinar", "Vou assinar a petição"],3,"“Ir” + infinitivo + artigo + substantivo."],
      ["writing","Escreva 55-75 palavras sobre uma causa social que seja importante para você, usando pelo menos dois verbos de influência + subjuntivo (exigir que, pedir que, sugerir que).",[],["eu exijo que", "eu peço que", "manifestação"]],
    ]
  },
  {
    id:"pt_c1_aging_population_pensions", level:"C1", title:"O envelhecimento populacional e as aposentadorias", emoji:"👴", xp:92,
    description:"Analise o envelhecimento populacional usando orações consecutivas (“tão...que”, “de tal forma que”).",
    study: {
      vocab: [
        ["o envelhecimento populacional", "el envejecimiento de la población"],
        ["o sistema de aposentadoria", "el sistema de pensiones"],
        ["a taxa de natalidade", "la tasa de natalidad"],
        ["a expectativa de vida", "la esperanza de vida"],
        ["sustentar o sistema de aposentadoria", "sostener el sistema de pensiones"],
        ["a lacuna geracional", "la brecha generacional"],
      ],
      grammar: [
        ["Orações consecutivas: “tão...que” e “de tal forma que”", "As orações consecutivas expressam uma consequência derivada de uma intensidade ou modo. “Tão + adjetivo + que” enfatiza o grau; “de tal forma que” introduz o resultado de uma ação.", "A população envelhece tão rápido que o sistema de aposentadoria está em risco. / A natalidade caiu de tal forma que faltam trabalhadores jovens."],
      ]
    },
    ex:[
      ["mcq","Como se diz “a taxa de natalidade” em inglês?",["the birth rate", "the pension system", "life expectancy", "the generational gap"],0,"“Taxa de natalidade” é “birth rate” em inglês."],
      ["mcq","Como se diz “sustentar o sistema de aposentadoria” em inglês?",["the generational gap", "life expectancy", "the birth rate", "to sustain the pension system"],3,"“Sustentar o sistema de aposentadoria” é “to sustain the pension system” em inglês."],
      ["fill","Completa: “A população envelhece tão rápido ___ o sistema de aposentadoria está em risco.”",["como", "que", "assim", "pois"],1,"“Tão + adjetivo/advérbio + que” introduz a consequência: “tão rápido que está em risco”."],
      ["translate","Traduza com oração consecutiva: “The birth rate has dropped in such a way that young workers are lacking.”",["A natalidade caiu de tal forma que faltam trabalhadores jovens.", "A natalidade caiu de tal forma que sobram trabalhadores jovens.", "A natalidade caiu tão forma que faltam trabalhadores jovens.", "A expectativa de vida caiu de tal forma que faltam trabalhadores jovens."],0,"“In such a way that” = “de tal forma que”, introduzindo a consequência."],
      ["arrange","Ordene: [aposentadoria / sistema / preocupa / de / o / muitos]",["muitos aposentadoria O sistema preocupa de", "preocupa de O muitos sistema aposentadoria", "de muitos O aposentadoria preocupa sistema", "O sistema de aposentadoria preocupa muitos"],3,"Sujeito + verbo + complemento."],
      ["writing","Escreva 55-75 palavras sobre o envelhecimento populacional no seu país, usando pelo menos uma oração com “tão...que” e outra com “de tal forma que”.",[],["tão...que", "de tal forma que", "envelhecimento"]],
    ]
  },
  {
    id:"pt_c2_rhetoric_of_silence", level:"C2", title:"A retórica do silêncio e do não dito", emoji:"🤐", xp:100,
    description:"Analise a retórica do silêncio e pratique a elipse com fins retóricos.",
    study: {
      vocab: [
        ["o silêncio eloquente", "el silencio elocuente"],
        ["omitir deliberadamente algo", "omitir algo deliberadamente"],
        ["o não dito", "lo no dicho"],
        ["um vazio discursivo", "un vacío discursivo"],
        ["deixar algo em suspenso", "dejar algo en el aire"],
        ["a elipse retórica", "la elipsis retórica"],
      ],
      grammar: [
        ["A elipse com fins retóricos", "A elipse omite um elemento subentendido pelo contexto, gerando ênfase ou deixando uma ideia deliberadamente incompleta — um recurso poderoso no discurso político e literário.", "Uns se calam por medo; outros, por cumplicidade. (omite-se “se calam”) / Prometeu reformas... e silêncio. (omite-se o verbo esperado)"],
      ]
    },
    ex:[
      ["mcq","Como se diz “um vazio discursivo” em inglês?",["a discursive gap", "to leave something hanging", "rhetorical ellipsis", "the unsaid"],0,"“Um vazio discursivo” é “a discursive gap” em inglês."],
      ["mcq","Como se diz “deixar algo em suspenso” em inglês?",["to leave something hanging", "to deliberately omit something", "the unsaid", "a discursive gap"],0,"“Deixar algo em suspenso” é “to leave something hanging” em inglês."],
      ["fill","Completa: “Uns se calam por medo; outros, por ___.”",["que cumplicidade", "cumplicidade", "se calam cumplicidade", "é cumplicidade"],1,"A elipse omite o verbo repetido “se calam”, deixando apenas o complemento: “outros, por cumplicidade”."],
      ["translate","Traduza com elipse retórica: “He promised reforms... and silence.”",["Prometeu reformas... e silêncio.", "Prometeu reformas... e foi silêncio.", "Prometeu reformas... e um silêncio.", "Prometeu reformas... e barulho."],0,"A elipse retórica omite o verbo esperado após as reticências, deixando apenas “e silêncio”."],
      ["arrange","Ordene: [diz / às vezes / mais / o silêncio / que / as palavras]",["O silêncio às vezes diz mais que as palavras", "vezes O as silêncio que mais diz palavras às", "vezes palavras silêncio às as diz O mais que", "vezes silêncio palavras diz mais que as O às"],0,"Sujeito + advérbio + verbo + comparativo + complemento."],
      ["writing","Escreva 55-75 palavras analisando um exemplo (real ou inventado) de silêncio retórico em um discurso, usando pelo menos uma elipse deliberada.",[],["o não dito", "silêncio eloquente", "omitir"]],
    ]
  },
  {
    id:"pt_a1_time_parts_of_day", level:"A1", title:"As horas e os períodos do dia", emoji:"🕐", xp:38,
    description:"Aprenda a dizer as horas e os períodos do dia com preposições de tempo.",
    study: {
      vocab: [
        ["a manhã", "la mañana"],
        ["a tarde", "la tarde"],
        ["a noite", "la noche"],
        ["o meio-dia", "el mediodía"],
        ["a meia-noite", "la medianoche"],
        ["em ponto", "en punto"],
      ],
      grammar: [
        ["“Que horas são?” + preposições de tempo", "Para perguntar as horas usa-se “Que horas são?”; para responder, “é uma hora” (singular) ou “são + número + horas” (plural), com “da manhã/tarde/noite” para especificar o momento.", "São três horas da tarde. / É uma hora em ponto da madrugada."],
      ]
    },
    ex:[
      ["mcq","Como se diz “a meia-noite” em inglês?",["the afternoon", "o'clock/sharp", "midnight", "the morning"],2,"“Meia-noite” é “midnight” em inglês."],
      ["mcq","Como se diz “em ponto” em inglês?",["midnight", "the night", "noon", "o'clock/sharp"],3,"“Em ponto” é “o'clock” ou “sharp” em inglês."],
      ["fill","Completa: “___ três horas da tarde.”",["Há", "Está", "São", "É"],2,"Usa-se “são” com números plurais: “são três horas”."],
      ["translate","Traduza: “It's one o'clock in the morning.”",["É uma hora da tarde.", "São uma hora da manhã.", "É a uma hora da manhã.", "É uma hora da manhã."],3,"Com “uma hora” (singular) se usa “é”, não “são”."],
      ["arrange","Ordene: [tarde / horas / são / da / quatro]",["horas São da quatro tarde", "São quatro horas da tarde", "quatro da São horas tarde", "horas da tarde São quatro"],1,"Verbo + número + substantivo + preposição + período do dia."],
      ["writing","Descreva em 20-30 palavras sua rotina diária mencionando horários específicos, usando “são” e “da manhã/tarde/noite”.",[],["são", "da manhã", "da tarde"]],
    ]
  },
  {
    id:"pt_a2_bank_open_account", level:"A2", title:"No banco: abrir uma conta", emoji:"🏦", xp:48,
    description:"Aprenda vocabulário bancário básico e a usar “poder” para possibilidade e permissão.",
    study: {
      vocab: [
        ["a conta bancária", "la cuenta bancaria"],
        ["o caixa eletrônico", "el cajero automático"],
        ["sacar dinheiro", "retirar dinero"],
        ["depositar dinheiro", "ingresar dinero"],
        ["o cartão de débito", "la tarjeta de débito"],
        ["o saldo", "el saldo"],
      ],
      grammar: [
        ["“Poder” + infinitivo para possibilidade e permissão", "“Poder” + infinitivo expressa capacidade, possibilidade ou permissão, dependendo do contexto.", "Posso abrir uma conta aqui? / Você pode sacar dinheiro em qualquer caixa eletrônico."],
      ]
    },
    ex:[
      ["mcq","Como se diz “sacar dinheiro” em inglês?",["the bank account", "the debit card", "to withdraw money", "to deposit money"],2,"“Sacar dinheiro” é “to withdraw money” em inglês."],
      ["mcq","Como se diz “o saldo” em inglês?",["the balance", "to withdraw money", "the debit card", "the bank account"],0,"“Saldo” é “balance” em inglês."],
      ["fill","Completa: “___ abrir uma conta aqui, por favor?”",["Pode", "Podem", "Podemos", "Posso"],3,"Usa-se “posso” em primeira pessoa para pedir permissão: “posso abrir”."],
      ["translate","Traduza: “You can withdraw money at any ATM.”",["Você deve sacar dinheiro em qualquer caixa eletrônico.", "Você pode sacar dinheiro em qualquer banco.", "Você pode depositar dinheiro em qualquer caixa eletrônico.", "Você pode sacar dinheiro em qualquer caixa eletrônico."],3,"“You can withdraw” = “você pode sacar”, com “poder” + infinitivo."],
      ["arrange","Ordene: [saldo / consultar / meu / quero]",["consultar Quero saldo meu", "Quero consultar meu saldo", "meu saldo consultar Quero", "saldo consultar Quero meu"],1,"Verbo + infinitivo + objeto possessivo + substantivo."],
      ["speaking","Descreva em 40-60 palavras como você abriria uma conta bancária, usando “poder” para pedir permissão ou expressar possibilidade.",[],["eu posso", "você pode", "conta"]],
    ]
  },
  {
    id:"pt_b1_train_plane_travel", level:"B1", title:"Viajar de trem e avião: atrasos e mudanças", emoji:"🚄", xp:62,
    description:"Aprenda vocabulário de viagens longas e a usar “embora” e “mesmo que”.",
    study: {
      vocab: [
        ["o atraso", "el retraso"],
        ["perder o voo/trem", "perder el vuelo/tren"],
        ["fazer escala", "hacer escala"],
        ["a plataforma", "el andén"],
        ["cancelar um voo", "cancelar un vuelo"],
        ["o assento de janela/corredor", "el asiento de ventanilla/pasillo"],
      ],
      grammar: [
        ["“Embora” + subjuntivo e “mesmo que” + subjuntivo", "“Embora” e “mesmo que” sempre exigem subjuntivo em português, mesmo quando se referem a um fato real ou já conhecido, ao contrário do espanhol.", "Embora o trem tenha chegado atrasado, eu peguei o voo. / Mesmo que o voo seja cancelado, temos outra opção."],
      ]
    },
    ex:[
      ["mcq","Como se diz “fazer escala” em inglês?",["the delay", "the platform", "the window/aisle seat", "to make a layover/stopover"],3,"“Fazer escala” é “to make a layover” ou “stopover” em inglês."],
      ["mcq","Como se diz “a plataforma” em inglês?",["to miss the flight/train", "the window/aisle seat", "to make a layover/stopover", "the platform"],3,"“Plataforma” é “platform” em inglês."],
      ["fill","Completa: “Embora o trem ___ atrasado, eu peguei o voo.”",["chegava", "chegará", "tenha chegado", "chegou"],2,"“Embora” sempre exige subjuntivo, mesmo para um fato real: “embora... tenha chegado”."],
      ["translate","Traduza: “Even if the flight is cancelled, we have another option.”",["Embora o voo seja cancelado, temos outra opção.", "Mesmo que o voo é cancelado, temos outra opção.", "Mesmo que o voo seja cancelado, temos outra opção.", "Mesmo que o trem seja cancelado, temos outra opção."],2,"“Even if” = “mesmo que”, sempre seguido de subjuntivo em português: “mesmo que seja cancelado”."],
      ["arrange","Ordene: [janela / prefiro / de / o assento]",["Prefiro o assento de janela", "de assento Prefiro janela o", "janela Prefiro o assento de", "Prefiro assento o janela de"],0,"Verbo + artigo + substantivo + preposição + complemento."],
      ["writing","Escreva 45-65 palavras sobre uma viagem de trem ou avião com imprevistos, usando “embora” e “mesmo que” pelo menos uma vez cada.",[],["embora", "mesmo que", "atraso"]],
    ]
  },
  {
    id:"pt_b2_sharing_economy_conscious_consumption", level:"B2", title:"A economia colaborativa e o consumo consciente", emoji:"♻️", xp:84,
    description:"Fale sobre economia colaborativa usando o futuro e o futuro do pretérito de probabilidade.",
    study: {
      vocab: [
        ["a economia colaborativa", "la economía colaborativa"],
        ["alugar em vez de comprar", "alquilar en vez de comprar"],
        ["o consumo consciente", "el consumo consciente"],
        ["compartilhar recursos", "compartir recursos"],
        ["a obsolescência programada", "la obsolescencia programada"],
        ["reduzir o desperdício", "reducir los residuos"],
      ],
      grammar: [
        ["Futuro e futuro do pretérito de probabilidade", "O futuro simples pode expressar uma conjectura sobre o presente (“serão dez horas”); o futuro do pretérito expressa uma conjectura sobre o passado (“seriam dez horas quando chegou”).", "Esse modelo terá uns cinco anos de obsolescência programada. / Com esse consumo, gastariam menos recursos do que pensavam."],
      ]
    },
    ex:[
      ["mcq","Como se diz “alugar em vez de comprar” em inglês?",["to share resources", "to rent instead of buying", "to reduce waste", "conscious consumption"],1,"“Alugar em vez de comprar” é “to rent instead of buying” em inglês."],
      ["mcq","Como se diz “a obsolescência programada” em inglês?",["planned obsolescence", "to reduce waste", "the sharing economy", "to share resources"],0,"“Obsolescência programada” é “planned obsolescence” em inglês."],
      ["fill","Completa: “Esse modelo ___ uns cinco anos de obsolescência programada.”",["tem", "teve", "terá", "teria"],2,"O futuro de probabilidade expressa uma conjectura sobre o presente: “terá uns cinco anos”."],
      ["translate","Traduza com futuro do pretérito de probabilidade: “With that consumption, they would spend fewer resources than they thought.”",["Com esse consumo, gastarão menos recursos do que pensavam.", "Com esse consumo, gastariam menos recursos do que pensavam.", "Com esse consumo, gastariam menos dinheiro do que pensavam.", "Com esse consumo, gastariam mais recursos do que pensavam."],1,"O futuro do pretérito de probabilidade “gastariam” expressa uma conjectura sobre uma situação hipotética."],
      ["arrange","Ordene: [desperdício / devemos / o / reduzir]",["Devemos reduzir o desperdício", "o reduzir desperdício Devemos", "desperdício o Devemos reduzir", "o Devemos desperdício reduzir"],0,"Verbo modal + infinitivo + artigo + substantivo."],
      ["writing","Escreva 55-75 palavras sobre a economia colaborativa e o consumo consciente, usando pelo menos um futuro e um futuro do pretérito de probabilidade.",[],["terá", "seriam", "consumo consciente"]],
    ]
  },
  {
    id:"pt_c1_nonverbal_intercultural_communication", level:"C1", title:"A linguagem não verbal e a comunicação intercultural", emoji:"🤝", xp:92,
    description:"Analise a comunicação não verbal usando “como se” + subjuntivo.",
    study: {
      vocab: [
        ["a linguagem corporal", "el lenguaje corporal"],
        ["o contato visual", "el contacto visual"],
        ["um gesto mal interpretado", "un gesto malinterpretado"],
        ["a proxêmica (distância pessoal)", "la proxémica (espacio personal)"],
        ["um sinal cultural", "una señal cultural"],
        ["o silêncio constrangedor", "un silencio incómodo"],
      ],
      grammar: [
        ["“Como se” + subjuntivo (pretérito imperfeito ou pretérito mais-que-perfeito)", "“Como se” sempre exige subjuntivo, mesmo quando a comparação se refere ao presente, porque descreve algo hipotético ou contrário à realidade.", "Ele agiu como se entendesse o gesto, embora não entendesse. / Ela reagiu como se tivesse sido ofendida."],
      ]
    },
    ex:[
      ["mcq","Como se diz “um gesto mal interpretado” em inglês?",["body language", "a cultural cue", "awkward silence", "a misinterpreted gesture"],3,"“Um gesto mal interpretado” é “a misinterpreted gesture” em inglês."],
      ["mcq","Como se diz “a proxêmica (distância pessoal)” em inglês?",["proxemics (personal space)", "a misinterpreted gesture", "body language", "eye contact"],0,"“Proxêmica” é “proxemics” em inglês."],
      ["fill","Completa: “Ele agiu como se ___ o gesto, embora não entendesse.”",["entendesse", "entende", "entenderá", "entendia"],0,"“Como se” exige subjuntivo imperfeito para comparações sobre o presente: “como se entendesse”."],
      ["translate","Traduza: “She reacted as if she had been offended.”",["Ela reagiu como se tivesse sido convidada.", "Ela reagiu como se foi ofendida.", "Ela reagiu como se fosse ofendida.", "Ela reagiu como se tivesse sido ofendida."],3,"“As if she had been offended” se traduz com pretérito mais-que-perfeito do subjuntivo: “como se tivesse sido ofendida”."],
      ["arrange","Ordene: [culturas / varia / entre / o contato visual]",["entre visual O culturas varia contato", "culturas visual contato entre O varia", "O contato visual varia entre culturas", "varia culturas visual O entre contato"],2,"Sujeito + verbo + preposição + complemento."],
      ["writing","Escreva 55-75 palavras sobre um mal-entendido intercultural relacionado à linguagem não verbal, usando pelo menos duas estruturas com “como se”.",[],["como se", "linguagem corporal", "gesto"]],
    ]
  },
  {
    id:"pt_c2_scientific_hedging_uncertainty", level:"C2", title:"A incerteza e a linguagem científica", emoji:"🔬", xp:100,
    description:"Analise a linguagem científica usando expressões de matização epistêmica (hedging).",
    study: {
      vocab: [
        ["a incerteza estatística", "la incertidumbre estadística"],
        ["uma margem de erro", "un margen de error"],
        ["correlação não implica causalidade", "correlación no implica causalidad"],
        ["os resultados preliminares", "resultados preliminares"],
        ["uma hipótese não confirmada", "una hipótesis no confirmada"],
        ["matizar uma afirmação", "matizar una afirmación"],
      ],
      grammar: [
        ["Expressões de matização epistêmica (hedging)", "Frases como “poderia se dizer que”, “não é absurdo pensar que” ou “os dados sugerem, embora não confirmem, que” matizam o grau de certeza de uma afirmação científica, evitando generalizações excessivas.", "Poderia se dizer que existe uma tendência, embora os dados sejam preliminares. / Os resultados sugerem, embora não confirmem, uma relação causal."],
      ]
    },
    ex:[
      ["mcq","Como se diz “uma margem de erro” em inglês?",["to hedge/qualify a claim", "a margin of error", "preliminary results", "an unconfirmed hypothesis"],1,"“Uma margem de erro” é “a margin of error” em inglês."],
      ["mcq","Como se diz “uma hipótese não confirmada” em inglês?",["an unconfirmed hypothesis", "correlation does not imply causation", "preliminary results", "statistical uncertainty"],0,"“Uma hipótese não confirmada” é “an unconfirmed hypothesis” em inglês."],
      ["fill","Completa: “___ se dizer que existe uma tendência, embora os dados sejam preliminares.”",["Vai", "Deve", "Poderia", "Pode"],2,"“Poderia se dizer que” é uma expressão fixa de matização epistêmica que suaviza uma afirmação."],
      ["translate","Traduza com precisão: “The results suggest, but do not confirm, a causal relationship.”",["Os resultados confirmam, embora não sugiram, uma relação causal.", "Os resultados sugerem, embora não confirmem, uma relação causal.", "Os resultados sugerem, e confirmam, uma relação causal.", "Os resultados sugerem, embora não confirmem, uma correlação estatística."],1,"“Suggest, but do not confirm” se traduz com “sugerem, embora não confirmem”, matizando a certeza."],
      ["arrange","Ordene: [implica / correlação / não / causalidade]",["causalidade implica não Correlação", "implica não causalidade Correlação", "Correlação não implica causalidade", "causalidade não Correlação implica"],2,"Sujeito + advérbio + verbo + objeto."],
      ["writing","Escreva 55-75 palavras analisando um estudo científico (real ou inventado) com resultados preliminares, usando pelo menos duas expressões de matização epistêmica.",[],["poderia se dizer que", "os dados sugerem", "incerteza"]],
    ]
  },
  {
    id:"pt_a1_weather_seasons", level:"A1", title:"O clima e as estações", emoji:"☀️", xp:38,
    description:"Aprenda a descrever o clima e as estações do ano em português com “está/faz”.",
    study: {
      vocab: [
        ["ensolarado", "soleado"],
        ["chuvoso", "lluvioso"],
        ["frio", "frío"],
        ["quente", "caluroso"],
        ["a primavera", "la primavera"],
        ["o inverno", "el invierno"],
      ],
      grammar: [
        ["“Está/Faz” para o clima", "Para o clima usa-se “está” + adjetivo (“está frio”) ou “faz” + sustantivo (“faz calor”). Para chuva: “está chovendo”.", "Hoje está ensolarado. / Na primavera, está chovendo com frequência."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cold” en portugués?",["frio","quente","ensolarado","chuvoso"],0,"“Cold” es “frio” en portugués."],
      ["mcq","¿Cómo se dice “rainy” en portugués?",["chuvoso","frio","ensolarado","a primavera"],0,"“Rainy” es “chuvoso” en portugués."],
      ["fill","Completa: “Hoje o tempo está muito ___, leve um guarda-chuva.”",["ensolarado", "frio", "quente", "chuvoso"],3,"“Chuvoso” describe un clima con lluvia: “está chuvoso”."],
      ["translate","Traduce: “It's very cold in winter.”",["Está muito frio no inverno.", "Está muito frio no verão.", "Faz muito frio no inverno todo dia.", "Está muito quente no inverno."],0,"“It's very cold” se traduce como “está muito frio”, con “estar” + adjetivo."],
      ["arrange","Ordena: [ensolarado / hoje / está]",["ensolarado está hoje", "está ensolarado hoje", "hoje está ensolarado", "está hoje ensolarado"],2,"Adverbio de tiempo + verbo + adjetivo."],
      ["writing","Descreva em português, em 20-30 palavras, o clima da sua cidade nas quatro estações, usando “está” e “faz”.",[],["está", "faz", "frio"]],
    ]
  },
  {
    id:"pt_a2_pet_care", level:"A2", title:"O cuidado com animais de estimação", emoji:"🐾", xp:48,
    description:"Aprende vocabulario de mascotas y a usar “ter que” para obligaciones en portugués.",
    study: {
      vocab: [
        ["alimentar o animal", "alimentar a la mascota"],
        ["passear com o cachorro", "pasear al perro"],
        ["o veterinário", "el veterinario"],
        ["vacinar", "vacunar"],
        ["a caixa de areia", "la caja de arena"],
        ["adotar um animal", "adoptar una mascota"],
      ],
      grammar: [
        ["“Ter que” para obligaciones", "“Ter que” + infinitivo expresa una obligación o necesidad cotidiana.", "Eu tenho que passear com o cachorro todas as manhãs. / Ela tem que alimentar o gato duas vezes ao dia."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the veterinarian” en portugués?",["passear com o cachorro","vacinar","alimentar o animal","o veterinário"],3,"“The veterinarian” es “o veterinário” en portugués."],
      ["mcq","¿Cómo se dice “to vaccinate” en portugués?",["alimentar o animal","vacinar","a caixa de areia","passear com o cachorro"],1,"“To vaccinate” es “vacinar” en portugués."],
      ["fill","Completa: “Eu ___ que passear com o cachorro todas as manhãs.”",["tinha", "temos", "tenho", "tem"],2,"“Ter que” con “eu” se conjuga como “tenho que”."],
      ["translate","Traduce: “I have to feed the pet twice a day.”",["Eu tive que alimentar o animal duas vezes ao dia.", "Eu tenho que alimentar o animal duas vezes ao dia.", "Eu tenho que alimentar o animal uma vez ao dia.", "Eu tenho que passear com o animal duas vezes ao dia."],1,"“I have to feed” se traduce con “eu tenho que alimentar”, obligación en presente."],
      ["arrange","Ordena: [tem / cachorro / ela / passear / com / que / o]",["o passear com ela que cachorro tem", "cachorro tem passear ela o com que", "tem o que cachorro ela com passear", "ela tem que passear com o cachorro"],3,"Sujeto + “tem que” + verbo + preposición + artículo + sustantivo."],
      ["writing","Descreva em português, em 20-30 palavras, sua rotina de cuidado com um animal de estimação usando “ter que”.",[],["tenho que", "tem que", "animal"]],
    ]
  },
  {
    id:"pt_b1_startups_entrepreneurship", level:"B1", title:"O empreendedorismo e as startups", emoji:"🚀", xp:62,
    description:"Aprende vocabulario de emprendimiento y a usar “ir” (futuro próximo) para planes en portugués.",
    study: {
      vocab: [
        ["a startup", "la startup"],
        ["lançar um produto", "lanzar un producto"],
        ["o investidor", "el inversor"],
        ["o plano de negócios", "el plan de negocio"],
        ["assumir um risco", "asumir un riesgo"],
        ["escalar um negócio", "escalar un negocio"],
      ],
      grammar: [
        ["“Ir” + infinitivo (futuro próximo) para planes", "“Ir” + infinitivo expresa un plan o intención ya decidida, el equivalente al “going to” en inglés.", "Vamos lançar o produto no mês que vem. / Ela vai procurar investidores."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “investor” en portugués?",["o investidor","escalar um negócio","assumir um risco","a startup"],0,"“Investor” es “o investidor” en portugués."],
      ["mcq","¿Cómo se dice “to take a risk” en portugués?",["assumir um risco","o plano de negócios","a startup","o investidor"],0,"“To take a risk” es “assumir um risco” en portugués."],
      ["fill","Completa: “___ lançar o produto no mês que vem.”",["Vão", "Vai", "Vou", "Vamos"],3,"“Ir” con “nós” se conjuga como “vamos”."],
      ["translate","Traduce: “We are going to launch the product next month.”",["Vamos lançar o produto no mês que vem.", "Vamos lançar o produto neste mês.", "Vamos lançar o negócio no mês que vem.", "Lançamos o produto no mês que vem."],0,"“We are going to launch” se traduce con “vamos lançar”, futuro próximo."],
      ["arrange","Ordena: [vai / investidores / ela / procurar]",["ela vai procurar investidores", "investidores ela vai procurar", "investidores vai ela procurar", "ela vai investidores procurar"],0,"Sujeto + “vai” + verbo + sustantivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre uma ideia de startup que você gostaria de lançar, usando “ir” para seus planos.",[],["vou", "startup", "investidores"]],
    ]
  },
  {
    id:"pt_b2_space_exploration", level:"B2", title:"A exploração espacial", emoji:"🚀", xp:84,
    description:"Habla de la exploración espacial usando el futuro do subjuntivo composto en portugués.",
    study: {
      vocab: [
        ["a missão espacial", "la misión espacial"],
        ["o astronauta", "el astronauta"],
        ["orbitar", "orbitar"],
        ["o lançamento do foguete", "el lanzamiento del cohete"],
        ["o espaço sideral", "el espacio exterior"],
        ["a estação espacial", "la estación espacial"],
      ],
      grammar: [
        ["Futuro do presente composto para logros futuros", "El futuro composto (“terá” + participio) describe una acción que se habrá completado antes de un momento futuro determinado.", "Até 2030, os astronautas terão pousado em Marte. / O foguete terá alcançado a órbita até lá."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “space station” en portugués?",["o astronauta","o lançamento do foguete","o espaço sideral","a estação espacial"],3,"“Space station” es “a estação espacial” en portugués."],
      ["mcq","¿Cómo se dice “to orbit” en portugués?",["o astronauta","a missão espacial","orbitar","o lançamento do foguete"],2,"“To orbit” es “orbitar” en portugués."],
      ["fill","Completa: “Até 2030, os astronautas ___ pousado em Marte.”",["têm", "terão", "tinham", "teriam"],1,"El futuro composto usa “terão” + participio: “terão pousado”."],
      ["translate","Traduce: “By 2030, astronauts will have landed on Mars.”",["Até 2030, os astronautas teriam pousado em Marte.", "Até 2030, os astronautas têm pousado em Marte.", "Até 2030, os astronautas terão pousado em Marte.", "Até 2030, os astronautas vão pousar em Marte."],2,"“Will have landed” se traduce con futuro composto: “terão pousado”."],
      ["arrange","Ordena: [em / foguete / órbita / breve / atingirá / o / a]",["o foguete a breve órbita em atingirá", "o foguete atingirá a órbita em breve", "foguete atingirá a órbita breve o em", "a foguete órbita o breve atingirá em"],1,"Artículo + sustantivo + verbo + artículo + sustantivo + preposición + adverbio."],
      ["writing","Escreva em português, em 55-75 palavras, uma previsão sobre o futuro da exploração espacial usando o futuro composto (“terão...”) pelo menos duas vezes.",[],["terão", "missão espacial", "astronauta"]],
    ]
  },
  {
    id:"pt_c1_ai_ethics", level:"C1", title:"A ética e a regulamentação da inteligência artificial", emoji:"🤖", xp:92,
    description:"Analiza la ética de la IA usando la voz pasiva en registro formal en portugués.",
    study: {
      vocab: [
        ["a inteligência artificial", "la inteligencia artificial"],
        ["o viés algorítmico", "el sesgo algorítmico"],
        ["a responsabilização", "la rendición de cuentas"],
        ["a privacidade de dados", "la privacidad de datos"],
        ["regulamentar", "regular"],
        ["as consequências não intencionais", "consecuencias no deseadas"],
      ],
      grammar: [
        ["A voz passiva em registro formal/acadêmico", "La voz pasiva (“ser” + participio) se usa en portugués formal para enfatizar la acción o el objeto en lugar de quién la realiza.", "Esses sistemas deveriam ser regulamentados para evitar vieses. / O viés algorítmico foi documentado em vários estudos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “accountability” en portugués?",["a responsabilização","regulamentar","as consequências não intencionais","a inteligência artificial"],0,"“Accountability” es “responsabilização” en portugués."],
      ["mcq","¿Cómo se dice “algorithmic bias” en portugués?",["as consequências não intencionais","a responsabilização","o viés algorítmico","a privacidade de dados"],2,"“Algorithmic bias” es “viés algorítmico” en portugués."],
      ["fill","Completa: “Esses sistemas deveriam ser ___ para evitar vieses.”",["regulamentados", "regulamentando", "regulamenta", "regulamentar"],0,"La voz pasiva con modal usa “ser” + participio: “deveriam ser regulamentados”."],
      ["translate","Traduce con voz pasiva: “These systems should be regulated to prevent bias.”",["Esses sistemas deveriam ser regulamentados para evitar um viés.", "Esses sistemas deveriam regulamentar para evitar vieses.", "Esses sistemas deveriam ser regulamentados para evitar vieses.", "Esses sistemas devem ser regulamentados para evitar vieses."],2,"“Should be regulated” se traduce con voz pasiva: “deveriam ser regulamentados”."],
      ["arrange","Ordena: [regulamentados / algoritmos / ser / deveriam / os]",["ser deveriam os algoritmos regulamentados", "os algoritmos regulamentados deveriam ser", "deveriam algoritmos ser regulamentados os", "os algoritmos deveriam ser regulamentados"],3,"Artículo + sustantivo + futuro do pretérito + “ser” + participio."],
      ["writing","Escreva em português, em 55-75 palavras, um argumento ético sobre a inteligência artificial usando pelo menos uma construção em voz passiva.",[],["deveriam ser regulamentados", "viés algorítmico", "responsabilização"]],
    ]
  },
  {
    id:"pt_c2_philosophy_of_mind", level:"C2", title:"A filosofia da mente e a consciência", emoji:"🧠", xp:100,
    description:"Reflexiona sobre la conciencia usando frases clivadas (estructuras enfáticas) en portugués.",
    study: {
      vocab: [
        ["a consciência", "la conciencia"],
        ["a experiência subjetiva", "la experiencia subjetiva"],
        ["o experimento mental", "un experimento mental"],
        ["o livre-arbítrio", "el libre albedrío"],
        ["a autoconsciência", "la autoconciencia"],
        ["o problema mente-corpo", "el problema mente-cuerpo"],
      ],
      grammar: [
        ["Frases clivadas (“o que... é...”) para énfasis", "Las frases clivadas (“o que... é...”) reorganizan la oración para poner énfasis en un elemento concreto, muy usadas en discurso filosófico y académico.", "O que realmente define a consciência não é apenas o comportamento, mas a experiência subjetiva."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “thought experiment” en portugués?",["o experimento mental","a experiência subjetiva","o livre-arbítrio","o problema mente-corpo"],0,"“Thought experiment” es “o experimento mental” en portugués."],
      ["mcq","¿Cómo se dice “free will” en portugués?",["o livre-arbítrio","o problema mente-corpo","a consciência","a experiência subjetiva"],0,"“Free will” es “o livre-arbítrio” en portugués."],
      ["fill","Completa: “O que realmente define a consciência não ___ apenas o comportamento.”",["é", "são", "seja", "era"],0,"En frases clivadas con sujeto singular se usa “é”: “o que define... não é”."],
      ["translate","Traduce con estructura enfática: “What truly defines consciousness is not behavior alone, but subjective experience.”",["O que realmente define a consciência é apenas o comportamento, não a experiência subjetiva.", "O que realmente define a consciência não é apenas o comportamento, mas a experiência subjetiva.", "O que define realmente a consciência não é apenas o comportamento, mas a experiência subjetiva.", "O que realmente definiu a consciência não é apenas o comportamento, mas a experiência subjetiva."],1,"La frase clivada mantiene “o que + verbo + não é apenas... mas...”, con “realmente” antes del verbo."],
      ["arrange","Ordena: [arbítrio / debatem / ainda / filósofos / o / livre / os]",["ainda o filósofos arbítrio livre os debatem", "os filósofos ainda debatem o livre arbítrio", "ainda debatem arbítrio os filósofos o livre", "debatem livre ainda filósofos o os arbítrio"],1,"Artículo + sustantivo + adverbio + verbo + artículo + sustantivo compuesto."],
      ["writing","Escreva em português, em 55-75 palavras, sua própria posição sobre o livre-arbítrio ou a consciência, usando pelo menos uma frase clivada (“o que... é...”).",[],["o que realmente define", "consciência", "livre-arbítrio"]],
    ]
  },
  {
    id:"pt_a1_garden_plants", level:"A1", title:"O jardim e as plantas", emoji:"🌱", xp:38,
    description:"Aprenda vocabulário de jardinagem e a dar instruções simples com o imperativo em português.",
    study: {
      vocab: [
        ["regar as plantas", "regar las plantas"],
        ["a semente", "la semilla"],
        ["crescer", "crecer"],
        ["a flor", "la flor"],
        ["a terra", "la tierra"],
        ["a luz do sol", "la luz solar"],
      ],
      grammar: [
        ["O imperativo para instruções", "El imperativo (você) se usa para dar órdenes o instrucciones. La forma negativa usa “não” + subjuntivo.", "Regue as plantas todos os dias. / Não esqueça de fechar o portão."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the seed” en portugués?",["a semente","a luz do sol","regar as plantas","crescer"],0,"“The seed” es “a semente” en portugués."],
      ["mcq","¿Cómo se dice “to grow” en portugués?",["regar as plantas","a flor","a semente","crescer"],3,"“To grow” es “crescer” en portugués."],
      ["fill","Completa: “___ as plantas todos os dias, ou elas vão morrer.”",["Rega", "Regando", "Regue", "Regar"],2,"El imperativo (você) de “regar” es “regue”."],
      ["translate","Traduce: “Water the plants every day.”",["Você rega as plantas todos os dias.", "Regue as plantas todos os dias.", "Regando as plantas todos os dias.", "Regue as plantas todas as semanas."],1,"El imperativo comienza directamente con el verbo conjugado: “Regue as plantas...”."],
      ["arrange","Ordena: [esqueça / portão / o / não / fechar / de]",["portão não o fechar de esqueça", "não esqueça de fechar o portão", "portão o esqueça fechar não de", "portão esqueça o fechar não de"],1,"“Não” + subjuntivo + “de” + infinitivo + artículo + sustantivo."],
      ["writing","Descreva em português, em 20-30 palavras, instruções para cuidar de um jardim usando o imperativo.",[],["regue", "não esqueça", "cresce"]],
    ]
  },
  {
    id:"pt_a2_library_books", level:"A2", title:"A biblioteca e os livros", emoji:"📚", xp:48,
    description:"Aprenda vocabulário de biblioteca e a narrar no pretérito perfeito em português.",
    study: {
      vocab: [
        ["pegar um livro emprestado", "pedir prestado un libro"],
        ["a carteirinha da biblioteca", "el carné de la biblioteca"],
        ["a data de devolução", "la fecha de vencimiento"],
        ["a estante", "la estantería"],
        ["o romance", "la novela"],
        ["devolver um livro", "devolver un libro"],
      ],
      grammar: [
        ["Pretérito perfeito para narrar", "El pretérito perfeito describe acciones completas en el pasado, con un inicio y fin claros.", "Eu peguei um romance emprestado na semana passada. / Ela devolveu o livro no prazo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the library card” en portugués?",["a estante","pegar um livro emprestado","a carteirinha da biblioteca","a data de devolução"],2,"“The library card” es “a carteirinha da biblioteca” en portugués."],
      ["mcq","¿Cómo se dice “the due date” en portugués?",["a data de devolução","pegar um livro emprestado","a estante","a carteirinha da biblioteca"],0,"“The due date” es “a data de devolução” en portugués."],
      ["fill","Completa: “Eu ___ um romance emprestado na semana passada.”",["peguei", "pegando", "pego", "pega"],0,"El pretérito perfeito de “pegar” en primera persona es “peguei”."],
      ["translate","Traduce: “She returned the book on time.”",["Ela devolve o livro no prazo.", "Ela devolveu o livro no prazo.", "Ela devolveu o livro atrasado.", "Ela devolveu o romance no prazo."],1,"“Returned” se traduce con pretérito perfeito: “devolveu”."],
      ["arrange","Ordena: [estante / na / está / livro / o]",["está estante livro o na", "está estante o na livro", "o livro está na estante", "está o na livro estante"],2,"Artículo + sustantivo + verbo + preposición + sustantivo."],
      ["speaking","Descreva em português, em 40-60 palavras, a última vez que você pegou um livro emprestado na biblioteca, usando o pretérito perfeito.",[],["peguei emprestado", "devolvi", "biblioteca"]],
    ]
  },
  {
    id:"pt_b1_parenting_childcare", level:"B1", title:"A parentalidade e o cuidado com bebês", emoji:"👶", xp:62,
    description:"Aprenda vocabulário sobre parentalidade e a usar o pretérito imperfeito para hábitos passados em português.",
    study: {
      vocab: [
        ["amamentar", "amamantar"],
        ["o berço", "la cuna"],
        ["fazer o bebê arrotar", "hacer eructar al bebé"],
        ["a rotina para dormir", "la rutina para dormir"],
        ["cuidar de crianças", "cuidar niños"],
        ["o pediatra", "el pediatra"],
      ],
      grammar: [
        ["Pretérito imperfeito para hábitos passados", "El pretérito imperfeito describe hábitos o estados repetidos en el pasado, sin un final marcado.", "O bebê acordava a cada duas horas. / Nós visitávamos o pediatra todo mês."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the crib” en portugués?",["amamentar","fazer o bebê arrotar","o berço","cuidar de crianças"],2,"“The crib” es “o berço” en portugués."],
      ["mcq","¿Cómo se dice “the pediatrician” en portugués?",["amamentar","fazer o bebê arrotar","o pediatra","o berço"],2,"“The pediatrician” es “o pediatra” en portugués."],
      ["fill","Completa: “O bebê ___ a cada duas horas.”",["acordando", "acorda", "acordou", "acordava"],3,"El pretérito imperfeito describe un hábito repetido en el pasado: “acordava”."],
      ["translate","Traduce: “We used to visit the pediatrician every month.”",["Nós visitávamos o pediatra toda semana.", "Nós visitamos o pediatra todo mês.", "Nós visitávamos o pediatra todo mês.", "Nós visitávamos o dentista todo mês."],2,"“Used to visit” se traduce con pretérito imperfeito: “visitávamos”."],
      ["arrange","Ordena: [berço / dormia / no / ela]",["ela dormia no berço", "dormia berço no ela", "ela no dormia berço", "dormia no ela berço"],0,"Sujeto + verbo + preposición + sustantivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre a rotina de cuidado de um bebê que você conhece, usando o pretérito imperfeito para hábitos passados.",[],["acordava", "berço", "pediatra"]],
    ]
  },
  {
    id:"pt_b2_archaeology_discoveries", level:"B2", title:"A arqueologia e as descobertas históricas", emoji:"🏺", xp:84,
    description:"Habla de descubrimientos arqueológicos usando el futuro composto de probabilidad en portugués.",
    study: {
      vocab: [
        ["o sítio arqueológico", "el yacimiento arqueológico"],
        ["escavar", "excavar"],
        ["a civilização antiga", "una civilización antigua"],
        ["o artefato", "un artefacto"],
        ["datar (um achado)", "datar (un hallazgo)"],
        ["as ruínas", "las ruinas"],
      ],
      grammar: [
        ["Futuro composto de probabilidade sobre o passado", "El futuro composto (“terá” + participio) también expresa una deducción o suposición sobre el pasado, equivalente a “must/might have” en inglés.", "Este artefato terá pertencido a um rei. / O sítio pode ter sido um templo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “ancient civilization” en portugués?",["a civilização antiga","escavar","datar (um achado)","o sítio arqueológico"],0,"“Ancient civilization” es “a civilização antiga” en portugués."],
      ["mcq","¿Cómo se dice “to excavate” en portugués?",["o sítio arqueológico","escavar","datar (um achado)","o artefato"],1,"“To excavate” es “escavar” en portugués."],
      ["fill","Completa: “Este artefato ___ pertencido a um rei.”",["tinha", "tem", "teria", "terá"],3,"El futuro composto de probabilidad usa “terá” + participio: “terá pertencido”."],
      ["translate","Traduce: “The site might have been a temple.”",["O sítio pode ter sido um palácio.", "O sítio pode ser um templo.", "O sítio terá sido um templo.", "O sítio pode ter sido um templo."],3,"“Might have been” se traduce con posibilidad menos segura: “pode ter sido”."],
      ["arrange","Ordena: [construído / antiga / isto / civilização / terá / uma]",["civilização construído terá isto antiga uma", "isto terá civilização antiga construído uma", "uma civilização antiga terá construído isto", "isto civilização uma terá construído antiga"],2,"Artículo + sustantivo + adjetivo + futuro composto + pronombre."],
      ["writing","Escreva em português, em 55-75 palavras, uma hipótese sobre uma descoberta arqueológica imaginária, usando o futuro composto ou “pode ter” pelo menos duas vezes.",[],["terá sido", "pode ter sido", "artefato"]],
    ]
  },
  {
    id:"pt_c1_neuroscience_brain", level:"C1", title:"As neurociências e o cérebro", emoji:"🧬", xp:92,
    description:"Analiza la neurociencia usando estructuras enfáticas en registro académico en portugués.",
    study: {
      vocab: [
        ["a via neural", "la vía neuronal"],
        ["a sinapse", "la sinapsis"],
        ["a neuroplasticidade", "la neuroplasticidad"],
        ["a função cognitiva", "la función cognitiva"],
        ["o neurotransmissor", "el neurotransmisor"],
        ["a ressonância cerebral", "el escáner cerebral"],
      ],
      grammar: [
        ["Estruturas enfáticas com advérbios iniciais", "En portugués formal/académico, colocar un adverbio restrictivo al inicio (“Raramente”, “Só assim”) da énfasis a la oración, un rasgo típico del registro académico.", "Raramente os pesquisadores encontraram evidências tão claras de neuroplasticidade. / Só assim se explica a função cognitiva."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “neuroplasticity” en portugués?",["a sinapse","a via neural","a neuroplasticidade","a função cognitiva"],2,"“Neuroplasticity” es “a neuroplasticidade” en portugués."],
      ["mcq","¿Cómo se dice “synapse” en portugués?",["a via neural","a neuroplasticidade","a função cognitiva","a sinapse"],3,"“Synapse” es “a sinapse” en portugués."],
      ["fill","Completa: “Raramente os pesquisadores ___ evidências tão claras.”",["encontrarão", "encontram", "encontrando", "encontraram"],3,"Tras “raramente” se suele usar pretérito perfeito: “raramente... encontraram”."],
      ["translate","Traduce con estructura enfática: “Rarely have researchers found such clear evidence.”",["Raramente os pesquisadores encontraram evidências tão claras.", "Raramente os pesquisadores encontraram evidências pouco claras.", "Raramente os pesquisadores encontram evidências tão claras.", "Os pesquisadores encontraram raramente evidências tão claras."],0,"La estructura enfática coloca el adverbio primero, seguido del sujeto y el verbo: “raramente os pesquisadores encontraram”."],
      ["arrange","Ordena: [se / adapta / bem / o / cérebro]",["o bem adapta cérebro se", "se bem cérebro adapta o", "se bem adapta cérebro o", "o cérebro se adapta bem"],3,"Artículo + sustantivo + pronombre reflexivo + verbo + adverbio."],
      ["writing","Escreva em português, em 55-75 palavras, um parágrafo acadêmico sobre o cérebro usando pelo menos uma estrutura enfática com “raramente” ou “só assim”.",[],["raramente", "neuroplasticidade", "função cognitiva"]],
    ]
  },
  {
    id:"pt_c2_behavioral_economics", level:"C2", title:"A economia comportamental e os vieses cognitivos", emoji:"🧩", xp:100,
    description:"Analiza la economía conductual usando nominalización en registro académico en portugués.",
    study: {
      vocab: [
        ["o viés cognitivo", "el sesgo cognitivo"],
        ["a aversão à perda", "la aversión a la pérdida"],
        ["o efeito de ancoragem", "el efecto anclaje"],
        ["a tomada de decisão", "la toma de decisiones"],
        ["o comportamento irracional", "el comportamiento irracional"],
        ["o empurrãozinho/incentivo sutil", "el empujón (nudge) conductual"],
      ],
      grammar: [
        ["Nominalização no registro acadêmico", "La nominalización convierte verbos en sustantivos abstractos (“decidir” → “a tomada de decisão”), un rasgo típico del portugués académico formal.", "A persistência do viés cognitivo afeta a tomada de decisão. / Os pesquisadores estudam a evitação da perda."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “loss aversion” en portugués?",["a tomada de decisão","o comportamento irracional","a aversão à perda","o viés cognitivo"],2,"“Loss aversion” es “a aversão à perda” en portugués."],
      ["mcq","¿Cómo se dice “anchoring effect” en portugués?",["a tomada de decisão","a aversão à perda","o efeito de ancoragem","o empurrãozinho/incentivo sutil"],2,"“Anchoring effect” es “o efeito de ancoragem” en portugués."],
      ["fill","Completa: “A persistência do viés cognitivo afeta a ___.”",["tomada de decisão", "decidir", "decidindo", "decisão"],0,"La forma nominalizada de “decidir” en este registro académico es “a tomada de decisão”."],
      ["translate","Traduce en registro académico: “Loss aversion affects decision-making.”",["A aversão à perda afetam a tomada de decisão.", "A aversão à perda afeta a tomada de decisão.", "A aversão à perda afeta decidir.", "A perda de aversão afeta a tomada de decisão."],1,"“Decision-making” se traduce con la forma nominalizada “a tomada de decisão”, no con el verbo “decidir”."],
      ["arrange","Ordena: [cognitivo / estudam / pesquisadores / viés / o / os]",["cognitivo o estudam viés pesquisadores os", "os pesquisadores estudam o viés cognitivo", "cognitivo os o pesquisadores viés estudam", "cognitivo viés o estudam pesquisadores os"],1,"Artículo + sustantivo + verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, um parágrafo acadêmico sobre um viés cognitivo, usando pelo menos dois substantivos nominalizados (como “a tomada de decisão” ou “a evitação”).",[],["a tomada de decisão", "viés cognitivo", "aversão à perda"]],
    ]
  },
  {
    id:"pt_a1_photography_cameras", level:"A1", title:"A fotografia e as câmeras", emoji:"📷", xp:38,
    description:"Aprenda vocabulário de fotografia e a usar “poder” para habilidade em português.",
    study: {
      vocab: [
        ["a câmera", "la cámara"],
        ["a foto", "la foto"],
        ["a lente", "el objetivo"],
        ["tirar uma foto", "tomar una foto"],
        ["o zoom", "el zoom"],
        ["o cartão de memória", "la tarjeta de memoria"],
      ],
      grammar: [
        ["“Poder” para habilidade", "“Poder” + infinitivo expresa habilidad o capacidad; en negativo se usa “não pode”.", "Eu posso tirar boas fotos com esta câmera. / Esta câmera não pode dar zoom muito longe."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “lens” en portugués?",["a câmera","a lente","o cartão de memória","a foto"],1,"“Lens” es “a lente” en portugués."],
      ["mcq","¿Cómo se dice “memory card” en portugués?",["a lente","a câmera","o cartão de memória","o zoom"],2,"“Memory card” es “o cartão de memória” en portugués."],
      ["fill","Completa: “Esta câmera não ___ dar zoom muito longe.”",["podes", "pode", "podem", "posso"],1,"“Poder” conjugado en tercera persona singular es “pode”."],
      ["translate","Traduce: “I can take good photos with this camera.”",["Eu posso tirar boas fotos com esta câmera.", "Eu posso tirar boas fotos com aquela câmera.", "Eu não posso tirar boas fotos com esta câmera.", "Eu posso tirei boas fotos com esta câmera."],0,"“I can take” se traduce con “posso tirar”, “poder” + infinitivo."],
      ["arrange","Ordena: [longe / zoom / não / pode / dar / esta / câmera / muito]",["esta câmera não pode dar zoom muito longe", "dar câmera longe zoom muito não esta pode", "pode dar muito câmera zoom não longe esta", "zoom pode câmera muito dar não esta longe"],0,"Pronombre + sustantivo + negación + verbo + verbo + sustantivo + adverbio + adverbio."],
      ["writing","Descreva em português, em 20-30 palavras, o que você pode e não pode fazer com sua câmera ou celular, usando “poder”.",[],["posso", "não pode", "câmera"]],
    ]
  },
  {
    id:"pt_a2_camping_outdoors", level:"A2", title:"Acampar e as atividades ao ar livre", emoji:"🏕️", xp:48,
    description:"Aprenda vocabulário de camping e a usar “algum/nenhum” para quantidades em português.",
    study: {
      vocab: [
        ["a barraca", "la tienda de campaña"],
        ["o saco de dormir", "el saco de dormir"],
        ["a fogueira", "la hoguera"],
        ["a trilha", "la ruta de senderismo"],
        ["a mochila", "la mochila"],
        ["montar uma barraca", "montar una tienda de campaña"],
      ],
      grammar: [
        ["“Algum/nenhum” para quantidades", "“Algum” se usa en afirmativas para cantidades indefinidas; “nenhum” se usa en negativas.", "Temos alguma lenha para a fogueira. / Não temos nenhuma água sobrando."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sleeping bag” en portugués?",["o saco de dormir","montar uma barraca","a mochila","a trilha"],0,"“Sleeping bag” es “o saco de dormir” en portugués."],
      ["mcq","¿Cómo se dice “hiking trail” en portugués?",["a trilha","a fogueira","montar uma barraca","o saco de dormir"],0,"“Hiking trail” es “a trilha” en portugués."],
      ["fill","Completa: “Não temos ___ água sobrando.”",["nenhuma", "alguma", "muita", "pouca"],0,"En oraciones negativas se usa “nenhuma”: “não temos nenhuma água”."],
      ["translate","Traduce: “We have some firewood for the campfire.”",["Temos nenhuma lenha para a fogueira.", "Temos alguma lenha para a fogueira.", "Temos alguma lenha para a barraca.", "Tenho alguma lenha para a fogueira."],1,"“Some firewood” en afirmativa se traduce con “alguma lenha”."],
      ["arrange","Ordena: [longa / trilha / esta / é]",["esta trilha é longa", "esta longa trilha é", "trilha esta é longa", "longa é esta trilha"],0,"Pronombre + sustantivo + verbo + adjetivo."],
      ["speaking","Descreva em português, em 40-60 palavras, um plano de acampamento usando “algum/nenhum” para o que você precisa levar.",[],["algum", "nenhum", "barraca"]],
    ]
  },
  {
    id:"pt_b1_beekeeping_bees", level:"B1", title:"A apicultura e as abelhas", emoji:"🐝", xp:62,
    description:"Aprenda vocabulário de apicultura e a usar orações relativas em português.",
    study: {
      vocab: [
        ["a colmeia", "la colmena"],
        ["o mel", "la miel"],
        ["picar", "picar"],
        ["polinizar", "polinizar"],
        ["o apicultor", "el apicultor"],
        ["a abelha rainha", "la abeja reina"],
      ],
      grammar: [
        ["Orações relativas (que/quem)", "“Que” se usa para personas y cosas; “quem” se usa específicamente para personas, sobre todo tras preposición.", "O apicultor que cuida desta colmeia é muito experiente. / As abelhas, que polinizam as flores, são essenciais."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “beehive” en portugués?",["picar","a colmeia","a abelha rainha","polinizar"],1,"“Beehive” es “a colmeia” en portugués."],
      ["mcq","¿Cómo se dice “to pollinate” en portugués?",["a colmeia","polinizar","o mel","picar"],1,"“To pollinate” es “polinizar” en portugués."],
      ["fill","Completa: “O apicultor ___ cuida desta colmeia é muito experiente.”",["que", "cujo", "quem", "onde"],0,"“Que” se usa como relativo general: “o apicultor que cuida”."],
      ["translate","Traduce: “Bees, which pollinate flowers, are essential to farming.”",["As abelhas, que polinizam as flores, são essenciais para a agricultura.", "As abelhas, que polinizam as flores, é essencial para a agricultura.", "As abelhas, quem polinizam as flores, são essenciais para a agricultura.", "As abelhas, que poliniza as flores, são essenciais para a agricultura."],0,"“Which” se traduce con “que” en esta cláusula explicativa: “as abelhas, que polinizam...”."],
      ["arrange","Ordena: [colmeia / vivem / abelhas / que / na / as]",["as abelhas que vivem na colmeia", "vivem abelhas na colmeia que as", "na as colmeia abelhas que vivem", "colmeia que as na abelhas vivem"],0,"Artículo + sustantivo + “que” + verbo + preposición + artículo + sustantivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre a importância das abelhas usando pelo menos uma oração relativa (“que/quem”).",[],["que", "quem", "colmeia"]],
    ]
  },
  {
    id:"pt_b2_cryptocurrency_digital_finance", level:"B2", title:"As criptomoedas e as finanças digitais", emoji:"₿", xp:84,
    description:"Habla de criptomonedas usando el futuro do pretérito composto en portugués.",
    study: {
      vocab: [
        ["a criptomoeda", "la criptomoneda"],
        ["o blockchain", "la cadena de bloques"],
        ["a carteira digital", "la cartera digital"],
        ["investir", "invertir"],
        ["a volatilidade", "la volatilidad"],
        ["descentralizado", "descentralizado"],
      ],
      grammar: [
        ["Pretérito mais-que-perfeito do subjuntivo + futuro do pretérito composto", "Para hipótesis irreales sobre el pasado se usa “se” + pretérito mais-que-perfeito do subjuntivo, y “teria” + participio en la consecuencia.", "Se eu tivesse investido antes, teria ganhado mais dinheiro. / Se o mercado não tivesse quebrado, os preços teriam permanecido altos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “blockchain” en portugués?",["a volatilidade","a carteira digital","o blockchain","a criptomoeda"],2,"“Blockchain” es “o blockchain” en portugués."],
      ["mcq","¿Cómo se dice “volatility” en portugués?",["a criptomoeda","a carteira digital","descentralizado","a volatilidade"],3,"“Volatility” es “a volatilidade” en portugués."],
      ["fill","Completa: “Se eu ___ investido antes, teria ganhado mais dinheiro.”",["tinha", "tenho", "tivesse", "teria"],2,"Tras “se” hipotético sobre el pasado se usa pretérito mais-que-perfeito do subjuntivo: “se eu tivesse investido”."],
      ["translate","Traduce: “If the market hadn't crashed, prices would have stayed high.”",["Se o mercado não quebrou, os preços teriam permanecido altos.", "Se o mercado não tivesse quebrado, os preços permaneceriam altos.", "Se o mercado não tivesse quebrado, os preços teriam permanecidos altos.", "Se o mercado não tivesse quebrado, os preços teriam permanecido altos."],3,"“Hadn't crashed... would have stayed” se traduce con pretérito mais-que-perfeito do subjuntivo + futuro do pretérito composto."],
      ["arrange","Ordena: [arriscada / é / criptomoeda / muito / a]",["é arriscada muito a criptomoeda", "a criptomoeda é muito arriscada", "criptomoeda é arriscada muito a", "a criptomoeda muito arriscada é"],1,"Artículo + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre uma decisão financeira passada usando “se eu tivesse... teria...” pelo menos duas vezes.",[],["se eu tivesse", "teria", "criptomoeda"]],
    ]
  },
  {
    id:"pt_c1_bioethics_gene_editing", level:"C1", title:"A bioética e a edição genética", emoji:"🧬", xp:92,
    description:"Analiza la bioética usando “tão...que/tal...que” para énfasis en portugués.",
    study: {
      vocab: [
        ["a edição genética", "la edición genética"],
        ["o consentimento informado", "el consentimiento informado"],
        ["o ensaio clínico", "el ensayo clínico"],
        ["a modificação genética", "la modificación genética"],
        ["o dilema ético", "el dilema ético"],
        ["manipular o DNA", "manipular el ADN"],
      ],
      grammar: [
        ["“Tão...que/tal...que” para énfasis", "“Tão” + adjetivo/adverbio + “que” y “tal” + sustantivo + “que” expresan una consecuencia enfática.", "A edição genética é tão poderosa que levanta sérias questões éticas. / É tal o dilema que os especialistas ainda discordam."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “informed consent” en portugués?",["o dilema ético","manipular o DNA","o consentimento informado","a edição genética"],2,"“Informed consent” es “o consentimento informado” en portugués."],
      ["mcq","¿Cómo se dice “clinical trial” en portugués?",["a modificação genética","manipular o DNA","a edição genética","o ensaio clínico"],3,"“Clinical trial” es “o ensaio clínico” en portugués."],
      ["fill","Completa: “A edição genética é ___ poderosa que levanta sérias questões éticas.”",["tal", "muito", "tão", "tanto"],2,"“Tão” + adjetivo + “que” expresa consecuencia enfática: “tão poderosa que”."],
      ["translate","Traduce con estructura enfática: “It is such a complex issue that experts still disagree.”",["É uma questão tão complexa que os especialistas ainda discordam.", "É uma questão tal complexa que os especialistas ainda discordam.", "É tão uma questão complexa que os especialistas ainda discordam.", "É uma questão tão complexa que os especialistas ainda concordam."],0,"“Such a complex issue that” se traduce con “tão complexa que” en portugués."],
      ["arrange","Ordena: [ético / real / um / isto / dilema / é]",["ético um dilema real é isto", "isto é um dilema ético real", "isto dilema um é ético real", "ético real é dilema um isto"],1,"Pronombre + verbo + artículo + sustantivo + adjetivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, um argumento sobre a edição genética usando “tão...que” ou “tal...que” pelo menos duas vezes.",[],["tão...que", "tal...que", "edição genética"]],
    ]
  },
  {
    id:"pt_c2_geopolitics_international_relations", level:"C2", title:"A geopolítica e as relações internacionais", emoji:"🌐", xp:100,
    description:"Analiza la geopolítica usando el gerundio y el participio en registro académico en portugués.",
    study: {
      vocab: [
        ["as relações diplomáticas", "las relaciones diplomáticas"],
        ["a soberania", "la soberanía"],
        ["as sanções", "las sanciones"],
        ["o acordo bilateral", "el acuerdo bilateral"],
        ["a tensão geopolítica", "la tensión geopolítica"],
        ["negociar um tratado", "negociar un tratado"],
      ],
      grammar: [
        ["Gerúndio e particípio para um registro acadêmico conciso", "El gerundio (“Analisando...”) y el participio pasado en construcciones absolutas (“Diante das crescentes sanções...”) permiten un estilo más conciso y formal.", "Analisando os dados, os pesquisadores concluíram que as tensões aumentariam. / Diante das crescentes sanções, o governo mudou sua política."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sovereignty” en portugués?",["negociar um tratado","as sanções","as relações diplomáticas","a soberania"],3,"“Sovereignty” es “a soberania” en portugués."],
      ["mcq","¿Cómo se dice “geopolitical tension” en portugués?",["a tensão geopolítica","a soberania","as relações diplomáticas","negociar um tratado"],0,"“Geopolitical tension” es “a tensão geopolítica” en portugués."],
      ["fill","Completa: “___ os dados, os pesquisadores concluíram que as tensões aumentariam.”",["Analisar", "Analisam", "Analisado", "Analisando"],3,"El gerundio en posición inicial resume una cláusula subordinada: “analisando os dados”."],
      ["translate","Traduce con construcción concisa: “Faced with mounting sanctions, the government changed its policy.”",["Diante das crescentes sanções, o governo muda sua política.", "Diante de as crescentes sanções, o governo mudou sua política.", "Diante das crescentes sanções, o governo mudou sua política.", "Perante das crescentes sanções, o governo mudou sua política."],2,"“Faced with mounting sanctions” se traduce de forma concisa con “diante das crescentes sanções”."],
      ["arrange","Ordena: [negociarão / nações / tratado / as / o]",["nações negociarão tratado as o", "as nações negociarão o tratado", "tratado as nações o negociarão", "o negociarão tratado as nações"],1,"Artículo + sustantivo + verbo + artículo + sustantivo."],
      ["writing","Escreva em português, em 55-75 palavras, um parágrafo acadêmico sobre geopolítica usando pelo menos uma construção com gerúndio ou particípio inicial (“Analisando...” ou “Diante de...”).",[],["analisando", "diante de", "soberania"]],
    ]
  },
  {
    id:"pt_a1_hairdresser_personal_care", level:"A1", title:"O cabeleireiro e os cuidados pessoais", emoji:"💇", xp:38,
    description:"Aprenda vocabulário de cabeleireiro e a usar o comparativo e superlativo em português.",
    study: {
      vocab: [
        ["o corte de cabelo", "el corte de pelo"],
        ["o cabeleireiro/a cabeleireira", "el peluquero"],
        ["a tesoura", "las tijeras"],
        ["o cabelo curto/comprido", "pelo corto/largo"],
        ["aparar", "recortar"],
        ["o espelho", "el espejo"],
      ],
      grammar: [
        ["Comparativo e superlativo", "El comparativo se forma con “mais/menos... que”, y el superlativo con “o/a mais...”.", "Este corte é mais curto que o anterior. / Ela tem o cabelo mais comprido da família."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “scissors” en portugués?",["o cabeleireiro/a cabeleireira","a tesoura","o espelho","aparar"],1,"“Scissors” es “a tesoura” en portugués."],
      ["mcq","¿Cómo se dice “to trim” en portugués?",["o corte de cabelo","aparar","a tesoura","o cabeleireiro/a cabeleireira"],1,"“To trim” es “aparar” en portugués."],
      ["fill","Completa: “Este corte é ___ curto que o anterior.”",["o mais", "mais", "menos", "tão"],1,"El comparativo de superioridad se forma con “mais... que”: “mais curto que”."],
      ["translate","Traduce: “She has the longest hair in the family.”",["Ela têm o cabelo mais comprido da família.", "Ela tem o cabelo mais comprido da família.", "Ela tem o cabelo mais comprido que a família.", "Ela tem o cabelo mais comprido na família."],1,"“The longest... in” se traduce con “o mais comprido da” en portugués."],
      ["arrange","Ordena: [melhor / cidade / é / cabeleireiro / este / da / o]",["este melhor da o cidade cabeleireiro é","este é o melhor cabeleireiro da cidade","melhor é este da cidade o cabeleireiro","é cabeleireiro o da este cidade melhor"],1,"Pronombre + verbo + artículo + superlativo + sustantivo + preposición + artículo + sustantivo."],
      ["writing","Descreva em português, em 20-30 palavras, seu corte de cabelo ideal usando comparativos ou superlativos.",[],["mais curto", "o mais comprido", "corte de cabelo"]],
    ]
  },
  {
    id:"pt_a2_car_repair_shop", level:"A2", title:"A oficina mecânica e o carro", emoji:"🚗", xp:48,
    description:"Aprenda vocabulário de oficina mecânica e a usar “muito/muitos” em português.",
    study: {
      vocab: [
        ["o mecânico", "el mecánico"],
        ["o pneu furado", "la rueda pinchada"],
        ["o motor", "el motor"],
        ["consertar o carro", "arreglar el coche"],
        ["a peça de reposição", "la pieza de repuesto"],
        ["a troca de óleo", "el cambio de aceite"],
      ],
      grammar: [
        ["“Muito/muitos” para cantidades", "“Muito” concuerda en género y número con el sustantivo: “muito tempo”, “muitas peças”, “muita água”.", "Este conserto precisa de muitas peças de reposição. / Não sobra muito tempo antes da viagem."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “flat tire” en portugués?",["o motor","a troca de óleo","o pneu furado","consertar o carro"],2,"“Flat tire” es “o pneu furado” en portugués."],
      ["mcq","¿Cómo se dice “spare part” en portugués?",["o mecânico","a peça de reposição","o pneu furado","a troca de óleo"],1,"“Spare part” es “a peça de reposição” en portugués."],
      ["fill","Completa: “Não sobra ___ tempo antes da viagem.”",["muitas", "muitos", "muito", "muita"],2,"“Tempo” es masculino singular, así que se usa “muito”: “muito tempo”."],
      ["translate","Traduce: “This repair needs a lot of spare parts.”",["Este conserto precisa de muito peças de reposição.", "Este conserto precisam de muitas peças de reposição.", "Este conserto precisa de muitas peças de reposição.", "Este conserto precisa de muitas peça de reposição."],2,"“Peças” es femenino plural, así que se usa “muitas”: “muitas peças”."],
      ["arrange","Ordena: [consertou / mecânico / motor / o / o]",["consertou o mecânico motor o", "o mecânico consertou o motor", "consertou o o mecânico motor", "motor o mecânico o consertou"],1,"Artículo + sustantivo + verbo + artículo + sustantivo."],
      ["speaking","Descreva em português, em 40-60 palavras, um problema com seu carro usando “muito/muitos”.",[],["muito", "muitas", "peças de reposição"]],
    ]
  },
  {
    id:"pt_b1_learning_musical_instrument", level:"B1", title:"A música e aprender um instrumento", emoji:"🎸", xp:62,
    description:"Aprenda vocabulário musical e a usar o gerúndio e o infinitivo em português.",
    study: {
      vocab: [
        ["praticar escalas", "practicar escalas"],
        ["a partitura", "la partitura"],
        ["afinar um instrumento", "afinar un instrumento"],
        ["o ritmo", "el ritmo"],
        ["o professor de música", "el profesor de música"],
        ["se apresentar", "actuar/interpretar"],
      ],
      grammar: [
        ["Gerúndio vs. infinitivo", "Algunos verbos van seguidos de gerundio (“gosto de praticar”, con “de”), otros de infinitivo (“quero tocar”).", "Gosto de praticar escalas toda manhã. / Ela quer se apresentar diante de uma plateia."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sheet music” en portugués?",["se apresentar","praticar escalas","o ritmo","a partitura"],3,"“Sheet music” es “a partitura” en portugués."],
      ["mcq","¿Cómo se dice “to tune an instrument” en portugués?",["se apresentar","afinar um instrumento","o professor de música","a partitura"],1,"“To tune an instrument” es “afinar um instrumento” en portugués."],
      ["fill","Completa: “Gosto ___ praticar escalas toda manhã.”",["a", "para", "de", "em"],2,"“Gostar” se usa con “de” + infinitivo: “gosto de praticar”."],
      ["translate","Traduce: “She wants to perform in front of an audience.”",["Ela querem se apresentar diante de uma plateia.", "Ela quer se apresentar diante de uma plateia.", "Ela quer se apresentar diante de um plateia.", "Ela quer se apresentando diante de uma plateia."],1,"“Want to perform” se traduce con infinitivo: “quer se apresentar”."],
      ["arrange","Ordena: [afinação / precisa / instrumento / este / de]",["este instrumento precisa de afinação", "afinação precisa instrumento de este", "este afinação precisa de instrumento", "este precisa de afinação instrumento"],0,"Pronombre + sustantivo + verbo + preposición + sustantivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre aprender um instrumento musical usando pelo menos um verbo com gerúndio/“de” e um com infinitivo.",[],["gosto de tocar", "quero aprender", "praticar"]],
    ]
  },
  {
    id:"pt_b2_recycling_circular_economy", level:"B2", title:"A reciclagem e a economia circular", emoji:"♻️", xp:84,
    description:"Habla del reciclaje usando el presente do indicativo para verdades generales en portugués.",
    study: {
      vocab: [
        ["reciclar", "reciclar"],
        ["a economia circular", "la economía circular"],
        ["a gestão de resíduos", "la gestión de residuos"],
        ["reutilizar", "reutilizar"],
        ["o aterro sanitário", "el vertedero"],
        ["a matéria-prima", "la materia prima"],
      ],
      grammar: [
        ["Presente do indicativo para verdades gerais (condicional zero)", "En portugués, el condicional cero se expresa con “se” + presente do indicativo en ambas cláusulas, para hechos o verdades generales.", "Se você recicla papel, isso economiza árvores. / Os materiais vão para um aterro se não forem reutilizados."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “circular economy” en portugués?",["a matéria-prima","reutilizar","a gestão de resíduos","a economia circular"],3,"“Circular economy” es “a economia circular” en portugués."],
      ["mcq","¿Cómo se dice “landfill” en portugués?",["reutilizar","reciclar","a gestão de resíduos","o aterro sanitário"],3,"“Landfill” es “o aterro sanitário” en portugués."],
      ["fill","Completa: “Se você ___ papel, isso economiza árvores.”",["reciclando", "recicla", "reciclará", "reciclou"],1,"El condicional cero usa presente do indicativo en ambas cláusulas: “se você recicla”."],
      ["translate","Traduce: “Materials go to a landfill if they aren't reused.”",["Os materiais vão para um aterro se não forem reutilizados.", "O material vão para um aterro se não forem reutilizados.", "Os materiais foram para um aterro se não forem reutilizados.", "Os materiais vão para um aterro se não são reutilizados."],0,"El condicional cero mantiene presente en la primera cláusula, con subjuntivo futuro tras “se”: “vão... se não forem reutilizados”."],
      ["arrange","Ordena: [prima / economiza / reciclar / matéria]",["prima reciclar matéria economiza", "matéria prima economiza reciclar", "reciclar economiza matéria prima", "matéria prima reciclar economiza"],2,"Verbo + verbo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma explicação sobre a economia circular usando “se... presente” pelo menos duas vezes.",[],["se você recicla", "se...", "economia circular"]],
    ]
  },
  {
    id:"pt_c1_political_philosophy_social_justice", level:"C1", title:"A filosofia política e a justiça social", emoji:"⚖️", xp:92,
    description:"Analiza la justicia social usando “tomara/quem me dera” para arrepentimiento en registro formal en portugués.",
    study: {
      vocab: [
        ["a justiça social", "la justicia social"],
        ["a desigualdade", "la desigualdad"],
        ["os direitos civis", "los derechos civiles"],
        ["a redistribuição", "la redistribución"],
        ["a opressão sistêmica", "la opresión sistémica"],
        ["o bem comum", "el bien común"],
      ],
      grammar: [
        ["“Tomara que” + pretérito imperfeito do subjuntivo para arrepentimiento", "“Tomara que” + pretérito imperfeito ou mais-que-perfeito do subjuntivo expresa arrepentimiento o el deseo de que algo fuera diferente.", "Tomara que as reformas passadas tivessem enfrentado a opressão sistêmica. / Os filósofos gostariam que a desigualdade pudesse ser resolvida só com políticas."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “inequality” en portugués?",["a justiça social","os direitos civis","a desigualdade","a redistribuição"],2,"“Inequality” es “a desigualdade” en portugués."],
      ["mcq","¿Cómo se dice “redistribution” en portugués?",["o bem comum","a justiça social","a redistribuição","a desigualdade"],2,"“Redistribution” es “a redistribuição” en portugués."],
      ["fill","Completa: “Tomara que as reformas passadas ___ enfrentado a opressão sistêmica.”",["tivessem", "tenham", "tinham", "teriam"],0,"“Tomara que” + pretérito mais-que-perfeito do subjuntivo expresa arrepentimiento: “tomara que... tivessem enfrentado”."],
      ["translate","Traduce: “Philosophers wish inequality could be solved by policy alone.”",["Os filósofos gostariam que a desigualdade pudesse resolver só com políticas.", "Os filósofo gostariam que a desigualdade pudesse ser resolvida só com políticas.", "Os filósofos gostariam que a desigualdade pudesse ser resolvida só com políticas.", "Os filósofos gostariam que a desigualdade pode ser resolvida só com políticas."],2,"“Wish... could be solved” se traduce con subjuntivo tras “gostariam que”: “pudesse ser resolvida”."],
      ["arrange","Ordena: [comum / debatem / bem / filósofos / o / os]",["bem comum filósofos debatem o os", "os filósofos debatem o bem comum", "os debatem filósofos bem o comum", "comum debatem filósofos os bem o"],1,"Artículo + sustantivo + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escreva em português, em 55-75 palavras, um argumento sobre justiça social usando “tomara que” pelo menos duas vezes.",[],["tomara que", "tivessem", "justiça social"]],
    ]
  },
  {
    id:"pt_c2_cultural_anthropology_rituals", level:"C2", title:"A antropologia cultural e os rituais", emoji:"🗿", xp:100,
    description:"Analiza los rituales culturales usando comparativos dobles en portugués.",
    study: {
      vocab: [
        ["o ritual", "el ritual"],
        ["o relativismo cultural", "el relativismo cultural"],
        ["o rito de passagem", "el rito de iniciación"],
        ["o parentesco", "el parentesco"],
        ["a identidade coletiva", "la identidad colectiva"],
        ["a tradição oral", "la tradición oral"],
      ],
      grammar: [
        ["Comparativos duplos (“quanto mais... mais...”)", "La estructura “quanto mais/menos..., mais/menos...” expresa cómo dos cosas cambian juntas de forma proporcional.", "Quanto mais os antropólogos estudam os rituais, mais entendem a identidade coletiva. / Quanto mais antiga a tradição, mais forte sua influência."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cultural relativism” en portugués?",["a identidade coletiva","o ritual","o relativismo cultural","o parentesco"],2,"“Cultural relativism” es “o relativismo cultural” en portugués."],
      ["mcq","¿Cómo se dice “rite of passage” en portugués?",["o rito de passagem","o ritual","a tradição oral","a identidade coletiva"],0,"“Rite of passage” es “o rito de passagem” en portugués."],
      ["fill","Completa: “Quanto ___ os antropólogos estudam os rituais, mais entendem a identidade coletiva.”",["melhor", "mais", "muito", "menos"],1,"El comparativo doble repite “quanto mais...mais” en ambas cláusulas."],
      ["translate","Traduce con comparativo doble: “The older the tradition, the stronger its influence.”",["Quanto a tradição mais antiga, mais forte sua influência.", "Quanto mais antiga a tradição, mais forte sua influência.", "Quanto mais antiga a tradição, mais forte é sua influência.", "Quanto mais antiga é a tradição, a mais forte sua influência."],1,"El comparativo doble en portugués es “quanto mais...mais...”, sin verbo obligatorio en la segunda cláusula."],
      ["arrange","Ordena: [marcam / adulta / de / os / passagem / ritos / a / vida]",["vida adulta de os a passagem ritos marcam", "os ritos de passagem marcam a vida adulta", "de adulta marcam passagem ritos a os vida", "adulta os de passagem vida ritos a marcam"],1,"Artículo + sustantivo + preposición + sustantivo + verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise sobre rituais culturais usando pelo menos um comparativo duplo (“quanto mais... mais...”).",[],["quanto mais", "mais", "ritual"]],
    ]
  },
  {
    id:"pt_a1_hardware_store_tools", level:"A1", title:"Na loja de ferragens: ferramentas básicas", emoji:"🔨", xp:38,
    description:"Aprenda vocabulário de ferramentas e a usar a comparação de igualdade (“tão... quanto”) em português.",
    study: {
      vocab: [
        ["o martelo", "el martillo"],
        ["a chave de fenda", "el destornillador"],
        ["o prego", "el clavo"],
        ["o parafuso", "el tornillo"],
        ["a caixa de ferramentas", "la caja de herramientas"],
        ["a escada", "la escalera"],
      ],
      grammar: [
        ["Comparação de igualdade (“tão... quanto”)", "“Tão” + adjetivo + “quanto” expresa que dos cosas son iguales en cierta cualidad.", "Este martelo é tão pesado quanto aquele. / A escada não é tão alta quanto a parede."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “screwdriver” en portugués?",["o martelo","o parafuso","o prego","a chave de fenda"],3,"“Screwdriver” es “a chave de fenda” en portugués."],
      ["mcq","¿Cómo se dice “ladder” en portugués?",["o parafuso","a escada","o martelo","a chave de fenda"],1,"“Ladder” es “a escada” en portugués."],
      ["fill","Completa: “Este martelo é ___ pesado quanto aquele.”",["tanto", "menos", "tão", "mais"],2,"La comparación de igualdad usa “tão + adjetivo + quanto”: “tão pesado quanto”."],
      ["translate","Traduce: “The ladder isn't as tall as the wall.”",["A escada não é tão alta quanto a parede.", "A escada não é tão alta que a parede.", "A escada é tão alta quanto a parede.", "A escada não é mais alta que a parede."],0,"“Isn't as... as” se traduce con “não é tão... quanto”."],
      ["arrange","Ordena: [pesada / caixa / ferramentas / a / muito / de / é]",["a caixa de ferramentas é muito pesada", "muito pesada a de ferramentas caixa é", "ferramentas pesada é caixa muito a de", "é a caixa de muito ferramentas pesada"],0,"Artículo + sustantivo + preposición + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Descreva em português, em 20-30 palavras, comparando duas ferramentas usando “tão... quanto”.",[],["tão pesado quanto", "tão alta quanto", "martelo"]],
    ]
  },
  {
    id:"pt_a2_laundry_clothing_care", level:"A2", title:"A lavanderia e o cuidado com as roupas", emoji:"🧺", xp:48,
    description:"Aprenda vocabulário de lavanderia e a usar “alguns/um pouco de” em português.",
    study: {
      vocab: [
        ["a máquina de lavar", "la lavadora"],
        ["o sabão em pó", "el detergente"],
        ["estender a roupa", "tender la ropa"],
        ["a mancha", "la mancha"],
        ["a secadora", "la secadora"],
        ["passar a ferro", "planchar"],
      ],
      grammar: [
        ["“Alguns/um pouco de” para cantidades pequeñas", "“Alguns” se usa con sustantivos contables, “um pouco de” con incontables, ambos para cantidades pequeñas pero suficientes.", "Preciso de um pouco de sabão em pó para esta carga. / Há algumas manchas nesta camisa."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “washing machine” en portugués?",["a mancha","a máquina de lavar","a secadora","passar a ferro"],1,"“Washing machine” es “a máquina de lavar” en portugués."],
      ["mcq","¿Cómo se dice “stain” en portugués?",["a máquina de lavar","a secadora","o sabão em pó","a mancha"],3,"“Stain” es “a mancha” en portugués."],
      ["fill","Completa: “Há ___ manchas nesta camisa.”",["muita", "pouco", "algumas", "um pouco de"],2,"“Manchas” es contable plural femenino, así que se usa “algumas”: “algumas manchas”."],
      ["translate","Traduce: “I need a little detergent for this load.”",["Preciso de um pouco de sabões em pó para esta carga.", "Preciso de alguns sabão em pó para esta carga.", "Preciso pouco de sabão em pó para esta carga.", "Preciso de um pouco de sabão em pó para esta carga."],3,"“Sabão em pó” es incontable, así que se usa “um pouco de”: “um pouco de sabão em pó”."],
      ["arrange","Ordena: [passar / precisa / camisa / esta / de]",["esta precisa de passar camisa", "esta de precisa camisa passar", "camisa precisa passar de esta", "esta camisa precisa de passar"],3,"Pronombre + sustantivo + verbo + preposición + infinitivo."],
      ["speaking","Descreva em português, em 40-60 palavras, sua rotina de lavanderia usando “alguns/um pouco de”.",[],["alguns", "um pouco de", "máquina de lavar"]],
    ]
  },
  {
    id:"pt_b1_chess_strategy_games", level:"B1", title:"O xadrez e os jogos de tabuleiro estratégicos", emoji:"♟️", xp:62,
    description:"Aprenda vocabulário de xadrez e a usar o futuro do presente com “se” em português.",
    study: {
      vocab: [
        ["o tabuleiro de xadrez", "el tablero de ajedrez"],
        ["dar xeque-mate", "dar jaque mate"],
        ["o peão", "el peón"],
        ["mover uma peça", "mover una pieza"],
        ["a estratégia", "la estrategia"],
        ["o adversário", "el oponente"],
      ],
      grammar: [
        ["“Se” + presente do indicativo + futuro do presente", "Para consecuencias reales y probables en el futuro se usa “se” + presente do indicativo, y futuro do presente en la consecuencia.", "Se você mover essa peça, você vai perder a partida. / Se ela planejar bem sua estratégia, ela vencerá."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “to checkmate” en portugués?",["o adversário","a estratégia","mover uma peça","dar xeque-mate"],3,"“To checkmate” es “dar xeque-mate” en portugués."],
      ["mcq","¿Cómo se dice “pawn” en portugués?",["dar xeque-mate","o peão","o adversário","a estratégia"],1,"“Pawn” es “o peão” en portugués."],
      ["fill","Completa: “Se você mover essa peça, você ___ perder a partida.”",["foi", "vai", "iria", "vais"],1,"El futuro perifrástico usa “vai” + infinitivo: “você vai perder”."],
      ["translate","Traduce: “If she plans her strategy well, she will win.”",["Se ela planejasse bem sua estratégia, ela vencerá.", "Se ela planejar bem sua estratégia, ela vence.", "Se ela planeja bem sua estratégia, ela vencerá.", "Se ela planejar bem sua estratégia, ela vencerá."],3,"“If... will win” se traduce con futuro do subjuntivo tras “se” + futuro do presente: “se planejar... vencerá”."],
      ["arrange","Ordena: [forte / tem / adversário / um / ela]",["um adversário forte ela tem", "tem ela um forte adversário", "ela tem um adversário forte", "forte um adversário ela tem"],2,"Sujeto + verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre uma partida de xadrez usando “se... futuro” pelo menos duas vezes.",[],["se...", "vencerá", "xadrez"]],
    ]
  },
  {
    id:"pt_b2_historic_building_restoration", level:"B2", title:"A restauração de edifícios históricos", emoji:"🏛️", xp:84,
    description:"Habla de restauración usando la construcción causativa “mandar + infinitivo” en portugués.",
    study: {
      vocab: [
        ["restaurar", "restaurar"],
        ["o sítio patrimonial", "el sitio patrimonial"],
        ["a fachada", "la fachada"],
        ["o andaime", "el andamio"],
        ["preservar", "preservar"],
        ["o dano estrutural", "el daño estructural"],
      ],
      grammar: [
        ["Construção causativa (“mandar + infinitivo”)", "“Mandar” + infinitivo expresa que alguien más realiza una acción para nosotros, muy común al hablar de reparaciones o servicios.", "A cidade mandou restaurar a fachada no ano passado. / Eles estão mandando consertar o telhado este mês."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “facade” en portugués?",["restaurar","o dano estrutural","o sítio patrimonial","a fachada"],3,"“Facade” es “a fachada” en portugués."],
      ["mcq","¿Cómo se dice “scaffolding” en portugués?",["restaurar","o dano estrutural","o andaime","a fachada"],2,"“Scaffolding” es “o andaime” en portugués."],
      ["fill","Completa: “A cidade ___ restaurar a fachada no ano passado.”",["manda", "mandava", "mandará", "mandou"],3,"La construcción causativa en pasado usa “mandou” + infinitivo: “mandou restaurar”."],
      ["translate","Traduce: “They are getting the roof repaired this month.”",["Eles mandaram consertar o telhado este mês já.", "Eles estão mandando consertado o telhado este mês.", "Eles mandam consertar o telhado por eles este mês.", "Eles estão mandando consertar o telhado este mês."],3,"“Are getting... repaired” se traduce con “estão mandando consertar”, construcción causativa en presente continuo."],
      ["arrange","Ordena: [preservar / importantes / patrimoniais / sítios]",["preservar importantes sítios patrimoniais", "preservar sítios patrimoniais importantes", "importantes preservar sítios patrimoniais", "importantes patrimoniais sítios preservar"],1,"Infinitivo + sustantivo + adjetivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre a restauração de um edifício histórico usando a construção causativa (“mandar + infinitivo”) pelo menos duas vezes.",[],["mandou restaurar", "estão mandando consertar", "sítio patrimonial"]],
    ]
  },
  {
    id:"pt_c1_philosophy_of_science", level:"C1", title:"A filosofia da ciência e o método científico", emoji:"🔬", xp:92,
    description:"Analiza el método científico usando cláusulas de propósito (“a fim de/para que”) en portugués.",
    study: {
      vocab: [
        ["a hipótese", "la hipótesis"],
        ["a falseabilidade", "la falsabilidad"],
        ["a evidência empírica", "la evidencia empírica"],
        ["a revisão por pares", "la revisión por pares"],
        ["replicar um estudo", "replicar un estudio"],
        ["a mudança de paradigma", "el cambio de paradigma"],
      ],
      grammar: [
        ["Orações de finalidade (“a fim de/para que”)", "“A fim de” + infinitivo y “para que” + subjuntivo expresan el propósito de una acción, típicos del registro formal/académico.", "Os cientistas replicam estudos a fim de confirmar os resultados. / Os pesquisadores publicam dados para que outros possam verificá-los."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “falsifiability” en portugués?",["a hipótese","a evidência empírica","a falseabilidade","replicar um estudo"],2,"“Falsifiability” es “a falseabilidade” en portugués."],
      ["mcq","¿Cómo se dice “peer review” en portugués?",["a revisão por pares","replicar um estudo","a hipótese","a mudança de paradigma"],0,"“Peer review” es “a revisão por pares” en portugués."],
      ["fill","Completa: “Os pesquisadores publicam dados para ___ outros possam verificá-los.”",["por", "de", "com", "que"],3,"“Para que” + subjuntivo expresa propósito: “para que outros possam”."],
      ["translate","Traduce con cláusula de propósito: “Scientists replicate studies in order to confirm results.”",["Os cientistas replicam estudos a fim de confirmam os resultados.", "Os cientistas replicam estudos a fim de confirmar os resultados.", "Os cientistas replicam estudos a fim confirmar os resultados.", "Os cientista replicam estudos a fim de confirmar os resultados."],1,"“In order to confirm” en registro formal se traduce con “a fim de confirmar”."],
      ["arrange","Ordena: [precisa / hipótese / empírica / toda / evidência]",["toda hipótese precisa evidência empírica", "toda evidência hipótese empírica precisa", "evidência toda precisa empírica hipótese", "precisa hipótese evidência toda empírica"],0,"Adjetivo + sustantivo + verbo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre o método científico usando “a fim de” ou “para que” pelo menos duas vezes.",[],["a fim de", "para que", "hipótese"]],
    ]
  },
  {
    id:"pt_c2_game_theory_strategic_decisions", level:"C2", title:"A teoria dos jogos e a tomada de decisão estratégica", emoji:"🎲", xp:100,
    description:"Analiza la teoría de juegos usando “nem... nem” y concesión con “enquanto” en portugués.",
    study: {
      vocab: [
        ["o equilíbrio de Nash", "el equilibrio de Nash"],
        ["o jogo de soma zero", "el juego de suma cero"],
        ["a matriz de payoff", "la matriz de resultados"],
        ["a estratégia dominante", "la estrategia dominante"],
        ["o ator racional", "el actor racional"],
        ["o dilema do prisioneiro", "el dilema del prisionero"],
      ],
      grammar: [
        ["“Nem... nem” y concesión con “enquanto”", "“Nem... nem” niega dos opciones a la vez; “enquanto” introduce un contraste formal entre dos ideas.", "Nem um jogador se beneficia da traição mútua. / Enquanto a cooperação maximiza o ganho conjunto, o interesse próprio costuma prevalecer."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “Nash equilibrium” en portugués?",["o dilema do prisioneiro","o jogo de soma zero","a matriz de payoff","o equilíbrio de Nash"],3,"“Nash equilibrium” es “o equilíbrio de Nash” en portugués."],
      ["mcq","¿Cómo se dice “prisoner's dilemma” en portugués?",["a estratégia dominante","o equilíbrio de Nash","o dilema do prisioneiro","o ator racional"],2,"“Prisoner's dilemma” es “o dilema do prisioneiro” en portugués."],
      ["fill","Completa: “Nem um jogador ___ beneficia da traição mútua.”",["lhes", "lhe", "se", "o"],2,"El verbo pronominal “beneficiar-se” requiere “se”: “se beneficia”."],
      ["translate","Traduce con concesión formal: “Whereas cooperation maximizes joint gain, self-interest often prevails.”",["Embora a cooperação maximiza o ganho conjunto, o interesse próprio costuma prevalecer.", "Enquanto a cooperação maximiza o ganho conjunto, o interesse próprio costuma prevalecer.", "Enquanto a cooperação maximize o ganho conjunto, o interesse próprio costuma prevalecer.", "Enquanto a cooperação maximiza o ganho conjunto, o interesse próprio costumam prevalecer."],1,"“Enquanto” + indicativo introduce el contraste formal: “a cooperação maximiza”."],
      ["arrange","Ordena: [dominante / tem / estratégia / nenhum / jogador]",["tem nenhum jogador dominante estratégia", "estratégia dominante nenhum jogador tem", "dominante tem nenhum jogador estratégia", "nenhum jogador tem estratégia dominante"],3,"Pronombre negativo + sustantivo + verbo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise de teoria dos jogos usando “nem... nem” e “enquanto” pelo menos uma vez cada.",[],["nem...nem", "enquanto", "equilíbrio de Nash"]],
    ]
  },
  {
    id:"pt_a1_diving_water_sports", level:"A1", title:"O mergulho e os esportes aquáticos", emoji:"🤿", xp:38,
    description:"Aprenda vocabulário de mergulho e a usar preposições de lugar em português.",
    study: {
      vocab: [
        ["mergulhar", "bucear"],
        ["o snorkel", "el tubo de buceo"],
        ["o peixe", "el pez"],
        ["o recife de coral", "el arrecife de coral"],
        ["a roupa de neoprene", "el traje de neopreno"],
        ["debaixo d'água", "bajo el agua"],
      ],
      grammar: [
        ["Preposições de lugar (em/sobre/debaixo de/ao lado de)", "“Em” indica dentro de algo, “sobre” indica encima de una superficie, “debaixo de” indica abajo, y “ao lado de” indica junto a.", "Os peixes nadam na água. / O recife de coral está debaixo do barco."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “coral reef” en portugués?",["mergulhar","o recife de coral","o snorkel","o peixe"],1,"“Coral reef” es “o recife de coral” en portugués."],
      ["mcq","¿Cómo se dice “wetsuit” en portugués?",["a roupa de neoprene","o peixe","o snorkel","debaixo d'água"],0,"“Wetsuit” es “a roupa de neoprene” en portugués."],
      ["fill","Completa: “O recife de coral está ___ do barco.”",["ao lado", "debaixo", "em", "sobre"],1,"“Debaixo de” indica una posición inferior: “debaixo do barco”."],
      ["translate","Traduce: “The fish swim in the water.”",["Os peixes nadam na água.", "Os peixes nadam debaixo a água.", "Os peixes nadam sobre a água.", "Os peixes nadam ao lado da água."],0,"“In the water” se traduce con “na água”, ya que están dentro de ella."],
      ["arrange","Ordena: [barco / lado / do / ao / mergulhador / está / o]",["está mergulhador lado ao do barco o", "o mergulhador está ao lado do barco", "mergulhador o lado do barco está ao", "ao barco está lado do mergulhador o"],1,"Artículo + sustantivo + verbo + preposición + preposición + artículo + sustantivo."],
      ["writing","Descreva em português, em 20-30 palavras, o que você vê ao mergulhar usando preposições de lugar (em/sobre/debaixo de/ao lado de).",[],["debaixo de", "na", "peixes"]],
    ]
  },
  {
    id:"pt_a2_origami_crafts", level:"A2", title:"O origami e os trabalhos manuais", emoji:"🎨", xp:48,
    description:"Aprenda vocabulário de trabalhos manuais e a usar sequenciadores em português.",
    study: {
      vocab: [
        ["dobrar", "doblar"],
        ["o papel", "el papel"],
        ["a tesoura", "las tijeras"],
        ["a cola", "el pegamento"],
        ["a dobra", "el pliegue"],
        ["o trabalho manual", "la manualidad"],
      ],
      grammar: [
        ["Sequenciadores (primeiro, depois, em seguida, finalmente)", "Los secuenciadores organizan los pasos de un proceso en orden: “primeiro”, “depois/em seguida”, “finalmente”.", "Primeiro, dobre o papel ao meio. Depois, faça uma dobra. Finalmente, dobre os cantos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “crease” en portugués?",["a dobra","a cola","dobrar","o trabalho manual"],0,"“Crease” es “a dobra” en portugués."],
      ["mcq","¿Cómo se dice “glue” en portugués?",["a cola","dobrar","o papel","a tesoura"],0,"“Glue” es “a cola” en portugués."],
      ["fill","Completa: “Primeiro, dobre o papel. ___, faça uma dobra.”",["Primeiro", "Depois", "Finalmente", "Antes"],1,"“Depois” conecta el segundo paso después de “primeiro”."],
      ["translate","Traduce: “Finally, fold the corners.”",["Finalmente, dobre o canto.", "Finalmente, dobrando os cantos.", "Depois, dobre os cantos.", "Finalmente, dobre os cantos."],3,"“Finally” se traduce con “Finalmente” al inicio de la oración."],
      ["arrange","Ordena: [tesoura / trabalho / precisa / este / de]",["de este tesoura precisa trabalho", "trabalho precisa este de tesoura", "de trabalho tesoura precisa este", "este trabalho precisa de tesoura"],3,"Pronombre + sustantivo + verbo + preposición + sustantivo."],
      ["speaking","Descreva em português, em 40-60 palavras, os passos para fazer um trabalho manual usando sequenciadores (primeiro, depois, finalmente).",[],["primeiro", "depois", "finalmente"]],
    ]
  },
  {
    id:"pt_b1_paleontology_dinosaurs", level:"B1", title:"A paleontologia e os dinossauros", emoji:"🦴", xp:62,
    description:"Aprenda vocabulário de paleontologia e a usar “já/ainda não/ainda” com o pretérito perfeito em português.",
    study: {
      vocab: [
        ["o fóssil", "el fósil"],
        ["o osso de dinossauro", "el hueso de dinosaurio"],
        ["o sítio de escavação", "el sitio de excavación"],
        ["extinto", "extinto"],
        ["o esqueleto", "el esqueleto"],
        ["desenterrar", "desenterrar"],
      ],
      grammar: [
        ["“Já/ainda não/ainda” com o pretérito perfeito", "“Já” (ya) se usa en afirmativas, “ainda não” (todavía no) en negativas, y “ainda” (todavía) enfatiza una situación que continúa.", "Eles já encontraram o esqueleto. / Eles ainda não terminaram a escavação. / Os cientistas ainda estão estudando o fóssil."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “fossil” en portugués?",["o osso de dinossauro","o sítio de escavação","o fóssil","extinto"],2,"“Fossil” es “o fóssil” en portugués."],
      ["mcq","¿Cómo se dice “skeleton” en portugués?",["o fóssil","o esqueleto","o osso de dinossauro","o sítio de escavação"],1,"“Skeleton” es “o esqueleto” en portugués."],
      ["fill","Completa: “Eles ___ não terminaram a escavação.”",["nunca", "sempre", "já", "ainda"],3,"“Ainda não” equivale a “not yet”: “ainda não terminaram”."],
      ["translate","Traduce: “Scientists are still studying the fossil.”",["Os cientistas ainda não estão estudando o fóssil.", "Os cientistas ainda estão estudando o fóssil.", "Os cientistas estão ainda estudado o fóssil.", "Os cientistas já estão estudando o fóssil."],1,"“Are still studying” se traduce con “ainda estão estudando”, presente continuo."],
      ["arrange","Ordena: [esqueleto / encontraram / já / o / eles]",["esqueleto encontraram já eles o", "já o eles encontraram esqueleto", "eles o já encontraram esqueleto", "eles já encontraram o esqueleto"],3,"Sujeto + adverbio + verbo + artículo + sustantivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre uma descoberta de dinossauros usando “já/ainda não/ainda” pelo menos duas vezes.",[],["já", "ainda não", "ainda"]],
    ]
  },
  {
    id:"pt_b2_street_art_graffiti", level:"B2", title:"A arte urbana e o grafite", emoji:"🎨", xp:84,
    description:"Habla de arte urbano usando “a menos que” em português.",
    study: {
      vocab: [
        ["o mural", "el mural"],
        ["a tinta spray", "la pintura en aerosol"],
        ["o espaço público", "el espacio público"],
        ["o vandalismo", "el vandalismo"],
        ["o artista de rua", "el artista callejero"],
        ["encomendar um mural", "encargar un mural"],
      ],
      grammar: [
        ["“A menos que” + subjuntivo", "“A menos que” + subjuntivo expresa una condición negativa: algo sucederá salvo que ocurra otra cosa.", "A menos que a cidade o aprove, o mural será considerado vandalismo. / Ela não vai pintar a menos que tenha permissão."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “vandalism” en portugués?",["o espaço público","o vandalismo","o artista de rua","encomendar um mural"],1,"“Vandalism” es “o vandalismo” en portugués."],
      ["mcq","¿Cómo se dice “to commission a mural” en portugués?",["encomendar um mural","o artista de rua","o espaço público","o vandalismo"],0,"“To commission a mural” es “encomendar um mural” en portugués."],
      ["fill","Completa: “Ela não vai pintar a menos que ___ permissão.”",["teria", "tem", "tenha", "terá"],2,"“A menos que” requiere subjuntivo: “a menos que tenha”."],
      ["translate","Traduce: “Unless the city approves it, the mural will be considered vandalism.”",["A menos que a cidade o aprove, o mural será considerado vandalismo.", "A menos que a cidade o aprova, o mural será considerado vandalismo.", "A menos que a cidade o aprove, o mural é considerado vandalismo.", "Se a cidade o aprove, o mural será considerado vandalismo."],0,"“Unless” se traduce con “a menos que” + subjuntivo: “a menos que... aprove”."],
      ["arrange","Ordena: [talentoso / muito / artista / este / é]",["é muito artista talentoso este", "este artista é muito talentoso", "muito é talentoso artista este", "este muito é artista talentoso"],1,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre a arte urbana usando “a menos que” pelo menos duas vezes.",[],["a menos que", "mural", "artista de rua"]],
    ]
  },
  {
    id:"pt_c1_criminology_criminal_justice", level:"C1", title:"A criminologia e a justiça penal", emoji:"🔍", xp:92,
    description:"Analiza la criminología usando “poder” para posibilidad en registro formal en portugués.",
    study: {
      vocab: [
        ["a evidência forense", "la evidencia forense"],
        ["o suspeito", "el sospechoso"],
        ["condenar", "condenar"],
        ["a dúvida razoável", "la duda razonable"],
        ["a reincidência", "la reincidencia"],
        ["a reabilitação", "la rehabilitación"],
      ],
      grammar: [
        ["“Pode/poderia” para posibilidad formal", "“Pode” y “poderia” + infinitivo expresan posibilidad; en registro formal/legal, “pode” suele sonar ligeramente más seguro que “poderia”.", "A evidência forense pode apontar para o suspeito. / Sem reabilitação, a reincidência poderia aumentar."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “reasonable doubt” en portugués?",["o suspeito","a dúvida razoável","condenar","a reabilitação"],1,"“Reasonable doubt” es “a dúvida razoável” en portugués."],
      ["mcq","¿Cómo se dice “recidivism” en portugués?",["a evidência forense","a reincidência","condenar","a dúvida razoável"],1,"“Recidivism” es “a reincidência” en portugués."],
      ["fill","Completa: “A evidência forense ___ apontar para o suspeito.”",["sabe", "vai", "deve", "pode"],3,"“Pode” + infinitivo expresa posibilidad formal: “pode apontar”."],
      ["translate","Traduce con posibilidad formal: “Without rehabilitation, recidivism might increase.”",["Sem reabilitação, a reincidência pode aumentando.", "Sem reabilitação, a reincidência poderia aumentado.", "Sem reabilitação, a reincidência poderia aumentar.", "Sem reabilitação, a reincidência deve aumentar."],2,"“Might increase” se traduce con “poderia aumentar”, posibilidad formal en portugués."],
      ["arrange","Ordena: [condenar / não / suspeito / tribunal / pode / o / o]",["suspeito tribunal pode condenar o o não", "o condenar o não tribunal suspeito pode", "o tribunal não pode condenar o suspeito", "não o o condenar pode suspeito tribunal"],2,"Artículo + sustantivo + negación + verbo modal + verbo + artículo + sustantivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise sobre justiça penal usando “pode/poderia” pelo menos duas vezes.",[],["pode", "poderia", "dúvida razoável"]],
    ]
  },
  {
    id:"pt_c2_philosophy_of_language", level:"C2", title:"A filosofia da linguagem", emoji:"💬", xp:100,
    description:"Analiza la filosofía del lenguaje usando el subjuntivo tras verbos de sugerencia en portugués.",
    study: {
      vocab: [
        ["o ato de fala", "el acto de habla"],
        ["a referência", "la referencia"],
        ["o significado", "el significado"],
        ["a ambiguidade", "la ambigüedad"],
        ["a relatividade linguística", "la relatividad lingüística"],
        ["a proposição", "la proposición"],
      ],
      grammar: [
        ["Subjuntivo tras verbos de sugerencia (sugerir/insistir/recomendar que)", "Tras verbos como “sugerir”, “insistir” o “recomendar” + “que”, el verbo siguiente va en subjuntivo, típico del registro formal/académico.", "Os filósofos sugerem que o significado seja estudado através do uso. / O linguista insiste em que o contexto seja considerado."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “speech act” en portugués?",["a referência","o significado","a ambiguidade","o ato de fala"],3,"“Speech act” es “o ato de fala” en portugués."],
      ["mcq","¿Cómo se dice “ambiguity” en portugués?",["a ambiguidade","o significado","a relatividade linguística","o ato de fala"],0,"“Ambiguity” es “a ambiguidade” en portugués."],
      ["fill","Completa: “O linguista insiste em que o contexto ___ considerado.”",["seja", "será", "foi", "é"],0,"El subjuntivo presente de “ser” es “seja”: “insiste em que... seja considerado”."],
      ["translate","Traduce con subjuntivo: “Philosophers suggest that meaning be studied through use.”",["Os filósofos sugerem que o significado será estudado através do uso.", "Os filósofo sugerem que o significado seja estudado através do uso.", "Os filósofos sugerem que o significado é estudado através do uso.", "Os filósofos sugerem que o significado seja estudado através do uso."],3,"El verbo “sugerir que” requiere subjuntivo presente: “sugerem que... seja estudado”."],
      ["arrange","Ordena: [ambígua / esta / frase / é]",["esta ambígua frase é", "ambígua é frase esta", "esta frase é ambígua", "esta frase ambígua é"],2,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, um argumento sobre filosofia da linguagem usando o subjuntivo tras “sugerir/insistir/recomendar que” pelo menos duas vezes.",[],["sugere que", "insiste em que", "significado"]],
    ]
  },
  {
    id:"pt_a1_circus_shows", level:"A1", title:"O circo e os espetáculos", emoji:"🎪", xp:38,
    description:"Aprenda vocabulário de circo e a usar exclamações (“que.../como...”) em português.",
    study: {
      vocab: [
        ["o palhaço", "el payaso"],
        ["a corda bamba", "la cuerda floja"],
        ["o malabarista", "el malabarista"],
        ["o acrobata", "el acróbata"],
        ["a lona", "la tienda de campaña"],
        ["surpreendente", "asombroso"],
      ],
      grammar: [
        ["Exclamações (“que.../como...”)", "“Que” + sustantivo y “Como” + verbo/adjetivo expresan sorpresa o admiración de forma exclamativa.", "Que malabarista surpreendente! / Como este espetáculo é surpreendente!"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “juggler” en portugués?",["o palhaço","surpreendente","a lona","o malabarista"],3,"“Juggler” es “o malabarista” en portugués."],
      ["mcq","¿Cómo se dice “acrobat” en portugués?",["o acrobata","surpreendente","a corda bamba","o malabarista"],0,"“Acrobat” es “o acrobata” en portugués."],
      ["fill","Completa: “___ malabarista surpreendente!”",["Como", "Quanto", "Que", "Quão"],2,"“Que” + sustantivo expresa admiración: “que malabarista”."],
      ["translate","Traduce: “How amazing this show is!”",["Que este espetáculo é surpreendente!", "Como é este espetáculo surpreendente!", "Como este espetáculo surpreendente!", "Como este espetáculo é surpreendente!"],3,"“How amazing... is!” se traduce con “Como... é surpreendente!” en portugués."],
      ["arrange","Ordena: [bamba / anda / corda / na / palhaço / o]",["bamba anda corda palhaço na o", "o corda na anda bamba palhaço", "o corda na palhaço anda bamba", "o palhaço anda na corda bamba"],3,"Artículo + sustantivo + verbo + preposición + sustantivo."],
      ["writing","Descreva em português, em 20-30 palavras, um espetáculo de circo usando exclamações (“que.../como...”).",[],["que", "como", "surpreendente"]],
    ]
  },
  {
    id:"pt_a2_flea_market_bargains", level:"A2", title:"O mercado de pulgas e as pechinchas", emoji:"🛍️", xp:48,
    description:"Aprenda vocabulário de mercados de pulgas e a usar “demais/suficiente” em português.",
    study: {
      vocab: [
        ["o mercado de pulgas", "el mercadillo"],
        ["a pechincha", "la ganga"],
        ["pechinchar", "regatear"],
        ["de segunda mão", "de segunda mano"],
        ["o vendedor", "el vendedor"],
        ["a antiguidade", "la antigüedad"],
      ],
      grammar: [
        ["“Demais/suficiente”", "“Demais” (después del adjetivo) indica exceso, mientras que “suficiente” indica una cantidad adecuada.", "Esta antiguidade é cara demais. / Não tenho dinheiro suficiente para esta pechincha."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “to haggle” en portugués?",["a antiguidade","o vendedor","pechinchar","a pechincha"],2,"“To haggle” es “pechinchar” en portugués."],
      ["mcq","¿Cómo se dice “vendor” en portugués?",["o vendedor","o mercado de pulgas","pechinchar","a pechincha"],0,"“Vendor” es “o vendedor” en portugués."],
      ["fill","Completa: “Esta antiguidade é cara ___.”",["suficiente", "tão muito", "muito muito", "demais"],3,"“Demais” después del adjetivo expresa exceso: “cara demais”."],
      ["translate","Traduce: “I don't have enough money for this bargain.”",["Não tenho dinheiro demais para esta pechincha.", "Não tenho suficiente dinheiro para esta pechincha.", "Não tenho dinheiro suficiente para este pechincha.", "Não tenho dinheiro suficiente para esta pechincha."],3,"“Enough money” se traduce con “dinheiro suficiente”."],
      ["arrange","Ordena: [vendedor / pechincho / o / com]",["o vendedor com pechincho", "pechincho com o vendedor", "vendedor com o pechincho", "com pechincho vendedor o"],1,"Verbo + preposición + artículo + sustantivo."],
      ["speaking","Descreva em português, em 40-60 palavras, uma visita a um mercado de pulgas usando “demais/suficiente”.",[],["demais", "suficiente", "pechincha"]],
    ]
  },
  {
    id:"pt_b1_genealogy_family_tree", level:"B1", title:"A genealogia e a árvore genealógica", emoji:"🌳", xp:62,
    description:"Aprenda vocabulário de genealogia e a usar “embora” em português.",
    study: {
      vocab: [
        ["a árvore genealógica", "el árbol genealógico"],
        ["o antepassado", "el antepasado"],
        ["o descendente", "el descendiente"],
        ["a certidão de nascimento", "el certificado de nacimiento"],
        ["o bisavô/a bisavó", "el bisabuelo/la bisabuela"],
        ["rastrear as raízes", "rastrear las propias raíces"],
      ],
      grammar: [
        ["“Embora” + subjuntivo para concesión", "“Embora” + subjuntivo introduce un contraste o concesión formal, equivalente a “although/even though” en inglés.", "Embora os registros sejam antigos, rastreamos nossas raízes. / Embora nunca tenha conhecido a bisavó, ela conhece a história da família."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “ancestor” en portugués?",["o antepassado","a árvore genealógica","o descendente","a certidão de nascimento"],0,"“Ancestor” es “o antepassado” en portugués."],
      ["mcq","¿Cómo se dice “birth certificate” en portugués?",["a certidão de nascimento","a árvore genealógica","o antepassado","o descendente"],0,"“Birth certificate” es “a certidão de nascimento” en portugués."],
      ["fill","Completa: “Embora os registros ___ antigos, rastreamos nossas raízes.”",["sejam", "eram", "são", "serão"],0,"“Embora” requiere subjuntivo: “embora... sejam antigos”."],
      ["translate","Traduce: “Even though she never met her great-grandparent, she knows the family history.”",["Embora nunca tenha conhecido a bisavó, ela conheça a história da família.", "Embora nunca conheceu a bisavó, ela conhece a história da família.", "Embora nunca tenha conhecido a bisavó, ela conhece a história da família.", "Apesar nunca tenha conhecido a bisavó, ela conhece a história da família."],2,"“Even though” se traduce con “embora” + subjuntivo (pretérito perfeito composto do subjuntivo aquí): “embora... tenha conhecido”."],
      ["arrange","Ordena: [genealógica / grande / tem / árvore / uma / ela]",["grande uma genealógica árvore ela tem", "ela tem uma grande árvore genealógica", "grande árvore tem ela genealógica uma", "uma tem ela genealógica grande árvore"],1,"Sujeto + verbo + artículo + adjetivo + sustantivo compuesto."],
      ["writing","Escreva em português, em 45-65 palavras, sobre sua árvore genealógica usando “embora” pelo menos duas vezes.",[],["embora", "árvore genealógica", "antepassados"]],
    ]
  },
  {
    id:"pt_b2_meteorology_extreme_weather", level:"B2", title:"A meteorologia e os fenômenos extremos", emoji:"🌪️", xp:84,
    description:"Habla de fenómenos meteorológicos extremos usando “apesar de” en portugués.",
    study: {
      vocab: [
        ["o furacão", "el huracán"],
        ["o tornado", "el tornado"],
        ["a seca", "la sequía"],
        ["a enchente repentina", "la inundación repentina"],
        ["a velocidade do vento", "la velocidad del viento"],
        ["emitir um alerta", "emitir una alerta"],
      ],
      grammar: [
        ["“Apesar de” + sustantivo/infinitivo", "“Apesar de” + sustantivo o infinitivo (nunca cláusula conjugada completa) introduce un contraste, similar a “embora” pero con estructura distinta.", "Apesar do alerta, muitas pessoas ficaram perto da costa. / Apesar de emitir um alerta, as autoridades não conseguiram evitar os danos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “drought” en portugués?",["a velocidade do vento","o furacão","a seca","a enchente repentina"],2,"“Drought” es “a seca” en portugués."],
      ["mcq","¿Cómo se dice “flash flood” en portugués?",["o tornado","a enchente repentina","o furacão","a seca"],1,"“Flash flood” es “a enchente repentina” en portugués."],
      ["fill","Completa: “___ do alerta, muitas pessoas ficaram perto da costa.”",["Apesar", "Apesar que", "Porque", "Embora"],0,"“Apesar de” + sustantivo (con “de”, contraído en “do”): “apesar do alerta”."],
      ["translate","Traduce: “In spite of issuing a warning, officials couldn't prevent the damage.”",["Apesar de emitir um alerta, as autoridades não conseguem evitar os danos.", "Apesar emitir um alerta, as autoridades não conseguiram evitar os danos.", "Apesar de emitindo um alerta, as autoridades não conseguiram evitar os danos.", "Apesar de emitir um alerta, as autoridades não conseguiram evitar os danos."],3,"“In spite of issuing” se traduce con “apesar de emitir”, infinitivo tras la preposición."],
      ["arrange","Ordena: [aproximando / forte / furacão / um / está / se]",["um furacão forte está se aproximando", "furacão forte está se um aproximando", "furacão um se está aproximando forte", "se está um forte aproximando furacão"],0,"Artículo + adjetivo + sustantivo + verbo + pronombre + gerundio."],
      ["writing","Escreva em português, em 55-75 palavras, sobre um fenômeno meteorológico extremo usando “apesar de” pelo menos duas vezes.",[],["apesar de", "furacão", "alerta"]],
    ]
  },
  {
    id:"pt_c1_urban_sociology_gentrification", level:"C1", title:"A sociologia urbana e a gentrificação", emoji:"🏙️", xp:92,
    description:"Analiza la gentrificación usando el futuro do pretérito composto para crítica del pasado en portugués.",
    study: {
      vocab: [
        ["a gentrificação", "la gentrificación"],
        ["o deslocamento", "el desplazamiento"],
        ["a moradia acessível", "la vivienda asequible"],
        ["a renovação urbana", "la renovación urbana"],
        ["o aluguel crescente", "el aumento del alquiler"],
        ["a comunidade local", "la comunidad local"],
      ],
      grammar: [
        ["“Deveria ter/não deveria ter” para crítica del pasado", "“Deveria ter” + participio expresa que algo debió haberse hecho de manera diferente en el pasado, usado para crítica o arrepentimiento.", "A cidade deveria ter protegido a moradia acessível. / As autoridades não deveriam ter ignorado a comunidade local."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “displacement” en portugués?",["o deslocamento","a comunidade local","a moradia acessível","o aluguel crescente"],0,"“Displacement” es “o deslocamento” en portugués."],
      ["mcq","¿Cómo se dice “affordable housing” en portugués?",["a moradia acessível","a renovação urbana","o deslocamento","a gentrificação"],0,"“Affordable housing” es “a moradia acessível” en portugués."],
      ["fill","Completa: “A cidade ___ ter protegido a moradia acessível.”",["deverá", "devia", "deveria", "deve"],2,"“Deveria ter” + participio expresa crítica del pasado: “deveria ter protegido”."],
      ["translate","Traduce: “Officials shouldn't have ignored the local community's concerns.”",["As autoridades não deveriam ignorar as preocupações da comunidade local.", "As autoridades não deveriam ter ignorado as preocupações da comunidade local.", "As autoridades deveriam ter ignorado as preocupações da comunidade local.", "As autoridades não deveriam ter ignorando as preocupações da comunidade local."],1,"“Shouldn't have ignored” se traduce con “não deveriam ter ignorado”, participio tras “ter”."],
      ["arrange","Ordena: [crescente / preocupa / moradores / aluguel / o]",["crescente o preocupa aluguel moradores", "crescente aluguel o preocupa moradores", "preocupa aluguel o moradores crescente", "o aluguel crescente preocupa moradores"],3,"Artículo + sustantivo + adjetivo + verbo + sustantivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise crítica sobre a gentrificação usando “deveria ter/não deveria ter” pelo menos duas vezes.",[],["deveria ter", "não deveria ter", "gentrificação"]],
    ]
  },
  {
    id:"pt_c2_epistemology_limits_knowledge", level:"C2", title:"A epistemologia e os limites do conhecimento", emoji:"🧭", xp:100,
    description:"Analiza la epistemología usando estructuras enfáticas de secuencia inmediata en portugués.",
    study: {
      vocab: [
        ["a epistemologia", "la epistemología"],
        ["a crença verdadeira justificada", "la creencia verdadera justificada"],
        ["o ceticismo", "el escepticismo"],
        ["a certeza", "la certeza"],
        ["o conhecimento a priori", "el conocimiento a priori"],
        ["a humildade epistêmica", "la humildad epistémica"],
      ],
      grammar: [
        ["“Mal... quando” para secuencia inmediata", "“Mal... quando” expresa que una acción ocurrió inmediatamente después de otra, similar a “no sooner... than” en inglés.", "Mal os filósofos propuseram uma teoria da certeza, quando os céticos a contestaram. / Mal alguém afirma saber algo, quando a dúvida surge."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “skepticism” en portugués?",["a humildade epistêmica","o conhecimento a priori","a epistemologia","o ceticismo"],3,"“Skepticism” es “o ceticismo” en portugués."],
      ["mcq","¿Cómo se dice “epistemic humility” en portugués?",["a crença verdadeira justificada","o ceticismo","a epistemologia","a humildade epistêmica"],3,"“Epistemic humility” es “a humildade epistêmica” en portugués."],
      ["fill","Completa: “Mal os filósofos propuseram uma teoria, ___ os céticos a contestaram.”",["que", "quando", "pois", "então"],1,"“Mal... quando” forma la estructura de secuencia inmediata: “mal... quando”."],
      ["translate","Traduce con secuencia inmediata: “No sooner does one claim to know something than doubt arises.”",["Mal alguém afirma saber algo, a dúvida desaparece.", "Alguém mal afirma saber algo, a dúvida surge.", "Mal alguém afirma saber algo, a dúvida surge.", "Mal alguém afirmou saber algo, a dúvida surge."],2,"“No sooner... than” se traduce naturalmente con “mal...” en portugués."],
      ["arrange","Ordena: [verdadeira / exige / certeza / o / conhecimento]",["exige conhecimento verdadeira certeza o", "certeza o verdadeira conhecimento exige", "certeza exige o verdadeira conhecimento", "o conhecimento exige certeza verdadeira"],3,"Artículo + sustantivo + verbo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, um argumento epistemológico usando “mal... quando” pelo menos uma vez.",[],["mal", "quando", "ceticismo"]],
    ]
  },
  {
    id:"pt_a1_birdwatching", level:"A1", title:"A ornitologia e a observação de aves", emoji:"🦜", xp:38,
    description:"Aprenda vocabulário de observação de aves e a usar possessivos em português.",
    study: {
      vocab: [
        ["o binóculo", "los prismáticos"],
        ["o ninho", "el nido"],
        ["a pena", "la pluma"],
        ["o bico", "el pico"],
        ["voar", "volar"],
        ["a asa", "el ala"],
      ],
      grammar: [
        ["Possessivos (meu/teu/seu/nosso/seu)", "Los posesivos indican a quién pertenece algo y concuerdan en número y género con el sustantivo poseído.", "Meu binóculo é novo. / O pássaro usa suas asas para voar."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “nest” en portugués?",["o binóculo","voar","o ninho","a pena"],2,"“Nest” es “o ninho” en portugués."],
      ["mcq","¿Cómo se dice “beak” en portugués?",["o ninho","o binóculo","o bico","a asa"],2,"“Beak” es “o bico” en portugués."],
      ["fill","Completa: “O pássaro usa ___ asas para voar.”",["seu", "sua", "suas", "seus"],2,"“Asas” es femenino plural, así que se usa “suas”: “suas asas”."],
      ["translate","Traduce: “My binoculars are new.”",["Minha binóculo é novo.", "Meu binóculos é novo.", "Meu binóculo são novos.", "Meu binóculo é novo."],3,"“My” se traduce con “meu” ante “binóculo” (masculino singular en portugués)."],
      ["arrange","Ordena: [ninho / árvore / está / na / seu]",["seu está na árvore ninho", "na seu árvore ninho está", "seu ninho está na árvore", "árvore ninho seu está na"],2,"Posesivo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["writing","Descreva em português, em 20-30 palavras, uma ave que você viu usando possessivos (meu/seu).",[],["seu", "minhas", "asas"]],
    ]
  },
  {
    id:"pt_a2_pottery_ceramics", level:"A2", title:"A cerâmica e a olaria", emoji:"🏺", xp:48,
    description:"Aprenda vocabulário de cerâmica e a usar “quanto/quantos” em português.",
    study: {
      vocab: [
        ["a argila", "la arcilla"],
        ["o torno de oleiro", "el torno de alfarero"],
        ["o forno de cerâmica", "el horno de cerámica"],
        ["moldar", "moldear"],
        ["o esmalte", "el esmalte"],
        ["a tigela", "el cuenco"],
      ],
      grammar: [
        ["“Quanto/quantos”", "“Quanto” concuerda en género con sustantivos incontables singulares, “quantos/quantas” con sustantivos contables plurales, para preguntar cantidad.", "Quanta argila você precisa? / Quantas tigelas você fez?"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “kiln” en portugués?",["moldar","o forno de cerâmica","a argila","o esmalte"],1,"“Kiln” es “o forno de cerâmica” en portugués."],
      ["mcq","¿Cómo se dice “glaze” en portugués?",["o esmalte","o forno de cerâmica","o torno de oleiro","a argila"],0,"“Glaze” es “o esmalte” en portugués."],
      ["fill","Completa: “___ argila você precisa?”",["Quanta", "Quantas", "Quantos", "Quanto"],0,"“Argila” es femenino incontable, así que se usa “quanta”: “quanta argila”."],
      ["translate","Traduce: “How many bowls did you make?”",["Quantas tigela você fez?", "Quanto tigelas você fez?", "Quantas tigelas você fez?", "Quantas tigelas você faz?"],2,"“Tigelas” es femenino plural, así que se usa “quantas”: “quantas tigelas”."],
      ["arrange","Ordena: [oleiro / usa / o / torno / o]",["usa oleiro o torno o", "o oleiro usa o torno", "o o torno oleiro usa", "torno usa oleiro o o"],1,"Artículo + sustantivo + verbo + artículo + sustantivo."],
      ["speaking","Descreva em português, em 40-60 palavras, uma peça de cerâmica que você gostaria de fazer usando “quanto/quantos”.",[],["quanta", "quantas", "argila"]],
    ]
  },
  {
    id:"pt_b1_martial_arts_aikido", level:"B1", title:"As artes marciais e o aikido", emoji:"🥋", xp:62,
    description:"Aprenda vocabulário de artes marciais e a usar “tanto...quanto/ou...ou” em português.",
    study: {
      vocab: [
        ["as artes marciais", "las artes marciales"],
        ["a faixa preta", "el cinturón negro"],
        ["a técnica", "la técnica"],
        ["a pegada do oponente", "el agarre del oponente"],
        ["o equilíbrio", "el equilibrio"],
        ["o dojo", "el dojo"],
      ],
      grammar: [
        ["“Tanto...quanto/ou...ou”", "“Tanto... quanto” conecta dos elementos afirmando ambos; “ou... ou” presenta dos opciones alternativas.", "O aikido exige tanto força quanto equilíbrio. / Você pode praticar ou de manhã ou à noite."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “black belt” en portugués?",["o dojo","a faixa preta","o equilíbrio","as artes marciais"],1,"“Black belt” es “a faixa preta” en portugués."],
      ["mcq","¿Cómo se dice “balance” en portugués?",["o equilíbrio","a técnica","a pegada do oponente","a faixa preta"],0,"“Balance” es “o equilíbrio” en portugués."],
      ["fill","Completa: “O aikido exige ___ força quanto equilíbrio.”",["nem", "tanto", "ou", "ambos"],1,"“Tanto... quanto” conecta dos elementos: “tanto força quanto equilíbrio”."],
      ["translate","Traduce: “You can practice either in the morning or in the evening.”",["Você pode praticar tanto de manhã ou à noite.", "Você pode praticar de manhã ou ou à noite.", "Você pode praticar ou de manhã e à noite.", "Você pode praticar ou de manhã ou à noite."],3,"“Either... or” se traduce con “ou... ou” en portugués."],
      ["arrange","Ordena: [difícil / técnica / muito / esta / é]",["esta técnica é muito difícil", "muito é técnica esta difícil", "difícil esta muito é técnica", "técnica é esta muito difícil"],0,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre praticar uma arte marcial usando “tanto...quanto” ou “ou...ou” pelo menos duas vezes.",[],["tanto...quanto", "ou...ou", "aikido"]],
    ]
  },
  {
    id:"pt_b2_mycology_mushrooms", level:"B2", title:"A micologia e os cogumelos", emoji:"🍄", xp:84,
    description:"Habla de micología usando “como se” em português.",
    study: {
      vocab: [
        ["o cogumelo", "la seta"],
        ["o esporo", "la espora"],
        ["comestível", "comestible"],
        ["venenoso", "venenoso"],
        ["o fungo", "el hongo"],
        ["o micélio", "el micelio"],
      ],
      grammar: [
        ["“Como se” + subjuntivo imperfeito", "“Como se” siempre va seguido de subjuntivo imperfeito (pretérito imperfeito do subjuntivo), aunque la comparación sea sobre el presente.", "Este cogumelo parece como se fosse venenoso. / O micélio se espalha como se tivesse vontade própria."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “spore” en portugués?",["comestível","o esporo","venenoso","o micélio"],1,"“Spore” es “o esporo” en portugués."],
      ["mcq","¿Cómo se dice “mycelium” en portugués?",["o fungo","venenoso","o micélio","o cogumelo"],2,"“Mycelium” es “o micélio” en portugués."],
      ["fill","Completa: “Este cogumelo parece como se ___ venenoso.”",["fosse", "será", "seja", "é"],0,"“Como se” siempre requiere subjuntivo imperfeito: “como se fosse”."],
      ["translate","Traduce: “The mycelium spreads as though it had a mind of its own.”",["O micélio se espalha como se teria vontade própria.", "O micélio se espalha como se tivesse vontade própria.", "O micélio espalha como se tivesse vontade própria.", "O micélio se espalha como se tem vontade própria."],1,"“As though it had” se traduce con “como se tivesse”, subjuntivo imperfeito."],
      ["arrange","Ordena: [comestível / cogumelo / não / este / é]",["comestível é não cogumelo este", "este cogumelo não é comestível", "é não cogumelo comestível este", "este cogumelo não comestível é"],1,"Pronombre + sustantivo + negación + verbo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre um cogumelo interessante usando “como se” pelo menos duas vezes.",[],["como se", "cogumelo", "venenoso"]],
    ]
  },
  {
    id:"pt_c1_marine_biology_ocean_ecosystems", level:"C1", title:"A biologia marinha e os ecossistemas oceânicos", emoji:"🐠", xp:92,
    description:"Analiza los ecosistemas marinos usando “desde que/contanto que” en portugués.",
    study: {
      vocab: [
        ["o ecossistema marinho", "el ecosistema marino"],
        ["a biodiversidade", "la biodiversidad"],
        ["a cadeia alimentar", "la cadena alimentaria"],
        ["o branqueamento de corais", "el blanqueamiento de coral"],
        ["a espécie marinha", "las especies marinas"],
        ["a acidificação dos oceanos", "la acidificación del océano"],
      ],
      grammar: [
        ["“Desde que/contanto que” + subjuntivo", "“Desde que” y “contanto que” + subjuntivo expresan una condición necesaria, equivalentes a “provided that” en inglés.", "A biodiversidade marinha pode se recuperar, desde que a poluição diminua. / Os recifes sobrevivem contanto que as temperaturas permaneçam estáveis."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “biodiversity” en portugués?",["o ecossistema marinho","a espécie marinha","a biodiversidade","a cadeia alimentar"],2,"“Biodiversity” es “a biodiversidade” en portugués."],
      ["mcq","¿Cómo se dice “coral bleaching” en portugués?",["o ecossistema marinho","a biodiversidade","a espécie marinha","o branqueamento de corais"],3,"“Coral bleaching” es “o branqueamento de corais” en portugués."],
      ["fill","Completa: “Os recifes sobrevivem contanto que as temperaturas ___ estáveis.”",["permanecerão", "permanecem", "permaneçam", "permaneceram"],2,"“Contanto que” requiere subjuntivo: “contanto que... permaneçam”."],
      ["translate","Traduce: “Marine biodiversity can recover, provided that pollution decreases.”",["A biodiversidade marinha pode se recuperar, desde que a poluição diminua.", "A biodiversidade marinha pode recuperar, desde que a poluição diminua.", "A biodiversidade marinha pode se recuperar, desde a poluição diminua.", "A biodiversidade marinha pode se recuperar, desde que a poluição diminui."],0,"“Provided that” se traduce con “desde que” + subjuntivo: “desde que... diminua”."],
      ["arrange","Ordena: [alimentar / interrompe / poluição / a / cadeia / a]",["a cadeia poluição interrompe alimentar a", "interrompe poluição alimentar a cadeia a", "a poluição interrompe a cadeia alimentar", "a a cadeia alimentar interrompe poluição"],2,"Artículo + sustantivo + verbo + artículo + sustantivo compuesto."],
      ["writing","Escreva em português, em 55-75 palavras, sobre os ecossistemas marinhos usando “desde que” ou “contanto que” pelo menos duas vezes.",[],["desde que", "contanto que", "ecossistema marinho"]],
    ]
  },
  {
    id:"pt_c2_cartography_history_of_maps", level:"C2", title:"A cartografia e a história dos mapas", emoji:"🗺️", xp:100,
    description:"Analiza la cartografía usando “se não fosse por” en portugués.",
    study: {
      vocab: [
        ["o cartógrafo", "el cartógrafo"],
        ["a projeção", "la proyección"],
        ["o território inexplorado", "el territorio inexplorado"],
        ["a escala", "la escala"],
        ["o instrumento de navegação", "el instrumento de navegación"],
        ["cartografar", "cartografiar"],
      ],
      grammar: [
        ["“Se não fosse por” para condición formal", "“Se não fosse por” + sustantivo expresa una condición hipotética muy formal, equivalente a “were it not for” en inglés.", "Se não fosse pelos primeiros cartógrafos, a exploração teria sido impossível. / Se não fosse pelas imagens de satélite, os mapas modernos seriam muito menos precisos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cartographer” en portugués?",["o cartógrafo","cartografar","a projeção","a escala"],0,"“Cartographer” es “o cartógrafo” en portugués."],
      ["mcq","¿Cómo se dice “uncharted territory” en portugués?",["a escala","o território inexplorado","o cartógrafo","a projeção"],1,"“Uncharted territory” es “o território inexplorado” en portugués."],
      ["fill","Completa: “Se não ___ por os primeiros cartógrafos, a exploração teria sido impossível.”",["fosse", "for", "seria", "foi"],0,"“Se não fosse por” es la estructura fija: “se não fosse por”."],
      ["translate","Traduce con estructura formal: “Were it not for early cartographers, exploration would have been impossible.”",["Se não fosse pelos primeiros cartógrafos, a exploração foi impossível.", "Se não fosse os primeiros cartógrafos, a exploração teria sido impossível.", "Se não fosse pelos primeiros cartógrafos, a exploração seria impossível.", "Se não fosse pelos primeiros cartógrafos, a exploração teria sido impossível."],3,"“Were it not for” se traduce con “se não fosse por”, seguido de futuro do pretérito composto en la consecuencia."],
      ["arrange","Ordena: [precisa / esta / muito / projeção / é]",["esta é muito precisa projeção", "esta projeção é muito precisa", "é muito esta precisa projeção", "muito precisa é projeção esta"],1,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, um argumento sobre a história da cartografia usando “se não fosse por” pelo menos uma vez.",[],["se não fosse por", "cartógrafo", "projeção"]],
    ]
  },
  {
    id:"pt_a1_tailoring_sewing", level:"A1", title:"A alfaiataria e a costura", emoji:"🧵", xp:38,
    description:"Aprenda vocabulário de costura e a usar verbos reflexivos básicos em português.",
    study: {
      vocab: [
        ["a agulha", "la aguja"],
        ["a linha", "el hilo"],
        ["costurar", "coser"],
        ["experimentar (roupa)", "probarse"],
        ["o botão", "el botón"],
        ["o alfaiate", "el sastre"],
      ],
      grammar: [
        ["Verbos reflexivos básicos", "Los verbos reflexivos en portugués usan “me/te/se/nos/se” antes o después del verbo; “experimentar” ropa NO es reflexivo en portugués, a diferencia del español.", "Eu experimento o casaco. / Ela costura o botão sozinha."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “needle” en portugués?",["a linha","o botão","experimentar (roupa)","a agulha"],3,"“Needle” es “a agulha” en portugués."],
      ["mcq","¿Cómo se dice “thread” en portugués?",["o botão","a agulha","costurar","a linha"],3,"“Thread” es “a linha” en portugués."],
      ["fill","Completa: “Eu ___ o casaco.”",["experimenta", "me experimento", "experimento", "experimentas"],2,"“Experimentar” ropa no lleva pronombre reflexivo en portugués: “eu experimento”."],
      ["translate","Traduce: “I try on the jacket.”",["Eu experimento a casaco.", "Eu experimento-me o casaco.", "Eu me experimento o casaco.", "Eu experimento o casaco."],3,"“Try on” se traduce con “experimentar”, sin pronombre reflexivo en portugués."],
      ["arrange","Ordena: [botão / costura / alfaiate / o / o]",["o o alfaiate costura botão", "botão alfaiate o o costura", "o o botão costura alfaiate", "o alfaiate costura o botão"],3,"Artículo + sustantivo + verbo + artículo + sustantivo."],
      ["writing","Descreva em português, em 20-30 palavras, como você experimenta roupas novas usando “experimentar”.",[],["experimento", "agulha", "linha"]],
    ]
  },
  {
    id:"pt_a2_rock_climbing_mountaineering", level:"A2", title:"A escalada e o montanhismo", emoji:"🧗", xp:48,
    description:"Aprenda vocabulário de escalada e a usar o pretérito perfeito composto em português.",
    study: {
      vocab: [
        ["a corda", "la cuerda"],
        ["o arnês", "el arnés"],
        ["o cume", "la cima"],
        ["o penhasco", "el acantilado"],
        ["escalar", "escalar"],
        ["a pegada", "el agarre"],
      ],
      grammar: [
        ["Pretérito perfeito composto com duração", "El pretérito perfeito composto (“temos/tem estado” + gerundio) describe una acción que comenzó en el pasado y sigue ocurriendo, con énfasis en su duración repetida.", "Temos estado escalando há três horas. / Ela tem treinado para o cume o ano todo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “harness” en portugués?",["o arnês","a corda","escalar","a pegada"],0,"“Harness” es “o arnês” en portugués."],
      ["mcq","¿Cómo se dice “cliff” en portugués?",["o penhasco","a corda","o arnês","o cume"],0,"“Cliff” es “o penhasco” en portugués."],
      ["fill","Completa: “Temos ___ escalando há três horas.”",["estar", "esteve", "estando", "estado"],3,"“Temos estado” + gerundio expresa duración: “temos estado escalando”."],
      ["translate","Traduce: “She has been training for the summit all year.”",["Ela treinou para o cume o ano todo.", "Ela tem treinar para o cume o ano todo.", "Ela têm treinado para o cume o ano todo.", "Ela tem treinado para o cume o ano todo."],3,"“Has been training” se traduce con “tem treinado”, pretérito perfeito composto."],
      ["arrange","Ordena: [nova / precisa / escalador / de / uma / corda / o]",["escalador corda nova uma o precisa de", "de corda escalador nova precisa o uma", "o escalador precisa de uma corda nova", "precisa de nova uma escalador corda o"],2,"Artículo + sustantivo + verbo + preposición + artículo + sustantivo + adjetivo."],
      ["speaking","Descreva em português, em 40-60 palavras, uma experiência de escalada usando “temos/tem estado + gerúndio”.",[],["temos estado", "escalando", "cume"]],
    ]
  },
  {
    id:"pt_b1_coin_collecting_numismatics", level:"B1", title:"A numismática e o colecionismo de moedas", emoji:"🪙", xp:62,
    description:"Aprenda vocabulário de numismática e a usar “acostumar-se a” em português.",
    study: {
      vocab: [
        ["a moeda", "la moneda"],
        ["a casa da moeda", "la casa de la moneda"],
        ["a moeda rara", "la moneda rara"],
        ["a coleção", "la colección"],
        ["a moeda/divisa", "la divisa"],
        ["avaliar", "tasar"],
      ],
      grammar: [
        ["“Estar acostumado a/acostumar-se a”", "“Estar acostumado a” + infinitivo expresa un hábito ya establecido; “acostumar-se a” + infinitivo expresa el proceso de adaptarse.", "Estou acostumado a avaliar moedas antigas. / Levou tempo para se acostumar a colecionar divisas raras."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “mint” en portugués?",["a casa da moeda","a moeda/divisa","a coleção","a moeda"],0,"“Mint” es “a casa da moeda” en portugués."],
      ["mcq","¿Cómo se dice “to appraise” en portugués?",["a moeda rara","a moeda/divisa","avaliar","a coleção"],2,"“To appraise” es “avaliar” en portugués."],
      ["fill","Completa: “Estou acostumado a ___ moedas antigas.”",["avaliar", "avaliando", "avaliado", "avalie"],0,"“Acostumado a” + infinitivo: “acostumado a avaliar”."],
      ["translate","Traduce: “It took time to get used to collecting rare currency.”",["Levou tempo para se acostumar colecionar divisas raras.", "Levou tempo para se acostumar a colecionar divisas raras.", "Levou tempo para acostumar a colecionar divisas raras.", "Levou tempo para se acostumar a colecionando divisas raras."],1,"“Get used to collecting” se traduce con “se acostumar a colecionar”, infinitivo tras “a”."],
      ["arrange","Ordena: [rara / tem / uma / coleção / ela / de moedas]",["ela tem de rara uma coleção moedas", "ela coleção de moedas uma rara tem", "de moedas uma tem coleção rara ela", "ela tem uma coleção de moedas rara"],3,"Sujeto + verbo + artículo + sustantivo + preposición + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre colecionar moedas usando “estar acostumado a/acostumar-se a” pelo menos duas vezes.",[],["acostumado a", "acostumar-se a", "coleção de moedas"]],
    ]
  },
  {
    id:"pt_b2_seismology_earthquakes", level:"B2", title:"A sismologia e os terremotos", emoji:"🌋", xp:84,
    description:"Habla de sismología usando preguntas indirectas en portugués.",
    study: {
      vocab: [
        ["o terremoto", "el terremoto"],
        ["o sismógrafo", "el sismógrafo"],
        ["o epicentro", "el epicentro"],
        ["a magnitude", "la magnitud"],
        ["a placa tectônica", "la placa tectónica"],
        ["a réplica", "la réplica (sísmica)"],
      ],
      grammar: [
        ["Perguntas indiretas", "Las preguntas indirectas (“me pergunto se...”, “você sabe se...?”) mantienen el orden normal de la oración, sin inversión.", "Me pergunto se o epicentro estava perto da cidade. / Você sabe qual era a magnitude?"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “epicenter” en portugués?",["o epicentro","o sismógrafo","o terremoto","a réplica"],0,"“Epicenter” es “o epicentro” en portugués."],
      ["mcq","¿Cómo se dice “tectonic plate” en portugués?",["o terremoto","o sismógrafo","o epicentro","a placa tectônica"],3,"“Tectonic plate” es “a placa tectônica” en portugués."],
      ["fill","Completa: “Você sabe qual ___ a magnitude?”",["será", "era", "seja", "é"],1,"La pregunta indirecta sobre un hecho pasado usa pretérito imperfeito: “qual era”."],
      ["translate","Traduce con pregunta indirecta: “I wonder if the epicenter was near the city.”",["Me pergunto se estava o epicentro perto da cidade.", "Me pergunto que o epicentro estava perto da cidade.", "Me pergunto se o epicentro está perto da cidade.", "Me pergunto se o epicentro estava perto da cidade."],3,"La pregunta indirecta mantiene el orden normal: “se o epicentro estava”, sin inversión."],
      ["arrange","Ordena: [pequena / sentimos / réplica / uma]",["réplica sentimos pequena uma", "sentimos uma réplica pequena", "uma pequena réplica sentimos", "uma réplica pequena sentimos"],1,"Verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre um terremoto usando pelo menos duas perguntas indiretas (“me pergunto se...”, “você sabe se...?”).",[],["me pergunto se", "você sabe se", "terremoto"]],
    ]
  },
  {
    id:"pt_c1_paleography_ancient_manuscripts", level:"C1", title:"A paleografia e os manuscritos antigos", emoji:"📜", xp:92,
    description:"Analiza la paleografía usando “quem quer que/o que quer que” en portugués.",
    study: {
      vocab: [
        ["o manuscrito", "el manuscrito"],
        ["o escriba", "el escriba"],
        ["o pergaminho", "el pergamino"],
        ["o texto iluminado", "el texto iluminado"],
        ["o estilo caligráfico", "el estilo caligráfico"],
        ["decifrar", "descifrar"],
      ],
      grammar: [
        ["“Quem quer que/o que quer que”", "“Quem quer que” equivale a “quienquiera que”, y “o que quer que” equivale a “lo que sea que”, ambos con subjuntivo.", "Quem quer que decifre este manuscrito fará história. / O que quer que o escriba pretendesse, o significado hoje está perdido."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “scribe” en portugués?",["o texto iluminado","o escriba","decifrar","o estilo caligráfico"],1,"“Scribe” es “o escriba” en portugués."],
      ["mcq","¿Cómo se dice “parchment” en portugués?",["o texto iluminado","o manuscrito","decifrar","o pergaminho"],3,"“Parchment” es “o pergaminho” en portugués."],
      ["fill","Completa: “___ decifre este manuscrito fará história.”",["Quem quer que", "Qualquer que", "O que quer que", "Quem"],0,"“Quem quer que” se refiere a una persona no especificada: “quem quer que decifre”."],
      ["translate","Traduce con esta estructura: “Whatever the scribe intended, the meaning is now lost.”",["O que quer que o escriba pretendesse, o significado hoje está perdendo.", "O que quer que o escriba pretendesse, o significado hoje está perdido.", "O que quer que o escriba pretendia, o significado hoje está perdido.", "O que o escriba pretendesse, o significado hoje está perdido."],1,"“Whatever” se traduce con “o que quer que” + subjuntivo: “pretendesse”."],
      ["arrange","Ordena: [lindamente / está / manuscrito / iluminado / este]",["manuscrito este lindamente está iluminado", "está manuscrito este iluminado lindamente", "iluminado está lindamente manuscrito este", "este manuscrito está lindamente iluminado"],3,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre um manuscrito antigo usando “quem quer que/o que quer que” pelo menos duas vezes.",[],["quem quer que", "o que quer que", "manuscrito"]],
    ]
  },
  {
    id:"pt_c2_global_supply_chain_logistics", level:"C2", title:"A logística e a cadeia de suprimentos global", emoji:"📦", xp:100,
    description:"Analiza la cadena de suministro usando estructuras enfáticas de sorpresa en portugués.",
    study: {
      vocab: [
        ["a cadeia de suprimentos", "la cadena de suministro"],
        ["o gargalo", "el cuello de botella"],
        ["o frete/a carga", "la carga/el flete"],
        ["o armazém", "el almacén"],
        ["a interrupção logística", "la interrupción logística"],
        ["a entrega just-in-time", "la entrega justo a tiempo"],
      ],
      grammar: [
        ["Estruturas enfáticas de surpresa (poucos imaginavam/ninguém esperava)", "“Poucos imaginavam” o “ninguém esperava” al inicio enfatizan que algo fue una sorpresa total, equivalente a “little did... know” en inglés.", "Poucas empresas imaginavam o quão frágil era a cadeia de suprimentos. / Ninguém esperava uma interrupção logística tão grave."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “bottleneck” en portugués?",["a cadeia de suprimentos","o frete/a carga","o armazém","o gargalo"],3,"“Bottleneck” es “o gargalo” en portugués."],
      ["mcq","¿Cómo se dice “just-in-time delivery” en portugués?",["a cadeia de suprimentos","o armazém","o frete/a carga","a entrega just-in-time"],3,"“Just-in-time delivery” es “a entrega just-in-time” en portugués."],
      ["fill","Completa: “Poucas empresas ___ o quão frágil era a cadeia.”",["imaginam", "imaginavam", "imaginarão", "imaginaram"],1,"“Poucas... imaginavam” usa pretérito imperfeito para describir la falta de anticipación."],
      ["translate","Traduce con estructura enfática: “Little did anyone expect such a severe logistics disruption.”",["Poucos esperavam ninguém uma interrupção logística tão grave.", "Ninguém esperava uma interrupção logística tão grave.", "Ninguém esperou uma interrupção logística tão severa.", "Alguém esperava uma interrupção logística tão grave."],1,"“Little did anyone expect” se traduce naturalmente con “ninguém esperava” en portugués."],
      ["arrange","Ordena: [armazena / mercadorias / o / armazém]",["o mercadorias armazena armazém", "mercadorias armazém o armazena", "o armazena armazém mercadorias", "o armazém armazena mercadorias"],3,"Artículo + sustantivo + verbo + sustantivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise sobre a cadeia de suprimentos global usando “poucos imaginavam/ninguém esperava” pelo menos uma vez.",[],["poucos imaginavam", "cadeia de suprimentos", "gargalo"]],
    ]
  },
  {
    id:"pt_a1_ham_radio_telecommunications", level:"A1", title:"O radioamadorismo e as telecomunicações", emoji:"📻", xp:38,
    description:"Aprenda vocabulário de radioamadorismo e a usar “há” em português.",
    study: {
      vocab: [
        ["o sinal de rádio", "la señal de radio"],
        ["a antena", "la antena"],
        ["a frequência", "la frecuencia"],
        ["o microfone", "el micrófono"],
        ["transmitir", "transmitir"],
        ["a interferência", "la estática (interferencia)"],
      ],
      grammar: [
        ["“Há” para indicar existência", "“Há” es invariable en portugués (no cambia entre singular y plural) y se usa para indicar la existencia de algo.", "Há muita interferência nesta frequência. / Há duas antenas no telhado."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “antenna” en portugués?",["a interferência","o sinal de rádio","a antena","transmitir"],2,"“Antenna” es “a antena” en portugués."],
      ["mcq","¿Cómo se dice “static” en portugués?",["o sinal de rádio","o microfone","a antena","a interferência"],3,"“Static” es “a interferência” en portugués."],
      ["fill","Completa: “___ duas antenas no telhado.”",["Hão", "Há", "São", "Está"],1,"“Há” es invariable, tanto para singular como plural: “há duas antenas”."],
      ["translate","Traduce: “There is a lot of static on this frequency.”",["Há muitas interferência nesta frequência.", "É muita interferência nesta frequência.", "Há muito interferência nesta frequência.", "Há muita interferência nesta frequência."],3,"“There is a lot of static” se traduce con “há muita interferência”."],
      ["arrange","Ordena: [fraco / este / sinal / é]",["fraco este sinal é", "sinal este é fraco", "este sinal é fraco", "este é fraco sinal"],2,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Descreva em português, em 20-30 palavras, um equipamento de radioamadorismo usando “há”.",[],["há", "antena", "frequência"]],
    ]
  },
  {
    id:"pt_a2_astrology_horoscopes", level:"A2", title:"A astrologia e os horóscopos", emoji:"🔮", xp:48,
    description:"Aprenda vocabulário de astrologia e a usar o futuro do presente para previsões em português.",
    study: {
      vocab: [
        ["o horóscopo", "el horóscopo"],
        ["o signo do zodíaco", "el signo zodiacal"],
        ["o vidente/a vidente", "el adivino"],
        ["o mapa astral", "la carta astral"],
        ["a previsão", "la predicción"],
        ["o destino", "el destino"],
      ],
      grammar: [
        ["Futuro do presente para previsões", "El futuro do presente se usa para hacer predicciones sobre el futuro basadas en opinión o creencia, no en evidencia presente.", "Este horóscopo diz que você terá uma boa semana. / A vidente acha que ela encontrará o amor em breve."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “zodiac sign” en portugués?",["o vidente/a vidente","o destino","o signo do zodíaco","a previsão"],2,"“Zodiac sign” es “o signo do zodíaco” en portugués."],
      ["mcq","¿Cómo se dice “destiny” en portugués?",["o destino","o mapa astral","a previsão","o signo do zodíaco"],0,"“Destiny” es “o destino” en portugués."],
      ["fill","Completa: “Este horóscopo diz que você ___ uma boa semana.”",["tem", "terá", "tinha", "teria"],1,"El futuro do presente de “ter” en segunda persona (você) es “terá”."],
      ["translate","Traduce: “The fortune teller thinks she will find love soon.”",["A vidente acha que ela encontraria o amor em breve.", "A vidente acha que ela encontra o amor em breve.", "A vidente acha que ela encontrará o amor em breve.", "A vidente acha que ela vai encontrar o amor em breve já."],2,"“Will find” se traduce con futuro do presente: “encontrará”."],
      ["arrange","Ordena: [astral / interessante / este / mapa / é]",["este mapa astral é interessante", "este astral mapa interessante é", "mapa astral este interessante é", "é interessante mapa astral este"],0,"Pronombre + sustantivo compuesto + verbo + adjetivo."],
      ["speaking","Descreva em português, em 40-60 palavras, seu horóscopo desta semana usando o futuro do presente para previsões.",[],["futuro", "horóscopo", "previsão"]],
    ]
  },
  {
    id:"pt_b1_skydiving_extreme_sports", level:"B1", title:"O paraquedismo e os esportes radicais", emoji:"🪂", xp:62,
    description:"Aprenda vocabulário de esportes radicais e a usar “conseguir” em português.",
    study: {
      vocab: [
        ["o paraquedas", "el paracaídas"],
        ["a queda livre", "la caída libre"],
        ["a descarga de adrenalina", "la subida de adrenalina"],
        ["saltar", "saltar"],
        ["o bungee jump", "el puenting"],
        ["o esporte radical", "el deporte extremo"],
      ],
      grammar: [
        ["“Conseguir” + infinitivo", "“Conseguir” + infinitivo expresa que alguien logró hacer algo difícil.", "Ela conseguiu abrir o paraquedas a tempo. / Ele conseguiu superar seu medo de altura."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “free fall” en portugués?",["a queda livre","o bungee jump","saltar","o paraquedas"],0,"“Free fall” es “a queda livre” en portugués."],
      ["mcq","¿Cómo se dice “adrenaline rush” en portugués?",["o esporte radical","a descarga de adrenalina","a queda livre","o paraquedas"],1,"“Adrenaline rush” es “a descarga de adrenalina” en portugués."],
      ["fill","Completa: “Ela conseguiu ___ o paraquedas a tempo.”",["aberto", "abrindo", "abre", "abrir"],3,"“Conseguir” + infinitivo: “conseguiu abrir”."],
      ["translate","Traduce: “He succeeded in overcoming his fear of heights.”",["Ele conseguiu superar seu medo das alturas já.", "Ele conseguiu superando seu medo de altura.", "Ele consegue superar seu medo de altura.", "Ele conseguiu superar seu medo de altura."],3,"“Succeed in overcoming” se traduce con “conseguir” + infinitivo: “conseguiu superar”."],
      ["arrange","Ordena: [emocionante / este / muito / esporte / é]",["muito este emocionante é esporte", "emocionante este é esporte muito", "este esporte é muito emocionante", "este esporte emocionante é muito"],2,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre um esporte radical usando “conseguir” pelo menos duas vezes.",[],["conseguiu", "esporte radical", "paraquedas"]],
    ]
  },
  {
    id:"pt_b2_entomology_insects", level:"B2", title:"A entomologia e os insetos", emoji:"🐛", xp:84,
    description:"Habla de entomología usando “além de/assim como” en portugués.",
    study: {
      vocab: [
        ["o inseto", "el insecto"],
        ["o exoesqueleto", "el exoesqueleto"],
        ["a metamorfose", "la metamorfosis"],
        ["a antena (inseto)", "la antena (insecto)"],
        ["a larva", "la larva"],
        ["o polinizador", "el polinizador"],
      ],
      grammar: [
        ["“Além de/assim como”", "“Além de” + infinitivo o sustantivo y “assim como” añaden información extra, similares a “besides” en inglés.", "Além de polinizar flores, as abelhas produzem mel. / Os besouros, assim como as borboletas, passam por metamorfose."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “exoskeleton” en portugués?",["a antena (inseto)","o exoesqueleto","o inseto","a larva"],1,"“Exoskeleton” es “o exoesqueleto” en portugués."],
      ["mcq","¿Cómo se dice “metamorphosis” en portugués?",["a larva","a metamorfose","a antena (inseto)","o inseto"],1,"“Metamorphosis” es “a metamorfose” en portugués."],
      ["fill","Completa: “___ polinizar flores, as abelhas produzem mel.”",["À parte", "Além que", "Assim como", "Além de"],3,"“Além de” + infinitivo introduce información extra: “além de polinizar”."],
      ["translate","Traduce: “Beetles, as well as butterflies, undergo metamorphosis.”",["Os besouros, assim como as borboletas, passam por metamorfose.", "Os besouros assim como as borboletas passam metamorfose.", "Os besouros, além as borboletas, passam por metamorfose.", "Os besouros, assim como as borboletas, passa por metamorfose."],0,"“As well as” se traduce con “assim como” en este contexto."],
      ["arrange","Ordena: [polinizadores / importantes / são / abelhas / as]",["polinizadores importantes são as abelhas", "as abelhas são polinizadores importantes", "as são abelhas polinizadores importantes", "são abelhas importantes as polinizadores"],1,"Artículo + sustantivo + verbo + sustantivo + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre os insetos usando “além de” ou “assim como” pelo menos duas vezes.",[],["além de", "assim como", "inseto"]],
    ]
  },
  {
    id:"pt_c1_intellectual_property_law", level:"C1", title:"O direito de propriedade intelectual", emoji:"©️", xp:92,
    description:"Analiza la propiedad intelectual usando “não obstante” en registro legal formal en portugués.",
    study: {
      vocab: [
        ["o direito autoral", "los derechos de autor"],
        ["a patente", "la patente"],
        ["a marca registrada", "la marca registrada"],
        ["a infração", "la infracción"],
        ["o acordo de licenciamento", "el acuerdo de licencia"],
        ["a propriedade intelectual", "la propiedad intelectual"],
      ],
      grammar: [
        ["“Não obstante” para concesión legal formal", "“Não obstante” (registro muy formal/legal) expresa una concesión, equivalente a “apesar de” pero típico de textos jurídicos.", "Não obstante a patente, a empresa continuou a produção. / A marca registrada permanece válida, não obstante a disputa."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “infringement” en portugués?",["o direito autoral","o acordo de licenciamento","a infração","a marca registrada"],2,"“Infringement” es “a infração” en portugués."],
      ["mcq","¿Cómo se dice “licensing agreement” en portugués?",["a infração","a patente","o acordo de licenciamento","a propriedade intelectual"],2,"“Licensing agreement” es “o acordo de licenciamento” en portugués."],
      ["fill","Completa: “___ a patente, a empresa continuou a produção.”",["No entanto de", "Não obstante", "Não obstante de", "Apesar"],1,"“Não obstante” + sustantivo (sin “de” en este uso formal): “não obstante a patente”."],
      ["translate","Traduce con registro legal formal: “The trademark remains valid, notwithstanding the dispute.”",["A marca registrada permanecia válida, não obstante a disputa.", "A marca registrada permanece válida, não obstante a disputa.", "A marca registrada permanece válida, não obstante da disputa.", "A marca registrada permanece válida, não obstante a disputa por isso."],1,"“Notwithstanding” en este contexto formal se traduce con “não obstante”."],
      ["arrange","Ordena: [infração / alegou / empresa / a]",["a empresa alegou infração", "alegou a infração empresa", "infração alegou a empresa", "a alegou infração empresa"],0,"Artículo + sustantivo + verbo + sustantivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise sobre propriedade intelectual usando “não obstante” pelo menos duas vezes.",[],["não obstante", "patente", "direito autoral"]],
    ]
  },
  {
    id:"pt_c2_geology_minerals", level:"C2", title:"A geologia e os minerais", emoji:"💎", xp:100,
    description:"Analiza la geología usando “longe de + infinitivo” en portugués.",
    study: {
      vocab: [
        ["o depósito mineral", "el yacimiento mineral"],
        ["a estrutura cristalina", "la estructura cristalina"],
        ["a rocha sedimentar", "la roca sedimentaria"],
        ["o deslocamento tectônico", "el desplazamiento tectónico"],
        ["a rocha ígnea", "la roca ígnea"],
        ["a composição mineral", "la composición mineral"],
      ],
      grammar: [
        ["“Longe de + infinitivo” para concesión enfática", "“Longe de” + infinitivo expresa que algo es completamente lo contrario de lo esperado, un recurso enfático de registro formal.", "Longe de ser estável, esta formação rochosa muda constantemente. / Longe de resolver o debate, a descoberta levantou novas perguntas."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “crystalline structure” en portugués?",["a estrutura cristalina","a composição mineral","a rocha ígnea","a rocha sedimentar"],0,"“Crystalline structure” es “a estrutura cristalina” en portugués."],
      ["mcq","¿Cómo se dice “sedimentary rock” en portugués?",["o deslocamento tectônico","a rocha sedimentar","o depósito mineral","a estrutura cristalina"],1,"“Sedimentary rock” es “a rocha sedimentar” en portugués."],
      ["fill","Completa: “Longe de ___ estável, esta formação rochosa muda constantemente.”",["sendo", "seja", "é", "ser"],3,"“Longe de” + infinitivo: “longe de ser estável”."],
      ["translate","Traduce con estructura enfática: “Far from settling the debate, the discovery raised new questions.”",["Longe de resolver o debate, a descoberta levanta novas perguntas.", "Longe de resolver o debate, a descoberta levantou novas perguntas.", "Longe de resolver o debate, a descoberta levantou velhas perguntas.", "Longe resolver o debate, a descoberta levantou novas perguntas."],1,"“Far from settling” se traduce con “longe de resolver”, infinitivo tras “de”."],
      ["arrange","Ordena: [raro / este / mineral / muito / é]",["este mineral é muito raro", "raro muito este é mineral", "é raro mineral este muito", "este é raro mineral muito"],0,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise sobre geologia usando “longe de + infinitivo” pelo menos uma vez.",[],["longe de", "depósito mineral", "rocha sedimentar"]],
    ]
  },
  {
    id:"pt_a1_coffee_tasting_cafes", level:"A1", title:"A degustação de café e as cafeterias", emoji:"☕", xp:38,
    description:"Aprenda vocabulário de café e a usar “gostaria” para pedidos educados em português.",
    study: {
      vocab: [
        ["o grão de café", "el grano de café"],
        ["a torra", "el tueste"],
        ["o aroma", "el aroma"],
        ["o barista", "el barista"],
        ["preparar (café)", "preparar (café)"],
        ["a xícara", "la taza"],
      ],
      grammar: [
        ["“Gostaria” para pedidos educados", "“Gostaria” (futuro do pretérito de “gostar”) es una forma cortés de pedir algo, más formal que “quero”.", "Eu gostaria de uma xícara de café, por favor. / Ela gostaria de experimentar a torra escura."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “roast” en portugués?",["o aroma","o grão de café","a torra","preparar (café)"],2,"“Roast” es “a torra” en portugués."],
      ["mcq","¿Cómo se dice “barista” en portugués?",["o barista","a torra","preparar (café)","o aroma"],0,"“Barista” es “o barista” en portugués."],
      ["fill","Completa: “Eu ___ de uma xícara de café, por favor.”",["gosto", "gostasse", "gostaria", "gostava"],2,"“Gostaria” es la forma cortés de pedir: “gostaria de”."],
      ["translate","Traduce: “She would like to try the dark roast.”",["Ela gostaria de experimentando a torra escura.", "Ela gostaria de experimentar a torra clara.", "Ela gostaria de experimentar a torra escura.", "Ela quer experimentar a torra escura por favor."],2,"“Would like to try” se traduce con “gostaria de experimentar”."],
      ["arrange","Ordena: [forte / este / café / cheira]",["este café cheira forte", "cheira café este forte", "cheira café forte este", "forte café este cheira"],0,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Descreva em português, em 20-30 palavras, seu pedido ideal em uma cafeteria usando “gostaria”.",[],["gostaria", "café", "barista"]],
    ]
  },
  {
    id:"pt_a2_antique_furniture_restoration", level:"A2", title:"A restauração de móveis antigos", emoji:"🪑", xp:48,
    description:"Aprenda vocabulário de restauração de móveis e a usar “deixar alguém fazer algo” em português.",
    study: {
      vocab: [
        ["o móvel antigo", "los muebles antiguos"],
        ["o verniz", "el barniz"],
        ["a lixa", "el papel de lija"],
        ["restaurar", "restaurar"],
        ["o veio da madeira", "la veta de la madera"],
        ["a oficina", "el taller"],
      ],
      grammar: [
        ["“Deixar alguém fazer algo”", "“Deixar” + persona + infinitivo expresa permitir que alguien haga algo.", "Deixe o verniz secar durante a noite. / Ela deixa o assistente lixar o móvel."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “varnish” en portugués?",["o verniz","o móvel antigo","a oficina","a lixa"],0,"“Varnish” es “o verniz” en portugués."],
      ["mcq","¿Cómo se dice “sandpaper” en portugués?",["a lixa","o verniz","restaurar","o móvel antigo"],0,"“Sandpaper” es “a lixa” en portugués."],
      ["fill","Completa: “Ela deixa o assistente ___ o móvel.”",["lixa", "lixando", "lixar", "lixado"],2,"“Deixar” + persona + infinitivo directo: “deixa... lixar”."],
      ["translate","Traduce: “Let the varnish dry overnight.”",["Deixe o verniz secando durante a noite.", "Deixe o verniz secar durante a noite.", "Deixa o verniz secar durante a noite ele.", "Deixe o verniz seca durante a noite."],1,"“Let... dry” se traduce con “deixe... secar”, infinitivo directo tras “deixar”."],
      ["arrange","Ordena: [muito / é / móvel / antigo / este]",["muito é móvel este antigo", "móvel antigo é este muito", "antigo muito é móvel este", "este móvel é muito antigo"],3,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["speaking","Descreva em português, em 40-60 palavras, um projeto de restauração de móveis usando “deixar + pessoa + infinitivo”.",[],["deixa", "restaurar", "verniz"]],
    ]
  },
  {
    id:"pt_b1_lexicography_dictionaries", level:"B1", title:"A lexicografia e os dicionários", emoji:"📖", xp:62,
    description:"Aprenda vocabulário de lexicografia e a usar “em vez de” em português.",
    study: {
      vocab: [
        ["o verbete de dicionário", "la entrada de diccionario"],
        ["a definição", "la definición"],
        ["a etimologia", "la etimología"],
        ["o lema", "el lema"],
        ["o sinônimo", "el sinónimo"],
        ["o exemplo de uso", "el ejemplo de uso"],
      ],
      grammar: [
        ["“Em vez de” para preferência", "“Em vez de” + sustantivo/infinitivo expresa preferencia por una opción sobre otra.", "Ela escolheu uma definição moderna em vez da antiga. / Em vez de adivinhar, procure a etimologia."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “etymology” en portugués?",["a etimologia","o sinônimo","a definição","o lema"],0,"“Etymology” es “a etimologia” en portugués."],
      ["mcq","¿Cómo se dice “headword” en portugués?",["o verbete de dicionário","o sinônimo","o lema","o exemplo de uso"],2,"“Headword” es “o lema” en portugués."],
      ["fill","Completa: “___ adivinhar, procure a etimologia.”",["Em lugar", "Em vez de", "Mais que", "Melhor que"],1,"“Em vez de” + infinitivo introduce la alternativa evitada: “em vez de adivinhar”."],
      ["translate","Traduce: “Rather than guessing, look up the etymology.”",["Em vez adivinhar, procure a etimologia.", "Em vez de adivinhando, procure a etimologia.", "Em vez de adivinhar, procurou a etimologia.", "Em vez de adivinhar, procure a etimologia."],3,"“Rather than guessing” se traduce con “em vez de adivinhar”, infinitivo tras “de”."],
      ["arrange","Ordena: [muito / exemplo / útil / este / é]",["este exemplo é muito útil", "é útil muito este exemplo", "é este exemplo útil muito", "exemplo este útil é muito"],0,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 45-65 palavras, sobre o uso de dicionários usando “em vez de” pelo menos duas vezes.",[],["em vez de", "dicionário", "definição"]],
    ]
  },
  {
    id:"pt_b2_medical_radiology_imaging", level:"B2", title:"A radiologia médica e o diagnóstico por imagem", emoji:"🩻", xp:84,
    description:"Habla de radiología usando “caso” para precaución en portugués.",
    study: {
      vocab: [
        ["a radiografia", "la radiografía"],
        ["a ressonância magnética", "la resonancia magnética"],
        ["o radiologista", "el radiólogo"],
        ["o contraste", "el contraste (medio de contraste)"],
        ["o diagnóstico", "el diagnóstico"],
        ["a exposição à radiação", "la exposición a la radiación"],
      ],
      grammar: [
        ["“Caso” + subjuntivo para precaução", "“Caso” + subjuntivo presente expresa una precaución tomada para un posible evento futuro, sin implicar condición estricta.", "O radiologista pediu uma ressonância caso a radiografia não mostrasse algo. / Traga seus exames anteriores caso o médico precise deles."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “MRI scan” en portugués?",["a radiografia","o radiologista","a ressonância magnética","o diagnóstico"],2,"“MRI scan” es “a ressonância magnética” en portugués."],
      ["mcq","¿Cómo se dice “contrast dye” en portugués?",["o contraste","a exposição à radiação","a ressonância magnética","o diagnóstico"],0,"“Contrast dye” es “o contraste” en portugués."],
      ["fill","Completa: “Traga seus exames anteriores caso o médico ___ deles.”",["precisou", "precisará", "precise", "precisa"],2,"“Caso” requiere subjuntivo presente: “caso... precise”."],
      ["translate","Traduce: “The radiologist ordered an MRI in case the X-ray missed something.”",["O radiologista pediu uma ressonância caso a radiografia não mostrasse algo.", "O radiologista pediu uma ressonância se a radiografia não mostrasse algo.", "O radiologista pede uma ressonância caso a radiografia não mostrasse algo.", "O radiologista pediu uma ressonância caso a radiografia não mostrava algo."],0,"“In case” se traduce con “caso” + subjuntivo imperfeito, expresando precaución en pasado."],
      ["arrange","Ordena: [muito / diagnóstico / claro / o / é]",["claro o diagnóstico muito é", "é claro muito diagnóstico o", "é diagnóstico claro o muito", "o diagnóstico é muito claro"],3,"Artículo + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, sobre um procedimento de radiologia usando “caso” pelo menos duas vezes.",[],["caso", "radiografia", "diagnóstico"]],
    ]
  },
  {
    id:"pt_c1_virology_pandemics", level:"C1", title:"A virologia e as pandemias", emoji:"🦠", xp:92,
    description:"Analiza la virología usando “mesmo que” en portugués.",
    study: {
      vocab: [
        ["a cepa viral", "la cepa del virus"],
        ["o surto", "el brote"],
        ["a imunidade de rebanho", "la inmunidad de rebaño"],
        ["a eficácia da vacina", "la eficacia de la vacuna"],
        ["a taxa de transmissão", "la tasa de transmisión"],
        ["a mutação", "la mutación"],
      ],
      grammar: [
        ["“Mesmo que” + subjuntivo para concessão hipotética", "“Mesmo que” + subjuntivo expresa que algo será cierto incluso en una situación hipotética o improbable, a diferencia de “embora” (hecho real).", "Mesmo que a eficácia da vacina caísse, a imunidade de rebanho poderia ajudar. / O vírus se espalharia mesmo que as taxas de transmissão caíssem um pouco."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “outbreak” en portugués?",["a cepa viral","a imunidade de rebanho","o surto","a mutação"],2,"“Outbreak” es “o surto” en portugués."],
      ["mcq","¿Cómo se dice “herd immunity” en portugués?",["a eficácia da vacina","a taxa de transmissão","o surto","a imunidade de rebanho"],3,"“Herd immunity” es “a imunidade de rebanho” en portugués."],
      ["fill","Completa: “Mesmo que a eficácia ___, a imunidade de rebanho poderia ajudar.”",["cai", "caiu", "cairá", "caísse"],3,"“Mesmo que” con hipótesis usa subjuntivo imperfeito: “mesmo que... caísse”."],
      ["translate","Traduce con concesión hipotética: “The virus would spread even if transmission rates fell slightly.”",["O vírus se espalharia mesmo que as taxas de transmissão subissem um pouco.", "O vírus se espalharia mesmo que as taxas de transmissão caíssem um pouco.", "O vírus se espalharia embora as taxas de transmissão caíssem um pouco.", "O vírus se espalharia mesmo que as taxas de transmissão caem um pouco."],1,"“Even if” con condición hipotética se traduce con “mesmo que” + subjuntivo imperfeito."],
      ["arrange","Ordena: [preocupante / muito / mutação / esta / é]",["esta mutação é muito preocupante", "muito mutação é esta preocupante", "esta é muito preocupante mutação", "preocupante mutação esta muito é"],0,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise sobre virologia usando “mesmo que” pelo menos duas vezes.",[],["mesmo que", "surto", "imunidade de rebanho"]],
    ]
  },
  {
    id:"pt_c2_central_banking_monetary_policy", level:"C2", title:"O banco central e a política monetária", emoji:"🏦", xp:100,
    description:"Analiza la política monetaria usando “na medida em que” en portugués.",
    study: {
      vocab: [
        ["a taxa de juros", "el tipo de interés"],
        ["a meta de inflação", "el objetivo de inflación"],
        ["o afrouxamento quantitativo", "la flexibilización cuantitativa"],
        ["a política monetária", "la política monetaria"],
        ["o banco central", "el banco central"],
        ["o estímulo fiscal", "el estímulo fiscal"],
      ],
      grammar: [
        ["“Na medida em que” para qualificar", "“Na medida em que” expresa una limitación o condición parcial, típica del registro académico/formal, equivalente a “insofar as” en inglés.", "Na medida em que a inflação permanecer estável, cortes na taxa são possíveis. / A política funciona na medida em que os bancos emprestam com mais liberdade."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “quantitative easing” en portugués?",["o afrouxamento quantitativo","a política monetária","a meta de inflação","a taxa de juros"],0,"“Quantitative easing” es “o afrouxamento quantitativo” en portugués."],
      ["mcq","¿Cómo se dice “fiscal stimulus” en portugués?",["o estímulo fiscal","o afrouxamento quantitativo","a taxa de juros","a meta de inflação"],0,"“Fiscal stimulus” es “o estímulo fiscal” en portugués."],
      ["fill","Completa: “Na medida em que a inflação ___ estável, cortes na taxa são possíveis.”",["permaneceu", "permanecer", "permanecerá", "permanece"],1,"“Na medida em que” con futuro incierto usa futuro do subjuntivo: “na medida em que... permanecer”."],
      ["translate","Traduce con calificador formal: “The policy works to the extent that banks lend more freely.”",["A política funciona na medida em que os bancos emprestam com menos liberdade.", "A política funciona na medida que os bancos emprestam com mais liberdade.", "A política funcionava na medida em que os bancos emprestam com mais liberdade.", "A política funciona na medida em que os bancos emprestam com mais liberdade."],3,"“To the extent that” se traduce con “na medida em que” en portugués."],
      ["arrange","Ordena: [alta / muito / taxa / juros / a / de / é]",["é taxa muito alta juros de a", "a alta juros taxa muito de é", "de juros a muito é taxa alta", "a taxa de juros é muito alta"],3,"Artículo + sustantivo + preposición + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escreva em português, em 55-75 palavras, uma análise sobre política monetária usando “na medida em que” pelo menos uma vez.",[],["na medida em que", "política monetária", "banco central"]],
    ]
  },
  {
    id:"pt_a1_wh_questions", level:"A1", title:"As palavras interrogativas: o quê, quem, onde, quando, por quê", emoji:"❓", xp:34,
    description:"Aprende a formar preguntas básicas en portugués con las palabras interrogativas.",
    study: {
      vocab: [
        ["O quê / Que...?", "¿Qué...?"],
        ["Quem...?", "¿Quién...?"],
        ["Onde...?", "¿Dónde...?"],
        ["Quando...?", "¿Cuándo...?"],
        ["Por quê...?", "¿Por qué...?"],
        ["Como...?", "¿Cómo...?"],
      ],
      grammar: [
        ["Ordem das perguntas em português", "Em português não é necessário um auxiliar como em inglês; basta a palavra interrogativa + verbo (+ sujeito, muitas vezes omitido).", "Onde você mora? / Como você se chama? / Quando começa a aula?"],
      ]
    },
    ex:[
      ["mcq","¿Qué palabra usas para preguntar por un lugar?",["Onde", "Quando", "Quem", "O quê"],0,"“Onde” se usa para preguntar por lugares."],
      ["mcq","¿Qué palabra usas para preguntar por una persona?",["Como", "O quê", "Quem", "Por quê"],2,"“Quem” se usa para preguntar por personas."],
      ["fill","Completa: “___ você mora?”",["Onde", "O quê", "Quem", "Por quê"],0,"Preguntamos por el lugar donde vive alguien con “Onde”."],
      ["translate","Traduce: “Why do you study Portuguese?”",["Quem você estuda português?", "Onde você estuda português?", "O que você estuda português?", "Por que você estuda português?"],3,"“Why” se traduce como “Por que”."],
      ["arrange","Ordena: [você / onde / mora]",["você mora onde", "onde mora você", "mora onde você", "onde você mora"],3,"Palabra interrogativa + sujeto + verbo."],
      ["writing","Escreva em português 20-30 palavras com pelo menos três perguntas para conhecer alguém novo.",[],["Onde", "Como", "Quando"]],
    ]
  },
  {
    id:"pt_a1_possessives_family", level:"A1", title:"Os possessivos e a família", emoji:"👪", xp:35,
    description:"Aprende los posesivos en portugués y el vocabulario básico de la familia.",
    study: {
      vocab: [
        ["meu/minha", "mi"],
        ["seu/sua (de você/dele/dela)", "tu / su (de él) / su (de ella)"],
        ["nosso/nossa", "nuestro"],
        ["deles/delas", "su (de ellos)"],
        ["a mãe, o pai, os pais", "madre, padre, padres"],
        ["o irmão, a irmã, os irmãos", "hermano, hermana, hermanos"],
      ],
      grammar: [
        ["“Dele/dela” para evitar ambigüedad", "“Seu/sua” puede significar “tu, su (de él), su (de ella), su (de usted)”; para aclarar, en portugués brasileño se usa “dele/dela/deles/delas” después del sustantivo.", "Esta é a irmã dele. / Estes são os pais dela."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “his sister” en portugués sin ambigüedad?",["o irmão dele", "a irmã dela", "a irmã dele", "o irmão dela"],2,"“His sister” es “a irmã dele”."],
      ["mcq","¿Cómo se dice “our parents” en portugués?",["seus pais", "teus pais", "meus pais", "nossos pais"],3,"“Our” es “nosso/nossa”, aquí “nossos pais”."],
      ["fill","Completa: “Ela fala com a mãe ___.”",["dele", "delas", "deles", "dela"],3,"“Dela” aclara que la madre es de ella (evita la ambigüedad de “sua”)."],
      ["translate","Traduce: “These are their siblings.”",["Estes são os irmãos dele.", "Estes são os irmãos deles.", "Este é o irmão deles.", "Estes são nossos irmãos."],1,"“Their” (de ellos) se traduce con “deles” después del sustantivo."],
      ["arrange","Ordena: [irmã / minha / é / esta]",["esta é minha irmã", "irmã é minha esta", "é minha irmã esta", "irmã esta minha é"],0,"Sujeto + verbo “ser” + posesivo + sustantivo."],
      ["speaking","Descreva em português, em 25-35 palavras, três membros da sua família usando possessivos.",[],["minha", "dele", "nossa"]],
    ]
  },
  {
    id:"pt_a1_there_is_are_prepositions", level:"A1", title:"«Tem / Há» y las preposiciones de lugar", emoji:"📍", xp:36,
    description:"Aprende a usar “tem/há” y las preposiciones de lugar en portugués.",
    study: {
      vocab: [
        ["tem / há", "hay"],
        ["dentro de, em cima de, embaixo de", "en, sobre, debajo de"],
        ["ao lado de, entre", "al lado de, entre"],
        ["na frente de, atrás de", "delante de, detrás de"],
        ["Tem...? / Há...?", "¿Hay...?"],
      ],
      grammar: [
        ["“Tem” (hablado) y “Há” (formal) son invariables", "En el portugués brasileño hablado, “tem” es la forma más usada para “hay”; “há” es más formal. Ambas son invariables, no cambian con el número.", "Tem uma lâmpada em cima da mesa. / Tem duas cadeiras ao lado da mesa."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “under” en portugués?",["em cima de", "ao lado de", "atrás de", "embaixo de"],3,"“Under” es “embaixo de”."],
      ["mcq","¿Cómo se dice “between” en portugués?",["atrás de", "entre", "dentro de", "na frente de"],1,"“Between” es “entre”."],
      ["fill","Completa: “Tem dois livros ___ da mesa.”",["entre", "dentro", "atrás", "em cima"],3,"“Em cima” indica que algo está encima de una superficie."],
      ["translate","Traduce: “There is a cat under the table.”",["Tem gatos embaixo da mesa.", "Tem um gato embaixo da mesa.", "Tem um gato em cima da mesa.", "Tem um gato ao lado da mesa."],1,"“Under the table” es “embaixo da mesa”."],
      ["arrange","Ordena: [cadeira / ao / está / lado / a / da / lâmpada]",["da a está lado lâmpada cadeira ao", "ao da a cadeira lado lâmpada está", "a cadeira está ao lado da lâmpada", "lado está lâmpada da ao a cadeira"],2,"Sujeto + verbo “estar” + preposición + objeto."],
      ["writing","Descreva em português, em 25-35 palavras, onde estão três objetos no seu quarto usando “tem” e preposições de lugar.",[],["tem", "ao lado de", "embaixo de"]],
    ]
  },
  {
    id:"pt_a1_plurals_articles", level:"A1", title:"O plural dos substantivos e os artigos", emoji:"🔤", xp:34,
    description:"Aprende las reglas del plural en portugués y el uso de los artículos.",
    study: {
      vocab: [
        ["o livro / os livros", "el libro / los libros"],
        ["o animal / os animais", "el animal / los animales"],
        ["o mês / os meses", "el mes / los meses"],
        ["a mulher / as mulheres", "la mujer / las mujeres"],
        ["um, uma", "un, una"],
        ["o, a, os, as", "el/la"],
      ],
      grammar: [
        ["Reglas del plural en portugués", "Se añade “-s” en la mayoría de los casos; los terminados en “-l” cambian a “-is” (“animal→animais”), y los terminados en “-m” cambian a “-ns”.", "livro→livros, animal→animais, mês→meses, mulher→mulheres"],
      ]
    },
    ex:[
      ["mcq","¿Cuál es el plural de “animal”?",["animals", "animales", "animaus", "animais"],3,"Terminado en “-l” → plural en “-is”: “animais”."],
      ["mcq","¿Cuál es el plural de “mês”?",["mêses", "mesas", "mesos", "meses"],3,"El plural regular de “mês” es “meses”."],
      ["fill","Completa: “Eu preciso de ___ guarda-chuva; está chovendo.”",["uma", "uns", "um", "o"],2,"“Guarda-chuva” es masculino singular → “um”."],
      ["translate","Traduce: “There are three boxes in the garage.”",["Tem três caixaas na garagem.", "Tem três caixas na garagem.", "Tem três caixas nas garagens.", "Tem três caixa na garagem."],1,"“Caixa” es regular → plural “caixas”."],
      ["arrange","Ordena: [estão / onde / os / livros]",["os estão livros onde", "estão livros os onde", "onde estão os livros", "os estão onde livros"],2,"Palabra interrogativa + verbo + artículo + sustantivo plural."],
      ["writing","Escreva em português 20-30 palavras sobre objetos que tem na sua mochila, usando pelo menos dois plurais.",[],["livros", "caixas", "tem"]],
    ]
  },
  {
    id:"pt_a1_likes_dislikes", level:"A1", title:"Gostos e preferências", emoji:"❤️", xp:37,
    description:"Aprende a expresar gustos y preferencias en portugués con “gostar de”.",
    study: {
      vocab: [
        ["eu gosto de / eu adoro", "me gusta / me encanta"],
        ["eu não gosto de / eu odeio", "no me gusta / odio"],
        ["nadar, ler, cozinhar", "nadar, leer, cocinar"],
        ["Você gosta de...?", "¿Te gusta...?"],
        ["E você?", "¿Y tú?"],
      ],
      grammar: [
        ["Verbo + infinitivo tras “gostar de/adorar/odiar”", "En portugués, el verbo que sigue a “gostar de”, “adorar” u “odiar” va en infinitivo, no en gerundio como en inglés. “Gostar” siempre lleva la preposición “de”.", "Eu adoro ler. / Ela odeia esperar na fila."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “I love” en portugués?",["eu não gosto de", "eu odeio", "eu gosto de", "eu adoro"],3,"“I love” es “eu adoro”."],
      ["mcq","¿Cómo se dice “I hate” en portugués?",["você gosta de", "eu odeio", "eu gosto de", "eu adoro"],1,"“I hate” es “eu odeio”."],
      ["fill","Completa: “Ela adora ___ nos fins de semana.”",["cozinhar", "cozinhando", "cozinha", "cozinho"],0,"Tras “adorar” el verbo va en infinitivo: “cozinhar”."],
      ["translate","Traduce: “I don't like swimming in cold water.”",["Eu odeio nadar água fria.", "Eu não gosto de nadando em água fria.", "Eu gosto de nadar em água fria.", "Eu não gosto de nadar em água fria."],3,"“I don't like” + infinitivo: “eu não gosto de nadar”."],
      ["arrange","Ordena: [gosta / ela / de / livros / ler]",["de ela livros gosta ler", "ela gosta de ler livros", "ela de livros gosta ler", "de livros ela ler gosta"],1,"Sujeto + “gostar de” + infinitivo + objeto."],
      ["speaking","Fale em português por 25-35 palavras sobre três atividades que você gosta e uma que você odeia.",[],["eu adoro", "eu gosto de", "eu odeio"]],
    ]
  },
  {
    id:"pt_a2_future_plans", level:"A2", title:"O futuro: planos e previsões", emoji:"🔮", xp:46,
    description:"Aprende a hablar del futuro en portugués usando “ir + infinitivo” para planes y el futuro para predicciones.",
    study: {
      vocab: [
        ["eu vou...", "voy a..."],
        ["presente do indicativo (para planos)", "presente (para planes confirmados)"],
        ["futuro do presente (-ei, -á...)", "el tiempo futuro"],
        ["eu acho que vai chover", "creo que va a llover"],
        ["o que você vai fazer?", "¿Qué vas a hacer?"],
      ],
      grammar: [
        ["“Ir + infinitivo” vs futuro do presente", "“Ir + infinitivo” es la forma más común para planes ya decididos; el futuro do presente se reserva más para predicciones o el registro formal.", "Eu vou visitar meus pais na próxima semana. / Eu acho que vai chover amanhã."],
      ]
    },
    ex:[
      ["mcq","¿Qué estructura usas para un plan ya decidido?",["eu acho", "você gosta", "eu vou", "futuro do presente"],2,"Para planes ya decididos usamos “ir + infinitivo”: “eu vou”."],
      ["mcq","¿Cómo se dice “next week” en portugués?",["esta semana", "a próxima semana", "o próximo ano", "a semana passada"],1,"“Next week” es “a próxima semana”."],
      ["fill","Completa: “Olha essas nuvens! ___ chover.”",["Tem", "Choverá", "Era", "Vai"],3,"Con evidencia presente (nubes) usamos “ir + infinitivo”: “vai chover”."],
      ["translate","Traduce: “I think we will win the game.”",["Eu acho que ganharíamos o jogo.", "Eu acho que ganhamos o jogo ganhado.", "Eu acho que ganhamos o jogo.", "Eu acho que vamos ganhar o jogo."],3,"Predicción sin evidencia clara → “ir + infinitivo”: “vamos ganhar”."],
      ["arrange","Ordena: [visitar / vou / avós / meus / na / próxima / semana / eu]",["meus semana na visitar próxima vou eu avós", "na próxima semana meus eu vou visitar avós", "visitar eu próxima na meus vou avós semana", "eu vou visitar meus avós na próxima semana"],3,"Sujeto + “ir” + infinitivo + objeto + expresión de tiempo."],
      ["writing","Escreva em português 30-40 palavras sobre seus planos para o próximo mês, usando “ir + infinitivo” e uma previsão no futuro.",[],["eu vou", "próxima", "eu acho que"]],
    ]
  },
  {
    id:"pt_a2_comparatives_superlatives", level:"A2", title:"Os comparativos e os superlativos", emoji:"⚖️", xp:47,
    description:"Aprende a comparar personas y cosas en portugués usando comparativos y superlativos.",
    study: {
      vocab: [
        ["maior que, menor que", "más grande que, más pequeño que"],
        ["mais caro que", "más caro que"],
        ["o/a melhor, o/a pior", "el mejor, el peor"],
        ["tão...quanto", "tan... como"],
        ["o/a mais interessante", "el más interesante"],
      ],
      grammar: [
        ["Comparativos y superlativos regulares e irregulares", "“Mais/menos + adjetivo + que” forma el comparativo; “o/a mais + adjetivo” el superlativo. Irregular: bom→melhor, ruim→pior.", "Este carro é mais rápido que aquele, mas o vermelho é o mais rápido."],
      ]
    },
    ex:[
      ["mcq","¿Cuál es el comparativo de “bom”?",["o melhor", "boníssimo", "melhor", "mais bom"],2,"“Bom” es irregular: melhor, o melhor."],
      ["mcq","¿Cómo se dice “as expensive as” en portugués?",["o mais caro", "mais caro que", "tão caro quanto", "menos caro"],2,"“As...as” es “tão...quanto”."],
      ["fill","Completa: “Este telefone é ___ que o meu, mas não é o melhor.”",["o melhor", "mais bom", "melhor", "boníssimo"],2,"Comparativo irregular de “bom” es “melhor”."],
      ["translate","Traduce: “This is the cheapest hotel in the city.”",["Este é mais barato hotel da cidade.", "Este é o hotel tão barato da cidade.", "Este é o hotel barato da cidade.", "Este é o hotel mais barato da cidade."],3,"Superlativo: “o/a mais + adjetivo”."],
      ["arrange","Ordena: [que / alto / irmão / meu / é / eu]",["meu irmão é alto que eu", "irmão meu que eu alto é", "alto que meu é irmão eu", "irmão meu alto eu que é"],0,"Sujeto + verbo + comparativo + “que” + objeto (versión simplificada, sin “mais”)."],
      ["speaking","Compare em português, em 30-40 palavras, duas cidades ou lugares que você conhece usando comparativos e um superlativo.",[],["mais", "o melhor", "que"]],
    ]
  },
  {
    id:"pt_a2_advice_modals", level:"A2", title:"Conselhos e obrigação: deveria, tem que", emoji:"💡", xp:48,
    description:"Aprende a dar consejos y hablar de obligaciones en portugués.",
    study: {
      vocab: [
        ["você deveria...", "deberías..."],
        ["você não deveria...", "no deberías..."],
        ["eu tenho que / eu preciso", "debo / tengo que"],
        ["você não precisa", "no tienes que"],
        ["é uma boa ideia...", "es buena idea..."],
      ],
      grammar: [
        ["“Deveria” (consejo) vs “tem que” (obligación)", "“Deveria” da un consejo suave; “tem que/precisa” expresan obligación; “não precisa” significa que algo no es necesario, mientras que la prohibición se expresa con “não pode”.", "Você deveria beber mais água. / Você tem que usar o cinto de segurança."],
      ]
    },
    ex:[
      ["mcq","¿Qué expresión da un consejo, no una obligación?",["você não pode", "você não precisa", "você tem que", "você deveria"],3,"“Você deveria” es un consejo, no una obligación."],
      ["mcq","¿Cómo se dice “you don't have to” en portugués?",["você não pode", "você não deveria", "você não precisa", "você tem que"],2,"“You don't have to” es “você não precisa”, no “você não pode” (prohibición)."],
      ["fill","Completa: “Você ___ fumar aqui; é proibido.”",["tem", "não precisa", "deveria", "não pode"],3,"“Não pode” indica prohibición."],
      ["translate","Traduce: “You should sleep more.”",["Você não precisa dormir mais.", "Você não pode dormir mais.", "Você tem que dormir mais.", "Você deveria dormir mais."],3,"Consejo suave → “deveria”."],
      ["arrange","Ordena: [cinto / usar / que / tem / um / você]",["tem um cinto você que usar", "um usar tem você que cinto", "um cinto que usar tem você", "você tem que usar um cinto"],3,"Sujeto + “ter que” + infinitivo + objeto."],
      ["writing","Escreva em português 30-40 palavras dando três conselhos para um amigo que vai viajar pela primeira vez.",[],["você deveria", "você tem que", "você não precisa"]],
    ]
  },
  {
    id:"pt_a2_phone_calls", level:"A2", title:"Ligações telefônicas", emoji:"📞", xp:46,
    description:"Aprende expresiones útiles para hacer y recibir llamadas telefónicas en portugués.",
    study: {
      vocab: [
        ["Alô, aqui é...", "Hola, soy..."],
        ["Posso falar com...?", "¿Puedo hablar con...?"],
        ["Posso deixar um recado?", "¿Puedo dejar/tomar un mensaje?"],
        ["Um momento, por favor.", "Espere un momento, por favor."],
        ["Você pode ligar mais tarde?", "¿Puede volver a llamar más tarde?"],
        ["Eu ligo de volta.", "Le devuelvo la llamada."],
      ],
      grammar: [
        ["Fórmulas fijas para el teléfono", "En portugués se atiende el teléfono con “Alô” y uno se identifica con “aqui é...”.", "Alô, aqui é a Laura. Posso falar com o senhor Silva, por favor?"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “Can I take a message?” en portugués?",["Eu ligo de volta.", "Um momento, por favor.", "Posso deixar um recado?", "Posso falar com...?"],2,"“Can I take/leave a message?” es “Posso deixar um recado?”."],
      ["mcq","¿Cómo se dice “Hold on, please” en portugués?",["Ligue mais tarde.", "Posso falar com...?", "Aqui é a Laura.", "Um momento, por favor."],3,"“Hold on, please” es “Um momento, por favor”."],
      ["fill","Completa: “Alô, ___ o Marcos. A Ana está?”",["aqui é", "eu estava aqui", "eu sou", "aqui estou"],0,"Al identificarse por teléfono se dice “aqui é o Marcos”."],
      ["translate","Traduce: “Can I speak to Mr. García, please?”",["Posso deixar o senhor García, por favor?", "Posso ligar o senhor García, por favor?", "Posso esperar o senhor García, por favor?", "Posso falar com o senhor García, por favor?"],3,"“Can I speak to...?” es “Posso falar com...?”."],
      ["arrange","Ordena: [volta / ligo / de / eu]",["volta de ligo eu", "eu ligo de volta", "de ligo volta eu", "ligo eu de volta"],1,"Sujeto + verbo + preposición + adverbio."],
      ["speaking","Simule em português, em 30-40 palavras, uma ligação telefônica pedindo para falar com alguém e deixando um recado.",[],["posso falar com", "posso deixar um recado", "aqui é"]],
    ]
  },
  {
    id:"pt_a2_quantifiers_countable", level:"A2", title:"Quantidades: um pouco de, quanto, quantos", emoji:"🧮", xp:47,
    description:"Aprende a hablar de cantidades en portugués distinguiendo sustantivos contables e incontables.",
    study: {
      vocab: [
        ["algum/alguma, nenhum/nenhuma", "algunos, ninguno"],
        ["Quanto/a...?", "¿Cuánto...?"],
        ["Quantos/as...?", "¿Cuántos...?"],
        ["muito/muitos", "mucho, muchos"],
        ["pouco/poucos", "poco, pocos"],
      ],
      grammar: [
        ["Contables vs incontables en portugués", "“Quantos/as” y “muitos/as, poucos/as” concuerdan con sustantivos contables plurales; “quanto/a” y “muito/a, pouco/a” con incontables en singular.", "Quantas maçãs você tem? / Quanta água tem? / Eu não tenho dinheiro nenhum."],
      ]
    },
    ex:[
      ["mcq","¿Qué palabra usas para preguntar por algo incontable, como el agua?",["Quantos", "Quanta", "algumas", "muitos"],1,"“Água” es incontable femenino → “Quanta”."],
      ["mcq","¿Qué palabra usas con sustantivos contables plurales, como “maçãs”?",["muita", "pouca", "Quantas", "Quanto"],2,"“Maçãs” es contable plural femenino → “Quantas”."],
      ["fill","Completa: “Eu não tenho dinheiro ___.”",["muitos", "poucos", "algum", "nenhum"],3,"En negativas usamos “nenhum” con sustantivos incontables como “dinheiro”."],
      ["translate","Traduce: “How many books do you have?”",["Quanto livros você tem?", "Quantos livros você tem?", "Quanto livro você tem?", "Quantos livro você tem?"],1,"“Livros” es contable plural masculino → “Quantos livros”."],
      ["arrange","Ordena: [leite / quanto / tem]",["quanto leite tem", "tem leite quanto", "leite quanto tem", "tem quanto leite"],0,"Palabra interrogativa + sustantivo incontable + verbo."],
      ["writing","Descreva em português, em 25-35 palavras, o que tem na sua geladeira usando “algum”, “muito” e “poucos”.",[],["muito", "poucos", "algum"]],
    ]
  },
  {
    id:"pt_b1_past_continuous_narrative", level:"B1", title:"Narrar interrupções: estar no imperfeito + gerúndio", emoji:"🌙", xp:60,
    description:"Aprende a combinar “estar” en imperfecto con gerundio y el pretérito perfeito para narrar interrupciones.",
    study: {
      vocab: [
        ["eu estava cozinhando / eles estavam falando", "yo estaba cocinando / ellos hablaban"],
        ["enquanto, quando", "mientras, cuando"],
        ["de repente", "de repente"],
        ["o telefone tocou", "sonó el teléfono"],
        ["no meio de...", "en medio de..."],
      ],
      grammar: [
        ["“Estar” en imperfecto + gerundio + pretérito perfeito", "El portugués usa “estar” en pretérito imperfeito + gerundio para la acción en curso (similar al inglés), y el pretérito perfeito para la acción que la interrumpe.", "Eu estava cozinhando o jantar quando o telefone tocou. / Enquanto ela estava estudando, o amigo dela chegou."],
      ]
    },
    ex:[
      ["mcq","¿Qué forma se usa para la acción de fondo que se interrumpe?",["cozinhar", "estava cozinhando", "cozinho", "cozinhei"],1,"La acción de fondo va con “estar” en imperfecto + gerundio: “estava cozinhando”."],
      ["mcq","¿Cómo se dice “suddenly” en portugués?",["quando", "enquanto", "de repente", "no meio de"],2,"“Suddenly” es “de repente”."],
      ["fill","Completa: “Eu ___ o jantar quando o telefone tocou.”",["cozinhar", "cozinhei", "cozinho", "estava cozinhando"],3,"Acción interrumpida = “estava” + gerundio: “estava cozinhando”."],
      ["translate","Traduce: “While she was studying, her friend arrived.”",["Enquanto ela estava estudando, o amigo dela estava chegando.", "Enquanto ela estuda, o amigo dela chegou.", "Enquanto ela estudou, o amigo dela estava chegando.", "Enquanto ela estava estudando, o amigo dela chegou."],3,"Fondo con “estava” + gerundio, interrupción en pretérito perfeito: “estava estudando... chegou”."],
      ["arrange","Ordena: [tocou / cozinhando / jantar / eu / o / quando / o / estava / telefone]",["eu estava cozinhando o jantar quando o telefone tocou", "jantar quando o cozinhando estava tocou telefone eu o", "o eu tocou quando cozinhando jantar estava o telefone", "cozinhando o telefone tocou eu o estava jantar quando"],0,"“Estava” + gerundio + objeto + “quando” + pretérito perfeito."],
      ["writing","Escreva em português 40-55 palavras contando uma história curta em que algo te interrompeu enquanto você fazia outra coisa.",[],["enquanto", "quando", "de repente"]],
    ]
  },
  {
    id:"pt_b1_second_conditional", level:"B1", title:"O futuro do pretérito para situações hipotéticas", emoji:"🌈", xp:62,
    description:"Aprende a hablar de situaciones hipotéticas y deseos imaginarios en portugués.",
    study: {
      vocab: [
        ["se eu tivesse...", "si tuviera..."],
        ["eu -ia / eu não -ia", "yo lo haría / no lo haría"],
        ["se eu fosse você...", "yo que tú..."],
        ["o que você faria se...?", "¿Qué harías si...?"],
        ["situação imaginária", "situación imaginaria"],
      ],
      grammar: [
        ["Se + pretérito imperfeito do subjuntivo, futuro do pretérito", "Para situaciones hipotéticas poco probables, se usa “se” + pretérito imperfeito do subjuntivo, seguido del futuro do pretérito (condicional).", "Se eu tivesse mais tempo, eu viajaria mais. / Se eu fosse você, eu aceitaria a oferta."],
      ]
    },
    ex:[
      ["mcq","¿Qué forma verbal sigue a “se eu fosse você, eu...”?",["aceitarei", "aceitaria", "aceito", "aceitei"],1,"Tras la cláusula con “se” va el futuro do pretérito: “aceitaria”."],
      ["mcq","¿Cómo se dice “imaginary situation” en portugués?",["situação imaginária", "plano futuro", "experiência passada", "situação real"],0,"“Imaginary situation” es “situação imaginária”."],
      ["fill","Completa: “Se eu ___ mais dinheiro, eu viajaria pelo mundo.”",["terei", "tenho", "tive", "tivesse"],3,"Pretérito imperfeito do subjuntivo de “ter” es “tivesse”."],
      ["translate","Traduce: “If I were you, I would accept the job.”",["Se eu fosse você, eu aceitaria o emprego.", "Se eu era você, eu aceitarei o emprego.", "Se eu fosse você, eu aceito o emprego.", "Se eu sou você, eu aceitaria o emprego."],0,"“Se eu fosse você” es la forma estándar para un consejo hipotético."],
      ["arrange","Ordena: [tempo / mais / se / tivesse / eu / viajaria / eu]",["eu tivesse viajaria tempo mais eu se", "tivesse tempo mais eu eu se viajaria", "se eu tivesse mais tempo eu viajaria", "mais tempo viajaria eu tivesse eu se"],2,"“Se” + pretérito imperfeito do subjuntivo + futuro do pretérito."],
      ["speaking","Fale em português, em 40-55 palavras, sobre o que você faria se ganhasse na loteria, usando o futuro do pretérito.",[],["se eu tivesse", "eu -ia", "imaginária"]],
    ]
  },
  {
    id:"pt_b1_modals_deduction", level:"B1", title:"Expressar certeza, possibilidade e dúvida", emoji:"🕵️", xp:61,
    description:"Aprende a expresar certeza, posibilidad y duda en portugués.",
    study: {
      vocab: [
        ["deve estar", "debe de ser (alta certeza)"],
        ["pode estar", "podría ser (posibilidad)"],
        ["não pode estar", "no puede ser (certeza negativa)"],
        ["poderia estar", "podría ser (posibilidad)"],
        ["eu tenho certeza / eu não tenho certeza", "estoy seguro / no estoy seguro"],
      ],
      grammar: [
        ["Grados de certeza en portugués", "“Dever” en presente expresa una fuerte deducción (“deve estar”); “pode/poderia” expresan posibilidad, no certeza; “não pode estar” expresa certeza negativa.", "As luzes estão apagadas, então eles devem estar dormindo. / Ele pode estar no trabalho, eu não tenho certeza."],
      ]
    },
    ex:[
      ["mcq","¿Qué expresión indica una fuerte certeza de que algo NO es cierto?",["não pode estar", "pode estar", "poderia estar", "deve estar"],0,"“Não pode estar” indica que algo es imposible según la evidencia."],
      ["mcq","¿Qué expresión indica posibilidad, no certeza?",["pode estar", "deve estar", "eu tenho certeza", "não pode estar"],0,"“Pode estar” expresa una posibilidad, no una certeza."],
      ["fill","Completa: “As luzes estão apagadas, então eles ___ dormindo.”",["não podem estar", "devem estar", "podem estar", "poderiam estar"],1,"Evidencia fuerte (luces apagadas) → “devem estar” (alta certeza)."],
      ["translate","Traduce: “It can't be that late.”",["Deve ser tão tarde.", "Poderia ser tão tarde.", "Pode ser tão tarde.", "Não pode ser tão tarde."],3,"Certeza negativa fuerte → “não pode ser”."],
      ["arrange","Ordena: [trabalho / no / estar / pode / ele]",["ele pode estar no trabalho", "pode ele trabalho no estar", "ele pode no estar trabalho", "estar trabalho ele pode no"],0,"Sujeto + modal + “estar” + complemento."],
      ["writing","Escreva em português 35-45 palavras fazendo deduções sobre uma situação (por exemplo, por que alguém não atende o telefone).",[],["deve estar", "pode estar", "não pode estar"]],
    ]
  },
  {
    id:"pt_b1_reported_speech_basics", level:"B1", title:"O discurso indireto básico", emoji:"🗣️", xp:63,
    description:"Aprende a contar en portugués lo que alguien dijo usando el discurso indirecto básico.",
    study: {
      vocab: [
        ["ele disse que...", "él dijo (que)..."],
        ["ela me disse que...", "ella me dijo (que)..."],
        ["ela disse que estava cansada", "dijo que estaba cansada"],
        ["ele disse que ligaria", "dijo que llamaría"],
        ["mudança de tempo verbal", "transposición de tiempos verbales (estilo indirecto)"],
      ],
      grammar: [
        ["Cambio de tiempo verbal en el discurso indirecto", "Al pasar al discurso indirecto, el presente suele pasar a pretérito imperfeito, y el futuro se convierte en futuro do pretérito.", "Direto: «Estou cansada.» → Indireto: Ela disse que estava cansada. / Direto: «Eu vou te ligar.» → Indireto: Ele disse que ligaria."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “she told me that...” en portugués?",["ela dirá que", "ela me disse que", "ela diz que", "ela me diz que"],1,"“She told me” es “ela me disse”, en pasado."],
      ["mcq","¿En qué se convierte el futuro (“eu ligo”) en discurso indirecto?",["liga", "ligará", "ligaria", "ligava"],2,"El futuro se convierte en futuro do pretérito: “ligaria”."],
      ["fill","Completa: “Ela disse que ___ cansada.”",["esteve", "está", "estava", "estivesse"],2,"El presente (“estou”) pasa a pretérito imperfeito (“estava”) en discurso indirecto."],
      ["translate","Traduce: “He said he would call later.”",["Ele disse que ligaria mais tarde.", "Ele disse que liga mais tarde.", "Ele disse que vai ligar mais tarde.", "Ele disse que ligou mais tarde."],0,"El futuro pasa a futuro do pretérito en discurso indirecto: “ligaria”."],
      ["arrange","Ordena: [cansada / disse / estava / que / ela]",["cansada que disse ela estava", "ela disse que estava cansada", "ela estava que disse cansada", "disse estava ela cansada que"],1,"Sujeto + “disse que” + verbo en pretérito imperfeito."],
      ["writing","Escreva em português 35-45 palavras contando no discurso indireto três coisas que alguém te disse recentemente.",[],["disse que", "me disse", "ligaria"]],
    ]
  },
  {
    id:"pt_b1_sequencing_process", level:"B1", title:"Descrever um processo: conectores de sequência", emoji:"🔢", xp:60,
    description:"Aprende a describir procesos y secuencias de pasos en portugués usando conectores de orden.",
    study: {
      vocab: [
        ["Primeiro...", "primero..."],
        ["Depois / Em seguida...", "luego / después..."],
        ["Depois disso...", "después de eso..."],
        ["Por fim / Finalmente...", "finalmente..."],
        ["Assim que você tiver..., ...", "una vez que hayas..., ..."],
      ],
      grammar: [
        ["Conectores de secuencia para procesos", "Los conectores de secuencia organizan un proceso paso a paso; suelen ir seguidos de coma al inicio de la frase.", "Primeiro, você preenche o formulário. Depois, envia online. Por fim, espera um e-mail de confirmação."],
      ]
    },
    ex:[
      ["mcq","¿Qué conector usas para el último paso de un proceso?",["Por fim", "Primeiro", "Depois", "Depois disso"],0,"“Por fim” indica el último paso."],
      ["mcq","¿Qué conector usas para el primer paso de un proceso?",["Primeiro", "Depois disso", "Depois", "Por fim"],0,"“Primeiro” indica el primer paso."],
      ["fill","Completa: “___ que você preencher o formulário, envie online.”",["Por fim", "Assim", "Primeiro", "Depois"],1,"“Assim que” introduce una condición temporal."],
      ["translate","Traduce: “First, mix the ingredients; then, bake for 20 minutes.”",["Depois, misture os ingredientes; primeiro, asse por 20 minutos.", "Por fim, misture os ingredientes; depois, asse por 20 minutos.", "Primeiro, misture os ingredientes; primeiro, asse por 20 minutos.", "Primeiro, misture os ingredientes; depois, asse por 20 minutos."],3,"“First...then” es “primeiro...depois”."],
      ["arrange","Ordena: [disso / envie / formulário / depois / o]",["depois disso envie o formulário", "envie o depois disso formulário", "depois formulário disso o envie", "o envie depois formulário disso"],0,"Conector de secuencia + verbo + artículo + objeto."],
      ["speaking","Explique em português, em 40-55 palavras, os passos para fazer algo que você sabe fazer (uma receita, um trâmite, etc.) usando pelo menos três conectores de sequência.",[],["primeiro", "depois", "por fim"]],
    ]
  },
  {
    id:"pt_b2_relative_clauses", level:"B2", title:"As orações relativas: que, quem, cujo", emoji:"🔗", xp:55,
    description:"Aprende a usar los pronombres relativos portugueses: que, quem y cujo.",
    study: {
      vocab: [
        ["que", "que – relativo general"],
        ["quem", "quien – depois de preposição, para pessoas"],
        ["cujo/cuja/cujos/cujas", "cuyo – concuerda con lo poseído"],
        ["onde, quando", "dónde, cuándo"],
        ["o homem que ligou", "el hombre que llamó"],
      ],
      grammar: [
        ["“Que”, “quem” y “cujo”", "“Que” es invariable y vale para personas y cosas; “quem” se usa tras preposición y solo para personas; “cujo” concuerda con el sustantivo poseído, no con el poseedor.", "O livro que comprei é ótimo. / A pessoa com quem falei... / O escritor cujo romance ganhou o prêmio..."],
      ]
    },
    ex:[
      ["mcq","¿Qué pronombre relativo se usa tras preposición y solo para personas?",["onde", "que", "quem", "cujo"],2,"“Quem” se usa tras preposición y solo para personas."],
      ["mcq","¿Qué pronombre relativo es invariable y se usa para personas y cosas?",["quem", "onde", "cujo", "que"],3,"“Que” es invariable y vale para personas y cosas."],
      ["fill","Completa: “O escritor ___ romance ganhou o prêmio é brasileiro.”",["quem", "cuja", "que", "cujo"],3,"“Cujo” concuerda con “romance” (masculino), lo poseído."],
      ["translate","Traduce: “The person I spoke to...”",["A pessoa que falei...", "A pessoa onde falei...", "A pessoa cujo falei...", "A pessoa com quem falei..."],3,"Tras preposición (“com”) se usa “quem”."],
      ["arrange","Ordena: [ligou / que / o / homem]",["homem que o ligou", "que o ligou homem", "o homem que ligou", "ligou o que homem"],2,"Sustantivo + “que” + verbo."],
      ["writing","Escreva em português 30-40 palavras descrevendo uma pessoa e um objeto usando “que”, “quem” e “cujo”.",[],["que", "quem", "cujo"]],
    ]
  },
  {
    id:"pt_b2_gerundio_infinitivo", level:"B2", title:"O gerúndio, o infinitivo e o particípio", emoji:"🔀", xp:56,
    description:"Aprende cuándo usar el gerundio y cuándo el infinitivo en portugués.",
    study: {
      vocab: [
        ["estar + gerúndio", "estar haciendo (progresivo)"],
        ["verbo + infinitivo", "verbo + infinitivo (patrón más común)"],
        ["acabar de + infinitivo", "acabar de hacer"],
        ["continuar a + infinitivo", "seguir haciendo"],
        ["ficar + gerúndio", "seguir haciendo (duración)"],
      ],
      grammar: [
        ["“Estar + gerúndio” para el progresivo brasileño", "El portugués de Brasil usa mucho “estar + gerundio” para el progresivo; la mayoría de los verbos con complemento verbal usan infinitivo, no gerundio como en inglés.", "Ela está aprendendo português. / Acabei de chegar. / Continua a chover."],
      ]
    },
    ex:[
      ["mcq","¿Qué estructura expresa una acción en curso (progresivo, en portugués de Brasil)?",["verbo + infinitivo", "acabar de + infinitivo", "continuar a + infinitivo", "estar + gerúndio"],3,"“Estar + gerúndio” expresa una acción en curso."],
      ["mcq","¿Qué estructura significa “haber hecho algo hace un momento”?",["continuar a + infinitivo", "ficar + gerúndio", "estar + gerúndio", "acabar de + infinitivo"],3,"“Acabar de + infinitivo” es “to have just done”."],
      ["fill","Completa: “Ela está ___ português.”",["aprendido", "aprendendo", "aprende", "aprender"],1,"“Estar + gerúndio” para el progresivo: “aprendendo”."],
      ["translate","Traduce: “He just left.”",["Ele continua de sair.", "Ele acabou de sair.", "Ele está saindo em saindo.", "Ele acaba sair."],1,"“Acabar de hacer” es “acabar de + infinitivo”."],
      ["arrange","Ordena: [sair / acabou / de / ele]",["acabou de ele sair", "ele sair de acabou", "acabou ele de sair", "ele acabou de sair"],3,"“Acabar de” + infinitivo."],
      ["writing","Escreva em português 30-40 palavras sobre seus hábitos usando “estar + gerúndio”, “acabar de” e “continuar a”.",[],["está", "acabei de", "continuo a"]],
    ]
  },
  {
    id:"pt_b2_desejo_arrependimento", level:"B2", title:"Desejo e arrependimento: quem me dera, eu queria ter", emoji:"🌠", xp:56,
    description:"Aprende a expresar deseos y arrepentimiento en portugués.",
    study: {
      vocab: [
        ["Eu queria + infinitivo", "ojalá (deseo presente)"],
        ["Eu queria ter + particípio", "ojalá hubiera hecho (arrepentimiento)"],
        ["Quem me dera...", "Ojalá..."],
        ["Eu deveria ter + particípio", "debería haber..."],
        ["o arrependimento", "el arrepentimiento"],
      ],
      grammar: [
        ["Deseo presente vs arrepentimiento pasado", "Para un deseo sobre el presente se usa “eu queria + infinitivo”; para un arrepentimiento sobre el pasado, “eu queria ter + particípio” o “quem me dera + subjuntivo”.", "Eu queria ter mais tempo. / Eu queria ter estudado mais. / Quem me dera tivesse aceitado o emprego."],
      ]
    },
    ex:[
      ["mcq","¿Qué estructura expresa un deseo sobre el presente?",["eu deveria ter", "eu queria ter + particípio", "eu queria + infinitivo", "quem me dera + subjuntivo"],2,"Deseo presente → “eu queria + infinitivo”."],
      ["mcq","¿Qué estructura expresa un arrepentimiento sobre el pasado?",["eu tive", "eu queria ter + particípio", "eu queria + infinitivo", "quem me dera + presente"],1,"Arrepentimiento pasado → “eu queria ter + particípio”."],
      ["fill","Completa: “___ mais tempo.”",["Quem me dera", "Eu queria", "Eu tive", "Eu queria ter"],3,"Deseo sobre el presente/pasado → “eu queria ter + particípio” para arrepentimiento."],
      ["translate","Traduce: “I wish I had accepted the job.”",["Quem me dera aceito o emprego.", "Eu queria ter aceitado o emprego.", "Eu tive aceitado o emprego.", "Eu queria aceitar o emprego."],1,"Arrepentimiento pasado → “eu queria ter + particípio”."],
      ["arrange","Ordena: [tempo / eu / mais / queria / ter]",["mais tempo queria eu ter", "eu ter queria mais tempo", "eu queria ter mais tempo", "tempo queria ter mais eu"],2,"Sujeto + “queria ter” + objeto."],
      ["speaking","Fale em português, em 35-45 palavras, sobre algo que você gostaria de ter feito diferente no passado, usando “eu queria ter” + particípio.",[],["eu queria ter", "quem me dera", "eu deveria ter"]],
    ]
  },
  {
    id:"pt_b2_dever_passado_deducao", level:"B2", title:"O futuro do pretérito e “dever” para especular sobre o passado", emoji:"🔍", xp:57,
    description:"Aprende a especular sobre el pasado en portugués con “dever” y el futuro do pretérito.",
    study: {
      vocab: [
        ["deve ter + particípio", "debe de haber (deducción)"],
        ["pode ter + particípio", "podría haber (posibilidad)"],
        ["não pode ter + particípio", "no puede haber (certeza negativa)"],
        ["deveria ter + particípio", "debería haber (crítica/arrepentimiento)"],
        ["não tenho certeza do que aconteceu", "no estoy seguro/a de qué pasó"],
      ],
      grammar: [
        ["“Dever” para especular sobre el pasado", "“Dever” en presente + infinito compuesto expresa una fuerte deducción sobre el pasado; “deveria ter + particípio” expresa crítica o arrepentimiento.", "Ela deve ter saído já; o casaco dela sumiu. / Você deveria ter me ligado antes."],
      ]
    },
    ex:[
      ["mcq","¿Qué expresión indica una fuerte deducción sobre el pasado?",["não pode ter", "pode ter", "deve ter", "deveria ter"],2,"“Deve ter” indica una fuerte deducción."],
      ["mcq","¿Qué expresión indica crítica sobre algo que no se hizo?",["deveria ter", "não pode ter", "pode ter", "deve ter"],0,"“Deveria ter” expresa crítica o arrepentimiento."],
      ["fill","Completa: “Ela ___ saído já; o casaco dela sumiu.”",["não pode ter", "pode ter", "deveria ter", "deve ter"],3,"Evidencia fuerte (casaco desapareció) → “deve ter”."],
      ["translate","Traduce: “You can't have finished so fast.”",["Você não pode ter terminado tão rápido.", "Você pode ter terminado tão rápido.", "Você deve ter terminado tão rápido.", "Você deveria ter terminado tão rápido."],0,"Certeza negativa fuerte → “não pode ter”."],
      ["arrange","Ordena: [ligado / deveria / antes / me / ter / você]",["deveria ligado ter me antes você", "você deveria ter me ligado antes", "ligado você deveria antes me ter", "ter antes ligado deveria você me"],1,"Sujeto + “deveria ter” + objeto + participio + adverbio."],
      ["writing","Escreva em português 35-45 palavras especulando sobre por que alguém chegou tarde a uma reunião, usando “deve ter”, “pode ter” e “não pode ter”.",[],["deve ter", "pode ter", "não pode ter"]],
    ]
  },
  {
    id:"pt_b2_imperfeito_habitos", level:"B2", title:"O pretérito imperfeito e os hábitos passados", emoji:"🕰️", xp:55,
    description:"Aprende a describir hábitos y estados pasados en portugués con el pretérito imperfeito.",
    study: {
      vocab: [
        ["o imperfeito para hábitos e estados", "imperfecto para hábitos/estados"],
        ["costumava + infinitivo", "solía (hábito pasado)"],
        ["antigamente...", "antes / hace tiempo..."],
        ["quando criança...", "de niño/a..."],
        ["hoje em dia", "hoy en día"],
      ],
      grammar: [
        ["El pretérito imperfeito es el tiempo natural para hábitos pasados", "El pretérito imperfeito es el tiempo natural para hábitos y estados pasados en portugués; “costumava + infinitivo” refuerza explícitamente la idea de costumbre.", "Eu morava em Roma. / Quando criança, eu costumava brincar lá fora todos os dias."],
      ]
    },
    ex:[
      ["mcq","¿Qué tiempo describe naturalmente hábitos y estados pasados?",["o pretérito perfeito", "o futuro do pretérito", "o pretérito imperfeito", "o subjuntivo"],2,"El pretérito imperfeito describe hábitos y estados pasados."],
      ["mcq","¿Qué verbo + infinitivo refuerza la idea de costumbre pasada?",["costuma", "costumou", "costumava", "tem costume"],2,"“Costumava” refuerza la idea de costumbre pasada."],
      ["fill","Completa: “Quando eu era jovem, ___ em uma cidade pequena.”",["morarei", "morei", "morava", "moro"],2,"Estado pasado → imperfeito: “morava”."],
      ["translate","Traduce: “As a child, I would always play in the park.”",["Quando criança, eu sempre brincava no parque.", "Quando criança, eu sempre brinco no parque.", "Quando criança, eu sempre vou brincar no parque.", "Quando criança, eu sempre brinquei no parque."],0,"Hábito pasado repetido → imperfeito: “brincava”."],
      ["arrange","Ordena: [Roma / morava / em / eu]",["morava Roma em eu", "morava em Roma eu", "eu morava em Roma", "eu Roma morava em"],2,"Sujeto + imperfeito + preposición + objeto."],
      ["speaking","Fale em português, em 35-45 palavras, sobre como era sua vida há dez anos, usando o pretérito imperfeito.",[],["morava", "costumava", "hoje em dia"]],
    ]
  },
  {
    id:"pt_c1_inversao_enfase", level:"C1", title:"A anteposição de advérbios negativos para dar ênfase", emoji:"❗", xp:65,
    description:"Aprende a anteponer adverbios negativos y restrictivos para dar énfasis en portugués.",
    study: {
      vocab: [
        ["Jamais pensei que...", "Nunca pensé..."],
        ["Não só..., mas também...", "No solo... sino también..."],
        ["Só depois de..., ...", "Solo después de..., ..."],
        ["Mal...quando...", "Apenas... cuando..."],
        ["estrutura enfática", "estructura enfática"],
      ],
      grammar: [
        ["Anteposición de adverbios negativos/restrictivos", "El portugués no tiene inversión sujeto-auxiliar como el inglés, pero antepone adverbios negativos/restrictivos (“jamais”, “mal”, “não só”) al inicio de la oración para dar énfasis.", "Jamais pensei que o veria de novo. / Não só ganhou a corrida, mas também bateu o recorde."],
      ]
    },
    ex:[
      ["mcq","¿Qué expresión introduce dos acciones casi simultáneas, la segunda inesperada?",["Não só...mas também...", "Mal...quando...", "Só depois de...", "Jamais pensei que..."],1,"“Mal...quando...” indica dos acciones casi simultáneas."],
      ["mcq","¿Cómo se dice “not only... but also...” en portugués?",["Jamais pensei que...", "Não só..., mas também...", "Só depois de...", "Mal...quando..."],1,"“Not only...but also...” es “não só...mas também...”."],
      ["fill","Completa: “___ tinha chegado quando teve que ir embora de novo.”",["Mal", "Jamais", "Não só", "Só"],0,"“Mal...quando...” indica que una acción ocurre justo antes de otra."],
      ["translate","Traduce: “Not only did she win the race, but she also broke the record.”",["Não só ganhou a corrida, mas também bateu o recorde.", "Só não ganhou a corrida, mas também bateu o recorde.", "Não só ela ganhou a corrida, porém também bateu o recorde.", "Não só ganhou a corrida, mas bateu também o recorde ela."],0,"“Não só...mas também...” es la estructura correcta en portugués."],
      ["arrange","Ordena: [visto / tinha / jamais / algo / assim]",["jamais tinha visto algo assim", "assim jamais algo visto tinha", "visto jamais tinha algo assim", "visto tinha jamais algo assim"],0,"Adverbio + pretérito mais-que-perfeito + objeto."],
      ["writing","Escreva em português 35-45 palavras sobre uma conquista ou experiência usando pelo menos uma dessas estruturas enfáticas: ‘jamais’, ‘não só... mas também’, ‘mal... quando’.",[],["jamais", "não só", "mal"]],
    ]
  },
  {
    id:"pt_c1_frase_clivada", level:"C1", title:"A frase clivada: foi...quem / o que...é", emoji:"🎯", xp:65,
    description:"Aprende a usar frases clivadas para dar énfasis a un elemento en portugués.",
    study: {
      vocab: [
        ["Foi... quem/que...", "Fue... quien/que... (énfasis)"],
        ["O que eu preciso é...", "Lo que necesito es..."],
        ["O que me surpreendeu foi...", "Lo que me sorprendió fue..."],
        ["É/foi + sustantivo + quem/que", "Es/Era + sustantivo + quien/que"],
        ["ênfase por meio de estrutura", "énfasis mediante la estructura"],
      ],
      grammar: [
        ["“Foi...quem/que” y “o que...é”", "El portugués enfatiza un elemento reorganizando la información con “foi...quem/que” o “o que...é”.", "Foi a Maria quem resolveu o problema. / O que eu preciso é de mais tempo."],
      ]
    },
    ex:[
      ["mcq","¿Qué estructura enfatiza el sujeto con “foi”?",["Jamais pensei que...", "O que... é...", "Foi... quem/que...", "Não só..."],2,"“Foi...quem/que...” enfatiza el sujeto."],
      ["mcq","¿Qué estructura enfatiza usando “lo que”?",["Só depois de...", "O que... é...", "Foi... quem...", "Mal...quando..."],1,"“O que...é...” enfatiza el complemento."],
      ["fill","Completa: “___ eu preciso é de mais tempo.”",["Foi", "Isso", "Quem", "O que"],3,"“O que + cláusula + é” enfatiza el complemento."],
      ["translate","Traduce: “It was Maria who solved the problem.”",["Foi a Maria quem resolveu o problema.", "A Maria foi quem resolveu o problema.", "Foi a Maria quem resolve o problema.", "Foi a Maria que resolvido o problema."],0,"“Foi + persona + quem” enfatiza el sujeto en pasado."],
      ["arrange","Ordena: [preciso / o / é / que / tempo / eu / mais / de]",["o que eu preciso é de mais tempo", "eu que tempo é o mais de preciso", "tempo que de preciso eu é mais o", "o tempo preciso que é de eu mais"],0,"“O que” + cláusula + “é” + complemento."],
      ["speaking","Fale em português, em 35-45 palavras, usando pelo menos duas frases clivadas (‘foi...quem’ e ‘o que...é’) para enfatizar ideias importantes da sua vida.",[],["foi", "o que eu preciso", "quem"]],
    ]
  },
  {
    id:"pt_c1_gerundio_participio_reduzidas", level:"C1", title:"Orações reduzidas de gerúndio e particípio", emoji:"✂️", xp:65,
    description:"Aprende a reducir cláusulas más largas usando oraciones reducidas en portugués.",
    study: {
      vocab: [
        ["Tendo terminado..., ...", "Habiendo terminado..., ..."],
        ["Ciente de..., ...", "Siendo consciente de..., ..."],
        ["Não sabendo o que fazer, ...", "Sin saber qué hacer, ..."],
        ["oração reduzida", "cláusula reducida"],
        ["reduz uma oração mais longa", "reduce una cláusula más larga"],
      ],
      grammar: [
        ["“Tendo + particípio” y gerundio simple", "“Tendo + particípio” o el gerundio simple reducen cláusulas subordinadas más largas, dando un estilo más formal y conciso.", "Tendo terminado o relatório, ela foi para casa. / Não sabendo o que fazer, ele ligou para o advogado."],
      ]
    },
    ex:[
      ["mcq","¿Qué forma reemplaza a “Depois que ela terminou o relatório”?",["Terminando o relatório", "Terminado o relatório ela", "Tendo terminado o relatório", "Para terminar o relatório"],2,"“Tendo + particípio” reemplaza una acción completada antes de otra."],
      ["mcq","¿Qué forma reemplaza a “Porque ele não sabia o que fazer”?",["Sabendo não o que fazer", "Tendo não sabido o que fazer", "Não saber o que fazer", "Não sabendo o que fazer"],3,"El gerundio simple negado reemplaza una cláusula causal: “não sabendo”."],
      ["fill","Completa: “___ o relatório, ela foi para casa.”",["Terminando", "Terminado", "Para terminar", "Tendo terminado"],3,"Acción completada antes de otra → “tendo + particípio”."],
      ["translate","Traduce: “Not knowing what to say, he remained silent.”",["Não sabendo o que dizer, ele ficou em silêncio.", "Não saber o que dizer, ele ficou em silêncio.", "Tendo não sabido o que dizer, ele ficou em silêncio.", "Sabendo não o que dizer, ele ficou em silêncio."],0,"El gerundio simple negado al inicio reemplaza una cláusula causal."],
      ["arrange","Ordena: [casa / terminado / tendo / para / relatório / foi / o / ela]",["terminado tendo para o foi relatório casa ela", "tendo terminado o relatório ela foi para casa", "ela para casa foi terminado tendo relatório o", "ela foi tendo casa relatório o para terminado"],1,"Cláusula reducida + sujeto + verbo + complemento."],
      ["writing","Escreva em português 35-45 palavras contando uma história curta usando pelo menos uma oração reduzida de gerúndio ou particípio (Tendo..., Não sabendo..., Ciente de...).",[],["tendo", "não sabendo", "ciente de"]],
    ]
  },
  {
    id:"pt_c1_verbos_relato_subjuntivo", level:"C1", title:"Verbos de relato avançados: sugerir, insistir, negar", emoji:"🗨️", xp:66,
    description:"Aprende los patrones gramaticales de verbos de reporte avanzados en portugués.",
    study: {
      vocab: [
        ["sugerir que + subjuntivo", "sugerir que + subjuntivo"],
        ["insistir para que + subjuntivo", "insistir en que + subjuntivo"],
        ["negar + infinitivo composto", "negar haber hecho"],
        ["admitir + infinitivo composto", "admitir haber hecho"],
        ["recomendar que + subjuntivo", "recomendar que + subjuntivo"],
      ],
      grammar: [
        ["Verbos de relato que exigen subjuntivo o infinitivo compuesto", "Verbos como “sugerir que”, “insistir para que” y “recomendar que” exigen subjuntivo; “negar” y “admitir” van seguidos de “ter + particípio” para una acción pasada.", "Ela sugeriu que ele chegasse cedo. / Ele negou ter roubado o dinheiro."],
      ]
    },
    ex:[
      ["mcq","¿Qué modo verbal exige “sugerir que”?",["o subjuntivo", "o infinitivo", "o imperativo", "o indicativo"],0,"“Sugerir que” exige el subjuntivo en la subordinada."],
      ["mcq","¿Cómo se completa “Ele negou ___ o dinheiro” (roubar, acción pasada)?",["roubado", "ter roubado", "roubando", "roubar"],1,"“Negar” + “ter + particípio” para acciones pasadas."],
      ["fill","Completa: “O médico recomendou que ela ___ por uma semana.”",["descansar", "descansou", "descansa", "descansasse"],3,"“Recomendar que” exige subjuntivo imperfecto: “descansasse”."],
      ["translate","Traduce: “He admitted making a mistake.”",["Ele admitiu ter cometido um erro.", "Ele admitiu ter cometer um erro.", "Ele admitiu que cometia um erro.", "Ele admitiu cometer um erro."],0,"“Admitir” + “ter + particípio” para una acción ya realizada."],
      ["arrange","Ordena: [dinheiro / negou / ter / roubado / ele / o]",["dinheiro o ter negou ele roubado", "dinheiro roubado o ele ter negou", "ele negou ter roubado o dinheiro", "roubado ter ele negou dinheiro o"],2,"Sujeto + “negar” + “ter + particípio” + objeto."],
      ["writing","Escreva em português 35-45 palavras relatando uma conversa usando pelo menos dois verbos de relato avançados (sugerir, insistir, negar, admitir).",[],["sugeriu que", "negou", "admitiu"]],
    ]
  },
  {
    id:"pt_c1_elipse_substituicao", level:"C1", title:"Elipse e substituição no discurso", emoji:"➖", xp:65,
    description:"Aprende a evitar repeticiones en portugués usando elipsis y expresiones sustitutas.",
    study: {
      vocab: [
        ["Eu também / Eu também não", "Yo también / Yo tampoco"],
        ["fazê-lo", "hacerlo así"],
        ["Acho que sim / Espero que não", "creo que sí / espero que no"],
        ["o mesmo vale para...", "lo mismo vale para..."],
        ["omitir palavras repetidas", "omitir palabras repetidas"],
      ],
      grammar: [
        ["Elipsis y expresiones sustitutas", "El portugués evita repetir información con elipsis y expresiones sustitutas como “eu também/eu também não”, “acho que sim/não”.", "A: Eu adoro essa música. B: Eu também. / A: Vai chover? B: Espero que não."],
      ]
    },
    ex:[
      ["mcq","¿Cómo respondes con acuerdo afirmativo a “Eu adoro essa música”?",["Eu também.", "Fazê-lo.", "Espero que não.", "Eu também não."],0,"“Eu também” expresa acuerdo con una afirmación."],
      ["mcq","¿Cómo respondes con acuerdo negativo a “Eu não gosto de café”?",["Eu também não.", "Fazê-lo.", "Eu também.", "Acho que sim."],0,"“Eu também não” expresa acuerdo con una negación."],
      ["fill","Completa: “A: Ela virá à festa? B: Espero que ___.”",["tampouco", "não", "sim", "também"],2,"“Espero que sim” sustituye la cláusula afirmativamente."],
      ["translate","Traduce: “A: I think it will rain. B: I think so too.”",["A: Acho que vai chover. B: Eu acho isso também demais.", "A: Acho que vai chover. B: Eu também acho.", "A: Acho que vai chover. B: Também eu acho.", "A: Acho que vai chover. B: Eu acho também isso."],1,"“Eu também acho” sustituye la cláusula repetida."],
      ["arrange","Ordena: [também / eu / acho]",["eu acho também", "também acho eu", "eu também acho", "acho também eu"],2,"Sujeto + “também” + verbo."],
      ["speaking","Fale em português, em 30-40 palavras, sobre gostos em comum com um amigo usando ‘eu também’, ‘eu também não’ e ‘acho que sim’.",[],["eu também", "eu também não", "acho que sim"]],
    ]
  },
  {
    id:"pt_c2_nominalizacao", level:"C2", title:"A nominalização para um registro formal", emoji:"📜", xp:70,
    description:"Aprende a usar la nominalización para lograr un registro académico y formal en portugués.",
    study: {
      vocab: [
        ["reduzir → a redução", "reducir → reducción"],
        ["decidir → a decisão", "decidir → decisión"],
        ["analisar → a análise", "analizar → análisis"],
        ["É importante considerar...", "Es importante considerar..."],
        ["registro acadêmico/formal", "registro académico/formal"],
      ],
      grammar: [
        ["La nominalización compacta la información", "La nominalización convierte verbos y adjetivos en sustantivos abstractos, un recurso típico del registro académico y formal en portugués.", "A empresa decidiu reduzir custos. → A decisão da empresa de reduzir custos... / Eles analisaram os dados com cuidado. → A análise cuidadosa deles dos dados..."],
      ]
    },
    ex:[
      ["mcq","¿Cuál es la nominalización de “decidir”?",["decisivo", "decidindo", "a decisão", "o decisor"],2,"La nominalización de “decidir” es “a decisão”."],
      ["mcq","¿Cuál es la nominalización de “analisar”?",["analisando", "a análise", "o analisador", "analítico"],1,"La nominalización de “analisar” es “a análise”."],
      ["fill","Completa: “A ___ cuidadosa dos dados revelou novos padrões.”",["analisando", "análise", "analisar", "analisador"],1,"Registro formal → sustantivo nominalizado: “análise”."],
      ["translate","Traduce: “The decision to reduce costs was controversial.”",["A decisiva de reduzir custos foi controversa.", "A decisão de reduzir custos foi controverso.", "A decisão de reduzir custos foi controversa.", "O decidir de reduzir custos foi controversa."],2,"“Decidir” se nominaliza como “a decisão”."],
      ["arrange","Ordena: [foi / decisão / controversa / a]",["decisão controversa foi a", "foi controversa a decisão", "controversa foi decisão a", "a decisão foi controversa"],3,"Sustantivo nominalizado + verbo + adjetivo."],
      ["writing","Escreva em português 40-50 palavras em um registro formal/acadêmico usando pelo menos dois substantivos nominalizados (decisão, análise, redução...).",[],["decisão", "análise", "redução"]],
    ]
  },
  {
    id:"pt_c2_anteposicao_enfatica", level:"C2", title:"A anteposição para dar ênfase", emoji:"⏩", xp:70,
    description:"Aprende a anteponer objetos y complementos para dar énfasis en portugués.",
    study: {
      vocab: [
        ["Isso eu não posso aceitar.", "Esto no puedo aceptarlo."],
        ["Tal era sua determinação que...", "Tal fue su determinación que..."],
        ["Pouco imaginava ele que...", "Poco sabía él..."],
        ["Aquele que mais admiro é...", "El que más admiro es..."],
        ["tematização", "tematización"],
      ],
      grammar: [
        ["Anteposición retomada con pronombre", "El portugués permite anteponer un objeto o complemento al inicio de la oración para darle énfasis, retomándolo a menudo con un pronombre (“isso eu não posso aceitar”).", "Isso eu não posso aceitar. / Tal era o caos que a reunião foi cancelada."],
      ]
    },
    ex:[
      ["mcq","¿Qué frase antepone el objeto para dar énfasis?",["Eu não posso aceitar isso.", "Eu não posso aceitá-lo, isso.", "Isso eu não posso aceitar.", "Isso posso não aceitar."],2,"“Isso eu não posso aceitar” antepone el objeto “isso”."],
      ["mcq","¿Qué estructura implica que algo sucedió sin que el sujeto lo supiera?",["Tal era sua determinação...", "Isso eu não posso aceitar.", "Eu também.", "Pouco imaginava ele que..."],3,"“Pouco imaginava ele que...” implica ignorancia sobre algo que ocurriría."],
      ["fill","Completa: “___ imaginava ele que seu plano fracassaria.”",["Jamais", "Só", "Pouco", "Mal"],2,"“Pouco imaginava ele que...” es una estructura fija de énfasis."],
      ["translate","Traduce: “Such was the chaos that the meeting was cancelled.”",["Tanto era o caos que a reunião foi cancelada.", "Tal o caos era que a reunião foi cancelada.", "Tal era o caos que a reunião era cancelada.", "Tal era o caos que a reunião foi cancelada."],3,"“Tal era + sustantivo + que” es una estructura fija de énfasis."],
      ["arrange","Ordena: [aceitar / isso / posso / não / eu]",["posso isso eu não aceitar", "aceitar isso eu não posso", "isso eu não posso aceitar", "não isso posso eu aceitar"],2,"Objeto antepuesto + sujeto + verbo."],
      ["speaking","Fale em português, em 40-50 palavras, sobre uma reviravolta inesperada na sua vida usando pelo menos uma estrutura de anteposição enfática.",[],["isso eu", "pouco imaginava", "tal era"]],
    ]
  },
  {
    id:"pt_c2_adverbios_atitude", level:"C2", title:"Advérbios de atitude avançados", emoji:"🎭", xp:70,
    description:"Aprende a matizar tus afirmaciones en portugués con adverbios de actitud avanzados.",
    study: {
      vocab: [
        ["pode-se dizer que", "podría decirse que"],
        ["aparentemente", "aparentemente"],
        ["supostamente", "supuestamente"],
        ["inegavelmente", "innegablemente"],
        ["presumivelmente", "presuntamente"],
      ],
      grammar: [
        ["Los adverbios de actitud matizan el compromiso del hablante", "Los adverbios de actitud muestran el grado de compromiso del hablante con la veracidad de una afirmación, matizando sin negar directamente.", "A política foi, pode-se dizer, um fracasso. / Ele estava aparentemente ali para ajudar, mas tinha outros motivos."],
      ]
    },
    ex:[
      ["mcq","¿Qué expresión indica que algo se afirma sin pruebas confirmadas?",["presumivelmente", "pode-se dizer que", "inegavelmente", "supostamente"],3,"“Supostamente” indica algo dicho sin confirmación."],
      ["mcq","¿Qué adverbio indica algo indiscutible?",["supostamente", "aparentemente", "inegavelmente", "pode-se dizer que"],2,"“Inegavelmente” indica algo innegable."],
      ["fill","Completa: “Ele estava ___ ali para ajudar, mas tinha outros motivos.”",["inegavelmente", "aparentemente", "pode-se dizer", "presumivelmente"],1,"“Aparentemente” indica una apariencia que contrasta con la realidad."],
      ["translate","Traduce: “This is, arguably, his best work.”",["Este é, aparentemente, seu melhor trabalho.", "Este é, pode-se dizer, seu melhor trabalho.", "Este é, inegavelmente, seu melhor trabalho.", "Este é, supostamente, seu melhor trabalho."],1,"“Podría decirse que” se traduce como “pode-se dizer que”."],
      ["arrange","Ordena: [fracasso / foi / a / política / um]",["a política foi um fracasso", "um política fracasso foi a", "a política fracasso foi um", "a política um fracasso foi"],0,"Sujeto + verbo + artículo + sustantivo."],
      ["writing","Escreva em português 40-50 palavras dando sua opinião sobre um tema controverso usando pelo menos dois advérbios de atitude (pode-se dizer que, inegavelmente, presumivelmente...).",[],["pode-se dizer que", "inegavelmente", "presumivelmente"]],
    ]
  },
  {
    id:"pt_c2_sintagmas_nominais_complexos", level:"C2", title:"Sintagmas nominais complexos no registro acadêmico", emoji:"🧩", xp:70,
    description:"Aprende a usar sintagmas nominales complejos típicos del portugués académico.",
    study: {
      vocab: [
        ["o grau em que...", "el grado en que..."],
        ["um número crescente de evidências", "un creciente cuerpo de evidencia"],
        ["as causas subjacentes de...", "las causas subyacentes de..."],
        ["uma ampla gama de fatores", "una amplia gama de factores"],
        ["pós-modificação", "postmodificación"],
      ],
      grammar: [
        ["Sintagmas nominales con posmodificadores", "El portugués académico usa sintagmas nominales complejos, con posmodificadores (cláusulas de relativo, frases preposicionales) para compactar información densa.", "Um número crescente de evidências sugere que... / O grau em que as políticas têm sucesso depende de..."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “a growing body of evidence” en portugués?",["as causas subjacentes de", "uma ampla gama de fatores", "o grau em que", "um número crescente de evidências"],3,"“A growing body of evidence” es “um número crescente de evidências”."],
      ["mcq","¿Cómo se dice “the underlying causes of” en portugués?",["um número crescente de evidências", "as causas subjacentes de", "o grau em que", "uma ampla gama de fatores"],1,"“The underlying causes of” es “as causas subjacentes de”."],
      ["fill","Completa: “___ em que a política tem sucesso depende do apoio público.”",["Um número crescente", "As causas subjacentes", "O grau", "Uma ampla gama"],2,"“O grau em que” introduce el grado en que algo ocurre."],
      ["translate","Traduce: “A growing body of evidence suggests that the climate is changing.”",["Um crescente número de evidências sugere o clima está mudando.", "Um número crescente de evidências sugere que o clima está mudando.", "Um número crescente de evidências sugerem que o clima está mudando.", "Um número crescente de evidência sugere que o clima está mudando."],1,"El verbo concuerda con “número” (singular): “sugere”."],
      ["arrange","Ordena: [fatores / gama / ampla / uma / de]",["uma ampla gama de fatores", "fatores uma gama ampla de", "uma fatores gama de ampla", "ampla fatores gama uma de"],0,"Artículo + adjetivo + sustantivo + “de” + sustantivo."],
      ["speaking","Fale em português, em 40-50 palavras, sobre um tema acadêmico ou social usando pelo menos dois sintagmas nominais complexos.",[],["um número crescente de", "uma ampla gama de", "o grau em que"]],
    ]
  },
  {
    id:"pt_c2_coesao_textual", level:"C2", title:"Coesão textual: referência e substituição avançada", emoji:"🧵", xp:70,
    description:"Aprende recursos de cohesión textual avanzados en portugués para evitar la redundancia.",
    study: {
      vocab: [
        ["o primeiro / o segundo (mencionados)", "el primero / el segundo"],
        ["tal um/uma...", "tal..."],
        ["o/a supracitado/a", "lo antes mencionado"],
        ["dito isso...", "dicho esto..."],
        ["recurso de coesão textual", "recurso de cohesión textual"],
      ],
      grammar: [
        ["“O primeiro/o segundo” y otros recursos de cohesión", "En textos largos, se usan recursos de cohesión como “o primeiro/o segundo” para referirse a elementos mencionados antes sin repetirlos.", "Consideramos duas opções: trabalho remoto e trabalho presencial. O primeiro oferece flexibilidade, enquanto o segundo favorece a colaboração."],
      ]
    },
    ex:[
      ["mcq","¿Qué expresión se refiere al primero de dos elementos mencionados?",["o segundo", "dito isso", "o supracitado", "o primeiro"],3,"“O primeiro” se refiere al primero de dos elementos."],
      ["mcq","¿Qué expresión se refiere al segundo de dos elementos mencionados?",["o primeiro", "tal um", "o segundo", "o supracitado"],2,"“O segundo” se refiere al segundo de dos elementos."],
      ["fill","Completa: “Consideramos duas opções: A e B. ___ oferece flexibilidade.”",["O segundo", "Dito isso", "O primeiro", "O supracitado"],2,"“O primeiro” se refiere a la primera opción mencionada (A)."],
      ["translate","Traduce: “That being said, there are still questions to resolve.”",["Dizendo isso, ainda há perguntas a resolver.", "Isso dito, ainda há perguntas a resolver.", "Dito isso, ainda havia perguntas a resolver.", "Dito isso, ainda há perguntas a resolver."],3,"“That being said” es “dito isso”."],
      ["arrange","Ordena: [flexibilidade / primeiro / o / oferece]",["oferece o primeiro flexibilidade", "flexibilidade o oferece primeiro", "o primeiro oferece flexibilidade", "o oferece primeiro flexibilidade"],2,"“O primeiro” + verbo + complemento."],
      ["writing","Escreva em português 40-50 palavras comparando duas opções usando ‘o primeiro’, ‘o segundo’ e ‘dito isso’.",[],["o primeiro", "o segundo", "dito isso"]],
    ]
  },
  {
    id:"pt_a1_imperatives", level:"A1", title:"O imperativo: instruções e conselhos diretos", emoji:"👉", xp:34,
    description:"Aprende a dar instrucciones y consejos directos en portugués con el imperativo.",
    study: {
      vocab: [
        ["Abra a porta.", "Abre la puerta."],
        ["Feche a janela.", "Cierra la ventana."],
        ["Vire à esquerda / à direita.", "Gira a la izquierda / derecha."],
        ["Não toque nisso.", "No toques eso."],
        ["Sente-se, por favor.", "Por favor, siéntate."],
      ],
      grammar: [
        ["El imperativo “você” toma la forma del subjuntivo", "En portugués de Brasil, el imperativo con “você” usa la forma del presente do subjuntivo (abra, feche, vire), no la del presente do indicativo.", "Abra a porta. / Não toque nisso. / Espere aqui, por favor."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “Open the door” en portugués (imperativo você)?",["Abra a porta.", "Abrir a porta.", "Abre a porta.", "Abrindo a porta."],0,"El imperativo de “abrir” es “abra” (subjuntivo)."],
      ["mcq","¿De qué modo/tiempo verbal se toma la forma del imperativo con “você”?",["el presente do subjuntivo", "el presente do indicativo", "el gerúndio", "el infinitivo"],0,"El imperativo con “você” toma la forma del presente do subjuntivo."],
      ["fill","Completa: “Não ___ nisso; está quente.”",["toque", "toca", "tocar", "tocando"],0,"Imperativo negativo con “você”: “toque”."],
      ["translate","Traduce: “Please, sit down.”",["Sentado, por favor.", "Sentar-se, por favor.", "Você se senta, por favor.", "Sente-se, por favor."],3,"Imperativo de “sentar-se”: “sente-se”."],
      ["arrange","Ordena: [porta / abra / a]",["porta abra a", "porta a abra", "a abra porta", "abra a porta"],3,"Imperativo + artículo + sustantivo."],
      ["writing","Escreva em português 20-30 palavras com três instruções usando o imperativo (afirmativo e negativo).",[],["abra", "não toque", "por favor"]],
    ]
  },
  {
    id:"pt_a1_demonstratives", level:"A1", title:"Os demonstrativos: este, esse, aquele", emoji:"👆", xp:34,
    description:"Aprende a usar este, esse y aquele en portugués según la distancia.",
    study: {
      vocab: [
        ["este/esta/isto", "este (cerca del hablante)"],
        ["esse/essa/isso", "ese (cerca del oyente)"],
        ["aquele/aquela/aquilo", "aquel (lejos de ambos)"],
        ["estes/estas", "estos/estas"],
        ["O que é isto?", "¿Qué es esto?"],
      ],
      grammar: [
        ["Tres grados de distancia en portugués", "Como el español, el portugués tiene tres grados de distancia: “este” (cerca de mí), “esse” (cerca de ti), “aquele” (lejos de los dos) — a diferencia del inglés que solo distingue dos.", "Este é o meu telefone. / Aqueles são meus amigos, lá longe."],
      ]
    },
    ex:[
      ["mcq","¿Qué palabra usas para algo cerca de ti (el hablante)?",["esse", "este", "aqueles", "aquele"],1,"“Este” es para algo cerca del hablante."],
      ["mcq","¿Qué palabra usas para algo lejos de ambos hablantes?",["este", "esses", "esse", "aquele"],3,"“Aquele” es para algo lejos de ambos."],
      ["fill","Completa: “___ são meus amigos, lá longe.”",["Este", "Esses", "Aqueles", "Estes"],2,"Lejos de ambos, plural → “aqueles”."],
      ["translate","Traduce: “These are my books.”",["Esses são meus livros.", "Aquele são meus livros.", "Este são meus livros.", "Estes são meus livros."],3,"Cerca del hablante, plural → “estes”."],
      ["arrange","Ordena: [telefone / é / meu / este]",["este meu é telefone", "este meu telefone é", "este é meu telefone", "é telefone este meu"],2,"Demostrativo + verbo “ser” + posesivo + sustantivo."],
      ["writing","Escreva em português 20-30 palavras descrevendo objetos perto e longe de você usando este, esse e aquele.",[],["este", "esse", "aquele"]],
    ]
  },
  {
    id:"pt_a1_prepositions_time", level:"A1", title:"Preposições de tempo: às, em, na", emoji:"⏰", xp:35,
    description:"Aprende a usar las preposiciones de tiempo às, em y na en portugués.",
    study: {
      vocab: [
        ["às + hora", "a + hora (às 9 horas)"],
        ["em + mês/ano", "en + mes/año (em julho)"],
        ["na + dia da semana", "en + día de la semana (na segunda-feira)"],
        ["à noite", "de noche"],
        ["de manhã / à tarde", "por la mañana / por la tarde"],
      ],
      grammar: [
        ["Às, em y na (contracciones con artículo)", "“Às” (a + as) se usa con horas exactas, “em” con meses y años, y “na” (em + a) delante de un día de la semana.", "A aula começa às 9 horas. / Eu nasci em julho. / Nos vemos na segunda-feira."],
      ]
    },
    ex:[
      ["mcq","¿Qué preposición usas con una hora exacta?",["por", "em", "na", "às"],3,"“Às” se usa con horas exactas."],
      ["mcq","¿Qué artículo usas delante de un día de la semana?",["em", "por", "às", "na"],3,"“Na” se usa delante de días de la semana."],
      ["fill","Completa: “Eu nasci ___ julho.”",["na", "por", "às", "em"],3,"“Em” se usa con meses."],
      ["translate","Traduce: “We meet on Mondays.”",["Nos vemos em segunda-feira.", "Nos vemos às segunda-feira.", "Nos vemos por segunda-feira.", "Nos vemos na segunda-feira."],3,"“Na” se usa con días de la semana."],
      ["arrange","Ordena: [9 / começa / horas / aula / às / a]",["9 a horas às aula começa", "começa a às aula horas 9", "horas começa às aula a 9", "a aula começa às 9 horas"],3,"Sujeto + verbo + “às” + hora."],
      ["writing","Escreva em português 20-30 palavras sobre seu horário semanal usando às, em e na.",[],["às", "em", "na"]],
    ]
  },
  {
    id:"pt_a1_frequency_adverbs", level:"A1", title:"Advérbios de frequência: sempre, normalmente, às vezes, nunca", emoji:"🔁", xp:35,
    description:"Aprende a usar los adverbios de frecuencia en portugués.",
    study: {
      vocab: [
        ["sempre", "siempre"],
        ["normalmente", "normalmente"],
        ["às vezes", "a veces"],
        ["raramente", "raramente"],
        ["nunca", "nunca"],
      ],
      grammar: [
        ["Posición de los adverbios de frecuencia", "Los adverbios de frecuencia suelen ir antes del verbo, o al inicio/final de la oración; “nunca” antes del verbo no necesita “não”, pero después del verbo sí lo requiere.", "Eu sempre tomo café de manhã. / Ela nunca chega atrasada. / Ela não chega atrasada nunca."],
      ]
    },
    ex:[
      ["mcq","¿Dónde suele ir el adverbio de frecuencia respecto al verbo?",["solo al principio", "antes", "solo al final", "siempre después"],1,"El adverbio de frecuencia suele ir antes del verbo."],
      ["mcq","¿Cómo se dice “a veces” en portugués?",["nunca", "sempre", "normalmente", "às vezes"],3,"“A veces” es “às vezes”."],
      ["fill","Completa: “Ela ___ chega atrasada ao trabalho.”",["nada", "não nunca", "nunca", "sempre não"],2,"“Nunca” antes del verbo no necesita “não”."],
      ["translate","Traduce: “I always drink coffee in the morning.”",["Eu tomo café sempre de manhã.", "Eu tomando sempre café de manhã.", "Sempre eu tomando café de manhã.", "Eu sempre tomo café de manhã."],3,"El adverbio suele ir antes del verbo: “sempre tomo”."],
      ["arrange","Ordena: [trabalho / vou / normalmente / ao / ônibus / de]",["vou de normalmente ao ônibus trabalho", "normalmente vou ao trabalho de ônibus", "de normalmente trabalho vou ao ônibus", "de ônibus trabalho vou ao normalmente"],1,"Adverbio + sujeto + verbo + complemento."],
      ["writing","Escreva em português 20-30 palavras sobre sua rotina usando pelo menos três advérbios de frequência.",[],["sempre", "normalmente", "às vezes"]],
    ]
  },
  {
    id:"pt_a1_de_posse", level:"A1", title:"A preposição “de” para expressar posse", emoji:"🔗", xp:34,
    description:"Aprende a expresar posesión en portugués con la preposición “de”.",
    study: {
      vocab: [
        ["o livro da Ana", "el libro de Ana"],
        ["os brinquedos das crianças", "los juguetes de los niños"],
        ["De quem é isso?", "¿De quién es esto?"],
        ["É da Ana.", "Es de Ana."],
        ["a casa dos meus pais", "la casa de mis padres"],
      ],
      grammar: [
        ["“De + poseedor”, contraído con el artículo", "A diferencia del inglés (Ana's book), el portugués siempre expresa la posesión con “de + poseedor”, después del objeto poseído; “de + a” se contrae en “da”, “de + os” en “dos”.", "Este é o livro da Ana. / A casa dos meus pais é grande."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “Ana's book” en portugués?",["da Ana o livro", "o livro da Ana", "o Ana's livro", "Ana de livro"],1,"“Ana's book” es “o livro da Ana”."],
      ["mcq","¿En qué se contrae “de + os” en portugués?",["do", "de os", "das", "dos"],3,"“De + os” se contrae en “dos”."],
      ["fill","Completa: “Estes são os brinquedos ___ crianças.”",["do", "de as", "das", "dos"],2,"“De + as” se contrae en “das”."],
      ["translate","Traduce: “Whose book is this? It's Ana's.”",["De quem é este livro? É da Ana.", "De quem este livro é? É da Ana.", "Quem é este livro? É da Ana.", "De quem é este livro? É Ana's."],0,"“¿De quién?” + “é da Ana”."],
      ["arrange","Ordena: [Ana / livro / o / da / é / este]",["este é o livro da Ana", "livro é da este Ana o", "o é livro este da Ana", "da este livro o Ana é"],0,"Sujeto + verbo + artículo + sustantivo + “da” + poseedor."],
      ["writing","Escreva em português 20-30 palavras descrevendo objetos que pertencem a pessoas diferentes usando “de” para expressar posse.",[],["de", "de quem", "é da"]],
    ]
  },
  {
    id:"pt_a2_reflexivos", level:"A2", title:"Os verbos reflexivos e os pronomes reflexivos", emoji:"🪞", xp:46,
    description:"Aprende a usar los verbos y pronombres reflexivos en portugués.",
    study: {
      vocab: [
        ["me, te, se, nos, se", "pronombres reflexivos"],
        ["levantar-se", "levantarse"],
        ["vestir-se", "vestirse"],
        ["Eu me cortei cozinhando.", "Me corté mientras cocinaba."],
        ["sozinho/a", "yo solo/a"],
      ],
      grammar: [
        ["Próclise: el pronombre va antes del verbo", "Muchos verbos portugueses son reflexivos y exigen un pronombre reflexivo que concuerda con el sujeto; en el portugués de Brasil hablado, el pronombre normalmente va ANTES del verbo (próclise).", "Eu me levanto às sete. / Ela se veste rapidamente."],
      ]
    },
    ex:[
      ["mcq","¿Qué pronombre reflexivo corresponde a “eu”?",["nos", "me", "se", "te"],1,"“Eu” usa el pronombre “me”."],
      ["mcq","¿Qué pronombre reflexivo corresponde a “ela”?",["te", "me", "nos", "se"],3,"“Ela” usa el pronombre “se”."],
      ["fill","Completa: “Eu ___ cortei cozinhando.”",["nos", "te", "se", "me"],3,"“Eu” usa el pronombre reflexivo “me”."],
      ["translate","Traduce: “She lives by herself.”",["Ela mora ela mesma.", "Ela se mora sozinha.", "Ela mora sozinha.", "Ela mora por ela mesma."],2,"“Morar” no es reflexivo aquí; “sozinha” expresa “by herself”."],
      ["arrange","Ordena: [sete / levanto / às / me / eu]",["levanto eu me sete às", "às sete levanto eu me", "sete levanto às eu me", "eu me levanto às sete"],3,"Sujeto + pronombre reflexivo + verbo + hora."],
      ["speaking","Fale em português por 25-35 palavras sobre sua rotina diária usando pelo menos três verbos reflexivos (levantar-se, vestir-se, arrumar-se...).",[],["eu me levanto", "eu me visto", "eu me arrumo"]],
    ]
  },
  {
    id:"pt_a2_pronomes_objeto_direto", level:"A2", title:"Os pronomes de objeto direto: o, a, os, as", emoji:"🎯", xp:46,
    description:"Aprende a usar los pronombres de objeto directo en portugués, formal e informal.",
    study: {
      vocab: [
        ["o/a (formal/escrito)", "lo/la (objeto directo)"],
        ["os/as (formal/escrito)", "los/las (objeto directo)"],
        ["ele/ela (uso informal como objeto)", "lo/la (habla informal)"],
        ["Você pode me ajudar?", "¿Puedes ayudarme?"],
        ["Eu vi ela ontem.", "La vi ayer. (habla informal)"],
      ],
      grammar: [
        ["Formal 'o/a' vs informal 'ele/ela'", "En el portugués formal/escrito, los pronombres de objeto directo son “o/a/os/as”; en el habla informal de Brasil, es muy común usar simplemente el pronombre sujeto (ele/ela) como objeto.", "Eu vi minha irmã ontem. → Eu a vi ontem. (formal) / Eu vi ela ontem. (informal, muy común)"],
      ]
    },
    ex:[
      ["mcq","¿Qué pronombre formal reemplaza a “minha irmã” (femenino singular)?",["as", "os", "o", "a"],3,"“Minha irmã” se reemplaza por “a” en registro formal."],
      ["mcq","¿Qué es muy común en el habla informal de Brasil en vez de “o/a”?",["usar 'lhe' siempre", "usar el infinitivo", "usar el pronombre sujeto (ele/ela)", "omitir siempre el objeto"],2,"En el habla informal se usa el pronombre sujeto como objeto."],
      ["fill","Completa: “Eu vi minha irmã ontem. Eu ___ vi no parque.”",["a", "as", "o", "os"],0,"“Minha irmã” se reemplaza por “a”."],
      ["translate","Traduce: “Can you help us, please?”",["Você pode ajudar nos, por favor?", "Você pode ajudar-lo, por favor?", "Você pode nos ajudas, por favor?", "Você pode nos ajudar, por favor?"],3,"“Nos” va antes del infinitivo: “nos ajudar”."],
      ["arrange","Ordena: [ontem / vi / ela / eu]",["eu vi ontem ela", "vi ela eu ontem", "eu ela ontem vi", "eu vi ela ontem"],3,"Sujeto + verbo + pronombre (informal) + adverbio."],
      ["writing","Escreva em português 25-35 palavras sobre pessoas ou objetos que você viu recentemente, usando pronomes de objeto direto (o, a, os, as ou ele, ela).",[],["a", "o", "ela"]],
    ]
  },
  {
    id:"pt_a2_presente_planos_futuros", level:"A2", title:"O presente para planos futuros concretos", emoji:"📅", xp:47,
    description:"Aprende a usar el presente do indicativo para hablar de planes futuros ya confirmados en portugués.",
    study: {
      vocab: [
        ["Amanhã eu me encontro com ela.", "Voy a verla mañana."],
        ["Na próxima semana voamos para Madri.", "Volamos a Madrid la próxima semana."],
        ["O que você faz neste fim de semana?", "¿Qué vas a hacer este fin de semana?"],
        ["plano já organizado", "plan ya organizado"],
        ["compromisso confirmado", "cita confirmada"],
      ],
      grammar: [
        ["El presente para planes ya confirmados", "En portugués, el presente do indicativo se usa frecuentemente para planes futuros ya confirmados, sobre todo con una expresión de tiempo.", "Amanhã eu me encontro com ela às 6. / Na próxima semana voamos para Madri."],
      ]
    },
    ex:[
      ["mcq","¿Qué tiempo verbal usas en portugués para un plan futuro ya confirmado?",["el pasado", "el futuro simples", "el presente do indicativo", "el presente contínuo"],2,"Los planes confirmados suelen usar el presente do indicativo."],
      ["mcq","¿Cómo se dice “¿Qué vas a hacer este fin de semana?” (plan concreto) en portugués?",["O que você faz neste fim de semana?", "O que você está fazendo neste fim de semana?", "O que você fez neste fim de semana?", "O que você fará neste fim de semana?"],0,"Plan concreto → presente: “O que você faz...?”."],
      ["fill","Completa: “Amanhã ___ com ela às 6.”",["eu me encontro", "eu me encontrava", "eu estou me encontrando", "eu me encontrarei"],0,"Plan confirmado → presente: “eu me encontro”."],
      ["translate","Traduce: “We're flying to Madrid next week.” (billete ya comprado)",["Na próxima semana estamos voando para Madri.", "Na próxima semana voávamos para Madri.", "Na próxima semana voamos para Madri.", "Na próxima semana voaremos para Madri."],2,"Plan confirmado → presente: “voamos”."],
      ["arrange","Ordena: [encontro / amanhã / com / me / ela]",["amanhã me encontro com ela", "amanhã com encontro ela me", "com encontro amanhã ela me", "com me amanhã ela encontro"],0,"Tiempo + pronombre + verbo + objeto."],
      ["writing","Escreva em português 25-35 palavras sobre planos que você já tem confirmados para a próxima semana, usando o presente para falar do futuro.",[],["amanhã", "na próxima semana", "me encontro"]],
    ]
  },
  {
    id:"pt_a2_sugestoes", level:"A2", title:"Fazer sugestões: vamos, que tal, e se", emoji:"💭", xp:46,
    description:"Aprende a hacer sugerencias en portugués.",
    study: {
      vocab: [
        ["Vamos + infinitivo", "Vamos a... (vamos)"],
        ["Que tal + infinitivo?", "¿Qué tal...?"],
        ["E se + presente do indicativo?", "¿Y si...?"],
        ["Podemos + infinitivo.", "Podríamos..."],
        ["Boa ideia!", "¡Suena bien!"],
      ],
      grammar: [
        ["“E se” exige presente do indicativo", "“Vamos” va seguido de infinitivo (sin preposición); “que tal” va seguido de infinitivo o sustantivo; “e se” va seguido del presente do indicativo (no del infinitivo).", "Vamos à praia. / Que tal pedir uma pizza? / E se assistimos a um filme?"],
      ]
    },
    ex:[
      ["mcq","¿Qué forma sigue a “vamos” para sugerir una actividad?",["presente conjugado", "subjuntivo", "gerúndio", "infinitivo"],3,"Tras “vamos” va el infinitivo."],
      ["mcq","¿Cómo se dice “¿Qué tal pedimos una pizza?” en portugués?",["Que tal a pedir uma pizza?", "Que tal pedindo uma pizza?", "Que tal pedimos uma pizza?", "Que tal pedir uma pizza?"],3,"“Que tal” + infinitivo: “pedir”."],
      ["fill","Completa: “E se ___ a um filme esta noite?”",["assistir", "assistimos", "assistindo", "assistiremos"],1,"“E se” + presente do indicativo: “assistimos”."],
      ["translate","Traduce: “Let's go to the beach.”",["Vamos a ir à praia.", "Vamos para ir à praia.", "Vamos à praia.", "Vamos ir à praia nós."],2,"“Vamos” + complemento: “à praia”."],
      ["arrange","Ordena: [praia / vamos / à]",["vamos praia à", "praia vamos à", "praia à vamos", "vamos à praia"],3,"“Vamos” + complemento."],
      ["speaking","Fale em português por 25-35 palavras fazendo três sugestões para um plano com amigos, usando vamos, que tal e e se.",[],["vamos", "que tal", "e se"]],
    ]
  },
  {
    id:"pt_a2_verbos_preposicao", level:"A2", title:"Verbos com preposição fixa: parar de, contar com, perceber", emoji:"🔌", xp:47,
    description:"Aprende verbos portugueses con preposición fija.",
    study: {
      vocab: [
        ["parar de + infinitivo", "dejar de hacer"],
        ["ficar com", "conservar"],
        ["perceber", "notar/darse cuenta"],
        ["contar com", "contar con"],
        ["dar-se conta de", "darse cuenta"],
      ],
      grammar: [
        ["Verbo + preposición fija cambia el significado", "Algunos verbos portugueses cambian de significado al combinarse con una preposición fija, de forma similar a los phrasal verbs del inglés.", "Parei de fumar no ano passado. / Percebi a jaqueta nova dela. / Você pode contar comigo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “to count on” en portugués?",["perceber", "parar de", "ficar com", "contar com"],3,"“To count on” es “contar com”."],
      ["mcq","¿Cómo se dice “to notice/to realize” en portugués?",["ficar com", "perceber", "parar de", "contar com"],1,"“To notice/to realize” es “perceber”."],
      ["fill","Completa: “___ fumar no ano passado.”",["Contei com", "Fiquei com", "Percebi", "Parei de"],3,"“Parar de + infinitivo” = dejar de hacer algo."],
      ["translate","Traduce: “I noticed her new jacket.”",["Percebi a jaqueta nova dela.", "Contei com a jaqueta nova dela.", "Fiquei com a jaqueta nova dela.", "Parei de a jaqueta nova dela."],0,"“Noticed” es “percebi”."],
      ["arrange","Ordena: [comigo / pode / contar / você]",["você pode contar comigo", "comigo contar você pode", "você comigo pode contar", "comigo você contar pode"],0,"Sujeto + “contar com” + objeto."],
      ["writing","Escreva em português 25-35 palavras sobre seus hábitos usando pelo menos três verbos com preposição fixa (parar de, perceber, contar com...).",[],["parei de", "percebi", "conto com"]],
    ]
  },
  {
    id:"pt_b1_condicionais_reais", level:"B1", title:"As orações condicionais reais (tipo 0 e tipo 1)", emoji:"🔀", xp:58,
    description:"Aprende la diferencia entre las condicionales tipo 0 y tipo 1 en portugués.",
    study: {
      vocab: [
        ["Se + presente, presente (tipo 0)", "condicional cero – verdades generales"],
        ["Se + presente, futuro (tipo 1)", "primer condicional – posibilidad real"],
        ["Quando a água ferve, evapora.", "ejemplo de condicional tipo 0"],
        ["Se chover, eu ficarei em casa.", "ejemplo de condicional tipo 1"],
        ["possibilidade real", "posibilidad real"],
      ],
      grammar: [
        ["Verdad general vs posibilidad real futura", "El tipo 0 (se + presente, presente) expresa verdades generales; el tipo 1 (se + presente, futuro) expresa una posibilidad real en el futuro.", "Se você aquece o gelo, ele derrete. / Se chover amanhã, eu ficarei em casa."],
      ]
    },
    ex:[
      ["mcq","¿Qué tipo de condicional usas para una verdad general?",["tipo 2", "tipo 3", "tipo 1", "tipo 0"],3,"Verdades generales → condicional tipo 0."],
      ["mcq","¿Qué tipo de condicional usas para una posibilidad real futura?",["tipo 0", "tipo 1", "tipo 3", "tipo 2"],1,"Posibilidad real futura → condicional tipo 1."],
      ["fill","Completa: “Se você aquece o gelo, ele ___.”",["derreteu", "derreterá", "derrete", "derretendo"],2,"Tipo 0: presente + presente."],
      ["translate","Traduce: “If it rains tomorrow, I'll stay home.”",["Se chover amanhã, eu ficarei em casa.", "Se choverá amanhã, eu ficarei em casa.", "Se chover amanhã, eu fico em casa.", "Se chover amanhã, eu ficaria em casa."],0,"Tipo 1: se + presente, futuro."],
      ["arrange","Ordena: [evapora / ferve / quando / água / a]",["evapora água ferve a quando", "quando a água ferve evapora", "ferve a água evapora quando", "ferve evapora quando a água"],1,"“Quando” + presente + presente (verdad general)."],
      ["writing","Escreva em português 30-40 palavras com dois exemplos: uma verdade geral (tipo 0) e uma possibilidade real futura (tipo 1).",[],["se", "quando", "futuro"]],
    ]
  },
  {
    id:"pt_b1_voz_passiva_basica", level:"B1", title:"A voz passiva básica e a passiva com “se”", emoji:"🔄", xp:58,
    description:"Aprende a formar la voz pasiva y la pasiva con 'se' en portugués.",
    study: {
      vocab: [
        ["ser + particípio (com agente)", "voz pasiva con agente"],
        ["se + verbo na 3ª pessoa", "voz pasiva impersonal con 'se'"],
        ["A carta foi enviada.", "La carta fue enviada."],
        ["Aqui se fala inglês.", "Aquí se habla inglés."],
        ["por + agente", "por + agente"],
      ],
      grammar: [
        ["Pasiva con “ser” vs pasiva con “se”", "El portugués usa “ser + particípio” cuando se menciona el agente (“a carta foi enviada por João”), pero prefiere la pasiva con “se” cuando el agente no importa o es desconocido (“aqui se fala inglês”).", "A carta foi enviada por João. / Aqui se fala inglês."],
      ]
    },
    ex:[
      ["mcq","¿Qué construcción se prefiere cuando no se menciona el agente?",["la pasiva con ‘se’", "estar + particípio", "ser + particípio", "o gerúndio"],0,"Sin agente conocido, se prefiere la pasiva con “se”."],
      ["mcq","¿Cómo se dice “English is spoken here” en portugués (pasiva con 'se')?",["Aqui se falando inglês.", "Aqui é falado inglês.", "Aqui se fala inglês.", "Aqui inglês é falado."],2,"Pasiva con “se”: “se fala inglês”."],
      ["fill","Completa: “A carta ___ por João ontem.”",["enviou", "foi enviada", "é enviada", "se enviou"],1,"Con agente mencionado → “ser + particípio”: “foi enviada”."],
      ["translate","Traduce: “The letter was sent yesterday.” (con agente, tono formal)",["A carta se enviava ontem.", "A carta tem sido enviando ontem.", "A carta é enviada ontem.", "A carta foi enviada ontem."],3,"Con agente → “ser + particípio”: “foi enviada”."],
      ["arrange","Ordena: [inglês / aqui / fala / se]",["aqui se fala inglês", "se aqui fala inglês", "se inglês fala aqui", "fala se inglês aqui"],0,"“Aqui” + “se” + verbo + objeto."],
      ["writing","Escreva em português 30-40 palavras sobre algo que se faz no seu país ou trabalho, usando a passiva com ‘se’ e ‘ser + particípio’.",[],["se fala", "foi enviada", "se faz"]],
    ]
  },
  {
    id:"pt_b1_perguntas_confirmacao", level:"B1", title:"Perguntas de confirmação: não é?, né?, certo?", emoji:"❓", xp:58,
    description:"Aprende a usar coletillas de confirmación en portugués.",
    study: {
      vocab: [
        ["..., não é?", "..., ¿no? / ¿verdad? (neutro)"],
        ["..., né?", "..., ¿no? (muy informal, muy común)"],
        ["..., certo?", "..., ¿verdad?"],
        ["..., tá?", "..., ¿vale? (pedir acuerdo)"],
        ["confirmar uma informação", "confirmar información"],
      ],
      grammar: [
        ["Coletillas invariables, “né?” es la más usada", "A diferencia del inglés, que usa question tags que cambian según el verbo, el portugués usa las mismas coletillas invariables (não é?, né?, certo?); “né?” es extremadamente común en el habla.", "Você é da Espanha, não é? / Você não gosta de café, né?"],
      ]
    },
    ex:[
      ["mcq","¿Qué coletilla es extremadamente común e informal en portugués hablado?",["certo?", "né?", "tá?", "não é?"],1,"“Né?” es la coletilla más común e informal."],
      ["mcq","¿Cuál es la principal diferencia con las question tags del inglés?",["en portugués cambian según el verbo", "en portugués solo se usan en el pasado", "en portugués son invariables", "en portugués solo se usan en negativo"],2,"En portugués las coletillas no cambian según el verbo."],
      ["fill","Completa: “Você não gosta de café, ___?”",["né", "certo", "tá", "sim"],0,"“Né?” es la coletilla más común e informal."],
      ["translate","Traduce: “You went to the party, didn't you?”",["Você foi à festa, foi você?", "Você foi à festa, não é você?", "Você foi à festa, não foi?", "Você foi à festa, não é foi?"],2,"“Não foi?” repite el verbo en pasado."],
      ["arrange","Ordena: [Espanha / é / não / você / da / é]",["você é da Espanha não é", "Espanha da é não você é", "Espanha não é é você da", "é não você é da Espanha"],0,"Afirmación + coletilla de confirmación."],
      ["writing","Escreva em português 30-40 palavras com três frases usando perguntas de confirmação (não é?, né?, certo?) para confirmar informações com um amigo.",[],["não é?", "né?", "certo?"]],
    ]
  },
  {
    id:"pt_b1_perguntas_indiretas", level:"B1", title:"As perguntas indiretas e corteses", emoji:"🙏", xp:59,
    description:"Aprende a formular preguntas indirectas y corteses en portugués.",
    study: {
      vocab: [
        ["Você poderia me dizer onde...?", "¿Podría decirme dónde...?"],
        ["Você sabe se...?", "¿Sabe si...?"],
        ["Eu me pergunto o que...", "Me pregunto qué..."],
        ["sem inversão, com 'se' para sim/não", "sin inversión, con 'se' para sí/no"],
        ["pedido cortês", "petición cortés"],
      ],
      grammar: [
        ["“Se” para preguntas de sí/no en estilo indirecto", "Las preguntas indirectas en portugués mantienen el orden normal sujeto+verbo (sin inversión como en una pregunta directa), y usan “se” para preguntas de sí/no.", "Onde é a estação? → Você poderia me dizer onde é a estação? / Ela vem? → Você sabe se ela vem?"],
      ]
    },
    ex:[
      ["mcq","¿Qué palabra se usa para preguntas de sí/no en estilo indirecto?",["se", "o que", "que", "como"],0,"“Se” introduce preguntas de sí/no en estilo indirecto."],
      ["mcq","¿Qué frase cortés puedes usar para pedir información?",["O que é isto?", "Me diz.", "Você poderia me dizer...?", "Não é?"],2,"“Você poderia me dizer...?” es una fórmula cortés."],
      ["fill","Completa: “Você poderia me dizer onde ___ a estação?”",["seja", "era", "é", "ser"],2,"“Onde é a estação” se mantiene en la pregunta indirecta."],
      ["translate","Traduce: “Do you know if she's coming?”",["Você sabe ela se vem?", "Você sabe se vem ela?", "Você sabe que ela vem?", "Você sabe se ela vem?"],3,"“If” se traduce como “se”."],
      ["arrange","Ordena: [dizer / poderia / estação / onde / é / me / você / a]",["você onde a é estação me dizer poderia", "você poderia me dizer onde é a estação", "estação a você onde é poderia me dizer", "a poderia é onde estação me você dizer"],1,"Frase cortés + pregunta incrustada."],
      ["speaking","Fale em português por 30-40 palavras fazendo três perguntas indiretas e corteses para um desconhecido na rua.",[],["Você poderia me dizer", "Você sabe se", "Eu me pergunto"]],
    ]
  },
  {
    id:"pt_b1_preterito_perfeito_vs_ha", level:"B1", title:"O pretérito perfeito vs. o presente + há", emoji:"⏳", xp:59,
    description:"Aprende la diferencia entre el pretérito perfeito y el presente + há en portugués.",
    study: {
      vocab: [
        ["tenho/tem + particípio (uso raro)", "forma compuesta – uso limitado en Brasil"],
        ["presente + há", "duración de una acción que sigue en curso"],
        ["Há quanto tempo...?", "¿Cuánto tiempo llevas...?"],
        ["há / já", "desde hace / desde (con tiempo) / ya"],
        ["Eu espero há uma hora.", "Llevo una hora esperando."],
      ],
      grammar: [
        ["Sin “present perfect continuous”: presente + há", "El portugués de Brasil casi no usa una forma compuesta equivalente al present perfect continuous inglés; para la duración de una acción que sigue en curso, se usa el PRESENTE + “há”.", "Eu li três livros este mês. (resultado) / Eu espero há uma hora. (duración, en presente)"],
      ]
    },
    ex:[
      ["mcq","¿Qué estructura se usa para la duración de una acción que sigue en curso?",["o pretérito perfeito simples", "o subjuntivo", "o futuro", "presente + há"],3,"“Presente + há” expresa duración en curso."],
      ["mcq","¿Qué tiempo destaca el resultado o la cantidad de algo ya hecho?",["o imperfeito", "presente + há", "o futuro do pretérito", "o pretérito perfeito simples"],3,"El pretérito perfeito simples destaca el resultado o la cantidad."],
      ["fill","Completa: “Eu ___ há uma hora.”",["espero", "esperarei", "esperava", "esperei"],0,"Duración en curso → presente: “espero”."],
      ["translate","Traduce: “I've read three books this month.” (cantidad)",["Eu li três livros este mês.", "Eu leio três livros há este mês.", "Eu leio há três livros este mês.", "Eu tenho lido três livros este mês."],0,"Cantidad/resultado → pretérito perfeito simples: “li”."],
      ["arrange","Ordena: [hora / há / espero / uma / eu]",["há hora uma eu espero", "eu espero há uma hora", "espero eu hora há uma", "uma há hora espero eu"],1,"Sujeto + presente + “há” + duración."],
      ["writing","Escreva em português 30-40 palavras sobre algo que você faz há um tempo (com ‘há’) e algo que você já fez (com o pretérito perfeito).",[],["há", "já", "eu fiz"]],
    ]
  },
];
