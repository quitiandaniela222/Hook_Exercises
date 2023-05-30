//Given a number, check if it is positive. If it is, return "Positive", otherwise return "Negative".
//Your task is to implement the function 'checkNumber' which takes a number as an argument and returns a string indicating whether the number is positive or negative.

function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));