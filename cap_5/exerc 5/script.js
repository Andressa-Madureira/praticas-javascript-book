const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" // string com a resposta que será exibida
let numContas = 0 // inicializa o contador
let valTotal = 0 // e acumulador(variáveis globais)


frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const pagar = Number(frm.inPagar.value)


    numContas++ //adiciona valores ao contador e acumulador
    valTotal += pagar
    resposta = `${resposta}${descricao}  - R$: ${pagar.toFixed(2)}`
})