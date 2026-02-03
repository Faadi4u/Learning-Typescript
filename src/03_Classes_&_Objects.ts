/* Topics:
1.Classes and Objects
2.Class Definition
3.Constructors
4.Access Modifiers ( Public , Private , Protected )
5.Readonly Properties
6.Optional Properties
7.Parameter Properties
8.Getters and setters
9.Static Members
10.Abstract classes and methods 
*/


{// 1.Class Definition

class BottleMaker {
    age = 12;
    name = "Fahad"
}

let b1 = new BottleMaker();

}

{// 1.Constructor

class BottleMaker {
    constructor(public name : string , public material : string , public price : number ){

    }
}

let b2 = new BottleMaker("Cello" , "Metal" , 1200);

}
