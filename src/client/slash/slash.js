// POR FAVOR, antes de fazer comandos, funções ou qualquer coisa por conta propria, veja o README.md antes!

module.exports = {
code: `

Primeira opção: $option[minha-opcao]

Opção estranha: $option[opcao-estranha]

$c[... E assim vai as opções]

`,
data: {
  "type": 1,
  "description": "Meu incrível comando :D",
  "name": "hello",
  "nsfw": false,
  "options": [
     {
      "type": 3,
      "description": "Escolhas, escolhas e escolhas...",
      "choices": [
        {
          "name": "1",
          "value": "valor1"
        },
        {
          "name": "2",
          "value": "valor2"
        },
        {
          "name": "3",
          "value": "valor3"
        }
      ],
      "name": "opcao-com-escolhas",
      "required": true
    },
    {
      "type": 3,
      "description": "Minha incrivel opção",
      "name": "minha-opcao",
      "min_length": 10,
      "max_length": 20,
      "required": true
    },
    {
      "type": 3,
      "name": "opcao-estranha",
      "description": "Opção que nao requer você selecionar :D"
    },
    {
      "type": 3,
      "name": "auto-complete",
      "description": "Opção de auto complete >:)",
      "required": false,
      "autocomplete": true
    },
    {
      "type": 3,
      "name": "opcao-traduzida",
      "description": "Ingles? Okay, nos temos!",
      "name_localizations": {
        "en-US": "option-in-english"
      },
      "description_localizations": {
        "en-US": "English? Alright babye"
      }
     }
    ]
  }
}

// Documentação explicativa sobre comandos de barra (slash commands)
// Modo de uso: https://docs.botforge.org/guide/slash-commands-196?p=ForgeScript&tab=documentation
// Gerador da data do comando slash: https://tools.botforge.org/appbuilder
