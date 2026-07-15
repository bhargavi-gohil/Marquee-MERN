/* class -> template for creating objects..
    classes are functions, but instead of using the function keyword, we use the class keyword to define them.

    pascal case -> class name should be in pascal case.
    constructor -> special method for creating and initializing an object created with a class.

    typeof class -> function

*/
class Bank {
    constructor(accountHolder,mobile,email,balance){
        this.accountHolder = accountHolder;
        this.mobile = mobile;
        this.email = email;
        this.balance = balance;
    }
    email(email) {
        if (email.includes('@')) {
            this._email = email;
        } else {
            console.log('Invalid email');
        }
    }
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

console.log(person1.email); // 