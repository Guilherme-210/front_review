import submeter from "./js/submeter.js"
import release from "./js/release.js"

export let usuarios = []

document.getElementById("submeter").addEventListener("click", function () {
  submeter()
})

document.getElementById("release").addEventListener("click", function () {
  release()
})
