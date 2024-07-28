// password js
function changeType(kmt) {
    const input = document.querySelector("#pw");
    if(input.type === "password") {
        input.type = "text";
        kmt.target.className = "bx bxs-hide";
    }
    else {
        input.type = "password";
    }

    console.log(input.value);
    console.log(kmt);
    console.log(kmt.target);
    console.log(kmt.target.className);
}