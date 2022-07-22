// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// my original solution

function position(letter){
    return `Position of alphabet: ${'abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1}` // indexOf is O(n) linear time
}

// what I learned from others' solutions

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt() - 96}` // ASCII Math - O(1) constant time
}
