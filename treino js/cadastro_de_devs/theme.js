const toggleButton = document.getElementById("toggle-theme")
const body = document.body

// Verifica o tema salvo no localStorage
const savedTheme = localStorage.getItem("theme")
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme)
}

// Alterna o tema ao clicar no botão
toggleButton.addEventListener("click", () => {
  const currentTheme =
    body.getAttribute("data-theme") === "dark" ? "light" : "dark"

  // Aplica o novo tema
  body.setAttribute("data-theme", currentTheme)

  // Salva no localStorage
  localStorage.setItem("theme", currentTheme)
})
