document.getElementById("submit").addEventListener("click", async () => {
  const formData = {
    id: '',
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    CPF_CNPJ: document.getElementById("CPF_CNPJ").value,
    countryCode: document.getElementById("countryCode").value,
    cellphone: document.getElementById("cellphone").value,
    email: document.getElementById("email").value,
    birthDate: document.getElementById("birthDate").value,
    gender: document.getElementById("gender").value,
    country: document.getElementById("country").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    CEP: document.getElementById("CEP").value,
    district: document.getElementById("district").value,
    address: document.getElementById("address").value,
    addressNumber: document.getElementById("addressNumber").value,
    Complement: document.getElementById("Complement").value,
    senha: document.getElementById("senha").value,
    confirmSenha: document.getElementById("confirmSenha").value,
  }

  try {  
    const response = await fetch("http://localhost/:3334/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Erro ao enviar os dados.")
    }

    let loading

    const theme = document.body.getAttribute("data-theme")

    if (theme === "light") {
      loading = document.getElementById("loading_blue")
      loading.style.display = "block"
    } else {
      loading = document.getElementById("loading_green")
      loading.style.display = "block"
    }

    setTimeout(() => {
      loading.style.display = "none"

      inputfirstName.value = ""
      inputLastName.value = ""
      inputCPF.value = ""
      inputCountryCode.value = ""
      inputCellphone.value = ""
      inputEmail.value = ""
      inputBirthDate.value = ""
      inputGender.value = ""
      inputCountry.value = ""
      inputState.value = ""
      inputCity.value = ""
      inputCEP.value = ""
      inputDistrict.value = ""
      inputAddress.value = ""
      inputSenha.value = ""
      inputConfirmSenha.value = ""
      inputAddressNumber.value = ""
      inputComplement.value = ""
      alert("Cadastro realizado com sucesso!")
    }, 1000 * 2)

    const result = await response.json()
    console.log("Usuário cadastrado:", result)
  } catch (error) {
    console.error("Erro no envio do formulário:", error)
    alert("Erro ao cadastrar. Verifique os dados e tente novamente.")
  }
})
