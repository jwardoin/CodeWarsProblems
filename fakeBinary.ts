// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// my original solution

export const fakeBin = (x:string):string => {
    return [...x].map(n => Number(n) > 4 ? "1" : "0").join("")
}

// what I learned from others' solutions

export const fakeBin2 = (x:string):string => {
    return x.replace(/\d/g, n => +n > 4 ? "1" : "0") // using replace with a regex that matches all digits and replacer function that performs ternary operator - unary operater to turn string to a number instead of Number()
}