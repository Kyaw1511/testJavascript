// fetch api
let apiTest = document.getElementById("apiTest");
let text = "";

fetch("people.json")
.then(res => res.json())
// .then(data => console.log(data))
.then(data => {
    console.log(data[0].hobbies),
    console.log(data[1].name),
    console.log(data[2].hobbies),
    console.log(data[2].hobbies[1]),
    console.log(data[2].hobbies[2]),
    console.log(data[1].children),
    console.log(data[1].children.child1) 
})
.catch(error => console.log(error))
.finally(() => console.log("Fetch data completed."))

// using jsonplaceholder.org
fetch("https://jsonplaceholder.org/users")
// fetch("https://reqres.in/api/users?page=1")
// fetch("https://jsonplaceholder.typicode.com/posts")
.then(ans => ans.json())
// .then(data => console.log(data[0]))
// .then(data => apiTest.innerHTML += data[0].category)
.then(data => {
    for(let i = 0; i < data.length; i++) {
        text +=i + " " + data[i].firstname + "<br>";
    }
    console.log(data[2].firstname);
    apiTest.innerHTML = text; 
})
.catch(error => console.log(error))
.finally(() => console.log("Fetch data json placeholder is completed."))

// using async function for jsonplaceholder.org
async function fetchData() {
    let answer = await fetch("https://jsonplaceholder.org/posts");
    // let answer = await fetch("https://reqres.in/api/users?page=1");
    let object = await answer.json();
    console.log(object[0].category);
}
fetchData();