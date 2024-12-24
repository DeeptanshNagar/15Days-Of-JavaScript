function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase(); // Ensure character is lowercase to handle uppercase vowels
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}

let vowels = countVowels('deeptansh'); // 3
console.log(vowels); // 3


// Same Task Using arrow function -
const countVowels2 = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase(); // Ensure character is lowercase to handle uppercase vowels
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}

let vowels2 = countVowels2('deeptansh'); // 3
console.log(vowels2); // 3
