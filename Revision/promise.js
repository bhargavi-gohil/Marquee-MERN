let promise = new Promise((resolve, reject) => {
    let x = true;
    if (x) {
        resolve("data fetched ....");
    } else {
        reject("failed");
    }
});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});