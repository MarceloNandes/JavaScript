let notas = [-2 , 4.5 , 6.8 , 8.8 , 10 , 11 ]

function qualNota(notas) {
    resultado = [] 
    for (i = 0; i < notas.length; i++)
    if(notas[i]>=0 && notas[i]<=4.9){
        resultado.push('D')
    } else if(notas[i]>=5 && notas[i]<=6.9) {
        resultado.push('C')            
    } else if(notas[i]>=7 && notas[i]<=8.9) {
        resultado.push('B')
    } else if(notas[i]>=9 && notas[i]<=10){
        resultado.push('A')
    } else {
        resultado.push('Nota inválida')       
    }
    return resultado
}

console.log(qualNota(notas))