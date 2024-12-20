const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da compra R$: ")) //lê o valor da compra
const aux = Math.floor(valor / 20) //aux = n/ de parcelas sem condição 
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux // operador ternário 
const valorParcela = valor / parcelas // cálculo do valor da parcela 
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)

