//Throw Try catch Finally
//Try - defines a code block to run
//catch - defines a code block to handle any error
//finally - defines a code block to run regardless of result
//throw defines a custom error
// setTimeout(()=>{
//     console.log("hacking wifi.... Please wait...")
// }, 1000)

// try{
//     console.log(wifi_hacked)
// }
// catch(error){
//     console.log("balle balle")
// }
// setTimeout(()=>{
//     console.log("fetching username and password.... Please wait...")
// }, 2000)

// setTimeout(()=>{
//     console.log("sucessfull hacked.... Please wait...")
// }, 3000)

// custom error(err)
//three properties - err.name , err.message, err.stack
// try{
//     console.log("harry")
//     throw new ReferenceError("harry is not good")
// }
// catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }

//Throwing custom error
try {
    let age = parseInt(prompt("enter your age"));
    if (age > 150) {
        throw new ReferenceError("This is not true")
    }

} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
console.log("The script is still running")