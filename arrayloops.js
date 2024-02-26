//looping through arrays
/*arrays can be looped through using the classical javascript fro loop or through some other methods*/

//1.for each loop - calls a function, once for each array element

// num = [1,2,3,33,4,5,6]
// num.forEach(element => {
//     console.log(element* element) //prints the square for each number
// });

//array.from - used to craete am array from any other object

// let name = 'harry' //yachi array jhli
// let arr = Array.from(name)
// console.log(arr)

//for -of get the values of an array
num = [1,2,3,33,4,5,6]
for (let i of num){ //shortcut of for loop
    console.log(i)
}
//for -in get the keys of an array
num = [1,2,3,33,4,5,6]
for (let item of num){ //shortcut of for loop
    console.log(num[item])
}