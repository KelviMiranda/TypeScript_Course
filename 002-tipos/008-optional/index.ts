

const fnoptional = (nome:string, idade?:number) =>
{
    if(!idade){
        return `nome:${nome}, idade:sem valor definido`;
    }

    return `nome: ${nome}, idade: ${idade}`;
}


type Pessoa = {
    nome: string;
    idade?: number; // A propriedade "idade" é opcional
  };
  
  const pessoa1: Pessoa = { nome: "Alice" }; // Válido, "idade" é opcional
  const pessoa2: Pessoa = { nome: "Bob", idade: 30 }; // Válido, "idade" é opcional
  
  console.log(fnoptional("Denner", 30));
  console.log(fnoptional("kelvin",))
  console.log(pessoa1);