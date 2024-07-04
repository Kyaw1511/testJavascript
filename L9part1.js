//  Conditional Statement

function checkAge () {
    let age = Number(document.querySelector("#number").value);
    if (age >= 18 && age < 40) {
        console.log ("He is over 18.");
    }
    else if  (age >= 40){
        console.log("He is middle age");
    }
    else {
        console.log ("He is under 18.");
    }
    console.log(age);
}
// && and gate
// || or gate
// ! not gate 

