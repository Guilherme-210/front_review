// O parâmetro é a entrada da função
// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função

function dobro(x) {
  console.log("O dobro de " + x + " é " + x * 2)
}
dobro(5)
dobro(7)

// Parâmetro não informado tem valor undefined
dobro()

// Valor padrão para os parâmetros
function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()

// Vários parâmetros
function soma(a, b) {
  console.log(a + b)
}
soma(1, 1)
soma(34, 5)

// A ordem dos parâmetros é importante
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234")

// Funções com muitos parâmetros
function parametrosDoJeitoErrado(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {
  // ...
}

function parametrosDoJeitoCerto(usuario) {
  // ...
}

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: "",
}
parametrosDoJeitoCerto(dadosDoUsuario)
