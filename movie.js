// Document object model;
const menuToggle = document.querySelector("#menu-toggle");
const settingToggle = document.querySelector("#setting-toggle");
const settingSun = document.querySelector("#settingSun");
const navMenu = document.querySelector("#nav-menu");
// const images = Array.from(document.querySelectorAll(".setting-container img"));
const images = document.querySelector(".setting-images");
const landingImg = document.querySelector(".landing-image");
const icon = document.querySelector("#toggle-icon");
const searchText = document.querySelector(".word");
const headerSec = document.getElementById("headerSec");
const scrollTopArr = document.querySelector(".scroll-top");
const searchMovie = document.querySelector("#searchMovie");
const loader = document.querySelector(".loader");
// const resMovie = data.results;
const movieContainer = document.querySelector(".movie-container");

const boxSetting = document.querySelector(".setting-box");



// fetch portion
// link to tmdb website;
const url = {
    apiKey: "api_key=f98bf3c4437317262eb8c464167edf4d",
    baseUrl: "https://api.themoviedb.org/3/discover/movie?",
}
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const popularUrl = url.baseUrl + "sort_by=popularity.desc&" + url.apiKey;
const searchUrl = "https://api.themoviedb.org/3/search/movie?" + url.apiKey;


// function portion
// Menu Toggle
function toggleMenu() {
    navMenu.classList.toggle("nav-active");
}

// setting Toggle
function toggleSetting() {
    let settingBox = document.querySelector(".setting-box");
    settingBox.classList.toggle("setting-box-active");
}

// darkmode Toggle
let darkMode = localStorage.getItem("darkMode");
// check darkmode
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
}
// call darkmode off
function darkModeOff() {
    document.body.classList.remove("dark");
    darkMode = false;
    localStorage.setItem("darkMode", null);
    icon.className = "bx bxs-moon";
    searchText.className = "searchText";
}
// call darkmode on
function darkModeOn() {
    document.body.classList.add("dark");
    darkMode = true;
    localStorage.setItem("darkMode", "enabled");
    icon.className = "bx bxs-sun";
    searchText.className = "searchText";
}

// function scroll y axis
function scrollingY() {
    if(window.scrollY > 200) {
        headerSec.style.backgroundColor = "#f4f4f4";
        headerSec.style.color = "#080808";
        scrollTopArr.style.bottom = "20px";

        console.log("Hello Scroll Y");
    }
    else {
        headerSec.style.backgroundColor = "#ffd900";
        headerSec.style.color = "#080808";
        scrollTopArr.style.bottom = "-100px";
    }
}

// function scroll top Arrow;
function scrollTopArrBtn() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// function change setting image in home page;
// function imgaesChangeHome(img) {
//     // landingImg.src = `https://image.tmdb.org/t/p/w500//8cdWjvZQUExUUTzyp4t6EDMubfO.jpg`;
//     // landingImg.src = `https://image.tmdb.org/t/p/w500//PywbVPeIhBFc33QXktnhMaysmL.jpg`;
//     landingImg.src = boxSetting;
//     console.log(boxSetting);
//     console.log("change image in home page");
// }

