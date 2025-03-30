/**
 * Script End
 * setTimeout 3
 * setTimeout 1
 * setTimeout 2
 */
setTimeout(() => {
    console.log("setTimeout 1");

    setTimeout(() => {
        console.log("setTimeout 2");
    }, 0);
}, 100);

setTimeout(() => {
    console.log("setTimeout 3");
}, 0);

console.log("Script End");