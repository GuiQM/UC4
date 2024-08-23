
import { Prova } from "./prova";

let prova1 = new Prova('aaaaabbbbbccccc'.split(''))
console.log(prova1.getGabarito())
prova1.respostaAluno('a')
prova1.respostaAluno('b')
prova1.respostaAluno('a')

console.log(prova1.respostas)
console.log(prova1.acertos())
console.log(prova1.nota())
