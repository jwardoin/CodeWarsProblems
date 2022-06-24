// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// my original solution

function reverseWords(str) {
    return str.split(" ").map(word => [...word].reverse().join("")).join(" ")
}

// what I learned from others' solutions

function reverseWords(str) {
    return str.replace(/\S+/g, word => [...word].reverse().join("")) // \S+ in regex matches all non-spaces(entire words up to spaces), then the second argument of replace splits, reverses, joins, and returns the reversed word in the original word's place
}