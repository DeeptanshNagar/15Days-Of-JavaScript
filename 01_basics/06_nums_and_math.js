const score = 400;
console.log(score); // 400

const balance = new Number(1000); // explicitly way to define a number by creating an object of Number class.
console.log(balance); // [Number: 1000]

console.log(balance.toString()); // 1000 (converted to string, hence the number also has properties of string)

console.log(balance.toString().length); // 4 (length of the string)

// Note: Number has comparatively less prototype properties (methods) than String

// Methods with examples:
console.log(balance.toString()); // This converts a number into string
console.log(balance.toString().length); // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
console.log(balance.toFixed(2)); // Used to reduce or round off to specific decimal values
    // - Use Cases 
    //     a. After calculation of GST
    //     b. In Ecommerce website

let otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // Output - 23.9
otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // Output - 124    
otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(3)); // Output - 1.12e+3 (exponential value)

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // (1,000,000) By default it converts into US standards
console.log(hundreds.toLocaleString('en-IN')); // (10,00,000) As per Indian Standards
// (Note: Check other formats in MDN Docs)

// 6. Other methods
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// ----- Maths in JS ----
// Maths library comes along with JS

// Methods ----
console.log(Math.abs(-5)); // Converts +ve / -ve integer values to positive
console.log(Math.round(4.3)); // Output - 4
console.log(Math.round(4.6)); // Output - 5
console.log(Math.ceil(4.2)); // Output - 5 (gives top value)
console.log(Math.floor(4.9)); // Output - 4 (gives bottom value)
console.log(Math.min(4, 3, 6, 8)); // Output - 3
console.log(Math.max(4, 3, 6, 8)); // Output - 8
console.log(Math.random()); // Gives random value between 0 & 1 in decimals

// Math.random() tricks -----
console.log(Math.random() * 10); // Gives random value between 0 and 10
console.log(Math.random() * 10 + 1); // This assures that values are at least 1 & more than 1
console.log((Math.random() * 10) + 1); // To avoid any BODMAS rule miscalculation
console.log(Math.floor(Math.random() * 10) + 1); // to get the smallest integer value between 1 and 10.

// ---- Trick to randomize value between range ----
const min = 10;
const max = 20;
const randomValue = Math.floor((Math.random() * (max - min + 1)) + min);
console.log(randomValue); // This will log a random value between 10 and 20