/**
 * a =100
 * Last line of the file
 * Call now
 * setImmediate
 * File read CB
 */
const fs = require("fs");
let a = 100;

setImmediate(() => {
    console.log("setImmediate");
});

fs.readFile("./file.txt", "utf8", () => {
    console.log("File read CB");
});

setTimeout(() => {
    console.log("Call now");
}, 0);

function printA()
{
    console.log("a =", a);
}

printA();
console.log("Last line of the file");