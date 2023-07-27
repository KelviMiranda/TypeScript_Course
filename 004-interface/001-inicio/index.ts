/* 
    Interfaces Typescript definem os contratos em seu código.
    Eles também fornece nomes explícitos para verificação de tipo;

*/

interface IPessoa {
    nome:string,
    idade?:number
    readonly cpf:number,

    enabled():boolean | string | number;
}


class Joao implements IPessoa {
    nome: string;
    idade?: number;
    cpf: number;
    enabled(){
        if(this.age == null){
            console.log('Você não passou a idade , não tens direito a cpf');
        }
        return `O seu cpf é ${this.getcpf}`;
    }
    
    constructor(nome:string, cpf:number, idade?:number){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    get age():number{
        return this.idade!;
    }

    get getcpf():number{
        return this.cpf;
    }
}

let maria:IPessoa = {
    nome: "Denner",
    idade: 20,
    cpf: 1111,

    enabled: function (){
        return true
    }
}

const joao:IPessoa = new Joao("Dener", 112334);

console.log(maria.nome + maria.enabled());
console.log(joao.enabled());