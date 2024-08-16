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
// document.getElementById("test1").innerHTML = people1.biology()