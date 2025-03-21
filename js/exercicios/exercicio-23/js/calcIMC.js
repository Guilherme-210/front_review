let imc = null

export function calcIMC() {
  const inputHeight = document.getElementById("inputHeight")
  const inputWeight = document.getElementById("inputWeight")
  const textareaResult = document.getElementById("textareaResult")
  const Height = parseFloat(inputHeight.value)
  const Weight = parseFloat(inputWeight.value)

  document.getElementById("Height_none").style.display = "none"
  document.getElementById("Weight_none").style.display = "none"
  inputHeight.classList.remove("error")
  inputWeight.classList.remove("error")

  return new Promise((resolve, reject) => {
    if (Height.length < 1 || Weight.length < 1) {
      if (Height.length < 1) {
        document.getElementById("Height_none").style.display = "block"
        inputHeight.classList.add("error")
        reject("A altura não pode estar em branco.")
        return
      }
      if (Weight.length < 1) {
        document.getElementById("Weight_none").style.display = "block"
        inputWeight.classList.add("error")
        reject("O peso não pode estar em branco.")
        return
      }
    }

    imc = (Weight / (Height * Height)).toFixed(2)

    textareaResult.value = `O resultado e: ${imc}`

    resolve(`Calculo executado com sucesso. O resultado e: ${imc}`)
  })
}
export { imc }