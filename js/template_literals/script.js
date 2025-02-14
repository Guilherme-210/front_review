// Código da Aula
const name = 'Isaac'

console.log(`Olá, ${name}!
Estamos em ${Date()}
  2 + 2 = ${2 + 2}
`)

// Executando um Exemplo de teste
function mostrarMensagem() {
  const nome = document.getElementById("nomeInput").value
  const idade = document.getElementById("idadeInput").value
  const mensagem = `Meu nome é ${nome} e eu tenho ${idade} anos.`
  document.getElementById("resultado").textContent = mensagem
}
