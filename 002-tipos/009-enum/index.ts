/* 
    Enum, abreviação de "enumeration" (enumeração) em TypeScript, é um tipo de dado que permite definir um conjunto de constantes nomeadas com valores inteiros associados. As enumerações são úteis quando você precisa representar um conjunto limitado de 
    opções ou estados no seu código de forma mais legível e semântica.
*/

enum Mes {
  Jan = "Janeiro",
  Fev = "Fevereiro",
  Mar = "Março",
}

const pessoa: { nome: string; mesAniversario: string } = {
  nome: "Kelvin",
  mesAniversario: Mes.Jan,
};

/* 
    Neste exemplo, a enumeração DiasDaSemana é criada com sete constantes nomeadas representando os dias da semana. Por padrão, as constantes têm valores numéricos crescentes começando de 0, 
    mas você também pode atribuir valores específicos 
*/

enum DiasDaSemana {
  Domingo, // Valor 0
  Segunda, // Valor 1
  Terca, // Valor 2
  Quarta, // Valor 3
  Quinta, // Valor 4
  Sexta, // Valor 5
  Sabado, // Valor 6
}

enum Cores {
  Vermelho = 1,
  Verde = 2,
  Azul = 4,
}

let dia: DiasDaSemana = DiasDaSemana.Segunda;
console.log(dia); // Saída: 1 (o valor associado a DiasDaSemana.Segunda)

let color: Cores = Cores.Verde;

let diaNumero: number = DiasDaSemana.Terca;
let diaNome: string = DiasDaSemana[2];

console.log(diaNumero); // Saída: 2
console.log(diaNome);   // Saída: "Terca"


console.log(cor); // Saída: 2 (o valor associado a Cores.Verde)
console.log(pessoa);

/* 
    Enumerações são úteis quando você precisa lidar com 
    opções ou estados específicos no código, evitando o uso 
    de números mágicos ou strings literais, tornando o código 
    mais legível e menos propenso a erros de digitação.
*/

    /* 
        Em resumo, enumerações são uma forma útil de criar um conjunto
         nomeado de constantes com valores associados em TypeScript, 
        tornando o código mais expressivo e fácil de entender.
    */