//Variável global que referencia uma função anónima reponsável 
//por apresentar um determinado valor na TextArea

let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}



