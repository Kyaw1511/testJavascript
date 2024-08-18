
const menuToggle = document.querySelector("#menu-toggle");
const SettingToggle = document.querySelector("#setting-toggle");
const images = Array.from(document.querySelectorAll(".setting-box img"));
const landingImg = document.querySelector(".landing-image");

// Menu Toggle
menuToggle.addEventListener("click", () => {
    let navMenu = document.querySelector("#nav-menu");
    navMenu.classList.toggle("nav-active");
})

// Setting Toggle
SettingToggle.addEventListener("click", () => {
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