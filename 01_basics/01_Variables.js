const accountId = 144553;  // const is used for variables that should not be reassigned
let accountEmail = "hitesh@google.com";  // let is used for block-scoped variables that can be reassigned
var accountPassword = "12345";  // var is function-scoped and should be avoided in favor of let or const

let accountCity = "Jaipur";  // Corrected: use let to declare accountCity

let accountState;  // declared but not initialized

// accountId = 2  // This line is commented out because reassigning a const variable will cause an error

accountEmail = "dn@dn.com";  // reassigning the let variable is allowed
accountPassword = "21212121";  // reassigning the var variable is allowed
accountCity = "Bengaluru";  // reassigning the let variable is allowed

console.log(accountId);  // logging the constant variable

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
