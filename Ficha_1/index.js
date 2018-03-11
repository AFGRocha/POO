//Ex.A
function hello() {
    console.log("Olá Mundo")
}

//Ex.B

function nome() {
    let nome = "Zé"
    console.log("Olá " + nome)
}

//Ex.C

function area(){
    let area = 2 * 3
    console.log(area)
}

//Ex.D
function mat(){
    let num = prompt("Escreva um numero:")
    let calc = prompt("Operação que pretende realizar:")
    let num2 = prompt("Escreva o segundo número:")

    switch(calc){
    case "+": console.log(parseInt(num) + parseInt(num2)); break
    case "-": console.log(parseInt(num) - parseInt(num2)); break
    case "/": console.log(parseInt(num) / parseInt(num2)); break
    case "*": console.log(parseInt(num) * parseInt(num2)); break
    default: console.log("Não indicou uma operação correta.")
    }
}


//Ex.E
function imc(){
    let peso = prompt("Indique o seu peso:")
    let altura = prompt("Indique a sua altura em metros:")

    console.log(parseFloat(peso)/(parseFloat(altura)*parseFloat(altura)))
}

//Ex.F

function eco(){
    let word = prompt("Escreva uma palavra:")
    let num = parseInt(prompt("Escreva o número de vezes que quer:"))

    for (let i = 0; i < num; i++ ){
        console.log(word)
    }
}

//Ex.G

function intervalo(){
    let num1 = parseInt(prompt("Escreva o primeiro número:"))
    let num2 = parseInt(prompt("Escreva o segundo número:"))

    if (num1 > num2)
    {
        console.log("O primeiro número é maior que o segundo, logo é impossivel escrever o intervalo")
    }
    for( let i = num1; i <= num2; i++){
    console.log(i)
    }
}

//Ex.H

function tabuada(){
    let num = parseInt(prompt("Indique o número:"))

    for ( let i = 1; i <= 10; i++){

        console.log(num*i)
    }
}

//Ex.I
    function num3(){  
            let n1 = parseInt(prompt("Escreva o 1º número?"))
            let n2 = parseInt(prompt("Escreva o 2º número?"))
            let result = 0
            for (let i=n1; i<=n2;i++) {
                if(i % 3 == 0) {
                    result = result + i
                }        
            }
            console.log("Resultado da soma dos múltiplos de 3: " + result)
    }

//Ex.J

function primo(){

    let num = parseInt(prompt("Indique o número:"))
    let primo = true
    for( let i = 2; i < num; i++){
        if(num % i == 0)
        {
            primo = false
    
        }
    }

    if (primo == true){
        console.log("SIM")
    }

    else if (primo == false){
        console.log("NÃO")
    }

}

//Ex.K

function fatorial(){

    let num = parseInt(prompt("Indique o número:"))
    let result = num

    for(let i = num-1; i > 0; i--){
        result = result*i
    }

    console.log(result)
}


//Ex.L

function perfeito(){

    let num = parseInt(prompt("Indique o número"))
    let result = 0

    for ( let i = 1; i<num;i++ ){

        if (num % i == 0){
            result = result + i
        }
    }   

    if(result == num){
        console.log("SIM")
        console.log(result)
    }

    else{
        console.log("NÃO")
        console.log(result)
    }
}

//Ex.M

function ano(){

     num = parseInt(prompt("Indique o número:"))

     if ( num % 4 == 0 && num%100 != 0){
         console.log("É bissexto")
     }

     else{
         console.log("Não é bissexto")
     }
}


//Ex.N

function capicua(){

    let num = prompt("Indique o número:")
    let result = ""

    for ( let i = num.length-1; i >= 0 ; i--){

        result = result + num.substring(i,i+1)
       
    }

    console.log(result)
    
    if (num == result){
        console.log("É uma capicua")
    }

    else{
        console.log("Não é uma capicua")
    }
}


//Ex.O
function random(){
   // Gerar nº aleatório entre 1 e 100
   let num = parseInt((Math.random() * 99) + 1)
   console.log("Numero:"+num)
   let attempts = 1
   let num2 = parseInt(prompt("Indique o número"))

   
   while (attempts < 10){
    if (num2 < num){

        attempts++
        console.log("MAIOR")
        
    }

    else if (num2 > num){
        attempts++
        console.log("MENOR")
    }

    else if ( num2 == num){
        console.log("Acertou!")
        break;
    }

    num2 = parseInt(prompt("Indique o número"))


  }

  if (attempts == 10){
      console.log("Game over")
  }

  else{
      console.log("Acabou, clique no butão para jogar outra vez")
  }
}
 
