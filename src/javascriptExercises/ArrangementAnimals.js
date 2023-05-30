// Statement:Given an array of words, you must create a new array containing the length of each word.
/*const words = ["dog", "cat", "elephant"];
const lengths = getLengths(words);
console.log(lengths); // Output: [5, 4, 8]*/

function getLengths(words) {
    return words.map((word) => word.length);
}


const words = ["dog", "cat", "elephant"];
const lengths = getLengths(words);
console.log(lengths);