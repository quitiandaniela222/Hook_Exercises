
//Given an array of numbers, square each number and return a new array with the squared values.
//Your task is to implement the function 'squareNumbers' which takes an array of numbers as an argument and returns a new array with each number squared.

function squareNumbers(numbers) {
    return numbers.map(number => number ** 2);
}
console.log(squareNumbers([1, 2, 3]));
console.log(squareNumbers([-1, 5, 10]));