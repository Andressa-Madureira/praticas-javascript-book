const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" // string com a resposta que será exibida
let numContas = 0 // inicializa o contador
let valTotal = 0 // e acumulador(variáveis globais)


frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inPagar.value)


    numContas++
    valTotal += valor
    //resposta = `${resposta}${descricao} - R$: ${valor.toFixed(2)} \n`
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta} ----------------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})