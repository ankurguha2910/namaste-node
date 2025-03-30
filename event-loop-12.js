/**
 * Start
 * End
 * nextTick 1
 * nextTick 2
 * Promise 1
 * Promise 2
 * setTimeout 1
 * setImmediate 1
 */
console.log("Start");

setImmediate(() => {
    console.log("setImmediate 1");
});

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

process.nextTick(() => {
    console.log("nextTick 1");
    process.nextTick(() => {
        console.log("nextTick 2");
    });
});

Promise.resolve().then(() => {
    console.log("Promise 1");
    return Promise.resolve();
}).then(() => {
    console.log("Promise 2");
});

console.log("End");