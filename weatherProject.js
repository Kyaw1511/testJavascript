// weather project 
// DOM selector
const search = document.querySelector("#search");
const city = document.querySelector("#city");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const cloud = document.querySelector("#cloud");
const hi_low = document.querySelector("#hi_low");

const url = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "appid=952df6df3b6f1128a37a8d552c8a8675",
}
const weatherUrl = url.base + "weather?units=metric&" + url.key;

const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// fetchApi
function fetchApi(url,q) {
    let path = url + q;
    fetch(path)
    .then(res => res.json())
    .then(data => displayResult(data));
}

// display result
function displayResult(data) {
    city.innerHTML = `
        ${data.name}, 
        ${data.sys.country}
    `;
    let dat = new Date();
    let dd = dat.getDate();
    let d = dat.getDay();
    let mm = dat.getMonth();
    let yy = dat.getFullYear();

    let DD = `${days[d]} ${dd} ${months[mm]} ${yy}`;

    date.innerHTML = DD;
    temp.innerHTML = data.main.temp.toFixed(0) + "⚬C";
    cloud.innerHTML = data.weather[0].main;
    hi_low.innerHTML = data.main.temp_min.toFixed(0) + " ⚬C ~" + " " + 
                        data.main.temp_max.toFixed(0) + " ⚬C"

    // console portion
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.base);
    console.log(data);
}

// input event listener;
search.addEventListener("keypress", searchCity);
function searchCity(city) {
    if(city.keyCode === 13) {
        let cityName = city.target.value;
        if(cityName) {
            let query = "&q=" + cityName;
            fetchApi(weatherUrl,query);
        }
        else {
            cityName = "Yangon";
            let q = "&q=" + cityName; 
            fetchApi(weatherUrl, q);
        }

        console.log("cityName");
        console.log(city.target.value);
    }
}

// window load default data;
window.addEventListener("load", windowDefaultData);
function windowDefaultData() {
    let cityName = "Yangon";
    let q = "&q=" + cityName; 
    fetchApi(weatherUrl, q);
}

// console portion
console.log(weatherUrl + "&q=Yangon");