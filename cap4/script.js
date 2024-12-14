const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const aluno = frm.inAluno.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2
    if (media >= 7) {
        resp1.innerText = `Média das Notas: ${media}`
        resp2.innerText = `Parabéns, ${aluno}! Você foi aprovado(a)! `
        resp2.style.color = "blue"

    } else if (media >= 4) {
        resp1.innerText = `Média das Notas: ${media}`
        resp2.innerText = `Atenção, ${aluno}! Você está em exame!`
        resp2.style.color = "green"
    } else {
        resp1.innerText = `Média das Notas: ${media}`
        resp2.innerText = `Ops, ${aluno}! Você foi reprovado(a)! `
        resp2.style.color = "red"
    }
    e.preventDefault()
})