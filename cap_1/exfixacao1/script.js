const number = window.prompt("Olá! Digite um número, por favor")
numberAnterior = (number - 1)
numberPosterior =  Number(number) + 1

const valorDigitado = number
window.alert(`O número escolhido por você: ${valorDigitado}
              O anterior ao número escolhido: ${numberAnterior}
              O posterior ao número escolhido é:  ${numberPosterior}
    
    `)
