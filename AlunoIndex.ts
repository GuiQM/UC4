import { Aluno } from "./Aluno";
const rl = require('readline-sync');


let alunoExiste = false



function inserirNotas(nome: string, matricula: number): Aluno {
    let prova1 = rl.questionInt("Insira a nota da prova 1: ")
    let prova2 = rl.questionInt("Insira a nota da prova 2: ")
    let trabalho = rl.questionInt("Insira a nota do trabalho: ")
    let alunoNovo = new Aluno(matricula, nome, prova1, prova2, trabalho)
    return alunoNovo;
}



let alunoNovo = new Aluno(0, '', 0, 0, 0)
let matriculaAluno
let nomeAluno

let menu: boolean = true

while (menu) {


    console.log(
        `1 - Cadastrar Nome e Matrícula (Aluno)
        2 - Cadastrar Notas (Aluno)
        3 - Verificar Média Final (Aluno)
        4 - Verifica Média Final (Aluno)
        0 - Fecha o menu
        `
    );

    let option = rl.questionInt(`Escolha: `)

    switch (option) {

        case 1:
            nomeAluno = rl.question("Insira o nome do aluno: ")
            matriculaAluno = rl.question("Numero da matricula: ")
            alunoNovo = new Aluno(matriculaAluno, nomeAluno, 0, 0, 0)
            alunoExiste = true
            break;

        case 2:
            if (alunoExiste) {
                alunoNovo = inserirNotas(nomeAluno, matriculaAluno)
            } else {
                throw new Error(`O aluno não foi criado.`)
            }
            break;

        case 3:
            if (alunoExiste) {
                console.log(alunoNovo.media())
            } else {
                throw new Error(`Usuário inexistente.`)
            }
            break;

        case 4:
            if (alunoExiste) {
                console.log(alunoNovo.final())
            } else {
                throw new Error(`Usuário inexistente.`)
            }
            break;
        case 0:
            menu = false
            process.exit()
        default: console.log("Opção não reconhecida")


    }
}