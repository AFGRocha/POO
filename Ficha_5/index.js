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



//Ex 2



class Circle{

    constructor(raio){
        this.raio = raio
    }

    //Get e set do raio

    get raio(){
        return this._raio
    }

    set raio(value){
        return this._raio = value
    }


    getArea(){
        return this.raio + this.raio + 3.14
    }

    getPer(){
        return 2 * 3.14 * this.raio
    }

    incRaio(value){
        return this._raio + (this._raio * (value/100))
    }

}

function funcB(){

    let circ = new Circle(prompt("Indique o raio:"))

    show("Raio: " + circ.raio )
    show("Area: " + circ.getArea())
    show("Circunferencia: " + circ.getPer())
    
    let teste = circ.incRaio(prompt("Diga: "))

    circ.raio = parseFloat(teste)

    show("Novo raio " + circ.raio)
}


//Ex 3


const VELOCIDADE = {
    BAIXA: 1,
    MEDIA: 2,
    ALTA: 3
}


class Ventoinha{
    constructor(){
        this.velocidade = VELOCIDADE.BAIXA
        this.ligada = false

    }


    get ligada(){
        return this._ligada
    }

    set ligada(valor){
        this._ligada = valor

    }

    toString(){
        if(this.ligada){
            return "A ventoinha está ligada com velocidade " + this.velocidade
        }

        else{
            return " A ventoinha está desligada"
        }
    }

}

let minhaVentoinha1 = new Ventoinha()
let minhaVentoinha2 = new Ventoinha()

function funcC(){

    console.log(minhaVentoinha1)
    

    let teste = minhaVentoinha1.toString()

    console.log(teste)

    minhaVentoinha2.ligada = true
    minhaVentoinha2.velocidade = VELOCIDADE.MEDIA

    teste = minhaVentoinha2.toString()
    console.log(minhaVentoinha2)
    console.log(teste)
    

}