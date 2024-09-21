const palavra = prompt('Escreva uma palavra: ')
let palavraInvertida = ''

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}


if (palavra === palavraInvertida) {
  alert(`Essa palavra é um palíndromo.\n${palavra}\n${palavraInvertida}`)
} else {
  alert(`Não e um palíndromo.\n${palavra}\n${palavraInvertida}`)
}