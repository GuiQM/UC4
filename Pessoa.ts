class Pessoa{
    nome: string
    idade: number


    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    Cumprimentar(): void{
        console.log(`Olá ${this.nome}, você tem ${this.idade} anos.`)
    }
}

var A = new Pessoa("Andersson", 10)


class Crianca extends Pessoa{
Cumprimentar(): void {
    console.log(`Olá ${this.nome}, tens ${this.idade} anos.`)
}
}

class Adulto extends Pessoa{
Cumprimentar(): void {
    console.log(`Olá ${this.nome}, tens ${this.idade} anos.`)
}
}

class Idoso extends Pessoa{
    Cumprimentar(): void {
    console.log(`Olá ${this.nome}, tens ${this.idade} anos.`)
    }
}


let kid = new Crianca("David", 8)
let adult = new Adulto("Fábio", 25)
let oldman = new Idoso ("Valdemir", 60)

kid.Cumprimentar()
adult.Cumprimentar()
oldman.Cumprimentar()