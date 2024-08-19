
const menuToggle = document.querySelector("#menu-toggle");
const settingToggle = document.querySelector("#setting-toggle");
const settingSun = document.querySelector("#settingSun");
const navMenu = document.querySelector("#nav-menu");
const images = Array.from(document.querySelectorAll(".setting-box img"));
const landingImg = document.querySelector(".landing-image");
const icon = document.querySelector("#toggle-icon");
const searchText = document.querySelector(".word")

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
console.log(images);

// darkmode change
let darkMode = false;
settingSun.addEventListener("click", () => {
    
    if(darkMode) {
        darkModeOff();
    }
    else {
        darkModeOn();
    }
    console.log("Hello");
})
function darkModeOff() {
    document.body.classList.remove("dark");
    darkMode = false;
    icon.className = "bx bxs-moon";
    searchText.className = "searchText";
    // searchText.classList.add = "searchText";
}
function darkModeOn() {
    document.body.classList.add("dark");
    darkMode = true;
    icon.className = "bx bxs-sun";
    // searchText.classList.remove = "searchText";
}