export default function validateName() {
  const inputfirstName = document.getElementById("firstName"),
    inputLastName = document.getElementById("lastName")

  // Regex permite apenas letras (maiúsculas ou minúsculas) e espaços
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/

  try {
    if (inputfirstName.value.length <= 2) {
      alert("O seu primeiro nome deve ter pelo menos 3 caracteres.")
      Promise.reject("O seu primeiro nome deve ter pelo menos 3 caracteres.")
      inputfirstName.classList.add("error")
      return false
    }
    if (!regex.test(inputfirstName.value)) {
      alert("O seu primeiro nome não pode conter números ou símbolos.")
      Promise.reject("O seu primeiro nome não pode conter números ou símbolos.")
      inputfirstName.classList.add("error")
      return false
    }
    inputfirstName.classList.remove("error")

    if (inputLastName.value.length <= 2) {
      alert("O seu sobrenome deve ter pelo menos 3 caracteres.")
      Promise.reject("O seu sobrenome deve ter pelo menos 3 caracteres.")
      inputLastName.classList.add("error")
      return false
    } else if (!regex.test(inputLastName.value)) {
      alert("O seu sobrenome não pode conter números ou símbolos.")
      Promise.reject("O seu sobrenome não pode conter números ou símbolos.")
      inputLastName.classList.add("error")
      return false
    }
    inputLastName.classList.remove("error")

    // Se for válido, remove erro e adiciona sucesso
    return true
  } catch (error) {
    console.error(`⚠️ Erro na validação do nome:${error}`)
  }
}
