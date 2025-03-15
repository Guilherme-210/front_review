// Objeto Literal
const pessoa = {
  nome: "Guilherme",
  idade: 25,
  falar: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

pessoa.falar(); // Saída: Olá, meu nome é Guilherme

// Função Construtora
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Oi, sou ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("João", 28);
pessoa1.falar(); // Saída: Oi, sou João e tenho 28 anos.

// Encapsulamento
class ContaBancaria {
  #saldo; // Atributo privado

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor;
    console.log(`Depósito de R$${valor} realizado!`);
  }

  getSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo()); // Saída: 1500
// console.log(conta.#saldo);
// console.log(conta.#saldo); ❌ ERRO! O atributo é privado.

// Abstração
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }

  ligar() {
    this.#checarCombustivel();
    console.log(`${this.modelo} está ligado!`);
  }

  #checarCombustivel() {
    console.log("Verificando combustível...");
  }
}

const carro = new Carro("Fusca");
carro.ligar();
// Saída: Verificando combustível...
//         Fusca está ligado!
// carro.#checarCombustivel();
// carro.#checarCombustivel(); ❌ ERRO! Método privado.

// Herança
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log("Som genérico de animal...");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Au au! 🐶");
  }
}

const rex = new Cachorro("Rex");
rex.fazerSom(); // Saída: Au au! 🐶

// Polimorfismo
class Forma {
  calcularArea() {
    return 0;
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }
}

const formas = [new Quadrado(4), new Circulo(3)];

formas.forEach(forma => {
  console.log(`Área: ${forma.calcularArea()}`);
});
// Saída: Área: 16
//         Área: 28.274333882308138
