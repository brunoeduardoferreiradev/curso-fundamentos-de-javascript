// Aula : Demonstração: Trabalhando com Arrays

const minhaLista = []
const minhaListaDeTarefas = [
  "mandar email",
  "colocar comida para o dog",
  "limpar o quarto"
]

console.log(minhaListaDeTarefas[0]);
console.log(minhaListaDeTarefas[1]);
console.log(minhaListaDeTarefas[4]);

// Verifica a quantidade de itens no array
console.log(minhaListaDeTarefas.length);

// Adiciona um item no final da Lista
minhaListaDeTarefas.push('formatar computador');
console.log(minhaListaDeTarefas);

// Remover ultimo item da lista e guardar o valor 
const ultimo = minhaListaDeTarefas.pop();
console.log(ultimo, minhaListaDeTarefas);

// Remover o primeiro item da lista e guardar o valor 
const primeiro = minhaListaDeTarefas.shift();
console.log(primeiro, minhaListaDeTarefas);


// Remover um item específico a partir de um índice
console.log(minhaListaDeTarefas[2]);
// primeiro parametro é a posição de início
// segundo parametro a quantidade de itens para remover
// minhaListaDeTarefas.splice(2, 1)
console.log(minhaListaDeTarefas)

const itens = [
  1, 'computador', 0.22
]

// verificar o tipo do array
console.log(typeof (itens));

// Verificar se é array da forma correta 
console.log(Array.isArray(itens));

// ordenar um array e funciona tb com letras 
const numeros = [3, 2, 1, 0]
console.log(numeros.sort());

const letras = ['a', 'c', 'b', 'z']
console.log(letras.sort());

// Juntar dois arrays 
const novo = itens.concat([1, 2, 3])
console.log(novo)

// juntar arrays em uma só string
console.log(itens.join(','))

// verificar indice do item
const index = itens.indexOf('computador')
console.log(index)
console.log([index])
