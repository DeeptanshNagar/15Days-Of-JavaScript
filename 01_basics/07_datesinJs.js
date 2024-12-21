// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
// console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Sat Dec 21 2024 19:51:39 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString()) // Output : 21/12/2024, 7:53:20 pm
// console.log(myDate.toLocaleDateString()) //Output : 21/12/2024
// console.log(myDate.toLocaleTimeString()) // Output : 7:54:12 pm

// console.log(myDate.toDateString()) //Output : Sat Dec 21 2024
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

// console.log(typeof myDate) //Output : object;

// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

let myCreatedDate = new Date(2023, 0, 23);
// In JavaScript, the first month (January) is month number 0, so December returns month number 11.
// console.log(myCreatedDate) //Output : 2023-01-22T18:30:00.000Z;
// console.log(myCreatedDate.toString()) //Mon Jan 23 2023 00:00:00 GMT+05:30 (India Standard Time)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate1.toLocaleString()); // 23/1/2023, 5:03:00 am

// let myCreatedDate1 = new Date("2023-01-14");
// console.log(myCreatedDate1.toLocaleString()); // 14/1/2023, 5:30:00 am

let myCreatedDate1 = new Date("01-14-2023");
// console.log(myCreatedDate1.toLocaleString()); // 1/14/2023, 12:00:00 am

let myTimeStamp = Date.now();
// console.log(myTimeStamp); //Output : 1734792327846 (Number of milliseconds since January 01, 1970) 

// console.log(myCreatedDate1.getTime());  // It represents the miliseconds from the date represented by myCreatedDate1. // Output : 1673634600000
// Compare with above output to check the difference.

// console.log(Date.now()); // Output : 1734792379568 // Gives the current date in miliseconds.

// To convert from miliseconds to seconds, divide by 1000
// console.log(Date.now() / 1000); // Output : 1734792379.568

// To get the current date in seconds by removing the decimal part.
// console.log(Math.floor(Date.now() / 1000)); // Output : 1734792379


let newDate = new Date();
console.log(newDate);     //Output : 2024-12-21T14:54:05.374Z
console.log(newDate.getMonth()); // Output : 11
console.log(newDate.getMonth() + 1); // Output : 12
console.log(newDate.getDay()); // Output : 6
console.log(newDate.getFullYear()); // Output : 2024

// Format for logging day and time using string interpolation
console.log(`${newDate.toLocaleDateString('en-US', { weekday: 'long' })} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
// Output : Saturday and the time is 20:24:5 (example output)

newDate.toLocaleString('default', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: true });