// 🟢 EASY (Basics of Type Alias) 

{/*Problem 1: Basic Type Alias

Create a type alias called UserID that can only be a number.
Use it to declare a variable id.
*/

type UserID = number // Here we know what UserId represnet
let id:UserID = 12;


}

{/*Problem 2: Object Type Alias

Create a type alias User with:

name → string

age → number
Create a variable using this type.
*/

type User = {
    name: string;
    age: number
}

let userDetail : User = {
    age : 23,
    name : "Fahad"
}

}

{/*Problem 3: Function Type Alias

Create a type alias AddFn for a function that:

takes two numbers

returns a number
Use it to type a function that adds two numbers.
*/
type AddFn = (a:number , b: number)=> number;

let sum:AddFn = (a: number , b:number) => {
    return a+b
}
sum(12 , 14)

}


// 🟡 MEDIUM (Union & Intersection)

{/*Problem 4: Union Type

Create a type alias Status that can be:

"success"
"error"
"loading"

Create a function that accepts Status and logs a message.
*/

type Status = "success" | "error" | "loading";

let statusFunc = (status:Status):void => {
    if(status === "success"){
        console.log("Approved"); 
    }else if(status === "loading"){
        console.log("wait");
    }else{
        console.log("error");
        
    }
}
statusFunc("loading")


}

{/*Problem 5: Union in Object

Create a type alias ApiResponse where:

status → "success" | "error"
data → string OR null

Write a function that prints data only if status is "success".

*/
type ApiResponse = {
    status : "success" | "error";
    data : string | null
}

let apiFunc = (ApiData : ApiResponse):void => {
    if(ApiData.status === "success" || typeof ApiData.data === "string" ){
        console.log("Success");
    }else{
        console.log("error");
    }
}

apiFunc({status : "success" , data : "Ok"})

}

{/*Problem 6: Intersection Type

Create two type aliases:

Person → name, age
Employee → employeeId

Create a new type Staff using intersection and declare an object.

*/

type Person = {
    name : string;
    age : number
}

type Employee = {
    emplyeeId : string;
}

type Staff = Person & Employee

let object:Staff = {
    name : "Fahad",
    age : 23,
    emplyeeId : "f22-1285"
}
console.log(object);


}

//🔴 HARD (Real-world + type vs interface thinking)

{/*Problem 7: Function Union Return

Create a type alias Result that can be:

{ success: true; data: string }
{ success: false; error: string }

Write a function that returns Result.
*/

type Success = {
    success : true,
    data : string
} |  {
    success : false,
    error : string
}

let Result = (val:Success):void => {
    val.success === true ? console.log(val.data): console.log(val.error)
}

Result({success : false , error : "Something went wrong"})

}

{/* Problem 8: Type vs Interface Use Case

// Create:

// a type alias using union
// an interface that cannot be replaced by type easily
// Explain (in comments) why type is better here.

// (No code execution needed, just structure)
*/


// We can use unions in Types but not with interface.
type user = {
    name : string,
    age : number
} | {
    gender ?: string
}


// If we make two interface they can be merged but type can't.
interface UserID{
    name : string;
    age : number;
}

interface UserID{
    gender ?: string
}

// Each of them has there own benefits and use Cases 
// Type alias can define union but interface don't

}



{/* Problem 9: Complex Function Type

Create a type alias Logger for a function that:

accepts message: string
accepts level: "info" | "warn" | "error"

returns void
Use it in an object or function.
*/

type logger = {
    message : string;
    level : "info" | "warn" | "error";
}

let loggerDetails = (val : logger):void => {
    console.log(val.message , val.level);
}

loggerDetails({level : "error" , message : "Something went wrong"})

}