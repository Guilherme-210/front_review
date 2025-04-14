// Função para alternar o tema
function toggle_Theme() {
  const body = document.body
  const icon = document.getElementById("icon_Theme")

  // Obtém o tema atual ou assume "light" como padrão
  const currentTheme = body.getAttribute("data-theme") || "light"
  const newTheme = currentTheme === "light" ? "dark" : "light"
  
  // Aplica o novo tema no body
  body.setAttribute("data-theme", newTheme)

  // Salva a escolha do usuário no localStorage
  localStorage.setItem("theme", newTheme)
  
  // Alterna o ícone, se existir
  if (icon) {
    icon.setAttribute("name", newTheme === "dark" ? "sunny" : "moon")
  }
}

// Aplicar o tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.body.setAttribute("data-theme", savedTheme)

  // Atualiza o ícone do botão de acordo com o tema salvo
  const icon = document.getElementById("icon_Theme")
  if (icon) {
    icon.setAttribute("name", savedTheme === "dark" ? "sunny" : "moon")
  }
})


