import { calcIMC } from "./js/calcIMC.js"

document.getElementById("calcButton").addEventListener("click", function (ev) {
  ev.preventDefault()


  calcIMC()
})
