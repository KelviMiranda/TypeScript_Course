/* 
    string literal types" (ou "tipos literais de string") são um recurso 
    que permite definir um tipo para uma string com um valor específico e literal, 
    em vez de apenas um tipo geral de string. Isso significa que você pode 
    restringir um valor de string para que ele seja aceito apenas se 
    corresponder exatamente a uma sequência de caracteres específica.
*/

let cor: 'red' | 'black' | 'blue';
cor = 'red';
cor = 'black';

let prato:'sushi';
prato = 'sushi';

console.log(prato);
console.log(cor);