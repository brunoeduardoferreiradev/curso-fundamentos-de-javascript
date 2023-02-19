// Aula : Formas de declarar uma função: Expressão, declarativa e arrow function
function minhaFuncao1(params1) {
  return 'aeeee'
}

// Função Anônima
const minhaFuncao2 = function (params) {
  return `àeee ${params}`
}

// Arrow Function
const minhaFuncao3 = (params) => {
  return `àeee ${params}`
}

// Arrow function pode ser declarada assim quando há somente um parametro
const minhaFuncao4 = params => `àeee ${params}`;


const obj1 = {
  minhaFuncao: params => `àeee ${params}`
}
// para chamar a função de um objeto
obj1.minhaFuncao('teste');

const obj2 = {
  minhaFuncao(params) {
    return `àeee ${params}`
  }
}
obj2.minhaFuncao('teste')