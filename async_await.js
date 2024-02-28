//there is a special syntax to work with promises in js
//a fuction can be made async by using async keyword like this
//async function always return a promise.other values are wrapped in a promise automatically

//hum kisi bhi function ko async bana sakte hai aur promises ko await kr sakte hai
async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("27 Deg");
        }, 1000)
    });
    let NasikWeather = new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("10 Deg");
        }, 5000)
    });
    // delhiWeather.then(alert)
    // NasikWeather.then(alert)
    console.log("fetching delhi westher Please wait...")
    let delhiW = await delhiWeather; //as soon as he see await he will wait for all the promises to be fulfilled
    console.log("Fetched Delhi weather" + delhiW)
    console.log("fetching Nashik westher Please wait...")
    let NasikW = await NasikWeather;
    console.log("Fetched Delhi weather" + NasikW)
    return [delhiW, NasikW]



}
console.log("Welcome to weather control room")
let a = harry();
a.then((value) =>{
    console.log(value)
})
console.log(a)