/**
 * End
 * nextTick 1
 * nextTick 2
 * nextTick 3
 * setImmediate 1
 * setImmediate 2
 */
process.nextTick(() => {
    console.log("nextTick 1");
    process.nextTick(() => {
        console.log("nextTick 2");
        process.nextTick(() => {
            console.log("nextTick 3");
        });
    });
});

setImmediate(() => {
    console.log("setImmediate 1");
    setImmediate(() => {
        console.log("setImmediate 2");
    });
});

console.log("End");