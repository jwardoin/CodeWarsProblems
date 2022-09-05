// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// my original solution

function cubeOdd(arr) {
  if (arr.some((value) => typeof value === 'string')) return undefined;
  return arr.reduce((a, b) => (b % 2 ? b ** 3 + a : a), 0);
}
