// array part 2
let people = [
    "Maung Maung",
    "Kyaw Kyaw",
    "Hla Hla",
    "Myint Myint"
];
let team1 = [
    "Aung Aung",
    "Lin Lin",
    "Thu Thu",
];
let team2 = [
    "Zaw Zaw",
    "Tin Tin",
    "Khing Khaing"
];
let team3 = [
    "khin khin",
    "Thaw Thaw"
]
// concat method
let newArray = team1.concat(team2);
console.log(newArray);

// spread method with colma,
let newArray2 = [team1,team2];
console.log(newArray2);

//splice()
team1.splice(2,0,"ASUS");
console.log(team1);
console.log(people.toString());

// join method
console.log(team1.join("--"));

// pop method 
team2.pop();
console.log(team2);
team3.push("Chit Chit");
console.log(team3);