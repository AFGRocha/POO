//Variável global que referencia uma função anónima reponsável 
//por apresentar um determinado valor na TextArea

let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}

//Ex 1

class Retangulo{
    
    constructor(largura = 1,altura = 1){
        this.largura = largura
        this.altura = altura
        this._cor = "branco"
    }


    //Getter largura

    get largura(){
        return this._largura
    }

    //Setter largura
    set largura(valor){
        return this._largura = valor
    }

    
     //Getter altura

    get altura(){
        return this._altura
    }

    //Setter altura
    set altura(valor){
        return this._altura = valor
    }

    //Getter cor

    get cor(){
        return this._cor
    }


    getArea(){
        return this.altura * this.largura
    }

    getPer(){
        return 2 * this.altura + 2 * this.largura
    }
}

let ret1 = new Retangulo
let ret2 = new Retangulo(10,5)

function funcA(){

    console.log("----Retangulo 1----")
    //Imprime cada propriedade e o seu resultado na console
    for(let x in ret1){

        console.log(x  + "=" + ret1[x])
    }

    //Imprime a area e perimetro na consola

    console.log("Area: " + ret1.getArea())
    console.log("Perimetro: "+ ret1.getPer())

    console.log("----Retangulo 2----")
    //Imprime cada propriedade e o seu resultado na console
    for(let x in ret2){

        console.log(x  + "=" + ret2[x])
    }

    //Imprime a area e perimetro na consola

    console.log("Area: " + ret2.getArea())
    console.log("Perimetro: "+ ret2.getPer())
}