//Statement:Given an array of words, you should filter and get only the words that are longer than 5 characters.
//Example: Given the array ["apple", "dog", "program", "cat"], you must return ["apple", "program"].
//Your task is to implement the function 'getLongWords' that takes as argument an array of words and returns a new array with the words that are longer than 5 characters.

function getLongWords(words) {
    return words.filter((word) => word.length > 5);
}

const words = ["apple", "dog", "programming", "cat"];
const longWords = getLongWords(words);
console.log(longWords);