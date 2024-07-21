// Asynchronous 

document.write("Firs Line");
document.write("<br>");

setTimeout(() => {
    document.write("Second Line");
}, 5000);
document.write("<br>");

document.write("Third Line");
document.write("<br>");

// function call
function addNum() {
    let total = 0;
    for(let i = 1; i <=5000; i++) {
        total += i;
    };
    return total;
}
function displayRes(res) {
    console.log("This is .....", res);
}
let data = addNum();
displayRes(data);

// call back function
function addNumber(callBacking) {
    let sum = 0;
    for(let i = 1; i <= 10000; i++) {
        sum += i;
    };
    callBacking(sum);
}
function showRes(result) {
    console.log("This is .......", result);
}
addNumber(showRes);

// promise function;
function sumNum() {
    let add = 0;
    for(let i = 1; i<= 5000; i++) {
        add += i;
    }
    return add;
};
function sumLater() {
    return new Promise((resolve, reject) => {
        let ans = sumNum();
        if(ans) resolve(ans);
        else reject();
    })
};
sumLater().then(ans => console.log(ans)).catch(error => console.log(error));

// promise function => error
function sunNum2() {
    const add2 = 0;
    for(let i = 1; i <= 5000; i++) {
        add2 += i;
    }
    return add2;
};
function sunLater2() {
    return new Promise((resolve, reject) => {
        let ans2 = sunNum2();
        if(ans2) resolve(ans2);
        else reject();
    })
};
sunLater2().then(ans2 => console.log(ans2)).catch(error => console.log(error));

// asyn function and using await keyword;
function sunNum3() {
    let add3 = 0;
    for(let i = 1; i <= 5000; i++) {
        add3 += i;
    }
    return add3;
};
async function sunLater3() {
    let ans3 = await sunNum3();
    console.log("async"+ans3);
};
sunLater3();