// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// my original solution

const sumMix = x => x.reduce((a,b)=>a+Number(b),0)

// what I learned from others' solutions

const sumMix2 = x => x.reduce((a,b)=>+b+a,0) // add a + before each value to change it to an integer - less readable but kind of slick