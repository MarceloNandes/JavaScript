function aumentoSalario (salario, planoDeTrabalho) {
    switch (planoDeTrabalho){
        case 'A':
            console.log(`O salario será de ${salario * 1.1}`)
            break
        case 'B':
            console.log(`O salario será de ${salario * 1.15}`)
            break
        case 'C':
            console.log(`O salario será de ${salario * 1.20}`)
            break
        default: console.log('Plano inválido')
    }
}

aumentoSalario(3800, 'A')
aumentoSalario(2800, 'B')
aumentoSalario(1800, 'C')
aumentoSalario(1800, 'D')