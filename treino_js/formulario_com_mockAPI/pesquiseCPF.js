const inputfirstName = document.getElementById("firstName"),
  inputLastName = document.getElementById("lastName"),
  inputCPF = document.getElementById("CPF_CNPJ"),
  inputCountryCode = document.getElementById("countryCode"),
  inputCellphone = document.getElementById("cellphone"),
  inputEmail = document.getElementById("email"),
  inputBirthDate = document.getElementById("birthDate"),
  inputGender = document.getElementById("gender"),
  inputCountry = document.getElementById("country"),
  inputState = document.getElementById("state"),
  inputCity = document.getElementById("city"),
  inputCEP = document.getElementById("CEP"),
  inputDistrict = document.getElementById("district"),
  inputAddress = document.getElementById("address"),
  inputAddressNumber = document.getElementById("addressNumber"),
  inputComplement = document.getElementById("Complement"),
  inputSenha = document.getElementById("senha"),
  inputConfirmSenha = document.getElementById("confirmSenha")

async function pesquiseCPF() {
  const cpf = inputCPF.value.trim()

  try {
    const response = await fetch(
      "https://67e05cc17635238f9aad538a.mockapi.io/api/v1/users"
    )
    if (!response.ok) return Promise.reject("Erro ao buscar usuários!")

    const users = await response.json()
    const user = users.find((user) => user.CPF_CNPJ === cpf)

    if (!user) return Promise.reject("CPF não encontrado!")

    inputfirstName.value = user.FirstName
    inputLastName.value = user.LastName
    inputCPF.value = user.CPF_CNPJ
    inputCountryCode.value = user.CountryCode
    inputCellphone.value = user.Cellphone
    inputEmail.value = user.Email
    inputBirthDate.value = user.BirthDate
    inputGender.value = user.Gender
    inputCountry.value = user.Country
    inputState.value = user.State
    inputCity.value = user.City
    inputCEP.value = user.CEP
    inputDistrict.value = user.District
    inputAddress.value = user.Address
    inputAddressNumber.value = user.AddressNumber
    inputComplement.value = user.Comment

    // document.getElementById("toggleSenha").style.display = "none"
  } catch (error) {
    console.error("⚠️ Erro na validação de CPF/CNPJ:", error.message)
  }
}
