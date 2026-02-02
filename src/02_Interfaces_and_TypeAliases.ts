{ //Interface 
//Defination of Interface:
// An interface is a powerful feature used to define the "shape" or structure of an object, class, or function

{//Interface Example
interface User {
    name : string,
    password : string,
    email : string
}

let abcd = (obj : User) => {
    
}
abcd({name : "Fahad" , password : "Fahad199" , email: "ffs199@gmail.com"}) // Here we have to give the values that User have like email , name and Password if one of them is missing then we got an error.
}

{//Extend interface: In this extend, Admin have all the values of User interface and his own value. but User have only there own values not admin.
interface User {
    name : string,
    password : string,
    email : string
}

interface Admin extends User{
    admin : boolean
}
}

{// Merge interface: In interface if we make 2 interfaces with same name they will be merged.
interface name {
    name : string,
    password : string,
    email : string
}
interface name {
    name : string,
    age: number,
}
}

{//Optional Interface Value: In Optional when we add ? before colon That field will be optional means you can assign the value or not.

interface Optional {
    admin: boolean;
    age: number;
    gender ?: string;
}    

}



}

{//Type ALiases

{// defination of type ALiases 
// It means we can create our own alias of an type for example: A nick name of type like  string -> Name etc.
}

{// Example
type Name = string;         

let name:Name = "fahad";

}

{// Union

type Name = string | null;

let name:Name = null; // this is correct beacause we declare it should be string or a null.

}

{// Intersection

type User = {
    name : string;
    email : string;
    password : string

};

type userName = User & {
    admin : boolean;
}

}

{// Diffrence b/w Type Alias and Interface

// 1. Type Alias can be define Unions but interface don't
// 2. Interface can be merged if multiple declarations have same names but type Alias don't
// 3. Type Alias Can alias primitives but Interface don't
// 4. can define tuples with concise syntax but Interface Does not have native support for tuple types.
// 5. Both can extend by (extends and &) but Interface is best for error and Type alias also works for error but result in long complex ones.
} 


    
}