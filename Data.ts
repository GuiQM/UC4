let rl = require('readline-sync');


export interface Data {
    dia: number,
    mes: number,
    ano: number,
    compara(outraData: Data): void;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): void;
    clone(): Data;
}


export class Data implements Data {
   public dia: number
   public mes: number
   public ano: number

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia,
            this.mes = mes,
            this.ano = ano
    }
    public compara(outraData: Data): string {
        let comparaDia
        let comparaMes 
        let comparaAno
        
        if (this.dia >= outraData.dia) {
            comparaDia = this.dia - outraData.dia
        }
        else (this.dia <= outraData.dia); {
            comparaDia = outraData.dia - this.dia
        };
        
        if (this.mes >= outraData.mes) {
            comparaMes = this.mes - outraData.mes
        }
        else (this.mes <= outraData.mes); {
            comparaMes = outraData.mes - this.mes
        }
        
        if (this.ano >= outraData.ano) {
            comparaAno = this.ano - outraData.ano
        }
        else (this.ano <= outraData.ano); {
            comparaAno = outraData.ano - this.ano
        }
        let compFinal = (`${comparaDia}, ${comparaMes}, ${comparaAno}`)
        return compFinal
    }
    
    getDia(): number {
        let dia = this.dia
        return dia;
    }
    getMes(): number {
        let mes = this.mes
        return mes
    }
    getMesExtenso(): string {
        
        switch (this.mes) {
            case 1:
                return "Janeiro"
                break;
            case 2:
                return "Fevereiro"
                break;
            case 3:
                return "Março"
                break;
            case 4:
                return "Abril"
                break;
            case 5:
                return "Maio"
                break;
            case 6:
                return "Junho"
                break;
            case 7:
                return "Julho"
                break;
            case 8:
                return "Agosto"
                break;
            case 9:
                return "Setembro"
                break;

            case 10:
                return "Outubro"
                break;

            case 11:
                return "Novembro"
                break;

            case 12:
                return "Dezembro"
                break;

            default:
                return "ERRO"
        }
        

    }
    getAno(): number {
        let ano = this.ano
        return ano
    }
    isBissexto(): void {
        if (this.ano == 2000 || this.ano == 1000 || this.ano == 0){
            console.log(`O ano é bissexto!`)
        
        }else if (this.ano % 4 === 0 && this.ano % 100 != 0){
            console.log(`O ano é bissexto!`)
        } else {
            console.log(`O ano não é bissexto`)
        }

        
    }
    clone(): Data {
return new Data(this.dia, this.mes, this.ano)

    }
}
let final = new Data(14, 5, 2005)


// final.compara(final.compara())