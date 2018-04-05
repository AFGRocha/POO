//Retorna o valor para a caixa de texto
let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}


//Double Git Rep Test

//Ex.A

function funcA(){

    //Recebe a string
    let text = prompt("Indique a palavra:")
    //Comprava o tamanho da string
    let comp = text.length

    show("A: " + comp)
}

//Ex.B

function funcB(){

    //Recebe as strings
    let name = prompt("Primeiro Nome:")
    let lastName = prompt("Apelido: ")

    show("B -> " + lastName + ", " + name)
}

//Ex.C

function funcC(){

    let counter = 0
    let word = prompt("Indique a palavra")

    for (let i = 0; i < word.length; i++){
        let letter = word.substring(i,i+1)

        if (letter == "a" || letter == "A" || letter == "e"  || letter == "E" || letter == "i" || letter == "I" || letter == "o" || letter == "O" || letter == "u" || letter == "U") 
        {
            counter++
        }
    }

    show("C - > "+ counter)
}


//Ex,D

function funcD(){
    let phrase = "Ola tudo bem oi e"
    let wordCount = 0
    let find
    
    //Percorre o string
    while (find != -1){

        find = parseInt( phrase.indexOf(" "))
        phrase = phrase.substring(find + 1,phrase.length) //rescreve o array sem a nova palavra encontrada
        wordCount++ //aumenta o numero de palavras
        
    }

    show("D - > "+ wordCount)
 
}

//ex E

function funcE(){

    let word = prompt("Indique uma palavra:")
    let reverse = ""

    
    //Percorre a string e inverte
    for(let i = word.length - 1; i >= 0; i--){

        reverse = reverse + word[i]
    }

    show("E - > "+ reverse)

}

//Ex F

function funcF(){

    let word = prompt("Indique uma palavra:")
    let chara = prompt("Indique uma letra dessa palavra")
    let newWord = ""

    //Se a letra estiver na palavra
    if (word.indexOf(chara) != -1){
        //Percorre a string 
        for(let i = 0; i < word.length; i++){


            //Quando encontra a letra na string não copia
            if(word[i] == chara){
    
            }
             
            //Copia as letras para o novo string
            else {
            newWord = newWord + word[i] 
            }
            
        }

        show("F - > "+ newWord)
    }

    else{
        show("F - > essa letra não se encontra não se encontra na palavra")
    }

}

//Outra forma para o F
function funcF2(){

    let word = prompt("Indique uma palavra:")
    let chara = prompt("Indique uma letra dessa palavra")
    let finder = word.indexOf("chara")

    if (word.indexOf(chara) != -1){

        word = word.substring(0,finder) + word.substring(finder+1, word.length-1)

        show("F - > "+ word)
    }

    else{
        show("F - > essa letra não se encontra não se encontra na palavra")
    }
}


//Ex G

function funcG(){

    //Variaveis
    let num = 8053
    //Calculo das horas
    let horasTotal = (num / 60) / 60
    //Converte horas apenas as unidades
    let intHoras = parseInt(horasTotal)
    //Calculo dos minutos
    let minutosTotal = (horasTotal - intHoras) * 60
    //Converte os minutos apenas as unidades
    let intMinutos = parseInt(minutosTotal)
    //Calculo dos segundos restantes
    let segundos = (minutosTotal - intMinutos) * 60
     //Converte os segundos apenas as unidades
    let intSec = parseInt(segundos)

    let str = "Horas: " + intHoras +";" + " Minutos: " +  intMinutos + ";" + " Segundos: " + intSec + ";"

    console.log(str)

}

//Ex H
function funcH(){


    let min =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

    let mai =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];



    let word = prompt("Indique a palavra a encriptar:")
    let newWord = "";
    let finderMin
    let finderMai

    for(let i = 0; i < word.length;i++){

        finderMin = min.indexOf(word[i])
        finderMai = mai.indexOf(word[i])

        if( finderMin != -1){

            newWord = newWord + min[finderMin+3]
        }

        else if( finderMin == -1){
            continue
        }

        if( finderMai != -1){

            newWord = newWord + min[finderMai+3]
        }

        else if( finderMai == -1){
            continue
        }
        
    }
    
    show("H - > "+ newWord)
}



