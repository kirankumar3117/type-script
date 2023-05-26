"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walcking !");
    }
    talk() {
        console.log("he is speacks endlish as well :)");
    }
}
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    takeTest() {
        console.log("Taking a test :)");
        this.talk();
        this.walk();
    }
}
let student = new Student(1, "kiran", "kumar");
class Teature extends Person {
    get fullName() {
        return "mr/ms" + " " + super.fullName;
    }
}
// polymorphism
printNames([
    new Student(1, "Kiran", "Kumar"),
    new Teature("Kiran", "Kumar")
]);
let student3 = new Student(1, "kiran", "kumar");
console.log(student3.takeTest());
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
