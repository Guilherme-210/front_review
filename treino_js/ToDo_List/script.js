const localStorageKey = "to-do-list-key"

async function newTesk() {
  const taskInput = document.getElementById("taskInput")
  const taskText = taskInput.value.trim()

  const list = document.getElementById("to-do-list")
  list.innerHTML = ""

  if (!taskText) {
    alert("Campo vazio. Digite a sua tarefa.")
    return
  }

  // const teskItem = { name: taskText }

  try {
    await fetch("http://localhost:3335/ToDo-List", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: taskText }),
    })

    taskInput.value = ""
    showValues()
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error)
  }
}

async function showValues() {
  const list = document.getElementById("to-do-list")
  list.innerHTML = ""

  try {
    const response = await fetch("http://localhost:3335/ToDo-List")
    const values = await response.json()

    values.forEach((task) => {
      list.innerHTML += `<li>
        <p class="tag_list">${task.name}</p>
        <div class="buttons">
          <button class="clear_button" onclick="clearTesk('${task.id}')"><ion-icon name="trash-outline"></ion-icon></button>
          <button class="complet_button" onclick="completTesk('${task.id}', '${task.name}')">completa <ion-icon name="thumbs-up-outline"></ion-icon></button>
        </div>
      </li>`
    })
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error)
  }
}

async function clearTesk(id) {
  const list = document.getElementById("to-do-list")
  list.innerHTML = ""

  try {
    await fetch(`http://localhost:3335/ToDo-List/${id}`, {
      method: "DELETE",
    })

    showValues()
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error)
  }
}

async function completTesk(id, currentName) {
  const list = document.getElementById("to-do-list")
  list.innerHTML = ""

  if (currentName.endsWith(" ✅")) {
    alert("Tarefa já concluída.")
    return
  }

  try {
    await fetch(`http://localhost:3335/ToDo-List/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: currentName + " ✅" }),
    })

    showValues()
  } catch (error) {
    console.error("Erro ao concluir tarefa:", error)
  }
}

showValues()

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault()

    newTesk()
  }
})
