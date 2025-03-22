import situationIMC from "./js/situationIMC.js"

document
  .getElementById("calcButton")
  .addEventListener("click", async function (ev) {
    ev.preventDefault()

    const textareaResult = document.getElementById("textareaResult")
    textareaResult.value = ""

    const result = await situationIMC()
    return Promise.resolve(resolve, "Execução finalizada")
  })
