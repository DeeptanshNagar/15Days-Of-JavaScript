// Method 1 :
// let marks = [85, 44, 97, 37, 76, 60]
// let sum = 0;
// for(let i = 0; i<marks.length; i++) {
//     sum = sum + marks[i];
// }

// console.log(sum);
// let avg = sum/marks.length;
// console.log(`average marks of the class is ${avg}.`); 

// Method 2 :
let marks = [85, 44, 97, 37, 76, 60];
let sum = 0;

for (let value of marks) {
    sum = sum + value;
}

let avg = sum/marks.length;
console.log(`average marks of the class is ${avg}.`);  // Output : average marks of the class is 66.5. 