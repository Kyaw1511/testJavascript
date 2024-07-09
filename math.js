// math.js
let test = document.querySelector("#test");
let test1 = document.getElementById("test1");
let test3 = document.getElementById("test3");
let test4 = document.getElementById("test4");
let test5 = document.getElementById("test5");
let test6 = document.getElementById("test6");
let test7 = document.getElementById("test7");

let x = 20.56;
let y = [10, 90, 3, 4, 1, 11];
test.innerHTML = Math.PI.toFixed(2);
test1.innerHTML = Math.round(x);
test3.innerHTML = Math.floor(x);
test4.innerHTML = Math.min(...y); // spread operator for array
test5.innerHTML = Math.max(...y);
test6.innerHTML = (Math.random().toFixed(2));
test7.innerHTML = ((Math.random()* 11).toFixed(3))

console.log(Math.PI.toFixed(2));
function changeRound() {
    let tester = document.querySelector("#test2").value;
    document.getElementById("testing").innerHTML = Math.round(tester);
    console.log("hello");
    console.log(tester);
    
}