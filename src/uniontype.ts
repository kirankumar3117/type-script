

function kgToGrams(weight: number|string):number{
    if(typeof weight == "number")
        return weight*2; 
    else
        return parseInt(weight)*2;
    
}

console.log(kgToGrams(10));
console.log(kgToGrams("20kg"))

// type intersection

type Dragable={
    drag:()=>void
};
type Resizable={
    resize:()=>void
};

type UIWidge = Dragable & Resizable;

let textBox:UIWidge={
    drag:()=>{},
    resize:()=>{}
};


// literals (to limit something)
type Quantity = 50 | 100;
let quantity: Quantity = 100;


// Nullable

function greet(name:string | null | undefined){
    if(name){
        console.log(name.toUpperCase());
    }else{
        console.log('Hello!')
    }
}

greet(null)

// optional chaining

type Customer={
    birthday?:Date
}

function getCustomer(id:number):Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date}
}

let customer =getCustomer(1);

// Optional property access operator

console.log(customer?.birthday?.getFullYear())

// Optional element operator (usefull when we are dealing with array)



//  nullish 

let speed:number | null = null;

let ride={
    // Falsy (undefined, null,"",false,0);
    //  speed: speed !== null ? speed = 30
    // Nullish coaliscing operator
    speed: speed ?? 30
}


