/**
 * Start
 * End
 * nextTick 1
 * Promise 1
 * setTimeout 1
 * setImmediate 1
 * File Read
 * nextTick inside readFile
 * Promise inside readFile
 * setImmediate inside readFile
 * setTimeout inside readFile
 */
const fs = require("fs");
console.log("Start");

setTimeout(() => console.log("setTimeout 1"), 0);

fs.readFile("./file.txt", () => {
    console.log("File Read");

    setTimeout(() => console.log("setTimeout inside readFile"), 0);

    setImmediate(() => console.log("setImmediate inside readFile"));

    process.nextTick(() => console.log("nextTick inside readFile"));

    Promise.resolve().then(() => console.log("Promise inside readFile"));
});

setImmediate(() => console.log("setImmediate 1"));

process.nextTick(() => console.log("nextTick 1"));

Promise.resolve().then(() => console.log("Promise 1"));

console.log("End");