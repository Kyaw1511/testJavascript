// fetch data
let reqresFetch = document.querySelector("#reqresFetch");
let text = "";


fetch("https://reqres.in/api/users?page=2")
.then(answer => answer.json())
.then(res => {
    for(let i = 0; i < res.length; i++) {
        text += `<td> ${res.data[i]} </td> <br>`;
        console.log(data[i]);
    }
    console.log(res);
    console.log(res.data[1].first_name);

    // reqresFetch.innerHTML = data.data[1].first_name;
    // reqresFetch.innerHTML = data[1].first_name;
    // reqresFetch.innerHTML = res.data[1].email;
    // console.log(text.data[1].first_name)
    reqresFetch.innerHTML = text.value;
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