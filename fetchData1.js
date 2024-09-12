const apiReques = document.querySelector("#apiReques");
let text = "";

fetch("https://reqres.in/api/users")
.then(answer => answer.json())
.then(res => {
    for(let i = 0; i < res.length; i++) {
        text += i + " " + res.data[i] + "<br>";
        console.log(data)
    }
    apiReques.innerHTML = text.first_name;

    console.log(res);
    console.log(typeof(res));
    console.log(res.data[1].first_name);
})
async function fetchDataRequ() {
    let data = await fetch("https://reqres.in/api/users");
    let firstname = await data.json();
    
    console.log(firstname.data[2].first_name);
}
fetchDataRequ();