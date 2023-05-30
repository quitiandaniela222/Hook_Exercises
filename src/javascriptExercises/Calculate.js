//Statement:Given an array of numbers, calculate and return the sum of all the elements.
//Given the array [1, 2, 3, 4, 5], you should return 15.
function calculateSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


const numbers = [1, 2, 3, 4, 5];
const sum = calculateSum(numbers);
console.log(sum);