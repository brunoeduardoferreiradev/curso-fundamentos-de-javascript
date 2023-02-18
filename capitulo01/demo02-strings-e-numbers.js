// Aula : Demonstração: Trabalhando com Strings e Numbers
let salarioDoAmigo = 1000;
let meuSalario = "2999.14";
let meuSalarioCorrigido = Number(meuSalario);

console.log(salarioDoAmigo + meuSalarioCorrigido);

console.log(
  typeof (salarioDoAmigo),
  salarioDoAmigo
);

// Verifica o Tipo da variável
console.log(
  typeof (meuSalario),
  meuSalario
);

// Verifica se é um número
console.log(
  isNaN(meuSalario)
);

let minhaString = "Olá mundo !";
let minhaOutraString = "Olá mundo2"
let minhaStringComVariáveis = `${minhaString} - ${minhaOutraString}. AE!`

console.log(minhaStringComVariáveis);