let num 

do{
    num = Number(prompt("Digite um número: "))
    if(num == 0 || isNaN(num)){
        window.alert("Número inválido! Por favor, digite um número válido!")
    }
}while(num == 0 || isNaN(num)){
    let pares = `Pares entre 1 e ${num}: `
    for (let i = 2; i <= num;i += 2) {
        pares += `${i}, `
    }

    pares = pares.slice(0, -2) + "."

    window.alert(pares)
}