import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: As horas e os períodos do dia ──────────────────
l = LessonBuilder("pt_a1_time_parts_of_day", "A1", "As horas e os períodos do dia", "🕐", 38,
                   "Aprenda a dizer as horas e os períodos do dia com preposições de tempo.")
time_v = [
    ("a manhã", "the morning"), ("a tarde", "the afternoon"), ("a noite", "the night"),
    ("o meio-dia", "noon"), ("a meia-noite", "midnight"), ("em ponto", "o'clock/sharp"),
]
for t, e in time_v:
    l.add_vocab(t, e)
l.add_grammar("“Que horas são?” + preposições de tempo", "Para perguntar as horas usa-se “Que horas são?”; para responder, “é uma hora” (singular) ou “são + número + horas” (plural), com “da manhã/tarde/noite” para especificar o momento.", "São três horas da tarde. / É uma hora em ponto da madrugada.")
pool_en = [e for _, e in time_v]
l.add_mcq_vocab("Como se diz “a meia-noite” em inglês?", "midnight", pool_en,
                "“Meia-noite” é “midnight” em inglês.")
l.add_mcq_vocab("Como se diz “em ponto” em inglês?", "o'clock/sharp", pool_en,
                "“Em ponto” é “o'clock” ou “sharp” em inglês.")
l.add_fill("___ três horas da tarde.", "São", ["São", "É", "Está", "Há"],
           "Usa-se “são” com números plurais: “são três horas”.")
l.add_translate("Traduza: “It's one o'clock in the morning.”", "É uma hora da manhã.",
                 ["São uma hora da manhã.", "É a uma hora da manhã.", "É uma hora da tarde."],
                 "Com “uma hora” (singular) se usa “é”, não “são”.")
l.add_arrange("Ordene: [tarde / horas / são / da / quatro]", "São quatro horas da tarde",
              "Verbo + número + substantivo + preposição + período do dia.")
l.add_writing("Descreva em 20-30 palavras sua rotina diária mencionando horários específicos, usando “são” e “da manhã/tarde/noite”.",
              ["são", "da manhã", "da tarde"])
lessons.append(l)

# ── A2: No banco: abrir uma conta ──────────────────────
l = LessonBuilder("pt_a2_bank_open_account", "A2", "No banco: abrir uma conta", "🏦", 48,
                   "Aprenda vocabulário bancário básico e a usar “poder” para possibilidade e permissão.")
bank = [
    ("a conta bancária", "the bank account"), ("o caixa eletrônico", "the ATM"),
    ("sacar dinheiro", "to withdraw money"), ("depositar dinheiro", "to deposit money"),
    ("o cartão de débito", "the debit card"), ("o saldo", "the balance"),
]
for t, e in bank:
    l.add_vocab(t, e)
l.add_grammar("“Poder” + infinitivo para possibilidade e permissão", "“Poder” + infinitivo expressa capacidade, possibilidade ou permissão, dependendo do contexto.", "Posso abrir uma conta aqui? / Você pode sacar dinheiro em qualquer caixa eletrônico.")
pool_en = [e for _, e in bank]
l.add_mcq_vocab("Como se diz “sacar dinheiro” em inglês?", "to withdraw money", pool_en,
                "“Sacar dinheiro” é “to withdraw money” em inglês.")
l.add_mcq_vocab("Como se diz “o saldo” em inglês?", "the balance", pool_en,
                "“Saldo” é “balance” em inglês.")
l.add_fill("___ abrir uma conta aqui, por favor?", "Posso", ["Posso", "Pode", "Podemos", "Podem"],
           "Usa-se “posso” em primeira pessoa para pedir permissão: “posso abrir”.")
l.add_translate("Traduza: “You can withdraw money at any ATM.”", "Você pode sacar dinheiro em qualquer caixa eletrônico.",
                 ["Você pode depositar dinheiro em qualquer caixa eletrônico.", "Você deve sacar dinheiro em qualquer caixa eletrônico.", "Você pode sacar dinheiro em qualquer banco."],
                 "“You can withdraw” = “você pode sacar”, com “poder” + infinitivo.")
l.add_arrange("Ordene: [saldo / consultar / meu / quero]", "Quero consultar meu saldo",
              "Verbo + infinitivo + objeto possessivo + substantivo.")
l.add_speaking("Descreva em 40-60 palavras como você abriria uma conta bancária, usando “poder” para pedir permissão ou expressar possibilidade.",
               ["eu posso", "você pode", "conta"])
lessons.append(l)

# ── B1: Viajar de trem e avião: atrasos e mudanças ─────
l = LessonBuilder("pt_b1_train_plane_travel", "B1", "Viajar de trem e avião: atrasos e mudanças", "🚄", 62,
                   "Aprenda vocabulário de viagens longas e a usar “embora” e “mesmo que”.")
travel_l = [
    ("o atraso", "the delay"), ("perder o voo/trem", "to miss the flight/train"),
    ("fazer escala", "to make a layover/stopover"), ("a plataforma", "the platform"),
    ("cancelar um voo", "to cancel a flight"), ("o assento de janela/corredor", "the window/aisle seat"),
]
for t, e in travel_l:
    l.add_vocab(t, e)
