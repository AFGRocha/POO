//Variável global que referencia uma função anónima reponsável 
//por apresentar um determinado valor na TextArea

let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}


//Funçao que conta o tamanho do objeto
function objCounter(obj){
    let count = Object.keys(obj).length;

    show(" ")
    show("Tamanho do objeto: "+ count)
   }


//Ex.A

let student = {
    name: "David Silva",
    course: "POO",
    grade: 12
   } 
   
   function funcA(){

    show("Ex A: ")
    show("Nome das propriedades: ")
    let prop = ""
    //Percorre o objecto
    for (let x in student){

     prop = x   
     console.log(prop)
     show(prop) //imprime cada propriedade do objeto
    }

    objCounter(student)

    //Delete grade prop

    delete student.grade
    show(" ")
    show("Após eliminar grade: ")

 //Percorre o objecto
 for (let x in student){

    prop = x   
    show(prop) //imprime cada propriedade do objeto
   }
    
   objCounter(student)
   }

//Ex.B

let grades = [
    {
    name: 'Rui',
    grade: 8
    },
    {
    name: 'Ana',
    grade: 12
    },
    {
    name: 'Carla',
    grade: 14 
    }]

    //Funçao criadora 

    function Grades(nome,nota){

        this.name = nome
        this.grade = parseInt(nota)
    }


    function funcB(){


        //let newStudent = new Grades(prompt("Indique o nome do aluno"),prompt("Indique a nota do mesmo"))

       let newStudent = {
            name : prompt("Indique o nome do aluno"),
            grade: parseInt(prompt("Indique a nota do mesmo"))
        }
       
       
       console.log(newStudent)

       grades.push(newStudent) 

       console.log(grades)

       show("B: ")
       // show("Array com o novo objeto: " + grades)

        let total = 0

        for(let i = 0; i < grades.length; i++){
            total = total + grades[i].grade
        }

        let media =  total/ grades.length

        show(" ")
        show("Media das notas: "+ media)
        show(" ")
        show("Alunos com nota positiva:")

        for(let i = 0; i < grades.length; i++){
            if (grades[i].grade >=10){
                show(grades[i].name)
            }
        }
    }


    //Ex C
    //Funçao que cria objetos do tipo Carro
    function Car(marca,matricula,cor,deposito,combustivel){

      this.brand = marca
      this.plate = matricula
      this.color = cor
      this.tank = deposito
      this.fuel = combustivel
    }
    
    function kilo(km){
        let ratio = (km + 51) / 100
        return ratio
    }

    function funcC(){

        let Car1 = new Car("Ford", "91-GH-15", "verde", 40, "Gasóleo")
        let Car2 = new Car("Opel", "23-AB-23", "branco", 50, "Gasolina")

        Car1.color = prompt("Nova cor do Ford: ")
        Car2.color = prompt("Nova cor do Opel: ")

        console.log(Car1)
        console.log(Car2)

        let kilometro = parseInt(prompt("Kilomentros percorridos:"))

        let teste = kilo(kilometro)

        Car1.wasted = teste;

        console.log(Car1)
    }


   