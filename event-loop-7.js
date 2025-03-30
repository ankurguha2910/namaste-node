/**
 * End of script
 * nextTick 1
 * Promise 1
 * setTimeout 1
 * nextTick inside setTimeout
 * Promise inside setTimeout
 * setImmediate 1 (since the check phase callback queue was having a setImmediate task; that is why it was executed first)
 * setImmediate inside setTimeout
 */
setTimeout(() => {
    console.log("setTimeout 1");

    setImmediate(() => {
        console.log("setImmediate inside setTimeout");
    });

    process.nextTick(() => {
        console.log("nextTick inside setTimeout");
    });

    Promise.resolve().then(() => {
        console.log("Promise inside setTimeout");
    });

}, 0);

setImmediate(() => console.log("setImmediate 1"));

process.nextTick(() => console.log("nextTick 1"));

Promise.resolve().then(() => console.log("Promise 1"));

console.log("End of script");