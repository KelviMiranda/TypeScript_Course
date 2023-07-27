
/*  
    Métodos são comportamento, funções ou tarefas de uma classe 
*/

class Pessoa{
    nome: string;
    idade:number;
    isFuncionario:boolean;

    constructor(nome:string, idade:number, isFuncionario:boolean){
        this.nome = nome,
        this.idade = idade;
        this.isFuncionario = isFuncionario;
    }

    comer(comida:string):string{
        return `O ${this.nome} comeu ${comida}`;
    }

    fazerAniversario():string {
        return `O ${this.nome} fez ${++this.idade}`
    }
}

const pessoa1:Pessoa = new Pessoa("Fernanda", 20, false);
const pessoa2:Pessoa = new Pessoa("Blue Sky", 30, true);
console.log(pessoa1.comer("Pizza"));
console.log(pessoa2.comer("Porco Índio"));