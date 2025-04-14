export default function validateEmail() {
  const email = document.getElementById("email")
  try {
    if (email.value.trim() === "") {
      email.classList.add("error")
      Promise.reject("Campo de e-mail não pode estar em branco.")
      return
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!regex.test(email.value.toLowerCase().trim())) {
      email.classList.add("error")
      Promise.reject("E-mail inválido:" + email.value)
      return
    }
    return Promise.resolve
  } catch (error) {
    console.error(`⚠️ Erro na validação do e_mail: ${error}`)
    return false
  }
}
