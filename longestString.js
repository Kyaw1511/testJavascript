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
let secondStr = "";
arr.forEach(x => {
    if(x.length > longestStr.length && x.length-- > secondStr.length) {
        longestStr = x;
        secondStr = x.length--;

    };
});
console.log(longestStr);