class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }


    atacar() {
        let ataque =""
        if (this.tipo === "guerreiro") {
            ataque = "espada !"
        } else if (this.tipo === "mago") {
            ataque = "magia ! "
        } else if (this.tipo === "monge") {
            ataque = "artes marciais !"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken !"
        } else {
            ataque = "nada !!!"
        }    
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }


}

let hero = new Heroi("Leo", 37, "guerreiro")
let hero1 = new Heroi("Leo", 37, "mago")
let hero2 = new Heroi("Leo", 37, "monge")
let hero3 = new Heroi("Leo", 37, "ninja")
let hero4 = new Heroi("Leo", 37, "ninaja")

hero.atacar()
hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()