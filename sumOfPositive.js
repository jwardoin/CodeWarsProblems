// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// my original solution

function positiveSum(arr) {
    return arr.reduce((a,b)=> b >= 0 ? a + b : a + 0, 0)
}

// what I learned from others' solutions

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b >= 0 ? b : 0), 0) // same as above but more DRY
}