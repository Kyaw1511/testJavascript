// calculator project
const display = document.querySelector("#display");
const buttons = Array.from(document.querySelectorAll(".button"));
// buttons = document.querySelectorAll(".button");

buttons.map((button) => {
    button.addEventListener("click", calc);  
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