// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// my original solution

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return [];
    const posNegArray = [0, 0]
    input.forEach((x, i) => {
      if(x > 0) {
        posNegArray[0]++
      } else {
        posNegArray[1] += x
      }
    })  
    return posNegArray;
  }

// what I learned from others' solutions

function countPositivesSumNegatives(input) {
    return input && input.length ? // ternary operator checks if input is not null and has length
    [input.filter(p => p > 0).length, // filter by num > 0 and get the length for positive number count
    input.filter(n => n < 0).reduce((a, b) => a + b, 0)] // filter by num < 0, reduce to sum of all num less than 0
    : []; // if input is null OR has no length, ternary operator returns an empty array
}