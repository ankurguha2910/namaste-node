/**
 * a = 100
 * Last line of the file
 * process.nextTick
 * Promise callback
 * Call now
 * setImmmediate
 * File read CB
 */
const fs =  require("fs");
let a = 100;
//executed during the check phase of the Event loop
setImmediate(() => {
    console.log("setImmmediate");
});

//executed during the prority based Promise callbck check of the Event loop
Promise.resolve().then(() => {
    console.log("Promise callback");
});

//executed during the poll phase of the Event loop
fs.readFile("./file.txt", "utf8", () => {
    console.log("File read CB");
});

//executed during the timer phase of the Event loop
setTimeout(() => {
    console.log("Call now");
}, 0);

//executed during the prority based process.nextTick() callbck check of the Event loop
process.nextTick(() => {
    console.log("process.nextTick");
});

//synchronous code executed in the call stack of the main thread
function printA()
{
    console.log("a =",a);
}
//synchronous code executed in the call stack of the main thread
printA();
//synchronous code executed in the call stack of the main thread
console.log("Last line of the file");