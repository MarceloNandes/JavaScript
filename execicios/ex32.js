function media (numeros){
    let total = 0
    for( let i=0; i < numeros.length; i++){
         total += numeros[i]
    }
    
    return total/numeros.length
}

vetor = [1, 2, 3, 4, 5]

console.log(media(vetor))