// Entrada de variaveis
let mm, cm, dm, dam, hm, km;
const valMetros = prompt('Escreva um valor em metros para ser convertido:');
const unidade = prompt('Escreva a unidade de medida para converção' +
  '\nMilímetro(mm), centímetro(cm), decímetro(dm)' +
  '\nDecâmetro(dam), hectômetro(hm) ou quilômetro (km)').toLowerCase();

// Verificação de converção
switch (unidade){
  case 'mm':
    mm = valMetros * 1000;
    alert(`Ao se converter ${valMetros} metros. \nÉ obitido ${mm} Milímetro.`);
    break
  case 'cm':
    cm = valMetros * 100;
    alert(`Ao se converter ${valMetros} metros. \nÉ obitido ${cm} centímetro.`);
    break
  case 'dm':
    dm = valMetros * 10;
    alert(`Ao se converter ${valMetros} metros. \nÉ obitido ${dm} decímetro.`);
    break
  case 'dam':
    dam = valMetros * 0.1;
    alert(`Ao se converter ${valMetros} metros. \nÉ obitido ${dam} decâmetro.`);
    break
  case 'hm':
    hm = valMetros * 0.01;
    alert(`Ao se converter ${valMetros} metros. \nÉ obitido ${hm} hectômetro.`);
    break
  case 'km':
    km = valMetros * 0.001;
    alert(`Ao se converter ${valMetros} metros. \nÉ obitido ${km} quilômetro.`);
    break
  default:
    alert('opição invalida.');
}