// fetch data
let apiTest = document.querySelector("#sapiTest");
let text = "";


fetch("https://reqres.in/api/users")
// fetch("https://jsonplaceholder.typicode.com/posts")
.then(ans => ans.json())
// .then(data => console.log(data[0]))
// .then(data => apiTest.innerHTML += data[0].category)
.then(db => {
    for(let i = 0; i < data.length; i++) {
        data[i].data.forEach(function(item) {
            console.log(item);
        })
    }
})



