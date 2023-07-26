/* Union type 
    é um recurso que permite que uma variável, parâmetro de função ou propriedade 
    de objeto possa aceitar valores de diferentes tipos. Com union types, você pode declarar explicitamente que uma variável 
    pode conter um valor de um tipo específico ou de outro tipo específico.
*/

function func(valor: string | boolean): string | boolean{
    return true
}

let idade:string | number
    idade = '20';
    idade = 30;

console.log(func('Denner'));
console.log(idade);