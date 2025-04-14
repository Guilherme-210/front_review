// Seleciona os elementos
const modal = document.getElementById("modal")
const openModal = document.getElementById("openModal")
const closeModal = document.querySelector(".close")

modal.style.display = "none"

// Abre a modal
document.getElementById("openModal").addEventListener("click", () => {
  modal.style.display = "flex"
})

// Fecha a modal ao clicar no botão (X)
closeModal.addEventListener("click", () => {
  modal.style.display = "none"
})

// Fecha a modal ao clicar fora dela
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    modal.style.display = "none"
  }
})