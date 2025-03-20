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
  const Email = document.getElementById("inputEmail").value
  const Senha = document.getElementById("inputSenha").value

  inputName.classList.remove("success")
  inputName.classList.remove("error")
  inputEmail.classList.remove("success")
  inputEmail.classList.remove("error")
  inputSenha.classList.remove("success")
  inputSenha.classList.remove("error")

  document.getElementById("name_error").style.display = "none"
  document.getElementById("email_none").style.display = "none"
  document.getElementById("email_error").style.display = "none"
  document.getElementById("password_none").style.display = "none"
  document.getElementById("password_error").style.display = "none"

  try {
    // Validação do nome
    if (!validateName(inputName)) {
      document.getElementById("name_error").style.display = "block"
      return
    }

    // Validação do email
    if (Email.length < 1) {
      inputEmail.classList.add("error")
      alert("Campo de e-mail não pode estar em branco.")
      document.getElementById("email_none").style.display = "block"
      return
    } else if (validateEmail()) {
      inputEmail.classList.add("success")
    } else {
      inputEmail.classList.add("error")
      alert("Por favor, insira um e-mail válido.")
      document.getElementById("email_error").style.display = "block"
      return
    }

    // Validação da senha
    if (Senha.length < 1) {
      inputSenha.classList.add("error")
      alert("Campo senha não pode estar em branco.")
      document.getElementById("password_none").style.display = "block"
      return
    } else if (validatePassword()) {
      inputSenha.classList.add("success")
    } else {
      inputSenha.classList.add("error")
      // alert("Por favor, insira uma senha válida.")
      document.getElementById("password_error").style.display = "block"
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
