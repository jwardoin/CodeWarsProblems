// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// my original solution

function sortArray(array) {
  const odd = array.filter((n) => n % 2).sort((a, b) => a - b);
  const sortedArray = [];
  for (let i = 0, oddIndex = 0; i < array.length; i++) {
    if (array[i] % 2) {
      sortedArray.push(odd[oddIndex]);
      oddIndex++;
    } else {
      sortedArray.push(array[i]);
    }
  }
  return sortedArray;
}

// what I learned from others' solutions

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x)); // pulling the first element from odd array and adding it the return array
}
