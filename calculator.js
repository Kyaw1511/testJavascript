// calculator project
const display = document.querySelector("#display");
const buttons = Array.from(document.querySelectorAll(".button"));
// buttons = document.querySelectorAll(".button");

const numbers = [
    [0, "zero", 48],
    [1, "one", 49],
    [2, "two", 50],
    [3, "three", 51],
    [4, "four", 52],
    [5, "five", 53],
    [6, "six", 54],
    [7, "seven", 55],
    [8, "eight", 56],
    [9, "nine", 57],
    [".", "decimal", 190]
];
const fractions = [
    ["*", "multiply", 106],
    ["+", "add", 107],
    ["-", "subtract", 109],
    ["/", "divide", 111],
];

buttons.map((button) => {
    button.addEventListener ("click", calc);  
});
function calc(e) {
    let value = e.target.innerText;
    switch(value) {
        case 'AC'   : display.innerText = "";
                    break;
        case '←'    : display.innerText = display.innerText.slice(0, -1);
                    break;
        case '='    :   try {
                            if(display.innerText === '') {
                                display.innerText = "";
                                break;
                            }
                            else {
                                display.innerText = eval(display.innerText);
                                break;
                            }
                        }   catch(e) {
                                display.innerText = "ERROR";
                                break;
                            }
        default :   display.innerText += value;
    }
    console.log(e.target.innerText);
}

console.log(buttons);
console.log(typeof(buttons));