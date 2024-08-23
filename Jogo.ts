let rl = require('readline-sync');

export interface interfaceJogo {
    nome: string;
    genero: string;
    classificacao: number;
    getJogo(): void;
    setjogo(): void;
}

export class Jogo implements interfaceJogo {
    public titulo: string;
    genero: string;
    classificacaoEtaria: number

    constructor(tituloJogo: string, generoJogo: string, classificacaoJogo: number) {
        this.titulo = tituloJogo;
        this.genero = generoJogo;
        this.classificacaoEtaria = classificacaoJogo;
    }
    setjogo(): void;
    setjogo(): void;
    setjogo(): void;
    setjogo(): void {
        throw new Error("Method not implemented.");
    }
    nome: string;
    classificacao: number;

    public getJogo(): void {
        console.log(`Titulo: ${this.titulo}, Gênero: ${this.genero}, Classificação: ${this.classificacaoEtaria}`)
    }

    public setJogo(): void {
        let tituloJogo = rl.question("Insira o título do jogo: ")
        let generoJogo = rl.question("Insira o gênero do jogo: ")
        let classificacaoJogo = rl.question("Insira a classificação do jogo: ")

        this.titulo = tituloJogo
        this.genero = generoJogo
        this.classificacaoEtaria = classificacaoJogo
    }
}


export interface interfaceJogo {
    nome: string;
    genero: string;
    classificacao: number;
    getJogo(): void;
    setjogo(): void;
}
export class jogoEletronico extends Jogo implements interfaceJogo {
    plataforma: string

    constructor(tituloJogo: string, generoJogo: string, classificacaoJogo: number, plataformaJogo: string) {

        //Super cria os novos valores
        super(tituloJogo, generoJogo, classificacaoJogo)
        //Atualizando o novo parâmetro
        this.plataforma = plataformaJogo
    }
    setjogo(): void;
    setjogo(): void;
    setjogo(): void {
        throw new Error("Method not implemented.");
    }

}


export interface interfaceJogo {
    nome: string;
    genero: string;
    classificacao: number;
    getJogo(): void;
    setjogo(): void;
}
export class JogoDeTabuleiro extends Jogo implements interfaceJogo {
    numJogadores: number

    constructor(tituloJogo: string, generoJogo: string, classificacaoJogo: number, numJogadoresJogo: number) {

        super(tituloJogo, generoJogo, classificacaoJogo)

        this.numJogadores = numJogadoresJogo
    }
    setjogo(): void;
    setjogo(): void;
    setjogo(): void;
    setjogo(): void {
        throw new Error("Method not implemented.");
    }
}