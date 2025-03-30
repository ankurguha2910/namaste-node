/**
 * nextTick 1
 * Promise 1
 * setImmediate 1
 * setTimeout 1
 * 
 * The following order can also be printed if the timer delay expires after executing the microtasks,before the event loop reaches the timer phase
 * nextTick 1
 * Promise 1
 * setTimeout 1
 * setImmediate 1
 */
setTimeout(() => {
    console.log("setTimeout 1");
}, 10);

setImmediate(() => {
    console.log("setImmediate 1");
});

process.nextTick(() => {
    console.log("nextTick 1");
});

Promise.resolve().then(() => {
    console.log("Promise 1");
});