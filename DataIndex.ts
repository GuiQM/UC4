import { truncate } from "fs";
import { Data } from "./Data";
const rl = require('readline-sync');

let menu: boolean = true
let novaData
let calendario: Data[] = []
calendario.push(novaData)

while (menu) {
    console.log(`O que deseja? \n1-Inserir datas;\n2-Comparar datas;\n3-Print dia, mês e ano;\n4-Verifica se é bissexto;\n5-Clonar Data;\n0-Fechar menu`)

    let option = rl.questionInt("Escolha: ")

    switch (option) {
        case 1:
            let inserirDia = rl.questionInt("Insira um dia: ")
            let inserirMes = rl.questionInt("Insira um mês: ")
            let inserirAno = rl.questionInt("Insira um ano: ")
            novaData = new Data(inserirDia, inserirMes, inserirAno)

            break;

        case 2:
            if (calendario.length < 2) {
                console.log("Insira mais uma data para fazer a comparação")
            } else {
            let selecionou1 = calendario.push[1]
            let selecionou2 = calendario.push[2]
            let selecionou = rl.questionInt("Qual das datas deseja comparar? ")
        calendario[selecionou1].compara(calendario[selecionou2])
            }

            break;

        case 3:
            console.log(novaData)
            break;

        case 4:
            if (inserirAno == 2000 || inserirAno == 1000 || inserirAno == 0) {
                console.log(`O ano é bissexto!`)

            } else if (inserirAno % 4 === 0 && inserirAno % 100 != 0) {
                console.log(`O ano é bissexto!`)
            } else {
                console.log(`O ano não é bissexto`)
            }
            break;

        case 5:
            let selecionou = rl.questionInt("Qual das datas deseja selecionar? ")
            calendario.push(calendario[selecionou-1].clone())
            let dataSelecionada = calendario[selecionou-1]
            console.log(`Você clonou a seguinte data: ${dataSelecionada}`)
            break;

        case 0:
            console.log("Fechando...")
            menu = false
            process.exit()
        default:
            console.log("Opção não reconhecida")
            break;
    }
}