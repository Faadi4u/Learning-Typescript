// 🟢 EASY (Interface Basics)

{/*Problem 1: Basic Interface

Create an interface User with:

id → number
name → string
isActive → boolean
Then create a variable user1 of type User.
*/

interface User {
    id : number;
    name : string;
    isActive : boolean
}

let user1: User = {
    id : 12,
    name: "fahad",
    isActive: true,

};

}

{/*Problem 2: Optional Property

Create an interface Profile with:
username → string
bio → optional string
Create two variables:
One with bio
One without bio
*/

interface Profile{
    username : string,
    bio ?: string, 
}

let bio_profile:Profile = {
username : "Fahad",
bio : "I'm  mern stack developer"
}

let without_bio_profile:Profile = {
username : "Fahad",
}

}

{/*Problem 3: Function Parameter

Create an interface Product with:

title → string
price → number
Write a function printProduct that accepts a Product and logs:
Product: title - price
*/

interface Product{
    title : string;
    price : number;
}

let printProduct = (product: Product):void => {
    let productTitle = product.title;
    let productPrice = product.price;
    console.log(`Product : ${productTitle} - ${productPrice}`);
    
}
printProduct({title: "Iphone 11" , price: 1300});

}

// 🟡 MEDIUM (Extend & Real Use)

{/*Problem 4: Interface Extension

Create:
Person interface → name, age

Employee interface that extends Person and adds:

employeeId → number
department → string
Create an Employee object.
*/

interface Person {
    name : string;
    age : number;
}

interface Employee extends Person {
    employeeId : number;
    department : string
}

let EmployeeObject:Employee = {
    name : "Fahad",
    age : 23,
    employeeId : 1289,
    department : "BSCS"
}

}

{/*Problem 5: Nested Interface

Create:
Address → city, country
User → name, address (type Address)

Create a User object with nested address.

*/

interface address {
    city : string;
    country : string;
}

interface User {
    name : string;
    address : address
}

let userObject:User = {
name : "Fahad",
address : {
    city : "Faisalabad",
    country : "Pakistan"
}
}


}

{/*Problem 6: Readonly Property

Create an interface Car with:
readonly vin → string
model → string

Try to modify vin after assignment (comment why it fails).

*/

interface Car {
    readonly vin : string;
    model : string;
}

let modify:Car = {
    model : "2025v8",
    vin : "toyota"
}

// modify.vin = "supra" // We cant reassign bcz it is readonly property

}

// 🔴 HARD (Advanced Interface Behavior) 

{/*Problem 7: Interface Merging

Create interface Settings with:
theme → string

Then declare it again and add:
language → string

Create a variable using merged interface.
*/

interface Settinngs {
    themes : string
}

interface Settinngs {
    language : string
}

let settingVar:Settinngs = {
    language : "urdu",
    themes : "blak",
} 


}

{/*Problem 8: Optional + Function

Create interface ApiResponse:
status → "success" | "error"
data → optional string

Write a function that safely logs data only if it exists.
*/

interface ApiResponse{
    status : "success" | "error";
    data ?: string 
}

let dataFunc = (msg : ApiResponse):void => {
    if(msg.status === "error"){
        console.log("there is no data");
    }else if(msg.data === ""){
        console.log("No data found");
    }else if(!msg.data){
        console.log("No data found");
    }
    else{
        console.log(msg.data);
        
    }
    }
dataFunc({data: "abcd" , status: "error"})


}

{/*Problem 9: Interface with Function Signature

Create interface Calculator with a function:
add(a: number, b: number): number

Create an object that implements this interface.
*/

interface Calculator{
   add(a:number , b:number) : number
}

let addObj:Calculator = {
    add(a :number, b:number):number {
        return a+b
    },
    
}
console.log(addObj.add(12 , 15));



}