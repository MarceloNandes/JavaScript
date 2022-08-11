const Valor = (A , B) => {
    let valorEmReais = `R$ ${(A + B).toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)  
}

Valor(0.1, 0.2)