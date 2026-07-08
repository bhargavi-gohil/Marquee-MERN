
// 1. map method is used to create a new array by applying a function to each element of the original array.
// 

// const marks = [12,98,76,45,34,67,99]
// const totalMarks =marks.map((element) => {
//     return Number(element*2);
// });

// console.log(totalMarks)

// forEach Loop:

marks.forEach(function (el,index) {
    // console.log(`${el} at index: ${index}`);
    
})

// reduce()
const numbers = [1, 2, 3, 4, 5];
const res = numbers.reduce((accumulator, currentValue, index) => {
    return accumulator + currentValue;
}, 0);

// console.log(res) // Output: 15

// find() and filter() 
// provide element otherwise undefined...
const marks = [12,98,76,45,34,67,99]
console.log(marks.find((el) => el == 98));

// if element doesn't match --> empty array
console.log(marks.filter((el) => el == 45));