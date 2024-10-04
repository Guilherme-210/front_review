// Seleciona a primeira div com a classe 'section is-light'
const themeDiv = document.querySelector(".section-dark")

// Manipulando estilos diretamente pela propriedade style
function useLightTheme() {
  themeDiv.style.color = "#000000"
  themeDiv.style.backgroundColor = "#f1f5f9"
}

function useDarkTheme() {
  themeDiv.style.color = "#f4f4f4"
  themeDiv.style.backgroundColor = "#2e2e2e"
}

// Manipulando estilos através das classes utilizadas pelo CSS
function switchTheme() {
  themeDiv.classList.toggle("section-light")
  themeDiv.classList.toggle("section-dark")
}

// Adicionando os eventos
document.getElementById("lightBtn").addEventListener("click", useLightTheme)
document.getElementById("darkBtn").addEventListener("click", useDarkTheme)
document.getElementById("switchBtn").addEventListener("click", switchTheme)
