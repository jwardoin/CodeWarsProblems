// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// my original solution

function squareSum(numbers){
    let numSumSqr = 0
    for (let num of numbers) {
      numSumSqr += num ** 2
    }
    return numSumSqr
  }


// what I learned from others' solutions

// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
//   }