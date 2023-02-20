// importa o modulo filesystem que faz manipulação de arquivos
const fs = require('fs')

// verifica se o arquivo existe se não existir ele cai no erro 
/*fs.readFile('./arq1.txt', (error, resposta) => {
  if (error) {
    console.error('Deu ruim', error.stack)
    return;
  }
  console.log(`resposta`, resposta.toString())
})
*/

fs.readFile('./arq1.txt', (erroArq1, respostaArq1) => {
  if (erroArq1) {
    console.error('Deu ruim arq1', erroArq1)
    return;
  }
  fs.readFile('./arq2.txt', (erroArq2, respostaArq2) => {
    if (erroArq2) {
      console.error('Deu ruim arq2', erroArq2)
      return;
    }
    fs.readFile('./arq3.txt', (erroArq3, respostaArq3) => {
      if (erroArq3) {
        console.error('Deu ruim arq3', erroArq3)
        return;
      }
      const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
      fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
        if (errorWrite) {
          console.error('Deu ruim arquivo final', errorWrite)
          return;
        }
        console.log('Arquivo Criado com Sucesso');
      })
    })
  })
})