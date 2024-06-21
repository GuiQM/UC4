import { log } from "console"
let rl = require('readline-sync')

class Cozinheiro{
    nome: string
    idade: number
    ano_xp: number

constructor(nome: string, idade: number, ano_xp: number){
    this.nome = nome
    this.idade = idade
    this.ano_xp = ano_xp
    }

    getCozinheiro(): void{
console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou chef há ${this.ano_xp} anos.`);
}

setCozinheiro(): void{
let nomeUp = rl.question("Qual o nome do cozinheiro? ")
let idadeUp = rl.question("Qual a idade do cozinheiro? ")
let ano_xpUP = rl.question("Qual o tempo de xp do cozinheiro? ")
this.nome = nomeUp
this.idade = idadeUp
this.ano_xp = ano_xpUP

}
}

class Restaurante{
    cz: Cozinheiro //ASSOCIAÇÃO: Tipagem de produto com outra classe
    nome: string
    endereco: string
    num_end: number

constructor(cz: Cozinheiro, nome: string, endereco: string, num_end: number){
    this.cz = cz
    this.nome = nome
    this.endereco = endereco
    this.num_end = num_end
    }
}

//Instância da Classe Cozinheiro
let chefJacquin = new Cozinheiro ("Érik Jacquin", 59, 45) 

//Instância da Classe Restaurante agregada com o objeto da Classe Cozinheiro
let variatto = new Restaurante(chefJacquin, "Variatto", "Av. Imperatriz", 187)

let chefNovo = new Cozinheiro("Teste", 50, 20)

chefNovo.getCozinheiro()
chefNovo.setCozinheiro()
chefNovo.getCozinheiro()