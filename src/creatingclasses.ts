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
    // set balance(val:number){
    //     if(val < 0)
    //         throw new Error("Invlid value")
    //     this._balance=val;
    // }

}

let account = new Account(1, "Kiran", 0);

account.deposit(100);

console.log(account.balance);
console.log(account);
console.log(typeof account)
console.log(account instanceof Account)