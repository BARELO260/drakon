import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Os animais e a natureza ──────────────────────────
l = LessonBuilder("pt_a1_animals_nature", "A1", "Os animais e a natureza", "🐾", 36,
                   "Aprende o vocabulário de animais comuns e da natureza em português.")
animals = [
    ("o cão", "the dog"), ("o gato", "the cat"), ("o pássaro", "the bird"),
    ("o cavalo", "the horse"), ("o peixe", "the fish"), ("a vaca", "the cow"),
]
for t, e in animals:
    l.add_vocab(t, e)
l.add_vocab("a floresta, a montanha, o rio", "the forest, the mountain, the river")
l.add_grammar("Género dos animais", "Muitos nomes de animais mudam de forma consoante o género, mas outros são invariáveis.", "O gato é branco. / A gata é branca. / O peixe é pequeno (invariável)."),
l.add_mcq_vocab("Como se diz \u201co cavalo\u201d em inglês?", "the horse", ["the horse", "the dog", "the cat", "the bird"],
                "\u201cCavalo\u201d diz-se \u201chorse\u201d em inglês.")
l.add_mcq_vocab("Como se diz \u201co pássaro\u201d em inglês?", "the bird", ["the bird", "the fish", "the cow", "the dog"],
                "\u201cPássaro\u201d diz-se \u201cbird\u201d em inglês.")
l.add_fill("Gosto de passear na ___ aos domingos.", "floresta", ["floresta", "gato", "peixe", "vaca"],
           "\u201cPassear na floresta\u201d é uma atividade típica na natureza.")
l.add_translate("Traduz: \u201cThe dog is very friendly.\u201d", "O cão é muito simpático.",
                 ["O gato é muito simpático.", "O cavalo é muito simpático.", "O pássaro é muito simpático."],
                 "\u201cThe dog\u201d = \u201co cão\u201d; \u201cfriendly\u201d = \u201csimpático\u201d.")
l.add_arrange("Ordena: [preto / tenho / gato / um]", "Tenho um gato preto",
              "Sujeito implícito + verbo + artigo + substantivo + adjetivo.")
l.add_writing("Escreve em português 20-30 palavras sobre um animal de que gostas e um lugar na natureza que gostas de visitar.",
              ["gosto de", "a floresta", "o animal"])
lessons.append(l)

# ── A2: O corpo humano ──────────────────────────────────────
l = LessonBuilder("pt_a2_body_parts", "A2", "O corpo humano: partes do corpo", "🦴", 46,
                   "Aprende as partes do corpo e a descrever dores ou características físicas em português.")
body = [
    ("a cabeça", "the head"), ("o braço", "the arm"), ("a perna", "the leg"),
    ("a mão", "the hand"), ("o pé", "the foot"), ("as costas", "the back"),
]
for t, e in body:
    l.add_vocab(t, e)
l.add_grammar("Artigo definido com partes do corpo", "Com partes do corpo usa-se o artigo definido, não o possessivo, quando é claro de quem se fala.", "Dói-me a cabeça. (não \u201cDói-me a minha cabeça\u201d)"),
l.add_mcq_vocab("Como se diz \u201cas costas\u201d em inglês?", "the back", ["the back", "the hand", "the head", "the leg"],
                "\u201cCostas\u201d diz-se \u201cback\u201d em inglês.")
l.add_mcq_vocab("Como se diz \u201co pé\u201d em inglês?", "the foot", ["the foot", "the arm", "the hand", "the head"],
                "\u201cPé\u201d diz-se \u201cfoot\u201d em inglês.")
l.add_fill("Doem-me muito as ___ depois de correr.", "costas", ["costas", "mão", "cabeça", "perna"],
           "Correr costuma causar dores nas costas se não se aquecer bem.")
l.add_translate("Traduz: \u201cMy hand hurts.\u201d", "Dói-me a mão.",
                 ["Dói-me o braço.", "Dói-me a perna.", "Dói-me o pé."],
                 "\u201cMy hand hurts\u201d = \u201cDói-me a mão\u201d, com o artigo definido.")
l.add_arrange("Ordena: [perna / dói / a / me]", "Dói-me a perna",
              "\u201cDói-me\u201d + artigo + parte do corpo.")
l.add_speaking("Descreve em português, em 40-60 palavras, uma dor que já tiveste: que parte do corpo te doía e o que fizeste.",
               ["doía-me", "a perna", "fui ao médico"])
lessons.append(l)

# ── B1: O desporto e a atividade física ────────────────────
l = LessonBuilder("pt_b1_sports_fitness", "B1", "O desporto e a atividade física", "🏃", 60,
                   "Fala sobre desportos, rotinas de exercício e hábitos de atividade física em português.")
sports = [
    ("o futebol", "soccer/football"), ("a natação", "swimming"), ("o ténis", "tennis"),
    ("correr", "to run"), ("levantar pesos", "to lift weights"), ("fazer ioga", "to do yoga"),
]
for t, e in sports:
    l.add_vocab(t, e)
