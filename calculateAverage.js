// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



// my original solution

function find_average(array) {
    if (array.length === 0) return 0
    let arraySum = 0
    for (const num of array) {
      arraySum += num
    }
    return arraySum / array.length
}



// what I learned from others' solutions

// const find_average = a => a.length === 0 ? 0 : a.reduce((a,b) => a+b)/a.length 