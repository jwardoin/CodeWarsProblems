
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// my original solution

function opposite(number) {
    return number > 0 ? (-number * 2) + number : (number * -2 ) + number
    }

// what I learned from others' solutions

function opposite(number) {
    return(-number); // you can just return your argument as a negative and it will always return the opposite
  }