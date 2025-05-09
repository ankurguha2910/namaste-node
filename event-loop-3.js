/* Dry run output
* Last line of file
* nextTick
* Promise
* Timer expired
* setImmediate
* File reading CB
* 2nd nextTick
* 2nd setImmediate
* 2nd timer
*/
const fs = require("fs");

setImmediate(() => {
    console.log("setImmediate");
});

setTimeout(() => {
    console.log("Timer expired");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => {
        console.log("2nd timer");
    });

    process.nextTick(() => {
        console.log("2nd nextTick");
    });

    setImmediate(() => {
        console.log("2nd setImmediate");
    });

    console.log("File reading CB");
});

process.nextTick(() => {
    console.log("nextTick");
});

console.log("Last line of file");