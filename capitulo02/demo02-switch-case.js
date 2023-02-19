// Aula : Demonstração: Conhecendo o Switch Case

const { log } = require('console');
const readline = require('readline');
const terminal = readline.createInterface({
  // definir o modo de entrada via terminal
  input: process.stdin,
  // tudo que for saida sairá no terminal
  output: process.stdout
})

const textoMenu = `
 Olá, seja bem vindo ao sistema de media
 Digite 1 para acessar o menu inicial
 Digite 2 para acessar o menu de Herois
 Digite 3 para acessar o menu de Guerreiras
 Digite 0 para Sair
`
console.log('------------------- Menu ------------------', textoMenu);


const questoes = {
  menuInicial: {
    texto: textoMenu,
    fn: menuInicial
  },
  opcao1: {
    texto: 'submenu! Pressione enter para selecionar mais opcoes...',
    fn: opcao1
  }
}

function opcao1(msg) {
  console.log('Não há mais opcoes')
  terminal.close();
}

function menuInicial(msg) {
  const opcao = Number(msg)
  if (isNaN(opcao)) {
    throw new Error('Não é um numero', msg)
  }
  switch (opcao) {
    case 0:
      console.log('Saindo...')
      terminal.close();
      break;
    case 1:
      console.log('menu inicial')
      terminal.question(
        questoes.opcao1.texto,
        questoes.opcao1.fn
      )
      break;
    case 2:
      console.log('menu de Herois')
      break;
    case 3:
      console.log('menu de Guerreiras')
      break;
    default:
      console.log('Opção Invalida...')
      terminal.close();
      break;
  }
}

terminal.question(
  questoes.menuInicial.texto,
  questoes.menuInicial.fn
)