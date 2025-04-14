const localStorageKey = "to-do-list-key"

async function newTesk() {
  const taskInput = document.getElementById("taskInput")
  const taskText = taskInput.value.trim()

  try {
    if (!taskText) {
      taskInput.focus()
      alert("Campo vazio. Digite a sua tarefa.")
      throw new Error("Campo vazio")
    }

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    values.push({ name: taskText })
    localStorage.setItem(localStorageKey, JSON.stringify(values))

    console.log(values)
    taskInput.value = ""
    console.log("Tarefa adicionada com sucesso!")
    showValues() // Atualiza a lista automaticamente após adicionar
  } catch (error) {
    console.error(error)
  }
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
  let list = document.getElementById("to-do-list")

  list.innerHTML = ""

  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>
      <p class="tag_list">${values[i]["name"]}</p>
      <div class="buttons">
        <button class="clear_button" onclick="clearTesk(${i})"><ion-icon name="trash-outline"></ion-icon></button>
        <button class="complet_button" onclick="completTesk(${i})">completa <ion-icon name="thumbs-up-outline"></ion-icon></button>
      </div>
    </li>`
  }

  console.log("Tarefas exibidas com sucesso!")
}

// Exemplos de funções que poderiam existir pra esses botões
function clearTesk(index) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
  values.splice(index, 1)
  localStorage.setItem(localStorageKey, JSON.stringify(values))
  showValues()
}

function completTesk(index) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

  let frase = values[index].name

  if (frase.endsWith(" ✅")) {
    alert("Tarefa ja concluida")
    return
  }

  values[index].name += " ✅"
  localStorage.setItem(localStorageKey, JSON.stringify(values))
  showValues()
}

showValues()

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault() // Esse sim é o preventDefault correto

    newTesk()
    showValues()
  }
})
