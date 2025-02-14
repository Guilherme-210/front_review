function toggle_Theme() {
  const body = document.body
  const icon = document.getElementById("icon_Theme")

  // Obtém o tema atual
  let currentTheme = body.getAttribute("data-theme") || "light"

  // Alterna o tema
  let newTheme = currentTheme === "light" ? "dark" : "light"
  body.setAttribute("data-theme", newTheme)

  // Salva no localStorage
  localStorage.setItem("theme", newTheme)

  // Alterna o ícone
  icon.setAttribute("name", newTheme === "dark" ? "sunny" : "moon")
}

// Aplicar o tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("theme") || "light"
  document.body.setAttribute("data-theme", savedTheme)

  // Ajusta o ícone corretamente
  const icon = document.getElementById("icon_Theme")
  if (icon) {
    icon.setAttribute("name", savedTheme === "dark" ? "sunny" : "moon")
  }
})
