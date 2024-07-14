// string reverse method 2;
const inputS = document.getElementById("sub-str");
const clearS = document.getElementById("str-clear");
const origin = document.getElementById("dom-msg");
const result = document.getElementById("org-str");

inputS.onclick = () => {
    let str = document.getElementById("input-str").value;
    function reverseStr(str) {
        let newStr = "";
        for(let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
    origin.innerHTML = str;
    result.innerHTML = reverseStr(str);
    // console.log(reverseStr(str));
}

clearS.onclick = () => {
    let str = document.getElementById("input-str");
    str.value = "";
    origin.innerHTML = "";
    result.innerHTML = "";
}