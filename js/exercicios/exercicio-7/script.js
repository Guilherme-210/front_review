let option = ''

do {
  option = prompt(
    `Escolha uma das opições a seguir\n
    1. Primeira opição
    2. Segunda opição
    3. Terceira opição
    4. Quarta opição
    5. Parar`)

  switch (option) {
    case '1':
      alert('Voçê escolheu a primeira opição');
      break
    case '2':
      alert('Voçê escolheu a Segunda opição');
      break
    case '3':
      alert('Voçê escolheu a Terceira opição');
      break
    case '4':
      alert('Voçê escolheu a Quarta opição');
      break
    case '5':
      alert('Voçê escolheu parar');
      alert('Encerrando...')
      break
    default:
      alert('Opição invalida')
  }
} while (option !== '5')
