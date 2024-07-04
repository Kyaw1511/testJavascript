
function toCel() {
    let F = Number(document.querySelector("#input").value);
    let cel = (5/9) * (F-32);
    document.querySelector("#result").innerHTML = parseFloat(cel.toFixed(2)) + " C";
    document.querySelector("#input").value = "";
    // console.log(inputData);
    // console.log(typeof(Number(inputData)));
    // console.log("hello world");
    // console.log(typeof(parseFloat(cel.toFixed(2))))
}
function toFeh() {
    let C = Number(document.querySelector("#input").value);
    let Feh = (9/5 * C) + 32;
    document.querySelector("#result").innerHTML = parseFloat(Feh.toFixed(2)) + " F";
    document.querySelector("#input").value = "";
    // console.log("Hello Yangon.");
}