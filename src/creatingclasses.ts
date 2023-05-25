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


// Static member

class Ride{
    private static _activeRides:number=0;

    start(){Ride._activeRides++};
    stop(){Ride._activeRides--}

    static get activeRides(){
        return Ride._activeRides;
    }
}

let ride1=new Ride();
ride1.start();

let ride2=new Ride();
ride2.start();

console.log(Ride.activeRides)

