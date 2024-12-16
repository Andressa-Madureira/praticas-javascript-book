const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const feminino = frm.inFeminino.value
    const altura = Number(frm.inAltura.value)
    const pesoAtual = Number(frm.inPeso.value)

    let peso //declarar a variável

    if(masculino == true){
        peso = 22 * Math.pow(altura, 2);
    } else{
        peso = 21 * Math.pow(altura, 2)

    }
    let emagrecer = (pesoAtual - peso)

    if(pesoAtual > peso){
         resp1.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg.`
        resp2.innerText = `Você precisa emagrecer ${emagrecer.toFixed(2)} kg`
        resp2.style.color = "red"
        window.open("https://www.otempo.com.br/saude-e-bem-estar/10-dicas-para-um-estilo-de-vida-mais-saudavel-1.3178735", "_blank");
    }else{
        resp1.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg. Parabéns, você está em forma!`
    }

    e.preventDefault()
})

frm.addEventListener("reset", (e)=>{ 
    resp1.innerText = ""// limpa o conteúdo do elemento h3 que exibe a resposta
})