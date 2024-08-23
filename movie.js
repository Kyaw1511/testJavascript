
const menuToggle = document.querySelector("#menu-toggle");
const settingToggle = document.querySelector("#setting-toggle");
const settingSun = document.querySelector("#settingSun");
const navMenu = document.querySelector("#nav-menu");
const images = Array.from(document.querySelectorAll(".setting-box img"));
const landingImg = document.querySelector(".landing-image");
const icon = document.querySelector("#toggle-icon");
const searchText = document.querySelector(".word")
const headerSec = document.getElementById("headerSec");
const scrollTopArr = document.querySelector(".scroll-top");

// Menu Toggle
menuToggle.addEventListener("click", () => {
    let navMenu = document.querySelector("#nav-menu");
    navMenu.classList.toggle("nav-active");
})

// Setting Toggle
settingToggle.addEventListener("click", () => {
    let settingBox = document.querySelector(".setting-box");
    settingBox.classList.toggle("setting-box-active");
})

// Setting box image
images.map((image) => {
    image.addEventListener("click", () => {
        images.forEach((img) => {
            img.style.opacity = "1";
        })
        landingImg.src = image.src;
        image.style.opacity = "0.5";

        console.log(image);
        console.log(image.src);
    })
})


// darkmode change
settingSun.addEventListener("click", darkModeToggle);
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
        darkModeOn()
    }
}
// call dark mode off
function darkModeOff() {
    document.body.classList.remove("dark");
    darkMode = false;
    localStorage.setItem("darkMode", null);
    icon.className = "bx bxs-moon";
    searchText.className = "searchText";
    // document.body.classList.remove = "searchText";
    // searchText.classList.add = "searchText";
}
// call dark mode on
function darkModeOn() {
    document.body.classList.add("dark");
    darkMode = true;
    localStorage.setItem("darkMode", "enabled");
    icon.className = "bx bxs-sun";
    searchText.className = "searchText";
    // document.body.classList.add = "searchText";
    // searchText.classList.remove = "searchText";
}

// scroll function
window.addEventListener("scroll", scrollingY);
function scrollingY() {
    if(window.scrollY > 200) {
        headerSec.style.backgroundColor = "#f4f4f4";
        headerSec.style.color = "#080808";
        scrollTopArr.style.bottom = "20px";
        console.log("Hello scroll Y");
    }
    else {
        headerSec.style.backgroundColor = "#ffd900";
        headerSec.style.color = "#080808";
        scrollTopArr.style.bottom = "-100px";
    }
}
scrollTopArr.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
        
    })
    // window.scroll(0, 0);
    console.log("press scroll y arrow");
})

// fetch movie
const url = {
    apiKey : "[yourkey]&",
    baseUrl : "http://www.omdbapi.com/?",
}
const siteUrl = url.baseUrl+url.apiKey;

// console portions
console.log(window.scrollY);
console.log(images);
console.log(siteUrl);