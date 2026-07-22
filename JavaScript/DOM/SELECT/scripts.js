
// 1. getElementById 
// if multiple elements have the same id, it will return the first one only.
let ul1 = document.getElementById('unordered1')
// console.log(ul1);

// 2. getElementsByTagName
// it will return all the elements with the given tag name in the form of HTMLCollection.
let ul2 = document.getElementsByTagName('ul')
// console.log(ul2);

// 3. getElementsByClassName
// it will return all the elements with the given class name in the form of HTMLCollection.
let ul3 = document.getElementsByClassName('lists')
// console.log(ul3);

let items = document.getElementsByClassName('lists');

Object.values(items).forEach((el) => {
    // console.log(el.textContent);
});

let allElements = document.getElementsByTagName('li');

Object.values(allElements).forEach((el) => {
    // console.log(el.textContent");
});

// 4. getElementByName 
let list = document.getElementsByName('');
// console.log(list);

//  QUERY SELECTOR 

let l = document.querySelector("ul");

// Select the list(nth) child <li>
let firstItem = l.querySelector("li:nth-child(3)");
// console.log(firstItem.textContent);

// 