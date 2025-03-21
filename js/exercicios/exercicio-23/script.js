import { calcIMC } from "./js/calcIMC.js"
import { situationIMC } from "./js/situationIMC.js"

document.getElementById("calcButton").addEventListener("click", function (ev) {
  ev.preventDefault()

  calcIMC()
  situationIMC()
})
