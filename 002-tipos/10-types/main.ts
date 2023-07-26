/* 
    Em TypeScript, existem vários tipos pré-definidos que podem ser usados para declarar o tipo de uma variável, parâmetro de função, valor de retorno ou qualquer outro elemento do código. Aqui estão alguns dos tipos mais comuns:

number: Representa números, tanto inteiros quanto de ponto flutuante.

string: Representa sequências de caracteres (texto).

boolean: Representa valores verdadeiro (true) ou falso (false).

array: Representa uma coleção de elementos do mesmo tipo, utilizando a sintaxe tipo[] ou Array<tipo>.

tuple: É uma coleção de elementos de tipos diferentes, onde a ordem importa. Por exemplo: [string, number].

enum: Permite definir um conjunto de constantes nomeadas com valores associados. Exemplo:

*/

enum DayWeek {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
  }
  
  /* 
    any: Permite que a variável aceite qualquer tipo de valor. É útil quando você não tem certeza do tipo de dado que será armazenado.

void: É o oposto do tipo any, usado principalmente para indicar que uma função não retorna nenhum valor.

object: Representa qualquer valor não primitivo, ou seja, valores que não são do tipo number, string, boolean, symbol, null ou undefined.

null e undefined: São tipos que representam os valores nulos ou indefinidos, respectivamente.

union types: Permite combinar vários tipos em um único tipo. Por exemplo: number | string indica que a variável pode ser do tipo number ou do tipo string.

intersection types: Permite combinar vários tipos em um único tipo, representando a sobreposição desses tipos. Por exemplo: TipoA & TipoB indica que a variável deve ser compatível com ambos os tipos TipoA e TipoB.

Esses são apenas alguns dos tipos básicos em TypeScript. Além disso, você também pode criar seus próprios tipos personalizados usando interfaces, types e classes para descrever a forma dos objetos de acordo com suas necessidades.
  
  */

// Tipos básicos
let age: number = 30;
let nome: string = "João";
let ehAdulto: boolean = true;

// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Tupla
let coordenadas: [number, number] = [10, 20];

// Enum
let diaHoje: DiasDaSemana = DiasDaSemana.Segunda;

// Qualquer tipo
let variavelQualquer: any = "qualquer coisa";

// Função que não retorna valor (void)
function exibirMensagem(): void {
  console.log("Essa função não retorna nada.");
}

// Union types
let numeroOuString: number | string = 42;
numeroOuString = "quarenta e dois";

// Intersection types
interface Carro {
  marca: string;
}

interface Motor {
  potencia: number;
}

type CarroComMotor = Carro & Motor;

let meuCarro: CarroComMotor = {
  marca: "Toyota",
  potencia: 200,
};
