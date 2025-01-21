const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const numero = Number(frm.inNumero.value)
    e.preventDefault()
    let numDivisores = 0 // Declara e inicializa contador

    for (let i = 1; i<= numero; i++) {//vai percorrer todos os possíveis divisores do numero
        if(numero % i == 0){//Verifica se i (1,2,3,4...) é divisor do numero
            numDivisores++//se for divisor, incrementa contador
        }
        
    }
    if(numDivisores == 2){//se possui apenas 2 divisores é primo
        resp.innerText = `${numero} é primo`
    }else{
        resp.innerText = `${numero} não é primo`
    }
})



