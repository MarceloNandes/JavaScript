function Salario(HorasTrabalhadas,PorHora){
    X = Number(HorasTrabalhadas * PorHora)
    string= `Salário igual a R$${X}`
    console.log(string)
}

Salario(160,12.5)