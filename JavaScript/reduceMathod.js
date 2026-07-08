// WAP to get the total marks using reduce() method
// and then get the percentage..


const marks = [96,88,90,98,100]

const total = marks.reduce((accumulator, currentValue, index) => {
    return accumulator + currentValue;
}, 0);

const len = (marks.length)*100;
const percentage = marks.reduce((accumulator, currentValue, index) => {
    return (total/len)*100;
}, 0);

console.log(` total Marks ${total} and percentage ${percentage}%`);