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
        li.innerHTML = `
            <span class="done" > ${value} </span> 
            <i class='bx bx-x remove'></i>
        `;
        tasks.appendChild(li);
        document.querySelector("#task").value = "";
    };
    console.log(value);
};

// remove Task
tasks.addEventListener("click", removeTask);

function removeTask(e) {
    let rem = e.target;

    if(rem.classList.contains("remove")) {
        rem.parentElement.remove();
        console.log(rem);
    }
    else if(rem.classList.contains("done")) {
        rem.parentElement.style.backgroundColor = "#87CEEB";
        rem.style.textDecoration = "line-through";
        rem.style.color = "#444";
    }
    console.log(e.target);
}