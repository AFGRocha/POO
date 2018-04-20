window.onload = function() {

    init()

}
//Users

class User{
    constructor(username,password,email){
        this.username = username
        this.password = password
        this.email = email
    }
}

class Travel{

    constructor(name,country,date,desc,score){
        this.name = name 
        this.country = country 
        this.date = date 
        this.desc = desc 
        this.score = score
    }
}

//Hard code user for testing

let Users = [
    {
        username: "Admin",
        password: "admin123",
        email: "admin@admin.com"
    },
    {
        username: "Daiki",
        password: "chupp",
        email: "daiki@admin.com"
    }
]


function init(){


    //Login
    let usernameLogin = document.getElementById("username")
    let passwordLogin = document.getElementById("password")
    let loginBtn = document.getElementById("login")
    let logChecker = document.getElementById("logCheck")
  

    loginBtn.addEventListener("submit", function () {

        for(let i = 0; i < Users.length; i++){

            if (usernameLogin.value == Users[i].username){

                if (passwordLogin.value == Users[i].password){
                    console.log("User Logged in")
                    console.log("Username: " + usernameLogin.value)
                    console.log("Password: " + passwordLogin.value)
            
                    document.getElementById('logText').style.visibility = 'hidden';
                    document.getElementById('signText').style.visibility = 'hidden';
                    document.getElementById('userText').innerHTML = usernameLogin.value + " " + '<i class="fa fa-user" style="font-size:24px"></i>';
                    $('#loginModal').modal('hide');
                    break
                }

                else{
                    logChecker.innerHTML = "O Username ou Password estão errados"
                }
            }

            else{
                logChecker.innerHTML = "O Username ou Password estão errados"
            }
        }

      
        
    })

}