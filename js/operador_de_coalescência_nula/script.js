// script da aula
let a = 0

let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({ a, b })

let c = false ?? 42

console.log({ c })

// exemplo de treino
let x = null ?? "Valor padrão"
console.log(x) // "Valor padrão"

let y = undefined ?? "Outro padrão"
console.log(y) // "Outro padrão"

let z = "Texto" ?? "Nada"
console.log(z) // "Texto"