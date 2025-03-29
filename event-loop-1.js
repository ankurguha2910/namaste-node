const fs = require("fs");
let a = 100;

setImmediate(() => {
    console.log("setImmediate");
});

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File data : ", data);
});

setTimeout(() => {
    console.log("Call now");
}, 0);

function printA()
{
    console.log("a =", a);
}

printA();
console.log("Last line of the file");