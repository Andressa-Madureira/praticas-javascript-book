const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

frm.addEventListener("submit", (e) => {

    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50    //calcula o valor da entrada
    const parcela = (preco * 0.50) / 12 //calcula o valor da parcela

    resp1.innerHTML = `Promoção: ${veiculo}`
    resp2.innerHTML = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerHTML = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault() //evita envio do form
})