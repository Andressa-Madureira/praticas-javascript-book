const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const valorSaque = Number(frm.inSaque.value)

    if(valorSaque % 10 != 0){
        alert("Valor inválido para notas disponíveis(10, 50 e 100)")
        frm.inSaque.focus()
        return
    }

    const notasCem = Math.floor(valorSaque / 100)  //calcular as notas de 100
    let resto = valorSaque % 100 // quanto sobra para pagar

    const notasCinquenta = Math.floor(resto / 50) //calcula as notas de 50
    resto = resto % 50

    const notasDez = Math.floor(resto / 10) 
    if(notasCem > 0 ){
        resp1.innerHTML = `Notas de R$ 100: ${notasCem}`
    }
    if(notasCinquenta > 0){
        resp2.innerHTML = `Notas de R$ 50: ${notasCinquenta}`
    }
    if(notasDez > 0){
        resp3.innerHTML = `Notas de R$ 10: ${notasDez}`
    }
})