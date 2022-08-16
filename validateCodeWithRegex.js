// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

// my original solution

function validateCode(code) {
  return /^(1|2|3)\d+$/.test(code);
}

// what I learned from others' solutions

function validateCode(code) {
  return /^[1-3]/.test(code); // could be solved with a less particular solution
}
