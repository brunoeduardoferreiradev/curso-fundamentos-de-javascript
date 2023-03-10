// Aula : Demonstração: Trabalhando com Datas

// meses começam do zero entao o mes de janeiro é o numero 0
const dataAniversario = new Date(2020, 0, 20);
console.log(dataAniversario);

// Pegar a primeira data do JavaScript
const primeiraDataDoJS = new Date(0);
console.log(primeiraDataDoJS);
console.log(primeiraDataDoJS.getTime());

const hoje = new Date()
console.log(hoje.toString());
console.log(hoje.toLocaleString());

// Formato global Recomendado
console.log(hoje.toISOString());

const dia = hoje.getDate()
hoje.setDate(dia + 5) // +5 dias depois de hoje
hoje.setHours(10, 30, 0)
console.log(hoje);

console.log(`
  Dia : ${hoje.getDate()}
  Mês : ${hoje.getMonth()}
  Ano : ${hoje.getFullYear()}
  Hora : ${hoje.getHours()}
  Minute : ${hoje.getMinutes()}
  Seconds : ${hoje.getSeconds()}
`)

// Comparar duas datas usando operadores 
console.log(new Date(2020, 1, 20) > new Date(2000, 1, 1));
