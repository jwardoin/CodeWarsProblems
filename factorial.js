// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// my original solution

function factorial(n){
    if(!n) return 1
    let factorial = n
    for(let i = n - 1; i >= 1; i--) {
      factorial *= i
    }
    if (n <= 12 && n >= 0){
        return factorial
    } else {
      throw new RangeError('Input must be no less than 0 and no more than 12')
    }  
}