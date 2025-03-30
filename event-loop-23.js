/**
 * Start
 * End
 * setTimeout 1
 * (a delay of 3 seconds for the while loop)
 * setTimeout 2
 */
console.log("Start");

setTimeout(() => {
    console.log("setTimeout 1");
    
    let start = Date.now();
    while (Date.now() - start < 3000) {} // Blocking for 3 seconds

    setTimeout(() => console.log("setTimeout 2"), 0);
}, 0);

console.log("End");