const crypto = require("node:crypto");//cored module provided by Node.js

console.log("Hello World");

let a = 123456;
let b = 998877;

//Full form of pbkdf2 is Password-Based Key Derivative Function

//Synchronous operation - BLOCKS THE MAIN THREAD; NEVER USE THESE METHODS!
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key generated");

//Asynchronous operation
//This callback will only be pushed to call stack in V8 once the call stack of the main thread is empty
setTimeout(() => {
    console.log("Call right now");
},0);

//Asynchronous operation
//This callback will only be pushed to call stack in V8 once the call stack of the main thread is empty
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Second key generated");
});

function funMultiply(a,b)
{
    const result = a * b;
    return result;
}

c = funMultiply(a,b);
console.log("The product of",a," and ",b," is ",c);