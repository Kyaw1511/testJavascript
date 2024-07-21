// object part 1;
let person1 = {
    name : "kyaw min",
    age: 28,
    hobbies: ["Coding", "Soccer", "Chess", "Reading"],
    isActive: true,
    details : function() {
        console.log(
            `Person1's details 
            ${this.name}, 
            ${this.age},
            ${this.hobbies[0]},
            ${this.isActive},`
        );
    },
};
person1.details();