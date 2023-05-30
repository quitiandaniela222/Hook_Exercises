//Given an array of strings, filter and return only the strings that have a length greater than 3.
//Your task is to implement the function 'filterLongStrings' which takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 3.
function filterLongStrings(strings) {
    return strings.filter((string) => string.length > 3);
}

console.log(filterLongStrings(["cat", "apple", "tree", "dog"]));
console.log(filterLongStrings(["one", "two", "four"])); 