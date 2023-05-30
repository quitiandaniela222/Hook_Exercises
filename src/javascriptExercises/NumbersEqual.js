//Given two numbers, return the larger number. If the numbers are equal, return "Numbers are equal".
//Your task is to implement the function 'getLargerNumber' which takes two numbers as arguments and returns the larger number or the string "Numbers are equal" if the numbers are equal.

function getLargerNumber(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else {
        return "Numbers are equal";
    }
}

console.log(getLargerNumber(5, 10));
console.log(getLargerNumber(7, 7));