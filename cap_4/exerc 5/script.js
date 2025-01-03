const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)//calcula a raiz quadrada do número 
    if(Number.isInteger(raiz)){ //se o valor da raiz for um número inteiro
        resp.innerHTML = `Raiz: ${raiz}`//mostra a raiz
        resp.style.color = "green"
    }else{
        resp.innerHTML = `Não há raiz exata para o ${numero}`
        resp.style.color = "red"
    }

    
})