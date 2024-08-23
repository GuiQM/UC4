const rl = require('readline-sync')
export class Biblioteca {
    private jogos:Jogo[]
constructor(){
    this.jogos = []
}
adicionarJogoTabuleiro():void{
    const titulo = rl.question('Qual o titulo do jogo? ')
    const genero = rl.question('Qual o genero do jogo? ')
    const classificacao = rl.questionInt('Qual a classificacao etaria do jogo? ')
    const numeroDeJogadores = rl.question('Qual o numero de jogadores? ')

    const jogo = new JogoDeTabuleiro(titulo, genero, classificacao, numeroDeJogadores)
    this.jogos.push(jogo)
}
adicionarJogoEletronico():void{
    const titulo = rl.question('Qual o titulo do jogo? ')
    const genero = rl.question('Qual o genero do jogo? ')
    const classificacao = rl.questionInt('Qual a classificacao etaria do jogo? ')
    const plataforma = rl.question('Qual a plataforma do jogo? ')

    const jogo = new JogoEletronico(titulo,genero,classificacao,
        plataforma)
    this.jogos.push(jogo)
}
removerJogo():void{
let titulo = rl.question('Qual o nome do jogo a ser removido? ').toLowerCase()
this.jogos = this.jogos.filter(game => game.getPropriedades()[0].toLowerCase() !== titulo)
}
listarJogos():void{
    let list = ''
    for(let i:number = 0; i < this.jogos.length; i++){
        list += '\n' + this.jogos[i].getDetalhes()
    }
    console.log( list)
}
}
