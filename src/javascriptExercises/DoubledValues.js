//Given an array of numbers, double each number and return a new array with the doubled values.
//Your task is to implement the function 'doubleNumbers' which takes an array of numbers as an argument and returns a new array with each number doubled.

function doubleNumbers(numbers) {
    return numbers.map((number) => number * 2);
}

console.log(doubleNumbers([1, 2, 3])); 
console.log(doubleNumbers([-1, 5, 10]));