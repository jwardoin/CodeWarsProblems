// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// my original solution

// recursive
function sumCubes(n) {
  if (n === 1) return 1;
  return n ** 3 + sumCubes(n - 1);
}

// iterative
function sumCubes(n) {
  return Array.from({ length: n }, (_, i) => (n - i) ** 3).reduce(
    (a, b) => a + b,
    0
  );
}

// what I learned from others' solutions

function sumCubes(n) {
  // O(1) mathematic solution
  return ((n * (n + 1)) / 2) ** 2;
}
