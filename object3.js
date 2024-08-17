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

class calc {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        document.querySelector("#test3").innerHTML = `
            Add two numbers = ${this.num1 + this.num2}`;
        console.log(`Add two numbers = ${this.num1 + this.num2}`);
    }
    sub() {
        document.querySelector("#test4").innerHTML = `
            Subtract two numbers = ${this.num1 - this.num2}`;
        console.log(`Subtract two numbers = ${this.num1 - this.num2}`);
    }
    multi() {
        document.querySelector("#test5").innerHTML = `
            Multiple of two numbers = ${this.num1 * this.num2}`;
        console.log(`Multiple of two numbers = ${this.num1 * this.num2}`);
    }
    division() {
        document.querySelector("#test6").innerHTML = `
            Division of two numbers = ${this.num1 / this.num2}`;
        console.log(`Division of two numbers = ${this.num1 / this.num2}`);
    }
}
let obj = new calc(100,20);
obj.add();
obj.sub();
obj.multi();
obj.division();

let obj2 = new calc(30, 3);
obj2.add();
obj2.sub();
obj2.multi();
obj2.division();

// Object Oriented Programming -3;
class car {
    constructor(name) {
        this.name = name;
    }
    drive() {
        document.querySelector("#test7").innerHTML = this.name + " " + "Boom Boom....";
        console.log(this.name + " " + "Boom Boom ....");
    }
}
class toyota extends car {
    constructor(name, color) {
        super(name);
        this.color = color; 
    }
    bios2() {
        document.querySelector("#test8").innerHTML = "This is " + this.color + " " + "color toyota car.";
        console.log("This is " + this.color + " " + "color toyota car.");
    }
}

let obj3 = new toyota("markII", "blue");
obj3.bios2();
obj3.drive();