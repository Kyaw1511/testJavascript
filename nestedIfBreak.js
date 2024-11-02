outerLoop: for (let i = 0; i < 5; i ++) {
    console.log("Outerloop : i = ", i);
    
    for (let j = 0; j < 5; j++) {
        if (j === 3) {
            console.log("Breaking both loops when j is ", j);
            break outerLoop;
        }
        console.log("inner loop: j = ", j);
    }
}

// test for loop 
const tested1 = document.getElementById("test1");
const tested2 = document.getElementById("test2");
const tested3 = document.getElementById("test3");
const tested4 = document.getElementById("test4");

let testing1 = "";
for (let y = 1; y < 6; ++y) {
    testing1 += y + "<br>";
}

let testing2 = "";
for (let z = 1; z < 6; z++) {
    testing2 += z + "<br>";
}

tested1.innerHTML = testing1;
tested2.innerHTML = testing2;

// for loop even number 1 to 10;
let testing3 = "";
for (let a = 0; a <= 10; a++) {
    if (a % 2 == 0) {
        testing3 += a + "<br>";
    }
}
tested3.innerHTML = testing3;

// while loop 
let g = 0;
let testing4 = "";
while (g < 4) {
    testing4 += g + "<br>";
    g++;
}
tested4.innerHTML = testing4;
