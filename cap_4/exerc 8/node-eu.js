//Abaixo segue a resolução do meu código que ficou diferente da resolução do livro, mas que chegou ao mesmo resultado

const prompt = require("prompt-sync")() //adiciona o pacote prompt

const valorTotal = Number(prompt("Qual foi o valor total da compra?"))



const valorMinimo = 120

const valorParcela = Number(valorTotal / 6)


if(valorTotal >= valorMinimo ){
    
    console.log(`O valor total é R$:${valorTotal.toFixed(2)}. Você consegue parcelar em até 6x de R$${valorParcela.toFixed(2)}`)
}else{
    console.log(`O valor total da sua compra é ${valorTotal.toFixed(2)}. O valor mínimo para parcela é de R$ ${valorMinimo.toFixed(2)}`)
}