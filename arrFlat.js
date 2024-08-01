// array flat;
const array = document.getElementById("array");
const array2 = document.getElementById("array2");
const array3 = document.getElementById("array3");
const array4 = document.getElementById("array4");
const array5 = document.getElementById("array5");

let arr = [[11, 22, 33], [44, 55, 66]];
let arry = [[10, 20, 60], [30, 40, 50], [33, 44, 55]];
for(let i = 0; i < arr.length; i++) {
    for(let x = 0; x < arr[i].length; x++) {
        array2.innerHTML += `Array ${i} of ${x} ==> ${arr[i][x]} <br>`;
    }
    array.innerHTML += `${arr[i]} <br>`;
    console.log(arr[i]);
}

// for(
//     let z = 0; z < arry.length; z++
// ) {
//     for(
//         let b = 0; b < arry[z].length; b++
//     ) {
//         for(
//             let c = 0; c < arry[b].length; c++
//         ) {
//             array4.innerHTML = `${arry}`;
//             console.log(arry[c])
//         }
//     } 
    
// }
let newArr = arr.flat();
let newArr1 = arry.flat();
array3.innerText = newArr;
array5.innerHTML = newArr1;
console.log("hello")
console.log(newArr);
