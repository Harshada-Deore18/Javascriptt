//string are immutable
// let name = "Harshada"
// console.log(name);
// console.log(name.length);
// console.log(name[0]);

//String template literals
// Template literals use backtics instead of quotes to define a string
// we can insert variable directly in template literal.This is called string interpalation
// let name1 = "Harry";
// let name2 = "Ram";
// let sentence = `${name2} is a friend of ${name1}`
// console.log(sentence);

//Escape sequence characters
// let a = `banana's`
// let b = `banana\s` //prints in new line
// console.log(a)
// console.log(a.length)
// console.log(b)

//String methods use for string manipulation
//1.length
let name = "Harshada"
console.log(name);
console.log(name.length);

//toUppercase
let name1 = "Harshada"
console.log(name1.toUpperCase());

//toLowerCase
let name2 = "HARSHADAhatxsuh"
console.log(name2.toLowerCase());

//tolocaleLowerCase
let name3 = "HARSHADAhatxsuh"
console.log(name3.toLocaleLowerCase());

//slice
let name4 = "Harshada"
console.log(name4.slice(2,4))

//slice
let name5 = "Harshada"
console.log(name5.slice(2))

//replace
let name6 = "Harshada is a girl"
console.log(name6.replace("girl","women"))

//Concat
let a = "Harry";
let b = "Ram";
let c = a.concat(b)
console.log(c)
let d = a + b
console.log(d)
console.log(a.concat(' is a friend of ', b))

//trim- it removes the staring and ending spaces
let p = "           menna       "
console.log(p)
console.log(p.trim())

//adding number and string
let aa = 1
let bb = "harry"
console.log(aa + bb);

//index 
let aaa = "jdhfuesh"
console.log(aaa[0])
//we cannot chnge the character in the string

//charAt - using index we can access the string
let text = "HELLO WORLD";
let letter = text.charAt(0);
console.log(letter)