l.add_grammar("“Embora” + subjuntivo e “mesmo que” + subjuntivo", "“Embora” e “mesmo que” sempre exigem subjuntivo em português, mesmo quando se referem a um fato real ou já conhecido, ao contrário do espanhol.", "Embora o trem tenha chegado atrasado, eu peguei o voo. / Mesmo que o voo seja cancelado, temos outra opção.")
pool_en = [e for _, e in travel_l]
l.add_mcq_vocab("Como se diz “fazer escala” em inglês?", "to make a layover/stopover", pool_en,
                "“Fazer escala” é “to make a layover” ou “stopover” em inglês.")
l.add_mcq_vocab("Como se diz “a plataforma” em inglês?", "the platform", pool_en,
                "“Plataforma” é “platform” em inglês.")
l.add_fill("Embora o trem ___ atrasado, eu peguei o voo.", "tenha chegado", ["tenha chegado", "chegou", "chegava", "chegará"],
           "“Embora” sempre exige subjuntivo, mesmo para um fato real: “embora... tenha chegado”.")
l.add_translate("Traduza: “Even if the flight is cancelled, we have another option.”", "Mesmo que o voo seja cancelado, temos outra opção.",
                 ["Embora o voo seja cancelado, temos outra opção.", "Mesmo que o voo é cancelado, temos outra opção.", "Mesmo que o trem seja cancelado, temos outra opção."],
                 "“Even if” = “mesmo que”, sempre seguido de subjuntivo em português: “mesmo que seja cancelado”.")
l.add_arrange("Ordene: [janela / prefiro / de / o assento]", "Prefiro o assento de janela",
              "Verbo + artigo + substantivo + preposição + complemento.")
l.add_writing("Escreva 45-65 palavras sobre uma viagem de trem ou avião com imprevistos, usando “embora” e “mesmo que” pelo menos uma vez cada.",
              ["embora", "mesmo que", "atraso"])
lessons.append(l)

# ── B2: A economia colaborativa e o consumo consciente ──
l = LessonBuilder("pt_b2_sharing_economy_conscious_consumption", "B2", "A economia colaborativa e o consumo consciente", "♻️", 84,
                   "Fale sobre economia colaborativa usando o futuro e o futuro do pretérito de probabilidade.")
sharing = [
    ("a economia colaborativa", "the sharing economy"), ("alugar em vez de comprar", "to rent instead of buying"),
    ("o consumo consciente", "conscious consumption"), ("compartilhar recursos", "to share resources"),
    ("a obsolescência programada", "planned obsolescence"), ("reduzir o desperdício", "to reduce waste"),
]
for t, e in sharing:
    l.add_vocab(t, e)
l.add_grammar("Futuro e futuro do pretérito de probabilidade", "O futuro simples pode expressar uma conjectura sobre o presente (“serão dez horas”); o futuro do pretérito expressa uma conjectura sobre o passado (“seriam dez horas quando chegou”).", "Esse modelo terá uns cinco anos de obsolescência programada. / Com esse consumo, gastariam menos recursos do que pensavam.")
pool_en = [e for _, e in sharing]
l.add_mcq_vocab("Como se diz “alugar em vez de comprar” em inglês?", "to rent instead of buying", pool_en,
                "“Alugar em vez de comprar” é “to rent instead of buying” em inglês.")
l.add_mcq_vocab("Como se diz “a obsolescência programada” em inglês?", "planned obsolescence", pool_en,
                "“Obsolescência programada” é “planned obsolescence” em inglês.")
l.add_fill("Esse modelo ___ uns cinco anos de obsolescência programada.", "terá", ["terá", "tem", "teve", "teria"],
           "O futuro de probabilidade expressa uma conjectura sobre o presente: “terá uns cinco anos”.")
l.add_translate("Traduza com futuro do pretérito de probabilidade: “With that consumption, they would spend fewer resources than they thought.”",
                 "Com esse consumo, gastariam menos recursos do que pensavam.",
                 ["Com esse consumo, gastarão menos recursos do que pensavam.", "Com esse consumo, gastariam mais recursos do que pensavam.", "Com esse consumo, gastariam menos dinheiro do que pensavam."],
                 "O futuro do pretérito de probabilidade “gastariam” expressa uma conjectura sobre uma situação hipotética.")
l.add_arrange("Ordene: [desperdício / devemos / o / reduzir]", "Devemos reduzir o desperdício",
              "Verbo modal + infinitivo + artigo + substantivo.")
l.add_writing("Escreva 55-75 palavras sobre a economia colaborativa e o consumo consciente, usando pelo menos um futuro e um futuro do pretérito de probabilidade.",
              ["terá", "seriam", "consumo consciente"])
lessons.append(l)

# ── C1: A linguagem não verbal e a comunicação intercultural ──
l = LessonBuilder("pt_c1_nonverbal_intercultural_communication", "C1", "A linguagem não verbal e a comunicação intercultural", "🤝", 92,
                   "Analise a comunicação não verbal usando “como se” + subjuntivo.")
