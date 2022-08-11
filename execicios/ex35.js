let vetorPilha =  [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10] 

function unirArrays (vetor1 , vetor2) {
    for(let i = 0; i<vetor2.length; i++){
        vetor1.push(vetor2[i])
    }
    return `a uniao dos vetores é = ${vetor1}`
}
console.log(unirArrays(vetorPilha,vetorAdiciona))