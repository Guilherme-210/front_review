// Exemplo usado na aula

const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
}

const name = person.name
const { job, parents } = person
console.log(name, job, parents)

const [father, mother] = parents
console.log(father, mother)

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents,
  }
}

const luke = createUser(person)
console.log(luke)


// Exemplo de treino: Extraindo dados de um objeto de carro
const car = {
  brand: "Tesla",
  model: "Model S",
  specs: {
    horsepower: 1020,
    range: "396 miles"
  }
}

const { brand, model, specs: { horsepower, range } } = car
console.log(brand, model, horsepower, range)