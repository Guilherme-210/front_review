import { usuarios } from "../script.js"

const textArea = document.getElementById("textAreaTest")

function release() {
  if (usuarios.length === 0) {
    textArea.value = "Nenhum usuário cadastrado."
    return
  }

  let text = usuarios
    .map(
      (usuario) => `Nome: ${usuario.Name}
E-mail: ${usuario.Email}
Senha: ${usuario.Senha}`
    )
    .join("\n\n") // Converte o array em uma string com quebras de linha

  textArea.value = text
}

export { textArea }
export default release
