const stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function progresso (stringPontuacoes) {
    const pontuacoes = stringPontuacoes.split(', ');
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];
    let qtdQuebraDeRecords = 0;
    let piorJogo = 0;
    for (let i = 1; i < pontuacoes.length; i++) {
        if (Number(pontuacoes[i]) > Number(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++;
        }
        if (Number(pontuacoes[i]) < Number(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = Number(i) + 1;
        }
    }
    return [maiorPontuacao, qtdQuebraDeRecords, piorJogo];
}

console.log(progresso(stringPontuacoes));