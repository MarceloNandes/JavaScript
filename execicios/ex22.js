function calcularValor (mes , valor) {
    if (mes > 0 && mes < 13){
        atraso = mes - 1
        return (valor * (1.05**atraso)).toFixed(2)
    } else {
        return 'Més inválido.'
    }
}

console.log(calcularValor (5 , 100))
console.log(calcularValor (7 , 327))
console.log(calcularValor (9 , 488))
console.log(calcularValor (3, 1850))
