// Arrow Functions - Compact way of writing functions.
// Symbol - '=>' is used to define arrow functions.

// Example 1 -
// Normal function
// function sum(a, b) {
//     return a + b;
// }

// Introduced in Modern JS -
const arrowSum = (a, b) => {
    console.log(a + b);
};
// Also -
const arrowSum2 = (a, b) => {
    return (a + b);
};

arrowSum(25, 10); // 35
// arrowSum2(25, 10); // Not returning anything.

// Example 2 -
// Normal function
// function mul(a, b) {
//     return a * b;
// }

const arrowMul = (a, b) => {
    console.log(a * b);
};

arrowMul(23, 120); // 2760

// Also -
const arrowMult = (a, b) => {
    return a * b;
};

arrowMult(23, 10); // Not returning anything.

// Summary -
// Arrow functions are used for small work, like one-liner functions or functions that return something in one line only or functions that have only one statement.



const printHelloWorld = () => {
    console.log("Hello World!");
};
printHelloWorld(); // Hello