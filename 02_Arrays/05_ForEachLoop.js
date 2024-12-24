// for each loops also known as higher order method/functions that can be used to iterate over arrays and perform some action on each element of the array.
// Higher order functions are functions that either take other functions as parameters inside them or they return other functions as their outputs.
// for each loops can't be used for strings.
// It is a more concise way to iterate over arrays.
// Likewise .toUpperCase() is a method that converts a string to uppercase and can only be used on strings, not on arrays or any other data type.

let arr = ["pune", "mumbai", "delhi", "chandigarh", "bangalore"];

// arr.forEach(function printVal(val) {
//     console.log(val);
// })

// arr.forEach((val, i, arr) => {
//     console.log(val.toUpperCase(), i, arr);
// });


// ************Question************
// For a given array of numbers, print the square of each number using forEach loop.
let nums = [23,44,26,84,120];
// nums.forEach((val) => {
//     console.log(val*val);  // num**2
// });

// Another way to solve the above question
let calcSquare = (val) => {
    // console.log(val*val);
};
nums.forEach(calcSquare); // passing above func as a callback function to forEach loop.

// Array Methods - map, filter, reduce, find, findIndex, some, every

// 1. Map - It is used to iterate over an array and return a new array.
let num = [62,52,39];
num.map((val) => {
    // console.log(val);    
});
// map is used if want return each value in the form of new array.
let newArr = num.map((val) => {
    return val;
});
console.log(newArr);



// 2. filter - It is used if want to return only those values which satisfy the condition.
let array = [62,52,39, 100, 200,3,7,9,45,34,88,24];

let evenArr = array.filter((val) => {
    // return val % 2 === 0;        // to get even numbers from the array.
    return val % 2 !== 0;       // to get odd numbers from the array.
});

console.log(evenArr);         // creates a new array of odd numbers but old array still remains the same.


// 3. reduce - It is used to reduce the array to a single value. It is used to perform some operation on the array and return a single value.

let arr3 = [1,2,3,4];
const sum = arr3.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum); // 10

// to find the largest number in array using reduce method.

let arr4 = [1,2,3,4];
const output = arr3.reduce((prev, curr) => {
    return prev > curr ? prev : curr;        // agar prev bada hai toh prev return karo, nahi toh curr return karo.
});

console.log(output); // 4