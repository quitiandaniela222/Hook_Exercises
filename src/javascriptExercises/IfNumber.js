//Statement:Given a number, check if it is even or odd. If the number is even, return "Even", otherwise return "Odd".
//Your task is to implement the function 'checkEvenOdd' which takes a number as an argument and returns the corresponding string indicating whether the number is even or odd.

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(checkEvenOdd(4)); 