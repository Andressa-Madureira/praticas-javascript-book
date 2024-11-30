
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // vai pegar no form o "valor=value" do input de texto nome
    resp.innerHTML = `Olá, ${nome}!` //exibe a resposta do programa
    e.preventDefault() //impede que a página recarregue automaticamente
})