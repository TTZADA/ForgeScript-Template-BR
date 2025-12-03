// POR FAVOR, antes de fazer comandos, funções ou qualquer coisa por conta propria, veja o README.md antes!

module.exports = [{
name: 'umaFunçãoSuperUtil',
params: [{
"name": "param1",
"type": "String",
"required": true,   
},{
"name": "param2",
"type": "Number",
"required": false,
}],
code: `

$c[nestas funções usamos a função $return para retornar o valor final, que nem as logicas padrões do JS]
$return[I'm Alive!]

`

},{
name: 'umaFunçãoSuperUtilViaJavascript',
params: [{
"name": "param1",
"type": "String",
"required": true,   
},{
"name": "param2",
"type": "Number",
"required": false,
}],
code: `

$c[AVISO: em qualquer função q precise de fecha conchetes, use \\ para evitar estes erros de sintaxe]

$c[aqui fazemos uma função em JS que retorna hello, não usamos return no codigo js, apenas quando estamos fazendo uma auto execução ( ou o famoso (() => {...}) )]

$c[também utilizamos uma variavel para carregar o resultado do forgescript, já que pode vir com linhas ou espaços a mais]

$let[d.js;$djsEval[
function HelloWorld() {
return 'Hello, World!'
}

HelloWorld();

]]

$c[você também pode só usar um $let com o mesmo nome com o $trim e $trimLines pegando o resultado com $get no mesmo nome]
$return[$trim[$trimLines[$get[d.js]]]]

`
}]