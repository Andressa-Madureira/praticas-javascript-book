const prompt = require("prompt-sync")() //adiciona o pacote prompt

const pessoas = Number(prompt("Número de pessoas: "))
const peixes = Number(prompt("Número de peixes: "))

let pagar //declara a variável pagar

if(peixes <= pessoas){
    pagar = pessoas * 20
}else{
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)} `)

