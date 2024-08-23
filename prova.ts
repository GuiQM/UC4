import { error } from "console";

type Gabarito = string[]


export interface Prova {
    constructor(gabarito: Gabarito);
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

 export class Prova implements Prova {
    private gabarito:Gabarito
    public respostas:Array<string>
    public respondidas:number

    constructor(gabarito:Gabarito){
        if(gabarito.length != 15){
            throw new Error('O gabarito deve ter 15')
        }
        this.gabarito = gabarito
        this.respostas = Array(15).fill('')
        this.respondidas = 0
    }

    public respostaAluno(resposta: string): void{
        if(this.respostas.length > 15){
            throw new Error('Não é possivel adicionar mais respostas')
        }
        this.respostas[this.respondidas] = resposta
        this.respondidas++
    }

    acertos():number{
        let acertos = 0
        for(let i = 0; i < this.respostas.length; i++){
            if(this.respostas[i] === this.gabarito[i]){
                acertos++
            }
        }
        return acertos
    }

    nota(): number{
        let nota = 0
        for(let i = 0; i < 11; i++){
            if(this.respostas[i] === this.gabarito[i]){
                nota += 0.5
            }
        }
        for(let i = 11; i < 16; i++){
            if(this.respostas[i] === this.gabarito[i]){
                nota++
            }
        }
        return nota
    }

    maior(outraProva: Prova): number{
       /* if(outraProva.nota() > this.nota()){
            return outraProva.nota()
        }
        if(outraProva.nota() < this.nota()){
            return this.nota()
        }
        if(outraProva.nota() === this.nota()){
            return this.nota()
        } else{
            return 0
        }*/
    return Math.max(this.nota(), outraProva.nota())
    }

    getGabarito():Gabarito{
        return this.gabarito
    }
}