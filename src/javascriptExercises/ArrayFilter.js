//Statement:Given an array of numbers, you must filter and get only the even numbers.
//Given the array [1, 2, 3, 4, 5, 6], you must return [2, 4, 6].
//Your task is to implement the function 'getEvenNumbers' which takes as argument an array of numbers and returns a new array with the even numbers.

function getEvenNumbers(numbers) {
    return numbers.filter((number) => number % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);