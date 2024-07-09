// digital clock javascript
const box = document.querySelector(".box");
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
function runDate() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let dd = date.getDate();
    let mm = date.getMonth(); // result is array number not show month name.
    let yr = date.getFullYear();
    let week = date.getDay();
    let day = `${days[week]}`;
    let ddmmyr = `${dd}, ${months[mm]}, ${yr}`

    if(hr > 12) hr -= 12;
    if(hr < 10) hr = "0" + hr;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;
    
    box.innerHTML = `<span>
                        ${hr} : ${min} : ${sec} <br>
                        ${day} <br>
                        ${ddmmyr}
                    </span>`;
    //    console.log(date);
}
// not refresh;
setInterval(runDate, 1000);
// runDate();