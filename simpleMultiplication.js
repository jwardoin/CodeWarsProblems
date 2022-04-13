// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// my original solution

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}

// what I learned from others' solutions

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8); // even simpler - initialize multiplication and then put ternary in parenthese (if n % 2 returns true if number is odd and vice versa) to return value to multiply by
}