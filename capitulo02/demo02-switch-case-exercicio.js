// Exercicio 1
switch (true) {
  case 1 < 2:
    console.log('1 < 2')
  case 1 === 1:
    console.log('1 === 1')
  default:
    console.log('pode ter mais de uma opção')
}

// Exercício 2
switch (0) {
  case 0:
    console.log('Hello World');
  case 1:
    console.log('Segunda Opção');
}

// Exercicio 3
switch (true) {
  case 1 > 2:
    console.log('1 > 2')
    break;
  case 1 === 1:
    console.log('1 === 1')
    break;
  default:
    console.log('nenhum deles!');
    break;
}

// Exercicio 4
switch (0) {
  default:
    console.log('Funciona sem case!');
}