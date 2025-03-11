const input = document.getElementById("input_3")

export function clickNumber(charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}
