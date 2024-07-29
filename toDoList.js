// To Do Lists 
const form = document.querySelector(".input-box");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", addTask);

// Add Task
function addTask(e) {
    e.preventDefault();
    let value = document.querySelector("#task").value;
    
    if(value) {
        let li = document.createElement("li");
        li.className = "task";
        li
    }
    
    console.log(value);
}