
/* 
    O método acessadore ou getter : permitem buscar o valor de uma propriedade da classse
    O método modificador ou setter : permite modificar o valor de uma propriedade da classe

    os métodos getter e setter :São usados para proteger seus dados, especialmente na criação
    de classe 
    
    para cada instância o getter retorna o seu valor , o setter modifica ou atualiza o seu valor
*/

class Pessoa {
    protected _name:string;
    protected _age:number;
    protected _hasProfissional:boolean;

    constructor(name:string, age:number, hasProfessional:boolean){
        this._name = name;
        this._age = age;
        this._hasProfissional = hasProfessional;
    }

    get name():string{
        return this._name
    }

    set name(name:string){
        this._name = name;
    }

    get age():number{
        return this._age;
    }

    set age(age:number){
        this._age = age;
    }

    get hasProfession():boolean{
        return this._hasProfissional;
    }

    set hasProfession(hasProfession:boolean){
        hasProfession? this._hasProfissional = hasProfession: 'Você não é profissional';
    }

    public comer(comida:string):string{
        return `O ${this.name} comeu ${comida}`;
    }

    public fazAniversario():string{
        return `O ${this.name} fez ${++this.age} de idade`;
    }
}

class Funcionario extends Pessoa{

    private _jobs!:string;
    constructor(name:string, age:number, hasProfession:boolean){
        super(name, age, hasProfession);
        this._jobs = 'Prgramador'
    }

    get jobs():string{
        if(!this.hasProfession){
            console.log('Ele não é profissional');
        } return `Ele é profissional na área de ${this._jobs}`;
    }

    set jobs(job:string){
        this._jobs = job;
    }

    
}

let cont:number = 0;
const funcionario:Funcionario[] = [ new Funcionario ('Denner', 33, true), new Funcionario ("Kelvin", 28, false)];

console.log(`O ${funcionario[0].name}, ${funcionario[0].jobs}, ${funcionario[1].name}, ${funcionario[1].name} ${funcionario[1].jobs}`);
