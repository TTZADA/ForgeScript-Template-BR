module.exports = (client) => {
    client.commands.add({
    type: "clientReady",
    code: `
    $c[status]
    $arrayLoad[presence;||;online||online||online||online]
    $c[tipo do status]
    $arrayLoad[type;||;Custom||Custom||Custom||Custom]
    $c[texto do status]
    $arrayLoad[status;||;texto || texto 2 || texto 3 || texto 4]
    
    $c[PELA AMOR DE DEUS, NÃO MUDE NADA DAQUI PARA BAIXO, SÓ ALTERE QUANDO TIVER MAIS EXPERIENCIA COM FORGESCRIPT]
    
    $let[n;0]
    $setInterval[
      $setStatus[$arrayAt[presence;$get[n]];$arrayAt[type;$get[n]];$arrayAt[status;$get[n]]]
      $letSum[n;1]
      $if[$get[n]>=$arrayLength[status];$let[n;0]]
    ;18s] 
    `
  })
}