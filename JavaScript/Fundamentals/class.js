/*  let, var, const -> keywords used to declare variables in JavaScript.
    hoisting -> JavaScript's default behavior of moving declarations to the top of the current scope.

    factory function -> a function that returns an object. it is used to create multiple instances of the same type of object.
    constructor function -> a function that is used to create an object. it is called with the new keyword.
    map(), filter(), find() -> array methods that are used to manipulate arrays. 
    map() is used to create a new array by applying a function to each element of the original array.
     filter() is used to create a new array with all elements that pass a test implemented by the provided function.
      find() is used to return the value of the first element in the array that satisfies the provided testing function.

      slice() -> method that returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
       where start and end represent the index of items in that array. The original array will not be modified.
      splice() -> method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

      forEach() -> method that executes a provided function once for each array element.
      map() -> method that creates a new array populated with the results of calling a provided function on every element in the calling array.

      setter -> a method that sets the value of a property. it is called when a property is assigned a value.
      getter -> a method that gets the value of a property. it is called when a property is accessed.

    class -> template for creating objects..
    classes are functions, but instead of using the function keyword, we use the class keyword to define them.

    object use -> to create multiple instances of the same type of object, each with its own unique properties and methods.
    pascal case -> class name should be in pascal case.

    constructor -> special method for creating and initializing an object created with a class.

    typeof class -> function
    private properties -> properties that are not accessible outside the class. we can use the # symbol to make a property private.
    private methods --> to access them. we can use the # symbol to make a property private.
    why -> to encapsulate the implementation details of a class and prevent external code from directly accessing or modifying them. 
    This helps to maintain the integrity of the class and its data, and allows for better control over how the class is used.

    Static and how this works -> static methods are called on the class itself, rather than on instances of the class.

    this keyword -> refers to the current instance of the class. 
    It is used to access the properties and methods of the class from within its own methods.

    call, apply , bind -> methods that allow us to change the context of a function call.
    syntax -> functionName.call(thisArg, arg1, arg2, ...) - calls a function with a given this value and arguments provided individually.
    syntax -> functionName.apply(thisArg, [argsArray]) - calls a function with a given this value and arguments provided as an array (or an array-like object).
    syntax -> functionName.bind(thisArg, arg1, arg2, ...) - creates a new function with a given this value and arguments provided individually.
*/
class Bank {
    constructor(accountHolder,mobile,email,balance){
        this.accountHolder = accountHolder;
        this.mobile = mobile;
        this.email = email;
        this.balance = balance;
    }
    // email(email) {
    //     if (email.includes('@')) {
    //         this._email = email;
    //     } else {
    //         console.log('Invalid email');
    //     }
    // }
    set email(email) {
        if (email.includes('@')) {
            this._email = email;
        } else {
            console.log('Invalid email');
        }
    }
    get email() {
        return this._email;
    }
}

let person1 = new Bank('john', 1234566778, 'john@gmail.com', 2000);

console.log(person1.email); // john@gmail.com