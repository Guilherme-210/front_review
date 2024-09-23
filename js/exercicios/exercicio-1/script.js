let pname = window.prompt('Insira o seu primeiro nome:')
let sname = window.prompt('Insira o seu sobrenome:')
let cstudy = window.prompt('Insira o seu campo de estudo:')
let birth = window.prompt('Insira o seu nascimento:')

idade = 2024 - birth

console.log('O ' + pname, sname + ', esta estudando ' + cstudy + ', e ele tem ' + idade + ' anos.');

/*coreção da aula */
alert(
  'Recruta cadastrado com sucasso!\n' +
  '\nNome completo: ' + pname + ' ' + sname +
  '\nCampo de estudos: ' + cstudy +
  '\nIdade: ' + idade
)