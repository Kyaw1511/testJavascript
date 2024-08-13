const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav');
const toggle = document.querySelector("#toggle-btn");
const icon = document.querySelector("#toggle_icon");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
    // navMenu.classList.add("test");

    let test = document.querySelector(".test");
    if(test) {
        navMenu.classList.add("test");
    }
    else {
        navMenu.classList.remove("test");
    }
    
    console.log("Hi")
    console.log(navMenu);
});

toggle.addEventListener("click", darkModeToggle);
let darkMode = localStorage.getItem("darkMode");

// darkMode check
if(darkMode === "enabled") {
    darkModeOn();
}

function darkModeToggle() {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode === "enabled") {
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
    localStorage.setItem("darkMode", "enabled");
    icon.className = "bx bxs-moon";
}
// call dark mode off
function darkModeOff() {
    document.body.classList.remove("dark");
    darkMode = false;
    localStorage.setItem("darkMode", null);
    icon.className = "bx bxs-sun";
}