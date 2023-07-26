
/* 
    Type alias, em TypeScript, é uma forma de criar um nome alternativo para 
    um tipo existente. Ele é útil para melhorar a legibilidade do código e fornecer 
    uma maneira de reutilizar tipos complexos em várias partes do código.
    Você pode usar type alias em várias situações:

*/

/* 
    Tipos Complexos: Quando você possui tipos complexos que são usados
     em várias partes do código, um type alias pode ser útil para reduzir 
    a repetição e facilitar a manutenção. Por exemplo:
*/

type Coordenadas = [ number , number ];
function coordenada(coordenada:Coordenadas){
    console.log(`Latitude: ${coordenada[0]}, Longitude: ${coordenada[1]}`);
}
type listPupil = Array< number | string | boolean>; 
type Objecto = { nome:string, idade:number } | [string , boolean]

let nobje:Objecto = ['', true]
coordenada([2,3]);

/* 
    União de Tipos: Quando você precisa criar uma união de tipos, pode utilizar 
    um type alias para tornar o código mais claro:
*/

type Resultado = number | string | boolean;

function multiplicar(x:number , y?:number): Resultado{
    let soma = x + y!; 
    if(!soma) return false;
    return true
}

console.log(multiplicar(2,3));

/* 
    Objetos com estruturas repetitivas: Se você precisa criar objetos com estruturas 
    repetitivas, um type alias pode ser útil para evitar duplica
*/

type Usuario = {
    nome:string,
    idade:number,
    email:string
}

function exibirUsuario(usuario:Usuario){
    console.log(usuario.idade)
}