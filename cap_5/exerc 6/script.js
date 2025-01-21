const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const numero = Number(frm.inNumero.value)
    e.preventDefault()
    let temDivisor = 0 // Declara e inicializa contador

    for (let i = 2; i<= numero/2; i++) {//vai percorrer todos os possíveis divisores do numero
        if(numero % i == 0){//Verifica se i (1,2,3,4...) é divisor do numero
            temDivisor = 1//muda o flag
            break //sai da repetição
        }
        
    }
    if(numero > 1 && !temDivisor){//se numero > 1 e não possui divisor
        resp.innerText = `${numero} é primo`
    }else{
        resp.innerText = `${numero} não é primo`
    }
})



