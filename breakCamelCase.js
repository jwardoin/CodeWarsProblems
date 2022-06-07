// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// my original solution

function solution(string) {
    return string.split('').map(letter => letter.toUpperCase() === letter ? ' ' + letter : letter ).join('')   
}
   

// what I learned from others' solutions

function solution(string) {
    return(string.replace(/[A-Z]/g, ' $&')) // using replace with a regex for uppercase characters - using $& to input the matched charater into a string with a space
}