import { imc, calcIMC } from "./calcIMC.js"

export default async function situationIMC() {
  calcIMC()
  if (imc == null || imc <= 0 || isNaN(imc)) return

  calcIMC()
    .then(() => {
      let situacao = ""

      if (imc < 18.5) {
        situacao = "Abaixo do normal"
      } else if (imc < 24.9) {
        situacao = "Normal"
      } else if (imc < 29.9) {
        situacao = "Sobrepeso"
      } else if (imc < 34.9) {
        situacao = "Obesidade grau I"
      } else if (imc < 39.9) {
        situacao = "Obesidade grau II"
      } else {
        situacao = "Obesidade grau III"
      }

      console.log("calculando...")

      textareaResult.value = "calculando..."
      setTimeout(() => {
        textareaResult.value = ""
        textareaResult.value = `Seu IMC é: ${imc}\nSua situação é: ${situacao}`
        return console.log(
          Promise.resolve(
            `Verificação executada com sucesso. Seu IMC é: ${imc} - Sua situação é: ${situacao}`
          )
        )
      }, 1000)
    })
    .catch((err) => {
      console.log("⚠️ Ocorreu um erro:", err.message)
      textareaResult.value = ("⚠️ Ocorreu um erro:", err.message)
    })
}