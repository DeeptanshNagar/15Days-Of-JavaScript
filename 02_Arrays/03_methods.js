// console.log("hello!");

// "abc".toUpperCase()

// [1,2,3].push(4);

// here log, Uppercase, push are methods or functions which all are called when needed.

// functions are used to reduce the redundancy of code and make it reusable, we can call the function as many times as we want.
function myFunction() {
    console.log("Welcome to Apna College!");
    console.log("We are learning JS :)");
    
}

// myFunction(); // calling the function
// myFunction(); // calling the function again.
 

function myFunction2(msg) {  // msg is a input parameter here.
    console.log(msg);        // Output - Hello World!
}

// myFunction2("Hello World!"); // argument is passed here. 


function myFunction3(msg, n) {  // msg is a input parameter here.
    console.log(msg*n);         // NaN
}

// myFunction3("Hello World!", 100); // argument is passed here. 



// *****FUNCTION TO CALCULATE SUM OF TWO NUMBERS*****

// method 1 - using console.log
function sum(a, b) {
    console.log(a+b);
}
sum(5, 10); // 15


// method 2 - using return statement 
function sum2(a, b) {
    // x and y are local variables.
    s = a + b;
    console.log("before return"); // this line will be executed.

    console.log(x); // Local variables x is only accessible inside the function body.
    console.log(y); // Local variable y is only accessible inside the function body.
    
    
    return s;
    console.log("after return"); // this line will not be executed.  
    
}

let val = sum2(235, 1230);
console.log(x); // ReferenceError: x variable can't be accessed outside the function body.
console.log(y); // ReferenceError: y variable can't be accessed outside the function body.
console.log(val); // 1465 

// function parameters are local variables, they are only accessible inside the function block scope.