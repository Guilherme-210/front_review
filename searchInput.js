document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput")
  const mainContent = document.querySelector("main")

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase()
    const sections = mainContent.querySelectorAll("section")

    sections.forEach((section) => {
      const sectionText = section.textContent.toLowerCase()
      if (sectionText.includes(searchTerm)) {
        section.style.display = "block"
      } else {
        section.style.display = "none"
      }
    })
  })
})
