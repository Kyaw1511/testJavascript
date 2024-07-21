// Asynchronous 

document.write("Firs Line");
document.write("<br>");

setTimeout(() => {
    document.write("Second Line");
}, 5000);
document.write("<br>");

document.write("Third Line");
document.write("<br>");

// function call
function addNum() {
    let total = 0;
    for(let i = 1; i <=5000; i++) {
        total += i;
    };
    return total;
}
function displayRes(res) {
    console.log("This is .....", res);
}
let data = addNum();
displayRes(data);

// call back function
function addNumber(callBacking) {
    let sum = 0;
    for(let i = 1; i <= 10000; i++) {
        sum += i;
    };
    callBacking(sum);
}
function showRes(result) {
    console.log("This is .......", result);
}
addNumber(showRes);