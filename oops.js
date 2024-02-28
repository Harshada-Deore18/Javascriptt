//[[Prototype]] - js objects have a special property called prototype that is either null or references of another object

// let a = {
//     name : "Harry",
//     language : "javascript"
// }
// console.log(a)

//Setting prototype
// we can set prototype by setting __proto__.now if we read a property from the object.which is not in object and is present in the prototype, JS will take it from prototype

// let a = {
//     name : "Harry",
//     language : "javascript"
// }
// console.log(a)


// let p = {
//     run: () => { 
//         alert("run")
//     }
// }
// p.__proto__ = {
//     name2 : "Jackie"
// }
// a.__proto__ = p
// a.run()
// console.log(a.name2)