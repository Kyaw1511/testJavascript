outerLoop: for (let i = 0; i < 5; i ++) {
    console.log("Outerloop : i = ", i);
    
    for (let j = 0; j < 5; j++) {
        if (j === 3) {
            console.log("Breaking both loops when j is ", j);
            break outerLoop;
        }
        console.log("inner loop: j = ", j);
    }
}