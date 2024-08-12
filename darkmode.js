const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav');
const toggle = document.querySelector("#toggle-btn");
const icon = document.querySelector("#toggle-icon");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
    // navMenu.classList.add("test");
    navMenu.classList.add("test1");
    
    console.log("Hi")
    console.log(navMenu);
});

toggle.addEventListener("click", darkModeToggle);
let darkMode = false;

function darkModeToggle() {
    if(darkMode) {
        darkModeOff();
    }
    else {
        darkModeOn();
    }
};
// call dark mode on 
function darkModeOn() {
    document.body.classList.add("dark");
    darkMode = true;
}
// call dark mode off
function darkModeOff() {
    document.body.classList.remove("dark");
    darkMode = false;
}