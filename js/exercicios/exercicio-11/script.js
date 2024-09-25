let pacientes = ['Matheus', 'Marcos', 'ana', 'Ana'];
let fazer, tamanho;

alert(`Pacientes na fila de espera: ${pacientes.length}`)

fazer = prompt(
  'Escolha a opição referente ao que deseja fazer:\n' +
  '1. Adicionar um novo paciente\n 2. Remover um paciente\n 3. consultar um paciente\n 4. Listar pacientes\n 5. sair do sistema')

while (fazer === '1' || fazer === '2' || fazer === '3' || fazer === '4' || fazer === '5') {
  if (fazer === '1'){ 
    tamanho = pacientes.push(prompt('Escreva o nome do novo paciente:')) //Adicionar um novo paciente
    alert(`Paciente adicionado: ${pacientes} \nSua posição na fila e ${tamanho}`)

  } else if (fazer === '2') {  //Remover um paciente
    let pacienter = prompt('Escreva o nome do paciente a ser removido:')
    posicao = pacientes.indexOf(pacienter)
    pacientes.splice(posicao, 1)
    alert(`Paciente ${pacienter} removido com sucesso.`)
    alert(pacientes)

  } else if (fazer === '3') {
    let posicao = pacientes.indexOf(prompt('Qual e o nome do paciente?')) // Consultar paciente
    alert(`A sua posição e ${posicao + 1}.`)

  } else if (fazer === '4') {
    for (let indice = 0; indice < pacientes.length; indice++){
      let elemento = pacientes[indice]
      alert(`${elemento} se encontra na posição ${indice + 1}.`)
    }

  } else if (fazer === '5') { 
    alert('Saindo do sistema...') //sair do sistema
    break
  } else {
    alert('Opição invalida.')
  }
  fazer = prompt(
    'Escolha a opição referente ao que deseja fazer:\n' +
    '1. Adicionar um novo paciente\n 2. Remover um paciente\n 3. consultar um paciente\n 4. Listar pacientes\n 5. sair do sistema')
}