window.onload = function() {
    init()   
}




function init(){

    

    let myBtn = document.getElementById("submit")
    let autoFill = document.getElementsByClassName("auto") //unused
    let name = document.getElementById("nome")
    let number = document.getElementById("telemovel")
    let email = document.getElementById("email")
    let user = document.getElementById("user")
    let password = document.getElementById("password")
    let password2 = document.getElementById("password2")

    let form = document.getElementById("myForm")
    

    

    if(password.value == password2.value){
        form.addEventListener("submit", function(event){


            event.preventDefault()

            window.alert("REGISTO EFETUADO COM SUCESSO")
         
    
        
        })

    }
}