// Escopo global e escopo local
// let pokemon = "Charmander"

// function evoluir() {
  // pokemon = "Charmeleon" // Modifica a variável no escopo global
// }

// console.log(pokemon) // Charmander
// evoluir()
// console.log(pokemon) // Charmeleon

// Escopo local não acessível fora da função
// function criarAnimal() {
  // let animal = "Gato"
// }
// criarAnimal()
// console.log(animal) // Erro: animal is not defined

// Diferenças entre var e let
// function avaliarNota(nota) {
//   if (nota > 60) {
//     var aprovado = true // Var acessível fora do bloco
//     let situacao = "Aprovado" // Let limitado ao bloco
//   } else {
//     var aprovado = false
//     let situacao = "Reprovado"
//   }

//   console.log(nota)
//   console.log(aprovado) // Funciona
//   console.log(situacao) // Erro: situacao is not defined
// }
// avaliarNota(83)
// avaliarNota(49)

// Var dentro de função não é acessível fora
// function ola() {
//   var texto = "Olá, mundo!"
// }
// console.log(texto) // Erro: texto is not defined

// Comportamento de inicialização de var e let
console.log(nome) // undefined (var é "içada")
// console.log(sobrenome) // Erro: Cannot access 'sobrenome' before initialization
var nome = "Isaac"
let sobrenome = "Pontes"
console.log(nome) // Isaac
console.log(sobrenome) // Pontes
