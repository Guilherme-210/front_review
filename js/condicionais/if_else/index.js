let idade = prompt('Qual e a sua idade: ')

// Forma padrão para o uso do IF e do ELSE
if (idade > 18){
  alert('Você e maior de idade.')
} else if (idade > 12) {
  alert('Voce e menor de idade.')
} else if (idade < 12){
  alert('voce e criança')
} else{
  alert('idade invalida')
}

// Forma resumida
const resultado = (6 === 6) ? 'verdadeiro' : 'false'

alert(resultado)