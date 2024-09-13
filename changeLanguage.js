// javaScript
const data = {
    "english" :
    {
        "title": "Hello World",
        "description": "Hi guys, I'm Kyaw Min Thein and I am from MYANMAR."
    },
    "thai":
    {
        "title": "สวัสดี โลก",
        "description": "สวัสดีทุกคน ผมชื่อคยอ มิน เธน และผมมาจากประเทศเมียนมาร์"
    },
    "japanese":
    {
        "title": "こんにちは、世界",
        "description": "みなさん、こんにちは。私は Kyaw Min Thein です。ミャンマー から来ました。"
    },
    "myanmar":
    {
        "title": "မင်္ဂလာပါ၊ ကမ္ဘာ",
        "description": "ဟေး သူငယ်ချင်းတို့ရေ၊ ကျွန်တော်က ကျော်မင်းသိမ်းပါ။ မြန်မာနိုင်ငံက လာပါသည်။"
    },
}

const langSec = document.querySelector(".languageSection");
const buttons = Array.from(document.querySelectorAll("a"));
const textTitle = document.querySelector(".title");
const textDescription = document.querySelector(".description");

// function for change active button;
function changeActive() {
    console.log("hello");
}

// addEventListener for change acitve button;
buttons.addEventListener("click", changeActive);