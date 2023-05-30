//Given an array of numbers, calculate and return the average of all the elements.
//Given the array [2, 4, 6, 8, 10], you should return 6.
function calculateAverage(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}
const numbers = [2, 4, 6, 8, 10];
const average = calculateAverage(numbers);
console.log(average);