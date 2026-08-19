// let promise = new Promise((resolve, reject) => {
//     let x = true;
//     if (x) {
//         resolve("data fetched ....");
//     } else {
//         reject("failed");
//     }
// });

// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched...")
        },2000);
    });
}
// async function -> fetch data from promise and wait for it to resolve
async function show(){
    console.log("waiting");
    let x = await getData();
    console.log(x);
    console.log("Hello!");
}
// show();

// setTimeout() => setTimeout() is 
// a built-in JavaScript function that allows you to execute a function after a specified delay (in milliseconds).
//  It takes two arguments: the function to be executed and the delay time in milliseconds.

// console.log("START");
// setTimeout(()=>{
//     console.log("Hello!");
// },5000);

// console.log("end");

// setInterval() => that allows you to execute a function repeatedly at specified intervals (in milliseconds).

let timer = setInterval(()=>{
    console.log("hello")
},1000);

console.log("timer started");
// clearInterval(timer);