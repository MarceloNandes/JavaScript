console.log(typeof String)
console.log(typeof Object)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Marcelo Fernandes'.reverse()) // como 'Marcelo Fernandes' é uma string é possivel acessar a funçao do prototype

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () { // evitar re-escrever funçoes existentes pois podem gerar bugs
    return 'Lascou tudo'
}

console.log('Marcelo Fernandes'.reverse())