import { imc } from "./calcIMC.js"

export function situationIMC() {
  if (imc == null || imc <= 0 || isNaN(imc)) return

  try {
    let situacao = ""

    if (imc < 18.5) {
      situacao = "Situação: Abaixo do normal"
    } else if (imc < 24.9) {
      situacao = "Situação: Normal"
    } else if (imc < 29.9) {
      situacao = "Situação: Sobrepeso"
    } else if (imc < 34.9) {
      situacao = "Situação: Obesidade grau I"
    } else if (imc < 39.9) {
      situacao = "Situação: Obesidade grau II"
    } else {
      situacao = "Situação: Obesidade grau III"
    }
    textareaResult.value = `O resultado é: ${imc}\n${situacao}`
  } catch (err) {
    console.log("⚠️ Ocorreu um erro:", err.message)
  }
}