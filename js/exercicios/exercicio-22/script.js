import submit from "./js/submit.js"
import release from "./js/release.js"
import { validateEmail } from "./js/validateEmail.js"
import { validatePassword } from "./js/validatePassword.js"
import { validateName } from "./js/validateName.js"
import { toggleSenha } from "./js/toggleSenha.js"

export let usuarios = []

document.getElementById("submit").addEventListener("click", function () {
  const inputName = document.getElementById("inputName")
  const inputEmail = document.getElementById("inputEmail")
  const inputSenha = document.getElementById("inputSenha")

  inputName.classList.remove("success")
  inputName.classList.remove("error")
  inputEmail.classList.remove("success")
  inputEmail.classList.remove("error")
  inputSenha.classList.remove("success")
  inputSenha.classList.remove("error")

  try {
    // Validação do nome
    if (!validateName(inputName)) return

    // Validação do email
    if (validateEmail()) {
      inputEmail.classList.add("success")
    } else {
      inputEmail.classList.add("error")
      alert("Por favor, insira um e-mail válido.")
      return
    }

    // Validação da senha
    if (validatePassword()) {
      inputSenha.classList.add("success")
    } else {
      inputSenha.classList.add("error")
      alert("Por favor, insira uma senha válida.")
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

document.getElementById("toggleSenha").addEventListener("click", function () {
  toggleSenha()
})
