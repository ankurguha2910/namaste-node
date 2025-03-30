/**
 * Script end
 * Timeout outside
 * Immediate outside
 * File read callback
 * nextTick inside readFile
 * Promise inside readFile
 * Immediate inside readFile
 * Timeout inside readFile
 */
const fs = require("fs");

fs.readFile("./file.txt", "utf8", () => {
    console.log("File read callback");

    setTimeout(() => console.log("Timeout inside readFile"), 0);

    setImmediate(() => console.log("Immediate inside readFile"));

    process.nextTick(() => console.log("nextTick inside readFile"));

    Promise.resolve().then(() => console.log("Promise inside readFile"));
});

setTimeout(() => console.log("Timeout outside"), 0);

setImmediate(() => console.log("Immediate outside"));

console.log("Script end");