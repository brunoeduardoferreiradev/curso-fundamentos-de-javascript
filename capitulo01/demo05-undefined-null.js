// Aula : O que são os tipos undefined e null?


/*
  Podemos assinar uma variável com undefined ou null porem por boa prática devemos apenas 
  assinar como null, pra falar que o valor é vazio, pra falar que a variavel não possui 
  nenhum valor naquele momento e pode ter um valor no futuro
*/

// Undefined = nunca foi definido, não existe naquele contexto

// Variável Não inicializada
let variavelSemInicializacao;

console.log(variavelSemInicializacao,
  typeof (variavelSemInicializacao)
);

// Variável Inicializada
variavelSemInicializacao = "Hello World!!";

console.log(variavelSemInicializacao,
  typeof (variavelSemInicializacao)
);

// Variável Inicializada com valor nulo
variavelSemInicializacao = null;

console.log(variavelSemInicializacao,
  typeof (variavelSemInicializacao)
);