// POR FAVOR, antes de fazer comandos, funções ou qualquer coisa por conta propria, veja o README.md antes!

module.exports = [{
name: 'comando',
aliases: ['alias1', 'alias2'],
type: 'messageCreate', // Tipo de eventos principais que podem desparar o comando dependendo do seu contexto: messageCreate, interactionCreate, clientReady, error - Mais eventos em: https://docs.botforge.org/
code: `

$eval[$message]

`

}]