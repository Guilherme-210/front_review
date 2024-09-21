const imoveis = [];
let option = '';

do {
  option = prompt(`Imóveis cadastrados: ${imoveis.length} \nEscolha a opção referente ao que deseja fazer:\n 1. Adicionar um imóvel\n 2. Mostrar todos os imóveis\n 3. Excluir um imóvel\n 4. Sair do sistema`);

  switch (option) {
    case '1': // Adicionar um imovel
      const imovel = {};

      imovel.proprietario = prompt('Qual é o nome do proprietário:');
      imovel.quartos = parseInt(prompt('Quantos quartos tem:'));
      imovel.banheiros = parseInt(prompt('Quantos banheiros tem:'));
      imovel.garagem = prompt('Tem garagem na casa: (Sim/Não)');
      imovel.valor = parseFloat(prompt('Qual é o valor do imóvel:'));


      const confirma = confirm(`Deseja salvar este imóvel:\n Proprietário: ${imovel.proprietario}\n Quartos: ${imovel.quartos}\n Banheiros: ${imovel.banheiros}\n Garagem: ${imovel.garagem}\n Valor: ${imovel.valor}`);

      if (confirma) {
      imoveis.push(imovel)
      alert('Imóvel salvo com sucesso.')
      } else {
        alert('Voltando ao menu.')
      }
      break

    case '2': // Mostrar imoveis
      for (let i = 0; i < imoveis.length; i++) {
        alert(`Imóvel ${i + 1}\n Proprietário: ${imoveis[i].proprietario}\n Quartos: ${imoveis[i].quartos}\n Banheiros: ${imoveis[i].banheiros}\n Garagem: ${imoveis[i].garagem}\n Valor: ${imoveis[i].valor}`);
      }
      break

    case '3': // Excluir imovel
    let indice = parseInt(prompt(`Digite o número do imóvel que deseja excluir (1 a ${imoveis.length}):`));
    indice -= 1;

    if (indice >= 0 && indice < imoveis.length) {
      const confirmaExclusao = confirm(`Imóvel a ser excluído:\n Proprietário: ${imoveis[indice].proprietario}\n Quartos: ${imoveis[indice].quartos}\n Banheiros: ${imoveis[indice].banheiros}\n Garagem: ${imoveis[indice].garagem}\n Valor: ${imoveis[indice].valor}`);

      if (confirmaExclusao) {
        imoveis.splice(indice, 1);
        alert('Imóvel excluído com sucesso!');
      } else {
        alert('Exclusão cancelada.');
      }
    } else {
      alert('Índice inválido!');
    }
    break;

    case '4':
      alert('Encerrando...')
      option = 'c'
      break
    default:
      alert('Opição invalida!')  
  }
} while (option !== 'c')