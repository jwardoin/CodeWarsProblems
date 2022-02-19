// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// Solution

// my original solution
function sumArray(array) {
    if (array === null || array === undefined || array.length < 2 ) {
      return 0
    }
    let highestValue = -Infinity
    let lowestValue = Infinity
    let arraySum = 0
    for (let i = 0; i < array.length; i++) {
      arraySum += array[i]
      if (array[i] > highestValue) {
        highestValue = array[i]
      }
      if (array[i] < lowestValue) {
        lowestValue = array[i]
      }
    }
    return arraySum - highestValue - lowestValue
  }

// what I learned from others' solutions

// const sumArray = array => array.sort((first, last) => first - last).slice(1,-1).reduce((a, b) => a + b)