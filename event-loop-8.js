/**
 * Start
 * End
 * nextTick 1
 * Promise 1
 * Timeout 1
 * Timeout 2
 * Immediate 1
 * Immediate 2
 */
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

setImmediate(() => {
    console.log("Immediate 1");
});

process.nextTick(() => {
    console.log("nextTick 1");
});

Promise.resolve().then(() => {
    console.log("Promise 1");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

setImmediate(() => {
    console.log("Immediate 2");
});

console.log("End");