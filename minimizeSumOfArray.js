// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product

// my original solution

function minSum(arr) {
  const sorted = arr.sort((a, b) => a - b); // sorting mutates the original array
  let result = 0;
  while (sorted.length) {
    result += sorted.shift() * sorted.pop();
  }
  return result;
}

// what I learned from others' solutions

function minSum(arr) {
  return arr.sort((a, b) => a - b).reduce((a, b) => a + b * arr.pop(), 0);
}
