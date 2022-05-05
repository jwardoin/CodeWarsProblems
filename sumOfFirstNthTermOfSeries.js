// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// my original solution

function SeriesSum(n) {
    let cache = 0
    for (let i = 1; i <= n*3; i+=3) {
      cache += 1/i
    }
    return String(parseFloat(cache).toFixed(2))
  }

// what I learned from others' solutions

function SeriesSum(n) {
    let cache = 0
    for (let i = 0; i < n; i++) {
      cache += 1/ (3 * i + 1) // do the math without anything crazy going on in the loop syntax
    }
    return cache.toFixed(2) // this work too - toFixed() returns a string
  }