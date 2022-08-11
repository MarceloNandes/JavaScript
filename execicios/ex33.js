let vetorInteiro = [5 ,6 ,9 ,8]
let vetorString = ['8', '9', '7', '3']
let vetorDouble = [8.6, 9.6, 7.2, 6.3]

function concatenar(...args){
    let resultado = []
    for(let i = 0; i<args.length; i++){
        resultado = resultado.concat(args[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))