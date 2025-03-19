import { usuarios } from "../script.js"

const inputName = document.getElementById("inputName")
const inputEmail = document.getElementById("inputEmail")
const inputSenha = document.getElementById("inputSenha")

function submeter() {
  const usuario = {
    Name: inputName.value,
    Email: inputEmail.value,
    Senha: inputSenha.value,
  }

  usuarios.push(usuario)

  inputName.value = ""
  inputEmail.value = ""
  inputSenha.value = ""
}

export { inputName, inputEmail, inputSenha }
export default submeter
