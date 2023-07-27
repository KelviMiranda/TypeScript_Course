/* 
    A palavra chave static define um método estático para classe.
    Métodos estáticos não são chamados na instância da classe.
    Em vez disso, eles são chamados na própria classe.
    Geralmente são funcões utilitárias , como fuções para criar ou clonar objectos.
*/

// não precisamos intânciar uma classe , para o uso do método statics

class Utils {   
    static cloneObject(object:Array <{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)))
    }
}

class Pessao{
    public pessoas(){
        Utils.cloneObject([{nome:String , idade:Boolean}])
    }
}
/* const utils:Utils = new Utils();  intância anulada porque o metodo é static*/

const tenis1:{tamanho:number, estoque:boolean} = {
    tamanho:41,
    estoque:true
}

const tenis2:{tamnho:number, estoque:boolean} = {
    tamnho:34,
    estoque:true
}

console.log(Utils.cloneObject([tenis1, tenis2]));