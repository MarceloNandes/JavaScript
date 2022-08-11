function contadorNegativos (numeros) {
    let contador = 0
    for (let i =0; i < numeros.length; i++){
        if (numeros[i] < 0){
          contador++
        }
       
    }
    return contador
}

vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(contadorNegativos(vetor))