// for loop 
for(let x = 0; x <=10; x++ ) {
    document.write(x + "Nasa hack <br>");
}

// Array loop
let people = [
    "Mg Mg",
    "Aung Aung",
    "Hla Hla",
    "Zaw Zaw",
    "Kyaw Kyaw"
];
for(let index = 0; index < people.length; index++) {
    document.querySelector("ul").innerHTML += `<li>${ people[index] }</li>`
}