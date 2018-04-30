
window.onload = function(){



    //Verificação do ano atual

    let frmYear = document.getElementById("inputYear")

    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()

    frmYear.max = currentYear - 1

    console.log(frmYear)

    //Fim do Controlo do ano atual 
    
    


    //Class Personalidades

    class Personalities {

        constructor(name,year,nationality,work,photo){
            this.name = name
            this.year = year
            this.nationality = nationality
            this.work = work
            this.photo = photo
        }


    // Property Name
    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName        
    }

    // Year property
    get year() {
        return this._year
    }
    set year(newYear) {
        this._year = newYear
    }

    // Nacionality property
    get nacionality() {
        return this._nacionality
    }
    set nacionality(newNacionality) {
        this._nacionality = newNacionality
    }

    // Work property
    get work() {
        return this._work
    }
    set work(newWork) {
        this._work = newWork
    }

    // Photo property
    get photo() {
        return this._photo
    }
    set photo(newPhoto) {
        this._photo = newPhoto
    }

    }



    //Tabela 
    let table = document.getElementById("tblPer")
    let delBtn = document.getElementById("delete")

    function tabela(){
        
        //Clear na tabela
        table.innerHTML = ""

        //Counter responsavel por identificar os filmes por id
        let counter = 0

        //string com o que vai conter a tabela
        let str = ""
        str = "<thead class='thead-dark'><tr><th>NAME</th><th>YEAR</th><th>NATIONALITY</th><th>WORK</th><th>PHOTO</th></tr></thead><tbody>"

        //Atualiza a tabela com o conteudo do array myCollection
        for (let i = 0; i < myPersonalities.length;i++){
            str += "<tr>"
            str += "<td>" + myPersonalities[i].name + "</td>"
            str += "<td>" + myPersonalities[i].year + "</td>"
            str += "<td>" + myPersonalities[i].nationality + "</td>"
            str += "<td>" + myPersonalities[i].work + "</td>"
            str += "<td> <img src=' " + myPersonalities[i].photo + " 'height=100' width='100'> </td>" 
            str +="</tr>"
        }
 
        table.innerHTML = str
        //Ativa o butao com a capacidade de eliminar 
        delBtn.style.visibility ="visible"

    }

    

    //Form Sending
      
        //DOM do Form
        let frmPersonalities = document.getElementById("frmPersonalities")
        let frmName = document.getElementById("inputName")
        //Ano ja foi declarado a cima
        let frmNationality = document.getElementById("inputNationality")
        let frmWork = document.getElementById("inputWork")
        let frmPhoto = document.getElementById("inputPhoto")
        //Aray
        let myPersonalities = []

        frmPersonalities.addEventListener("submit", function(event){
            
            event.preventDefault()

            if(frmNationality.value == "Choose..."){
                alert("Não escolheu uma nacionliadade")
            }

            else{
                let newPersonality = new Personalities(frmName.value,frmYear.value,frmNationality.value,frmWork.value,frmPhoto.value)
                myPersonalities.push(newPersonality)
                console.log(newPersonality)
                console.log(myPersonalities)
    
                tabela()
            }

           

        })


        //Delete Btn
        delBtn.addEventListener("click", function(){
            
           table.innerHTML=""
           myPersonalities = []
           delBtn.style.visibility ="hidden"
           console.log("click test")

        })

}