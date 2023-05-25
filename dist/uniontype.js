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
//# sourceMappingURL=uniontype.js.map