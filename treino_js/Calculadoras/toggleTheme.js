function toggle_Theme() {
  const toggleButton = document.getElementById("toggle_Theme")
  const body = document.body
  let icon = document.getElementById("icon_Theme")

  // Verifica o tema salvo no localStorage
  let savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme)
  }

  // Execução da troca de tema
  toggleButton.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme")

    switch (currentTheme) {
      case "light":
        document.body.setAttribute("data-theme", "dark") // Adiciona a classe do tema escuro
        break
      case "dark":
        document.body.setAttribute("data-theme", "light") // Remove a classe do tema escuro
        break
    }
  })

  // Execução da troca do icone ao mudar o tema
  icon.setAttribute(
    "name",
    icon.getAttribute("name") === "moon" ? "sunny" : "moon"
  )
}
