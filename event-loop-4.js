/* Dry run output
* last line of the file
* nextTick
* 2nd nextTick
* Promise
* Timer expired
* setImmediate
* File read CB
*/
const fs = require("fs");

setImmediate(() => {
    console.log("setImmediate");
});

setTimeout(() => {
    console.log("Timer expired");
}, 0)

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File read CB");
});

process.nextTick(() => {
    process.nextTick(() => console.log("2nd nextTick"));
    console.log("nextTick");
});

console.log("last line of the file");