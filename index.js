function login(){
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;
    const correctUsername = "Leon";
    const correctPassword = "Sieber";

    if (inputUsername === correctUsername && inputPassword === correctPassword){
        window.location.href ="home.html";
        alert("login successful!");  
    }
    else{
        alert("Wrong username or password. Try again!");
    }

}