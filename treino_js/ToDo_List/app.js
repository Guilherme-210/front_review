const express = require("express")
const { uuid, isUuid } = require("uuidv4")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const tasksList = []

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

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid project ID." })
  }

  return next()
}

app.use(logRequests)

app.get("/ToDo-List", (request, response) => {
  const { name } = request.query

  const results = name
    ? tasksList.filter((task) => task.name.includes(name))
    : tasksList

  return response.json(results)
})

app.post("/ToDo-List", (request, response) => {
  const body = request.body
  const { name } = request.body

  console.log(body)

  const task = {
    id: uuid(),
    name,
  }
  tasksList.push(task)

  return response.json(task)
})

app.put("/ToDo-List/:id", validateProjectID, (request, response) => {
  const { id } = request.params
  const { name } = request.body

  const taskIndex = tasksList.findIndex((task) => task.id === id)

  if (taskIndex < 0) {
    return response.status(400).json({ error: "Tesk not found." })
  }

  const task = {
    id,
    name
  }

  tasksList[taskIndex] = task

  return response.json(task)
})

app.delete("/ToDo-List/:id", validateProjectID, (request, response) => {
  const { id } = request.params

  const taskIndex = tasksList.findIndex((task) => task.id === id)

  if (taskIndex < 0) {
    return response.status(400).json({ error: "Tesk not found." })
  }

  tasksList.splice(taskIndex, 1)

  return response.status(204).send()
})

app.listen(3335, () => {
  console.log("back-end To-Do List started! 🚀")
})
