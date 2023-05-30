Statement:
//Given an array of numbers, find and return the maximum number.
//Given the array [7, 2, 9, 5, 1], you should return 9.

function findMaximumNumber(numbers) {
    return Math.max(...numbers);
}


const numbers = [7, 2, 9, 5, 1];
const maximumNumber = findMaximumNumber(numbers);
console.log(maximumNumber); 