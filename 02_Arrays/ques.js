// for of loop
let items = [250, 400, 500, 600, 750];

// method 1 :
// let i = 0;
// for (let val of items) {
//     console.log(`value at index ${i} is ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`After discount, the value is ${items[i]}`);
//     i++;
// }


// method 2 :
for (let i = 0; i < items.length; i++) {
    console.log(`value at index ${i} is ${items[i]}`);
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log(`After discount, the value is ${items[i]}`);
}

console.log(items); // Output : [225, 360, 450, 540, 675]
