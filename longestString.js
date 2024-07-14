// search longest value in array;
let arr = [
    
    "Computer Technology",
    "Data Science",
    "Algorithms",
    "Data Structure",
    "Artificial Intelligence",
    "Python",
    "Java"
]; 
let longestStr = "";
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
});

document.getElementById("longestString").innerHTML = longestStr;
console.log(longestStr);