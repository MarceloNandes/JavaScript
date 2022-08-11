let vetor = [5,10,15,26,20,89,12,18]

function contador(numeros){
    noIntervalo = 0
    foraIntervalo = 0
   for (let i = 0; i < numeros.length; i++)
    if (numeros[i] >= 10 && numeros[i] <= 20){
        noIntervalo++
    } else {
        foraIntervalo++
    }
    console.log(`${noIntervalo} estão entre 10 e 20 e ${foraIntervalo} não estão`)
}

contador(vetor)