window.onload = function() {
    

    init()   
    
}


function init(){

   
    //Vai buscar os elementos html
    let myBtn = document.getElementById("submit")
    let myBtn2 = document.getElementById("clean")
    let myEmail = document.getElementById("email")
    let myPassword = document.getElementById("password")

 

    //ao clicar no butao submeter
    myBtn.addEventListener("click", function(){

        //Console test
        console.log(myPassword.value.length)
        console.log(myEmail.value.indexOf(".com"))
        
        //Entra no if se o email foi valido
        if (myEmail.value.indexOf(".com") != -1){

            //Se a passa for valida tambem, ativa o alerta
            if (myPassword.value.length >= 7 && myPassword.value.length <= 10 ){
            
                window.alert("PASS#EMAIL");
            }

            //Se nao estiver valida
            else{
                window.alert("Invalid email or password");
            }
        }
//Se nao estiver valido
        else{
            window.alert("Invalid email or password");
        }

    })



    //Clean button
    myBtn2.addEventListener("click", function(){

        myEmail.value = ""
        myPassword.value = ""
       
    })
}