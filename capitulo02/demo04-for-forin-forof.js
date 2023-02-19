// Aula : Demonstração: Trabalhando com For ForIn e ForOf
const textoPar = "Par"
const textoImpar = "Impar"
for (let index = 0; index <= 10; index++) {
  const decisao = index % 2 === 0 ? textoPar : textoImpar
  console.log(`O número ${index} é ${decisao}`);
}

const listaDePessoas = [
  {
    id: parseInt(Math.random() * 10),
    nome: 'Zezinho',
    superPoder: 'Veloz'
  },
  {
    id: Math.random(),
    nome: 'Mariazinha',
    superPoder: 'Super Força'
  }
]

for (let index = 0; index < listaDePessoas.length; index++) {
  const item = listaDePessoas[index]
  console.log(`
   id: ${item.id}
   nome: ${item.nome}
`)
}

// Não precisa do contador
for (const index in listaDePessoas) {
  const item = listaDePessoas[index]
  console.log('Nome', item.nome)
}


// Não precisa usar index
for (const item of listaDePessoas) {
  console.log('Nome', item.nome)
}