// movie path;
fetchMovie(popularUrl);
function fetchMovie(path) {
    fetch(path)
    .then(res => res.json())
    .then(data => showMovie(data))
}
function showMovie(data) {
    let resMovie = data.results;
    movieContainer.innerHTML = "";
    resMovie.forEach(displayMovie);

    function displayMovie(movie) {
        // card for loop;
        const divCard = document.createElement("div");
        divCard.className = "card";
        divCard.innerHTML = `
            <div class="img-box">
                <img src="${imgUrl + movie.poster_path}" alt="">
            </div>
    
            <div class="details">
                <h3>${movie.original_title}</h3>
                <span>${movie.vote_average.toFixed(2)}</span>
            </div>
            <div class="overview">
                <h5>overview</h5>
                <p>
                    ${movie.overview}
                </p>
                <p>
                    release date : <strong>${movie.release_date}</strong>
                </p>
            </div>
        `;
        movieContainer.appendChild(divCard);
    }

    // slice 5 array;
    let settingMovie = resMovie;
    let sixSettingMovie = settingMovie.slice(0, 5);
    sixSettingMovie.forEach(showSixMovie);
    function showSixMovie(movie) {
        // setting moviefor loop:
        const divSetting = document.createElement("div");
        divSetting.className = "setting-container";
        divSetting.innerHTML = `
            <div>
                <img 
                    src="${imgUrl + movie.poster_path}" 
                    alt="images 1"
                >
            </div>
        `;
        // const testing3 = document.querySelector(".setting-box");
        boxSetting.appendChild(divSetting);  
    }
    
    
    // search Movie
    searchMovie.addEventListener("keypress", (e) => {
        if(e.keyCode === 13) {
            let val = e.target.value;
            if(val) {
                fetchMovie(searchUrl+"&query="+val);
            }
            else {
                fetchMovie(popularUrl);
            }
        }
        console.log(e.keyCode);
    })

    // images.map((image) => {
    //     image.addEventListener("click", imgaesChangeHome);
    // });
    boxSetting.addEventListener("click", (divSetting) => {
        // images.addEventListener("click", imgaesChangeHome);
        // function imgaesChangeHome(movie) {
        //     // landingImg.src = `${imgUrl + movie.poster_path}`;

        //     console.log("change image in home page2");
        // }
        // setting image in home page;
        // function imgaesChangeHome() {
            // landingImg.src = `https://image.tmdb.org/t/p/w500//8cdWjvZQUExUUTzyp4t6EDMubfO.jpg`;
            // landingImg.src = `https://image.tmdb.org/t/p/w500//PywbVPeIhBFc33QXktnhMaysmL.jpg`;
            // landingImg.src = boxSetting;
            // console.log(boxSetting);
            // console.log("change image in home page");
        // }
        landingImg.src = `https://image.tmdb.org/t/p/w500//8cdWjvZQUExUUTzyp4t6EDMubfO.jpg`;
        // landingImg.src = `${imgUrl + movie.poster_path}`;
        // landingImg.src = (`imgUrl/PywbVPeIhBFc33QXktnhMaysmL.jpg`);
        // landingImg.src = `imgUrl+movie.poster_path`;
        // landingImg.src = `${sixSettingMovie.src}`;
            console.log(landingImg.src);
            console.log("change image in home page2");

        // console.log("change image in home page2");
    })

    // loader 
    window.addEventListener("load", () => {
        loader.style.display = "none";
    })

    // console portions;
    console.log(sixSettingMovie);
    console.log(sixSettingMovie[0].title);
    console.log(resMovie);
    console.log(typeof(resMovie));
    console.log(Array.isArray(resMovie));
    console.log(resMovie[1].vote_average);
    
    console.log(data.results[0]);
    console.log(data.results[0].title);
    console.log(data.results[1]);
    console.log(data.results[1].title);
    console.log(data.results[2]);
    console.log(data.results[2].title);
    // console.log(find(resMovie[0,1].vote_average));
    console.log(data);
    console.log("5");
    console.log(resMovie.length);
}


// addEventListener portion
// add Event listener for menu togggle;
menuToggle.addEventListener("click", toggleMenu);
// add Event listener for setting toggle;
settingToggle.addEventListener("click", toggleSetting);
// add Event listener for darkmode toggle;
settingSun.addEventListener("click", darkModeToggle);
// add Event lister for scroll function;
window.addEventListener("scroll", scrollingY);
// add Event listener for scrollTopArrowBtn;
scrollTopArr.addEventListener("click", scrollTopArrBtn);
// add Event listener for setting image;
// images.map((image) => {
//     image.addEventListener("click", imgaesChangeHome);
// })


// console portion;
console.log(window.scrollY);
console.log(images);
console.log(popularUrl);


