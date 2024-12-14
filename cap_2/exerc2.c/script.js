const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e)=>{
    produto = frm.inProduto.value
    preco = Number(frm.inPreco.value)

    const valorDesconto = preco / 2
    const valorItemDesconto = valorDesconto + (2 * preco)
    resp1.innerHTML = `${produto} - Promoção: Leve 3 por R$: ${valorItemDesconto.toFixed(2)}`

    resp2.innerHTML = `O 3° produto custa apenas R$: ${valorDesconto.toFixed(2)}`

    e.preventDefault()
})