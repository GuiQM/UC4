"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require('readline-sync');
var Cozinheiro = /** @class */ (function () {
    function Cozinheiro(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Cozinheiro.prototype.getCozinheiro = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e sou chef h\u00E1 ").concat(this.ano_xp, " anos."));
    };
    Cozinheiro.prototype.setCozinheiro = function () {
        var nomeUp = rl.question("Qual o nome do cozinheiro? ");
        var idadeUp = rl.question("Qual a idade do cozinheiro? ");
        var ano_xpUP = rl.question("Qual o tempo de xp do cozinheiro? ");
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xpUP;
    };
    return Cozinheiro;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(cz, nome, endereco, num_end) {
        this.cz = cz;
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
    }
    return Restaurante;
}());
//Instância da Classe Cozinheiro
var chefJacquin = new Cozinheiro("Érik Jacquin", 59, 45);
//Instância da Classe Restaurante agregada com o objeto da Classe Cozinheiro
var variatto = new Restaurante(chefJacquin, "Variatto", "Av. Imperatriz", 187);
var chefNovo = new Cozinheiro("Teste", 50, 20);
chefNovo.getCozinheiro();
chefNovo.setCozinheiro();
chefNovo.getCozinheiro();
