// Function Types
// Optional and Default parameter
// Rest Parameters
// Function Overloading

{// Function Types

function abcde (name:string , age: number , cb: (profession:string)=>void){

    cb("student")
};

abcde("Fahad" , 23 , (profession)=> {
    console.log(profession);
    
});

}

{//Optional and Default parameter

// Optional means you can tell or not and Default are we are setting the value if user not give it.    
let userDetail = (name : string , age : number , gender ?: string , salary : string | number = "Not interested" ) => {
    console.log(name , age , gender , salary);
}
let user1 = userDetail("Fahad" , 23 , "Male" ,1200);
let user2 = userDetail("Harsh" , 24 );
    
console.log(user1 , user2);

    
}

{// Rest Parameters

// when we have too much arguments we make rest parameter by using (...) and then store all arguments in an array
// Problem is we have to much arguments so we have to create too much parameters then define which type it is thats why we use rest prameters    
function sum(...arg : number[]){

}  

sum(1,2,3,4,5,56,6,7,8,89)

}

{// Function Overloading

// Function overloading is mostly used for API design
// Most Common Use:

function parse(input : string):Number
function parse(input : number):string

function parse(input: any){
    return typeof input === "string" ? Number(input) : input.toString()
}

}