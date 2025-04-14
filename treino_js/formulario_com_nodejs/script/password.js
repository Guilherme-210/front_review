export default function validatePassword() {
  const senha = document.getElementById("senha"),
    confirmSenha = document.getElementById("confirmSenha")
  try {
    senha.classList.remove("error")
    confirmSenha.classList.remove("error")

    if (senha.value.length < 8 || confirmSenha.value.length < 8) {
      if (senha.value.length < 8) {
        senha.classList.add("error")
        alert("Campo de senha deve conter ao menos 8 caracteres.")
        Promise.reject("Campo de senha deve conter ao menos 8 caracteres.")
        return
      }
      if (confirmSenha.value.length < 8) {
        confirmSenha.classList.add("error")
        alert("Campo de senha deve conter ao menos 8 caracteres.")
        Promise.reject("Campo de senha deve conter ao menos 8 caracteres.")
        return
      }
    }

    if (senha.value != confirmSenha.value) {
      confirmSenha.classList.add("error")
      alert("As senhas não conferem!")
      Promise.reject("As senhas não conferem!")
      return
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/g

    if (!regex.test(senha.value.trim())) {
      confirmSenha.classList.add("error")
      alert(
        "Sua senha precisa ter pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@)."
      )
      Promise.reject(
        "Sua senha precisa ter pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@)."
      )
      return
    }
    return Promise.resolve
  } catch (error) {
    console.error("⚠️ Erro na validação da senha:", error)
    return
  }
}
