const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
        const kilo = Number(frm.inKilo.value)
        const consumo = Number(frm.inGrama.value)

        const valor = (kilo / 1000) * consumo // calcula o valor a ser pago

        resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`
    e.preventDefault() //evita o envio do form
})