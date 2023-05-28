class KeyValuePair<K, V>{
    constructor(public key:K, public value: V  ){}
}

let pair=new KeyValuePair<string, string>("1", "kiran")
let pair1=new KeyValuePair(1, "kiran");

class ArrayUtils{
    static wrapInArray<T>(value: T){
        return [value]
    }
}

let utils=ArrayUtils.wrapInArray("1")


interface Result<T>{
    data: T | null;
    error: string | null;
}

function fetch<T>(url:string):Result<T> {
    return { data : null, error: null}
}

interface User{
    username: string;
}

interface Product{
    title: string
}

let resultofuser = fetch<User>('url');

resultofuser.data?.username;

let resultofproduct = fetch<Product>('url');

resultofproduct.data?.title;


// generic constrains


function echo<T extends number | string>(value: T){
    return value
}

echo(1)
echo("1")


function echo2<T extends {name: string}>(value: T){
    return value.name;
}

echo2({name : "kiran"});

class Person3{
    constructor(public name: string){}
}

class Customer03 extends Person3{

}

function echo3<T extends Person3>(value: T){
    return value.name
}

echo3({name: "kiran"})


// generic classe and inheritance 

interface Product{
    name: string;
    price: number;
}

class Store<T>{
    protected _object: T[]=[];
    add(obj: T):void {
        this._object.push(obj)
    }

    find(property: keyof T, value:unknown): T | undefined {
        return this._object.find( obj => obj[property] === value);
    }
}

let store2 = new Store<Product>();

// keyof operator

store2.find("name",3);

// store2.find("pen",2);  we get compile error

//  passing on the generic type parameter

class CompressibleStore<T> extends Store<T>{
    compress(){}
}

// Restring the generic type parameter

class SearchbleStore<T extends {name : string}> extends Store<T>{
     find(name : string) : T | undefined{
        return this._object.find(obj => obj.name === name);
    }
}


// Fix the generic type parameter

class ProductStore extends Store<Product>{
    filterByCategory(category: string): Product[]{
        return []
    }
};




//  Type Mapping

interface Product01{
    name: string;
    price: number
}

type ReadOnlyProduct={
    readonly [K in keyof Product01]: Product[K]
}

let product01: ReadOnlyProduct={
    name:"pen",
    price:3
}

// product01.name=5; compile error

//  adding generic type mapping 

type ReadOnly<T>={
    readonly [K in keyof T]:T[K]
}

type Optional<T>={
    readonly [K in keyof T]?:T[K]
}

type Nullable<T> = {
    readonly [K in keyof T]:T[K] | null;
}