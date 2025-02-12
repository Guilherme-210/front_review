function calculate1() {
  // criação das variaveis
  const val_1 = parseFloat(document.getElementById("val_1").value)
  const val_2 = parseFloat(document.getElementById("val_2").value)
  const operator = document.getElementById("operator_1").value
  let result

  // Realiza a operação matemática
  switch (operator) {
    case "+":
      result = val_1 + val_2
      break
    case "-":
      result = val_1 - val_2
      break
    case "*":
      result = val_1 * val_2
      break
    case "/":
      if (val_2 === 0) {
        document.getElementById("result_1").value =
          "Divisão por zero não é permitida."
        return
      }
      result = val_1 / val_2
      break
  }

  document.getElementById("carregamento").style.display = "block";

  setTimeout(function() {
    // Exibe o resultado no input
    document.getElementById("result_1").value = result

    // Oculta o elemento de carregamento após a conclusão
    document.getElementById("carregamento").style.display = "none"
  }, 2000); // 2000 milissegundos = 2 segundos
}

// Criação do evento de clear
// function clear1() {
//   val_1.value = ""
//   val_2.value = ""
//   result_1.value = ""
// }

document.getElementById("clearButton_1").addEventListener("click", function () {
  val_1.value = ""
  val_2.value = ""
  result_1.value = ""

  setTimeout(function () {
      val_1.focus()

  }, 1000) // 2000 milissegundos = 2 segundos

})