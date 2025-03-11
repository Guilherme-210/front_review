function calculate2() {
  // criação das variaveis
  const val_3 = parseFloat(document.getElementById("val_3").value)
  const val_4 = parseFloat(document.getElementById("val_4").value)
  const operator = document.getElementById("operator_2").value
  let result

  // Realiza a operação matemática
  switch (operator) {
    case "+":
      result = val_3 + val_4
      break
    case "-":
      result = val_3 - val_4
      break
    case "*":
      result = val_3 * val_4
      break
    case "/":
      if (val_4 === 0) {
        document.getElementById("result_2").value =
          "Divisão por zero não é permitida."
        return
      }
      result = val_3 / val_4
      break
  }

  document.getElementById("carregamento_2").style.display = "block"

  setTimeout(function () {
    // Exibe o resultado no input
    document.getElementById("result_2").value = result

    // Oculta o elemento de carregamento após a conclusão
    document.getElementById("carregamento_2").style.display = "none"
  }, 2000) // 2000 milissegundos = 2 segundos
}

// Função clear
document.getElementById("clearButton_2").addEventListener("click", function () {
  val_3.value = ""
  val_4.value = ""
  result_2.value = ""

  setTimeout(function () {
    val_3.focus()
  }, 1000) // 1000 milissegundos = 1 segundos
})
