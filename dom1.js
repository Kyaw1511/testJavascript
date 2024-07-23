console.log(document.URL);
console.log(document.body);
console.log(document.head.children);
console.log(document.head.children[5].textContent);
console.log(document.links);

// id selector;
const lists = document.getElementById("lists");
lists.style.backgroundColor = "#f633f4";

// Class selector;
const items = document.getElementsByClassName("item");
items[0].style.color = "#fff";
items[1].textContent = "Change text";
items[2].innerHTML = `Hello <strong>World</strong>`;
console.log(items);

// Tag selector;
const h1 = document.getElementsByTagName("h1");
console.log(h1);

// Query Selector;
const h2 = document.querySelector("h1");
const h3 = document.querySelectorAll("h1");
console.log(h2);
console.log(h3);

const items1 = document.querySelector("#lists .item:last-child");
console.log(items1);

// using childNodes
console.log(document.querySelector("#lists").childNodes);
console.log(
    document.querySelector("#lists").children
);
console.log(
    document.querySelector("#lists").children[1].textContent
);
console.log(
    document.querySelector("#lists").lastElementChild.textContent
);

// parent nodes;
console.log(
    document.querySelector(".active").parentNode
)
console.log(
    document.querySelector(".active").parentElement
)

// using next sibling;
console.log(
    document.querySelector("#para").nextSibling
) 
console.log(
    document.querySelector("#para").nextElementSibling
)

// 23-7-2024;
function myfun() {
    document.querySelector("#part3").innerText = "I am handsome.";
    // document.querySelector("part3").innerHTML = "Hello World";
    document.querySelector("#lists li:last-child").style.color = "#f00";
}

// dom part 4
const lists4 = document.querySelector("#lists");
console.log(lists4.firstElementChild.classList);
lists4.firstElementChild.classList.add("move", "web");
console.log(lists4.firstElementChild.classList);