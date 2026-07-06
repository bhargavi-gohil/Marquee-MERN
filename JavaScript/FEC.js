debugger;
console.log("Global Execution context Starts:");

var global = "I am global var";

console.log(global);
console.log(globalFun);
globalFun;

console.log("Global execution context ends");

var globalFun = function() {
    console.log("Inside global function...");
};