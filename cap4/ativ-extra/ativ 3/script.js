const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e)=>{

    const valor = Number(frm.inValor.value)

    const pagar = Number(frm.inPagar.value)



    const valorMin = 1
    const trocoMin = Number(pagar - valorMin)

    const valorMed = 1.75
    const trocoMed = Number(pagar - valorMed)

    const valorMax = 3
    const trocoMax = Number (pagar - valorMax)
    
    const timeMin = 30
    const timeMed = 60
    const timeMax = 120

    

     

    if(valor < valorMin){
        alert("Valor insuficiente")
    }else if(valor > valorMax ){
        alert("O valor máximo de permanência é de 120 min")
    }else if(valor >= valorMin && valor < valorMed){
        resp1.innerHTML = `Tempo: ${timeMin} min`
        resp2.innerHTML = `Troco: R$ ${trocoMin.toFixed(2)}`
    }else if(valor >= valorMed && valor < valorMax){
        resp1.innerHTML = `Tempo: ${timeMed} min`
        resp2.innerHTML = `Troco R$ ${trocoMed.toFixed(2)}`
    }else if(valor === valorMax){
        resp1.innerHTML = `Tempo: ${timeMax} min`
        resp2.innerHTML = `Troco R$ ${trocoMax.toFixed(2)}`
    }
        

    
    e.preventDefault()
    
})

/*

 const valor = Number(frm.inValor.value)

    const valorMin = 1
    const timeMin = 30 
    
    const valorMed = Number(valorMin + 0.75)
    const timeMed = Number(timeMin * 2)

    const valorMax = Number(valorMin * 3)
    const timeMax = Number(timeMin * 4)
*/