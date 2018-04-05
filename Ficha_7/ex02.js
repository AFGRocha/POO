window.onload = function() {
   
    //Esta opçao permite alterar o maximo de escolha no html, abaixo tem outra feita para limitar por javascript

    
   let data = document.getElementById("bday")

   //buscar o dia de hoje completo
   let fullDate = new Date()
   //Retirar apenas o dia e converter para string
   let day = fullDate.getDate() - 1
   let dayTable = day.toString()
    //If porque JS devolve "1" e html precisa de 01
   if(dayTable.length == 1){
       dayTable = 0 + dayTable
   }
   
   //Retirar apenas o mes e converter para string
   let month = fullDate.getMonth() + 1 // Porque janeiro começa em 0
   let monthTable = month.toString()

   //Este if repete a mesma logica, pode ser feito uma funçao
   if(monthTable.length == 1){
    monthTable = 0 + monthTable
   }


   //Devolve o ano 
   let year = fullDate.getFullYear()
   // formata a data inteira de forma a que o html consiga ler
   let today = year + "-" + monthTable + "-" + dayTable

   
   //console.log(today)
   
   
   data.max = today
   

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
    let bday = document.getElementById("bday")
    let form = document.getElementById("myForm")
    

        //Forma de comparar datas apenar por javascript
        // Verificar se a data selecionada não é superior à data atual
        // Date.parse() recebe uma data e converte para milissegundos (desde 1 de janeiro de 1970 até a essa data)
        /*        
        let dataNasc = Date.parse(bday.value)
        let dataAtual = Date.parse(Date())
        Resto da logica esta no if */
        
        form.addEventListener("submit", function(event){

            event.preventDefault()

            if(password.value == password2.value /* && dataNasc < dataAtual */)    { 
                
        
                    window.alert("REGISTO EFETUADO COM SUCESSO")
            }
            else{
                window.alert("Verifique a pass e a data")
            }
            
         
    
        
        })   

   
}