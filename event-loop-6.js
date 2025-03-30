/**
 * Last line
 * nextTick outside
 * Promise outside
 * setTimeout outside
 * setImmediate outside
 * File Read
 * nextTick inside readFile
 * Immediate inside readFile
 * Timeout inside readFile
 */
const fs = require("fs");

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Read");

    setTimeout(() => console.log("Timeout inside readFile"), 0);

    setImmediate(() => console.log("Immediate inside readFile"));

    process.nextTick(() => console.log("nextTick inside readFile"));
});

setImmediate(() => console.log("setImmediate outside"));

setTimeout(() => console.log("setTimeout outside"), 0);

Promise.resolve().then(() => console.log("Promise outside"));

process.nextTick(() => console.log("nextTick outside"));

console.log("Last line");