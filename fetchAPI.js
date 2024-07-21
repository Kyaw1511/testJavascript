// fetch api

fetch("people.json")
.then(res => res.json())
// .then(data => console.log(data))
.then(data => console.log(data[0].name))
.catch(error => console.log(error))
.finally(() => console.log("Fetch data completed."))

// using jsonplaceholder.org
fetch("https://jsonplaceholder.org/posts")
// fetch("https://jsonplaceholder.typicode.com/posts")
.then(ans => ans.json())
.then(data => console.log(data[0].userId))
.catch(error => console.log(error))
.finally(() => console.log("Fetch data json placeholder is completed."))

// using async function for jsonplaceholder.org
async function fetchData() {
    let answer = await fetch("https://jsonplaceholder.org/posts");
    let object = await answer.json();
    console.log(object[0].category);
}
fetchData();