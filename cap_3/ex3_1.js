const prompt = require ("prompt-sync")() //Adiciona pacote para entrada de dados 
const num1 = Number(prompt("1° Número: ")) // lê os números 
const num2 = Number(prompt("2° Número: ")) // lê os números 
const soma = num1 + num2 //calcula a soma
console.log(`O resultado da soma é: ${soma}`)

