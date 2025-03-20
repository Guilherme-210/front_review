export function validatePassword() {
  const senha = document.getElementById("inputSenha").value.trim()
  try {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/g

    if (!regex.test(senha)) {
      console.warn("E-mail inválido:", senha)
      return false
    }
    return true
  } catch (error) {
    console.error("Erro na validação da senha:", error)
    return false
  }
}
