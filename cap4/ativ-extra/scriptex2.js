const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const velPermitida = Number(frm.inPermitida.value)
    const velCondutor = Number(frm.inCondutor.value)

    const valorMulta = Number(velPermitida + ( velPermitida * 0.20))

    const valorMultaGrave = Number(valorMulta + (valorMulta * 0.20))





}

  /*  if(velCondutor === velPermitida || velCondutor < velPermitida){
        resp.innerHTML = `Sem multa`

    */
   
       
    /*
    if(velCondutor <= valorMultaLeve){
        resp.innerHTML = `Multa leve`
    }else if(velCondutor >= valorMultaLeve){
        resp.innerHTML = `Multa Grave`
    }else{
        resp.innerHTML = `Sem multa`
    }
    */


//velCondutor == velPermitida || velCondutor > velPermitida