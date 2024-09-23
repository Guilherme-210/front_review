// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
  '1-nivel', 
  ['2-nivel', 42, true],
  [
    ['3º nível', '1º item', 'Olá, mundo!'],
    ['3º nível', '2º item', 'Oi, mundo!'],
  ],
  ['2-pessoa', '3-pessoa']
]
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][0])
console.log(arr[2][1][1])
console.log(arr[3])

// Podemos ver a estrutura de uma matriz como tabela
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
matriz.push([, 'Nova ninha'])
matriz[1].push('Nova coluna')
console.table(matriz)

// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}
