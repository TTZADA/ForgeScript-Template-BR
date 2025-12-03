# 📦 ForgeScript Base Source (Migração Aoi.js -> Forge)

Bem-vindo! Se você veio do aoi.js (ou do BDFD) e caiu de paraquedas aqui pq a livraria morreu, relaxa. Essa source foi feita pra te mostrar a **lógica real** do ForgeScript.

Aqui não tem mágica, tem código. Lê tudo abaixo antes de sair copiando e colando, senão vai dar erro e vc não vai saber pq.

---

## ⚠️ A REGRA DE OURO (Sintaxe e Lógica)

Isso aqui é o que mais vai te quebrar se você não prestar atenção:

1.  **Arrays começam no 0:**
    * `$message`, `$splitText`, etc... TUDO começa pegando o índice **0**.
    * *No aoi.js:* `$message[1]` (pegava a primeira palavra).
    * *No Forge:* `$message[0]` (pega a primeira palavra).

2.  **Contagens começam no 1:**
    * Funções que contam coisas ou medem largura (como `$argCount`, `$getTextSplitLength`, etc) retornam o numero real (1, 2, 3...).

3.  **Fluxo de Execução:**
    * **TODO O SISTEMA RODA DE CIMA PRA BAIXO.**
    * Nunca ao contrário. Se a variável não foi definida antes, ela não existe depois. Simples assim.

---

## 📂 Onde achar o que você precisa

Eu deixei exemplos práticos nas pastas. Não adianta só ler, vai lá ver o código:

* **Status Customizado:** Segue o modelo em `src/others/statusUtil.js`.
* **Loops ($while, $loop):** Esqueça eventos separados. No Forge, isso acontece **dentro do comando principal**.
    * Veja exemplos em: `src/others/$loop.js` e `src/others/$while.js`.
* **Tempo ($setTimeout, $setInterval):**
    * 🚨 **AVISO:** O interval e timeout **NÃO SALVAM** depois que o bot reinicia.
    * Você vai ter que criar um sistema de restart manual ou esperar o *ForgeScheduler* (addon da comunidade) ficar pronto.
    * Veja a realidade em: `src/others/time/$setInterval.js` e `src/others/time/$setTimeout.js`.
* **Botões e Componentes:**
    * Não tem essa de "row 1, row 2". Aqui começa com `$addActionRow`.
    * Exemplo prático: `src/others/buttonsExamples.js`.

---

## 🗄️ ForgeDB vs Aoi.js (Tradução das Variáveis)

A Database aqui é mais organizada. Se liga na tabela de conversão pra não salvar coisa errada:

| ForgeScript (O que usamos) | Aoi.js (O que era) |
| :--- | :--- |
| `$setUserVar` | Era o antigo `$setGlobalUserVar` |
| `$setGuildVar` ou `$setServerVar` | Era o antigo `$setGuildVar` |
| `$setMemberVar` | Era o antigo `$setUserVar` (por guilda) |
| `$setGlobalVar` | Continua `$setGlobalVar` |
| `$setRoleVar` | **NOVIDADE** (Não existia no aoi.js) |

Para outras dúvidas de DB: [Docs ForgeDB](https://docs.botforge.org/?p=ForgeDB)

---

## ⚡ Eventos e Listeners

Aqui a gente não adivinha evento. Tem que declarar (já deixei quase tudo na index.js, mas saiba o que é o que):

* `messageCreate` → Evento de mensagem (o clássico).
* `interactionCreate` → Evento de interação (botões, slash, menus).
* `clientReady` → Quando o bot liga.
* `error` → Quando o bot explode (erros).

---

## ❓ FaQ (Perguntas Frequentes)

**P: Como faço o "AlwaysReply" ou "AlwaysExecute"?**
R: Apenas crie um comando com `type: "messageCreate"` e deixe ele **SEM NOME**. Ele vai rodar em todas as mensagens.

**P: Como fazer comando de menção (quando marcam o bot)?**
R: Coloque `unprefixed: true` embaixo do `type` no seu comando.

**P: Nos botões/interações, tenho que usar aquelas funções complexas pra pegar o ID?**
R: Não precisa complicar. Tanto `$customID` quanto `$messageID` funcionam na interação normalmente, igualzinho era no BDFD.

**P: Como paro uma execução ou escondo erro?**
R: Use os operadores de função. Você pode fazer sumir resultados indesejados ou parar o código.
🔗 [Docs: Function Operators](https://docs.botforge.org/guide/function-operators-198?p=ForgeScript)

---

## 📚 Links Úteis (Documentação Oficial)

JSONs aqui são específicos, não tenta adivinhar:
🔗 [Funções JSON](https://docs.botforge.org/guide/json-functions-252?p=ForgeScript)

Menus de Seleção (Select Menus):
🔗 [Guia Select Menus](https://docs.botforge.org/guide/how-to-use-select-menus-190?p=ForgeScript)

Novos Componentes (v2):
🔗 [Display Components](https://docs.botforge.org/guide/display-components-256?p=ForgeScript)

---

**Feito pela comunidade, para a comunidade.**
Migrar dói, mas compensa. Boa sorte! 🚀