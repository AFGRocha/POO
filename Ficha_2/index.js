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


    function del (element) {
        return element = 3;
      }

    

    let pos = num.findIndex(del)

    let newArray = num.slice(pos,pos)


    for (let i = 0 ; i < newArray.length; i++){
        console.log(num[1]) //Console test
    }
    
}
