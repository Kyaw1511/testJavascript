const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav');
const toggle = document.querySelector("#toggle-btn");
const icon = document.querySelector("#toggle_icon");

hamburger.addEventListener('click', () => {
    var x = document.getElementById("myLinks");
    if(x.style.display === "block") {
        x.style.display = "none";
        x.classList.add("test");
    }
    else {
        x.style.display = "block";
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
    navMenu.style.color = "#212f3d";
}
// call dark mode off
function darkModeOff() {
    document.body.classList.remove("dark");
    darkMode = false;
    localStorage.setItem("darkMode", null);
    icon.className = "bx bxs-sun";
    navMenu.style.color = "#212f3d";
}