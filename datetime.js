// const d = new Date();
// console.log(d)
// const e = new Date("2022-03-25");
// console.log(e)


//9 ways to create a new date object
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

//new Date(date string)
// const d = new Date("Feb 26,2020 11:13:00")
// console.log(d)
// const e = new Date("2022-03-25");
// console.log(e)

// const d = new Date();
// console.log(d.toString());

// const e = new Date();
// console.log(e.toDateString());

// const d1 = new Date();
// console.log(d1.toUTCString());

// const e1 = new Date();
// console.log(e1.toISOString());

/* getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)*/
const d = new Date("2021-03-25");
console.log(d.getTime());