function multiplicaVetores (vetor , inteiro) {
    let resultado = []
    for( let i = 0; i < vetor.length; i++) {
        resultado.push(inteiro * vetor[i])
    }
    return resultado
}

let vetor = [1, 2, 3, 4, 5]

console.log(multiplicaVetores(vetor, 8))