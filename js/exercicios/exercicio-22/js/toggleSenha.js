export function toggleSenha() {
  const inputSenha = document.getElementById("inputSenha")
  const toggleSenhaIcon = document.getElementById("toggleSenha")

  if (inputSenha.type === "password") {
    inputSenha.type = "text"
    toggleSenhaIcon.textContent = "🙈" // Ícone de "esconder"
  } else {
    inputSenha.type = "password"
    toggleSenhaIcon.textContent = "👁️" // Ícone de "mostrar"
  }
}
