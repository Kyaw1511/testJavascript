// fetch data
let reqresFetch = document.querySelector("#reqresFetch");
let text = "";


fetch("https://reqres.in/api/users")
// .then(answer => answer.json())
.then(response => response.json())
.then(res => {
    displayUserData(res.data);
    // for(let i = 0; i < res.length; i++) {
    //     text +=i + " " + res.data[i].firstname + "<br>";
    //     // text += `<td> ${data.data[i]} </td> <br>`;
    //     console.log(data[i]);
    // }
    
    console.log(res);
    console.log(typeof(res));
    console.log(res.data[1].first_name);

    // reqresFetch.innerHTML = data.data[1].first_name;
    // reqresFetch.innerHTML = data[1].first_name;
    // reqresFetch.innerHTML = res.[1].email;
    // console.log(text.[1].first_name)
    // reqresFetch.innerHTML = text.first_name;
});
function displayUserData(users) {
    const userDataEle = document.getElementById("userData");
    userDataEle.innerHTML = "";

    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");

        // fetch first_name from object
        const name = document.createElement("p");
        name.textContent = `Name : ${user.first_name}`;

        // fetch email from object
        const email = document.createElement("email");
        email.textContent = `Email : ${user.email}`;

        // fetch avatar from object
        const avatar = document.createElement("img");
        avatar.src = user.src;
        avatar.alt = `Avatar of ${user.first_name} ${user.last_name}`;

        // appendChild 
        userDiv.appendChild(avatar);
        userDiv.appendChild(name);
        userDiv.appendChild(email);
        
        userDataEle.appendChild(userDiv);
        console.log(user);
        console.log(user.avatar);
    })
}

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