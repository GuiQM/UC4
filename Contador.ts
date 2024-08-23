let rl = require("readline-sync")

export class Contador {

    contagem: number

    constructor(contagem: number) {

        this.contagem = contagem
    }

    zerar(): void {
        this.contagem == 0
    }

    incrementar(): void {
        this.contagem += 1
    }

    valor(): number {
        return this.contagem
    }
}
let novoContador = new Contador(0)

novoContador.incrementar()
novoContador.incrementar()
novoContador.incrementar()
console.log(novoContador.valor())