function parOuImpar (vetor){
    let par = 0
    let impar = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`${par} numeros par e ${impar} numeros impar`)
}
vetor = [1,2,3,4,5,6]

parOuImpar(vetor)