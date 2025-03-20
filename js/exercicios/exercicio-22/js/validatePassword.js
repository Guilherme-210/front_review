import { usuario } from "../script.js"


function validatePassword() {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/
  return regex.test(usuario.Senha)
}

export default validatePassword