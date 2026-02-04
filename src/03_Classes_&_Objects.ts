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