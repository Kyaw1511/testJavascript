
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
            // let landingImages = Array.from(sixSettingMovie)
            // console.log(landingImages);
        })
            landingImg.src = image.src;
            
            // let landingImages = resMovie;
            // landingImages.forEach(landImges);
            // function landImges(movie) {
            //     // landing movie poster for loop;
            //     const secLanding = document.createElement("section");
            //     secLanding.className = "landImg";
            //     secLanding.innerHTML = `
            //         <div class="landImg">
            //             <img 
            //                 src="${imgUrl + movie.poster_path}" 
            //                 alt=""
            //                 class="landing-image"
            //             >
            //         </div>
            //     `;
            //     document.querySelector(".landing-container").appendChild(secLanding);
            // }
        
        // landingImg.src = image.src;
        // sixSettingMovie.forEach(landImg);
        // function landImg(movie) {
        //     const secImg = document.createElement("section");
        //     secImg.className = "landing-image";
        //     secImg.innerHTML = `
        //         <img 
        //             src="${imgUrl + movie.poster_path}" 
        //             alt="images 1"
        //         >
        //     `;
        //     document.querySelector(".landing-container").appendChild(secImg)
        //     landingImg.src = `${imgUrl + movie.poster_path}`;
        // }
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
        document.querySelector(".setting-box").appendChild(divSetting);
        
        images.map((image) => {
            image.addEventListener("click", () => {
                document.querySelector(".landing-container").appendChild(divSetting);
                images.forEach((img) => {
                    img.style.opacity = "1";
                    landingImg.src = img.src;
                })
                // landingImg.src = image.src;
                // landingImg.src = `${imgUrl + movie.poster_path}`;
                image.style.opacity = "0.5";
        
                console.log(image);
                console.log(image.src);
            })
        })   
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