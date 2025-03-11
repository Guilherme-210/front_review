document.getElementById("equal").addEventListener("click", calculate3)
const resultInput = document.getElementById("result_3")
const input = document.getElementById("input_3")

function calculate3() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")
}

export { calculate3 }
