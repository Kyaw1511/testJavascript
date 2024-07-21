// search longest value in array;
const arr = [
    "Computer Technology",
    "Data Science",
    "Algorithms",
    "Data Structure",
    "Artificial Intelligence",
    "Python",
    "Java"
]; 
let num = [10, 20, 33, 44, 11, 5, 7, 90, 1011];
let longestStr = "";
let secStr = "";
let thirdStr = "";
let lngStr = "";
let secSt = "";
let thrStr = "";
for (
    let index = 0;
    index < arr.length;
    index++
) {
    document.getElementById("arr").innerHTML += `<li>${arr[index]}</li>`;
}
arr.forEach(x => {
    if(x.length > longestStr.length) {
        longestStr = x;
        
    };
    // console.log(x[0]);
});
console.log("Accessing")
console.log(arr.sort());
console.log("reverse");
console.log(arr.reverse());
console.log("length");
console.log(arr.reverse().find((y) => y.length > 21));
// ascendign order and desending order;
arr.forEach(z => {
    ascending = arr.sort((a,b) => a.length - b.length);
    // threeAscending = [ascending[0],ascending[1],ascending[2]];
    // console.log(z + "test");
});

console.log(ascending.slice(0,3));
console.log("z value of "+ lngStr);
console.log("z value of "+ ascending);

// arrange array of length ascending order;
document.getElementById("ascending").innerHTML += ascending.join("<br>");
// output for 3 ascending order;
document.getElementById("threeAscending").innerHTML += ascending.slice(0,3).join("<br>");

// arrange array of length descending order;
arr.forEach(q => {
    descending = arr.sort((a,b) => b.length - a.length);
});
document.getElementById("descending").innerHTML += descending.join("<br>");
// output for 3 descending order;
document.getElementById("threeDescending").innerHTML += descending.slice(0,3).join("<br>");

document.getElementById("longestString").innerHTML = longestStr;
console.log(longestStr);

console.log(arr.sort());
document.getElementById("days").innerHTML += arr.sort() + "<br>";
document.getElementById("sorting").innerHTML += arr.sort().join("<br>");

// sorting reverse for string
document.getElementById("reverse").innerHTML += arr.sort().reverse().join("<br>");

// test array for num
document.getElementById("num1").innerHTML += num.sort();
document.getElementById("num2").innerHTML += `<li>${num.sort()}</li>`;
document.getElementById("num3").innerHTML += num.sort() + "<br>";
document.getElementById("num4").innerHTML += num.sort().join("<br>");

// sorting increasing number;
document.getElementById("num5").innerHTML += num.sort((a,b) => a-b).join("<br>");
// sorting decreasing number;
document.getElementById("num6").innerHTML += num.sort((a,b) => b-a).join("<br>");

// find array no 2;
document.getElementById("numRoom2").innerHTML += num.sort((a,b) => b-a)[2];