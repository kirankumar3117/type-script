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