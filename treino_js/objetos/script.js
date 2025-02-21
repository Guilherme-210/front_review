const form = document.getElementById("form")
const textArea = document.getElementById("textAlunos")
let alunos = [] // Array para armazenar os alunos

form.addEventListener("submit", function (ev) {
  ev.preventDefault()
  const name = document.getElementById("inputName").value
  const age = document.getElementById("inputAge").value
  const matter = document.getElementById("inputMatter").value
  const temp = document.getElementById("inputTemp").value

  const aluno = {
    nome: name,
    idade: age,
    materia: matter,
    tempo: temp,
  }

  alunos.push(aluno) // Adiciona o aluno ao array

  // Limpa os inputs do formulário (opcional)
  document.getElementById("inputName").value = ""
  document.getElementById("inputAge").value = ""
  document.getElementById("inputMatter").value = ""
  document.getElementById("inputTemp").value = ""
})


const textAlunos = parseFloat(document.getElementById("textAlunos").value)

document.getElementById("clearButton").addEventListener("click", function () {
  textArea.value = ""

  setTimeout(function () {
    val_1.focus()
  }, 1000) // 1000 milissegundos = 1 segundos
})


document.getElementById("pullButton").addEventListener("click", function () {
  let texto = ""
  alunos.forEach((aluno) => {
    texto += `Nome: ${aluno.nome},\nIdade: ${aluno.idade}, \nMatéria: ${aluno.materia},\nTempo de estudos: ${aluno.temp}\n\n`
  })

  document.getElementById("carregamento").style.display = "block"

  setTimeout(function () {
    // Exibe o resultado na text area
    textArea.value += texto


    // Oculta o elemento de carregamento após a conclusão
    document.getElementById("carregamento").style.display = "none"
  }, 2000)
})