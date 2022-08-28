// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// my original solution

function rowWeights(array) {
  let [t1, t2] = [0, 0];
  array.forEach((n, i) => (i % 2 === 0 ? (t1 += n) : (t2 += n)));
  return [t1, t2];
}

// what I learned from others' solutions

function rowWeights(array) {
  return array.reduce((a, b, i) => ((a[i % 2] += b), a), [0, 0]);
}
