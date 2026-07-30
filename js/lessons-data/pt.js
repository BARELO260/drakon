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
  {
    id:"pt_c2_style_implication", level:"C2", title:"Estilo, implicação e nuance", emoji:"🔎", xp:92,
    description:"Interpreta o subtexto e reformula ideias complexas usando inversão enfática e litotes.",
    study:{
      vocab:[
        ["de modo algum","by no means","Negação enfática que antecipa o verbo."],
        ["ficar aquém de","to fall short of"],
        ["um pressuposto tácito","a tacit assumption"],
        ["matizar uma afirmação","to qualify a claim"]
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
      ["writing","Escreve 60-80 palavras sobre uma decisão empresarial polémica: usa pelo menos uma inversão enfática ('de modo algum'/'em nenhuma circunstância') e uma litote.",[],["de modo algum","não deixa de ser","em nenhuma circunstância"],"O nível C2 combina precisão argumentativa com recursos retóricos de matização.","Coluna de opinião para uma revista especializada."]
    ]
  },
  {
    id:"pt_c2_rhetoric_tone", level:"C2", title:"Retórica, tom e efeito estilístico", emoji:"🎭", xp:94,
    description:"Escolhe recursos retóricos e ajusta o tom consoante a audiência, o propósito e o efeito pretendido.",
    study:{
      vocab:[
        ["encontrar um equilíbrio","to strike a balance"],
        ["uma pergunta retórica","a rhetorical question"],
        ["evocar","to evoke"],
        ["assumir responsabilidade de forma proporcional","to acknowledge responsibility proportionately"]
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
      ["writing","Reformula esta mensagem interna brusca num comunicado público de 50-70 palavras: \"A equipa falhou, isto tem de ser resolvido já.\" Reconhece o problema, evita dramatizá-lo e propõe uma ação verificável.",[],["reconhecemos","medidas","evitar que se repita"],"Avalia a proporção e o tom: nem frieza excessiva nem dramatização desnecessária.","Comunicado: um serviço digital esteve indisponível durante duas horas."]
    ]
  },
  {
    id:"pt_c2_critical_reading", level:"C2", title:"Leitura crítica e implicaturas", emoji:"🧩", xp:96,
    description:"Interpreta pressuposições, linguagem carregada de valor e conclusões implícitas em textos de opinião.",
    study:{
      vocab:[
        ["dar a entender","to imply"],
        ["uma ressalva","a caveat"],
        ["linguagem carregada","loaded language"],
        ["tirar uma inferência","to draw an inference"]
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
      ["speaking","Analisa em 50-70 palavras uma frase persuasiva à tua escolha: identifica uma pressuposição, uma palavra carregada de valor e uma inferência razoável.",[],["pressupõe","linguagem","inferência"],"Não basta concordar ou discordar: explica como a linguagem orienta a interpretação.","Frase de exemplo: \"É tempo de pôr fim a esta prática ultrapassada.\""]
    ]
  },
  {
    id:"pt_a1_dates_time", level:"A1", title:"Datas, dias e meses", emoji:"📅", xp:35,
    description:"Aprende os dias da semana, os meses e como falar de datas em português.",
    study: {
      vocab: [
        ["segunda-feira, terça-feira, quarta-feira... domingo", "Monday, Tuesday, Wednesday... Sunday"],
        ["janeiro, fevereiro, março... dezembro", "January, February, March... December"],
        ["Que dia é hoje?", "What day is it today?"],
        ["Hoje é dia 5 de maio.", "Today is May 5th.", "Em português: \"dia\" + número + \"de\" + mês."],
        ["Quando é o teu aniversário?", "When is your birthday?"]
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
        ["Como chego a...?", "How do I get to...?"],
        ["Siga em frente / Vire à esquerda / à direita", "Go straight ahead / Turn left / right"],
        ["a paragem de autocarro, a estação de comboio", "the bus stop, the train station"],
        ["Fica a dois quarteirões daqui.", "It's two blocks from here."],
        ["Quanto tempo demora a chegar lá?", "How long does it take to get there?"]
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
        ["O que fazes profissionalmente?", "What do you do for a living?"],
        ["tenho experiência em...", "I have experience in..."],
        ["os meus pontos fortes / fracos", "my strengths / weaknesses"],
        ["trabalhar em equipa, cumprir prazos", "to work as a team, to meet deadlines"],
        ["um contrato a tempo inteiro / parcial", "a full-time / part-time contract"]
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
        ["uma fonte fiável / pouco fiável", "a reliable / unreliable source"],
        ["segundo fontes próximas do caso", "according to sources close to the case"],
        ["uma manchete sensacionalista", "a sensationalist headline"],
        ["cruzar as informações", "to cross-check information"],
        ["um facto verificado, uma opinião", "a verified fact, an opinion"]
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
        ["custar os olhos da cara", "to cost an arm and a leg"],
        ["estar entre a espada e a parede", "to be between a rock and a hard place"],
        ["fazer troça de alguém", "to pull someone's leg"],
        ["não ter papas na língua", "to not mince words"],
        ["mexer-se e desenrascar-se", "to get one's act together"]
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
        ["Que sorte a minha!", "Just my luck! (irónico)"],
        ["com as melhores intenções (irónico)", "with the best of intentions (ironic)"],
        ["um duplo sentido", "a double meaning"],
        ["dizer algo com tom sarcástico", "to say something with a sarcastic tone"],
        ["minimizar deliberadamente algo", "to understate something"]
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
        ["a cozinha, a casa de banho, o quarto, a sala", "the kitchen, the bathroom, the bedroom, the living room"],
        ["a cama, a mesa, a cadeira, o sofá", "the bed, the table, the chair, the sofa"],
        ["Onde é a cozinha?", "Where is the kitchen?"],
        ["A cama está no quarto.", "The bed is in the bedroom."],
        ["em cima de, debaixo de, ao lado de", "on top of, under, next to"]
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
        ["Dói-me a cabeça / a barriga / a garganta.", "My head / stomach / throat hurts."],
        ["Tenho febre, tosse, náuseas.", "I have a fever, a cough, nausea."],
        ["Tem alguma coisa para a dor de cabeça?", "Do you have something for a headache?"],
        ["Tome um comprimido de oito em oito horas.", "Take one pill every eight hours."],
        ["marcar consulta com o médico", "to make a doctor's appointment"]
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
      ["arrange","Ordena: [oito / em / comprimido / horas / tome / um / de]",["Tome um comprimido de oito em oito horas","De oito em oito horas tome um comprimido","Um comprimido tome de oito em oito horas","Tome de oito em oito horas um comprimido"],0,"Imperativo + objeto + frequência: \"Tome um comprimido de oito em oito horas.\""],
      ["speaking","Descreve em português, em 40-60 palavras, uma vez em que te sentiste mal: que sintomas tinhas e o que fizeste.",[],["doía-me","tinha","fui"],"Usa pelo menos dois sintomas e uma ação que tomaste para te sentires melhor."]
    ]
  },
  {
    id:"pt_b1_tech_social_media", level:"B1", title:"Tecnologia e redes sociais", emoji:"📱", xp:58,
    description:"Fala sobre o uso da tecnologia e das redes sociais, as suas vantagens e riscos, em português.",
    study: {
      vocab: [
        ["publicar, partilhar, comentar", "to post, to share, to comment"],
        ["estar online / desligar-se", "to be online / to log off"],
        ["a privacidade, os dados pessoais", "privacy, personal data"],
        ["depender do telemóvel", "to be dependent on your phone"],
        ["manter-se em contacto com", "to keep in touch with"]
      ],
      grammar: [
        ["Comparar vantagens e desvantagens", "\"Por um lado... por outro\" e \"enquanto\" ajudam a comparar duas ideias.", "Por um lado as redes sociais ajudam a manter contacto; por outro, podem ocupar muito tempo."]
      ]
    },
    ex:[
      ["mcq","Qual é uma vantagem real das redes sociais?",["Ajudam a manter contacto com amigos distantes.","Dizem sempre toda a verdade.","Nunca afetam a privacidade.","Não precisam de ligação à internet."],0,"Manter contacto com pessoas distantes é uma vantagem concreta e verificável."],
      ["mcq","Que frase expressa preocupação com a privacidade?",["Preocupa-me como usam os meus dados pessoais.","Adoro partilhar tudo sem pensar.","Nunca uso a internet.","Publico fotos a cada cinco minutos."],0,"A preocupação com os dados pessoais é um tema central da privacidade digital."],
      ["fill","Completa: \"___ um lado gosto de estar online, por outro preciso de me desligar às vezes.\"",["Por","Em","De","A"],0,"\"Por um lado... por outro\" é a estrutura para comparar duas ideias."],
      ["translate","Traduz: \"Tento não depender demasiado do meu telemóvel.\"",["I try not to depend on my phone too much.","I try not depend too much my phone.","Not I try to depend on my phone.","Depend on my phone I try not too much."],0,"\"Depender de\" = \"to depend on\": \"I try not to depend on my phone too much.\""],
      ["arrange","Ordena: [contacto / ajuda-me / manter / a / em / com amigos]",["Ajuda-me a manter contacto com amigos","Manter ajuda-me a em contacto com amigos","A manter ajuda-me em contacto com amigos","Ajuda-me em contacto a manter com amigos"],0,"\"Ajuda-me a\" + infinitivo: \"Ajuda-me a manter contacto com amigos.\""],
      ["writing","Escreve em português 45-65 palavras sobre a tua relação com as redes sociais: uma vantagem, um risco e o que fazes para equilibrar isso.",[],["por um lado","por outro","privacidade"],"Estrutura: vantagem + risco + uma ação concreta para equilibrar ambos."]
    ]
  },
  {
    id:"pt_b2_ethical_dilemmas", level:"B2", title:"Dilemas éticos: argumentar a favor e contra", emoji:"⚖️", xp:80,
    description:"Apresenta e pondera argumentos sobre dilemas éticos comuns em português.",
    study: {
      vocab: [
        ["a favor de / contra", "in favor of / against"],
        ["de um ponto de vista ético", "from an ethical point of view"],
        ["o bem comum, o interesse individual", "the common good, individual interest"],
        ["justificar uma decisão", "to justify a decision"],
        ["não há uma resposta única", "there is no single answer"]
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
        ["segundo (autor, ano)", "according to (author, year)"],
        ["como aponta/sustenta o autor", "as the author points out/argues"],
        ["parafrasear uma ideia", "to paraphrase an idea"],
        ["citar textualmente", "to quote directly"],
        ["o plágio, as fontes fiáveis", "plagiarism, reliable sources"]
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
        ["o ataque pessoal (ad hominem)", "ad hominem attack"],
        ["a falsa dicotomia", "false dichotomy"],
        ["o declive escorregadio", "slippery slope"],
        ["generalizar a partir de um único caso", "to generalize from a single case"],
        ["apelar à emoção em vez dos factos", "to appeal to emotion instead of facts"]
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
        ["estar feliz, triste, cansado, zangado", "to be happy, sad, tired, angry"],
        ["Como te sentes?", "How do you feel?"],
        ["Estou um pouco nervoso/a.", "I'm a bit nervous."],
        ["ter medo, ter sono, ter fome", "to be afraid, to be sleepy, to be hungry"],
        ["Porque estás triste?", "Why are you sad?"]
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
        ["O que gostas de fazer nos teus tempos livres?", "What do you like to do in your free time?"],
        ["pintar, tocar um instrumento, fazer caminhadas", "to paint, to play an instrument, to go hiking"],
        ["Que planos tens para o fim de semana?", "What plans do you have for the weekend?"],
        ["vou + infinitivo", "I'm going to + infinitive"],
        ["encontrar-se com amigos", "to meet up with friends"]
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
        ["reciclar, reutilizar, reduzir o consumo", "to recycle, to reuse, to reduce consumption"],
        ["as alterações climáticas, a pegada de carbono", "climate change, carbon footprint"],
        ["os produtos de utilização única", "single-use products"],
        ["poupar energia / água", "to save energy / water"],
        ["tomar medidas para proteger o planeta", "to take steps to protect the planet"]
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
        ["automatizar tarefas repetitivas", "to automate repetitive tasks"],
        ["substituir postos de trabalho", "to replace jobs"],
        ["adaptar-se a novas ferramentas", "to adapt to new tools"],
        ["gerar novas oportunidades de trabalho", "to generate new job opportunities"],
        ["depende de como é implementada", "it depends on how it's implemented"]
      ],
      grammar: [
        ["O futuro composto para especulação", "\"Terá\" + particípio especula sobre o que provavelmente terá acontecido até um certo momento futuro.", "Até 2030, a IA terá mudado muitos setores."]
      ]
    },
    ex:[
      ["mcq","Qual destas frases apresenta uma posição matizada sobre a IA e o emprego?",["Depende de como é implementada: pode automatizar tarefas mas também gerar novos empregos.","A IA vai destruir todos os empregos, sem exceção.","A IA não afeta o emprego de forma alguma.","Não há nenhuma dúvida sobre o futuro do trabalho."],0,"Uma posição matizada reconhece ambos os efeitos possíveis, sem absolutos."],
      ["mcq","O que significa \"automatizar tarefas repetitivas\"?",["Fazer com que uma máquina realize tarefas que antes eram feitas manualmente e de forma repetida por uma pessoa.","Contratar mais pessoas para tarefas repetitivas.","Eliminar completamente todas as tarefas de uma empresa.","Aumentar o salário de quem faz tarefas repetitivas."],0,"Automatizar significa que um sistema realiza a tarefa em vez de uma pessoa."],
      ["fill","Completa: \"Até 2030, a inteligência artificial ___ mudado muitos setores.\"",["terá","tinha","tem","teria"],0,"O futuro composto (\"terá mudado\") especula sobre algo que provavelmente terá acontecido até uma data futura."],
      ["translate","Traduz: \"Algunos empleos se automatizarán, pero también se crearán otros nuevos.\"",["Some jobs will be automated, but new ones will also be created.","Some jobs will automate, but new ones will also create.","Jobs some will be automated, but new ones will create.","Some jobs will be automated, but also new ones created."],0,"Ambas as orações usam \"will\": \"will be automated\" e \"will be created\"."],
      ["mcq","Qual destas afirmações mostra pensamento crítico, não uma opinião sem fundamento?",["O impacto da IA no emprego vai depender do setor e de como a transição for gerida.","A IA é sempre boa para todos, sem exceções.","A IA é sempre má para todos, sem exceções.","Não vale a pena pensar no futuro do trabalho."],0,"Reconhecer que o impacto depende de fatores concretos (setor, gestão) é pensamento crítico e matizado."],
      ["writing","Escreve em português 55-75 palavras sobre como pensas que a inteligência artificial vai mudar a tua área de trabalho ou estudo nos próximos anos. Inclui um aspeto positivo e um preocupante.",[],["automatizar","depende de","no entanto"],"Evita os absolutos: reconhece tanto vantagens como riscos concretos."]
    ]
  },
  {
    id:"pt_c1_advertising_persuasion", level:"C1", title:"A linguagem publicitária: persuasão e conotação", emoji:"📢", xp:88,
    description:"Analisa como a linguagem publicitária usa a conotação e as técnicas de persuasão.",
    study: {
      vocab: [
        ["uma conotação positiva / negativa", "a positive / negative connotation"],
        ["apelar ao desejo de pertença", "to appeal to the desire to belong"],
        ["um slogan cativante", "a catchy slogan"],
        ["criar uma sensação de urgência", "to create a sense of urgency"],
        ["o público-alvo", "the target audience"]
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
        ["um eufemismo", "a euphemism"],
        ["a ambiguidade estratégica", "strategic ambiguity"],
        ["evitar uma pergunta direta", "to dodge a direct question"],
        ["um ajuste orçamental (eufemismo para corte)", "a budget adjustment (euphemism for a cut)"],
        ["comprometer-se sem se comprometer totalmente", "to commit without fully committing"]
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
        ["primeiro, segundo, terceiro...", "first, second, third..."],
        ["Quanto custa isto?", "How much does this cost?"],
        ["Custa dez euros.", "It costs ten euros."],
        ["barato, caro", "cheap, expensive"],
        ["pagar em dinheiro / com cartão", "to pay in cash / by card"]
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
        ["Gostava de pedir...", "I would like to order..."],
        ["O que me recomenda?", "What do you recommend?"],
        ["Pode trazer a conta, por favor?", "Could you bring me the bill, please?"],
        ["O serviço está incluído?", "Is the tip included?"],
        ["Para mim, o prato do dia.", "For me, the set menu."]
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
        ["abrir uma conta bancária", "to open a bank account"],
        ["fazer um orçamento mensal", "to make a monthly budget"],
        ["poupar para um objetivo", "to save up for a goal"],
        ["as despesas fixas e as despesas variáveis", "fixed expenses and variable expenses"],
        ["pedir um empréstimo, pagar em prestações", "to take out a loan, to pay in installments"]
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
        ["sentir-se sobrecarregado/a", "to feel overwhelmed"],
        ["estabelecer limites, cuidar de si próprio", "to set boundaries, to take care of yourself"],
        ["o esgotamento (burnout)", "burnout"],
        ["pedir ajuda não é sinal de fraqueza", "asking for help is not a sign of weakness"],
        ["processar as emoções", "to process one's emotions"]
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
        ["as partes contratantes", "the contracting parties"],
        ["uma cláusula, um anexo", "a clause, an appendix"],
        ["rescindir um contrato", "to terminate a contract"],
        ["estar sujeito aos termos e condições", "to be subject to the terms and conditions"],
        ["em caso de incumprimento", "in the event of a breach"]
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
        ["a voz narrativa", "the narrative voice"],
        ["um narrador fiável / pouco fiável", "a reliable / unreliable narrator"],
        ["o ponto de vista (primeira, terceira pessoa)", "point of view (first, third person)"],
        ["o tom e o registo de um texto", "the tone and register of a text"],
        ["uma técnica narrativa (flashback, elipse)", "a narrative technique (flashback, ellipsis)"]
      ],
      grammar: [
        ["Analisar decisões formais do autor", "A análise literária avançada liga uma escolha formal (ponto de vista, tempo verbal) ao seu efeito no leitor.", "O uso da primeira pessoa gera proximidade, mas também limita a perspetiva ao que o narrador pode saber ou perceber."]
      ]
    },
    ex:[
      ["mcq","O que caracteriza um \"narrador pouco fiável\"?",["A sua versão dos factos pode estar enviesada, incompleta ou ser enganadora.","Diz sempre a verdade absoluta sobre tudo o que acontece.","Nunca tem opinião sobre os factos que narra.","Só aparece em textos científicos, nunca em ficção."],0,"Um narrador pouco fiável oferece uma perspetiva que o leitor deve questionar, por enviesamento, ignorância ou engano."],
      ["mcq","Que efeito costuma produzir a narração em primeira pessoa?",["Gera proximidade com o narrador, mas limita a perspetiva ao que ele sabe.","Elimina qualquer ligação emocional com o leitor.","Garante sempre uma visão objetiva dos factos.","Só se usa em textos não literários."],0,"A primeira pessoa aproxima o leitor do narrador, à custa de uma visão necessariamente parcial dos factos."],
      ["fill","Completa: \"O uso de um ___ interrompe a cronologia para mostrar um evento do passado.\"",["flashback","epílogo","prólogo","índice"],0,"Um \"flashback\" é a técnica narrativa que interrompe a cronologia linear para mostrar o passado."],
      ["translate","Traduz com precisão técnica: \"A falta de fiabilidade do narrador obriga o leitor a questionar cada afirmação.\"",["The narrator's unreliability forces the reader to question every claim.","The narrator unreliability force the reader question every claim.","The unreliable narrator force to question reader every claim is.","Question every claim forces the narrator's unreliability the reader."],0,"\"Falta de fiabilidade\" traduz-se tecnicamente como \"unreliability\"."],
      ["mcq","Qual destas análises liga corretamente uma decisão formal ao seu efeito no leitor?",["O tempo presente narrativo cria uma sensação de imediatismo, como se os factos estivessem a acontecer agora mesmo.","O autor usou o presente porque é mais fácil de escrever.","O presente não tem qualquer efeito sobre como a história é percecionada.","O presente só se usa em poesia, nunca em narrativa."],0,"Uma boa análise literária liga a escolha formal (tempo verbal) a um efeito concreto na experiência de leitura."],
      ["writing","Escolhe um conto, romance ou relato que conheças (ou inventa um breve) e escreve em português 55-75 palavras analisando a sua voz narrativa: ponto de vista, fiabilidade do narrador e um efeito que isto produz no leitor.",[],["voz narrativa","ponto de vista","efeito"],"Liga explicitamente uma decisão formal do autor a um efeito concreto na leitura, não te limites a descrever o enredo."]
    ]
  },
  {
    id:"pt_a1_professions_jobs", level:"A1", title:"As profissões: o que fazes na vida?", emoji:"👩‍⚕️", xp:36,
    description:"Aprende o vocabulário básico das profissões e a falar do teu trabalho em português.",
    study: {
      vocab: [
        ["médico/a, professor/a, engenheiro/a, empregado/a de mesa", "doctor, teacher, engineer, waiter/waitress"],
        ["O que fazes na vida?", "What do you do for a living?"],
        ["Sou estudante / Trabalho num escritório.", "I'm a student / I work in an office."],
        ["Onde trabalhas?", "Where do you work?"],
        ["trabalhar como + profissão", "to work as + profession"]
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
        ["alto/a, baixo/a, magro/a", "tall, short, slim"],
        ["tem o cabelo comprido/curto, usa óculos", "has long/short hair, wears glasses"],
        ["é simpático/a, tímido/a, divertido/a", "is nice, shy, funny"],
        ["parece-se com a mãe/o pai", "looks like his/her mother/father"],
        ["Como é o teu melhor amigo / a tua melhor amiga?", "What is your best friend like?"]
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
        ["a educação obrigatória / superior", "compulsory / higher education"],
        ["passar/chumbar num exame", "to pass/fail an exam"],
        ["memorizar face a compreender", "to memorize versus to understand"],
        ["um plano de estudos, uma disciplina", "a curriculum, a school subject"],
        ["aprender ao teu próprio ritmo", "to learn at your own pace"]
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
        ["os transportes públicos, a ciclovia", "public transport, the bike lane"],
        ["pedonalizar o centro da cidade", "to pedestrianize the city center"],
        ["reduzir o trânsito e a poluição", "to reduce traffic and pollution"],
        ["um espaço verde, uma zona pedonal", "a green space, a pedestrian zone"],
        ["investir em infraestrutura sustentável", "to invest in sustainable infrastructure"]
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
        ["simplificar sem distorcer", "to simplify without distorting"],
        ["um resultado preliminar face a um confirmado", "a preliminary finding versus a confirmed one"],
        ["a evidência científica sugere que...", "scientific evidence suggests that..."],
        ["uma analogia útil para explicar algo complexo", "a useful analogy to explain something complex"],
        ["evitar o sensacionalismo científico", "to avoid scientific sensationalism"]
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
        ["um ato de fala (pedido, promessa, ordem)", "a speech act (request, promise, order)"],
        ["o significado literal face ao significado pretendido", "literal meaning versus intended meaning"],
        ["um ato de fala indireto", "an indirect speech act"],
        ["as condições de felicidade de um ato de fala", "the felicity conditions of a speech act"],
        ["implicar algo sem o dizer explicitamente", "to imply something without saying it explicitly"]
      ],
      grammar: [
        ["Atos de fala diretos face a indiretos", "Um ato de fala indireto usa uma forma gramatical (como uma pergunta) para desempenhar outra função (como um pedido).", "\"Podias fechar a janela?\" tem forma de pergunta, mas a sua função real é um pedido, não perguntar sobre capacidade."]
      ]
    },
    ex:[
      ["mcq","\"Podias passar-me o sal?\" durante um jantar. Que ato de fala é este, na realidade?",["Um pedido indireto, embora tenha forma de pergunta.","Uma pergunta genuína sobre a capacidade da outra pessoa.","Uma ordem direta e explícita.","Uma promessa sobre o futuro."],0,"Embora tenha forma gramatical de pergunta sobre capacidade, a sua função real é pedir que alguém passe o sal: é um pedido indireto."],
      ["mcq","Um chefe diz a um funcionário: \"Está um pouco frio aqui, não está?\" perto de uma janela aberta. O que está provavelmente a fazer com este enunciado?",["Está a pedir indiretamente que alguém feche a janela.","Está simplesmente a comentar o tempo sem qualquer outra intenção.","Está a perguntar pela temperatura exata da sala.","Está a ordenar explicitamente que se desligue o aquecimento."],0,"O comentário funciona como um pedido indireto para que alguém feche a janela, sem o dizer explicitamente."],
      ["fill","Completa: \"Dizer 'prometo' em voz alta não basta; também devem cumprir-se certas ___ para que a promessa seja válida.\"",["condições de felicidade","regras gramaticais","normas ortográficas","perguntas retóricas"],0,"As \"condições de felicidade\" são os requisitos contextuais (sinceridade, capacidade, etc.) para que um ato de fala funcione corretamente."],
      ["translate","Traduz com precisão técnica: \"Este é um ato de fala indireto: a sua forma literal não corresponde à sua função pretendida.\"",["This is an indirect speech act: its literal form doesn't match its intended function.","This is indirect speech act literal form doesn't match function.","It's a speech act this indirect that doesn't match literal function.","This speech act is indirect its form doesn't function match."],0,"\"Ato de fala indireto\" = \"indirect speech act\"; \"forma literal\" = \"literal form\"; \"função pretendida\" = \"intended function\"."],
      ["mcq","Qual destes enunciados implica algo sem o dizer explicitamente?",["\"Alguns estudantes passaram no exame.\" (implica que nem todos passaram)","\"Todos os estudantes passaram no exame.\"","\"O exame foi na segunda-feira às nove.\"","\"Há trinta estudantes na turma.\""],0,"\"Alguns\" implica pragmaticamente \"nem todos\", embora não o afirme literalmente; é uma implicatura conversacional clássica."],
      ["writing","Escreve em português 55-75 palavras analisando um ato de fala indireto de uma conversa quotidiana (real ou inventada): o que foi dito literalmente, que função pragmática cumpria na realidade, e como o percebeste pelo contexto.",[],["ato de fala","literalmente","na realidade"],"Distingue explicitamente entre a forma gramatical literal do enunciado e a sua função pragmática real."]
    ]
  },
  {
    id:"pt_a1_animals_nature", level:"A1", title:"Os animais e a natureza", emoji:"🐾", xp:36,
    description:"Aprende o vocabulário de animais comuns e da natureza em português.",
    study: {
      vocab: [
        ["o cão", "the dog"],
        ["o gato", "the cat"],
        ["o pássaro", "the bird"],
        ["o cavalo", "the horse"],
        ["o peixe", "the fish"],
        ["a vaca", "the cow"],
        ["a floresta, a montanha, o rio", "the forest, the mountain, the river"],
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
        ["a cabeça", "the head"],
        ["o braço", "the arm"],
        ["a perna", "the leg"],
        ["a mão", "the hand"],
        ["o pé", "the foot"],
        ["as costas", "the back"],
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
      ["arrange","Ordena: [perna / dói / a / me]",["a perna Dói-me", "perna a Dói-me", "Dói-me a perna", "Dói-me perna a"],2,"“Dói-me” + artigo + parte do corpo."],
      ["speaking","Descreve em português, em 40-60 palavras, uma dor que já tiveste: que parte do corpo te doía e o que fizeste.",[],["doía-me", "a perna", "fui ao médico"]],
    ]
  },
  {
    id:"pt_b1_sports_fitness", level:"B1", title:"O desporto e a atividade física", emoji:"🏃", xp:60,
    description:"Fala sobre desportos, rotinas de exercício e hábitos de atividade física em português.",
    study: {
      vocab: [
        ["o futebol", "soccer/football"],
        ["a natação", "swimming"],
        ["o ténis", "tennis"],
        ["correr", "to run"],
        ["levantar pesos", "to lift weights"],
        ["fazer ioga", "to do yoga"],
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
      ["arrange","Ordena: [forma / manter / em / para / corro]",["me forma manter Corro em para", "Corro para me manter em forma", "me Corro para forma em manter", "forma para me manter em Corro"],1,"Verbo + “para” + infinitivo + complemento."],
      ["writing","Escreve em português 45-65 palavras sobre a tua relação com o desporto: que atividade praticas, com que frequência e porque gostas dela (ou não).",[],["costumo", "manter-me em forma", "pratico"]],
    ]
  },
  {
    id:"pt_b2_smart_home_tech", level:"B2", title:"A casa inteligente: domótica e dispositivos", emoji:"💡", xp:82,
    description:"Fala sobre dispositivos inteligentes e domótica, com opiniões matizadas em português.",
    study: {
      vocab: [
        ["uma coluna inteligente", "a smart speaker"],
        ["um termóstato programável", "a programmable thermostat"],
        ["uma câmara de segurança", "a security camera"],
        ["controlar por voz", "to control by voice"],
        ["automatizar tarefas domésticas", "to automate household tasks"],
        ["um risco de privacidade", "a privacy risk"],
      ],
      grammar: [
        ["O futuro simples para previsões tecnológicas", "O futuro simples descreve previsões razoáveis sobre como a tecnologia vai evoluir.", "Daqui a uns anos, mais casas terão dispositivos conectados."],
      ]
    },
    ex:[
      ["mcq","Como se diz “um risco de privacidade” em inglês?",["a thermostat", "a privacy risk", "a smart speaker", "a security camera"],1,"“Risco de privacidade” diz-se “privacy risk”."],
      ["mcq","Como se diz “automatizar tarefas domésticas” em inglês?",["a privacy risk", "a smart speaker", "to automate household tasks", "to control by voice"],2,"“Automatizar tarefas domésticas” diz-se “to automate household tasks”."],
      ["fill","Completa: “Um termóstato programável pode ___ energia se estiver bem configurado.”",["poupar", "perder", "estragar", "gastar"],0,"Um termóstato bem configurado ajuda a poupar energia, não a gastá-la."],
      ["translate","Traduz: “As colunas inteligentes podem ser controladas por voz.”",["Smart speakers can be controlled by voice.", "Smart speakers can be controlled by text.", "Security cameras can be controlled by voice.", "Thermostats can be controlled by text."],0,"“Controlar por voz” = “controlled by voice”."],
      ["arrange","Ordena: [privacidade / pode / um / representar / risco / de]",["de risco Pode representar um privacidade", "privacidade Pode de um risco representar", "Pode representar um risco de privacidade", "risco Pode privacidade representar de um"],2,"Verbo + “representar” + objeto: “Pode representar um risco de privacidade.”"],
      ["writing","Escreve em português 55-75 palavras sobre um dispositivo inteligente que usarias (ou já usas) em casa: que vantagem te oferece e que risco de privacidade poderia ter.",[],["automatizar", "risco de privacidade", "por voz"]],
    ]
  },
  {
    id:"pt_c1_workplace_communication", level:"C1", title:"O mundo profissional: reuniões e correspondência", emoji:"🤝", xp:90,
    description:"Domina o vocabulário e as fórmulas típicas de reuniões e e-mails profissionais em português.",
    study: {
      vocab: [
        ["convocar uma reunião", "to call a meeting"],
        ["anexar um documento", "to attach a document"],
        ["ficamos a aguardar a sua resposta", "we look forward to your response"],
        ["retomar um ponto pendente", "to follow up on a pending item"],
        ["chegar a um acordo", "to reach an agreement"],
        ["adiar uma reunião", "to postpone a meeting"],
      ],
      grammar: [
        ["Fórmulas de cortesia em e-mails formais", "Fórmulas fixas como “Ficamos a aguardar a sua resposta” dão um encerramento profissional sem soar brusco.", "Segue em anexo o relatório solicitado. Ficamos a aguardar a sua resposta."],
      ]
    },
    ex:[
      ["mcq","Como se diz “chegar a um acordo” em inglês?",["to postpone a meeting", "to reach an agreement", "to attach a document", "to call a meeting"],1,"“Chegar a um acordo” diz-se “to reach an agreement”."],
      ["mcq","Como se diz “adiar uma reunião” em inglês?",["to call a meeting", "to attach a document", "to reach an agreement", "to postpone a meeting"],3,"“Adiar uma reunião” diz-se “to postpone a meeting”."],
      ["fill","Completa: “Antes de encerrar a reunião, gostaria de ___ um ponto pendente da semana passada.”",["retomar", "anexar", "convocar", "adiar"],0,"“Retomar um ponto pendente” significa voltar a tratá-lo."],
      ["translate","Traduz: “Anexei o relatório solicitado.”",["I'm attaching the requested report.", "I'm calling the requested report.", "I'm postponing the requested report.", "I'm attaching the requested email."],0,"“Anexei” = “I'm attaching”; “o relatório solicitado” = “the requested report”."],
      ["arrange","Ordena: [resposta / aguardar / ficamos / sua / a / a]",["Ficamos a aguardar a sua resposta", "Ficamos resposta aguardar a a sua", "Ficamos a resposta aguardar sua a", "Ficamos a resposta a sua aguardar"],0,"Fórmula fixa de encerramento de e-mail profissional."],
      ["writing","Escreve em português um e-mail profissional breve (55-75 palavras) convocando uma reunião, mencionando um ponto pendente e terminando com uma fórmula de cortesia formal.",[],["convoco", "ponto pendente", "ficamos a aguardar"]],
    ]
  },
  {
    id:"pt_c2_register_synonyms", level:"C2", title:"Registo e estilo: sinónimos consoante o contexto", emoji:"🔤", xp:98,
    description:"Escolhe o sinónimo adequado consoante o registo (formal, neutro, coloquial) em português.",
    study: {
      vocab: [
        ["obter (formal) / arranjar (neutro)", "to obtain / to get"],
        ["falecer (formal) / morrer (neutro) / bater a bota (coloquial)", "to pass away / to die / to kick the bucket"],
        ["solicitar (formal) / pedir (neutro)", "to request / to ask for"],
        ["residir (formal) / viver (neutro)", "to reside / to live"],
        ["não obstante (formal) / mas (neutro)", "however / but"],
      ],
      grammar: [
        ["Escolher o registo consoante o contexto comunicativo", "A mesma ideia pode exprimir-se com palavras muito diferentes consoante o contexto seja formal, neutro ou coloquial; usar a palavra errada quebra a coerência do texto.", "Num relatório: “A informação foi obtida.” Entre amigos: “Consegui-o.”"],
      ]
    },
    ex:[
      ["mcq","Num relatório oficial, que palavra é mais apropriada para “obter informação”?",["Obter", "Arranjar", "Apanhar", "Pescar"],0,"“Obter” é o registo formal apropriado para um relatório oficial."],
      ["mcq","Numa conversa informal entre amigos, que verbo soa mais natural para “morrer”?",["Bater a bota", "Falecer", "Perecer", "Expirar"],0,"“Bater a bota” é coloquial e encaixaria numa conversa informal; os outros são demasiado formais ou técnicos."],
      ["fill","Completa: “Numa carta formal diz-se “___, avançamos com o projeto”, não “mas”.”",["não obstante", "mas", "porém contudo", "ainda assim"],0,"“Não obstante” é o conector formal equivalente a “mas”."],
      ["translate","Traduz com o registo formal correto: “We reside in Madrid.”",["Vivemos em Madrid.", "Residimos em Madrid.", "Ficamos em Madrid.", "Somos de Madrid."],1,"“Reside” num registo formal traduz-se como “residir”, não o neutro “viver”."],
      ["arrange","Ordena (registo formal): [foi / a informação / solicitada]",["A informação foi solicitada", "informação solicitada A foi", "solicitada informação foi A", "A foi solicitada informação"],0,"Construção passiva, típica do registo formal/administrativo."],
      ["writing","Escreve em português a mesma mensagem breve (“preciso que me envies o ficheiro”) em dois registos diferentes: um formal (para um chefe) e um coloquial (para um amigo), em 55-75 palavras no total.",[],["formal", "coloquial", "solicito"]],
    ]
  },
];
