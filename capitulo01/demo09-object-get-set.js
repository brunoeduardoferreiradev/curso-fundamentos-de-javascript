// Aula : Demonstração: Conhecendo os métodos assessores get/set de Objetos

/*
 * Os métodos acessores servem para interceptar a variável quando ela é chamada e aplicar 
 * algum tratamento ou valiçao a ela
 */
const pessoa = {
  // Variáveis com underline no ínicio éla é uma variável privada
  _nome: '',
  _idade: 20,
  get nome() {
    return this._nome
  },

  set nome(valor) {
    this._nome = valor.toUpperCase()
  },

  // Propriedade Calculada
  get podeDirigir() {
    return this._idade > 18
  },
  set idade(valor) {
    this._idade = valor
  }
}

pessoa.nome = "maria do céu"
console.log(pessoa.nome);

pessoa.idade = 16
console.log(pessoa.podeDirigir);

// como nao foi definida a função Get o resultado sera undefined
console.log(pessoa.idade);
