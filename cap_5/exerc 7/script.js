const frm = document.querySelector("form")
const resp = document.querySelector("resp")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const numeroSimbolo = Number(frm.inNumero.value)

    console.log(numeroSimbolo)
})