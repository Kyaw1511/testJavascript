// error handling js
const value = 220;
try {
    value = 30;
} catch(error) {
    console.log(error.message);
}
const index = 300;
try {
    index = 30;
} catch(e) {
    if(e instanceof TypeError) {
        console.log("This is Type Error.");
    }
}