/* let dados1: string | number | boolean;
let dados2: string | number | boolean;
 */

/* type alias  
    Em resumo, o type alias em TypeScript é uma ferramenta poderosa 
    para criar nomes personalizados para tipos existentes ou complexos, 
    visando tornar o código mais legível, manutenível e 
    facilitar a reutilização de definições de tipos em várias partes do projeto.
*/

type alphanumeric = string | number | boolean;

let dados1: alphanumeric;
let dados2: alphanumeric;

type Coordenada = {
  x: number;
  y: number;
  z:string
};

function imprimirCoordenada(coord: Coordenada) {
  console.log(`Coordenada X: ${coord.x}, Coordenada Y: ${coord.y}`);
}

const ponto: Coordenada = { x: 10, y: 20 , z:'C'};
imprimirCoordenada(ponto); // Saída: Coordenada X: 10, Coordenada Y: 20
