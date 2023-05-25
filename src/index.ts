let slles:Number=3455_24;

let course:String = "TYPESCRIPT";

let is_published:Boolean=true;

let level:any;

let numbers:number[]=[];

// tuples

let user:[number,string]=[1,"kiran"];

user[0].toFixed(0);
user[1].length;
user.push(1)

console.log(user)


// enums

// PascalcCase

const enum Size {Small=1,Medium,Large}

let mysize: Size=Size.Large;

console.log(mysize)


function render(doc:String){
    console.log(doc)
} 

