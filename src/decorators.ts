
function Component(constructor: Function){
    console.log("Compoenent Decorator Called")
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom=()=>{
        console.log("Inserting the component in the DOM")
    };
}


@Component
class ProfileComponent {

};

// Parameterized decorator


type ComponentActions = {
    selector: string
}


// Decorator factory
function Component01(options: ComponentActions){
    return (constructor: Function)=>{
        console.log("Compoenent Decorator Called")
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.option = options;
        constructor.prototype.insertInDom=()=>{
            console.log("Inserting the component in the DOM")
        };
    }
}

function Pipe(constructor: Function){
    console.log("Pipe Decorator Called")
    constructor.prototype.pipe=true;
}

@Component01({selector: "#my-profile"})
@Pipe
class ProfileComponent01{

}

// Method Decorator 

function Log(target: any, methodName: string, descriptor: PropertyDescriptor ){
    const original= descriptor.value as Function;
    descriptor.value= function(...args: any) {
        console.log('Before');
        original.call(this, ...args)
        console.log('After');
    }

}

class Person01{
    @Log
    say(message: string){
        console.log('Persson says ' + message)
    }
}


let person01= new Person01();
person01.say('Hello')


//  Accessor Decorator
function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor){
    const original = descriptor.get;
    descriptor.get = function() {
        const result = original?.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result
    }
}

class Person02{
    constructor(public firstName: string, public lastName: string){

    }
    @Capitalize
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let person02 = new Person02("kiran", "kumar");
console.log(person02.fullName)