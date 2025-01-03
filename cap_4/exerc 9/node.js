const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync
const numero = Number(prompt("Número(centena): ")) //lê o número

if(numero < 100 || numero >= 1000){
    console.log("Erro...o número digitado deve ser uma centena")
    return
}

const num1 = Math.floor(numero / 100) // obtém o 1° número
const sobra = numero % 100 
const num2 = Math.floor (sobra / 10) // obtém o 2° número
const num3 = sobra % 10
console.log(`O valor invertido ${num3}${num2}${num1}`)//exibe o número invertido