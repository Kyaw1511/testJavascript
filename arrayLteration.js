// array lteration
let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 4) break;
    console.log(i);
}
for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] === 4) continue;
    console.log(i);
}

// Array Lteration
// for Each
arr.forEach(function (value, index) {
    console.log("Index " + index + " value " + value);
});

// map
let newArray = arr.map((x) => {
    return x +3;
});
console.log(newArray);

// filter
let newArray2 = arr.filter((y) => {
    return (y % 2);
});
console.log(newArray2);

// filter
let newArray3 = arr.filter((z) => {
    return !(z % 2);
});
console.log(newArray3);

// reduce
let newArray4 = arr.reduce((total, value) => {
    return total + value;
});
console.log(newArray4);

// shortern form
let newArray5 = arr.reduce((g, r) => g + r);
console.log(newArray5);
