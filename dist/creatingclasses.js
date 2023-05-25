"use strict";
class Account {
    constructor(id, owner, balence) {
        this.id = id;
        this.owner = owner;
        this.balance = balence;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, "Kiran", 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);