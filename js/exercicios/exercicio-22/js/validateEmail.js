export function validateEmail() {
  const email = document.getElementById("inputEmail").value.toLowerCase().trim()
  try {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!regex.test(email)) {
      console.warn("E-mail inválido:", email)
      return false
    }
    return true
  } catch (error) {
    console.error("Erro na validação do email:", error)
    return false
  }
}
