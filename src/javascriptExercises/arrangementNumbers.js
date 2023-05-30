//Given an array of numbers, you must create a new array containing the squares of the original numbers.
// Given the array [1, 2, 3, 4, 5], you must return [1, 4, 9, 16, 25].
//const squares = getSquares(numbers);

function getSquares(numbers) {
    return numbers.map((number) => number ** 2);
}

const numbers = [1, 2, 3, 4, 5];
const squares = getSquares(numbers);
console.log(squares);