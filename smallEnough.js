// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// my original solution

function smallEnough(a, limit){
    return !a.some(e => e > limit)
}

// what I learned from others' solutions

function smallEnough(a, limit){
    return a.every(e => e <= limit) // probably the actual best choice for method to use - does the same as solution above but without the need for the ! NOT operator
}