alert("Digite 0 para sair")

do{
    const num = Number(prompt("Digite um número: "))

    if(num == 0 || isNaN(num)){
        const sair = confirm("Confirmar saída?")
        if(sair){
            break //sair da repetição 
        }else{
            continue
        }
    }
    if(num % 2 == 0){
        alert(`O dobro do ${num} é: ${num * 2}`)
    }else{
        alert(`O triplo de ${num} é: ${num * 3}`)
    }
}while(true) //enquanto for verdade(só sai do laço, pelo break)
alert("Bye, bye...")