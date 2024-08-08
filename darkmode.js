const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
    navMenu.classList.add("test");
    console.log("Hi")
    console.log(navMenu.classList.value);
});