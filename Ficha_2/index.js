//Variável global que referencia uma função anónima reponsável 
//por apresentar um determinado valor na TextArea

let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}



//Arrays
let num = [7,3,6,12,5] 
let cor = ["Vermelho", "Verde", "Branco", "Preto"] 

//Ex.A

function media(){

    let total = 0
    //Calcula a soma dos elementos
    for (let i = 0; i < num.length; i++){
        total = total + num[i]
    }

    //Calcula a media
    let result = total / num.length

    console.log(total)
    console.log(result)

    show("A -> " + result)
}


//Ex.B

function menor(){


    let menor = num[0] //Iguala ao primeiro elemento

    //Ciclo que pecorre o array
    for ( let i = 0; i < num.length; i++){

        if (menor > num[i]){
            menor = num[i] //iguala ao elemento menor
        }
        console.log(menor) //Console test
    }

    show("B -> " + menor)
}


//Ex.C 


function remover(){

    let del = 3
    let newArray = []

    
    for (let i = 0 ; i < num.length; i++){
    
        if (num[i] == del){

        }

        else{
            newArray.push(num[i])
        }

    }

    show("C -> " + newArray)
    
}


//Ex.D

function conc(){

    let result = ""
    //Pecorre o array
    for (let i = 0; i < cor.length; i++){

       result = result + " " + cor[i] //cocatena o array
    }

    show("D -> " + result)
}


//Ex.E

function order(){

    cor.sort() //oderna alfabeticamente

    console.log(cor) //console test

    show("E - > " + cor) //mostra o array
}

//Ex.F

function inverter(){

    cor.reverse()

    console.log(cor) //console test

    show("F - > " + cor) //mostra o array
}

//Ex.G
function maior(){

    let word = ""

    for( let i = 0; i < cor.length;i++){

        if (word.length < cor[i].length){
            word = cor[i]
        }

    }

    show("G - > " + word) //mostra a palavra
}

//Ex.H

function stringS(){

    let palavra = "Vermelho"
    let counter = 0

    for (let i = 0; i < cor.length; i++){

        //Compara a palavra aos elementos de array e aumenta 1 se encontrar
        if(palavra == cor[i]){

            counter++
        }

    }

    show("H - > " + counter) //mostra o número de vezes
}

//Ex.I

function pass(){

    
        let password = [prompt("Indique a password:"),prompt("Indique password novamente:")]
    

        if (password[0] == password[1]){

            show("I - > " + 1)
        }

        else{

            show("I - > " + 0)
        }
}


//Ex J

function seek(){

    let numP = parseInt(prompt("Indique o número:"))

    show("J - > "+ cor[numP])


}

//Ex K

function add(){

    let numN = parseInt(prompt("Indique o número:"))

    let array1 = []

    for(let i = 1; i <= numN; i++){
        array1.push(i)
    }

    show("K - >"+ array1)
}


//Ex.L
function par(){

    let arrayPar = []
 
    for(let i = 0 ; i < num.length; i++){

        if (num[i] % 2 == 0){
            
            arrayPar.push(num[i])
        }
    }

    console.log(num)
    console.log(arrayPar)
    show("L - > "+ arrayPar)
}



//Ex.M
function maisUm(){

    let array2 = []
 
    for(let i = 0 ; i < num.length; i++){

            
     array2.push(num[i]+1)
        
    }

    console.log(num)
    console.log(array2)
    show("M - > "+ array2)
}

//Ex.N
function somar(){

    let array1 = [1,2,3,4,5]
    let array2 = [6,7,8,9,10]
    let array3 = []

    for (let i = 0; i < array1.length; i++){

        array3[i] = array1[i] + array2[i]

    }

    show("N - > "+ array3)
}
