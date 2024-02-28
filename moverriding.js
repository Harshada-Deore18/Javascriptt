//method overridding - if we create our own implementation of  run, it will not be taken from the animal class.

// class Employee{
//     login(){
//         console.log(`Employee has logged in`);
//     }
//     logout(){
//         console.log(`Employee has logged out`);
//     }

//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves - Auto approved`)
//     }
// }

// class Programmer extends Employee{
//     requestCoffee(x){
//         console.log(`Employee has requested ${x} coffee`)
//     }
//     requestLeaves(leaves){
//         super.requestLeaves(4)
//         console.log("One extra is granted")
//     }

// }

// let e = new Programmer()
// e.login()
// e.requestLeaves(3)
// e.requestCoffee(2)

class Employee{
    constructor(name){
console.log(` ${name} -  Employee has a constructor`)
this.name = name
    }
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
    constructor(name){
        super(name)
        console.log(` ${name} -  Programmer has a constructor`)
        
        this.name = name
            }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log("One extra is granted")
    }

}

let e = new Programmer("harry")
e.login()
e.requestLeaves(3)
e.requestCoffee(2)