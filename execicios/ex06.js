const jurosSimples = (capitalInicial, TaxaDeJuros, TempoDeAplicação) => {
      let resultado = capitalInicial + (capitalInicial * TaxaDeJuros * TempoDeAplicação)
      console.log(resultado)
}

const jurosComposto = (capitalInicial, TaxaDeJuros, TempoDeAplicação) => {
       let resultado = capitalInicial * (1 + TaxaDeJuros) ** TempoDeAplicação
       console.log(resultado.toFixed(2))
}

jurosSimples(1000, 1/100 , 12)
jurosComposto(1000, 1/100 , 12)
