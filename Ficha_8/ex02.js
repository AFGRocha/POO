class Game {
    constructor(name, genre, platforms/*, photo*/) {
        
        this.name = name
        this.genre = genre
        this.platforms = platforms        
        //this.photo = photo
    }

    // Property Id
    get id() {
        return this._id
    }

    // Property Name
    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName        
    }

    // Property Genre
    get genre() {
        return this._genre
    }

    set genre(newGenre) {
        this._genre = newGenre        
    }

    // Property Platforms
    get platforms() {
        return this._platforms
    }

    set platforms(newPlatforms) {        
        this._platforms = newPlatforms        
    }

    // Photo property
    get photo() {
        return this._photo
    }
    set photo(newPhoto) {
        this._photo = newPhoto
    }
}

window.onload = function() {


    //Referencias HTML

    let inputName = document.getElementById("inputName")
    let inputGenre = document.getElementById("inputGenre")
    let nodesPlatform = document.getElementsByClassName("form-check-input")
    let modalName = document.getElementById("modalName")
    let modalGenre = document.getElementById("modalGenre")
    let modalPlat = document.getElementById("modalPlat")
    let btnSort = document.getElementById("btnSort")







    //Array que ira conter os objetos de classe Game
    let myCollection = []
    let table = document.getElementById("tblGames")


    function tabela(){
        
        console.log("Length atual do array de jogos: " + myCollection.length)

        if (myCollection.length == 0){
            table.innerHTML = ""
        }

        
        else{

             //Clear na tabela
            table.innerHTML = ""

          //Counter responsavel por identificar os filmes por id
          let counter = 0

            //string com o que vai conter a tabela
         let str = ""
         str = "<thead class='thead-dark'><tr><th>TÍTULO</th><th>GÉNERO</th><th>PLATAFORMAS</th><th>ACÕES</th></tr></thead><tbody>"

         //Atualiza a tabela com o conteudo do array myCollection
            for (let i = 0; i < myCollection.length;i++){
                str += "<tr>"
                str += "<td>" + myCollection[i].name + "</td>"
                str += "<td>" + myCollection[i].genre + "</td>"
                str += "<td>" + myCollection[i].platforms + "</td>"
                str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'><input type='button' class='atualizar' value='Atualizar' id='"+ counter + "'><input type='button' data-toggle='modal' data-target='#myModal' class='ver' value='Ver' id='"+ counter + "'></td>" 
                str +="</tr>"
                counter++
            }
        
            table.innerHTML = str

            let remove = document.getElementsByClassName("remover")
            let update = document.getElementsByClassName("atualizar")
            let view = document.getElementsByClassName("ver")


            //Cria o butao remover que remove o respetivo filme de acordo o seu ID
            for(let i = 0; i < remove.length; i++){
                remove[i].addEventListener("click", function(){

                    console.log(remove[i].id)
    
                    let delet = parseInt(remove[i].id)
    
                    myCollection.splice(delet,1)
    
                    tabela()

                 }) 
            }

            //Cria o butao update com o seu respetivo ID
            for(let i = 0; i < update.length; i++){
                update[i].addEventListener("click", function(){

                    console.log("update btn click:  " + update[i].id)
    
                    let up = parseInt(update[i].id)

                    let platforms = ""

                    for (let i = 0; i < nodesPlatform.length; i++) {
                        if (nodesPlatform[i].checked == true) {                
                            platforms += nodesPlatform[i].value + ";"  
                        } 
                    }
                    myCollection[up].name = inputName.value
                    myCollection[up].genre = inputGenre.value
                    myCollection[up].platforms = platforms
                    
                    
    
                    tabela()

                 }) 
            }

            for(let i = 0; i < view.length; i++){
                view[i].addEventListener("click", function(){

                    console.log(view[i].id)
    
                    let modVe = parseInt(view[i].id)
    
                    modalName.innerHTML = myCollection[modVe].name
                    modalGenre.innerHTML = myCollection[modVe].genre
                    modalPlat.innerHTML = myCollection[modVe].platforms
    
                    tabela()

                 }) 
            }

        }
       
        

    }





    let frmGames = document.getElementById("frmGame")

    frmGames.addEventListener("submit", function(event) {
       
        event.preventDefault()

        //  Validar o campo Platforms 

        
        let platforms = ""
        let checker = 0

        for (let i = 0; i < nodesPlatform.length; i++) {
            if (nodesPlatform[i].checked == true) {                
                platforms += nodesPlatform[i].value + ";"
                checker++
            }            
        }

        console.log(platforms)
        console.log(checker)

        if (platforms == ""){
            alert("Chupp tbh")
        }


        else{
            


            let myGame = new Game(inputName.value,inputGenre.value,platforms)
            myCollection.push(myGame)
            console.log(myGame)

            tabela()

        }


    })


    //Sort por genero 
    btnSort.addEventListener("click", function(){

        myCollection.sort(function(a, b){
            var x = a.genre.toLowerCase();
            var y = b.genre.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        tabela()

    })
      

}