// slider js
// Dom selector
const imgs = document.querySelectorAll(".img-container img");
const images = Array.from(imgs);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Event listener
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
let index = 0;

// previous Slide
function prevSlide() {
    images[index].classList.remove("active");
    if(index === 0) {
        index = images.length - 1;
        images[index].classList.add("active");
    }
    else {
        index --;
        images[index].classList.add("active");
    }
    console.log(images.length);
    console.log(index);
};

// next slide
function nextSlide() {
    images[index].classList.remove("active");
    if(index === 0) {
        index = images.length - 1;
        images[index].classList.add("active");
    }
    else {
        index --;
        images[index].classList.add("active");
    }
}


console.log(images);
console.log(imgs);