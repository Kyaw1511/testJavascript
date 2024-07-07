// while loop
let number = 0;
while(number <= 10) {
    document.querySelector("#test1").innerHTML += `${number} <br>`
    console.log(number)
    number++;
}
let num = 0;
while(num <= 10) {
    if(num % 2) {
        document.getElementById("test2").innerHTML += `${num} is odd number. <br>`;
    }
    else {
        document.getElementById("test2").innerHTML += `${num} is even number.<br>`;
    }
    num++;
}