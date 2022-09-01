// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// my original solution

function adjacentElementsProduct(array) {
  let max = -Infinity;
  for (let i = 1; i <= array.length; i++) {
    const adjNums = array[i] * array[i - 1];
    if (adjNums > max) max = adjNums;
  }
  return max;
}
