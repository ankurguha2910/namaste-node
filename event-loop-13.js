/**
 * End of script
 * setTimeout 1
 * setImmediate 1
 * setTimeout inside setImmediate
 */
setImmediate(() => {
    console.log("setImmediate 1");

    setTimeout(() => {
        console.log("setTimeout inside setImmediate");
    }, 0);
});

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

console.log("End of script");