function toggleTheme() {
  // Verifica o tema salvo no localStorage
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme)
  }
}