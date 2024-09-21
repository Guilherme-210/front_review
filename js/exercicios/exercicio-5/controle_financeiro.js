let saldo = parseFloat(prompt('Informe o valor inicial da conta:'))
let option 

do {
  option = prompt(`Saldo atual na conta R$:${saldo}\n
    O que deseja fazer a seguir\n
    1. Adicionar dinheiro\n
    2. Remover dinheiro\n
    3. Sair`
  )

  switch (option) {
    case '1':
      saldo += parseFloat(prompt('Informe o valor a ser adicionado:'))
      break
    case '2':
      saldo -= parseFloat(prompt('Informe o valor a ser retirado:'))
      break
    case '3':
      alert('Saindo...')
      break
    default:
      alert('Opição invalida!')
  }
} while (option !== '3')