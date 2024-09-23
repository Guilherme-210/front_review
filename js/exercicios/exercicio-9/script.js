let val = parseFloat(prompt('Insira um valor para ser multiplicado:'))
let valores = [];
let resultado = "";
let separador = " - "; // Defina o separador desejado

for (let i = 0; i <= '20'; i++) {
  resultado = val * i
  valores += `${val} * ${i} = ${resultado}\n`
  // if (i < '20') {
  //   valores += separador
  // }
}

alert(valores);
