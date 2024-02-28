//Classes and object
//in oop, a class is an extensible program-code template for creating objects, providing initial values for state(member variable) and implementation of behaviour(member functions)

//syntax of classss
// class MyClass
// {
//     //class methods
//     constructor() {...}
//     method1() {...}
//     method2() {...}
// }

//we can then use MyClass() to create a new object with all the listed methods

// class RailwayForm
// {
//     submit(){
//         alert(this.name +" form submited  for train number" + this.trainno)
//     }
//     cancel(){
//         alert(this.name + " Your Form is  canceled for train number"+ this.trainno)
//     }
//     fill(givenname, trainno){
//         this.name = givenname //In JavaScript, the this keyword refers to an object.
//         this.trainno = trainno //In JavaScript, the this keyword refers to an object.
        
//     }
// }
// //Create a form for Harry
// let harryForm = new RailwayForm()
// //Fill the form with details
// harryForm.fill("harry",21455)
// //Create a form for Rohan
// let rohanForm = new RailwayForm()
// //Fill the form with details
// rohanForm.fill("Rohan",25414)
// harryForm.submit()
// rohanForm.submit()
// rohanForm.cancel()

//Constructor() method is called automatically by new, so we can initilize the object there

class RailwayForm
{
    constructor(){
        console.log("Constructor called")
    }
    submit(){
        alert(this.name +" form submited  for train number" + this.trainno)
    }
    cancel(){
        alert(this.name + " Your Form is  canceled for train number"+ this.trainno)
    }
    fill(givenname, trainno){
        this.name = givenname //In JavaScript, the this keyword refers to an object.
        this.trainno = trainno //In JavaScript, the this keyword refers to an object.
        
    }
}
let harryForm = new RailwayForm("harry",21455)
let rohanForm = new RailwayForm("Rohan",25414)

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()
