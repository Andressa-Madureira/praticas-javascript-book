const frm = document.querySelector("form")
const resp = document.querySelector("p")

frm.addEventListener("submit",(e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    
    let result= ""

    for (let i = 0; i <= 10; i++) {
        result = `${result}${numero} x ${i} = ${numero*i}\n`
        resp.innerText = result
        
    }
})