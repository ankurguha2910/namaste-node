let a = 124789;
let b = 987321;
console.log("Hello world");

//Asynchronous operation
//This callback will only be pushed to call stack in V8 once the call stack of the main thread is empty
setTimeout(() => {
    console.log("Call right now");
},0);

//Asynchronous operation
//This callback will only be pushed to call stack in V8 once the call stack of the main thread is empty
setTimeout(() => {
    console.log("Call after 3 seconds");
}, 3000);

function funMultiply(a,b)
{
    const result = a * b;
    return result;
}

c = funMultiply(a,b);
console.log("The product of",a," and ",b," is ",c);