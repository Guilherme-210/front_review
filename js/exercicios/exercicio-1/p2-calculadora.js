/* Calculadora de 4 Operações

Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.
*/
let val1 = null
val2 = null
addition = null
subtraction = null
let multiplication = null
let division = null

val1 = window.prompt('Insira o primeiro valor:')
val2 = window.prompt('Insira o segundo valor:')

/*soma*/
addition = Number(val1) + Number(val2)
console.log('A soma de ' + val1 + ' com ' + val2 + ', e igual a ' + addition)

/*subitração*/
subtraction = Number(val1) - Number(val2)
console.log('A subitração de ' + val1 + ' por ' + val2 + ', e igual a ' + subtraction)

/*multiplicação*/
multiplication = Number(val1) * Number(val2)
console.log('A multiplicação de ' + val1 + ' por ' + val2 + ', e igual a ' + multiplication)

/*divisão*/
division = Number(val1) / Number(val2)
console.log('A divisão de ' + val1 + ' por ' + val2 + ', e igual a ' + division)

/*coreção da aula */
alert(
  "Resultados:\n" +
  "\nSoma: " + addition +
  "\nSubtração: " + subtraction +
  "\nMultiplicação: " + multiplication +
  "\nDivisão: " + division
)