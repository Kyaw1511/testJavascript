// vowel count
let str = "hello, I am Jhon Smit.";
function countVowel(v) {
    let count = 0;
    let newStr = v.toLowerCase();
    for(let i of newStr) {
        if(
            i === "a" ||
            i === "e" ||
            i === "o" ||
            i === "u" ||
            i === "i"
        ) {
            count++;
            console.log(i);
            // document.querySelector(".test").innerHTML = count;
            document.querySelector(".test").innerHTML += i;
        }
    }
    return count;
}
console.log("Count of vowel is " + countVowel(str));