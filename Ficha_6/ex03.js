window.onload = function() {
     init()    
}

//classe Movie
class Movie{
    constructor(title,year,genre){
        this.title = title
        this.year = year
        this.genre = genre
    }

}

//Array que ira conter os objetos de classe Movie
let myCollection = []


//Funçao carregada ao iniciar a pagina
function init(){

    //Le os elementos do html
    let title = document.getElementById("txtTitulo")
    let year = document.getElementById("txtAno")
    let genre = document.getElementById("sltGenero")
    let table = document.getElementById("tblFilmes")


    //Cria um objeto de classe Movie com
    function adicionar(){
        let myFilm = new Movie(title.value,year.value,genre.value)
        myCollection.push(myFilm)
        //Console test
        
        console.log(myFilm)
        console.log(myCollection)

        console.log(myFilm.title)
        console.log(myCollection[0].genre)
        //End test
    }


    function tabela(){
        
        //Clear na tabela
        table.innerHTML = ""

        //Counter responsavel por identificar os filmes por id
        let counter = 0

        //string com o que vai conter a tabela
        let str = ""
        str = "<thead class='thead-dark'><tr><<th>TÍTULO</th><th>ANO</th><th>GÉNERO</th><th>ACÕES</th></tr></thead><tbody>"

        //Atualiza a tabela com o conteudo do array myCollection
        for (let i = 0; i < myCollection.length;i++){
            str += "<tr>"
            str += "<td>" + myCollection[i].title + "</td>"
            str += "<td>" + myCollection[i].year + "</td>"
            str += "<td>" + myCollection[i].genre + "</td>"
            str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'></td>" 
            str +="</tr>"
            counter++
        }
        
        table.innerHTML = str

        //Cria o butao remover que remove o respetivo filme de acordo o seu ID
        let remove = document.getElementsByClassName("remover")


        for(let i = 0; i < remove.length; i++){
            remove[i].addEventListener("click", function(){

                console.log(remove[i].id)
    
                let delet = parseInt(remove[i].id)
    
                myCollection.splice(delet,1)
    
                tabela()

            }) 
        }
        

    }

    
    myBtn.addEventListener("click", function(){ 

        adicionar()
        tabela()
        
       

        
    })

    
    
    
}