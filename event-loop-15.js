/**
 * Script End
 * setTimeout outside
 * setImmediate outside
 * File Read
 * nextTick inside readFile
 * Promise inside readFile
 * setImmediate inside readFile
 * setTimeout inside readFile
 */
const fs = require("fs");

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Read");

    process.nextTick(() => {
        console.log("nextTick inside readFile");
    });

    setImmediate(() => {
        console.log("setImmediate inside readFile");
    });

    Promise.resolve().then(() => {
        console.log("Promise inside readFile");
    });

    setTimeout(() => {
        console.log("setTimeout inside readFile");
    }, 0);
});

setTimeout(() => console.log("setTimeout outside"), 0);
setImmediate(() => console.log("setImmediate outside"));

console.log("Script End");