// 🟢 EASY (Basic understanding)

{/* Problem 1: Simple Variables

    Create variables with correct types:
    username → string
    age → number
    isLoggedIn → boolean
    Assign valid values to each.
*/
let username:string = "Fahad";
let age:number = 12;
let isLoggedIn: boolean = true 
// Important note: We can even write (let username = "Fahad") bcz typescript infers automatically


}

{/*Problem 2: Array of Numbers

Create an array called scores that stores only numbers.
Add at least 3 numbers to it.*/

let arr:number[] = [1,2,3,4,5,6,7];

}

{/*Problem 3: Void Function

Write a function printMessage that:
    1.Takes a string parameter
    2.Prints it to the console
    3.Returns nothing
*/

let printMessage = (msg:string):void => {
    console.log(msg);
}
printMessage("HI Bro")

}

// 🟡 MEDIUM (Type safety thinking)

{/*Problem 4: Tuple

Create a tuple userInfo that stores:
    id → number
    name → string
    isAdmin → boolean
    Then assign valid values.
*/ 

let userInfo:[id:number , name:string , isAdmin:boolean] ;
userInfo = [1 , "Fahad" , true]
console.log(userInfo);

}

{ /*Problem 5: Unknown vs Any

Create a variable inputValue of type unknown.
    If it is a string, print its length
    If it is a number, print its square 
*/

let inputValue : unknown;

inputValue = "Fahad";

// console.log(inputValue.length);  
//  we have to narrowing types to access its properties bcz we give unknown type
//  but with (any) typescript stops working.

if(typeof inputValue === "string"){
    console.log(inputValue.length); 
    
}



}

{/*Problem 6: Null & Undefined

Create a variable email that can be:

    1.string
    2.or null

    Write a condition that checks:

    4.If email exists → print it
    5.Else → print "No email provided" 
*/

let email: string | null;

email = ""

if( !email ){
    console.log("No email provided"); 
}else{
    console.log(email);
    
}

}

// 🔴 HARD (Real-world usage)

{/*Problem 7: Enum Usage

Create an enum UserRole with:

    ADMIN
    USER
    GUEST

Write a function checkAccess(role) that:

    Prints "Full access" for ADMIN
    "Limited access" for USER
    "Read only" for GUEST
*/

enum UserRole { // It is used as two types enum as a type and enum as a value
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

let checkAccess = (role:UserRole):void => {
    if(role === UserRole.ADMIN){
        console.log("Full access");
        
    }
    if(role === UserRole.USER){
        console.log("Limited access");
        
    }
    if(role === UserRole.GUEST){
        console.log("Read only");
        
    }
}
checkAccess(UserRole.ADMIN)


}

{/*Problem 8: Never Type

Write a function throwError that:

    Takes a string message
    Always throws an error
    Uses the never return type
*/

let throwError = (message:string):never => {
    throw new Error(message)
}

throwError("Something went wrong")

}

{/*Problem 9: Mixed Types Function

Write a function processValue that:

Accepts string | number | boolean
If string → return uppercase
If number → return number × 2
If boolean → return opposite value
Ensure TypeScript type safety.
*/

let processValue = (message: string | number | boolean) => {
    if(typeof message === "string"){
        return message.toUpperCase();
    }
    if(typeof message === "number"){
        return message*2;
    }
    if(typeof message === "boolean"){
        return !message;
    }
}

console.log(processValue(true));


}