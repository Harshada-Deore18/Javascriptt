//how promises uses api

/* There are 6 static methods of promise class
1. Promise.all(promises) - waits for all promises to resolve and returns the array of their results.If any one fails, it becomes the error and all other results are ignored*/
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         resolve("Value 1");
//     }, 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         reject(new Error("error"));
//     }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         resolve("Value 3");
//     }, 3000)
// });
// let promise_all =  Promise.all([p1,p2,p3])//promise.all will not work if any of the promise fails
// promise_all.then((value)=>{
//     console.log(value)
// })
// p1.then((value)=> {
//     console.log(value)
// })
// p2.then((value)=> {
//     console.log(value)
// })
// p3.then((value)=> {
//     console.log(value)
// })












// 2.Promise.allSettled(promises) - waits for all promises to settle and returns as an  array of objects with status and value
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         resolve("Value 1");
//     }, 4000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("Value 2");
//         //reject(new Error("error"));
//     }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         resolve("Value 3");
//     }, 3000)
// });
// let promise_allSettled =  Promise.allSettled([p1,p2,p3])
// promise_allSettled.then((value)=>{
//     console.log(value)
// })
// 3.Promise.race(promise)-- waits for the first promise to settle and its result/error becomes the outcomes

// 4.Promise.any(promises)
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         resolve("Value 1");
//     }, 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("Value 2");
//         //reject(new Error("error"));
//     }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         resolve("Value 3");
//     }, 3000)
// });
// let promise_any =  Promise.any([p1,p2,p3])
// promise_any.then((value)=>{
//     console.log(value)
// })
// 5.Promise.resolve(value) -makes a resolved promises with the given value
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         resolve("Value 1");
//     }, 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("Value 2");
//         //reject(new Error("error"));
//     }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
        
//         resolve("Value 3");
//     }, 3000)
// });
// let promise_any =  Promise.resolve(6)
// promise_any.then((value)=>{
//     console.log(value)
// })

// 6.Promise.reject(error) -makes a rejected promises with the given error

let p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        
        resolve("Value 1");
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Value 2");
        //reject(new Error("error"));
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        
        resolve("Value 3");
    }, 3000)
});
let promise_any =  Promise.reject(new error ("hey"))
promise_any.then((value)=>{
    console.log(value)
})

















