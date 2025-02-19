console.log('Aula')
const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"]

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push("Juno")

console.log({ towns, townsCopy })

const townsClone = [...towns]
townsClone.push("Aldebaran")

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = "Test"

console.log({ townsObj, townsObjClone })

// treino
const numbers = [1, 2, 3, 4, 5]
const newNumbers = [...numbers, 6, 7, 8]

console.log("Treino")
console.log(numbers)
console.log(newNumbers)
