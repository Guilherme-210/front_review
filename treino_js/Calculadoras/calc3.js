// Entrada de elementos da calculadora
const input = document.getElementById("input_3")
const resultInput = document.getElementById("result_3")
const root = document.querySelector(":root")


// Definição das teclas permitidas para a digitação
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Criação do evento de click dos botões da calculadora
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

// Cria o evento do botão clear com foco para digitar na calculadora
document.getElementById("clear").addEventListener("click", function () {
  input.value = ""
  input.focus()
})

// criação do evento de keydown 'tecla precionada'
input.addEventListener("keydown", function (ev) {
  ev.preventDefault()
  // verificação se esta entre as teclas listadas na allowedKeys
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  // configura a tecla de espaço para apagar o ultimo caracter
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  // configura a tecla enter para executar o comando de calcular
  if (ev.key === "Enter") {
    calculate3()
  }
})

// Função de calcular
document.getElementById("equal").addEventListener("click", calculate3)

function calculate3() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")
}

// configuração do botão de copia
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
      button.innerText = "Copied!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = "Copy"
      button.classList.remove("success")
    }
  })

