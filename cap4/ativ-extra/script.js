const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const numero = Number(frm.inNumero.value)

    const sobra = Number(numero % 2)

    sobra == 0 ? resp.innerHTML = `${numero} é par` : resp.innerHTML = `${numero} é ímpar`
    
    /*
    if(sobra == 0){
        
        resp.innerHTML = `${numero} é par`
    }else{
        resp.innerHTML = `${numero} é ímpar`
    }


    */
})