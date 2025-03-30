/***
 * Start
 * End
 * nextTick 1
 * Promise 1
 * setTimeout 1
 * setImmediate 1
 */
console.log("Start");

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

setImmediate(() => {
    console.log("setImmediate 1");
});

Promise.resolve().then(() => {
    console.log("Promise 1");
});

process.nextTick(() => {
    console.log("nextTick 1");
});

console.log("End");
