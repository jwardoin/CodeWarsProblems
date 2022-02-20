// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


// Solutions


// my original solution

function maps(x){
    const arrayDoubled = []
    for (const num of x) {
      arrayDoubled.push(num * 2)
    }
    return arrayDoubled
  }



// what I learned from others' solutions

// function map(x) {
//     return x.map(e => e * 2)
// }
// OR
// const map = x => x.map(e => e*2)