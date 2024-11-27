const precoProduto = window.prompt("Qual é o valor do produto?")

const pagamentoaVista = Number(precoProduto) - (precoProduto * 0.10)
const pagamentoParcelado = precoProduto / 3
window.alert("Você pode pagar à vista ou parcelar em até 3x")
alert(`Preço do produto: R$ ${precoProduto}
        Preço à vista: R$ ${pagamentoaVista}
        Ou 3 x de: R$ ${pagamentoParcelado.toFixed(2)}
    
    `)