// capitalize string
const inStr = document.getElementById("sub-str");
const clsStr = document.getElementById("str-clear");
const output = document.getElementById("dom-msg");
const priStr = document.getElementById("org-str");

inStr.onclick = () => {
    let string = document.getElementById("input-str").value;
    function capitalize(string) {
        let arr = string.split(" "); //string to array;
        let newArray = [];
        // console.log(arr);
        arr.forEach((value, index) => {
            let word = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
            newArray[index] = word;
            // console.log(word);
        });
        return newArray.join(" ");
    };
    priStr.innerHTML = string;
    output.innerHTML = capitalize(string);
    console.log(capitalize(string));
    capitalize(string);
}

// clear section
clsStr.onclick = () => {
    let string = document.getElementById("input-str");
    string.value = "";
    priStr.innerHTML = "";
    output.innerHTML = "clear"
}