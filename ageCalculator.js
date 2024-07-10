// age Calculator
const button = document.querySelector("#calc");
const display = document.querySelector("#display");

button.onclick = () => {
    let d1 = Number(document.querySelector("#dd").value);
    let m1 = Number(document.querySelector("#mm").value);
    let y1 = Number(document.querySelector("#yy").value);

    if(d1 && m1 && y1) {
        let date = new Date();
        let d2 = date.getDate();
        let m2 = date.getMonth() + 1;
        let y2 = date.getFullYear();
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if(d1 > d2) {
            d2 += month[m2 -1];
            m2 -= 1 ;
        }
        if(m1 > m2) {
            m2 += 12;
            y2 -= 1;
        }
        let d = d2 - d1;
        let m = m2 -m1;
        let y = y2 - y1;

        display.innerHTML = `${y} Year, ${m} Month, ${d}Day.`;

        // console.log(d1, m1, y1);
        // console.log(typeof(d1, m1, y1));
        if(y2 < y1) {
            display.innerHTML = "Your date is over the present.";
            document.getElementById("display").style.color = "red";
            console.log("over");
        }
    }
    else {
        alert("Please enter the blank.");
    };
    // console.log("Hello World.");
}