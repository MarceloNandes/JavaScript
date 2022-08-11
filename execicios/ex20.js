function quaisEQuantasCedulas (valor) {
    let notas100 = 0
    let notas50 = 0
    let notas10= 0
    let notas5= 0
    let notas1 = 0
    let valorNota = calcularValorNota(valor)
    while (valor >= valorNota) {
        switch (valorNota){
            case 100:
                valor -= 100
                notas100++
                break
            case 50:
                valor -= 50
                notas50++
                break
            case 10:
                valor -= 10
                notas10++
                break
            case 5:
                valor -= 5
                notas5++
                break
            case 1:
                valor -= 1
                notas1++
                break
        }
        valorNota = calcularValorNota(valor)
    }

    return elaborarResultado(notas100, notas50, notas10, notas5, notas1)

}
function calcularValorNota(valor) {
    if (valor >= 100) {
        return 100
    } else if (valor >=50) {
        return 50
    } else if (valor >=10) {
        return 10
    } else if (valor >=5) {
        return 5
    } else if (valor >=1 ) {
        return 1
    } 
}

function elaborarResultado(notas100, notas50, notas10, notas5, notas1) {
    let resultado = ''

    if (notas100 > 0) {
        resultado += `${notas100} nota(s) de R$ 100. `
    }

    if (notas50 > 0) {
        resultado += `${notas50} nota(s) de R$ 50. `
    }

    if (notas10 > 0) {
        resultado += `${notas10} nota(s) de R$ 10. `
    }

    if (notas5 > 0) {
        resultado += `${notas5} nota(s) de R$ 5. `
    }

    if (notas1 > 0) {
        resultado += `${notas1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(quaisEQuantasCedulas(153));