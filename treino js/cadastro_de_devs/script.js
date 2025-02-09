// função para criação de label
function createLabel(text, htmlFor) {
  const label = document.createElement("label")
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

// função para criação de label
function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input")
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

// Criação das variaveis globais
const add__technology = document.getElementById("add__technology")
const form = document.getElementById("dev__form")
const developers = []
let inputRows = 0

// Evento de criação das labels e inputs
add__technology.addEventListener("click", function (ev) {
  const stackInput = document.getElementById("stack__inputs")

  // Criação da lista
  const newRow = document.createElement("li")
  const rowIndex = inputRows
  inputRows++
  newRow.id = "inputRows-" + rowIndex
  newRow.className = "inputRows"

  // Criação da input do nome das materias
  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex)
  const tachNameInput = createInput("techName-" + rowIndex, null, "techName")

  // Criação dos opições de tempo de esperiencia
  const expLabel = createLabel("Tempo: ", "techName-" + rowIndex)
  // Radio 1
  const id1 = "expRadio-" + rowIndex + ".1"
  const expRadio1 = createInput(id1, "0-2 anos", "techExp-" + rowIndex, "radio")
  const expLabel1 = createLabel("0-2 anos", id1)
  // Radio 2
  const id2 = "expRadio-" + rowIndex + ".2"
  const expRadio2 = createInput(id2, "3-4 anos", "techExp-" + rowIndex, "radio")
  const expLabel2 = createLabel("3-4 anos", id2)
  // Radio 3
  const id3 = "expRadio-" + rowIndex + ".3"
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio")
  const expLabel3 = createLabel("5+ anos", id3)

  // Criando botão de remoção
  const removRowBtn = document.createElement("button")
  removRowBtn.type = "button"
  removRowBtn.innerText = "Remove"
  removRowBtn.addEventListener("click", function () {
    stackInput.removeChild(newRow)
  })

  // Adicionando elementos na newRow
  newRow.append(
    techNameLabel,
    tachNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removRowBtn
  )

  // Colocando os elementos da newRow a página
  stackInput.appendChild(newRow)
})

// Adicionando o evento ao formulario
form.addEventListener("submit", function (ev) {
  ev.preventDefault()
  // Capitação dos valores do formulario
  const fullnameInput = document.getElementById("fullname")
  const inputRows = document.querySelectorAll(".inputRows")

  // Criação do obijeto com os valores de cada uma das linhas do formulario
  let technologies = []
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value
    const tecExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value

    technologies.push({ name: techName, exp: tecExp })
  })

  // Cadastrando um novo desenvolvedor
  const newDev = {fullname: fullnameInput.value, technologies: technologies}
  developers.push(newDev)
  alert("Dev " + fullnameInput.value + " cadastrado com sucesso!")

  // Limpeza do formulario
  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)
})