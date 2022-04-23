// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// my original solution

function invert(array) {
    return array.map(a => -a)
 }

// what I learned from others' solutions

function invert(array) {
    return array.map(a => 0-a) // adding the 0 will ensure you avoid returning -0 in the case that the array contains a 0
 }