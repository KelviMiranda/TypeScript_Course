/* 
    Classes, métodos e campos no typescript podem ser abstratos.
    
    Um método ou campo abstrato é aquele que não teve uma implementação fornecida

    O papel das classes abstratas é servir como classe base para subclasses que implementam 
    todos os membros abstratos;

    Quando uma classe não possui membros abstratos, ela é chamada de concreta
*/

abstract class Pessoa{
    protected abstract nome:string;
    protected abstract idade:number

    
    public abstract salario(valor:number):number;
    public abstract profissao(cargo:string):string;
}

class Funcionario extends Pessoa {
     
    protected nome: string;
    protected idade: number;

    constructor(nome:string, idade:number){
        super();
        this.nome = nome;
        this.idade =idade;
    }

    get getnome():string{
        return this.nome; 
    }

    get isIdade():number{
        return this.idade;
    }
    

    public salario(valor: number): number {
        return valor;
    }

    public profissao(cargo:string):string{
       return cargo;
    }
}

class Maria extends Funcionario{

}

const maria:Maria  = new Maria("Maria", 23);
console.log(`${maria.getnome} tem ${maria.isIdade}, é ${maria.profissao('Programadora')}`);