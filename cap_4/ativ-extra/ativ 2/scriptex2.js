const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const velPermitida = Number(frm.inPermitida.value)
    const velCondutor = Number(frm.inCondutor.value)

    if(velCondutor <= velPermitida){
        resp.innerHTML = `Situação: Sem multas`
    }else if(velCondutor <= (velPermitida * 1.20)){
        resp.innerHTML = `Situação: Multa leve`
    }else{
        resp.innerHTML = `Situação: Multa grave`
    }
  
})