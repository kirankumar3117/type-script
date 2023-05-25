class Person{
    constructor(public firstName: string, public lastName: string){};

    get fullName(){
        return this.firstName + " " + this.lastName;
    }

    walk(){
        console.log("walcking !")
    }
}

class Student extends Person{
    constructor(public readonly id: number,firstName: string,lastName: string){
        super(firstName, lastName);
    }

    takeTest() {
        console.log("Taking a test :)")
    }
}

let student = new Student(1, "kiran", "kumar");

class Teature extends Person{
    override get fullName(){
        return "mr/ms" + super.fullName;
    }
}

let teature= new Teature("Kiran", "Kumar");

console.log(teature)

