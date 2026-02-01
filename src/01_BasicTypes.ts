{// Types
    // Primitive 
    // primitive are Number , string , boolean etc...
    let a = 10;
    let b = a;
    a = 12; //Here the value of a is not change it is reassigned means in primitive the values are fixed only they reassign them so b = 10 always it is stored in stack memory and this is a fixed memory not changable.

    // Non-Primitive 
    // Non primitive are arrays , object and functions
    let arr = [1,2,3,4,6];
    let arr2 = arr
    arr.pop(); // Here arr1 is change because it give the reference in refernce when we change the value it also change its main value.It is stored in heap memory.

}

{// Basic Types
// Number , boolean , string ,array , tuples , unknown, any , never , null , undefined and void

//1.Number: 
let a: number = 5;  

//2.boolean: 
let b: boolean = true;

//3.string: 
let c:string = "Fahad"; 

//4.array: 
let d:number[] = [1,2,3,4,6,7,89];

//5.tuple: 
let e: [number , string] = [22 , "Fahad"]; 

//6.any: 
let f:any; // Any means we are writing plain JS.With any typescript basically stops working.

//7.never: 
let g = (): never => {while (true) { // In never execution is never completed.
    console.log("Infinite");  
}}
// g(); // in never it returns nothing it is basiclly used for infinite loops or for throwing an error.

//8.unknown: 
let h: unknown; // in unknown we have to narrowing the types means we have to use checks to use the value otherwise there is an error
h = 9;
h = "fahad";

//9.null: 
let i: null; // it means when we trying to find something and we get nothing that is null. 

//10.undefined: 
let j: undefined; // its means its value shoud be something in future.

//11.void:
let k = ():void => {
    console.log("Fahad"); // Void means The exeucution is completed but nothing return useful.
    
} 
}

{// Type Inference
let a = 12; // This is type inference , it means it automaticaly discover which type is this. like here it is number.

}

{// Type anotation
let name: string = "Fahad" ; // Here it is annotaion , means when we write type manually it is type annotaion 

}

{// Enums
enum userRoles{
    ADMIN = "admin",
    GUEST = "guest",
    STUDENT = "student"
}

userRoles.ADMIN;
}
