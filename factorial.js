// find factorial number;
const inputd = document.querySelector("#sub-id");
const cleard = document.querySelector("#id-clear");
const result = document.getElementById("dom-msg");

inputd.onclick = () => {
    let num = Number(document.querySelector("#input-id").value);
    let total = 1;
    for(let i = 1; i <= num; i++) {
        total = total * i;
    }
    result.innerHTML = total;
}

cleard.onclick = () => {
    let num = document.querySelector("#input-id");
    num.value = "";
    result.innerHTML = "";
}