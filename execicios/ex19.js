function cardapio (codigo , quantidade) {
    switch (codigo) {
        case 100:
            return `Código 100(Cachorro Quente)|${quantidade}x Total:R$${quantidade * 3.00}`
        case 200:
            return `Código 200(Hambúrguer Simples)|${quantidade}x Total:R$${quantidade * 4.00}`
        case 300:
            return `Código 300(Cheeseburguer)|${quantidade}x Total:R$${quantidade * 5.50}`
        case 400:
            return `Código 400(Bauru)|${quantidade}x Total:R$${quantidade * 7.50}`
        case 500:
            return `Código 500(Refrigerante)|${quantidade}x Total:R$${quantidade * 3.50}`
        case 600:
            return `Código 600(Suco)|${quantidade}x Total:R$${quantidade * 2.80}`
        default: 
            return'Produto não existe'
    }
}

console.log(cardapio(100,2))
console.log(cardapio(200,1))
console.log(cardapio(300,3))
console.log(cardapio(400,1))
console.log(cardapio(500,2))
console.log(cardapio(600,2))
console.log(cardapio(700,2))
