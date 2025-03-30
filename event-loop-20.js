/**
 * End
 * nextTick 1
 * nextTick 2
 * nextTick 3
 * setTimeout 1
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

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

console.log("End");