l.add_grammar("\u201cCostumar\u201d + infinitivo para hábitos", "\u201cCostumar\u201d expressa uma ação habitual.", "Costumo correr três vezes por semana."),
l.add_mcq_vocab("Como se diz \u201clevantar pesos\u201d em inglês?", "to lift weights", ["to lift weights", "to run", "to do yoga", "swimming"],
                "\u201cLevantar pesos\u201d diz-se \u201cto lift weights\u201d.")
l.add_mcq_vocab("Como se diz \u201ca natação\u201d em inglês?", "swimming", ["swimming", "tennis", "soccer/football", "to run"],
                "\u201cNatação\u201d diz-se \u201cswimming\u201d.")
l.add_fill("Costumo ___ três vezes por semana para me manter em forma.", "correr", ["correr", "ténis", "futebol", "natação"],
           "\u201cCostumar\u201d + infinitivo (\u201ccorrer\u201d) descreve um hábito.")
l.add_translate("Traduz: \u201cI usually do yoga on Sundays.\u201d", "Costumo fazer ioga aos domingos.",
                 ["Costumo fazer ioga aos sábados.", "Costumo jogar ténis aos domingos.", "Costumo levantar pesos aos domingos."],
                 "\u201cI usually do yoga\u201d = \u201cCostumo fazer ioga\u201d; \u201con Sundays\u201d = \u201caos domingos\u201d.")
l.add_arrange("Ordena: [forma / manter / em / para / corro]", "Corro para me manter em forma",
              "Verbo + \u201cpara\u201d + infinitivo + complemento.")
l.add_writing("Escreve em português 45-65 palavras sobre a tua relação com o desporto: que atividade praticas, com que frequência e porque gostas dela (ou não).",
              ["costumo", "manter-me em forma", "pratico"])
lessons.append(l)

# ── B2: A casa inteligente ────────────────────────────────
l = LessonBuilder("pt_b2_smart_home_tech", "B2", "A casa inteligente: domótica e dispositivos", "💡", 82,
                   "Fala sobre dispositivos inteligentes e domótica, com opiniões matizadas em português.")
tech = [
    ("uma coluna inteligente", "a smart speaker"), ("um termóstato programável", "a programmable thermostat"),
    ("uma câmara de segurança", "a security camera"), ("controlar por voz", "to control by voice"),
    ("automatizar tarefas domésticas", "to automate household tasks"), ("um risco de privacidade", "a privacy risk"),
]
for t, e in tech:
    l.add_vocab(t, e)
l.add_grammar("O futuro simples para previsões tecnológicas", "O futuro simples descreve previsões razoáveis sobre como a tecnologia vai evoluir.", "Daqui a uns anos, mais casas terão dispositivos conectados."),
l.add_mcq_vocab("Como se diz \u201cum risco de privacidade\u201d em inglês?", "a privacy risk", ["a privacy risk", "a smart speaker", "a security camera", "a thermostat"],
                "\u201cRisco de privacidade\u201d diz-se \u201cprivacy risk\u201d.")
l.add_mcq_vocab("Como se diz \u201cautomatizar tarefas domésticas\u201d em inglês?", "to automate household tasks", ["to automate household tasks", "to control by voice", "a smart speaker", "a privacy risk"],
                "\u201cAutomatizar tarefas domésticas\u201d diz-se \u201cto automate household tasks\u201d.")
l.add_fill("Um termóstato programável pode ___ energia se estiver bem configurado.", "poupar", ["poupar", "gastar", "perder", "estragar"],
           "Um termóstato bem configurado ajuda a poupar energia, não a gastá-la.")
l.add_translate("Traduz: \u201cAs colunas inteligentes podem ser controladas por voz.\u201d", "Smart speakers can be controlled by voice.",
                 ["Smart speakers can be controlled by text.", "Security cameras can be controlled by voice.", "Thermostats can be controlled by text."],
                 "\u201cControlar por voz\u201d = \u201ccontrolled by voice\u201d.")
l.add_arrange("Ordena: [privacidade / pode / um / representar / risco / de]", "Pode representar um risco de privacidade",
              "Verbo + \u201crepresentar\u201d + objeto: \u201cPode representar um risco de privacidade.\u201d")
l.add_writing("Escreve em português 55-75 palavras sobre um dispositivo inteligente que usarias (ou já usas) em casa: que vantagem te oferece e que risco de privacidade poderia ter.",
              ["automatizar", "risco de privacidade", "por voz"])
lessons.append(l)

# ── C1: O mundo profissional: reuniões e correspondência ──────────
l = LessonBuilder("pt_c1_workplace_communication", "C1", "O mundo profissional: reuniões e correspondência", "🤝", 90,
                   "Domina o vocabulário e as fórmulas típicas de reuniões e e-mails profissionais em português.")
work = [
    ("convocar uma reunião", "to call a meeting"), ("anexar um documento", "to attach a document"),
    ("ficamos a aguardar a sua resposta", "we look forward to your response"),
    ("retomar um ponto pendente", "to follow up on a pending item"),
    ("chegar a um acordo", "to reach an agreement"), ("adiar uma reunião", "to postpone a meeting"),
]
for t, e in work:
    l.add_vocab(t, e)
