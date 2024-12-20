/*JavaScript is a dynamically typed language.
Explanation:
Dynamic typing:
In JavaScript, the type of a variable is determined at runtime, not at compile time. This means you don't need to explicitly declare the type of a variable when you create it.*/
// Example :- 
// const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);   // False

const bigNumber = 343666666666664646n



// Primitive
// 7 types : String, Number, Boolean, Null(empty), Undefined, Symbol, BigInt


// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "diptansh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);     //bigint
// console.log(typeof myFunction);    //Function
// console.log(typeof heros);         //Object
// console.log(typeof id);            //Symbol
// console.log(typeof anotherId);     //Symbol



// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive) 

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename      // here we are making a copy of anothername and storing the value of myYoutubename to it, thus we are making changes to its copy, hence not making any changes to the original one.
anothername = "chaiaurcode"

console.log(myYoutubename);      // hiteshchoudharydotcom
console.log(anothername);        // chaiaurcode

let userOne = {                  // Initialized in stack and pointing the values in Heap.                                
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne           // Both variables are stored in Stack and pointing the same value in Heap.

userTwo.email = "hitesh@google.com"

console.log(userOne.email);    // hitesh@google.com
console.log(userTwo.email);    // hitesh@google.com