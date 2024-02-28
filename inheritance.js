//extend keyword is used - 
// class Child extends Parent

class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is Shouting")
    }}

class Monkey extends Animal {
    eat(){
        console.log(this.name  + " is eating")
    }
    } 
    


let ani = new Animal("Chimpu", "black")
let m = new Monkey("Fluffy", "brown")
ani.shout();
m.eat()

