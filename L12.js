// switch statement
// let week = "Tuesday";
// switch (week) {
//     case "Monday" : console.log("Today is Monday.");
//     break;
//     case "Tuesday" : console.log("Today is Tuesday.");
//     break;
//     case "Wednesday" : console.log("Today is Wednesday.");
//     break;
//     case "Thursday" : console.log("Today is Thursday.");
//     break;
//     case "Friday" : console.log("Today is Friday.");
//     break;
//     default : console.log("Today is weekend.");
// }

function formReq(){
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let tship = document.querySelector("#township").value;
    let day = document.querySelector("#day").value;
    switch (day) {
        case "monday" : text = "Today is Monday.";
        break;
        case "tuesday" : text = "Today is Tuesday.";
        break;
        case "wednesday" : text = "Today is Wednesday.";
        break;
        case "thursday" : text = "Today is Thursday.";
        break;
        case "friday" : text = "Today is Friday.";
        break;
        default : text = "Today is Weekend.";
    }
    document.querySelector(".name").innerHTML = ":" + " " + fname + " " + lname;
    document.querySelector(".township").innerHTML = ":" + " " + tship;
    document.querySelector(".day").innerHTML= ":" + " " + text;
    console.log (fname.toUpperCase());
    console.log (lname.toUpperCase());
    console.log (tship.toUpperCase());
    console.log (day.toUpperCase());

}