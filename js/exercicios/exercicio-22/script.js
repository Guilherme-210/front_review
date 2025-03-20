import submit from "./js/submit.js"
import release from "./js/release.js"
import { validateEmail } from "./js/validateEmail.js"
// import { validatePassword } from "./js/validatePassword.js"

export let usuarios = []

document.getElementById("submit").addEventListener("click", function () {
  const inputName = document.getElementById("inputName")
  const inputEmail = document.getElementById("inputEmail")

  try {
    inputName.classList.add("success")

    if (validateEmail()) {
      inputEmail.classList.add("success")
    } else {
      inputEmail.classList.add("error")
      alert("Por favor, insira um e-mail válido.")
      return
    }

    submit()
  } catch (error) {
    console.error("Erro ao submeter:", error)
    alert("Ocorreu um erro ao submeter.")
  }
})

document.getElementById("release").addEventListener("click", function () {
  try {
    release()
  } catch (error) {
    console.error("Erro ao liberar:", error)
    alert("Ocorreu um erro ao liberar.")
  }
})
