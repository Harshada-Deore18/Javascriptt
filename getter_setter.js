//getter and setter
//classes may include getter and setters to get & set the computed properties

// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     fly(){
//         console.log("Mai ud raha hu")
//     }
//     get name(){
//         return this._name 
//     }
//     set name(newName){
//          this._name  = newName
//     }
// }

// let a = new Animal("bruno")
// a.fly()
// console.log(a.name)

//InstanceOf Operator - allows to check whether an object belongs to a certain class
//syntax =
//<obj>instanceOf <class> it returns true if the obj brlongs to Class or any other class inheriting from it
class Animal{
    constructor(name){
        this._name = name
    }
    fly(){
        console.log("Mai ud raha hu")
    }
    get name(){
        return this._name 
    }
    set name(newName){
         this._name  = newName
    }
}

let a = new Animal("bruno")
a.fly()
console.log(a.name)
console.log(a instanceof Animal)
let c = 56
console.log(c instanceof Animal)