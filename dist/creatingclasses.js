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
