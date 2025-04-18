// Seleciona os elementos
const modal = document.getElementById("modal")

// Abre a modal
document.getElementById("openModal").addEventListener("click", () => {
  modal.style.display = "flex"
})

// Fecha a modal ao clicar no botão (X)
document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none"
})

// Fecha a modal ao clicar fora dela
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

// Fecha a modal ao clicar na tecla de escape(Esc)
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    modal.style.display = "none"
  }
})