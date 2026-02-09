// Generic Functions
// Generic Interfaces 
// Generic Classes


{// Generic Functions

// we are going to learn it by problems means why we need to use generic then it solution.
{// Problem:
    
    function input(val:string){}
    input("fahad")
    // but we know that this function have any value in future like string,number,boolean,null etc.
    // For that we have to give parameter by union but there is when generic used
}

{//Solution:

    function input<T>(input:T){}
    input<string>("fahad");  // We can define <string> but this is optional typescript infer it automatically of which type is this
    input(12);
    input(undefined);
    input(null);
    

}



}

{// Generic Interfaces 

interface User<T> {
    age : number;
    name : string;
    api : T
}    

function userValues(obj:User<string>): void{
    obj.age
}
userValues({age : 12 , name : "Fahad" , api : "FAhad12233"})

}

{// Generic Classes

class bottleMaker<T>{
    constructor(public key:T){}
} 

let b1 = new bottleMaker(12); // It infer automatically by using generics.

}
