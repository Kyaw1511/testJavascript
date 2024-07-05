// Tarnery Operator;

function darkmodeOn() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "blue";
}
function darkmodeOff() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "green";
}
let darkmode = true;
(darkmode) ? darkmodeOn() : darkmodeOff();