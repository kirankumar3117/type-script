class Account {

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {

    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount
    };

    get balance(): number {
        return this._balance;
    }
   

}

let account = new Account(1, "Kiran", 0);

account.deposit(100);

console.log(account.balance);


//  Index signature for creating properties dynamically


class SeatAssignment{
    // A1, A2 ...
    // kiran kumar
    // Index signature properties
    [seatNumber: string]: string

}

let seats = new SeatAssignment();
seats.A1 = "kiran";
seats.A2 = "kumar";
