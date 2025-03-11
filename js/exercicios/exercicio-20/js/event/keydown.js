import { calculate3 } from "./calculate.js"

// Definição das teclas permitidas para a digitação
const input = document.getElementById("input_3")

export function keydownEvent(ev) {
  ev.preventDefault()

  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ]

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
}