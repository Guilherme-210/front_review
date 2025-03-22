let imc = null

export function calcIMC() {
  const inputHeight = document.getElementById("inputHeight")
  const inputWeight = document.getElementById("inputWeight")
  const textareaResult = document.getElementById("textareaResult")

  // Substituir vírgula por ponto (para aceitar entrada de números corretamente)
  const Height = parseFloat(inputHeight.value.replace(",", "."))
  const Weight = parseFloat(inputWeight.value.replace(",", "."))

  document.getElementById("Height_none").style.display = "none"
  document.getElementById("Weight_none").style.display = "none"
  inputHeight.classList.remove("error")
  inputWeight.classList.remove("error")
  textareaResult.value = ``

  return new Promise((resolve, reject) => {
    if (isNaN(Height) || isNaN(Weight) || Height <= 0 || Weight <= 0) {
      if (isNaN(Height) || Height <= 0) {
        document.getElementById("Height_none").style.display = "block"
        inputHeight.classList.add("error")
        reject("A altura deve ser um número válido e maior que zero.")
        textareaResult.value =
          "⚠️ Ocorreu um erro: A altura deve ser um número válido e maior que zero"
        return
      }
      if (isNaN(Weight) || Weight <= 0) {
        document.getElementById("Weight_none").style.display = "block"
        inputWeight.classList.add("error")
        reject("O peso deve ser um número válido e maior que zero.")
        textareaResult.value =
          "⚠️ Ocorreu um erro: O peso deve ser um número válido e maior que zero."
        return
      }
    }

    imc = (Weight / (Height * Height)).toFixed(2)

    resolve(`Cálculo executado com sucesso. O resultado é: ${imc}`)
  })
}

export { imc }
