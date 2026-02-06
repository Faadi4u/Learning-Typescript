/* Topics:
1.Classes and Objects
2.Class Definition
3.Constructors
4.Classes and Objects : This.keyword
5.Access Modifiers ( Public , Private , Protected )
6.Readonly Properties
7.Optional Properties
8.Parameter Properties
9.Getters and setters
10.Static Members
11.Abstract classes and methods 
*/


{// 1.Class Definition

class BottleMaker {
    age = 12;
    name = "Fahad"
}

let b1 = new BottleMaker();

}

{// 2.Constructor

class BottleMaker {
    constructor(public name : string , public material : string , public price : number ){

    }
}

let b2 = new BottleMaker("Cello" , "Metal" , 1200);



}

{//4.Classes and Objects : This.keyword

// In class if we have to acess something then This keyword is used

class BottleMaker{
    public name = "Fahad";

    constructor(name: string){ // If we want to access the name variable in constructor we have to use this.name
        this.name 
    }

}

// There are two ways to write code with this or without this
// With this
// 1. Method
class newBottle_1 {
    public name_1; // here name_1 is variable
    constructor(name : string){
        this.name_1 = name // So here this.name_1 variabe is equal to the parameter name which is Milton so name_1 = miton.
    }
}
let b1 = new newBottle_1("milton")

//2.Method
class newBottle_2 {
    constructor (public name : string){} // here we do both things making variable and accepting parameter with just a single line no extra code
} // here public name is variable and also parameter we dont need to assign separately
}

{//5.Access Modifiers ( Public , Private , Protected )

{// Public 
class penMaker {
    constructor (public name :string ){}
}    
let b1 = new penMaker("piano");
b1.name = "Dollar" // we can change it bcz it is public if private there is an error.
}

{// Private : for private we have to make an extend class for better understanding.

class newPenMaker_1 {
    constructor(private name : string){
    }
}

class newPenMaker_2 extends newPenMaker_1{
constructor(name: string){
    super(name);
}
}
let b2 = new newPenMaker_2("Piano_1"); // So here the piano_1 Goes to the constructore name and then in super(name) which send value to the newPenMake_1 constructor name
// b2.name = "dollar_1" // we cant access private. We access only in there class
}

{// Protected

class mouseMaker {
    protected name: string = "Milton"
}    

class metalMouseMaker extends mouseMaker{
    public material: string = "Metal";

    changeName(){
        this.name = "Chilton" //in protected we change name in his class or in its subclass
    }
}
let b1 = new metalMouseMaker();
// b1.name = "chilton"  // we get an error bcz we cant change it outside the class
}

}

{//6.Readonly Properties

class User {
    // if you want your values should be fixed means not changable just add readonly after public
    constructor(public readonly name: string ){} 
    changeName = () => {
        // this.name = name // we can't access name bcz name is readonly property.
    }
}
let U1 = new User("Fahad") // So fahad is fixed here we are not able to change it.
//  U1.changeName("Abdullah") // But if we compile it, it gives the abddullah bcz typescript just gives error that this is not right.


}

{//7.Optional Properties

class User {
    //If you want some field to be optional just add (?) after variable and before colon(:) 
    constructor( public name: string , public gender?: string){} // Here gender is optional means you can give or not your's choice.
}    
let u2 = new User("Fahad" , "male"); // Im male Hahah....

}

{//8.Parameter Properties
// There are two ways to define constructor Varibles

{// 1st Way:
    class User {
    // First we create variables.
    public name;
    public age;
    public admin;
constructor(name:string , age: number ,admin: boolean){ // then we create parameters
    this.name = name; // Then we set the values of paramater to variables.
    this.age = age;
    this.admin = Boolean

}    
}
}

{// 2nd way
// We are creating variables and parameters just in one line no need to use this
class User_2 {
constructor(public name: string , public age: number){}
// By this line we create variables and parameters in the same line.
// This is what parameter properties called.
// By adding just public to create variable and parameter also
    
}
}

}

{// 9.Getters and setters

{// Problem 
class User_3 {
    constructor(public name:string , public age: number){}   
    // Getter we use 
    getName(){
        return this.name; 
    }
    // Getter we use 
    setName(value: string){
        this.name = value;
    }

    // for this we have to call getName() and setName()
}    
}    
{//Solution
class User_3 {
    constructor(public name:string , public age:number){}
    // Typescript gives us keywords to use get and set
    get UserName(){ // if you want to add the name instead of user we get an error of duplicate name.
        return this.name 
    }

    set userAge(value:string){
        this.name = value
    }
}    
}

}

{//10.Static Members

// Static memebers are that we get without making an instance of that class.
// For example: lets see differ with and without static

class nodeJs {
    version:number = 1.0;
}
let v1  = new nodeJs() // we are getting the version of node js by holding it in a variable v1.

class expressJs {
    static version:number = 1.0;
}
console.log(expressJs.version);  // in this we directly get the version of nodeJs.

//NOTE: Static only be used when we know the variable is used locally.

}

{// 11.Abstract classes and methods 

// abstract class is a class that cannot be instantiated directly and is intended to be extended by other classes.

abstract class Animal{
    constructor(public name: string){}

    abstract makeSound():void
}

class Dog extends Animal{
    makeSound(): void {
        console.log("woof");
        
    }
}
let s1 = new Dog("Dog")

}