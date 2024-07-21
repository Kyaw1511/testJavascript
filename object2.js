// object 2;
let person = [
    {
        name: "Kyaw Kyaw",
        age: 22,
        hobbies: ["Coding", "Soccer", "Chess", "Reading"],
        isActive: true,
        children: {
            child1: "Thar Thar",
            child2: "Zaw Zaw"
        },
        details: function() {
            console.log(
                `${this.name}, 
                ${this.age},
                ${this.hobbies[0]},
                ${this.isActive},`)
        },
    },
    {
        name: "Min Min",
        age: 22,
        hobbies: ["Coding", "Soccer", "Chess", "Reading"],
        isActive: true,
        children: {
            child1: "Hla Hla",
            child2: "Aye Aye"
        },
        details: function() {
            console.log(
                `${this.name}, 
                ${this.age},
                ${this.hobbies[0]},
                ${this.isActive},`)
        },
    },
    {
        name: "Thida",
        age: 22,
        hobbies: ["Coding", "Soccer", "Chess", "Reading"],
        isActive: true,
        children: {
            child1: "Kaung Kaung",
            child2: "Zaw Zaw"
        },
        details: function() {
            console.log(
                `${this.name}, 
                ${this.age},
                ${this.hobbies[0]},
                ${this.isActive},`)
        },
    },
];
person.forEach((p) => {
    p.details();
})