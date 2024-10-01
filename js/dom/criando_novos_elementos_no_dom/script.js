function addInput() {
  const ul = document.getElementById("inputs")

  // Criar um novo elemento <li>
  const newLi = document.createElement("li")
  newLi.className = "list-item"
  newLi.innerText = "Novo input: "

  // Criar um novo elemento <input>
  const newInput = document.createElement("input")
  newInput.type = "text"
  newInput.name = "input"

  // Adicionar o input ao <li>
  newLi.appendChild(newInput)
  // Adicionar o <li> à lista <ul>
  ul.appendChild(newLi)
}
