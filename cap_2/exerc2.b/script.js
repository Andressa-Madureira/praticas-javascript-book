const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTime.value)

    const valorTempo = 15 / 60

    const tempoUso = Math.floor(valorTempo * tempo)

    resp.innerText = `Valor a pagar R$:${tempoUso.toFixed(2)}`

    e.preventDefault()
})