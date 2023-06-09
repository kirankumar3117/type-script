"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    ;
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Kiran", 0);
account.deposit(100);
console.log(account.balance);
//  Index signature for creating properties dynamically
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "kiran";
seats.A2 = "kumar";
// Static member
class Ride {
    start() { Ride._activeRides++; }
    ;
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
