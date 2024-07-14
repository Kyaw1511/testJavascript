// array flat;
const array = document.getElementById("array");
const array2 = document.getElementById("array2");
const array3 = document.getElementById("array3");
const array4 = document.getElementById("array4");

let arr = [[10, 20, 60], [30, 40, 50], [33, 44, 55]];
for(let i = 0; i < arr.length; i++) {
    for(let x = 0; x < arr[i].length; x++) {
        array2.innerHTML += `Array ${i} of ${x} ==> ${arr[i][x]} <br>`;
    }
    array.innerHTML += `${arr[i]} <br>`;
    console.log(arr[i]);
}
let newArr = arr.flat();
array3.innerText = newArr;
console.log(newArr);
