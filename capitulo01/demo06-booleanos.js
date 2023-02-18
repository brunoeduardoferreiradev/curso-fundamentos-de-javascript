// Aula : Demonstração: Tipos Booleanos

const podeDirigir = true;
if (podeDirigir) {
  console.log('Ela pode dirigir!');
}

const saldoEmConta = 0
if (!saldoEmConta) {
  console.log('não tem saldo!')
}

const boolComString = "ae hackerzão!!"
console.log(!!boolComString)

// Força o valor a true ou false
// de acordo com a tabela
console.log('boolComString', !boolComString);

// Negação
console.log('Negação', !boolComString)

// Negação + forçar a bool
console.log(
  "Negação + forçar a bool",
  !(!!boolComString)

)