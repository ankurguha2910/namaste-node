/**
 * Script End
 * nextTick 1
 * nextTick 2
 * setImmediate 1
 * setImmediate 2
 */
process.nextTick(() => {
    console.log("nextTick 1");
    process.nextTick(() => {
        console.log("nextTick 2");
    });
});

setImmediate(() => {
    console.log("setImmediate 1");
    setImmediate(() => {
        console.log("setImmediate 2");
    });
});

console.log("Script End");