nonverbal = [
    ("a linguagem corporal", "body language"), ("o contato visual", "eye contact"),
    ("um gesto mal interpretado", "a misinterpreted gesture"), ("a proxêmica (distância pessoal)", "proxemics (personal space)"),
    ("um sinal cultural", "a cultural cue"), ("o silêncio constrangedor", "awkward silence"),
]
for t, e in nonverbal:
    l.add_vocab(t, e)
l.add_grammar("“Como se” + subjuntivo (pretérito imperfeito ou pretérito mais-que-perfeito)", "“Como se” sempre exige subjuntivo, mesmo quando a comparação se refere ao presente, porque descreve algo hipotético ou contrário à realidade.", "Ele agiu como se entendesse o gesto, embora não entendesse. / Ela reagiu como se tivesse sido ofendida.")
pool_en = [e for _, e in nonverbal]
l.add_mcq_vocab("Como se diz “um gesto mal interpretado” em inglês?", "a misinterpreted gesture", pool_en,
                "“Um gesto mal interpretado” é “a misinterpreted gesture” em inglês.")
l.add_mcq_vocab("Como se diz “a proxêmica (distância pessoal)” em inglês?", "proxemics (personal space)", pool_en,
                "“Proxêmica” é “proxemics” em inglês.")
l.add_fill("Ele agiu como se ___ o gesto, embora não entendesse.", "entendesse", ["entendesse", "entendia", "entende", "entenderá"],
           "“Como se” exige subjuntivo imperfeito para comparações sobre o presente: “como se entendesse”.")
l.add_translate("Traduza: “She reacted as if she had been offended.”", "Ela reagiu como se tivesse sido ofendida.",
                 ["Ela reagiu como se fosse ofendida.", "Ela reagiu como se tivesse sido convidada.", "Ela reagiu como se foi ofendida."],
                 "“As if she had been offended” se traduz com pretérito mais-que-perfeito do subjuntivo: “como se tivesse sido ofendida”.")
l.add_arrange("Ordene: [culturas / varia / entre / o contato visual]", "O contato visual varia entre culturas",
              "Sujeito + verbo + preposição + complemento.")
l.add_writing("Escreva 55-75 palavras sobre um mal-entendido intercultural relacionado à linguagem não verbal, usando pelo menos duas estruturas com “como se”.",
              ["como se", "linguagem corporal", "gesto"])
lessons.append(l)

# ── C2: A incerteza e a linguagem científica ───────────
l = LessonBuilder("pt_c2_scientific_hedging_uncertainty", "C2", "A incerteza e a linguagem científica", "🔬", 100,
                   "Analise a linguagem científica usando expressões de matização epistêmica (hedging).")
hedge = [
    ("a incerteza estatística", "statistical uncertainty"), ("uma margem de erro", "a margin of error"),
    ("correlação não implica causalidade", "correlation does not imply causation"), ("os resultados preliminares", "preliminary results"),
    ("uma hipótese não confirmada", "an unconfirmed hypothesis"), ("matizar uma afirmação", "to hedge/qualify a claim"),
]
for t, e in hedge:
    l.add_vocab(t, e)
l.add_grammar("Expressões de matização epistêmica (hedging)", "Frases como “poderia se dizer que”, “não é absurdo pensar que” ou “os dados sugerem, embora não confirmem, que” matizam o grau de certeza de uma afirmação científica, evitando generalizações excessivas.", "Poderia se dizer que existe uma tendência, embora os dados sejam preliminares. / Os resultados sugerem, embora não confirmem, uma relação causal.")
pool_en = [e for _, e in hedge]
l.add_mcq_vocab("Como se diz “uma margem de erro” em inglês?", "a margin of error", pool_en,
                "“Uma margem de erro” é “a margin of error” em inglês.")
l.add_mcq_vocab("Como se diz “uma hipótese não confirmada” em inglês?", "an unconfirmed hypothesis", pool_en,
                "“Uma hipótese não confirmada” é “an unconfirmed hypothesis” em inglês.")
l.add_fill("___ se dizer que existe uma tendência, embora os dados sejam preliminares.", "Poderia", ["Poderia", "Pode", "Deve", "Vai"],
           "“Poderia se dizer que” é uma expressão fixa de matização epistêmica que suaviza uma afirmação.")
l.add_translate("Traduza com precisão: “The results suggest, but do not confirm, a causal relationship.”",
                 "Os resultados sugerem, embora não confirmem, uma relação causal.",
                 ["Os resultados confirmam, embora não sugiram, uma relação causal.", "Os resultados sugerem, embora não confirmem, uma correlação estatística.", "Os resultados sugerem, e confirmam, uma relação causal."],
                 "“Suggest, but do not confirm” se traduz com “sugerem, embora não confirmem”, matizando a certeza.")
l.add_arrange("Ordene: [implica / correlação / não / causalidade]", "Correlação não implica causalidade",
              "Sujeito + advérbio + verbo + objeto.")
l.add_writing("Escreva 55-75 palavras analisando um estudo científico (real ou inventado) com resultados preliminares, usando pelo menos duas expressões de matização epistêmica.",
              ["poderia se dizer que", "os dados sugerem", "incerteza"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out13_pt.txt")
