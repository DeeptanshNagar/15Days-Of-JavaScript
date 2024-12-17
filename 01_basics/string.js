const name = "Diptansh"
const repoCount = 25

// console.log(name + repoCount + " Value");   // Old fashioned method to-do.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);        // Hello my name is diptansh and my repo count is 25.

// Declaration of String
const gameName = new String('diptansh-vc')

console.log(gameName[0]); // d
console.log(gameName[1]); // i
console.log(gameName[2]); // p
console.log(gameName[3]); // t
console.log(gameName[4]); // a
console.log(gameName[5]); // n
console.log(gameName[6]); // s
console.log(gameName[7]); // h
console.log(gameName[8]); // -
console.log(gameName[9]); // v
console.log(gameName[10]); // c

console.log(gameName.__proto__); // collections of various methods.

console.log(gameName.toUpperCase()); // DIPTANSHVC
console.log(gameName.charAt(2));     // p
console.log(gameName.indexOf('t'));  // 3
console.log(gameName.substring(2, 8));  // ptans


// Slicing
const newString = gameName.substring(0, 4)    // The value at index 4 won't be included.
                                              // User can't give Negative start, end index value in brackets. 
console.log(newString);                       // dipt

const anotherString = gameName.slice(-1, 4);
console.log(anotherString);                  // ipt



// Trim & Replace
const newStringOne = "     diptansh     "
console.log(newStringOne);       
console.log(newStringOne.trim());

const url = "https://diptansh.com/diptansh%20nagar"
console.log(url.replace('%20', '-'));               // https://diptansh.com/diptansh-nagar
console.log(url.includes('diptansh'));              // true
 
console.log(gameName.split('-'))                    // [ 'diptansh', 'vc' ]
 

/*

++++++ STRING METHODS ++++++

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/
