/**
 * Script End
 * nextTick outside
 * Promise outside
 * Timeout outside
 * Immediate outside
 * File Read
 * nextTick in readFile
 * Promise in readFile
 * Immediate in readFile
 * Timeout in readFile
 */
const fs = require("fs");

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Read");

    setTimeout(() => console.log("Timeout in readFile"), 0);

    setImmediate(() => console.log("Immediate in readFile"));

    process.nextTick(() => console.log("nextTick in readFile"));

    Promise.resolve().then(() => console.log("Promise in readFile"));
});

setTimeout(() => console.log("Timeout outside"), 0);

setImmediate(() => console.log("Immediate outside"));

Promise.resolve().then(() => console.log("Promise outside"));

process.nextTick(() => console.log("nextTick outside"));

console.log("Script End");