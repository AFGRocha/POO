window.onload = function() {
    init()   
    
}


// Paragrafo 


function init(){
let text = document.getElementById("myParagraph") //obtem o paragrafo

console.log(text)

text.innerHTML = "Bem-vindo à minha página!" //Muda o paragrafo on load

let box = document.getElementById("myName") //obtem a caixa de texto

let myBtn = document.getElementById("myButton")

//On click altera o elemento p de id myParagraph
myBtn.addEventListener("click", function(){

    //Se a caixa estiver com texto
    if (box.value != ""){ 
        text.innerHTML = "Bem-vindo " + box.value
    }
    //Se estiver vazia
    else{
        text.innerHTML = "Bem-vindo à minha página!"
    }

})
}



