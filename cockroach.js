// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// my original solution

function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600)
}

// what I learned from others' solutions

function cockroachSpeed(s) {
    return Math.floor(s / 0.036) // same result, different math
}