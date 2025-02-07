function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text 
  return label
}

function createImput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

const add__technology = document.getElementById("add__technology")
const form = document.getElementById("dev__form")
const developers = []
let inputRows = 0

add__technology.addEventListener('click', function (ev) {
  const stackInput = document.getElementById("stack__inputs")

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const tachNameInput = createImput('techName-' + rowIndex, null, 'techName')

  newRow.append(
    techNameLabel, tachNameInput
  )

  stackInput.appendChild(newRow)
})