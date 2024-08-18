// Menu toggle
const menuToggle = document.querySelector("#menu-toggle");


menuToggle.addEventListener("click", () => {
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.toggle("nav-active");
})