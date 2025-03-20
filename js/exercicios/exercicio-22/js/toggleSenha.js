export function toggleSenha() {
  const inputSenha = document.getElementById("inputSenha")

  if (inputSenha.type === "password") {
    inputSenha.type = "text"
    this.textContent = "🙈" // Ícone de "esconder"
  } else {
    inputSenha.type = "password"
    this.textContent = "👁️" // Ícone de "mostrar"
  }
}
