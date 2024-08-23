let rl = require('readline-sync')


//Cria a classe carro
export class Carro{
marca: string
gasolina: number
kml: number
idDoCarro: number

constructor(marca: string, gasolina: number, kml: number, idDoCarro: number){
this.marca = marca
this.gasolina = gasolina
this.kml = kml
this.idDoCarro = idDoCarro
};

//Mostra as informações do carro
getCarro(): void{
    console.log(`Marca do carro: ${this.marca}; \nQuilômetros: ${this.kml}; \nID: ${this.idDoCarro}.`)
};

//Insere as informações do carro
public setCarro(): void{

    let marcaDoCarro = rl.question("Qual a marca do carro? ")
    let kmlDoCarro = rl.questionInt("Quantos KM/L o carro faz? ")
    let idDoCarro = rl.questionInt("Qual o ID do carro? ")

    this.marca = marcaDoCarro
    this.kml = kmlDoCarro
    this.idDoCarro = idDoCarro
};

//Faz com que o carro ande
public Andar(distancia: number): void{

    let distanciaPercorrida = (this.gasolina - (this.kml / distancia))
    function pergunta(){
let perguntaAcelerar = rl.question("Você deseja acelerar o carro? Escreva (S) para sim ou (N) para não: ")
let perguntaAcelerarfinal = perguntaAcelerar.toLowerCase()

if(perguntaAcelerarfinal == "s" && distanciaPercorrida != 0){
console.log(`Você andou ${this.kml} Km.`);

}else if(perguntaAcelerarfinal == "n") {
    console.log(`Você não andou`);

}else if(perguntaAcelerarfinal == "s" && distanciaPercorrida == 0){
    console.log(`Primeiramente adicione gasolina.`)
    
}else if (perguntaAcelerar != "s" || perguntaAcelerar != "n") {
        }
    }
    pergunta()
    }


//Indica o nível de gasolina atual do carro
public obterGasolina(): string{
    let fraseObterGasolina = (`O seu carro possui ${this.gasolina} de gasolina restante.`);
    return (fraseObterGasolina);
}

//Adiciona gasolina ao carro
public adicionarGasolina(): string{
    let fraseAdicionarGasolina = rl.questionInt(`Quantos litros de gasolina deseja adicionar ao seu carro? `);
    let fraseFinalAdicionarGasolina = (`Seu carro agora possui ${fraseAdicionarGasolina} litros de gasolina.`);
    return (fraseFinalAdicionarGasolina);
    }
}

let CarroUPD = new Carro ("", 0, 0, 0)

CarroUPD.setCarro();
CarroUPD.Andar(5)
CarroUPD.getCarro();