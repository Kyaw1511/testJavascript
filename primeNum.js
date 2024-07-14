let inputd = document.querySelector("#sub-id");
let cleard = document.querySelector("#id-clear");
let result = document.getElementById("dom-msg");

inputd.onclick = () => {
    let num = Number(document.querySelector("#input-id").value);
    if (num < 2) {
        result.innerHTML = "Hello";
        // console.log("false");
        return false;
    }
    for (
        let i = 2;  
        i <= Math.sqrt(num);
        i++
    ) {
        if (num % i === 0) {
            result.innerHTML = "This is not prime number."
            // console.log("true");
            return false;
        }
    }
    result.innerHTML = "This is prime number.";
    // console.log("hello world");
    return true;
};
cleard.onclick = () => {
    let num2 = document.querySelector("#input-id");
    num2.value = "";
    result.innerHTML = "";
    // console.log("test")
}