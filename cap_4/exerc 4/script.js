const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const horaBrasil = Number(frm.inHorarioBrasil.value)

    let horaFranca = horaBrasil + 5

    if(horaFranca > 24){
        horaFranca = horaFranca - 24 //Subtrai 24
    }

    resp.innerHTML = `Hora na França: ${horaFranca.toFixed(2)} `
    
})