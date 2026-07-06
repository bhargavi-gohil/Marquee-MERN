// 1. Function can be stored in a variable.
// 2. Function can be return from another function.
// 3. Function can be pass as argument


function greet(name){
    return `Hello, ${name}`;
}

function execute(fn,name){
   return fn(name);
}


let v =execute(greet,"xyz");
// console.log(v);

// Create a function that returns a function...


function fn(a,b,add){
    return add(a,b);
}

function add(a,b){
    return a+b;
}

let sum = add(2,3);
// console.log(sum);

// Expression function
// A function expression is a function that is stored in a variable.

let sum1 = function(a,b){
    return a+b;
}

// ANONYMOUS FUNCTION:
// A function without a name is called an anonymous function.

let sum3 = function(a,b){
    return a+b;
}
// console.log(sum1(2,3));

// ARROW FUNCTION:
// Arrow functions are a more concise syntax for writing function expressions.


let sum2 = (a,b) => a+b;
// console.log(sum2(2,3));


// Rest Operator: 

// syntax : 
// function myFunction(a, b, ...args) {
//   // code to be executed
// }

let values = [1,2,3,4];
let [val1,val2,...rest] = [...values];

// console.log(val1);
// Spread Operator:

// return value : function can return a value using the return statement. If no return statement is used, the function will return undefined by default.
// early return :function exits as soon as it hits a return statement, and the rest of the code in the function is not executed. This is known as an early return.

// immediately invoked function expression (IIFE): 
// An IIFE is a function that is defined and executed immediately after its creation. 
// It is often used to create a new scope and avoid polluting the global namespace.

(function(a,b){
    console.log("IIFE");
    console.log(a, b);
})(2,3);

