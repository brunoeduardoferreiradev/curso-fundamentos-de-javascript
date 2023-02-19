// Aula : Demonstração: Conhecendo While e Do While

let termoDeParada = true
let contador = 0

// pegar os numeros pares até 10
while (termoDeParada) {
  termoDeParada = contador < 10
  if (contador % 2 === 0) {
    console.log('Numero par', contador)
  }
  contador += 1
}

// Roda a primeira vez e testa a variavel depois !
do {
  console.log('Só uma vez! pois termoDePrada é', termoDeParada)
} while (termoDeParada)


while (termoDeParada) {
  // não vai rodar
  console.log('Nem vai executar');
}