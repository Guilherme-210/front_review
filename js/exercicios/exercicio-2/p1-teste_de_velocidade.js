let veiculo1, veiculo2, velocidade1, velocidade2, dif_velocidade

veiculo1 = prompt('Insira o nome do primeiro veiculo: ')
velocidade1 = prompt('Insira a velocidade do primeiro veiculo: ')

veiculo2 = prompt('insira o nome do segundo veiculo: ')
velocidade2 = prompt('Insira a velocidade do segundo veiculo: ')

if (velocidade1 > velocidade2){
  dif_velocidade = velocidade1 - velocidade2
  alert(`O ${veiculo1} e mais rapido do que o ${veiculo2} por uma diferança de ${dif_velocidade} km/h.`)
} else if (velocidade1 < velocidade2){
  dif_velocidade = velocidade2 - velocidade1
  alert(`O ${veiculo2} e mais rapido do que o ${veiculo1} por uma diferança de ${dif_velocidade} km/h.`)
} else {
  alert("Os dois veículos têm a mesma velocidade!");
}
