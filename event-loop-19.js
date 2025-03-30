/**
 * End of script
 * nextTick 1
 * Promise 1
 * setTimeout 1
 * nextTick inside setTimeout
 * Promise inside setTimeout
 */
setTimeout(() => {
    console.log("setTimeout 1");

    process.nextTick(() => {
        console.log("nextTick inside setTimeout");
    });

    Promise.resolve().then(() => {
        console.log("Promise inside setTimeout");
    });

}, 0);

process.nextTick(() => {
    console.log("nextTick 1");
});

Promise.resolve().then(() => {
    console.log("Promise 1");
});

console.log("End of script");