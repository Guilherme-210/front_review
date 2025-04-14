export function formatCpfCnpj() {
  document.getElementById("CPF_CNPJ").addEventListener("input", function (ev) {
    let value = ev.target.value.replace(/\D/g, "") // Remove tudo que não for número

    if (value.length <= 11) {
      // CPF: ###.###.###-##
      value = value.replace(/^(\d{3})(\d)/, "$1.$2")
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4")
    } else {
      // CNPJ: ##.###.###/####-##
      value = value.replace(/^(\d{2})(\d)/, "$1.$2")
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
      value = value.replace(
        /^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/,
        "$1.$2.$3/$4-$5"
      )
    }

    ev.target.value = value
  })
}

export function validateCpfCnpj() {
  const CPF_CNPJ = document.getElementById("CPF_CNPJ")
  const value = document.getElementById("CPF_CNPJ").value.trim()

  try {
    if (value === "") {
      CPF_CNPJ.classList.add("error")
      alert("Campo de CPF/CNPJ não pode estar em branco.")
      Promise.reject("Campo de CPF/CNPJ não pode estar em branco.")
      return
    }

    if (value.length < 14) {
      CPF_CNPJ.classList.add("error")
      alert("Número mínimo de caracteres não atingido (11).")
      Promise.reject("Número mínimo de caracteres não atingido (11).")
      return
    } else if (value.length > 14 && value.length < 18) {
      CPF_CNPJ.classList.add("error")
      alert("Confira se não tem nenhum caracter faltando CPF(11) CNPJ(14).")
      Promise.reject(
        "Confira se não tem nenhum caracter faltando CPF(11) CNPJ(14)."
      )
      return
    }

    return Promise.resolve
  } catch (error) {
    console.error("⚠️ Erro na validação do CPF/CNPJ:", error)
    return false
  }
}
