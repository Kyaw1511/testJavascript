let people1 = {
    name : "Kyaw Kyaw",
    age : 28,
    gender : "male",
    job : "Developer",

    biology : function () {
        document.getElementById("test1").innerHTML = `${this.name} age is ${this.age}`;
        console.log(
            `${this.name}
             age is ${this.age}`)
    }
}
people1.biology();
document.getElementById("test").innerHTML = people1.name;

// class name
class human {
    age = 19;
    hobbies = ["Gym", "Coding"];
    bios() {
        console.log("Hello");
    }
}
let people2 = new human();
let people3 = human;
console.log(typeof(people2));
console.log(typeof(human));
console.log(typeof(people1));
console.log(typeof(people3));

document.querySelector(".test2").innerHTML = people2.age;

class human1 {
    static age = 22;
    static hobbies = ["Gym", "Reading"];
    static biology1() {
        console.log("humanOne");
    }
}
console.log(typeof(human1));

// Public
// private
// Protected
// Static