// Função auxiliar para criar label
function createLabel(text, htmlFor) {
  const label = document.createElement("label")
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

// Função auxiliar para criar input
function createInput(
  id,
  value,
  name,
  type = "text",
  placeholder = "Tecnologia",
  required = true
) {
  const input = document.createElement("input")
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  input.required = required
  return input
}

// Variáveis globais
const addTechBtn = document.getElementById("addTechBtn")
const form = document.getElementById("devForm")
const developers = []
let inputRows = 0

// Adicionando novas tecnologias no formulário
addTechBtn.addEventListener("click", function () {
  const stackInputs = document.getElementById("stackInputs")
  const newRow = document.createElement("li")
  const rowIndex = inputRows
  inputRows++
  newRow.id = "inputRow-" + rowIndex
  newRow.className = "inputRow"

  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex)
  const techNameInput = createInput("techName-" + rowIndex, null, "techName")

  const expLabel = createLabel("Experiência: ")
  const id1 = "expRadio-" + rowIndex + ".1"
  const expRadio1 = createInput(id1, "0-2 anos", "techExp-" + rowIndex, "radio")
  const expLabel1 = createLabel("0-2 anos", id1)
  const id2 = "expRadio-" + rowIndex + ".2"
  const expRadio2 = createInput(id2, "3-4 anos", "techExp-" + rowIndex, "radio")
  const expLabel2 = createLabel("3-4 anos", id2)
  const id3 = "expRadio-" + rowIndex + ".3"
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio")
  const expLabel3 = createLabel("5+ anos", id3)

  const removeRowBtn = document.createElement("button")
  removeRowBtn.type = "button"
  removeRowBtn.innerText = "Remover"
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow)
  })

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  )
  stackInputs.appendChild(newRow)
})

// Evento de submissão do formulário
form.addEventListener("submit", function (ev) {
  ev.preventDefault()
  const fullname = document.getElementById("fullname").value
  const techRows = document.querySelectorAll(".inputRow")

  const technologies = []
  techRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value
    technologies.push({ name: techName, exp: techExp })
  })

  developers.push({ fullname, technologies })
  console.log(developers)
  form.reset()
  inputRows = 0
  document.getElementById("stackInputs").innerHTML = ""
})
