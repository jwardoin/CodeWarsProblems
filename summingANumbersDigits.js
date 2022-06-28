// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// my original solution

function sumDigits(number) {
    return number.toString().split('').reduce((a,b) => {
        if(b === "-") {
            return a += 0
        } else {
            return a += Number(b)
        }
    }, 0)
}

// what I learned from others' solutions

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return a + +b}, 0) // Math.abs to handle for negative - unary operator instead of Number()
  }