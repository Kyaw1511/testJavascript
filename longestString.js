// search longest value in array;
let arr = [
    "Computer Science",
    "Computer Technology",
    "Data Science",
    "Algorithms",
    "Data Structure",
    "Artificial Intelligence",
    "Python",
    "Java"
]; 
let longestStr = "";
arr.forEach(x => {
    if(x.length > longestStr.length) {
        longestStr = x;
    };
});
console.log(longestStr);