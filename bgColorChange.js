function bgChange (color) {
    let colorArray = [
        "#e58e26", 
        "#f9b4ab", 
        "#B1FB17", 
        "#78e08f", 
        "#fd79a8"
    ]
    document.body.style.backgroundColor = colorArray[color];
}
var colorArray = [
    "#e58e26", 
    "#f9b4ab", 
    "#B1FB17", 
    "#78e08f", 
    "#fd79a8"
];
var colorBox = document.getElementById("colorBox");
colorArray.forEach (function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgChange(index);
    });
    colorBox.appendChild(span);
});