// fetch data
let apiTest = document.querySelector("#sapiTest");
let text = "";


fetch("https://reqres.in/api/users")
.then(answer => answer.json())
.then(data => {
    for(let i = 0; i < data.length; i++) {
        text += `<td>${data.data[2].email}</td> <br>`;
    }
    console.log(text)
});

async function fetchDataRequ() {
    let data = await fetch("https://reqres.in/api/users");
    let firstname = await data.json();
    
    console.log(firstname.data[2].first_name);
}
fetchDataRequ();

// for(let i = 0; i < arr.length; i++) {
//     for(let x = 0; x < arr[i].length; x++) {
//         array2.innerHTML += `Array ${i} of ${x} ==> ${arr[i][x]} <br>`;
//     }
//     array.innerHTML += `${arr[i]} <br>`;
//     console.log(arr[i]);
// }