// Aula : Demonstração: Conhecendo objetos globais pré-definidos

console.log('keys', Object.keys({ nome: 'Bruno' }));
console.log('values', Object.values({ nome: 'Bruno' }));
console.log('now', Date.now());

// Traz um numero randomico
console.log('random', Math.random());

// Global
console.log('global', global);