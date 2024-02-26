// //write a prog to print the  marks of student oin an object using for loop
// // program to loop through an object using for...in loop

// const student = { 
//     harry: 80,
//     swami: 90,
//     om: 35
// };

// // using for...in
// for (let key in student) { 
//     console.log("The marks of " +key+ "are" +student[key])

//     // get the value
//     // value = student[key];

//     // console.log(key + " - " +  value); 
// } 
//another way
// let marks = {
//     harry: 80,
//     swami: 90,
//     om: 35
// }
// for (let i=0; i <Object.keys(marks).length++; i++){
//     console.log(marks[Object.keys(marks)[i]])
// }


//display try again message until the user didnot enter right value
// const prompt = require("prompt-sync")();
// let n = 4;
// let i;
// while(i != n){
//     console.log("try again")
//     i = prompt("enter the number")
    
// }
// console.log("you entereed right number")

// 4. write a function to find the mean of 5 number
const meannum=(a,b,c,d,e)=> {
    return (a+b+c+d+e)/5;
}
console.log(meannum(5,6,8,6,2))
