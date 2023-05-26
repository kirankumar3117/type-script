class Person{
    constructor(public firstName: string, public lastName: string){};

    get fullName(){
        return this.firstName + " " + this.lastName;
    }

    protected walk(){
        console.log("walcking !");
        this.talk()
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

// Abstract classes

abstract class Shape{
    constructor(public color:string){}

    abstract render():void;
}

class Circle extends Shape{
    constructor(public radius:number,color: string){
        super(color)
    }

    override render(): void {
        console.log("Rendering a Circle !")
    }

} 

//  Interface

interface ICalendar{
    name: string;
    addEvent():void;
    removeEvent():void;
}

interface CloudCalendar extends ICalendar{
    sync(): void;
}

class GoogleCalendar implements ICalendar{
    constructor(public name:string){}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}