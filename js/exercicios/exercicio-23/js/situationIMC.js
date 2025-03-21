import { imc } from "./calcIMC.js"

export function situationIMC() {
  if (imc === null || imc <= 0 || Number.isNaN(imc)) return

  try {
    const textareaResult = document.getElementById("textareaResult")
    let situacao = ""

    if (imc > 0 && imc < 18.5) {
      situacao = "Situação: Abaixo do normal"
    } else if (imc >= 18.5 && imc < 24.9) {
      situacao = "Situação: Normal"
    } else if (imc >= 25.0 && imc < 29.9) {
      situacao = "Situação: Sobrepeso"
    } else if (imc >= 30.0 && imc < 34.9) {
      situacao = "Situação: Obesidade grau I"
    } else if (imc >= 35.0 && imc < 39.9) {
      situacao = "Situação: Obesidade grau II"
    } else {
      situacao = "Situação: Obesidade grau III"
    }

    textareaResult.value += `\n${situacao}`
  } catch (err) {
    console.log("⚠️ Ocorreu um erro:", err.message)
  }
}
