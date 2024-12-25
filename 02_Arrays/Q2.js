// Question - 1
let marks = [88,91,56,76,98,67,89,90,99,78,87,92,93,94,95,96,97,98,99,100];

let toppers = marks.filter((val) => {
    return val>90;
})

// console.log(toppers);

// Question - 2
const readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question('Enter a number: '));

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i; // 1(0), 2(1), 3(2), 4(3), 5(4) -> numbers in brackets are indices of respective elements.
}

console.log(arr);


// part 1 -
let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log("sum = ",sum);

// part 2 -
let factorial = arr.reduce((res, curr) => {
    return res * curr;
})
console.log(`Factorial of ${n} is: ${factorial}`);
