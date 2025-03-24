console.log("Sum module executed");

let x = "Hello from Sum module";
//export let x = 100; //ES module type export

function calculateSum(a , b) //this function can also be exported in ES module pattern by using the export keyword before the function body like export function ...
{
    const sum = a + b;

    console.log(sum);
}

//module.exports = {x, calculateSum}; //exporting using common js module pattern

//console.log(module.exports); // prints an empty object {}

//another way for exporting using common js module pattern
module.exports.x = x;
module.exports.calculateSum = calculateSum;