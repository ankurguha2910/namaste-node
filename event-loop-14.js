/**
 * Script End
 * setTimeout 1
 * setImmediate 1
 * setImmediate inside setTimeout
 */
setTimeout(() => {
    console.log("setTimeout 1");

    setImmediate(() => {
        console.log("setImmediate inside setTimeout");
    });
}, 0);

setImmediate(() => {
    console.log("setImmediate 1");
});

console.log("Script End");