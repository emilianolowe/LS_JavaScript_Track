// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

// arr sort() DESC values, modifying OG array.

arr.sort((a, b) => b - a);

console.log(arr);
