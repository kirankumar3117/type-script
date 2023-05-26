class Person{
    constructor(public firstName: string, public lastName: string){};

    get fullName(){
        return this.firstName + " " + this.lastName;
    }

    protected walk(){
        console.log("walcking !")
    }

    private talk(){
        console.log("he is speacks endlish as well :)")
    }




}

class Student extends Person{
    constructor(public readonly id: number,firstName: string,lastName: string){
        super(firstName, lastName);
    }

    takeTest() {
        console.log("Taking a test :)");
        // this.talk();
        this.walk();
    }


}

let student = new Student(1, "kiran", "kumar");

class Teature extends Person{
    override get fullName(){
        return "mr/ms" +" "+ super.fullName;
    }
}


// polymorphism

printNames([
    new Student(1, "Kiran", "Kumar"),
    new Teature( "Kiran", "Kumar")
])

let student3=new Student(1, "kiran", "kumar");

console.log(student3.takeTest())

function printNames(people:Person[]){
    for(let person of people)
        console.log(person.fullName)
}

