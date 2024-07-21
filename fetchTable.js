// fetch Table
let first = "";
let second = "";
let email = "";
let firstName = document.getElementById("firstName");
let secondName = document.getElementById("lastName");
let emailAcc = document.getElementById("email");

fetch("https://jsonplaceholder.org/users")
.then(answer => answer.json())
.then(data => {
    for(let i = 0; i < data.length; i++) {
        first += data[i].firstname + "<br>";
        second += data[i].lastname + "<br>";
        email += `<td>${data[i].email}</td> <br>`;
    }
    firstName.innerHTML += first;
    secondName.innerHTML += second;
    emailAcc.innerHTML += email;
})