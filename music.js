// document object model
const current = document.querySelector("#current");
const count = document.querySelector("#count");
const menu = document.querySelector("#menu");
const navList = document.querySelector("#nav-list");
const title = document.querySelector("#title");
const singer = document.querySelector("#singer");
const poster = document.querySelector("#poster");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const play = document.querySelector("#play");
const range = document.querySelector("#range");

// global variable
let music = [
    {
        id : 1,
        title : "Nin Mathi Tak A Chit",
        singer : "Wai La",
        img_path : "images/song1.jpg",
        music_path : "music/1.mp3"
    },
    {
        id : 2,
        title : "Elody",
        singer : "Adjustor and Floke Rose",
        img_path : "images/song2.jpg",
        music_path : "music/2.mp3"
    },
    {
        id : 3,
        title : "Tha Di Ya Yin",
        singer : "Eternal Gosh",
        img_path : "images/song3.jpg",
        music_path : "music/3.mp3"
    },
    {
        id : 4,
        title : "Danyar Houng Myar..",
        singer : "Zaw Win Htut",
        img_path : "images/song4.jpg",
        music_path : "music/4.mp3"
    },
    {
        id : 5,
        title : "Lamin Tean Chin",
        singer : "Eternal Gosh",
        img_path : "images/song5.jpg",
        music_path : "music/5.mp3"
    }
];
let playing = false;
let index = 0;

const track = document.createElement("audio");

// load Track
function loadTrack(index) {
    title.innerHTML = music[index].title;
    singer.innerHTML = music[index].singer;
    poster.src = music[index].img_path;
    
    track.src = music[index].music_path;
    track.load();

    current.innerHTML = index + 1;
    count.innerHTML = music.length;

    // track current time
    setInterval(trackCurrentTime, 1000);
} 
loadTrack(index);

// check play or pause
function checkMusic(){
    playing === true ? justPause() : justPlay();
}

// justPlay function
function justPlay() {
    track.play();
    playing = true;
    play.className = "fa-solid fa-pause";
}

// justPause function
function justPause() {
    track.pause();
    playing = false;
    play.className = "fa-solid fa-circle-play";
}

// previous song
function prevSong() {
    index <= 0 ? index = music.length -1 : index-- ;
    loadTrack(index);

    // after prev btn play song
    playing = false;
    checkMusic();
}

// next song
function nextSong() {
    index >= music.length - 1 ? index = 0 : index++ ;
    loadTrack(index);

    // after next btn play song
    playing = false;
    checkMusic();
}

// track current time;
function trackCurrentTime() {
    range.value = track.currentTime * (100 / track.duration);

    // if song is almost ended
    if(track.ended) {
        nextSong();
    }
}

// dynamic range track duration
function changeRange() {
    track.currentTime = range.value * (track.duration / 100);
}

// toggle for menu navbar
function toggleMenu() {
    navList.classList.toggle("nav-list-active");
    menu.classList.toggle("fa-circle-xmark");
    console.log("Hello menu");
} 
// fetch music in navbar
music.map((music, index) =>{
    let li = document.createElement("li");
    li.innerHTML = `
        <li>
            <div>
                <h3>${music.title}</h3>
                <p>${music.singer}</p>
            </div>
            <i 
                id="playSingle" 
                class="trackSingle ${index}fa-solid fa-play"
            >
            </i>
        </li>
    `
})

// event listener for play and pause btn
play.addEventListener("click", checkMusic);
// event listener for previous song
prev.addEventListener("click", prevSong);
// event listener for next song
next.addEventListener("click", nextSong);
// dynamic range track duration event listener
range.addEventListener("change", changeRange);
// navbar toggle
menu.addEventListener("click", toggleMenu);

