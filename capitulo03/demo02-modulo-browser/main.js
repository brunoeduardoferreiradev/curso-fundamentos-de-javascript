window.onload = () => {
  console.log('A tela carregou')
  const btn = document.getElementById('btnCalcular')
  btn.onclick = click

  function obterValorDoInput(id) {
    const item = document.getElementById(id)
    return item.value
  }

  function click() {
    const tipoOperacao = obterValorDoInput('tipoOperacao')
    const valor1 = obterValorDoInput('valor1')
    const valor2 = obterValorDoInput('valor2')
    const resultado = Matematica[tipoOperacao](
      valor1, valor2
    )
    console.log('resultado', resultado)
    document.getElementById('resultado')
      .innerText = `
    A operaçao de ${tipoOperacao}, ${valor1} por ${valor2} é ${resultado} 
    `
  }
}