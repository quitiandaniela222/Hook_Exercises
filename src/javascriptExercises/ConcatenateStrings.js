//Statement:Given an array of strings, concatenate all the strings into a single string and return it.
//Given the array ['Hello', 'World', '!'], you should return 'HelloWorld!'.

function concatenateStrings(strings) {
    return strings.join('');
}

const strings = ['Hello', 'World', '!'];
const concatenatedString = concatenateStrings(strings);
console.log(concatenatedString);