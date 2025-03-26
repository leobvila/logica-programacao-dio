function rankadas(vitorias, derrotas) {
    rank = vitorias - derrotas
    return rank
}

let saldoVitorias = rankadas(200, 99)
let nivelHeroi = nivel(saldoVitorias)

function nivel(rank) {
    if (rank >= 0 && rank <= 10) {
        return "Ferro"
    } else if(rank > 10 && rank <= 20) {
        return "Bronze"
    } else if(rank > 20 && rank < 51) {
        return "Prata"
    } else if(rank > 50  && rank < 81) {
        return "Ouro"
    } else if(rank > 80 && rank < 91) {
        return "Diamante"
    } else if(rank > 90 && rank < 101) {
        return "Lendário"
    } else if(rank >= 101) {
        return "Imortal"
    } else {
        return "Sem nível"
    }
}

console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivelHeroi}`)