// password generator

// dom select
const display = document.querySelector(".res-text");
const copy = document.querySelector(".copy");
const range = document.querySelector("#range");
const rangeRes = document.querySelector(".range-res");
const numInput = document.querySelector("#number");
const charInput = document.querySelector("#special-char");
const generate = document.querySelector(".generate");

const strongest = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=_+[]{}<>/?|`;
const strong = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+[]{}<>/?|`;
const middle = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`;
const weak = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

generate.addEventListener("click", generatePw);

function generatePw() {
    let length = range.value;
    let numCheck = numInput.checked;
    let charCheck = charInput.checked;

    let newPw = "";
    if(numCheck && charCheck) {
        for(let i = 0; i < length; i++) {
            newPw += strongest[Math.floor(Math.random() * strongest.length)];
        }
        alert("Strong password generate!!");
    }
    else if(numCheck) {
        for(let i = 0; i < length; i++) {
            newPw += middle[Math.floor(Math.random() * middle.length)];
        }
        alert("Your password generate is weak!");   
    }
    else if(charCheck) {
        for(let i = 0; i < length; i++) {
            newPw += strong[Math.floor(Math.random() * strong.length)];
        }
        alert("Your password must be included number!");
    }else {
        for(let i = 0; i < length; i++) {
            newPw += middle[Math.floor(Math.random() * weak.length)];
        }
        alert("Your password generate is too weak!!");
    }

    // display show pw
    display.value = newPw;
    display.style.color = "#294B29";
    // display.style.color = "#3C3D37"
    display.style.fontWeight = "bold";

    // console 
    console.log("hello");
    console.log(length, numCheck, charCheck);
    console.log(newPw);
    
}

// show range value
range.addEventListener("change", () => {
    rangeRes.innerHTML = range.value;
})

// copy
copy.addEventListener("click", () => {
    if(display.value) {
        display.select(); // for select display value;
        display.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(display.value);
        alert("Copy Success!");
    }
    console.log("Copy");
})

// alert background color;

