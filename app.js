require("./xyz.js"); //call one module into another module (Common JS module pattern)

//const {x, calculateSum} = require("./calculate/sum.js"); //even without giving extension the file name can be written inside the require() function

//import {x,calculateSum} from "./sum.js"; //importing by ES module pattern

//const {calculateMultiply} = require("./calculate/multiply.js");

const {x, calculateSum, calculateMultiply} = require("./calculate");

const json_data = require("./data.json"); //importing json file

console.log(json_data);

var name = "Namaste Node Entry point";

var a = 10;

var b = 20;

//var x = 190; //here we are reusing the variable name, x; since this variable is not imported from the module sum.js

console.log("============Entry point starts============");
console.log(name);
console.log(a+b);
console.log(a-b);
console.log(x);
// console.log(global);
//console.log(this); //here this implies empty object
console.log(globalThis == global); //globalThis points to the global object across all browsers and javascript run time environments
console.log("==========Entry point ends==============");

//console.log(x);
calculateSum(a,b);
calculateMultiply(a,b);