
const express = require("express")
const { uuid, isUuid } = require("uuidv4")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const users = []

function logRequests(request, response, next) {
  const { method, url } = request

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.log(logLabel)

  console.time("logLabel")

  next()

  console.timeEnd("logLabel")
}

function validateProjectID(request, response, next) {
  const { id } = request.params
  console.log("1")

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid project ID." })
  }

  return next()
}

app.use(logRequests)

app.get("/form", (request, response) => {
  const { firstName } = request.query

  const results = firstName
    ? users.filter((user) => user.firstName.includes(firstName))
    : users

  return response.json(results)
})

app.post("/form", (request, response) => {
  const body = request.body
  const {
    firstName,
    lastName,
    CPF_CNPJ,
    countryCode,
    cellphone,
    email,
    birthDate,
    gender,
    country,
    state,
    city,
    CEP,
    district,
    address,
    addressNumber,
    Complement,
    senha,
    confirmSenha,
  } = request.body

  console.log(body)

  const user = {
    id: uuid(),
    firstName,
    lastName,
    CPF_CNPJ,
    countryCode,
    cellphone,
    email,
    birthDate,
    gender,
    country,
    state,
    city,
    CEP,
    district,
    address,
    addressNumber,
    Complement,
    senha,
    confirmSenha,
  }
  users.push(user)

  return response.json(user)
})

app.put("/form/:id", validateProjectID, (request, response) => {
  const { id } = request.params
  const {
    firstName,
    lastName,
    CPF_CNPJ,
    countryCode,
    cellphone,
    email,
    birthDate,
    gender,
    country,
    state,
    city,
    CEP,
    district,
    address,
    addressNumber,
    Complement,
    senha,
    confirmSenha,
  } = request.body

  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex < 0) {
    return response.status(400).json({ error: "project not found." })
  }

  const user = {
    id,
    firstName,
    lastName,
    CPF_CNPJ,
    countryCode,
    cellphone,
    email,
    birthDate,
    gender,
    country,
    state,
    city,
    CEP,
    district,
    address,
    addressNumber,
    Complement,
    senha,
    confirmSenha,
  }

  users[userIndex] = user

  return response.json(user)
})

app.delete("/form/:id", validateProjectID, (request, response) => {
  const { id } = request.params

  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex < 0) {
    return response.status(400).json({ error: "project not found." })
  }

  users.splice(userIndex, 1)

  return response.status(204).send()
})

app.listen(3334, () => {
  console.log("back-end form started! 🚀")
})
