const valorParcial = prompt('Qual foi o valor do seu jantar?')
const taxaDeServico = 0.10 // calcula a porcentagem de 10% referente a taxa de serviço
const valorGarcom = Number(valorParcial) * Number(taxaDeServico)
const valorTotal = Number(valorParcial) + Number(valorGarcom)

alert(`\nTaxa do garçom: ${valorGarcom.toFixed(2)}
O valor total a ser pago é: ${valorTotal.toFixed(2)}`)
