/* Arrays e Objectos  */

let array1:[string, string, number ] = ["Denner", "Truquate", 123];/* tupla  */
let array2:string [] = ["Kelvin Miranda", "Denner"];
let array3:Array< string | number | boolean > = ["kelvin", 1234, true];


let object1:/* um objecto apenas */
{nome:string, sobrenome:string, deubom:boolean, idade:number} = {
    nome:"Denner", sobrenome:"Truquate", deubom:true, idade:20 /* OBJECTODO TIPO ANY */
}


let object2 /* lista de objectos */:Array<{nome:string, sobrenome:string, deubom:boolean, idade:number} > = 
[
    {
        nome:"Denner2", sobrenome:"Truquate2", deubom:true, idade:23 
    },
    {
        nome:"Kelvin", sobrenome:"Miranda", deubom:false, idade:30 
    }
]

console.log(array1);
console.log(array2);
console.log(array3);
console.log(object1);
console.log(object2);