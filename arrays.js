//Arrays  are mutable can hold more than one value
//we can access through index

// const fruit = ['banana', 'apple','grapes']
// const a1 = [7, "Harry", false]
// console.log(fruit)
// console.log(a1)


// //Accessing value
// let no = [1,2,3,5,6]
// console.log(no[3])
// // console.log(no[9]) undeifned
// // console.log(no[-3]) undeifned
// for (let i = 0; i< no.length;i++)
// {
//     console.log(i)
// }

// //changing the values
// no[2] = -9
// console.log(no)
// console.log(typeof(no))  //object


// //Array methods
// //1.toString - converts an array to  a string 
// let num = [1,2,3,45,34]
// console.log(num)
// console.log(typeof(num)) //object
// b = num.toString()
// console.log(b)
// console.log(typeof(b)) //String

// //Join- Join all the arrays elements using a seperator
// let x = [4,6,7]
// console.log(x.join("-"))
// console.log(typeof(x))
// let y = ["R","Y",1]
// console.log(y.join("-"))
// console.log(typeof(y))

// //pop()remove sthe last element from the array
// let m = [1,"y", 6 ,0,'ye']
// console.log(m.pop())
// console.log(m.pop(6)) not allowed

//push() - adds a new element at the end of array
// let v = [1,"y", 6 ,0,'ye']
// let s = v.push(90)
// console.log(v,s)

// //shift() - removes first element and returns it
// let v1 = [1,"y", 6 ,0,'ye']
// console.log(v1.shift())


//unshift() - adds the element to the begining  and returns the new array length 
// let vy = [1,"y", 6 ,0,'ye']
// console.log(vy.unshift(5))

//delete - array element can be deleted using delete keyword
// let a = [1,5,2,4,7,"hddsh"]
// console.log(a)
// n = delete a[0]
// console.log(n)

//concat() - used to joinarrays to given array
// let a1 = [1,2,3]
// let a2 = [5,7,8]
// let a3 = ['a','b']
// console.log(a1.concat(a2,a3)) //prints in one array
// console.log(a1,a2,a3)// prints in different array

//sot method in alphabatical
// let num = [1,8,6,4,7,9,4,5,60]
// console.log(num.sort())
// let num1 = ['b', 'a','d','z','p']
// console.log(num1.sort())

//if i want ti in ascending order for that i need to craete a compare function
// let compare = (a,b)=>
// {
//     return a -b
// }
// let num3 = [1,8,6,4,7,9,4,5,60]
// console.log(num3.sort(compare))

//reverse()


//splice() - used to add new items to an array
// const n = [1,2,3,4,5] //[ 1, 2, 57, 60, 4,5 ]

// //splice has 4 arguments (position on which u want to add, number of element to remove, elements to be added)
// n.splice(2,2,57,60) //[ 1, 2, 57, 60, 5 ]

// console.log(n)

//slice() - slice out a piece from an array . It creates a new array
// const num = [1,2,3,4]
//  //3,4
// num.slice(1,3)//2,3
// console.log(num.slice(2))

//random in js
// console.log(Math.floor(Math.random()* 11)+ 1);


