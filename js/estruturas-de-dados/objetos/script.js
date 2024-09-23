let pessoa = {
  nome: "Guilherme",
  idade: 22,
  endereço: {
    rua: "Av. Brasil",
    cidade: "São Paulo",
  },
  apresentar: function () {
    return "Meu nome é " + this.nome + " e tenho " + this.idade + " anos."
  },
}

// Acessando propriedades
console.log(pessoa.nome) // Saída: João
console.log(pessoa["idade"]) // Saída: 25
console.log(pessoa.endereço.rua) // Saída: Av. Brasil

// Chamando o método
console.log(pessoa.apresentar()) // Saída: Meu nome é João e tenho 25 anos.
