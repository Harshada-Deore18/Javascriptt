//Promises eg in real life - amazon promieses us to deliver our product at the door step 
//syntax - 
// let promise = new Promise(function(resolve, reject){
//     //execute
// });
//The promise object returned by the new promise constructor has these properties-
//1.State - initially pending , then changes to either "fulfilled" when resolve is calledd or "rejected" when reject is called

//2.result  - initially undefined, then changes to value if resolved(resolve(value)) or error when rejected(reject(error))








//resolve and rejct are 2  callbacks provided by js itself.They are called like this:
//resolve(value) -> if the job is finished successfully
//reject(error) -> If the job fails
//     let promise = new Promise(function(resolve, reject){
//     console.log("i'm new alert in promise")
//     resolve(56)

// })
// console.log("hello")//1st
// setTimeout(function(){
//     console.log("hrllo in 2 secc")//3rd
// }, 2000)
// console.log("My name is John")//2nd
// console.log(promise)


//fetch google.com homepage ==> console.log("google.com homepage")
//fetch data from the data api
//fetch pictures from the server
//print downloading
//rest of script

//.then() and .catch()

// let p1 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(() =>
//     {
//         //console.log("hello i'm resolved")
//         resolve(true) //to fulfill we need to call resolve


//     }, 5000);
// })




// let p2 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(() =>
//     {
//         // console.log("hello i'm rejected")

//         reject(new Error("I am rejectedd"))

//     }, 5000);
// })

// p1.then((value) => {
//     console.log(value)
// })

// p2.catch((error) => {
//     console.log("some error occured")
// })


//we use promise because to execute parrallely, if there are 50 promises then we can run 50 promise prarelly



//Promise chaining .then() calls- eka .then() is ch result dusrya .then() mdhe return hoil dusrya ch tisrayat
//we can chain promises and make them pass the resolved values to one another like this:>
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("resolved after 2 sec")
//     }, 2000)

// })
// p1.then((value) => {
//     console.log(value)
//     let pp = new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve("promise 2")
//         }, 2000)
                    
//     })
//     return pp
// }).then((value) => {
//     console.log("wea re done");
// })

//Attaching multiple handlers to promise
// we can attach multiple handlers to one promise. They dont pass the result to each other;instead they process it independently

/*let p is promise
p.then(handler1)
p.then(handler2)
p.then(handler3)
 */


let p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        alert('I am  not resolved')
        resolve(1);
    }, 2000)
})

p1.then(()=>{
    console.log("Congrats this promise is resolved")
})

p1.then(() => {
    console.log("hurray")
})









