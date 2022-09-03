// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// my original solution

function findLongest(array) {
  return array.reduce((a, b) => (`${a}`.length < `${b}`.length ? b : a), 0);
}

// what I learned from others' solutions
