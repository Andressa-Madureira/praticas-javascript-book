const valorTotal = (window.prompt("Qual o valor total da conta?"))
const numeroClientes = Number(window.prompt("Quantos clientes há na sua mesa?"))

const valorTotalPorCliente = (valorTotal) / numeroClientes
if(valorTotal.length === 0 || numeroClientes.length === 0 || valorTotal === "0" || numeroClientes === "0"){
    alert("Confira os valores e refaça o processo")
}else{
alert(`Valor total da compra: R$ ${valorTotal}
       Número de clientes na sua mesa: ${numeroClientes}
       Valor a pagar por cliente: R$ ${valorTotalPorCliente}
    `)
}
