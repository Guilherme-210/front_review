const vagas = []

function listarVagas() {

  if (vagas <= 0) {
    alert('Nenhuma vaga no momento')
    return 
  }

  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += ` (${vaga.candidatos.length} candidatos)\n`
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe um descrição para a vaga:")
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

  const confirmacao = confirm(
    `Deseja criar uma nova vaga com essas informações?
    \nNome: ${nome} 
    \nDescrição: ${descricao}
    \nData limite: ${dataLimite}`
  )

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada.")
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:")
  const vaga = vagas[indice]

  if (indice >= vagas.length || indice < 0) {
    alert("Índice inválido")
    return
  }

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) { `${textoFinal}\n - ${candidato}, `
  }, "")

  alert(
    `Vaga nº ${indice} 
    \nNome: ${vaga.nome}
    \nDescrição: ${vaga.descricao} 
    \nData limite: ${vaga.dataLimite} 
    \nQuantidade de candidatos: ${vaga.candidatos.length} 
    \nCandidatos inscritos: ${candidatosEmTexto}`
  )
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):")
  const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    `Deseja inscrever o candidato ${candidato} na vaga ${indice}?
    \nNome: ${vaga.nome} 
    \nDescrição: ${vaga.descricao} 
    \nData limite: ${vaga.dataLimite}`
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada")
  }
}


function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    `Tem certeza que deseja excluir a vaga ${indice}?
    \nNome: ${vaga.nome}
    \nDescrição: ${vaga.descricao} 
    \nData limite: ${vaga.dataLimite}`
    )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluída.")
  }
}

function exibirMenu() {
  const opcao = prompt(
    `Cadastro de Vagas de Emprego
      \nEscolha uma das opções
      1. Listar vagas disponíveis
      2. Criar uma nova vaga
      3. Visualizar uma vaga
      4. Inscrever um(a) candidato(a)
      5. Excluir uma vaga
      6. Sair`
  )

  return opcao
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }
  } while (opcao !== "6")
}
executar()