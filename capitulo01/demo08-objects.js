// Aula : Demonstração: Trabalhando com Objects
const heroi = {
  nome: 'Flash',
  idade: 100,
  sexo: 'Masculino'
}

// Listando os atributos do objeto heroi
console.log('Nome  : ', heroi.nome);
console.log('Sexo  : ', heroi.sexo);
console.log('naoExiste : ', heroi.naoExiste);

// adicionando atributo ao objeto heroi
heroi.id = 1
console.log(heroi);

// pegar so as chaves 
console.log(Object.keys(heroi));

// pegar somente os valores 
console.log(Object.values(heroi));

// juntar dois objetos 
const pessoa = {
  tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, pessoa);
console.log(novoObj);

// Remover uma chave de um objeto 
delete novoObj.nome;
console.log(novoObj);

