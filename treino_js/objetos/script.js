const form = document.getElementById("form")
const textArea = document.getElementById("textAlunos")
clearButton = document.getElementById("clearButton");
let alunos = [] // Array para armazenar os alunosconst 


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
  document.getElementById("inputName").focus()
})


document.getElementById("pullButton").addEventListener("click", function () {
  let texto = ""
  alunos.forEach((aluno) => {
    texto += `Nome: ${aluno.nome},\nIdade: ${aluno.idade}, \nMatéria: ${aluno.materia},\nTempo de estudos: ${aluno.temp}\n\n`
  })
  
  

  setTimeout(function () {
    // Exibe o resultado na text area
    textArea.value += texto

    // Mostra o botão "Apagar"
    clearButton.style.display = "inline-block"
  }, 2000)
})

function startLoading() {
  let bar = document.getElementById("progressBar")

  // Redefine a largura para 0% antes de iniciar a animação
  bar.style.background = "#007bff"
  bar.style.width = "0%"
  // transition: width 2s ease-in-out;

  // Agora inicia a animação
  bar.style.width = "100%"

  setTimeout(() => {
    // Altera o fundo após a animação
    bar.style.background = "#00ff00"
    setTimeout(() => {
      // redefine o fundo novamente
      bar.style.width = "0%"
    }, 500)
    setTimeout(() => {
      // redefine o fundo novamente
      bar.style.background = "none"
    }, 500)
  }, 2030)
}

  
  const textAlunos = parseFloat(document.getElementById("textAlunos").value)
  
  document.getElementById("clearButton").addEventListener("click", function () {
    // Limpa a textArea
    textArea.value = "" 

    // Esconde o botão "Apagar"
    clearButton.style.display = "none"

    setTimeout(function () {
      val_1.focus()
    }, 1000) // 1000 milissegundos = 1 segundos
  })