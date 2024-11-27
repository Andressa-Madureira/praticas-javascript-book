const nota1 = window.prompt("Digita a primeira nota")
const nota2 = window.prompt("Digite a segunda nota")

const soma = Number(nota1) + Number(nota2)
const mediaNota = soma / 2

window.alert(`A primeira nota é ${nota1} 
                A segunda nota é ${nota2}
                Média: ${mediaNota}
    `)

if(mediaNota >= 6){
    alert("Aprovado")
}else{
    alert("Reprovado")
}