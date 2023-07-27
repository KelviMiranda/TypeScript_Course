
/*  
    Herança: É quando uma subclasse ou classe filha herda as características e os 
    comportamento de Super classe ou classe pai 
*/

/* 
    O uso mais comum da palavra-chave "super" é no construtor da classe filha. 
    Quando a classe filha tem seu próprio construtor, geralmente é necessário chamar 
    o construtor da classe pai antes de realizar as inicializações específicas 
    da classe filha. Isso garante que tanto a classe pai 
    quanto a classe filha inicializem suas próprias propriedades corretamente.
    Para fazer isso, você utiliza o "super()" no construtor da classe filha: 
*/


/* 
    

*/
class Pessoa{
   private _nome: string;
   public idade:number;
   protected hasProfession:boolean;

    constructor(nome:string, idade:number, hasProfession:boolean){
        this._nome = nome,
        this.idade = idade;
        this.hasProfession = hasProfession;
    }

    public comer(comida:string):string{
        return `O ${this._nome} comeu ${comida}`;
    }

    public  fazerAniversario():string {
        return `O ${this._nome} fez ${++this.idade}`
    }
}


class Funcionario extends Pessoa {
    constructor(name:string, age:number, hasProfession:boolean){
        super(name, age, hasProfession);

        if(name === "Denner"){
            console.log(`O funcionário é programador`)
        }
    }
}

const funcionario:Funcionario = new Funcionario("Dener", 21, true);
console.log(funcionario)
