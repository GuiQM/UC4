var rl = require('readline-sync');
var Professor = /** @class */ (function () {
    function Professor(nome, idade, experiencia) {
        this.nome = nome;
        this.idade = idade;
        this.experiencia = experiencia;
    }
    Professor.prototype.getProf = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e sou professor h\u00E1 ").concat(this.experiencia, " anos."));
    };
    Professor.prototype.setProf = function () {
        var nomeUP = rl.question("Qual o nome do Professor? ");
        var idadeUP = rl.question("Qual a idade do Professor? ");
        var experiencia = rl.question("Qual o tempo de experiência como professor? ");
        this.nome = nomeUP;
        this.idade = idadeUP;
        this.experiencia = experiencia;
    };
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(prof, nomeEsc, enderecoEsc, num_endEsc) {
        this.prof = prof;
        this.nomeEsc = nomeEsc;
        this.enderecoEsc = enderecoEsc;
        this.num_endEsc = num_endEsc;
    }
    Escola.prototype.getEscola = function () {
        console.log("a escola se chama ".concat(this.nomeEsc, ", se localiza em ").concat(this.enderecoEsc, " e seu n\u00FAmero \u00E9 ").concat(this.num_endEsc, "."));
    };
    Escola.prototype.setEscola = function () {
        var nomeSch = rl.question("Qual o nome da escola? ");
        var endereco = rl.question("Qual o endereco? ");
        var num_endereco = rl.question("Qual o numero da escol? ");
        this.nomeEsc = nomeSch;
        this.enderecoEsc = endereco;
        this.num_endEsc = num_endereco;
    };
    return Escola;
}());
var novoSor = new Professor("", 0, 0);
var novaSchool = new Escola(novoSor, "", "", 0);
var menu = true;
while (menu) {
    var questao = rl.questionInt("Menu de Opções: \n Criar o professor: 1,:\n Criar a escola, pressione: 2 \n Modificar o professor, pressione: 3 \n Modificar a Escola, pressione: 4 \n Sair, pressione: 5 ");
    switch (questao) {
        case 1:
            novoSor.setProf();
            break;
        case 2:
            novaSchool.setEscola();
        case 3:
            novoSor.getProf();
            break;
        case 4:
            novaSchool.getEscola();
            break;
        case 5:
            !menu;
            process.exit(0);
            break;
    }
}
