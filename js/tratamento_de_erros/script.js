// 1. O Problema Sem Tratamento de Erros
console.log("Início do código...")

let resultado = 10 / 2
console.log("Resultado:", resultado)

// let erro = x + 10 // ❌ ERRO: 'x' não está definido.

// Retomo da função
// ReferenceError: x is not defined

console.log("Este código nunca será executado.")

// ==============================
// 2. Como funciona try...catch?

console.log("Início do código...")
try {
  let resultado = 10 / 2
  console.log("Resultado:", resultado)

  let erro = x + 10 // ❌ ERRO: 'x' não está definido.

  console.log("Este código não será executado.")
} catch (erro) {
  console.log("⚠️ Ocorreu um erro:", erro.message)
}
console.log("O código continua normalmente! 🚀")

// Início do código...
// Resultado: 5
// ⚠️ Ocorreu um erro: x is not defined
// O código continua normalmente! 🚀

// ==============================
// 3. O Objeto de Erro ( Error)

try {
  let resultado = x / 2 // ❌ ERRO: 'x' não está definido.
} catch (erro) {
  console.log("Nome do erro:", erro.name)
  console.log("Mensagem:", erro.message)
  console.log("Stack trace:", erro.stack)
}

// Nome do erro: ReferenceError
// Mensagem: x is not defined
// Stack trace: ReferenceError: x is not defined
//     at <anonymous>:2:19

// ==============================
// 4. O Blocofinally

try {
  console.log("Tentando executar o código...")
  let resultado = 10 / 0 // Isso resulta em Infinity, mas não é um erro.
  console.log("Resultado:", resultado)
} catch (erro) {
  console.log("Erro capturado:", erro.message)
} finally {
  console.log("Isso sempre será executado! ✅")
}
console.log("Fim do código!")

// Tentando executar o código...
// Resultado: Infinity
// Isso sempre será executado! ✅
// Fim do código!

// ==============================
// 5. Criando Erros Personalizados ( throw)

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida! ❌")
  }
  return a / b
}
try {
  console.log(dividir(10, 2)) // ✅ Ok
  console.log(dividir(10, 0)) // ❌ ERRO!
} catch (erro) {
  console.log("Erro capturado:", erro.message)
}

// 5
// Erro capturado: Divisão por zero não é permitida! ❌

// ==============================
// 6. Diferentes tipos de erros no JavaScript

try {
  let lista = [1, 2, 3]
  lista.length = -1 // ❌ ERRO: Tamanho de array negativo gera um RangeError.
} catch (erro) {
  if (erro instanceof RangeError) {
    console.log("Erro de intervalo:", erro.message)
  } else {
    console.log("Outro erro:", erro.message)
  }
}

// Erro de intervalo: Invalid array length