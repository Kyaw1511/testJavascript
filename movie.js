
const menuToggle = document.querySelector("#menu-toggle");
const settingToggle = document.querySelector("#setting-toggle");
const settingSun = document.querySelector("#settingSun");
const navMenu = document.querySelector("#nav-menu");
const images = Array.from(document.querySelectorAll(".setting-container img"));
const landingImg = document.querySelector(".landing-image");
const icon = document.querySelector("#toggle-icon");
const searchText = document.querySelector(".word");
const headerSec = document.getElementById("headerSec");
const scrollTopArr = document.querySelector(".scroll-top");
const searchMovie = document.querySelector("#searchMovie");
const loader = document.querySelector(".loader");

const testing3 = document.querySelector(".setting-box");
const testing2 = document.querySelector("#landing");

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
// images.map((image) => {
//     image.addEventListener("click", imageSetting );
//     function imageSetting() {
//         images.forEach((img) => {
//             img.style.opacity = "1";
//             // testing3.src = `${imgUrl+ movie.poster_path}`;
            
//             // landingImg.src = testing2.image.src;
//         });
//         // landingImg.src = image.src;
//         // landingImg.src = `${imgUrl + movie.poster_path}`;
//         image.style.opacity = "0.5";

//         console.log(image);
//         console.log(image.src);
//     }
// })


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
    apiKey : "api_key=f98bf3c4437317262eb8c464167edf4d",
    baseUrl : "https://api.themoviedb.org/3/discover/movie?",
}
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const popularUrl = url.baseUrl+ "sort_by=popularity.desc&" + url.apiKey;
const searchUrl = "https://api.themoviedb.org/3/search/movie?" + url.apiKey;

// movie path;
fetchMovie(popularUrl);
function fetchMovie(path) {
    fetch(path)
    .then(res => res.json())
    .then(data => showMovie(data))
}
function showMovie(data) {
    let resMovie = data.results;
    document.querySelector(".movie-container").innerHTML = "";
    // annymonus function for movie foreach => another way;
    // resMovie.forEach(movie => {
    //     console.log(movie.original_title);
    // })
    resMovie.forEach(displayMovie);
    function displayMovie(movie) {

        // card for loop 
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
        document.querySelector(".movie-container").appendChild(divCard);

        // console.log("displayFunction");
        console.log(movie.original_title);
        console.log(movie.vote_average);
        console.log(typeof(movie.vote_average));
    }

    // slice 5 array;
    let settingMovie = resMovie
    let sixSettingMovie = settingMovie.slice(0,5);
    // la.addEventListener("click", () => {
    //     console.log("saturday");
    // })
    sixSettingMovie.forEach(showSixMovie);
    function showSixMovie(movie) {
        // setting movie for loop ;
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
        const testing = document.createElement("div");
        testing.className = "landImg";
        testing.innerHTML = `
            <img 
                        src="${imgUrl + movie.poster_path}" 
                        alt=""
                        class="landing-image"
                    >
        `
        // const testing3 = document.querySelector(".setting-box");
        testing3.appendChild(divSetting);
        
        testing2.appendChild(testing);
          
    }
    testing3.addEventListener("click", (movie) => {
        images.map((image) => {
            image.addEventListener("click", imageSetting );
            function imageSetting() {
                images.forEach((img) => {
                    img.style.opacity = "1";
                    // testing3.src = `${imgUrl+ movie.poster_path}`;
                    
                    // landingImg.src = image.src;
                    landingImg.src = `${imgUrl + movie.poster_path}`;
                });
                // landingImg.src = image.src;
                // landingImg.src = image.src;
                image.style.opacity = "0.5";
        
                console.log(image);
                console.log(image.src);
            }
        })
        
        // landingImg.src = `${imgUrl + movie.poster_path}`;
        console.log("funner");
    })

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

    // loader 
    window.addEventListener("load", () => {
        loader.style.display = "none";
    })


    // console portions
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

// console portions
console.log(window.scrollY);
console.log(images);
console.log(popularUrl);