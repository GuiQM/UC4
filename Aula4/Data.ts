import { log } from "console"

class Data{
dia: Number
mes: Number
ano: Number

constructor(dia: Number, mes: Number, ano: Number){
this.dia = dia
this.mes = mes
this.ano = ano
}

}

let dataComp:Data = new Data (14, 5, 2024)

console.log(dataComp);