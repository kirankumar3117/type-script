"use strict";
var _a;
function kgToGrams(weight) {
    if (typeof weight == "number")
        return weight * 2;
    else
        return parseInt(weight) * 2;
}
console.log(kgToGrams(10));
console.log(kgToGrams("20kg"));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
// Nullable
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hello!');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date };
}
let customer = getCustomer(1);
// Optional property access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional element operator (usefull when we are dealing with array)
//  nullish 
let speed = null;
let ride = {
    // Falsy (undefined, null,"",false,0);
    //  speed: speed !== null ? speed = 30
    // Nullish coaliscing operator
    speed: speed !== null && speed !== void 0 ? speed : 30
};
// Type Assertion 
let phone = document.getElementById("phone");
// let phone = <HTMLInputElement> document.getElementById("phone");
// both are valid
phone.value;
//  unknown 
function render(doc) {
    // Narrowing
    if (typeof doc === "string") {
        doc.toLowerCase();
    }
}
// never Type 
function returnSomething() {
    while (true) {
        // Todo
    }
}
returnSomething();
console.log("helloworld");
