let imc 

export function calcIMC() {
  const inputHeight = document.getElementById("inputHeight")
  const inputWeight = document.getElementById("inputWeight")
  const textareaResult = document.getElementById("textareaResult")
  const Height = inputHeight.value
  const Weight = inputWeight.value

  document.getElementById("Height_none").style.display = "none"
  document.getElementById("Weight_none").style.display = "none"
  inputHeight.classList.remove("error")
  inputWeight.classList.remove("error")

  return new Promise((resolve, reject) => {
    if (Height.length < 1 || Weight.length < 1) {
      if (Height.length < 1) {
        reject("A altura não pode estar em branco.")
        document.getElementById("Height_none").style.display = "block"
        inputHeight.classList.add("error")
        return reject
      }
      if (Weight.length < 1) {
        reject("O peso não pode estar em branco.")
        document.getElementById("Weight_none").style.display = "block"
        inputWeight.classList.add("error")
        return reject
      }
    }

    imc = (Weight / (Height * Height)).toFixed(2)

    textareaResult.value = `O resultado e: ${imc}`

    resolve(`Calculo executado com sucesso. O resultado e: ${imc}`)
  })
}

export default { imc }