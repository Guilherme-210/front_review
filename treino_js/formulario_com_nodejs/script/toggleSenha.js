const toggleSenha = document.querySelectorAll(".toggleSenha")

toggleSenha.forEach(icon => {
  icon.addEventListener("click", function () {
    const input = this.parentElement.querySelector(".form-password")
    input.type = input.type === "password" ? "text" : "password"
    this.classList.toggle("fa-eye")
  })
})
