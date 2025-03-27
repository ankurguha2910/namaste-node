const fs = require("fs");
const https = require("https");

console.log("Hello world");

let a = 14789;
let b = 96321;

https.get("https://dummyjson.com/products/1",
    (res) => {
        console.log("Fetched data successfully");
    }
);

setTimeout(() => {
    console.log("Print after 5 seconds");
}, 5000);

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