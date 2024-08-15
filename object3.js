let people1 = {
    name : "Kyaw Kyaw",
    age : 28,
    gender : "male",
    job : "Developer",

    biology : function () {
        console.log(
            `${this.name}
             age is ${this.age}`)
    }
}
people1.biology();
document.getElementById("test").innerHTML = people1.name;