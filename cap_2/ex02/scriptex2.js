const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value // obtem o conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)  //arredonda para baixo o resultado
    const minutos = duracao % 60 // obtém o resto da divisão 

    resp1.innerText = titulo
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault()
})