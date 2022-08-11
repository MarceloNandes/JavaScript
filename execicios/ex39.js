function trocarVetores (verto1 , vetor2) {
    if (vetor1.length == vetor2.length){
        for (let i = 0; i < vetor1.length; i++){
            vetor1[i]= vetor1[i] + vetor2[i]
            vetor2[i]= vetor1[i] - vetor2[i]
            vetor1[i]= vetor1[i] - vetor2[i]
        }
    } else {
        'Vetors de tamanhos diferentes'
    }
    console.log(`Vetor 1:${vetor1}, Vetor 2:${vetor2}`)
}
vetor1= [1 ,2 ,3]
vetor2= [4 ,5 ,6]

trocarVetores (vetor1, vetor2)