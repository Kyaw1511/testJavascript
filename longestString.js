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
let secondStr = "";
arr.forEach(x => {
    if(x.length > longestStr.length && x.length > secondStr) {
        longestStr = x;
        secondStr = x;

    };
});
console.log(longestStr);