//1. Use logical operator to find whether the age of a person lies between 10 and 20

// const prompt = require("prompt-sync")();

//   const age = parseInt(prompt("What is your age?"));
  
// if (age >= 10 && age <= 20) {
//     console.log("You are in age between 10 and 20")
// }
// else{
//     console.log("You are not in the age")
// }

// Switch case
// const prompt = require("prompt-sync")();


// const color = prompt("choose your color : ");
// switch(color){

//       case 'yellow':
//         console.log("the color is a yellow color");
//         break;

//         case 'green':
//         console.log("the color is a green color");
//         break;

//         case 'red':
//         console.log("the color is  red");
//         break;

//         default:
//         console.log("You are choosing wrong color");
//         break;


    
// }
// js program to find whether the number is divisible by 2 or 3
// const prompt = require("prompt-sync")();


// const n1 = parseInt(prompt("choose your number : "));
// if(n1 % 2 == 0 && n1 % 3 ==0){
//     console.log("Number is divisible by 2 and 3")
// }
// else{
//     console.log("NO not divisible")
// }


//4. either number is divisible by 2 or 3
const prompt = require("prompt-sync")();


const n1 = parseInt(prompt("choose your number : "));
if(n1 % 2 == 0 || n1 % 3 ==0){
    console.log("Number is divisible by 2 and 3")
}
else{
    console.log("NO not divisible")
}

