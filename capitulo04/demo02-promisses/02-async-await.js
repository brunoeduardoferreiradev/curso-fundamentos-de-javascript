// Aula : Como usar async/await para resolver Promises?
const readfile = require('readline')
const terminal = readfile.createInterface({
  input: process.stdin,
  output: process.stdout
})

function questionAsync(texto) {
  return new Promise((resolve, reject) => {
    terminal.question(`${texto}\n`, msg => {
      !!msg ? resolve(msg) : reject(new Error('O Campo não pode ser vazio !!!'))
    })
  })
}

async function main() {
  try {
    const nome = await questionAsync('Qual é o seu Nome?')
    const telefone = await questionAsync('Qual é o seu Telefone?')
    console.log(`Nome: ${nome} Telefone: ${telefone}`);
  } catch (error) {
    console.log('Deu Ruim', error.stack);
  }
  finally {
    terminal.close()
  }
}

main()