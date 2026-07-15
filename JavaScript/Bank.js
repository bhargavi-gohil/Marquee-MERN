/* Step 1: Understanding the Requirements
We need to create a factory function named createBankAccount() that:
Has properties:
 accountHolder, mobile, email, and balance.
Has methods:
deposit(amount)
withdraw(amount)
checkBalance()
checkBankProfile()
Supports independent method calls using .call() or .apply().
Step 2: Implementing the Factory Function
We will use closures to keep the balance private and only accessible through the defined methods.
*/


function createBankAccount(accountHolder = 'john', mobile = 1234566778, email = 'bhargavi@545gmail.com', balance = 2000) {
    let currentBalance = balance;
    const profile = {
        accountHolder,
        mobile,
        email
    };

    return {
        deposit(amount) {
            if (typeof amount !== 'number' || amount <= 0) {
                console.log('Invalid deposit amount');
                return;
            }
            currentBalance += amount;
            console.log(`Deposited: ${amount}. New balance: ${currentBalance}`);
        },

        withdraw(amount) {
            if (typeof amount !== 'number' || amount <= 0) {
                console.log('Invalid withdraw amount');
                return;
            }
            if (amount > currentBalance) {
                console.log('Insufficient funds');
                return;
            }
            currentBalance -= amount;
            console.log(`Withdraw: ${amount}. New balance: ${currentBalance}`);
            sendEmailWithdraw.call(this,200)
        },

        checkBalance() {
            console.log(currentBalance);
        },

        checkBankProfile() {
            console.log(`Account Holder: ${profile.accountHolder}, Mobile: ${profile.mobile}, Email: ${profile.email}, Balance: ${currentBalance}`);
        }
    };
}
function sendEmailWithdraw(amount){
    console.log(`Hello john,
        withdrawal amount ${amount}`)
}
let bankAccount = createBankAccount();
// bankAccount.deposit(500);
bankAccount.withdraw(200);
// bankAccount.checkBalance();
// bankAccount.checkBankProfile();