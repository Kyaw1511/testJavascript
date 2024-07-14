// String reverse;
const inputS = document.getElementById("sub-str");
const clearS = document.getElementById("str-clear");
const result = document.getElementById("dom-msg");
const origin = document.getElementById("org-str");

inputS.onclick = () => {
    let str = document.getElementById("input-str").value;
    function reverseStr(str) {
        let newArray = str.split(""); //str to array;

        return newArray.reverse().join(""); // join method is join for array to string.
    }
    origin.innerHTML = str;
    result.innerHTML = reverseStr(str);
    console.log(str);
    console.log(reverseStr(str));
}
clearS.onclick = () => {
    let str = document.getElementById("input-str");
    str.value = "";
    origin.innerHTML = "";
    result.innerHTML = "";
}