// Declaração de variáveis
let vida1, ataque1;
let vida2, defesa2, escudo2;
let vida_atual, dano;

// Entrada de dados
ataque1 = parseFloat(prompt('Qual e o seu nivel de ataque? '))

vida2 = parseFloat(prompt('Qual e o nivel de vida dele? '))
defesa2 = parseFloat(prompt('Qual e o seu nivel de defesa? '))
escudo2 = prompt('Ele possui algum tipo de escudo? responda(yes/no)')

// Verificação de escudo
if (escudo2 === 'yes'){
  // Cálculo de dano
  dano = ataque1 - dano
  dano /= 2 // Reduz pela metade se houver escudo

  alert('Que pena! Seu dano acabou de cair pela metade!')

  if (ataque1 > defesa2){
    dano = ataque1 - defesa2
    vida_atual = vida2 - dano
    
    alert(`O seu adiversario perdeu ${dano} e ficou com ${vida_atual} de vida.`)
  } else if (ataque1 == defesa2) {
    alert('O seu adiversario se esquivou do seu golpe.')
  } else if (ataque1 < defesa2) {
    Boolean(dano = ataque1 / 2)
    vida1 = vida1 - dano

    alert('O seu adiversario usou um contra golpe e vc acabou de perder o equivalente a metade do seu dano')
    alert(`Você perdeu ${dano} de vida, a sua vida atual e ${vida1}`)
  }
} else {
  alert('Que chato! O seu dano continuou normal.')
  // Cálculo de dano
  if (ataque1 > defesa2){
    dano = ataque1 - defesa2
    vida_atual = vida2 - dano
    
    alert(`O seu adiversario perdeu ${dano} e ficou com ${vida_atual} de vida.`)
  } else if (ataque1 == defesa2) {
    alert('O seu adiversario se esquivou do seu golpe.')
  } else if (ataque1 < defesa2) {
    Boolean(dano = ataque1 / 2)
    vida1 = vida1 - dano

    alert('O seu adiversario usou um contra golpe e vc acabou de perder o equivalente a metade do seu dano')
    alert(`Você perdeu ${dano} de vida, a sua vida atual e ${vida1}`)
  }
}