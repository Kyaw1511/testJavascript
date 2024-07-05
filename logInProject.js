const registerEmail = "kmt@gmail.com";
const registerPw = "123456";

function logIn(e) {
    e.preventDefault(); 
    let email = e.target[0].value;
    let pw = e.target[1].value;

    if(email && pw) {
        if(email === registerEmail && pw === registerPw) {
            document.getElementById("success").innerHTML = "LogIn successful.";
            document.querySelector(".container").style.display = "none";
        }
        else if (email === registerEmail && pw !== registerPw) {
            document.getElementById("error").innerHTML = "Wrong Password.!";
        }
        else if (email !== registerEmail && pw === registerPw) {
            document.getElementById("error").innerHTML = "Wrong Email.";
        }
    }
    else {
        document.getElementById("error").innerHTML = "Please fill the all input.";
    }

    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log("Hello World.");
}