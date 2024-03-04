var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");  
var Indicator =  document.getElementById("Indicator");  

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(60px)";
}

function login(){
    RegForm.style.transform = "translateX(340px)";
    LoginForm.style.transform = "translateX(340px)";
    Indicator.style.transform = "translateX(-60px)";
}

function verificacao(){
    let user= document.getElementById("usuario").value;
    let password= document.getElementById("senha").value;


    

    if(user.trim() === "" || password.trim() === ""  ){
        alert("Preencha todos os campos");
    } else {
        if(user.trim() === "adm" || password.trim() === "adm") {
            window.location.href = ("./pages/poke-page.html");
        }
        else{
            alert("Usuario ou senha incorreto!");
        }
        
    }
}