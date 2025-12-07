# 🧩 Configurando Extensões (Addons)

O ForgeScript é modular, o que significa que você pode plugar ferramentas poderosas nele. Aqui está como configurar as duas principais que já vêm na template: **ForgeDB** e **ForgeCanvas**.

---

## 🗄️ ForgeDB (Banco de Dados)

O ForgeDB é monstro e suporta vários tipos de conexão, não apenas arquivos JSON locais.
**Tipos suportados:** `mysql`, `postgres`, `better-sqlite3`, `sqlite`, `mongodb` ou `default` (SQLite local).

### Como configurar conexão externa:

Se você for usar o padrão (arquivo local), não precisa mudar nada. Mas se quiser conectar num MongoDB ou MySQL da vida, altere sua `index.js` seguindo este modelo:

```javascript
const { ForgeDB } = require("@tryforge/forge.db")

// Configuração da Database
const db = new ForgeDB({
    type: "mysql", // Escolha: mysql, postgres, better-sqlite3, sqlite, mongodb ou default
    
    // Opções de conexão (necessário apenas para databases externas)
    url: "sua_string_de_conexao", // Opcional
    host: "localhost",            // Opcional
    port: 3306,                   // Opcional
    username: "root",             // Opcional
    password: "senha_super_secreta" // Opcional
})

// Inicialização do Client
const client = new ForgeClient({
    ...options, // Suas opções atuais (intents, events, etc...)
    extensions: [
        db // Adicione a constante 'db' que criamos acima aqui
    ]
})

🎨 ForgeCanvas (Imagens)
Geralmente, o ForgeCanvas é "plug-and-play" (só ativar e usar). Você não precisa configurar nada na index.js.
PORÉM, se você quiser usar Fontes Customizadas (aquela fonte bonita que você baixou), você precisa registrá-las assim que o bot ligar.
Como registrar fontes:
Crie um arquivo novo na sua pasta de comandos (ex: src/client/commands/loadFonts.js) e cole isso:
module.exports = [{
    type: "clientReady", // Executa assim que o bot liga
    code: `
    $c[Caminho do arquivo da fonte ; Nome que você vai usar no código]
    $registerFont[./assets/fonts/MinhaFonteLegal.ttf;ArialCustom]
    
    $log[Fonte customizada carregada com sucesso!]
    `
}]

Depois, nos seus comandos de imagem, é só usar o nome ArialCustom (ou o nome que você deu) que vai funcionar!

