const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const numeroSimbolo = Number(frm.inNumero.value)

    let estrelas = ""//variável que vai concatenar as estrelas/traços
    for(let i = 1; i <= numeroSimbolo; i++){
        if(i % 2 == 1){
            estrelas = estrelas + "*" //na posição do ímpar do i: *
        }else{
            estrelas = estrelas + "-" //na posição par do i: -
        }
    }

    resp.innerHTML = estrelas
})