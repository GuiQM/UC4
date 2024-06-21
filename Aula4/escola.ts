let rl = require('readline-sync')

class Professor{
    nome: string
    idade: number
    experiencia: number


    constructor(nome: string, idade: number, experiencia: number){
        this.nome = nome
        this.idade = idade
        this.experiencia = experiencia
    }
    getProf(): void{
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou professor há ${this.experiencia} anos.`);
        }

        setProf(): void{
            let nomeUP = rl.question("Qual o nome do Professor? ")
            let idadeUP = rl.question("Qual a idade do Professor? ")
            let experiencia = rl.question("Qual o tempo de experiência como professor? ")
            this.nome = nomeUP
            this.idade = idadeUP
            this.experiencia = experiencia
            
            }
}




class Escola{
    prof: Professor
    nomeEsc: string
    enderecoEsc: string
    num_endEsc: number

constructor(prof: Professor, nomeEsc: string, enderecoEsc: string, num_endEsc: number){
    this.prof = prof
    this.nomeEsc = nomeEsc
    this.enderecoEsc = enderecoEsc
    this.num_endEsc = num_endEsc
    }

    getEscola(): void{
        console.log(`a escola se chama ${this.nomeEsc}, se localiza em ${this.enderecoEsc} e seu número é ${this.num_endEsc}.`);
    }


    setEscola(): void{
        let nomeSch = rl.question("Qual o nome da escola? ")
        let endereco = rl.question("Qual o endereco? ")
        let num_endereco = rl.question("Qual o numero da escol? ")
        this.nomeEsc = nomeSch
        this.enderecoEsc = endereco
        this.num_endEsc = num_endereco
}
}




let novoSor = new Professor("", 0,0)
let novaSchool = new Escola(novoSor, "", "", 0)

let menu = true
while(menu){
    let questao = rl.questionInt("Menu de Opções: \n Criar o professor: 1,:\n Criar a escola, pressione: 2 \n Modificar o professor, pressione: 3 \n Modificar a Escola, pressione: 4 \n Sair, pressione: 5 ")

    switch (questao){
        case 1:
            novoSor.setProf()
            break;
    
            case 2:
            novaSchool.setEscola()
                
                case 3:
                    novoSor.getProf()
                break;

                case 4:
                novaSchool.getEscola()
                break;

                case 5:
                !menu
                process.exit(0)
                break;
    }
}

