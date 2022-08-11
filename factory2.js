function criarProduto(nome, preco, desconto){
    return {
        nome, 
        preco,
        desconto,
        valorFinal: preco * desconto
    }
}

console.log(criarProduto('Monitor', 160 , 0.9))