/**
 * Start
 * (there will be a delay after this because of the for loop)
 * End
 * setTimeout 1
 * setImmediate 1
 */
console.log("Start");

setTimeout(() => console.log("setTimeout 1"), 0);
setImmediate(() => console.log("setImmediate 1"));

for (let i = 0; i < 2_000_000_000; i++) {} // Blocking loop

console.log("End");