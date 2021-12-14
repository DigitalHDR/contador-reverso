// const dias = document.querySelector('#dias')
// const horas = document.querySelector('#horas')
// const minutos = document.querySelector('#minutos')
// const segundos = document.querySelector('#segundos')


// function start() {
//   setInterval(timer, 1000)
// }

// function timer() {
//   segundos--
//   if(segundos === 00) {
//     segundos = 60
//   }

//   let formato = segundos.toString().padStart(2, '0')
//   document.querySelector('#segundos').innerHTML = 60
//   return formato
// }

// start()

function formatarDigitos(tempo) {
  return `0${tempo}`.slice(-2) //! - (menos) corta da direita para esquerda
} 

function atualizar(tempo) {
  const segundos = document.querySelector('#segundos')
  const minutos = document.querySelector('#minutos')
  const horas = document.querySelector('#horas')
  const dias = document.querySelector('#dias')
  
  const quantidadeDeSegundos = tempo % 60
  const quantidadeDeMinutos = Math.floor((tempo % (60 * 60)) / 60)
  const quantidadeDeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
  const quantidadeDeDias = Math.floor(tempo / (60 * 60 * 24))

  segundos.textContent = formatarDigitos(quantidadeDeSegundos)
  minutos.textContent = formatarDigitos(quantidadeDeMinutos)
  horas.textContent = formatarDigitos(quantidadeDeHoras)
  dias.textContent = formatarDigitos(quantidadeDeDias)
}

function contagemRegressiva(tempo) {

  function paraContagem() {
    clearInterval(id)
  }

  function contar() {
    if (tempo === 0) {
      paraContagem()
    }
    atualizar(tempo)
    tempo--
  }
  const id = setInterval(contar, 1000)
}

function tempoRestante() {
  const diaDoEvento = new Date('2022-01-01 00:00:00')
  const hoje = Date.now()
  return Math.floor((diaDoEvento - hoje) / 1000)

}

contagemRegressiva(tempoRestante())