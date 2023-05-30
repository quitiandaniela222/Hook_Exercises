//Given an array of names, convert each name to uppercase and return a new array with the uppercase names.
//Your task is to implement the function 'convertToUppercase' which takes an array of names as an argument and returns a new array with each name converted to uppercase.

function convertToUppercase(names) {
    return names.map(name => name.toUpperCase());
}

console.log(convertToUppercase(['john', 'amy', 'jacob']));
console.log(convertToUppercase(['emma', 'liam', 'sophia']));