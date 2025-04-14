export function formatDDI() {
  document
    .getElementById("countryCode")
    .addEventListener("input", function (ev) {
      let value = ev.target.value.replace(/\D/g, "") // Remove tudo que não for número

      country.classList.remove("error")
      ev.target.value = value ? `+${value}` : "" // Adiciona "+" se houver número
      return Promise.resolve
    })
}

export function formatCellphone() {
  document.getElementById("cellphone").addEventListener("input", function (ev) {
    let value = ev.target.value.replace(/\D/g, "")

    if (value.length > 11) {
      value = value.slice(0, 11)
    }

    let formattedValue = ""
    if (value.length > 0) {
      formattedValue += "(" + value.substring(0, 2)
      if (value.length > 2) {
        formattedValue += ") "
        formattedValue += value.substring(2, 7)
        if (value.length > 7) {
          formattedValue += "-" + value.substring(7, 11)
        }
      } else if (value.length === 2) {
        formattedValue += ")"
      }
    }

    ev.target.value = formattedValue
  })
}

export function validateCellphone() {
  let cellphone = document.getElementById("cellphone")
  const countryCode = document.getElementById("countryCode")
  try {
    if (countryCode.value.length <= 2) {
      alert("O campo de DDI não pode ficar em branco.")
      countryCode.classList.add("error")
      Promise.reject("O campo de DDI não pode ficar em branco.")
      return
    }
    
    if (cellphone.value.length <= 14) {
      cellphone.classList.add("error")
      alert("Número de telefone incompleto!")
      Promise.reject("Número de telefone incompleto!")
      return
    }
    return Promise.resolve("Número de telefone validado")
  } catch (error) {
    console.erro(`⚠️ Erro na validação do telefone: ${error}`)
  }
}
