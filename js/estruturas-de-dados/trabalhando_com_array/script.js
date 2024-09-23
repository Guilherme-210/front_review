const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// || push: Adiciona um elemento no final, e devolve o novo tamanho ||
// let tamanho = arr.push("Boromir")
// console.log(arr)
// console.log(tamanho)

// || unshift: Adiciona um elemento no começo, e devolve o novo tamanho ||
// tamanho = arr.unshift("Boromir")
// console.log(arr)
// console.log(tamanho)

// || pop: Remove o ultimo elemento, e mostra qual foi removido ||
// let elementoRemovido = arr.pop("Boromir")
// console.log(arr)
// console.log(elementoRemovido)

// || shift: Remove o primeiro elemento, e mostra qual foi removido ||
// elementoRemovido = arr.shift("Boromir")
// console.log(arr)
// console.log(elementoRemovido)

// || includes: Busca por um certo elemento dentro do array ||
// const inclui = arr.includes("Gandalf")
// console.log(inclui)

// || indexOf: Encontra a posição do elemento indicado,  -1 em caso de não existir ||
// const indice = arr.indexOf("Gandalf")
// console.log(indice)

// || slice: Copia uma parte do array e devolve a parte copiada sem alterar o original ||
// const hobbits = arr.slice(0, 4)
// || Também pode ser usado com números negativos referenciar o final do array ||
// const outros = arr.slice(-4)
// console.log(arr)
// console.log(hobbits)
// console.log(outros)

// || concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
// const sociedade = hobbits.concat(outros, "Boromir")
// console.log(sociedade)
// console.log(hobbits)
// console.log(outros)

// || splice: Permite remover elementos em qualquer posição do array, enquanto os substitui por novos ||
// const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
// console.log(elementosRemovidos)
// console.log(sociedade)

// || Usando o for para percorrer cada elemento do array ||
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}
