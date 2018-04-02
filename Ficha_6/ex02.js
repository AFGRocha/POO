window.onload = function() {
    init()   
    
}

function init(){
    //Le os butoes
    let c1 = document.getElementsByClassName("campus1")
    let c2 = document.getElementsByClassName("campus2")
    let c3 = document.getElementsByClassName("campus3")
    let btnTodas = document.getElementById("todas")
    let btnCampus1 = document.getElementById("campus1")
    let btnCampus2 = document.getElementById("campus2")
    let btnCampus3 = document.getElementById("campus3")


    //Mostra em verde todos
    btnTodas.addEventListener("click", function(){

        for( let i = 0; i < c1.length; i++){
            c1[i].style.backgroundColor = "green"
            c1[i].style.visibility = "visible"
        }

        for( let i = 0; i < c2.length; i++){
            c2[i].style.backgroundColor = "green"
            c2[i].style.visibility = "visible"
        }

        for( let i = 0; i < c3.length; i++){
            c3[i].style.backgroundColor = "green"
            c3[i].style.visibility = "visible"
        }

    })

    //Mostra em verde os pertencentes ao Campus1
    btnCampus1.addEventListener("click", function(){

        for( let i = 0; i < c1.length; i++){
            c1[i].style.backgroundColor = "green"
            c1[i].style.visibility = "visible"
        }

        
        for( let i = 0; i < c2.length; i++){
            
            c2[i].style.visibility = "hidden"
        }

        for( let i = 0; i < c3.length; i++){
            c3[i].style.visibility = "hidden"
        }

    })

    //Mostra em verde os pertencentes ao Campus2
    btnCampus2.addEventListener("click", function(){

        for( let i = 0; i < c2.length; i++){
            c2[i].style.backgroundColor = "green"
            c2[i].style.visibility = "visible"
        }

        for( let i = 0; i < c1.length; i++){
            c1[i].style.visibility = "hidden"
        }

        for( let i = 0; i < c3.length; i++){
            c3[i].style.visibility = "hidden"
        }

    })

    //Mostra em verde os pertencentes ao Campus3
    btnCampus3.addEventListener("click", function(){

        for( let i = 0; i < c3.length; i++){
            c3[i].style.backgroundColor = "green"
            c3[i].style.visibility = "visible"
        }

        for( let i = 0; i < c2.length; i++){
            c2[i].style.visibility = "hidden"
        }

        for( let i = 0; i < c1.length; i++){
            c1[i].style.visibility = "hidden"
        }

    })
}