function calcularMedia(a, b) {
  const media = (a + b) / 2
  return media
}

const resultado = calcularMedia(5, 9)
console.log("A média é:", resultado)

function criarProduto(nome, preco) {
  const produto = { 
    nome, 
    preco, 
    estoque: 1 
  }
  return produto
}

const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
console.log(notebook)

function areaRetangular(base, altura) {
  return base * altura
}

console.log(areaRetangular(3, 5))

function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}

console.log(areaQuadrada(8))

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}

console.log(maioridade(20))
console.log(maioridade(13))

function ola() {
  let texto = '...'
  texto = 'ola, mundo!'
  console.log(texto)
  return texto
}

console.log(ola())