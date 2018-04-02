window.onload = function() {
     init()    
}

class Movie{
    constructor(title,year,genre){
        this.title = title
        this.year = year
        this.genre = genre
    }

}

let myCollection = []


function init(){

    let title = document.getElementById("txtTitulo")
    let year = document.getElementById("txtAno")
    let genre = document.getElementById("sltGenero")
    let table = document.getElementById("tblFilmes")



    function tabela(){
        let myFilm = new Movie(title.value,year.value,genre.value)

        //Console test
        myCollection.push(myFilm)
        console.log(myFilm)
        console.log(myCollection)

        console.log(myFilm.title)
        console.log(myCollection[0].genre)
        //End test

        table.innerHTML = ""

        let counter = 0

        let str = ""
        str = "<thead class='thead-dark'><tr><th>ID</th><th>TÍTULO</th><th>ANO</th><th>GÉNERO</th><th>ACÕES</th></tr></thead><tbody>"

        for (let i = 0; i < myCollection.length;i++){
            str += "<tr>"
            str += "<td id = '" + counter + "'>" + counter + "</td>"
            str += "<td>" + myCollection[i].title + "</td>"
            str += "<td>" + myCollection[i].year + "</td>"
            str += "<td>" + myCollection[i].genre + "</td>"
            str += "<td><input type='button' id='remover' value='Remover'></td>" 
            str +="</tr>"
            counter++
        }
        
        table.innerHTML = str
        

    }

    
    myBtn.addEventListener("click", function(){ 

        tabela()
        
    })

    
    let remove = document.getElementById("remover")

    remove.addEventListener("click", function(){


        myCollection.splice(0,1)
        tabela()

    }) 
    
}