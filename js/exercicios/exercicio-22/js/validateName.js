export function validateName(inputName) {
  const nome = inputName.value.trim()

  // Regex permite apenas letras (maiúsculas ou minúsculas) e espaços
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/

  if (nome.length < 2) {
    alert("O nome deve ter pelo menos 2 caracteres.")
    inputName.classList.add("error")
    inputName.classList.remove("success")
    return false
  }

  if (!regex.test(nome)) {
    alert("O nome não pode conter números ou símbolos.")
    inputName.classList.add("error")
    inputName.classList.remove("success")
    return false
  }

  // Se for válido, remove erro e adiciona sucesso
  inputName.classList.remove("error")
  inputName.classList.add("success")
  return true
}
