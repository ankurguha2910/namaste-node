const fs = require("node:fs");//core module provided by Node.js
const https = require("node:https");//core module provided by Node.js

console.log("Hello world");

let a = 14789;
let b = 96321;

//Synchronous operation - BLOCKS THE MAIN THREAD; NEVER USE THESE METHODS!
fs.readFileSync("./file.txt", "utf8");
console.log("This is printed only after the file is read");

//Asynchronous operation
//This callback will only be pushed to call stack in V8 once the call stack of the main thread is empty
https.get("https://dummyjson.com/products/1",
    (res) => {
        console.log("Fetched data successfully");
    }
);

//Asynchronous operation
//This callback will only be pushed to call stack in V8 once the call stack of the main thread is empty
setTimeout(() => {
    console.log("Print after 5 seconds");
}, 5000);

//Asynchronous operation
//This callback will only be pushed to call stack in V8 once the call stack of the main thread is empty
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File data: ", data);
});

function funMultiply(a,b)
{
    const result = a * b;
    return result;
}

c = funMultiply(a,b);
console.log("The product of",a," and ",b," is ",c);