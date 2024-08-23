let rl = require("readline-sync")


export class Ponto2D {
    x: number
    y: number

    constructor() {
        this.x = 0
        this.y = 0
    }

    setXY(): number {
        this.x = rl.questionInt("Qual o X1?\n")
        this.y = rl.questionInt("E o Y1?\n")
        let respostaXY1 = (this.x, this.y)
        return respostaXY1;
    }

    getXY(): void {
        console.log(`X1: ${this.x}`)
        console.log(`Y1: ${this.y}`)
    }


    equals(outroPonto: Ponto2D): boolean {
        if (this.x === outroPonto.x && this.y === outroPonto.y) {
            return true
        } else {
            return false
        }
    }

    toStringX(): string {
        return `Ponto X: ${this.x}`
    }

    toStringY(): string {
        return `Ponto Y: ${this.y}`
    }

    distancia(outroPonto: Ponto2D): number {
        let distanciaElevado = ((outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y) ** 2)
        let distanciaF = Math.sqrt(distanciaElevado)
        return distanciaF
    }

    clone(): Ponto2D {
        let novoPonto = new Ponto2D()
        novoPonto.x = this.x
        novoPonto.y = this.y
        return novoPonto
    }

}

export class Ponto2DcomCoord extends Ponto2D {

    constructor(x: number, y: number) {
        super()
        this.x = x
        this.y = y
    }

    alterarPonto2D(outroPonto2D: Ponto2D): void {
        this.x = outroPonto2D.x
        this.y = outroPonto2D.y
    }
}

export class Ponto2DFilha extends Ponto2D {
    constructor(outroPonto2D: Ponto2D) {
        super()
        this.x = outroPonto2D.x
        this.y = outroPonto2D.y
    }

    alterarPonto(outroPonto2D: Ponto2D): void {
        this.x = outroPonto2D.x
        this.y = outroPonto2D.y
    }
}

let ponto1 = new Ponto2DcomCoord(0, 0);
let ponto2 = new Ponto2DFilha(ponto1);






let menu = true

while (menu) { // enquanto o "MENU" for TRUE ele vai repetir o menu dentro.
    console.log(`
        -------------
        1- Set X e Y.
        2- Get X e Y.
        3- Equals.
        4- ToStrings.
        5- Distância entre pontos
        6 - Clones.
        0- SAIR.
    `)







    let pergunta = rl.questionInt("RESPOSTA: \n") //pergunta base do menu.
    switch (pergunta) {
        case 1:
            ponto1.setXY()
            break;

        case 2:
            ponto1.getXY()
            ponto2.getXY()
            break;

        case 3:
            if (ponto1.equals(ponto2)) {
                console.log(`Os pontos são iguais`);
            } else {
                console.log(`São diferentes`);
            }
            break;
        case 4:
            console.log(ponto1.toStringX())
            console.log(ponto1.toStringY())
            break;

        case 5:
            console.log(ponto2.distancia(ponto1))
            break;

        case 6:
            console.log(ponto1.clone())
            console.log(ponto2.clone())
            break;

        case 0:
            console.log(" \n Fechando...")
            menu = false;
            break;

        default:
            console.log("ERRO")
    }
}