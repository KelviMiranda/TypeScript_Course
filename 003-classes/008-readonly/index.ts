/* 
    A palavra-chave "readonly" em TypeScript é usada para definir propriedades de uma classe que não podem ser modificadas após sua inicialização. Quando você declara uma propriedade como "readonly", 
    ela só pode ser definida uma vez, normalmente no momento em que a instância da classe é criada ou no construtor da classe.
    Em outras palavras, uma vez que uma propriedade é definida com a palavra-chave "readonly", ela se torna imutável e não pode ser alterada posteriormente durante a vida útil da instância da classe.
*/

class Pessoa{
    public readonly nome:string = "Denner Truquate";
}

const pessoa:Pessoa = new Pessoa();
console.log(pessoa.nome);
