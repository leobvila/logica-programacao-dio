// TENTEI FAZER UM FOR E UM WHILE PARA ex; EX IR SOMANDO  1000 AO XPHEROI
//sozinho nao dei conta com ia (gemini) ate foi . porem para funcionar direito o nivel precisarai fazer função
//PREFERI DEIXAR SO O QUE REALIZEI SEM AJUDA 


let nomeHeroi = "Ogro da Montana";
let xpHeroi = 6391
let objetoMaoDireita = "Arma lendaria"
let nivel = ""



switch (objetoMaoDireita) {
    case "Espada":
    case "Machado":
    case "Arco":
        xpHeroi += 500
        break
    case "Amuleto":
    case "cajado":
        xpHeroi += 300
        break
    case "maçã":
    case "Pão":
        xpHeroi += 100
        break
    case "Arma lendaria":
        xpHeroi += 1000
        break
}





if (xpHeroi >= 0 && xpHeroi < 1000) {
    nivel = "Ferro"
} else if (xpHeroi > 1001 && xpHeroi <= 2000) {
    nivel = "Bronze"
} else if (xpHeroi > 2001 && xpHeroi <= 5000) {
    nivel = "Prata"
} else if (xpHeroi > 5001 && xpHeroi <= 7000) {
    nivel = "Ouro"
} else if (xpHeroi > 7001 && xpHeroi <= 8000) {
    nivel = "Platina"
} else if (xpHeroi > 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente"
} else if (xpHeroi > 9001 && xpHeroi <= 10000) {
    nivel = "Imortal"
} else if (xpHeroi > 1000) {
    nivel = "Radiante"
} else {
    nivel = "Sem nivel."
}


console.log("O Herói de nome: " + nomeHeroi + " esta no nível: " + nivel + " " + xpHeroi)
 


