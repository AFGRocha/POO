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


//Ex 4



class Dado{

    constructor(){
        this.valorFace = 1
        this._faces = 6
    }


    //Get e Set do valorFace

    get valorFace(){
        return this._valorFace
    }

    set valorFace(valor){
        if (valor <= this._faces && valor > 0){
            this._valorFace = valor

        }
        else {
            console.log("Valor inválido para a face do dado")
        }   
    }

    //Rodar o dado
    rodar(){
        // Gerar nº aleatório entre 1 e 6 (o numero de faces)
       this._valorFace = parseInt((Math.random() * (this._faces - 1)) + 1)

       console.log(this.valorFace)

       return this._valorFace
    }

    //Retorna o numero de faces
    getQuantidadeFaces() {
        return this._faces
    }
}


let meuDado = new Dado()

function funcD(){

    let novaFace = meuDado.rodar()

  console.log(novaFace)
  console.log(meuDado.getQuantidadeFaces())
    
}


//Ex 5


class Pais{

    constructor(nome,populacao,area){
        this.nome = nome
        this.populacao = populacao
        this.area = area
    }

      // Propriedade NOME
      get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }

    // Propriedade POPULACAO
    get populacao() {
        return this._populacao
    }
    set populacao(novaPopulacao) {
        this._populacao = novaPopulacao
    }

    // Propriedade AREA
    get area() {
        return this._area
    }
    set area(novaArea) {
        this._area = novaArea
    }

    static maiorArea(){
            let area = 0
            let nomePais = ""

            for(let i = 0; i < paises.length;i++){

                if (area < paises[i].area){
                    area = paises[i].area
                    nomePais= paises[i].nome
                }
            }

            return nomePais
    }

    static maiorPopulacao(){

        let popu = 0
        let nomePais = ""

        
        for(let i = 0; i < paises.length;i++){

            if (popu< paises[i].populacao){
                popu = paises[i].populacao
                nomePais= paises[i].nome
            }
        }

        return nomePais
    }

}

let paises = []

let meuPais1 = new Pais("Portugal",1032000000,92212)
let meuPais2 = new Pais("Azerbaijão",9762000000,86600)
let meuPais3 = new Pais("Armenia",2925000000,29743)
let meuPais4 = new Pais("Georgia",1043000000,69700)
let meuPais5 = new Pais("Uzbequistão",3185000000,447400)

paises.push(meuPais1, meuPais2, meuPais3, meuPais4, meuPais5)


function funcE(){

   paises.sort()

   console.log(paises)
}
