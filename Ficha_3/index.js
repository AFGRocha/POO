//Retorna o valor para a caixa de texto
let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}



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
    
}