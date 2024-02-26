//Map() - craetes a new array by performing some operation on each array element.
//It takes 3 argument - (value, index, array)

// let a = [1,2,3,4,5]
// let b = a.map((value)=> {
//     console.log(value)
//     return value +1
// })
// console.log(b)

// let a = [11,52,53,84,655]
// let b = a.map((value, index, array)=> {
//     console.log(value,index, array)
//     return value +1
// })
// console.log(b)

// let arr = [11,52,53,84,655]
// let a = arr.map((value, index, array)=> {
//     console.log(value,index, array)
//     return value + index
// })
// console.log(a)

//Filter method -returns the array which contains elements that satisfy the applied condition

// let arr = [11,52,53,84,655]
// let arr2 = arr.filter((value )=>{
//     return value < 60
// })
// console.log(arr2)

//reduce ()reduces an array to a single value
let arr = [1,2,3,4]
let newarr = arr.reduce((value1, value2)=>{
    return value1+value2 //10
})
console.log(newarr);