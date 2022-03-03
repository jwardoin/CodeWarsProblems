// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


// my original solution

function minMax(arr){
    return arr.length > 1 ? arr.sort((a,b) => a - b).filter((a, b, arr) => a === arr[0] || a === arr[arr.length - 1]) : [arr[0], arr[0]]
  }

// what I learned from others' solutions

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  } // using Math object with .min and .max methods would be far cleaner - ellipses or spread syntax allow us to pass all of the elements in the array as arguments 