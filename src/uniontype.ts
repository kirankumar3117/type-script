

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
}