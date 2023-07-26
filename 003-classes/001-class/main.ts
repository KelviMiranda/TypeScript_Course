/* 
    Classes em ts é uma estrutura de programação orientada a objecto
    que possui um conjuto de propriedade e métodos 

    A classe é um modelo para criar objectos, permitindo que você
    defina uma estrutura com propriedades e comportamentos 
*/

class Pessoa{
    nome:string;
    idade:number;
    isFuncionario:boolean;

    constructor(nome:string, idade:number, isFuncionario:boolean){
        this.nome = nome;
        this.idade = idade;
        this.isFuncionario = isFuncionario;
    }
}

const pessoa1:Pessoa = new Pessoa('Denner Truquatte', 37, true);
const pessoa2:Pessoa = new Pessoa('Kelvin Miranda', 67, false);

console.log(pessoa1);
console.log(pessoa2.nome);