l.add_grammar("Fórmulas de cortesia em e-mails formais", "Fórmulas fixas como \u201cFicamos a aguardar a sua resposta\u201d dão um encerramento profissional sem soar brusco.", "Segue em anexo o relatório solicitado. Ficamos a aguardar a sua resposta."),
l.add_mcq_vocab("Como se diz \u201cchegar a um acordo\u201d em inglês?", "to reach an agreement", ["to reach an agreement", "to postpone a meeting", "to call a meeting", "to attach a document"],
                "\u201cChegar a um acordo\u201d diz-se \u201cto reach an agreement\u201d.")
l.add_mcq_vocab("Como se diz \u201cadiar uma reunião\u201d em inglês?", "to postpone a meeting", ["to postpone a meeting", "to call a meeting", "to reach an agreement", "to attach a document"],
                "\u201cAdiar uma reunião\u201d diz-se \u201cto postpone a meeting\u201d.")
l.add_fill("Antes de encerrar a reunião, gostaria de ___ um ponto pendente da semana passada.", "retomar",
           ["retomar", "anexar", "adiar", "convocar"],
           "\u201cRetomar um ponto pendente\u201d significa voltar a tratá-lo.")
l.add_translate("Traduz: \u201cAnexei o relatório solicitado.\u201d", "I'm attaching the requested report.",
                 ["I'm attaching the requested email.", "I'm calling the requested report.", "I'm postponing the requested report."],
                 "\u201cAnexei\u201d = \u201cI'm attaching\u201d; \u201co relatório solicitado\u201d = \u201cthe requested report\u201d.")
l.add_arrange("Ordena: [resposta / aguardar / ficamos / sua / a / a]", "Ficamos a aguardar a sua resposta",
              "Fórmula fixa de encerramento de e-mail profissional.")
l.add_writing("Escreve em português um e-mail profissional breve (55-75 palavras) convocando uma reunião, mencionando um ponto pendente e terminando com uma fórmula de cortesia formal.",
              ["convoco", "ponto pendente", "ficamos a aguardar"])
lessons.append(l)

# ── C2: Registo e estilo: sinónimos consoante o contexto ─────────
l = LessonBuilder("pt_c2_register_synonyms", "C2", "Registo e estilo: sinónimos consoante o contexto", "🔤", 98,
                   "Escolhe o sinónimo adequado consoante o registo (formal, neutro, coloquial) em português.")
syn = [
    ("obter (formal) / arranjar (neutro)", "to obtain / to get"),
    ("falecer (formal) / morrer (neutro) / bater a bota (coloquial)", "to pass away / to die / to kick the bucket"),
    ("solicitar (formal) / pedir (neutro)", "to request / to ask for"),
    ("residir (formal) / viver (neutro)", "to reside / to live"),
    ("não obstante (formal) / mas (neutro)", "however / but"),
]
for t, e in syn:
    l.add_vocab(t, e)
l.add_grammar("Escolher o registo consoante o contexto comunicativo", "A mesma ideia pode exprimir-se com palavras muito diferentes consoante o contexto seja formal, neutro ou coloquial; usar a palavra errada quebra a coerência do texto.", "Num relatório: \u201cA informação foi obtida.\u201d Entre amigos: \u201cConsegui-o.\u201d"),
l.exercises.append(("mcq", "Num relatório oficial, que palavra é mais apropriada para \u201cobter informação\u201d?",
                     ["Obter", "Arranjar", "Apanhar", "Pescar"], 0,
                     "\u201cObter\u201d é o registo formal apropriado para um relatório oficial."))
l.exercises.append(("mcq", "Numa conversa informal entre amigos, que verbo soa mais natural para \u201cmorrer\u201d?",
                     ["Bater a bota", "Falecer", "Perecer", "Expirar"], 0,
                     "\u201cBater a bota\u201d é coloquial e encaixaria numa conversa informal; os outros são demasiado formais ou técnicos."))
l.add_fill("Numa carta formal diz-se \u201c___, avançamos com o projeto\u201d, não \u201cmas\u201d.", "não obstante",
           ["não obstante", "mas", "ainda assim", "porém contudo"],
           "\u201cNão obstante\u201d é o conector formal equivalente a \u201cmas\u201d.")
l.add_translate("Traduz com o registo formal correto: \u201cWe reside in Madrid.\u201d", "Residimos em Madrid.",
                 ["Vivemos em Madrid.", "Ficamos em Madrid.", "Somos de Madrid."],
                 "\u201cReside\u201d num registo formal traduz-se como \u201cresidir\u201d, não o neutro \u201cviver\u201d.")
l.add_arrange("Ordena (registo formal): [foi / a informação / solicitada]", "A informação foi solicitada",
              "Construção passiva, típica do registo formal/administrativo.")
l.add_writing("Escreve em português a mesma mensagem breve (\u201cpreciso que me envies o ficheiro\u201d) em dois registos diferentes: um formal (para um chefe) e um coloquial (para um amigo), em 55-75 palavras no total.",
              ["formal", "coloquial", "solicito"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out_pt.txt")
