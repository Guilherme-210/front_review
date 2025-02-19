// Função para Média Simples
const simpleAverage = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

function calculateSimpleAverage() {
  const num1 = parseFloat(document.getElementById("num1").value)
  const num2 = parseFloat(document.getElementById("num2").value)
  const num3 = parseFloat(document.getElementById("num3").value)
  const num4 = parseFloat(document.getElementById("num4").value)
  if (isNaN(num1)) {
    document.getElementById("averageResult").innerText =
      "Por favor, insira um número válido!"
    return
  }
  const result = simpleAverage(num1, num2, num3, num4)
  document.getElementById(
    "averageResult"
  ).innerText = `Média Aritmética Simples: ${result}`
}

// clear button
document.getElementById("clearButton_1").addEventListener("click", function () {
  num1.value = ""
  num2.value = ""
  num3.value = ""
  num4.value = ""
  document.getElementById("averageResult").innerText = ""
})

// Função da Média Ponderada
const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  )
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  )
  return sum / weightSum
}

function calculateWeightedAverage() {
  const entries = [
    {
      number: parseFloat(document.getElementById("number1").value),
      weight: parseFloat(document.getElementById("weight1").value),
    },
    {
      number: parseFloat(document.getElementById("number2").value),
      weight: parseFloat(document.getElementById("weight2").value),
    },
    {
      number: parseFloat(document.getElementById("number3").value),
      weight: parseFloat(document.getElementById("weight3").value),
    },
  ]
  const result = weightedAverage(...entries)
  document.getElementById(
    "weightedAverageResult"
  ).innerText = `Média Ponderada: ${result}`
}

// clear button
document.getElementById("clearButton_2").addEventListener("click", function () {
  number1.value = ""
  number2.value = ""
  number3.value = ""
  weight1.value = ""
  weight2.value = ""
  weight3.value = ""
  document.getElementById("weightedAverageResult").innerText = ""
})

// Função para Mediana
const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1]
  const secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian)
}

function calculateMedian() {
  const numbers = [
    parseFloat(document.getElementById("medianNum1").value),
    parseFloat(document.getElementById("medianNum2").value),
    parseFloat(document.getElementById("medianNum3").value),
    parseFloat(document.getElementById("medianNum4").value),
    parseFloat(document.getElementById("medianNum5").value),
    parseFloat(document.getElementById("medianNum6").value),
    parseFloat(document.getElementById("medianNum7").value),
  ].filter((num) => !isNaN(num))

  const result = median(...numbers)
  document.getElementById("medianResult").innerText = `Mediana: ${result}`
}

// clear button
document.getElementById("clearButton_3").addEventListener("click", function () {
  medianNum1.value = ""
  medianNum2.value = ""
  medianNum3.value = ""
  medianNum4.value = ""
  medianNum5.value = ""
  medianNum6.value = ""
  medianNum7.value = ""
  document.getElementById("medianResult").innerText = ""
})

// Função para Moda
const mode = (...numbers) => {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

function calculateMode() {
  const input = document.getElementById("modeInput").value
  const numbers = input
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num))
  const result = mode(...numbers)
  document.getElementById("modeResult").innerText = `Moda: ${result}`
}

// clear button
document.getElementById("clearButton_4").addEventListener("click", function () {
  modeInput.value = ""
  document.getElementById("modeResult").innerText = ""
})
