// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// my original solution

function distinct(a) {
    return [...new Set(a)];
}

// what I learned from others' solutions

function distinct(a) {
    return Array.from(new Set(a)); // can also use Array.from instead of spread syntax to be more verbose
}