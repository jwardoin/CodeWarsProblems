// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// my original solution

function summation(num) {
    let count = 0
    for(let i = 1; i <= num; i++){
      count += i
    }
    return count
}

// what I learned from others' solutions

function summation(num) { // using the formula for summation - sometimes math is the answer!
    return num * (num + 1) / 2
}