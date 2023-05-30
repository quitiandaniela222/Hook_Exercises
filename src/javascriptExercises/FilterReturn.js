//Statement:Given an array of strings, filter and return only the strings that start with the letter 'A'.

//Given the array ['Apple', 'Banana', 'Avocado', 'Orange'], you should return ['Apple', 'Avocado'].

function filterStringsStartingWithA(strings) {
    return strings.filter((string) => string.startsWith('A'));
}

const fruits = ['Apple', 'Banana', 'Avocado', 'Orange'];
const filteredFruits = filterStringsStartingWithA(fruits);
console.log(filteredFruits);