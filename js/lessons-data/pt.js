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
];
