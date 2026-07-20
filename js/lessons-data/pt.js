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
        ["Bom dia / Boa noite", "Good morning / Good evening"],
        ["Oi / Tchau", "Hi / Goodbye"],
        ["Prazer!", "Nice to meet you!"],
        ["Meu nome é...", "My name is..."],
        ["Como você está?", "How are you?", "Respuesta: \"Estou bem, obrigado(a)\""]
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
        ["um, dois, três... vinte", "one, two, three... twenty"],
        ["vermelho, azul, verde, amarelo", "red, blue, green, yellow"],
        ["branco, preto", "white, black"],
        ["Eu tenho ___ anos", "I am ___ years old", "Se usa el verbo \"ter\" (tener), no \"ser\"."]
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
        ["ser", "to be (permanente)"],
        ["estar", "to be (temporal)"],
        ["cansado, contente, doente", "tired, happy, sick"]
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
        ["pai, mãe", "father, mother"],
        ["irmão, irmã", "brother, sister"],
        ["filho, filha", "son, daughter"],
        ["quarto, cozinha, sala", "bedroom, kitchen, living room"],
        ["banheiro, jardim", "bathroom, garden"]
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
        ["o cardápio", "the menu"],
        ["Eu gostaria de...", "I would like...", "Forma cortés de pedir."],
        ["a conta, por favor", "the bill, please"],
        ["a água, o pão", "water, bread"],
        ["delicioso/a", "delicious"]
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
      ["arrange", "Ordena: [água / gostaria / de / um / copo / de]", ["Eu gostaria de um copo de água","Um copo eu gostaria de água","De água eu gostaria um copo","Copo de água eu gostaria"], 0, "\"Eu gostaria de um copo de água.\" = I would like a glass of water."],
    ]
  },
  {
    id:"pt_a1_daily_routine", level:"A1", title:"Rotina diária", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en portugués.",
    study: {
      vocab: [
        ["acordar", "to wake up"],
        ["levantar-se", "to get up"],
        ["tomar café da manhã / almoçar / jantar", "to have breakfast/lunch/dinner"],
        ["ir para o trabalho", "to go to work"],
        ["todos os dias", "every day"]
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
        ["a camisa, a camiseta", "shirt, t-shirt"],
        ["a calça, a saia", "pants, skirt"],
        ["os sapatos", "shoes"],
        ["Quanto custa?", "How much does it cost?"],
        ["o tamanho", "size"],
        ["experimentar (algo)", "to try on (something)"]
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
        ["está calor / frio", "it's hot / cold"],
        ["chove, neva", "it rains, it snows"],
        ["o verão, o inverno, a primavera, o outono", "summer, winter, spring, autumn"],
        ["está nublado / ensolarado", "it's cloudy / sunny"]
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
        ["ontem, ontem à noite, semana passada", "yesterday, last night, last week"],
        ["eu comi, você comeu, ele/ela comeu", "I ate, you ate, he/she ate"],
        ["eu fui, você foi", "I went, you went"],
        ["O que você fez?", "What did you do?"]
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
        ["disponível mediante pedido","available on request"],
        ["sujeito a alterações","subject to change"],
        ["cumprir os requisitos","to be eligible"],
        ["o prazo","deadline"]
      ],
      grammar:[
        ["Leitura seletiva","Procure primeiro o propósito, a condição e a ação exigida.","As reservas só são confirmadas após o pagamento."]
      ]
    },
    ex:[
      ["mcq","Aviso: \"As vagas do workshop estão reservadas para sócios até sexta-feira; depois as vagas restantes serão liberadas.\" O que deve fazer uma pessoa que não é sócia?",["Esperar até sexta-feira para saber se sobram vagas.","Reservar hoje porque tem prioridade.","Pagar uma taxa obrigatória antes de sexta-feira.","Presumir que o workshop foi cancelado."],0,"O aviso indica prioridade temporária para sócios, não exclusividade permanente."],
      ["mcq","Mensagem: \"Envie o formulário até às 17h de quinta-feira. Candidaturas tardias só serão consideradas se sobrarem vagas.\" Qual é a ação mais segura?",["Enviar o formulário antes das 17h de quinta-feira.","Esperar a confirmação de que sobram vagas.","Enviar na sexta porque candidaturas tardias são sempre aceitas.","Ligar para cancelar a candidatura."],0,"\"Até\" marca um prazo claro; \"só se\" não garante a aceitação tardia."],
      ["fill","Complete: \"Os candidatos devem ser ___ para o programa antes de solicitar a bolsa.\"",["elegíveis","disponíveis","sujeitos","limitados"],0,"\"Elegível\" significa que cumpre os requisitos necessários."],
      ["writing","Escreva um e-mail de 45-60 palavras perguntando se ainda pode se candidatar após o prazo.",[],["tardia","candidatura","disponível"],"Inclua saudação, pedido claro e encerramento adequado.","Você escreve ao coordenador de um curso que fechou ontem."]
    ]
  },
  {
    id:"pt_b1_opinions", level:"B1", title:"Opiniões e pontos de vista", emoji:"🎧", xp:58,
    description:"Distinga fatos, preferências e razões em conversas do dia a dia.",
    study:{
      vocab:[
        ["eu preferiria","I would rather"],
        ["acontece que","it turns out"],
        ["vale a pena","it's worth it"],
        ["desanimar alguém","to put someone off"]
      ],
      grammar:[
        ["Opinião com justificativa","Uma resposta B1 deve incluir uma opinião e uma razão.","Eu preferiria viajar de trem porque posso trabalhar durante a viagem."]
      ]
    },
    ex:[
      ["mcq","Leia: \"Maya esperava que o curso fosse difícil, mas acontece que o feedback semanal o torna gerenciável.\" O que Maya pensa?",["O curso é exigente, mas o apoio a ajuda a acompanhar.","O curso é fácil demais.","O feedback torna o curso mais difícil.","Ela desistiu do curso por falta de apoio."],0,"A expectativa inicial é contrastada com um balanço final mais positivo."],
      ["mcq","Qual resposta expressa preferência e motivo?",["Eu preferiria nos encontrar online porque economiza tempo de viagem.","Eu me encontro online ontem.","Reuniões online são um tempo de viagem.","Eu prefiro porque reuniões."],0,"A estrutura inclui preferência, opção e justificativa."],
      ["fill","Complete: \"O preço era alto, mas a experiência ___ a pena.\"",["valeu","preferiu","aconteceu","desanimou"],0,"A expressão fixa é \"valer a pena\"; no passado: \"valeu a pena\"."],
      ["speaking","Fale por 45-60 palavras: compare estudar sozinho e estudar com outras pessoas. Dê uma preferência, uma razão e uma desvantagem.",[],["prefiro","porque","no entanto"],"Organize a resposta: comparação, preferência, razão e ressalva.","Conversa com um colega de turma."]
    ]
  },
  {
    id:"pt_b1_storytelling", level:"B1", title:"Contar uma experiência", emoji:"🗺️", xp:60,
    description:"Narre experiências passadas combinando pretérito perfeito e imperfeito.",
    study:{
      vocab:[
        ["no início","at first"],
        ["por fim","eventually"],
        ["inesperadamente","unexpectedly"],
        ["perceber","to realise"]
      ],
      grammar:[
        ["Pretérito perfeito vs. imperfeito","O imperfeito descreve o pano de fundo ou uma ação em curso; o pretérito perfeito narra ações concluídas.","Enquanto esperávamos o ônibus, começou a chover."]
      ]
    },
    ex:[
      ["mcq","Qual frase usa corretamente o pretérito perfeito e o imperfeito?",["Enquanto caminhávamos no parque, vimos um acidente.","Enquanto caminhamos no parque, víamos um acidente.","Enquanto caminhávamos no parque, víamos um acidente ontem.","Caminhamos no parque enquanto vimos."],0,"O pano de fundo (caminhávamos) vai no imperfeito; a ação pontual (vimos) vai no pretérito perfeito."],
      ["fill","Complete: \"Eu não ___ de quão tarde era até olhar o celular.\"",["percebi","percebia","percebo","percebia de"],0,"\"Perceber\" no pretérito perfeito para uma ação pontual: \"percebi\"."],
      ["translate","Traduza: \"At first I was nervous, but eventually I enjoyed the experience.\"",["No início eu estava nervoso, mas por fim gostei da experiência.","No início eu fiquei nervoso, mas por fim gostava da experiência.","No início eu estava nervoso, mas por fim gostava muito da experiência.","No início eu estava nervoso, mas por fim gostei de experiência."],0,"O estado de fundo vai no imperfeito (\"estava\"); a ação completa vai no pretérito perfeito (\"gostei\")."],
      ["writing","Escreva uma história de 80-100 palavras sobre um plano que mudou inesperadamente.",[],["no início","mas","por fim"],"Verifique se cada parte avança a história e se os tempos verbais são consistentes.","Uma viagem curta que não saiu como planejado."]
    ]
  },
  {
    id:"pt_b1_agreement", level:"B1", title:"Discutir e chegar a um acordo", emoji:"🤝", xp:62,
    description:"Proponha opções, responda a ideias alheias e negocie uma decisão.",
    study:{
      vocab:[
        ["e se...?","shall we...?"],
        ["entendo o seu ponto","I see your point"],
        ["que tal...?","how about...?"],
        ["um meio-termo","a compromise"]
      ],
      grammar:[
        ["Linguagem colaborativa","Para negociar: propor, responder e buscar uma alternativa compartilhada.","Entendo o seu ponto sobre o custo; que tal escolher a opção mais barata?"]
      ]
    },
    ex:[
      ["mcq","Qual resposta constrói um acordo?",["Entendo o seu ponto sobre o custo; que tal convidar menos pessoas?","Sua ideia é ruim, então a minha vence.","Não entendo nenhum ponto.","A opção mais barata são as pessoas."],0,"Reconhece uma ideia e propõe um meio-termo concreto."],
      ["fill","Complete: \"___ nos encontramos na biblioteca depois da aula?\"",["E se","Seria","Fez","Tem"],0,"\"E se...?\" é uma forma comum de propor algo."],
      ["mcq","Qual frase expressa discordância educada?",["Não tenho certeza de que vai funcionar, porque o local fecha cedo.","Isso nunca vai funcionar.","Seu local é péssimo.","Não, obviamente não."],0,"A discordância é suavizada e justificada com uma razão."],
      ["speaking","Fale por 45-60 palavras: proponha um plano de fim de semana, responda a uma objeção e ofereça um meio-termo.",[],["proponho","porque","meio-termo"],"Inclua uma proposta concreta, uma razão e uma resposta colaborativa.","Você organiza uma atividade com um amigo com pouco orçamento."]
    ]
  },
  {
    id:"pt_b1_future_plans", level:"B1", title:"Planos e futuro", emoji:"🗓️", xp:60,
    description:"Fale sobre planos, intenções e previsões usando diferentes formas de futuro.",
    study:{
      vocab:[
        ["pretendo","I intend to"],
        ["em breve","soon"],
        ["assim que eu puder","as soon as I can"],
        ["é possível que","it's possible that"]
      ],
      grammar:[
        ["Futuro com 'ir' vs. futuro simples","\"Ir + infinitivo\" expressa um plano já decidido; o futuro simples expressa previsão ou decisão espontânea.","Vou me mudar no mês que vem. / Acho que vai chover amanhã."]
      ]
    },
    ex:[
      ["mcq","Qual frase expressa um plano já decidido?",["Vou começar um curso de italiano em setembro.","Começarei um curso se tiver tempo.","Acho que vou começar algum curso.","Comecei um curso no ano passado."],0,"\"Ir + infinitivo\" é usado para planos já decididos."],
      ["fill","Complete: \"Assim que eu ___ o relatório, te envio.\"",["terminar","termino","terminarei","terminava"],0,"Depois de \"assim que\" para uma condição futura, usa-se o futuro do subjuntivo: \"terminar\"."],
      ["translate","Traduza: \"As soon as I finish the project, I'll call you.\"",["Assim que eu terminar o projeto, vou te ligar.","Quando eu terminava o projeto, ligo.","Assim que eu terminei o projeto, ligava.","Se eu terminar o projeto, ligava."],0,"\"Assim que\" + futuro do subjuntivo expressa uma condição futura."],
      ["writing","Escreva 45-60 palavras sobre seus planos para o próximo ano. Use pelo menos duas expressões de futuro.",[],["pretendo","assim que","é possível"],"Combine ao menos duas formas de falar do futuro e justifique um plano.","Você conta seus planos a um amigo."]
    ]
  },
  {
    id:"pt_b1_complaints_requests", level:"B1", title:"Reclamações e pedidos educados", emoji:"✉️", xp:60,
    description:"Formule reclamações e pedidos formais usando o condicional de cortesia.",
    study:{
      vocab:[
        ["eu gostaria","I would like"],
        ["poderia...?","could you...?"],
        ["lamento informar","I regret to inform you"],
        ["fazer uma reclamação","to file a complaint"]
      ],
      grammar:[
        ["Condicional de cortesia","\"Gostaria\" e \"poderia\" suavizam pedidos e reclamações formais.","Eu gostaria de saber por que o pedido chegou atrasado."]
      ]
    },
    ex:[
      ["mcq","Qual frase é uma reclamação formal e educada?",["Eu gostaria de saber por que o pacote chegou com uma semana de atraso.","Isso é um desastre total!","Sua empresa nunca faz nada certo.","Não pretendo pagar nada."],0,"Formula a reclamação de modo indireto e respeitoso, sem perder clareza."],
      ["fill","Complete: \"___ me enviar uma cópia da fatura, por favor?\"",["Poderia","Pode","Pôde","Posso"],0,"\"Poderia\" no condicional suaviza o pedido e o torna mais formal."],
      ["translate","Traduza: \"I would like to file a complaint about the service.\"",["Eu gostaria de fazer uma reclamação sobre o serviço.","Eu quero reclamar o serviço.","Eu gosto de fazer uma reclamação do serviço.","Eu faria uma reclamação o serviço."],0,"\"Eu gostaria de\" + infinitivo é a fórmula padrão de cortesia."],
      ["writing","Escreva um e-mail de reclamação de 50-70 palavras sobre um pedido que chegou incompleto. Use o condicional de cortesia.",[],["eu gostaria","poderia","lamento"],"Explique o problema, formule um pedido claro e encerre com cortesia.","Um pedido online chegou com dois itens faltando."]
    ]
  },
  {
    id:"pt_b2_hypotheticals", level:"B2", title:"Hipóteses e condições improváveis", emoji:"🌀", xp:75,
    description:"Expresse hipóteses pouco prováveis ou irreais com se + pretérito imperfeito do subjuntivo.",
    study:{
      vocab:[
        ["se eu tivesse","if I had"],
        ["caso","in case"],
        ["a menos que","unless"],
        ["supondo que","assuming that"]
      ],
      grammar:[
        ["Período hipotético (tipo 2)","Para hipóteses pouco prováveis no presente: se + pretérito imperfeito do subjuntivo, futuro do pretérito (condicional) na principal.","Se eu tivesse mais tempo, viajaria mais."]
      ]
    },
    ex:[
      ["mcq","Qual frase expressa corretamente uma hipótese pouco provável?",["Se eu tivesse mais dinheiro, compraria uma casa maior.","Se eu tenho mais dinheiro, compraria uma casa maior.","Se eu tivesse mais dinheiro, compro uma casa maior.","Se eu teria mais dinheiro, compraria uma casa."],0,"O tipo 2 exige pretérito imperfeito do subjuntivo na condição e futuro do pretérito na consequência."],
      ["fill","Complete: \"A menos que ___ um esforço extra, não terminaremos a tempo.\"",["façamos","fazemos","faríamos","fizemos"],0,"'A menos que' é sempre seguido de subjuntivo."],
      ["mcq","Qual é a melhor paráfrase de \"Se eu fosse você, não aceitaria essa oferta\"?",["Um conselho hipotético: quem fala não aceitaria a oferta no lugar do ouvinte.","Uma ordem direta.","A descrição de um fato passado.","Uma promessa para o futuro."],0,"A estrutura hipotética expressa um conselho, não um fato nem uma ordem."],
      ["writing","Escreva 60-80 palavras: descreva o que você faria diferente se pudesse reviver um ano da sua vida. Use pelo menos duas hipóteses com 'se'.",[],["se eu tivesse","a menos que","supondo"],"Verifique se cada hipótese combina corretamente o imperfeito do subjuntivo e o condicional.","Reflexão pessoal para um blog."]
    ]
  },
  {
    id:"pt_b2_reported_speech", level:"B2", title:"Discurso indireto", emoji:"💬", xp:78,
    description:"Relate o que outros disseram adaptando tempos verbais e marcadores temporais.",
    study:{
      vocab:[
        ["disse que","he/she said that"],
        ["explicou que","he/she explained that"],
        ["perguntou se","he/she asked whether"],
        ["acrescentou que","he/she added that"]
      ],
      grammar:[
        ["Discurso indireto","No passado, o futuro vira futuro do pretérito (condicional) e o presente costuma virar imperfeito.","Ela disse: 'Vou chegar atrasada.' → Ela disse que chegaria atrasada."]
      ]
    },
    ex:[
      ["mcq","Citação direta: \"Vou terminar o relatório amanhã.\" Qual é o discurso indireto correto?",["Ele disse que terminaria o relatório no dia seguinte.","Ele disse que vai terminar o relatório amanhã.","Ele disse que terminava o relatório amanhã.","Ele disse que termine o relatório no dia seguinte."],0,"O futuro da citação original vira futuro do pretérito; 'amanhã' vira 'no dia seguinte'."],
      ["fill","Complete: \"Ela me perguntou se eu ___ disponível para a reunião de segunda-feira.\"",["estava","estou","estarei","esteja"],0,"O presente da citação original vira imperfeito no discurso indireto no passado."],
      ["mcq","O que geralmente muda ao passar do discurso direto para o indireto no passado?",["O tempo verbal e às vezes os marcadores temporais (amanhã → no dia seguinte).","Apenas o sujeito da frase.","Nada muda nunca.","Apenas a ordem das palavras."],0,"O tempo verbal recua para o passado e alguns marcadores temporais mudam."],
      ["writing","Relate em discurso indireto (50-70 palavras) uma conversa recente em que alguém contou seus planos.",[],["disse que","explicou que","acrescentou que"],"Adapte corretamente os tempos verbais e os marcadores temporais.","Você conta a um amigo o que um colega de trabalho disse."]
    ]
  },
  {
    id:"pt_b2_passive_impersonal", level:"B2", title:"Voz passiva e passiva pronominal", emoji:"⚙️", xp:76,
    description:"Descreva processos e fatos sem enfatizar quem os realiza.",
    study:{
      vocab:[
        ["ser + particípio","to be + past participle (passive)"],
        ["se + verbo","impersonal/passive 'se' construction"],
        ["ser levado a cabo","to be carried out"],
        ["ser responsável por","to be in charge of"]
      ],
      grammar:[
        ["Voz passiva e passiva pronominal","A passiva com 'ser' destaca o agente; a passiva pronominal com 'se' é mais natural quando o agente não importa.","O projeto foi aprovado pelo comitê. / Aprovou-se o projeto."]
      ]
    },
    ex:[
      ["mcq","Qual frase usa corretamente a passiva pronominal?",["Assinaram-se os contratos ontem à tarde.","Assinou-se os contratos ontem à tarde.","Foi assinado os contratos ontem.","Assinava-se os contratos por alguém."],0,"O verbo concorda no plural com 'os contratos': 'assinaram-se'."],
      ["fill","Complete: \"O novo edifício ___ projetado por uma empresa internacional.\"",["foi","se projetou","projetou","projetava"],0,"Quando o agente é explícito ('por uma empresa'), prefere-se a passiva com 'ser'."],
      ["mcq","Quando se prefere a passiva pronominal em vez da passiva com 'ser'?",["Quando o agente não é relevante ou não é conhecido.","Quando se quer sempre nomear o agente.","Nunca no português natural.","Só em textos literários antigos."],0,"A passiva pronominal é a forma natural quando o agente não importa."],
      ["writing","Descreva em 50-70 palavras um processo (por exemplo, como se organiza um evento) usando pelo menos duas construções passivas ou impessoais.",[],["se + verbo","foi + particípio","levado a cabo"],"Use pelo menos duas construções diferentes de forma coerente.","Você explica um procedimento a alguém novo na equipe."]
    ]
  },
  {
    id:"pt_b2_doubt_probability", level:"B2", title:"Dúvida, probabilidade e certeza", emoji:"❓", xp:78,
    description:"Distinga quando usar o subjuntivo ou o indicativo conforme o grau de certeza.",
    study:{
      vocab:[
        ["duvido que","I doubt that"],
        ["não acho que","I don't think that"],
        ["é provável que","it's likely that"],
        ["pode ser que","it might be that"]
      ],
      grammar:[
        ["Subjuntivo com dúvida e probabilidade","Verbos e expressões de dúvida ou negação de certeza pedem o subjuntivo na oração subordinada.","Duvido que o projeto esteja pronto para sexta-feira."]
      ]
    },
    ex:[
      ["mcq","Qual frase está gramaticalmente correta?",["Não acho que a proposta seja viável a curto prazo.","Não acho que a proposta é viável a curto prazo.","Não acho que a proposta será viável a curto prazo.","Não acho que a proposta viável a curto prazo."],0,"\"Não acho que\" nega a certeza, por isso exige subjuntivo: \"seja\"."],
      ["fill","Complete: \"Pode ser que eles já ___ tomado a decisão quando chegarmos.\"",["tenham","têm","tomarão","tomavam"],0,"'Pode ser que' + subjuntivo (aqui, pretérito perfeito do subjuntivo para uma ação anterior)."],
      ["mcq","Qual expressão NÃO exige subjuntivo na oração seguinte?",["Tenho certeza de que...","Duvido que...","Não acho que...","É possível que..."],0,"'Tenho certeza de que' expressa certeza, por isso usa-se o indicativo, não o subjuntivo."],
      ["speaking","Fale por 60-80 palavras: dê sua opinião sobre se o trabalho remoto vai se tornar a norma. Use pelo menos uma expressão de dúvida e uma de certeza.",[],["duvido que","é provável","tenho certeza"],"Alterne corretamente subjuntivo e indicativo conforme o grau de certeza.","Debate informal sobre o futuro do trabalho."]
    ]
  },
  {
    id:"pt_b2_contrast_connectors", level:"B2", title:"Conectores de contraste", emoji:"⚖️", xp:76,
    description:"Use 'embora' e outros conectores para matizar ideias e contrastar fatos.",
    study:{
      vocab:[
        ["embora","although"],
        ["apesar de","despite"],
        ["no entanto","however"],
        ["contudo","nevertheless"]
      ],
      grammar:[
        ["Conectores de contraste","'Embora' exige subjuntivo, mesmo para um fato real e conhecido.","Embora tenha chovido, saímos para caminhar."]
      ]
    },
    ex:[
      ["mcq","Qual frase usa corretamente 'embora'?",["Embora o voo tenha atrasado, chegamos a tempo à reunião.","Embora o voo atrasou, chegamos a tempo.","Embora o voo atrasava, chegamos.","Embora o voo vai atrasar, chegamos a tempo."],0,"'Embora' sempre exige subjuntivo, mesmo para um fato confirmado."],
      ["fill","Complete: \"___ o relatório estivesse incompleto, nós o enviamos antes do prazo.\"",["Apesar de que","No entanto","Contudo","Pode ser que"],0,"'Apesar de que' introduz uma oração subordinada de contraste com um fato real."],
      ["mcq","Qual conector geralmente introduz uma nova frase em vez de uma oração subordinada na mesma frase?",["No entanto","Embora","Apesar de","Porque"],0,"'No entanto' funciona como conector entre frases, não como subordinante."],
      ["writing","Escreva um parágrafo de 60-80 palavras apresentando uma opinião e matizando-a com pelo menos dois conectores de contraste diferentes.",[],["embora","no entanto","contudo"],"Combine corretamente os conectores subordinantes e os que ligam frases.","Opinião sobre um tema atual para um fórum."]
    ]
  },
  {
    id:"pt_b2_debate_nuance", level:"B2", title:"Argumentar com nuances", emoji:"🗣️", xp:80,
    description:"Construa argumentos que reconhecem o ponto contrário antes de defender uma posição.",
    study:{
      vocab:[
        ["por um lado / por outro","on one hand / on the other hand"],
        ["é inegável que","it's undeniable that"],
        ["vale a pena notar que","it's worth noting that"],
        ["em definitiva","ultimately"]
      ],
      grammar:[
        ["Argumentação matizada","Um bom argumento B2 reconhece o ponto contrário antes de defender uma posição.","É inegável que o plano reduz custos, mas vale a pena notar que também traz riscos."]
      ]
    },
    ex:[
      ["mcq","Qual estrutura mostra um argumento bem matizado?",["É inegável que o projeto é caro, mas a longo prazo poderia economizar recursos.","O projeto é caro, ponto final.","O projeto obviamente não custa nada.","Não existe nenhum argumento contra o projeto."],0,"Reconhece um ponto contrário antes de matizá-lo com uma vantagem a longo prazo."],
      ["fill","Complete: \"___, a proposta tem mais vantagens do que desvantagens.\"",["Em definitiva","Embora","A menos que","Duvido que"],0,"'Em definitiva' se usa para fechar um argumento com uma conclusão geral."],
      ["mcq","Que função tem \"vale a pena notar que\" num argumento?",["Destaca um ponto que quem fala considera especialmente relevante.","Introduz uma hipótese irreal.","Expressa dúvida total sobre o tema.","Encerra a conversa abruptamente."],0,"É uma fórmula para destacar um ponto relevante dentro do argumento."],
      ["writing","Escreva um parágrafo argumentativo de 70-90 palavras sobre um tema debatido (por exemplo, o trabalho remoto). Reconheça um ponto contrário antes de defender sua posição.",[],["por um lado","é inegável","em definitiva"],"Estrutura: reconhecimento do ponto contrário, sua posição e uma conclusão.","Contribuição para um debate escrito em aula."]
    ]
  },
  {
    id:"pt_c1_register_nuance", level:"C1", title:"Registro e nuance em textos formais", emoji:"🎩", xp:88,
    description:"Use atenuação (hedging) para expressar afirmações prudentes em registro formal.",
    study:{
      vocab:[
        ["conviria destacar que","it would be worth pointing out that"],
        ["seria oportuno matizar que","it would be worth clarifying that"],
        ["tender a pensar que","to be inclined to think that"],
        ["de modo geral","broadly speaking"]
      ],
      grammar:[
        ["Atenuação (hedging) em registro formal","O futuro do pretérito (condicional) atenua afirmações e as torna mais prudentes e formais que o presente do indicativo.","Conviria argumentar que a medida é prematura, embora os dados ainda sejam limitados."]
      ]
    },
    ex:[
      ["mcq","Qual frase soa mais apropriada em um relatório formal?",["Conviria destacar que os resultados, embora promissores, exigem mais análise.","Os resultados são ótimos, ponto final.","Isso é óbvio para qualquer um.","Não há mais nada a dizer sobre isso."],0,"O registro formal favorece a atenuação e a prudência argumentativa."],
      ["fill","Complete: \"___ matizar que o estudo se baseia em uma amostra reduzida.\"",["Seria oportuno","É óbvio","Nunca","Sempre"],0,"'Seria oportuno' introduz uma recomendação atenuada, própria do registro formal."],
      ["mcq","Que efeito produz usar o futuro do pretérito em vez do presente num relatório?",["Suaviza a afirmação e deixa espaço para dúvida razoável.","Torna a afirmação mais categórica e segura.","Muda completamente o significado.","Não tem nenhum efeito estilístico."],0,"O futuro do pretérito atenua a afirmação sem negá-la."],
      ["writing","Redija 60-80 palavras de um relatório breve que avalie uma proposta, usando pelo menos duas expressões de atenuação.",[],["conviria destacar","seria oportuno","de modo geral"],"O registro formal prioriza a prudência argumentativa sobre a certeza absoluta.","Relatório interno para um comitê diretivo."]
    ]
  },
  {
    id:"pt_c1_subjunctive_past", level:"C1", title:"Mais-que-perfeito do subjuntivo", emoji:"⏳", xp:90,
    description:"Expresse hipóteses irreais no passado com concordância temporal complexa.",
    study:{
      vocab:[
        ["se eu tivesse sabido","if I had known"],
        ["era impossível que","it was impossible that"],
        ["teria bastado","it would have sufficed"],
        ["só quando","it wasn't until that"]
      ],
      grammar:[
        ["Pretérito mais-que-perfeito do subjuntivo e concordância temporal","Para hipóteses irreais no passado: se + mais-que-perfeito do subjuntivo, futuro do pretérito composto na principal.","Se eu tivesse sabido o risco, teria agido de outra forma."]
      ]
    },
    ex:[
      ["mcq","Qual frase expressa corretamente uma hipótese irreal no passado?",["Se tivéssemos revisado o contrato a tempo, teríamos evitado o problema.","Se revisamos o contrato a tempo, teríamos evitado o problema.","Se tivéssemos revisado o contrato a tempo, evitamos o problema.","Se teríamos revisado o contrato, teríamos evitado o problema."],0,"É preciso mais-que-perfeito do subjuntivo na condição e futuro do pretérito composto na consequência."],
      ["fill","Complete: \"Era impossível que a equipe ___ o projeto sem mais recursos.\"",["tivesse terminado","tinha terminado","terminaria","termine já"],0,"Depois de 'era impossível que' (dúvida no passado) usa-se subjuntivo; para uma ação anterior, o mais-que-perfeito do subjuntivo."],
      ["mcq","O que distingue o mais-que-perfeito do subjuntivo do imperfeito do subjuntivo?",["O mais-que-perfeito situa a hipótese num momento anterior a outro ponto do passado.","Não há nenhuma diferença real entre os dois.","O mais-que-perfeito só se usa para o futuro.","O imperfeito do subjuntivo não existe em português."],0,"O mais-que-perfeito acrescenta uma camada temporal anterior dentro do passado."],
      ["writing","Escreva 70-90 palavras sobre uma decisão passada que você mudaria. Use pelo menos duas estruturas com o mais-que-perfeito do subjuntivo.",[],["se eu tivesse sabido","teria bastado","só quando"],"Verifique se as estruturas combinam corretamente o mais-que-perfeito do subjuntivo e o futuro do pretérito composto.","Reflexão retrospectiva sobre uma decisão profissional."]
    ]
  },
  {
    id:"pt_c1_nominalization", level:"C1", title:"Nominalização e estilo formal", emoji:"📑", xp:86,
    description:"Transforme verbos em substantivos para alcançar um registro acadêmico e técnico.",
    study:{
      vocab:[
        ["a implementação de","the implementation of"],
        ["a ausência de","the absence of"],
        ["dar origem a","to give rise to"],
        ["acarretar","to entail"]
      ],
      grammar:[
        ["Nominalização para um registro formal","Transformar verbos em substantivos (implementar → a implementação) é típico de textos acadêmicos e técnicos.","A implementação tardia da medida deu origem a atrasos generalizados."]
      ]
    },
    ex:[
      ["mcq","Qual reformulação é mais adequada a um relatório técnico?",["A ausência de coordenação entre as equipes deu origem à duplicação de tarefas.","Eles não se coordenaram, então fizeram as coisas repetidas.","As equipes não se falaram, então foi uma bagunça.","Foi um desastre porque ninguém se comunicou."],0,"A nominalização condensa a informação num tom mais objetivo."],
      ["fill","Complete: \"A ___ de novas tecnologias acarreta custos iniciais elevados.\"",["adoção","adotar","adotando","adotado"],0,"O substantivo 'adoção' (nominalização de 'adotar') se integra à estrutura formal com artigo."],
      ["mcq","Que vantagem a nominalização traz a um texto técnico?",["Permite condensar informações e adotar um tom mais objetivo e impessoal.","Torna o texto mais informal e próximo do leitor.","Elimina toda possibilidade de precisão.","Não traz nenhuma vantagem real."],0,"A nominalização é central para densidade e objetividade no registro técnico."],
      ["writing","Reescreva em 60-80 palavras um parágrafo informal sobre um problema de trabalho, transformando-o num trecho de relatório formal com pelo menos três nominalizações.",[],["a implementação","a ausência de","dar origem a"],"Identifique os verbos-chave e transforme-os em substantivos para um tom mais formal.","Transformar uma reclamação informal em um relatório interno."]
    ]
  },
  {
    id:"pt_c1_causal_connectors", level:"C1", title:"Conectores complexos de causa-consequência", emoji:"🔗", xp:88,
    description:"Encadeie causas e consequências com precisão usando conectores avançados.",
    study:{
      vocab:[
        ["dado que","given that"],
        ["na medida em que","insofar as"],
        ["daí que","hence / which is why"],
        ["sob pena de","under penalty of"]
      ],
      grammar:[
        ["Conectores complexos de causa-consequência","'Daí que' introduz uma consequência lógica e pede subjuntivo; 'dado que' e 'na medida em que' introduzem causas com indicativo.","Dado que os custos aumentaram, daí que se revisasse o orçamento."]
      ]
    },
    ex:[
      ["mcq","Qual frase usa corretamente 'daí que'?",["Os dados eram contraditórios, daí que se atrasasse a publicação do relatório.","Os dados eram contraditórios, daí que se atrasou a publicação.","Daí que os dados eram contraditórios, se atrasou o relatório.","Os dados, daí que contraditórios, atrasaram o relatório."],0,"'Daí que' introduz uma consequência lógica e pede subjuntivo: 'se atrasasse'."],
      ["fill","Complete: \"___ os recursos disponíveis, o projeto avançará mais devagar do que o previsto.\"",["Dado","Daí que","Sob pena de","Conviria destacar"],0,"'Dado' introduz uma causa de forma direta."],
      ["mcq","O que significa aproximadamente 'na medida em que'?",["Na proporção ou grau em que algo ocorre; equivalente a 'à medida que'.","Exatamente o mesmo que 'embora'.","Introduz sempre uma hipótese irreal.","Usa-se apenas para falar de medidas físicas."],0,"Expressa uma proporcionalidade entre dois fatos relacionados."],
      ["writing","Escreva um parágrafo de 70-90 palavras explicando a causa e a consequência de uma decisão empresarial, usando pelo menos dois conectores desta lição.",[],["dado que","daí que","na medida em que"],"Distinga com cuidado os conectores de causa dos de consequência.","Análise causal para um relatório de gestão."]
    ]
  },
  {
    id:"pt_c1_mediation_summary", level:"C1", title:"Mediação: sintetizar com precisão", emoji:"🗂️", xp:90,
    description:"Resuma informações complexas conservando as relações lógicas entre as ideias.",
    study:{
      vocab:[
        ["em síntese","in summary"],
        ["o ponto central é que","the key point is that"],
        ["convém destacar","it's worth highlighting"],
        ["a grandes traços","broadly / roughly speaking"]
      ],
      grammar:[
        ["Mediação: sintetizar com precisão","Um bom resumo C1 conserva a relação lógica entre as ideias (causa, contraste, condição), não apenas as palavras-chave.","A grandes traços, o relatório conclui que o plano é viável, embora convenha destacar os riscos de financiamento."]
      ]
    },
    ex:[
      ["mcq","Qual é o melhor resumo para uma audiência com pouco tempo?",["A grandes traços, o relatório recomenda uma expansão gradual, condicionada à obtenção de financiamento externo.","O relatório tem muitas páginas sobre expansão e financiamento e outras coisas.","A expansão será perfeita se todos se esforçarem.","Há financiamento, expansão e um relatório envolvidos."],0,"Um bom resumo prioriza a decisão, a condição e o risco principal."],
      ["fill","Complete: \"___, o estudo mostra uma melhora moderada, mas constante, nos resultados.\"",["Em síntese","Sob pena de","Daí que","Conviria"],0,"'Em síntese' introduz uma conclusão geral que fecha o resumo."],
      ["mcq","O que distingue uma boa mediação (resumo) de uma simples lista de palavras-chave?",["Conserva as relações lógicas (causa, contraste, condição) entre as ideias originais.","Elimina toda relação lógica e deixa só termos soltos.","Deve ser sempre mais longa que o texto original.","Não deve incluir nenhuma conclusão."],0,"A mediação exige preservar o sentido e as conexões, não apenas o vocabulário."],
      ["writing","Resuma em 60-80 palavras um relatório imaginário que avalia duas opções estratégicas, indicando a recomendação principal e uma condição ou risco.",[],["em síntese","o ponto central","convém destacar"],"Priorize a decisão, a razão e uma condição ou risco relevante.","Resumo executivo para a diretoria."]
    ]
  },
  {
    id:"pt_c1_concession_refutation", level:"C1", title:"Concessão avançada e refutação", emoji:"⚔️", xp:92,
    description:"Reconheça argumentos contrários com força retórica antes de refutá-los com precisão.",
    study:{
      vocab:[
        ["se é verdade que... não é menos certo que","while it's true that... it's no less true that"],
        ["longe de","far from"],
        ["isso não impede que","that doesn't prevent"],
        ["em última instância","ultimately"]
      ],
      grammar:[
        ["Concessão avançada e refutação","Estas estruturas reconhecem um argumento contrário com força retórica antes de refutá-lo ou matizá-lo com precisão.","Se é verdade que o plano reduz custos, não é menos certo que introduz riscos consideráveis."]
      ]
    },
    ex:[
      ["mcq","Qual frase refuta um argumento com mais precisão retórica?",["Longe de resolver o problema, a medida poderia agravá-lo a longo prazo.","A medida é ruim, pronto.","Não serve para nada, obviamente.","Todo mundo sabe que está errado."],0,"'Longe de' introduz uma refutação matizada e argumentada, não uma simples negação."],
      ["fill","Complete: \"O projeto gerou lucros; ___, não cobriu os custos iniciais.\"",["isso não impede que se reconheça que","dado que","daí que","na medida em que"],0,"'Isso não impede que se reconheça que' introduz uma concessão seguida de matização."],
      ["mcq","Que função retórica cumpre \"se é verdade que... não é menos certo que\"?",["Reconhece um ponto válido antes de introduzir uma objeção igualmente sólida.","Nega completamente o primeiro ponto.","Expressa dúvida total sobre ambos os pontos.","É uma fórmula puramente informal."],0,"É uma estrutura de concessão-refutação característica do registro argumentativo culto."],
      ["writing","Escreva um parágrafo de 80-100 palavras que refute com nuances uma postura sobre um tema controverso (por exemplo, a automação do trabalho), usando pelo menos duas estruturas de concessão-refutação.",[],["se é verdade que","longe de","em última instância"],"Reconheça primeiro o ponto contrário e depois matize-o ou refute-o com precisão.","Artigo de opinião para uma revista especializada."]
    ]
  },
];
