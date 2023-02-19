// Exercicio 1

// Exercicio 2
let termoParada = true
let contador = 0

while (termoParada) {
  console.log(contador)
  if (contador++ < 3)
    continue
  else
    termoParada = false
}
// Exercicio 3
const listaDeTarefas = [
  { tarefa: 'lavar o chão', id: 1 },
  { tarefa: 'lavar a louça', id: 2 },
  { tarefa: 'arrumar o quarto', id: 3 },
]

let indice = 0
while (indice < listaDeTarefas.length) {
  console.log(listaDeTarefas[indice].tarefa)
  indice++
}

let indice2 = 0
do {
  console.log(listaDeTarefas[indice2].tarefa)
  indice2++
} while (indice2 < listaDeTarefas.length)

// Exercicio 4
let termoParada2 = true

while (termoParada2) {
  console.log('Olá Mundo!')
  break
}