

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
    let num2 = parseInt(prompt("Escreva o primeiro número:"))

    if (num1 > num2)
    {
        console.log("O primeiro número é maior que o segundo, logo é impossivel escrever o intervalo")
    }
    for( let i = num1; i <= num2; i++){
    console.log(i)
    }
    
}
