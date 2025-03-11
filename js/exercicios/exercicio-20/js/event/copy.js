// configuração do botão de copia
export function copy(ev) {
  const button = ev.currentTarget
  
  const resultInput = document.getElementById("result_3")

  if (!resultInput || !resultInput.value || resultInput.value === "ERROR") {
    console.log("Nada para copiar!")
    return
  }

  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
}
