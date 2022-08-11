let vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 90]

function maiorEMenor(numeros){
    menorNumero = numeros[0]
    maiorNumero = numeros[0]
    for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maiorNumero){
        maiorNumero = numeros[i]
    }
    if (numeros[i] < menorNumero){
        menorNumero = numeros[i]
    }
}
    return [maiorNumero,menorNumero]
}

console.log(maiorEMenor(vetor))
