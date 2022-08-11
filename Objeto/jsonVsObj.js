 const obj = { 
    a: 1, 
    b: 2, 
    c: 3, 
    soma() { 
        return a + b + c
    }
}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) <-- errado cada elemento deve estar entre " "
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) <-- errado devem ser "" dupla para elementos e '' para o json inteiro
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // atributos e textos devem estar com "" duplas

